import React, { useState, useEffect } from 'react';
import { X, Plus, Minus, Check, ShoppingBag } from 'lucide-react';
import { MenuItem, Currency, Language, CartItem } from '../types';
import { formatPrice } from '../utils/format';
import { CATEGORY_DEFAULT_IMAGES, SHOWCASE_EMPADAS } from '../data/menu';

interface ProductModalProps {
  item: MenuItem | null;
  isOpen: boolean;
  onClose: () => void;
  currency: Currency;
  language: Language;
  onAddToCart: (cartItem: CartItem) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  item,
  isOpen,
  onClose,
  currency,
  language,
  onAddToCart,
}) => {
  if (!isOpen || !item) return null;

  const isPt = language === 'pt';
  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [addedAnimation, setAddedAnimation] = useState(false);

  // Initialize options with first choices
  useEffect(() => {
    if (item?.options) {
      const initial: Record<string, string> = {};
      item.options.forEach((opt) => {
        if (opt.choices.length > 0) {
          initial[opt.name[language]] = opt.choices[0].name[language];
        }
      });
      setSelectedOptions(initial);
    } else {
      setSelectedOptions({});
    }
    setQuantity(1);
    setSpecialInstructions('');
    setAddedAnimation(false);
  }, [item, language]);

  // Calculate unit price including options deltas
  let calculatedUnitPrice = item.price;
  if (item.options) {
    item.options.forEach((opt) => {
      const chosenChoiceName = selectedOptions[opt.name[language]];
      const foundChoice = opt.choices.find((c) => c.name[language] === chosenChoiceName);
      if (foundChoice?.priceDelta) {
        calculatedUnitPrice += foundChoice.priceDelta;
      }
    });
  }

  const totalPrice = calculatedUnitPrice * quantity;

  const handleAdd = () => {
    // Generate unique ID based on item and chosen options
    const optionsHash = Object.entries(selectedOptions)
      .map(([k, v]) => `${k}:${v}`)
      .sort()
      .join('|');
    const cartItemId = `${item.id}-${optionsHash}-${specialInstructions.trim()}`;

    const cartItem: CartItem = {
      cartItemId,
      productId: item.id,
      name: item.name[language],
      unitPrice: calculatedUnitPrice,
      quantity,
      selectedOptions: Object.keys(selectedOptions).length > 0 ? selectedOptions : undefined,
      specialInstructions: specialInstructions.trim() || undefined,
      image: item.image || CATEGORY_DEFAULT_IMAGES[item.categoryId],
    };

    onAddToCart(cartItem);
    setAddedAnimation(true);
    setTimeout(() => {
      onClose();
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#e8e2d9] z-10 my-8">
        {/* Header with image */}
        <div className="relative h-48 sm:h-56 bg-[#f4eee6] overflow-hidden">
          <img
            src={item.image || CATEGORY_DEFAULT_IMAGES[item.categoryId] || SHOWCASE_EMPADAS}
            alt={item.name[language]}
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              const target = e.currentTarget;
              if (target.src !== SHOWCASE_EMPADAS) {
                target.src = SHOWCASE_EMPADAS;
              }
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title on image */}
          <div className="absolute bottom-4 left-5 right-5 text-white">
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d4af37] mb-1">
              {item.subCategory || 'Bett’s Haute Gastronomie'}
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-extrabold leading-tight">
              {item.name[language]}
            </h2>
          </div>
        </div>

        {/* Body content */}
        <div className="p-6 space-y-6 max-h-[60vh] overflow-y-auto">
          {/* Description */}
          <p className="text-xs sm:text-sm text-[#5c4a3e] leading-relaxed font-light">
            {item.description[language]}
          </p>

          {/* Options groups */}
          {item.options &&
            item.options.map((opt, optIndex) => (
              <div key={optIndex} className="space-y-3">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#19120e]">
                  {opt.name[language]} <span className="text-[#c59b6d]">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {opt.choices.map((choice, choiceIdx) => {
                    const isSelected =
                      selectedOptions[opt.name[language]] === choice.name[language];
                    return (
                      <button
                        key={choiceIdx}
                        type="button"
                        onClick={() =>
                          setSelectedOptions((prev) => ({
                            ...prev,
                            [opt.name[language]]: choice.name[language],
                          }))
                        }
                        className={`flex items-center justify-between p-3.5 rounded-xl border text-xs sm:text-sm font-medium transition-all text-left cursor-pointer ${
                          isSelected
                            ? 'border-[#c59b6d] bg-[#fdf9f4] text-[#19120e] shadow-2xs font-semibold'
                            : 'border-[#ded7cb] text-[#4a3b31] hover:border-[#c59b6d]/60'
                        }`}
                      >
                        <span>{choice.name[language]}</span>
                        {choice.priceDelta ? (
                          <span className="font-mono text-xs font-bold text-[#c59b6d]">
                            +{formatPrice(choice.priceDelta, currency)}
                          </span>
                        ) : null}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}

          {/* Special instructions */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#19120e] mb-2">
              {isPt ? 'Instruções Especiais / Observações' : 'Instrucciones Especiales / Notas'}
            </label>
            <textarea
              rows={2}
              value={specialInstructions}
              onChange={(e) => setSpecialInstructions(e.target.value)}
              placeholder={
                isPt
                  ? 'Ex: Sem cebola, bem quente, embalar para presente...'
                  : 'Ej: Sin cebolla, bien caliente, para regalo...'
              }
              className="w-full p-3 text-xs sm:text-sm bg-[#faf7f2] border border-[#ded7cb] rounded-xl text-[#2a2420] focus:ring-1 focus:ring-[#c59b6d] focus:border-[#c59b6d] focus:outline-hidden"
            />
          </div>

          {/* Quantity stepper */}
          <div className="flex items-center justify-between pt-2 border-t border-[#f0ebe1]">
            <span className="text-xs font-bold uppercase tracking-wider text-[#19120e]">
              {isPt ? 'Quantidade' : 'Cantidad'}
            </span>
            <div className="flex items-center gap-3 bg-[#f0ebe1] rounded-xl p-1">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[#19120e] hover:bg-[#e2dacb] transition-colors cursor-pointer"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="font-mono text-sm font-bold w-6 text-center text-[#19120e]">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[#19120e] hover:bg-[#e2dacb] transition-colors cursor-pointer"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Footer with Subtotal & Add Button */}
        <div className="p-6 bg-[#faf7f2] border-t border-[#e8dfd5] flex items-center justify-between gap-4">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-wider text-[#8c7465] font-semibold">
              {isPt ? 'Subtotal' : 'Subtotal'}
            </span>
            <span className="font-mono text-xl sm:text-2xl font-extrabold text-[#19120e]">
              {formatPrice(totalPrice, currency)}
            </span>
          </div>

          <button
            onClick={handleAdd}
            disabled={addedAnimation}
            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold text-white bg-[#19120e] hover:bg-[#9d774a] active:scale-98 rounded-xl shadow-md transition-all cursor-pointer border border-[#c59b6d]/40"
          >
            {addedAnimation ? (
              <>
                <Check className="w-5 h-5 text-[#d4af37]" />
                <span>{isPt ? 'Adicionado com Sucesso!' : '¡Agregado con Éxito!'}</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4 text-[#f7e6d0]" />
                <span>{isPt ? 'Adicionar ao Pedido' : 'Agregar al Pedido'}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
