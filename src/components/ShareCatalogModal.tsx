import React, { useState } from 'react';
import { X, QrCode, Copy, Check, Printer, Share2, ExternalLink } from 'lucide-react';
import { Language, StoreConfig } from '../types';

interface ShareCatalogModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  config: StoreConfig;
}

export const ShareCatalogModal: React.FC<ShareCatalogModalProps> = ({
  isOpen,
  onClose,
  language,
  config,
}) => {
  if (!isOpen) return null;

  const isPt = language === 'pt';
  const [copied, setCopied] = useState(false);
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrintTableStand = () => {
    window.print();
  };

  // Generate an SVG-based QR code representation for high quality printing and scanning
  const qrSvgUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(
    currentUrl
  )}&margin=10`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/65 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#e8e2d9] z-10 my-8">
        {/* Header */}
        <div className="p-5 sm:p-6 bg-[#2b1c15] text-[#fbf8f4] flex items-center justify-between border-b border-black/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#e8b598]">
              <QrCode className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-lg font-bold text-white">
                {isPt ? 'QR Code & Compartilhar Cardápio' : 'QR Code & Compartir Menú'}
              </h2>
              <p className="text-xs text-[#d8bfab]">
                {isPt
                  ? 'Ideal para totens de mesa, balcão e redes sociais'
                  : 'Ideal para mesas, mostrador y redes sociales'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-[#d8bfab] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto text-center">
          {/* Printable Display Card Preview */}
          <div className="p-6 bg-[#faf8f5] rounded-2xl border-2 border-dashed border-[#ded7cb] text-center space-y-4">
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#8c2d19]">
                {isPt ? 'Totem de Mesa & Balcão' : 'Display para Mesas'}
              </span>
              <h3 className="font-serif text-xl font-bold text-[#3d271d]">
                {config.storeName}
              </h3>
              <p className="text-xs text-[#735e50] italic">
                "{config.storeSlogan}"
              </p>
            </div>

            {/* QR Code graphic */}
            <div className="w-48 h-48 mx-auto bg-white p-3 rounded-2xl shadow-sm border border-[#e8e2d9] flex items-center justify-center">
              <img
                src={qrSvgUrl}
                alt="QR Code do Cardápio"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="text-xs text-[#5c4a3e] max-w-xs mx-auto">
              <p className="font-semibold text-[#241a15]">
                {isPt
                  ? '📲 Aponte a câmera do seu celular para abrir o cardápio e fazer seu pedido!'
                  : '📲 ¡Apunta la cámara de tu celular para ver el menú y hacer tu pedido!'}
              </p>
            </div>
          </div>

          {/* Share links */}
          <div className="space-y-3 text-left">
            <label className="block text-xs font-bold uppercase tracking-wider text-[#3d271d]">
              {isPt ? 'Link Direto do Cardápio' : 'Enlace Directo del Menú'}
            </label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                readOnly
                value={currentUrl}
                className="flex-1 px-3 py-2 text-xs bg-[#faf8f5] border border-[#ded7cb] rounded-xl text-[#5c4a3e] font-mono select-all focus:outline-hidden"
              />
              <button
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#3d271d] hover:bg-[#241a15] rounded-xl transition-colors cursor-pointer shrink-0"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{isPt ? 'Copiado!' : '¡Copiado!'}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>{isPt ? 'Copiar' : 'Copiar'}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <button
              onClick={handlePrintTableStand}
              className="inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold text-[#3d271d] bg-[#f0ebe1] hover:bg-[#e2dacb] rounded-xl transition-all cursor-pointer"
            >
              <Printer className="w-4 h-4 text-[#8c2d19]" />
              <span>{isPt ? 'Imprimir Display' : 'Imprimir Display'}</span>
            </button>

            <a
              href={`https://wa.me/?text=${encodeURIComponent(
                `${config.storeName} - ${isPt ? 'Confira nosso cardápio digital completo e faça seu pedido online:' : 'Descubre nuestra carta digital completa y haz tu pedido online:'} ${currentUrl}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-all cursor-pointer"
            >
              <Share2 className="w-4 h-4" />
              <span>{isPt ? 'Compartilhar WhatsApp' : 'Enviar por WhatsApp'}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
