import React from 'react';
import { Phone, Clock, MapPin, Heart, MessageCircle } from 'lucide-react';
import { Language } from '../types';
import { STORE_NAME, STORE_SLOGAN, WHATSAPP_PHONE } from '../data/menu';

interface FooterProps {
  language: Language;
  onOpenFlyer?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const isPt = language === 'pt';

  return (
    <footer className="bg-[#140e0b] text-[#d6c8bc] border-t border-[#c59b6d]/30 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-18">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Col 1: Brand & Bio */}
          <div className="space-y-3 md:col-span-1">
            <h3 className="font-serif text-2xl font-bold text-white tracking-tight">
              {STORE_NAME}
            </h3>
            <p className="text-xs italic text-[#d4af37] font-serif">
              "{STORE_SLOGAN}"
            </p>
            <p className="text-xs text-[#a89586] leading-relaxed font-light">
              {isPt
                ? 'Empadas artesanais folhadas, cafés de especialidade, panificados e delícias doces. Tradição e sabor incomparável a cada mordida.'
                : 'Empadas artesanales, cafés de especialidad, panificados y delicias dulces. Tradición y sabor inigualable en cada bocado.'}
            </p>
          </div>

          {/* Col 2: Horarios & Atención */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#d4af37]">
              {isPt ? 'Horário de Atendimento' : 'Horario de Atención'}
            </h4>
            <ul className="text-xs text-[#a89586] space-y-2">
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-[#dfd3c7]">
                    {isPt ? 'Segunda a Sábado:' : 'Lunes a Sábado:'}
                  </span>
                  <p>07:00 - 21:00 hs</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-[#dfd3c7]">
                    {isPt ? 'Domingos e Feriados:' : 'Domingos y Feriados:'}
                  </span>
                  <p>08:00 - 13:00 hs</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Col 3: Contato & Pedidos */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#d4af37]">
              {isPt ? 'Atendimento & Pedidos' : 'Atención & Pedidos'}
            </h4>
            <ul className="text-xs text-[#a89586] space-y-2.5">
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${WHATSAPP_PHONE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: +595 993 524 238
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>Salón & Envíos Delivery VIP</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Métodos de Pago */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#d4af37]">
              {isPt ? 'Formas de Pagamento' : 'Formas de Pago'}
            </h4>
            <div className="text-xs text-[#a89586] space-y-1.5">
              <p>• {isPt ? 'Dinheiro (Guaraníes, Reais, Dólares)' : 'Efectivo (Guaraníes, Reales, Dólares)'}</p>
              <p>• {isPt ? 'PIX Instantâneo' : 'PIX (Clientes de Brasil)'}</p>
              <p>• {isPt ? 'Cartões de Débito e Crédito' : 'Tarjetas de Débito y Crédito'}</p>
              <p>• {isPt ? 'Transferência Bancária' : 'Transferencia Bancaria'}</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 mt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8c7768] gap-4">
          <p>© {new Date().getFullYear()} Bett's Empadinhas & Café. Todos os direitos reservados.</p>
          <div className="flex items-center gap-2 text-[#a8825c]">
            <span className="font-serif italic">Haute Patisserie & Empadaria</span>
            <span aria-hidden="true">·</span>
            <span>Experiência Gastronômica Exclusiva</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
