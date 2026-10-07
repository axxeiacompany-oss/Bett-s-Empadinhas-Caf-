import React, { useState } from 'react';
import { X, Save, Store, Phone, Clock, DollarSign, QrCode } from 'lucide-react';
import { StoreConfig, Language } from '../types';

interface StoreConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: StoreConfig;
  onSave: (newConfig: StoreConfig) => void;
  language: Language;
}

export const StoreConfigModal: React.FC<StoreConfigModalProps> = ({
  isOpen,
  onClose,
  config,
  onSave,
  language,
}) => {
  if (!isOpen) return null;

  const isPt = language === 'pt';
  const [formData, setFormData] = useState<StoreConfig>({ ...config });
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#e8e2d9] z-10 my-8">
        {/* Header */}
        <div className="p-5 sm:p-6 bg-[#2b1c15] text-[#fbf8f4] flex items-center justify-between border-b border-black/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#e8b598]">
              <Store className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-lg font-bold text-white">
                {isPt ? 'Configurações do Estabelecimento' : 'Configuración del Establecimiento'}
              </h2>
              <p className="text-xs text-[#d8bfab]">
                {isPt
                  ? 'Ajuste telefone de pedidos, horários e dados'
                  : 'Ajusta número de pedidos, horarios y datos'}
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

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[70vh] overflow-y-auto text-xs sm:text-sm">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#3d271d] mb-1">
              {isPt ? 'Nome do Estabelecimento' : 'Nombre del Comercio'}
            </label>
            <input
              type="text"
              value={formData.storeName}
              onChange={(e) => setFormData({ ...formData, storeName: e.target.value })}
              className="w-full px-3 py-2 bg-[#faf8f5] border border-[#ded7cb] rounded-xl text-[#241a15] focus:ring-1 focus:ring-[#8c2d19] focus:outline-hidden"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#3d271d] mb-1">
              {isPt ? 'Slogan do Catálogo' : 'Eslogan de la Tienda'}
            </label>
            <input
              type="text"
              value={formData.storeSlogan}
              onChange={(e) => setFormData({ ...formData, storeSlogan: e.target.value })}
              className="w-full px-3 py-2 bg-[#faf8f5] border border-[#ded7cb] rounded-xl text-[#241a15] focus:ring-1 focus:ring-[#8c2d19] focus:outline-hidden"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#3d271d] mb-1">
              {isPt ? 'Número de WhatsApp para Pedidos (com DDI)' : 'Número de WhatsApp para Pedidos (con código)'}
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8c7465]" />
              <input
                type="text"
                value={formData.whatsappPhone}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    whatsappPhone: e.target.value.replace(/[^0-9]/g, ''),
                  })
                }
                placeholder="Ex: 595981123456 ou 5545999999999"
                className="w-full pl-9 pr-3 py-2 bg-[#faf8f5] border border-[#ded7cb] rounded-xl text-[#241a15] focus:ring-1 focus:ring-[#8c2d19] focus:outline-hidden font-mono"
                required
              />
            </div>
            <p className="text-[11px] text-[#8c7465] mt-1">
              {isPt
                ? 'Insira apenas números com o código do país (ex: 595 para Paraguai, 55 para Brasil).'
                : 'Ingresa solo números con código de país (ej: 595 para Paraguay, 55 para Brasil).'}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#3d271d] mb-1">
                {isPt ? 'Horário Abertura' : 'Hora Apertura'}
              </label>
              <input
                type="number"
                min="0"
                max="23"
                value={formData.openingHour}
                onChange={(e) =>
                  setFormData({ ...formData, openingHour: parseInt(e.target.value) || 0 })
                }
                className="w-full px-3 py-2 bg-[#faf8f5] border border-[#ded7cb] rounded-xl text-[#241a15] focus:ring-1 focus:ring-[#8c2d19] focus:outline-hidden"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#3d271d] mb-1">
                {isPt ? 'Horário Fechamento' : 'Hora Cierre'}
              </label>
              <input
                type="number"
                min="0"
                max="23"
                value={formData.closingHour}
                onChange={(e) =>
                  setFormData({ ...formData, closingHour: parseInt(e.target.value) || 0 })
                }
                className="w-full px-3 py-2 bg-[#faf8f5] border border-[#ded7cb] rounded-xl text-[#241a15] focus:ring-1 focus:ring-[#8c2d19] focus:outline-hidden"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#3d271d] mb-1">
                {isPt ? 'Taxa de Entrega Padrão (PYG)' : 'Costo de Delivery Base (PYG)'}
              </label>
              <input
                type="number"
                step="1000"
                value={formData.defaultDeliveryFeePyg}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    defaultDeliveryFeePyg: parseInt(e.target.value) || 0,
                  })
                }
                className="w-full px-3 py-2 bg-[#faf8f5] border border-[#ded7cb] rounded-xl text-[#241a15] focus:ring-1 focus:ring-[#8c2d19] focus:outline-hidden font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#3d271d] mb-1">
                {isPt ? 'Tempo Estimado' : 'Tiempo Estimado'}
              </label>
              <input
                type="text"
                value={formData.deliveryEstimatedMinutes}
                onChange={(e) =>
                  setFormData({ ...formData, deliveryEstimatedMinutes: e.target.value })
                }
                placeholder="25 - 40 min"
                className="w-full px-3 py-2 bg-[#faf8f5] border border-[#ded7cb] rounded-xl text-[#241a15] focus:ring-1 focus:ring-[#8c2d19] focus:outline-hidden"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#3d271d] mb-1">
              Chave PIX (Para clientes do Brasil)
            </label>
            <input
              type="text"
              value={formData.pixKey}
              onChange={(e) => setFormData({ ...formData, pixKey: e.target.value })}
              placeholder="CNPJ, E-mail, Celular ou Chave aleatória"
              className="w-full px-3 py-2 bg-[#faf8f5] border border-[#ded7cb] rounded-xl text-[#241a15] focus:ring-1 focus:ring-[#8c2d19] focus:outline-hidden"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#3d271d] mb-1">
              {isPt ? 'Endereço Físico do Salão' : 'Dirección del Salón'}
            </label>
            <input
              type="text"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className="w-full px-3 py-2 bg-[#faf8f5] border border-[#ded7cb] rounded-xl text-[#241a15] focus:ring-1 focus:ring-[#8c2d19] focus:outline-hidden"
            />
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-[#f0ebe1] flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 text-xs font-semibold text-[#5c4a3e] hover:text-[#1f1d1b] cursor-pointer"
            >
              {isPt ? 'Cancelar' : 'Cancelar'}
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold text-white bg-[#8c2d19] hover:bg-[#722312] rounded-xl shadow-md transition-all cursor-pointer"
            >
              <Save className="w-4 h-4" />
              <span>{savedSuccess ? (isPt ? 'Salvo!' : '¡Guardado!') : isPt ? 'Salvar Configurações' : 'Guardar Cambios'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
