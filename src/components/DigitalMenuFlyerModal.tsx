import React, { useState } from 'react';
import { X, Printer, Download, Sparkles } from 'lucide-react';
import { Language, Currency } from '../types';
import { formatPrice } from '../utils/format';

interface DigitalMenuFlyerModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  currency: Currency;
}

export const DigitalMenuFlyerModal: React.FC<DigitalMenuFlyerModalProps> = ({
  isOpen,
  onClose,
  language,
  currency,
}) => {
  if (!isOpen) return null;

  const isPt = language === 'pt';
  const [activeTab, setActiveTab] = useState<'pagina1' | 'pagina2'>('pagina1');

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Window */}
      <div className="relative w-full max-w-5xl bg-[#fdfcf9] rounded-3xl shadow-2xl border border-[#ded7cb] z-10 flex flex-col max-h-[92vh] overflow-hidden">
        {/* Top Control Bar */}
        <div className="px-5 py-3.5 bg-[#2b1c15] text-[#fbf8f4] flex items-center justify-between border-b border-black/20">
          <div className="flex items-center gap-3">
            <span className="font-serif font-bold text-lg text-white">
              Bett's Empadinhas & Café
            </span>
            <span className="hidden sm:inline text-xs text-[#d8bfab]">
              {isPt ? 'Carta Impressa & Digital Original' : 'Menú Impreso y Digital Original'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Page switcher tabs */}
            <div className="flex items-center bg-white/10 rounded-lg p-0.5 text-xs font-semibold">
              <button
                onClick={() => setActiveTab('pagina1')}
                className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                  activeTab === 'pagina1'
                    ? 'bg-[#d4af37] text-[#140e0b] shadow-xs font-bold'
                    : 'text-[#d8bfab] hover:text-white'
                }`}
              >
                {isPt ? 'Pág 1: Salgados & Doces' : 'Pág 1: Salados & Dulces'}
              </button>
              <button
                onClick={() => setActiveTab('pagina2')}
                className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                  activeTab === 'pagina2'
                    ? 'bg-[#d4af37] text-[#140e0b] shadow-xs font-bold'
                    : 'text-[#d8bfab] hover:text-white'
                }`}
              >
                {isPt ? 'Pág 2: Cafés & Bebidas' : 'Pág 2: Cafés & Bebidas'}
              </button>
            </div>

            <button
              onClick={handlePrint}
              className="p-2 rounded-lg text-[#d8bfab] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              title="Imprimir / Guardar PDF"
            >
              <Printer className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-lg text-[#d8bfab] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Flyer Canvas (Styled after the uploaded PDF) */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-[#f5ede1] text-[#241a15]">
          <div className="max-w-4xl mx-auto bg-[#faf6ef] p-6 sm:p-10 rounded-2xl shadow-sm border border-[#e2d5c4] font-serif space-y-8">
            {/* Header Brand */}
            <div className="text-center border-b-2 border-[#8c2d19]/20 pb-5">
              <span className="text-xs uppercase tracking-widest text-[#8c2d19] font-sans font-bold">
                {isPt ? 'Cardápio Completo' : 'Carta Completa'}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3d271d] mt-1">
                Bett's Empadinhas & Café
              </h2>
              <p className="text-sm italic text-[#8c6b58] mt-1 font-serif">
                "{isPt ? 'O seu melhor momento do dia' : 'Tu mejor momento del día'}"
              </p>
            </div>

            {/* PAGE 1 CONTENT */}
            {activeTab === 'pagina1' && (
              <div className="space-y-8 font-sans">
                {/* Grid 2 cols */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Left Column: Empezá bien el día & Croissant */}
                  <div className="space-y-6">
                    {/* Section: Empezá bien el día */}
                    <div className="bg-[#f0e6d6]/60 p-4 rounded-xl border border-[#decbb7]">
                      <h3 className="font-serif text-lg font-bold text-[#8c2d19] border-b border-[#8c2d19]/30 pb-1 mb-3">
                        {isPt ? 'Comece Bem o Dia' : 'Empezá bien el dia'}
                      </h3>
                      <div className="space-y-2 text-xs">
                        <div className="flex justify-between items-baseline">
                          <span className="font-medium text-[#2d241e]">
                            Desayuno Completo (Frutas, café con leche, jugo)
                          </span>
                          <span className="font-mono font-bold ml-2">
                            {formatPrice(50000, currency)}
                          </span>
                        </div>
                        <div className="flex justify-between items-baseline">
                          <span className="text-[#2d241e]">Huevo revuelto con tostadas</span>
                          <span className="font-mono font-bold ml-2">
                            {formatPrice(25000, currency)}
                          </span>
                        </div>
                        <div className="flex justify-between items-baseline">
                          <span className="text-[#2d241e]">Mbeju tradicional</span>
                          <span className="font-mono font-bold ml-2">
                            {formatPrice(12000, currency)}
                          </span>
                        </div>
                        <div className="flex justify-between items-baseline">
                          <span className="text-[#2d241e]">Mbeju con relleno de queso</span>
                          <span className="font-mono font-bold ml-2">
                            {formatPrice(15000, currency)}
                          </span>
                        </div>
                        <div className="flex justify-between items-baseline">
                          <span className="text-[#2d241e]">Chipa tradicional</span>
                          <span className="font-mono font-bold ml-2">
                            {formatPrice(6000, currency)}
                          </span>
                        </div>
                        <div className="flex justify-between items-baseline">
                          <span className="text-[#2d241e]">Doguinho</span>
                          <span className="font-mono font-bold ml-2">
                            {formatPrice(12000, currency)}
                          </span>
                        </div>
                        <div className="flex justify-between items-baseline">
                          <span className="text-[#2d241e]">
                            Hojaldre de jamón y queso, carne, pollo
                          </span>
                          <span className="font-mono font-bold ml-2">
                            {formatPrice(13000, currency)}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Section: Croissant */}
                    <div className="bg-[#f0e6d6]/60 p-4 rounded-xl border border-[#decbb7]">
                      <h3 className="font-serif text-lg font-bold text-[#8c2d19] border-b border-[#8c2d19]/30 pb-1 mb-3">
                        Croissant
                      </h3>
                      <div className="space-y-3 text-xs">
                        <div>
                          <div className="text-[11px] font-bold uppercase tracking-wider text-[#735442] mb-1">
                            {isPt ? 'Croissant Salgado' : 'Croissant Salado'}
                          </div>
                          <div className="space-y-1">
                            <div className="flex justify-between">
                              <span>Jamón y Queso</span>
                              <span className="font-mono font-bold">
                                {formatPrice(20000, currency)}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span>Carne desmechada y queso</span>
                              <span className="font-mono font-bold">
                                {formatPrice(30000, currency)}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span>Pollo y queso</span>
                              <span className="font-mono font-bold">
                                {formatPrice(25000, currency)}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <div className="text-[11px] font-bold uppercase tracking-wider text-[#735442] mb-1">
                            {isPt ? 'Croissant Doce' : 'Croissant Dulce'}
                          </div>
                          <div className="space-y-1">
                            <div className="flex justify-between">
                              <span>Chocolate negro</span>
                              <span className="font-mono font-bold">
                                {formatPrice(20000, currency)}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span>Chocolate blanco</span>
                              <span className="font-mono font-bold">
                                {formatPrice(20000, currency)}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span>Crema de almendras</span>
                              <span className="font-mono font-bold">
                                {formatPrice(20000, currency)}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span>Nutella</span>
                              <span className="font-mono font-bold">
                                {formatPrice(20000, currency)}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span>Dulce de leche</span>
                              <span className="font-mono font-bold">
                                {formatPrice(20000, currency)}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span>Sin relleno</span>
                              <span className="font-mono font-bold">
                                {formatPrice(15000, currency)}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section: Panificados */}
                    <div className="bg-[#f0e6d6]/60 p-4 rounded-xl border border-[#decbb7]">
                      <h3 className="font-serif text-lg font-bold text-[#8c2d19] border-b border-[#8c2d19]/30 pb-1 mb-3">
                        {isPt ? 'Pães & Panificados' : 'Panificados'}
                      </h3>
                      <div className="space-y-1.5 text-xs">
                        <div className="flex justify-between">
                          <span>Pan de leche</span>
                          <span className="font-mono font-bold">
                            {formatPrice(20000, currency)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Pan integral</span>
                          <span className="font-mono font-bold">
                            {formatPrice(25000, currency)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Pan con queso parmesano y huevo revuelto</span>
                          <span className="font-mono font-bold">
                            {formatPrice(25000, currency)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Pan de queso (porción)</span>
                          <span className="font-mono font-bold">
                            {formatPrice(10000, currency)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Pan de papas (calabresa, pollo, carne, queso)</span>
                          <span className="font-mono font-bold">
                            {formatPrice(15000, currency)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Pan tostado con mermelada y manteca</span>
                          <span className="font-mono font-bold">
                            {formatPrice(10000, currency)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Empadas (The highlight) & Dulces & Compartir */}
                  <div className="space-y-6">
                    {/* Section: Empadas */}
                    <div className="bg-[#eddcc7]/70 p-4 rounded-xl border border-[#d6be9f]">
                      <div className="flex justify-between items-center border-b border-[#8c2d19]/30 pb-1 mb-3">
                        <h3 className="font-serif text-xl font-bold text-[#8c2d19]">Empadas</h3>
                        <span className="text-[11px] font-sans font-semibold text-[#8c2d19]">
                          Mini: {formatPrice(5000, currency)} · Empadão 1kg:{' '}
                          {formatPrice(150000, currency)}
                        </span>
                      </div>

                      {/* Empadas sublists */}
                      <div className="space-y-3 text-xs">
                        <div>
                          <div className="text-[11px] font-bold uppercase tracking-wider text-[#735442] mb-1">
                            Clásicas al Horno
                          </div>
                          <div className="space-y-1">
                            <div className="flex justify-between">
                              <span>Jamón y Queso / Pollo</span>
                              <span className="font-mono font-bold">
                                {formatPrice(8000, currency)}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span>Carne</span>
                              <span className="font-mono font-bold">
                                {formatPrice(10000, currency)}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <div className="text-[11px] font-bold uppercase tracking-wider text-[#735442] mb-1">
                            Saladas Especiales
                          </div>
                          <div className="space-y-1">
                            <div className="flex justify-between">
                              <span>Carne desmechada, Carne seca (mandioca / zapallo), Calabresa, Queso con bacon</span>
                              <span className="font-mono font-bold">
                                {formatPrice(13000, currency)}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span>Pollo, Pollo con katupiry, Pollo aceitunas, Espinaca con queso, Palmito, Pizza, 4 Quesos</span>
                              <span className="font-mono font-bold">
                                {formatPrice(12000, currency)}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span>Costilla / Bacalao</span>
                              <span className="font-mono font-bold">
                                {formatPrice(15000, currency)}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span>Camarón Gourmet</span>
                              <span className="font-mono font-bold">
                                {formatPrice(20000, currency)}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <div className="text-[11px] font-bold uppercase tracking-wider text-[#735442] mb-1">
                            Integrales & Dulces
                          </div>
                          <div className="space-y-1">
                            <div className="flex justify-between">
                              <span>Integrales: Espinaca, Pollo, Palmito</span>
                              <span className="font-mono font-bold">
                                {formatPrice(13000, currency)}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span>Dulces Clásicas (Nutella, Dulce de Leche, etc.)</span>
                              <span className="font-mono font-bold">
                                {formatPrice(15000, currency)}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span>Dulces Gourmet (Pistacho, Nueces, Pie limón)</span>
                              <span className="font-mono font-bold">
                                {formatPrice(20000, currency)}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section: Amantes de lo Dulce */}
                    <div className="bg-[#f0e6d6]/60 p-4 rounded-xl border border-[#decbb7]">
                      <h3 className="font-serif text-lg font-bold text-[#8c2d19] border-b border-[#8c2d19]/30 pb-1 mb-3">
                        {isPt ? 'Amantes do Doce' : 'Para los amantes de lo dulce'}
                      </h3>
                      <div className="space-y-1.5 text-xs">
                        <div className="flex justify-between">
                          <span>Brownie dulce de leche / chocolate</span>
                          <span className="font-mono font-bold">
                            {formatPrice(20000, currency)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Brigadeiros (unidad)</span>
                          <span className="font-mono font-bold">
                            {formatPrice(3500, currency)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Medialunas rellenas (guayaba, dulce de leche, pastelera)</span>
                          <span className="font-mono font-bold">
                            {formatPrice(10000, currency)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Medialunas con Nutella</span>
                          <span className="font-mono font-bold">
                            {formatPrice(12000, currency)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Cinnamon Roll tradicional / con crema</span>
                          <span className="font-mono font-bold">
                            {formatPrice(12000, currency)} / {formatPrice(15000, currency)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Alfajores maicena (pequeño / mediano / grande)</span>
                          <span className="font-mono font-bold">
                            5.000 / 8.000 / 10.000 Gs.
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Pastafrolas (pequeña / grande)</span>
                          <span className="font-mono font-bold">
                            3.000 / 8.000 Gs.
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Cookies (chocolate, red velvet, tradicional)</span>
                          <span className="font-mono font-bold">
                            {formatPrice(6000, currency)}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Section: Ideales para Compartir */}
                    <div className="bg-[#f0e6d6]/60 p-4 rounded-xl border border-[#decbb7]">
                      <h3 className="font-serif text-lg font-bold text-[#8c2d19] border-b border-[#8c2d19]/30 pb-1 mb-3">
                        {isPt ? 'Ideais para Compartilhar (Festas)' : 'Ideales para Compartir'}
                      </h3>
                      <div className="space-y-2 text-xs">
                        <div className="flex justify-between items-baseline">
                          <span>Bocaditos tradicionales (100 unidades)</span>
                          <span className="font-mono font-bold">
                            {formatPrice(180000, currency)}
                          </span>
                        </div>
                        <div className="flex justify-between items-baseline">
                          <span>Salgadinhos (100 unidades)</span>
                          <span className="font-mono font-bold">
                            {formatPrice(12000, currency)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* PAGE 2 CONTENT */}
            {activeTab === 'pagina2' && (
              <div className="space-y-8 font-sans">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Left Column: Cafés & Chocolates */}
                  <div className="space-y-6">
                    {/* Cafés y Chocolates Calientes */}
                    <div className="bg-[#f0e6d6]/60 p-4 rounded-xl border border-[#decbb7]">
                      <h3 className="font-serif text-lg font-bold text-[#8c2d19] border-b border-[#8c2d19]/30 pb-1 mb-3">
                        {isPt ? 'Cafés e Chocolates Quentes' : 'Cafés y Chocolates Calientes'}
                      </h3>
                      <div className="space-y-1.5 text-xs">
                        <div className="flex justify-between">
                          <span>Café expreso / Doble expresso</span>
                          <span className="font-mono font-bold">
                            {formatPrice(12000, currency)} / {formatPrice(15000, currency)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Café americano / Cortado</span>
                          <span className="font-mono font-bold">
                            {formatPrice(15000, currency)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Café con leche (normal / grande)</span>
                          <span className="font-mono font-bold">
                            {formatPrice(14000, currency)} / {formatPrice(16000, currency)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Café latte con nutella</span>
                          <span className="font-mono font-bold">
                            {formatPrice(25000, currency)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Café latte con chocolate / dulce de leche</span>
                          <span className="font-mono font-bold">
                            {formatPrice(20000, currency)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Café capuccino tradicional / mocca</span>
                          <span className="font-mono font-bold">
                            {formatPrice(20000, currency)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Capuccino vainilla / tricolor / mocaccino</span>
                          <span className="font-mono font-bold">
                            {formatPrice(25000, currency)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Capuccino completo con chantilly</span>
                          <span className="font-mono font-bold">
                            {formatPrice(28000, currency)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Affogato</span>
                          <span className="font-mono font-bold">
                            {formatPrice(25000, currency)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Café irlandés con whisky</span>
                          <span className="font-mono font-bold">
                            {formatPrice(35000, currency)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Chocolate caliente clásico / europeo espeso</span>
                          <span className="font-mono font-bold">
                            {formatPrice(15000, currency)} / {formatPrice(25000, currency)}
                          </span>
                        </div>
                        <div className="flex justify-between text-[#8c2d19] font-medium pt-1 border-t border-[#decbb7]">
                          <span>Adicional crema chantilly</span>
                          <span className="font-mono font-bold">
                            +{formatPrice(10000, currency)}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Cafés Fríos */}
                    <div className="bg-[#f0e6d6]/60 p-4 rounded-xl border border-[#decbb7]">
                      <h3 className="font-serif text-lg font-bold text-[#8c2d19] border-b border-[#8c2d19]/30 pb-1 mb-3">
                        {isPt ? 'Cafés e Chocolates Gelados' : 'Café y Chocolates Fríos'}
                      </h3>
                      <div className="space-y-1.5 text-xs">
                        <div className="flex justify-between">
                          <span>Chocolate helado batido</span>
                          <span className="font-mono font-bold">
                            {formatPrice(15000, currency)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Capuccino helado (nutella, vainilla, tradicional)</span>
                          <span className="font-mono font-bold">
                            {formatPrice(25000, currency)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Mocaccino helado</span>
                          <span className="font-mono font-bold">
                            {formatPrice(25000, currency)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Hora del Té, Sodas Italianas, Jugos */}
                  <div className="space-y-6">
                    {/* Hora del Té */}
                    <div className="bg-[#f0e6d6]/60 p-4 rounded-xl border border-[#decbb7]">
                      <h3 className="font-serif text-lg font-bold text-[#8c2d19] border-b border-[#8c2d19]/30 pb-1 mb-3">
                        {isPt ? 'Hora do Chá' : 'Hora del Té'}
                      </h3>
                      <div className="space-y-1.5 text-xs">
                        <div className="flex justify-between">
                          <span>Té matcha caliente / Matcha latte frío</span>
                          <span className="font-mono font-bold">
                            {formatPrice(25000, currency)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Chai latte especiado</span>
                          <span className="font-mono font-bold">
                            {formatPrice(20000, currency)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Té mate tradicional (frío / caliente)</span>
                          <span className="font-mono font-bold">
                            {formatPrice(15000, currency)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Té mate con limón</span>
                          <span className="font-mono font-bold">
                            {formatPrice(15000, currency)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Té normal de hierbas</span>
                          <span className="font-mono font-bold">
                            {formatPrice(10000, currency)}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Soda Italiana */}
                    <div className="bg-[#f0e6d6]/60 p-4 rounded-xl border border-[#decbb7]">
                      <h3 className="font-serif text-lg font-bold text-[#8c2d19] border-b border-[#8c2d19]/30 pb-1 mb-3">
                        Soda Italiana
                      </h3>
                      <div className="space-y-1.5 text-xs">
                        <div className="flex justify-between">
                          <span>Manzana verde / Limón siciliano / Limón francés / Frutos rojos</span>
                          <span className="font-mono font-bold">
                            {formatPrice(25000, currency)}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Jugos con agua y leche */}
                    <div className="bg-[#f0e6d6]/60 p-4 rounded-xl border border-[#decbb7]">
                      <h3 className="font-serif text-lg font-bold text-[#8c2d19] border-b border-[#8c2d19]/30 pb-1 mb-3">
                        {isPt ? 'Bebidas Geladas & Sucos' : 'Bebidas Heladas & Jugos'}
                      </h3>
                      <div className="space-y-2 text-xs">
                        <div>
                          <div className="text-[11px] font-bold uppercase tracking-wider text-[#735442] mb-0.5">
                            Jugos al Agua
                          </div>
                          <div className="flex justify-between">
                            <span>Naranja, Frutilla, Frutos Rojos, Acerola naranja</span>
                            <span className="font-mono font-bold">
                              {formatPrice(15000, currency)}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>Mburukuja, Piña, Acerola, Durazno</span>
                            <span className="font-mono font-bold">
                              {formatPrice(12000, currency)}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>Piña con menta, Detox</span>
                            <span className="font-mono font-bold">
                              {formatPrice(13000, currency)}
                            </span>
                          </div>
                        </div>

                        <div className="pt-2 border-t border-[#decbb7]">
                          <div className="text-[11px] font-bold uppercase tracking-wider text-[#735442] mb-0.5">
                            Jugos con Leche / Batidos
                          </div>
                          <div className="flex justify-between">
                            <span>Mburukuja, Frutilla, Frutos Rojos, Durazno, Vitaminas Mix</span>
                            <span className="font-mono font-bold">
                              {formatPrice(20000, currency)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Footer Notice */}
            <div className="text-center pt-4 border-t border-[#8c2d19]/20 text-xs text-[#8c6b58] font-sans">
              <p>🥟 Todos nuestros productos son elaborados con ingredientes de primera calidad.</p>
              <p className="mt-1">Pedidos y reservas directo por WhatsApp.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
