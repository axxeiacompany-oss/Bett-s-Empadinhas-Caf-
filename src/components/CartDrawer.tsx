import React, { useState } from 'react';
import {
  X,
  Plus,
  Minus,
  Trash2,
  Send,
  Copy,
  Check,
  ShoppingBag,
  Store,
  Bike,
  UtensilsCrossed,
} from 'lucide-react';
import { CartItem, Currency, Language, CustomerOrderInfo, StoreConfig } from '../types';
import { formatPrice, buildWhatsAppMessage, openWhatsAppOrder } from '../utils/format';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (cartItemId: string, newQty: number) => void;
  onRemoveItem: (cartItemId: string) => void;
  onClearCart: () => void;
  currency: Currency;
  language: Language;
  config: StoreConfig;
  onOrderSuccess: (orderInfo: CustomerOrderInfo, totalPyg: number) => void;
  onViewReceipt: (orderInfo: CustomerOrderInfo) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  currency,
  language,
  config,
  onOrderSuccess,
  onViewReceipt,
}) => {
  if (!isOpen) return null;

  const isPt = language === 'pt';

  const [customerInfo, setCustomerInfo] = useState<CustomerOrderInfo>({
    customerName: '',
    customerPhone: '',
    orderType: 'delivery',
    deliveryAddress: '',
    tableNumber: '',
    paymentMethod: 'efectivo',
    notes: '',
  });

  const [copied, setCopied] = useState(false);

  const subtotalPyg = items.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0);
  const deliveryFee = customerInfo.orderType === 'delivery' ? config.defaultDeliveryFeePyg : 0;
  const grandTotalPyg = subtotalPyg + deliveryFee;

  const handleCopy = () => {
    const text = buildWhatsAppMessage(
      items,
      customerInfo,
      subtotalPyg,
      currency,
      language,
      config.storeName,
      deliveryFee
    );
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendWhatsApp = () => {
    openWhatsAppOrder(
      items,
      customerInfo,
      subtotalPyg,
      currency,
      language,
      config.whatsappPhone,
      config.storeName,
      deliveryFee
    );
    onOrderSuccess(customerInfo, grandTotalPyg);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#faf8f5] shadow-2xl flex flex-col border-l border-[#e8e2d9]">
          {/* Header */}
          <div className="p-5 border-b border-[#e8e2d9] bg-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#8c2d19]" />
              <h2 className="font-serif text-xl font-bold text-[#241a15]">
                {isPt ? 'Meu Pedido' : 'Mi Pedido'}
              </h2>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#f0ebe1] text-[#735e50]">
                {items.reduce((acc, i) => acc + i.quantity, 0)} {isPt ? 'itens' : 'ítems'}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-[#735e50] hover:text-[#241a15] hover:bg-[#f0ebe1] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-5 space-y-6">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#f0ebe1] flex items-center justify-center text-[#8c7465]">
                  <ShoppingBag className="w-8 h-8 opacity-60" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#3d271d]">
                  {isPt ? 'Seu carrinho está vazio' : 'Tu carrito está vacío'}
                </h3>
                <p className="text-xs text-[#735e50] max-w-xs mx-auto">
                  {isPt
                    ? 'Explore nossas deliciosas empadas, cafés especiais, salgadinhos e doces para começar seu pedido.'
                    : 'Explora nuestras deliciosas empadas, cafés especiales, bocaditos y dulces para iniciar tu pedido.'}
                </p>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 text-xs font-semibold text-white bg-[#8c2d19] rounded-xl hover:bg-[#722312] transition-colors cursor-pointer"
                >
                  {isPt ? 'Ver Cardápio' : 'Ver Catálogo'}
                </button>
              </div>
            ) : (
              <>
                {/* Items List */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#8c7465]">
                    <span className="font-semibold uppercase tracking-wider">
                      {isPt ? 'Itens Selecionados' : 'Ítems Seleccionados'}
                    </span>
                    <button
                      onClick={onClearCart}
                      className="text-[#8c2d19] hover:underline cursor-pointer"
                    >
                      {isPt ? 'Limpar carrinho' : 'Vaciar carrito'}
                    </button>
                  </div>

                  {items.map((item) => (
                    <div
                      key={item.cartItemId}
                      className="p-3 bg-white rounded-2xl border border-[#e8e2d9] shadow-xs flex flex-col gap-2.5"
                    >
                      <div className="flex items-start gap-3">
                        {item.image && (
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-13 h-13 rounded-xl object-cover shrink-0 border border-[#ede5db] bg-[#f7f3ee]"
                            loading="lazy"
                          />
                        )}
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-sm text-[#241a15] leading-snug line-clamp-2">
                            {item.name}
                          </h4>
                          {/* Options selected */}
                          {item.selectedOptions && (
                            <div className="text-xs text-[#8c7465] mt-1 space-y-0.5">
                              {Object.entries(item.selectedOptions).map(([key, val]) => (
                                <div key={key} className="truncate">
                                  <span className="font-medium">{key}:</span> {val}
                                </div>
                              ))}
                            </div>
                          )}
                          {item.specialInstructions && (
                            <div className="text-xs text-[#8c2d19] italic mt-1 truncate">
                              Obs: {item.specialInstructions}
                            </div>
                          )}
                        </div>

                        <button
                          onClick={() => onRemoveItem(item.cartItemId)}
                          className="text-[#b59f8e] hover:text-[#8c2d19] p-1 transition-colors cursor-pointer shrink-0"
                          title="Remover"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-[#f5efe6]">
                        {/* Stepper */}
                        <div className="flex items-center gap-2 bg-[#f4eee6] rounded-lg p-0.5">
                          <button
                            onClick={() => onUpdateQuantity(item.cartItemId, item.quantity - 1)}
                            className="w-6 h-6 rounded-md bg-white flex items-center justify-center text-[#3d271d] hover:bg-[#e2dacb] text-xs cursor-pointer"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="font-mono text-xs font-bold w-5 text-center text-[#241a15]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.cartItemId, item.quantity + 1)}
                            className="w-6 h-6 rounded-md bg-white flex items-center justify-center text-[#3d271d] hover:bg-[#e2dacb] text-xs cursor-pointer"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Price */}
                        <span className="font-mono text-sm font-bold tabular-nums text-[#241a15]">
                          {formatPrice(item.unitPrice * item.quantity, currency)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Customer & Delivery Form */}
                <div className="pt-4 border-t border-[#e8e2d9] space-y-4">
                  <h3 className="font-bold text-xs uppercase tracking-wider text-[#3d271d]">
                    {isPt ? 'Modalidade do Pedido' : 'Modalidad de Pedido'}
                  </h3>

                  {/* Order Type Toggle */}
                  <div className="grid grid-cols-3 gap-2 p-1 bg-[#f0ebe1] rounded-xl">
                    <button
                      type="button"
                      onClick={() =>
                        setCustomerInfo((prev) => ({ ...prev, orderType: 'delivery' }))
                      }
                      className={`flex flex-col items-center justify-center py-2 px-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        customerInfo.orderType === 'delivery'
                          ? 'bg-[#3d271d] text-white shadow-xs'
                          : 'text-[#5c4a3e] hover:text-[#1f1d1b]'
                      }`}
                    >
                      <Bike className="w-4 h-4 mb-1" />
                      <span>Delivery</span>
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        setCustomerInfo((prev) => ({ ...prev, orderType: 'takeaway' }))
                      }
                      className={`flex flex-col items-center justify-center py-2 px-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        customerInfo.orderType === 'takeaway'
                          ? 'bg-[#3d271d] text-white shadow-xs'
                          : 'text-[#5c4a3e] hover:text-[#1f1d1b]'
                      }`}
                    >
                      <Store className="w-4 h-4 mb-1" />
                      <span>{isPt ? 'Retirada' : 'Retiro'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        setCustomerInfo((prev) => ({ ...prev, orderType: 'dine_in' }))
                      }
                      className={`flex flex-col items-center justify-center py-2 px-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        customerInfo.orderType === 'dine_in'
                          ? 'bg-[#3d271d] text-white shadow-xs'
                          : 'text-[#5c4a3e] hover:text-[#1f1d1b]'
                      }`}
                    >
                      <UtensilsCrossed className="w-4 h-4 mb-1" />
                      <span>{isPt ? 'Na Mesa' : 'En Mesa'}</span>
                    </button>
                  </div>

                  {/* Client inputs */}
                  <div className="space-y-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-[#5c4a3e] uppercase tracking-wider mb-1">
                        {isPt ? 'Seu Nome' : 'Tu Nombre'} *
                      </label>
                      <input
                        type="text"
                        value={customerInfo.customerName}
                        onChange={(e) =>
                          setCustomerInfo((prev) => ({
                            ...prev,
                            customerName: e.target.value,
                          }))
                        }
                        placeholder={isPt ? 'Ex: Ana Maria' : 'Ej: María Silva'}
                        className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-[#ded7cb] rounded-xl text-[#2a2420] focus:ring-1 focus:ring-[#8c2d19] focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-[#5c4a3e] uppercase tracking-wider mb-1">
                        WhatsApp / Celular
                      </label>
                      <input
                        type="tel"
                        value={customerInfo.customerPhone}
                        onChange={(e) =>
                          setCustomerInfo((prev) => ({
                            ...prev,
                            customerPhone: e.target.value,
                          }))
                        }
                        placeholder={isPt ? 'Ex: (45) 99999-9999' : 'Ej: 0981 123 456'}
                        className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-[#ded7cb] rounded-xl text-[#2a2420] focus:ring-1 focus:ring-[#8c2d19] focus:outline-hidden"
                      />
                    </div>

                    {customerInfo.orderType === 'delivery' && (
                      <div>
                        <label className="block text-[11px] font-semibold text-[#5c4a3e] uppercase tracking-wider mb-1">
                          {isPt ? 'Endereço de Entrega' : 'Dirección de Entrega'} *
                        </label>
                        <input
                          type="text"
                          value={customerInfo.deliveryAddress}
                          onChange={(e) =>
                            setCustomerInfo((prev) => ({
                              ...prev,
                              deliveryAddress: e.target.value,
                            }))
                          }
                          placeholder={
                            isPt
                              ? 'Rua, número, bairro e ponto de referência'
                              : 'Calle, número, barrio y referencia'
                          }
                          className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-[#ded7cb] rounded-xl text-[#2a2420] focus:ring-1 focus:ring-[#8c2d19] focus:outline-hidden"
                        />
                      </div>
                    )}

                    {customerInfo.orderType === 'dine_in' && (
                      <div>
                        <label className="block text-[11px] font-semibold text-[#5c4a3e] uppercase tracking-wider mb-1">
                          {isPt ? 'Número da Mesa' : 'Número de Mesa'}
                        </label>
                        <input
                          type="text"
                          value={customerInfo.tableNumber}
                          onChange={(e) =>
                            setCustomerInfo((prev) => ({
                              ...prev,
                              tableNumber: e.target.value,
                            }))
                          }
                          placeholder={isPt ? 'Ex: Mesa 04' : 'Ej: Mesa 04'}
                          className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-[#ded7cb] rounded-xl text-[#2a2420] focus:ring-1 focus:ring-[#8c2d19] focus:outline-hidden"
                        />
                      </div>
                    )}

                    <div>
                      <label className="block text-[11px] font-semibold text-[#5c4a3e] uppercase tracking-wider mb-1">
                        {isPt ? 'Forma de Pagamento' : 'Forma de Pago'}
                      </label>
                      <select
                        value={customerInfo.paymentMethod}
                        onChange={(e) =>
                          setCustomerInfo((prev) => ({
                            ...prev,
                            paymentMethod: e.target.value as any,
                          }))
                        }
                        className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-[#ded7cb] rounded-xl text-[#2a2420] focus:ring-1 focus:ring-[#8c2d19] focus:outline-hidden"
                      >
                        <option value="efectivo">
                          {isPt ? 'Dinheiro (Efectivo)' : 'Efectivo'}
                        </option>
                        <option value="pix">PIX (Brasil)</option>
                        <option value="transferencia">
                          {isPt ? 'Transferência Bancária' : 'Transferencia Bancaria'}
                        </option>
                        <option value="tarjeta">
                          {isPt ? 'Cartão no Local / Maquininha' : 'Tarjeta de Débito/Crédito'}
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-[#5c4a3e] uppercase tracking-wider mb-1">
                        {isPt ? 'Observações Gerais' : 'Observaciones'}
                      </label>
                      <input
                        type="text"
                        value={customerInfo.notes}
                        onChange={(e) =>
                          setCustomerInfo((prev) => ({
                            ...prev,
                            notes: e.target.value,
                          }))
                        }
                        placeholder={
                          isPt
                            ? 'Ex: Trazer troco para 50.000 Gs, etc.'
                            : 'Ej: Traer vuelto para 50.000 Gs, etc.'
                        }
                        className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-[#ded7cb] rounded-xl text-[#2a2420] focus:ring-1 focus:ring-[#8c2d19] focus:outline-hidden"
                      />
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Footer with totals & WhatsApp action */}
          {items.length > 0 && (
            <div className="p-5 bg-white border-t border-[#e8e2d9] space-y-4">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-[#735e50]">
                  <span>Subtotal dos Itens:</span>
                  <span className="font-mono font-medium">{formatPrice(subtotalPyg, currency)}</span>
                </div>
                {customerInfo.orderType === 'delivery' && (
                  <div className="flex justify-between text-[#735e50]">
                    <span>Taxa de Entrega:</span>
                    <span className="font-mono font-medium">{formatPrice(deliveryFee, currency)}</span>
                  </div>
                )}
                <div className="flex items-baseline justify-between pt-2 border-t border-[#f0ebe1]">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#8c7465] font-bold">
                      Total a Pagar
                    </span>
                    {currency !== 'PYG' && (
                      <div className="text-[11px] text-[#8c7465] font-mono">
                        Ref: {formatPrice(grandTotalPyg, 'PYG')}
                      </div>
                    )}
                  </div>
                  <span className="font-mono text-2xl font-extrabold tabular-nums text-[#8c2d19]">
                    {formatPrice(grandTotalPyg, currency)}
                  </span>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-2">
                <button
                  onClick={handleSendWhatsApp}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 active:scale-98 rounded-xl shadow-md transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{isPt ? 'Enviar Pedido pelo WhatsApp' : 'Enviar Pedido por WhatsApp'}</span>
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => onViewReceipt(customerInfo)}
                    className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#3d271d] bg-[#f0ebe1] hover:bg-[#e5ddd0] rounded-xl transition-all cursor-pointer"
                  >
                    <span>{isPt ? 'Ver Comprovante' : 'Ver Comprobante'}</span>
                  </button>

                  <button
                    onClick={handleCopy}
                    className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#5c4a3e] bg-[#f0ebe1] hover:bg-[#e5ddd0] rounded-xl transition-all cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{isPt ? 'Copiado!' : '¡Copiado!'}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>{isPt ? 'Copiar Pedido' : 'Copiar Pedido'}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
