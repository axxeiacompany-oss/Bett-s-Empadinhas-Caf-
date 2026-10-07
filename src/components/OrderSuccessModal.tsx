import React from 'react';
import { CheckCircle2, MessageCircle, Copy, ArrowRight, X } from 'lucide-react';
import { Language, Currency, CustomerOrderInfo } from '../types';
import { formatPrice } from '../utils/format';
import { WHATSAPP_PHONE } from '../data/menu';

interface OrderSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderInfo: CustomerOrderInfo | null;
  totalPyg: number;
  currency: Currency;
  language: Language;
}

export const OrderSuccessModal: React.FC<OrderSuccessModalProps> = ({
  isOpen,
  onClose,
  orderInfo,
  totalPyg,
  currency,
  language,
}) => {
  if (!isOpen || !orderInfo) return null;

  const isPt = language === 'pt';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-6 sm:p-8 border border-[#e8e2d9] z-10 text-center space-y-5">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#8c7465] hover:text-[#241a15] rounded-full transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div>
          <h2 className="font-serif text-2xl font-bold text-[#241a15]">
            {isPt ? 'Pedido Encaminhado!' : '¡Pedido Encaminado!'}
          </h2>
          <p className="text-xs sm:text-sm text-[#735e50] mt-1.5 leading-relaxed">
            {isPt
              ? 'Seu pedido foi formatado e direcionado para o nosso WhatsApp. Se o aplicativo não abriu automaticamente, clique no botão abaixo.'
              : 'Tu pedido fue formateado y dirigido a nuestro WhatsApp. Si la aplicación no abrió automáticamente, presiona el botón abajo.'}
          </p>
        </div>

        {/* Order Card Brief */}
        <div className="bg-[#faf8f5] p-4 rounded-2xl border border-[#ded7cb] text-left text-xs space-y-2">
          <div className="flex justify-between">
            <span className="text-[#8c7465]">{isPt ? 'Cliente:' : 'Cliente:'}</span>
            <span className="font-semibold text-[#241a15]">
              {orderInfo.customerName || (isPt ? 'Não informado' : 'No informado')}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#8c7465]">{isPt ? 'Modalidade:' : 'Modalidad:'}</span>
            <span className="font-semibold text-[#241a15] capitalize">
              {orderInfo.orderType}
            </span>
          </div>
          <div className="flex justify-between pt-2 border-t border-[#ded7cb]">
            <span className="font-bold text-[#241a15]">{isPt ? 'Total:' : 'Total:'}</span>
            <span className="font-mono font-bold text-sm text-[#8c2d19]">
              {formatPrice(totalPyg, currency)}
            </span>
          </div>
        </div>

        <div className="space-y-2.5 pt-2">
          <a
            href={`https://wa.me/${WHATSAPP_PHONE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-md transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{isPt ? 'Conversar no WhatsApp' : 'Abrir Chat de WhatsApp'}</span>
          </a>

          <button
            onClick={onClose}
            className="w-full py-2.5 text-xs font-semibold text-[#735e50] hover:text-[#241a15] transition-colors cursor-pointer"
          >
            {isPt ? 'Continuar Navegando' : 'Continuar Navegando'}
          </button>
        </div>
      </div>
    </div>
  );
};
