import React from 'react';
import { Plus, Heart, SlidersHorizontal, Check } from 'lucide-react';
import { MenuItem, Currency, Language } from '../types';
import { formatPrice } from '../utils/format';
import { CATEGORY_DEFAULT_IMAGES, LUXURY_EMPADA_SINGLE } from '../data/menu';

interface ProductCardProps {
  item: MenuItem;
  currency: Currency;
  language: Language;
  onOpenDetails: (item: MenuItem) => void;
  onQuickAdd: (item: MenuItem) => void;
  isFavorite: boolean;
  onToggleFavorite: (itemId: string) => void;
  cartQuantity: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  item,
  currency,
  language,
  onOpenDetails,
  onQuickAdd,
  isFavorite,
  onToggleFavorite,
  cartQuantity,
}) => {
  const isPt = language === 'pt';
  const hasOptions = item.options && item.options.length > 0;
  const displayImage = item.image || CATEGORY_DEFAULT_IMAGES[item.categoryId] || LUXURY_EMPADA_SINGLE;

  return (
    <div className="group relative flex flex-col bg-white border border-[#e8dfd5] rounded-2xl overflow-hidden luxury-card-shadow luxury-card-hover">
      {/* Visual Asset Container */}
      <div className="relative aspect-4/3 w-full bg-[#f4eee6] overflow-hidden">
        <img
          src={displayImage}
          alt={item.name[language]}
          className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
          onError={(e) => {
            const target = e.currentTarget;
            if (target.src !== LUXURY_EMPADA_SINGLE) {
              target.src = LUXURY_EMPADA_SINGLE;
            }
          }}
        />

        {/* Subtle Luxury Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10 opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Favorite Heart Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(item.id);
          }}
          className="absolute top-3 right-3 p-2 rounded-full bg-[#19120e]/60 backdrop-blur-md border border-white/20 text-[#f7e6d0] hover:text-[#d4af37] hover:bg-[#19120e]/90 shadow-xs transition-colors cursor-pointer"
          title={isPt ? 'Favoritar' : 'Guardar favorito'}
          aria-label="Favorito"
        >
          <Heart
            className={`w-3.5 h-3.5 transition-colors ${
              isFavorite ? 'fill-[#d4af37] text-[#d4af37]' : 'text-white/80'
            }`}
          />
        </button>

        {/* Refined Gold/Dark Luxury Badge */}
        {item.highlightBadge && (
          <div className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#fcefdc] bg-[#19120e]/90 backdrop-blur-md border border-[#c59b6d]/60 rounded-md shadow-xs">
            ✨ {item.highlightBadge[language]}
          </div>
        )}

        {/* In-cart indicator badge */}
        {cartQuantity > 0 && (
          <div className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold bg-[#19120e] text-[#f7e6d0] border border-[#c59b6d]/50 rounded-lg shadow-sm">
            <Check className="w-3.5 h-3.5 text-[#d4af37]" />
            <span className="font-mono">{cartQuantity}x no pedido</span>
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="flex flex-col flex-1 p-5 sm:p-6 bg-[#fffefd]">
        {/* Unboxed Tracked Metadata Header (Zero-Pill Discipline) */}
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#a8825c] mb-2 font-semibold">
          {item.subCategory && <span>{item.subCategory}</span>}
          {item.subCategory && <span aria-hidden="true" className="text-[#c59b6d]">·</span>}
          {item.isVegetarian && <span>🌱 {isPt ? 'Vegetariano' : 'Vegetariano'}</span>}
          {item.isGlutenFree && <span>🌾 {isPt ? 'Sem Glúten' : 'Sin Gluten'}</span>}
          {item.serves && <span>👥 {item.serves}</span>}
          {!item.subCategory && !item.isVegetarian && <span>Receita Exclusiva</span>}
        </div>

        {/* Title */}
        <h3 className="font-serif text-lg sm:text-xl font-extrabold text-[#19120e] group-hover:text-[#9d774a] transition-colors leading-snug line-clamp-1 mb-2">
          {item.name[language]}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-[#665447] line-clamp-2 leading-relaxed mb-5 flex-1 font-light">
          {item.description[language]}
        </p>

        {/* Footer: Price & Action */}
        <div className="flex items-center justify-between pt-4 border-t border-[#f2ebe2] gap-2">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-wider text-[#9e8876] font-medium">
              {isPt ? 'Valor' : 'Precio'}
            </span>
            <span className="font-mono text-base sm:text-lg font-extrabold tabular-nums text-[#19120e]">
              {formatPrice(item.price, currency)}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            {hasOptions ? (
              <button
                onClick={() => onOpenDetails(item)}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#19120e] bg-[#f5ede2] hover:bg-[#ebdcc8] hover:text-[#9d774a] border border-[#ded1be] active:scale-98 rounded-xl transition-all cursor-pointer"
              >
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#9d774a]" />
                <span>{isPt ? 'Personalizar' : 'Personalizar'}</span>
              </button>
            ) : (
              <button
                onClick={() => onQuickAdd(item)}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#19120e] hover:bg-[#9d774a] active:scale-98 rounded-xl shadow-xs transition-all cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5 text-[#f7e6d0]" />
                <span>{isPt ? 'Adicionar' : 'Agregar'}</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
