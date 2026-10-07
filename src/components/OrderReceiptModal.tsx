import React from 'react';
import { X, Printer, Check, ShoppingBag, Phone, MapPin, Calendar, Clock, Bike } from 'lucide-react';
import { Language, Currency, CustomerOrderInfo, CartItem, StoreConfig } from '../types';
import { formatPrice } from '../utils/format';

interface OrderReceiptModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderInfo: CustomerOrderInfo;
  items: CartItem[];
  totalPyg: number;
  currency: Currency;
  language: Language;
  config: StoreConfig;
  orderNumber: string;
}

export const OrderReceiptModal: React.FC<OrderReceiptModalProps> = ({
  isOpen,
  onClose,
  orderInfo,
  items,
  totalPyg,
  currency,
  language,
  config,
  orderNumber,
}) => {
  if (!isOpen) return null;

  const isPt = language === 'pt';
  const currentDate = new Date().toLocaleDateString(isPt ? 'pt-BR' : 'es-PY');
  const currentTime = new Date().toLocaleTimeString(isPt ? 'pt-BR' : 'es-PY', {
    hour: '2-digit',
    minute: '2-digit',
  });

  const handlePrint = () => {
    window.print();
  };

  const deliveryFee = orderInfo.orderType === 'delivery' ? config.defaultDeliveryFeePyg : 0;
  const grandTotalPyg = totalPyg + deliveryFee;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto print:p-0">
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity print:hidden"
        onClick={onClose}
      />

      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#ded7cb] z-10 my-6 print:m-0 print:border-none print:shadow-none">
        {/* Top Control Bar (Hidden on print) */}
        <div className="p-4 bg-[#2b1c15] text-[#fbf8f4] flex items-center justify-between border-b border-black/20 print:hidden">
          <span className="font-serif font-bold text-sm text-white">
            {isPt ? 'Comprovante Oficial do Pedido' : 'Comprobante Oficial de Pedido'}
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-1.5 rounded-lg text-[#d8bfab] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              title="Imprimir Comanda"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#d8bfab] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Ticket Receipt (Thermal receipt style) */}
        <div className="p-6 sm:p-8 space-y-5 font-mono text-xs text-[#241a15] bg-[#fffefc]">
          {/* Header */}
          <div className="text-center pb-4 border-b border-dashed border-[#8c7465]/40 space-y-1">
            <h2 className="font-serif font-extrabold text-xl text-[#3d271d]">
              {config.storeName}
            </h2>
            <p className="text-[11px] text-[#735e50]">{config.address}</p>
            <p className="text-[11px] text-[#735e50]">
              WhatsApp: +{config.whatsappPhone}
            </p>
            <div className="pt-2 flex items-center justify-center gap-3 text-[10px] text-[#8c7465]">
              <span>{currentDate}</span>
              <span>·</span>
              <span>{currentTime}</span>
            </div>
            <div className="mt-2 inline-block px-3 py-1 bg-[#241a15] text-white font-bold rounded-md text-xs">
              PEDIDO #{orderNumber}
            </div>
          </div>

          {/* Customer & Delivery details */}
          <div className="pb-4 border-b border-dashed border-[#8c7465]/40 space-y-1.5 text-xs">
            <div className="flex justify-between">
              <span className="text-[#8c7465]">{isPt ? 'Cliente:' : 'Cliente:'}</span>
              <span className="font-bold">{orderInfo.customerName || 'Consumidor Final'}</span>
            </div>
            {orderInfo.customerPhone && (
              <div className="flex justify-between">
                <span className="text-[#8c7465]">Tel/WhatsApp:</span>
                <span>{orderInfo.customerPhone}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="text-[#8c7465]">{isPt ? 'Modalidade:' : 'Modalidad:'}</span>
              <span className="font-bold uppercase text-[#8c2d19]">
                {orderInfo.orderType === 'delivery'
                  ? '🛵 Delivery'
                  : orderInfo.orderType === 'dine_in'
                  ? `🍽️ Mesa ${orderInfo.tableNumber || 'Salão'}`
                  : '🛍️ Retirada / Balcão'}
              </span>
            </div>
            {orderInfo.orderType === 'delivery' && orderInfo.deliveryAddress && (
              <div className="pt-1">
                <span className="text-[#8c7465] block">{isPt ? 'Endereço:' : 'Dirección:'}</span>
                <span className="font-medium">{orderInfo.deliveryAddress}</span>
              </div>
            )}
            <div className="flex justify-between pt-1">
              <span className="text-[#8c7465]">{isPt ? 'Pagamento:' : 'Pago:'}</span>
              <span className="capitalize font-semibold">{orderInfo.paymentMethod}</span>
            </div>
            {orderInfo.notes && (
              <div className="pt-1 text-[#8c2d19] italic">
                Obs: {orderInfo.notes}
              </div>
            )}
          </div>

          {/* Items breakdown */}
          <div className="space-y-3 pb-4 border-b border-dashed border-[#8c7465]/40">
            <div className="text-[10px] uppercase font-bold text-[#8c7465] flex justify-between">
              <span>{isPt ? 'Qtd · Item' : 'Cant · Ítem'}</span>
              <span>Total</span>
            </div>

            {items.map((item, idx) => (
              <div key={idx} className="space-y-0.5">
                <div className="flex justify-between items-baseline font-medium">
                  <span>
                    {item.quantity}x {item.name}
                  </span>
                  <span>{formatPrice(item.unitPrice * item.quantity, currency)}</span>
                </div>
                {item.selectedOptions && (
                  <div className="text-[10px] text-[#735e50] pl-4">
                    {Object.entries(item.selectedOptions)
                      .map(([k, v]) => `${k}: ${v}`)
                      .join(' | ')}
                  </div>
                )}
                {item.specialInstructions && (
                  <div className="text-[10px] text-[#8c2d19] italic pl-4">
                    _{item.specialInstructions}_
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Totals */}
          <div className="space-y-1.5 pb-4 border-b border-dashed border-[#8c7465]/40">
            <div className="flex justify-between text-[#735e50]">
              <span>Subtotal Itens:</span>
              <span>{formatPrice(totalPyg, currency)}</span>
            </div>
            {orderInfo.orderType === 'delivery' && (
              <div className="flex justify-between text-[#735e50]">
                <span>Taxa de Entrega:</span>
                <span>{formatPrice(deliveryFee, currency)}</span>
              </div>
            )}
            <div className="flex justify-between items-baseline text-base font-extrabold pt-2 text-[#241a15]">
              <span>TOTAL A PAGAR:</span>
              <span className="text-[#8c2d19]">
                {formatPrice(grandTotalPyg, currency)}
              </span>
            </div>
            {currency !== 'PYG' && (
              <div className="text-right text-[10px] text-[#8c7465]">
                Ref. Oficial: {formatPrice(grandTotalPyg, 'PYG')}
              </div>
            )}
          </div>

          {/* PIX Key if applicable */}
          {config.pixKey && (
            <div className="p-2.5 bg-[#f5efe6] rounded-xl text-center space-y-0.5 text-[11px]">
              <span className="font-bold text-[#3d271d]">Chave PIX para pagamento:</span>
              <p className="font-bold text-[#8c2d19] select-all">{config.pixKey}</p>
            </div>
          )}

          {/* Footer message */}
          <div className="text-center pt-2 space-y-1 text-[10px] text-[#8c7465]">
            <p>Obrigado pela preferência!</p>
            <p className="italic">"{config.storeSlogan}"</p>
          </div>
        </div>

        {/* Action Buttons (print:hidden) */}
        <div className="p-4 bg-[#f9f6f1] border-t border-[#ded7cb] flex items-center justify-between gap-3 print:hidden">
          <button
            onClick={onClose}
            className="flex-1 py-2.5 text-xs font-semibold text-[#5c4a3e] hover:text-[#241a15] rounded-xl cursor-pointer"
          >
            {isPt ? 'Fechar' : 'Cerrar'}
          </button>
          <button
            onClick={handlePrint}
            className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-white bg-[#3d271d] hover:bg-[#241a15] rounded-xl shadow-md transition-all cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>{isPt ? 'Imprimir Comprovante' : 'Imprimir Comprobante'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
