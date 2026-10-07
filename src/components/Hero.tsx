import React from 'react';
import { Sparkles, Utensils, Clock, MapPin, ArrowDown } from 'lucide-react';
import { HERO_IMAGE } from '../data/menu';
import { Language, StoreConfig } from '../types';

interface HeroProps {
  language: Language;
  onExploreClick: () => void;
  onOpenFlyer?: () => void;
  storeConfig: StoreConfig;
}

export const Hero: React.FC<HeroProps> = ({
  language,
  onExploreClick,
  storeConfig,
}) => {
  const isPt = language === 'pt';

  return (
    <section className="relative overflow-hidden bg-[#140e0b] text-[#fbf8f4]">
      {/* Background Image with warm gradient scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt={storeConfig.storeName}
          className="w-full h-full object-cover object-center opacity-40 transform scale-102 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#120c09]/95 via-[#120c09]/85 to-[#120c09]/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#140e0b] via-transparent to-black/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
        <div className="max-w-2xl">
          {/* Eyebrow kicker with luxury tracking and gold diamond */}
          <div className="flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.25em] text-[#d4af37] mb-3.5">
            <Sparkles className="w-4 h-4 text-[#d4af37]" />
            <span>{isPt ? 'Maison & Gastronomia Artesanal' : 'Maison & Gastronomía Artesanal'}</span>
            <span aria-hidden="true" className="text-[#c59b6d]">·</span>
            <span>{isPt ? 'Edição Especial' : 'Edición Especial'}</span>
          </div>

          {/* Headline with text-wrap: balance */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-4" style={{ textWrap: 'balance' }}>
            {storeConfig.storeName}
          </h1>

          <p className="text-xl sm:text-2xl font-light text-[#e7d8c7] mb-3 italic font-serif">
            "{storeConfig.storeSlogan}"
          </p>

          <p className="text-sm sm:text-base text-[#c4b3a2] max-w-xl leading-relaxed mb-8 font-light">
            {isPt
              ? 'Receitas autorais e massa fina folhada que se desmancha ao primeiro toque. Rellenos nobres de camarão, costela, queijo catupiry legítimo e doces finos, harmonizados com cafés especiais.'
              : 'Recetas de autor y masa hojaldrada que se deshace al primer bocado. Rellenos nobles de camarón, costilla, queso catupiry legítimo y dulces finos, armonizados con cafés de especialidad.'}
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <button
              onClick={onExploreClick}
              className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-[#140e0b] bg-gradient-to-r from-[#e5c28f] via-[#d4af37] to-[#c59b6d] hover:brightness-105 active:scale-98 rounded-xl shadow-lg transition-all cursor-pointer font-serif"
            >
              <Utensils className="w-4 h-4 text-[#140e0b]" />
              <span>{isPt ? 'Explorar Cardápio' : 'Explorar Carta'}</span>
              <ArrowDown className="w-3.5 h-3.5 ml-1 text-[#140e0b]" />
            </button>
          </div>

          {/* Micro trust cues */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10 text-xs text-[#c4b3a2]">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#d4af37] shrink-0" />
              <span>{isPt ? 'Fornadas contínuas' : 'Horneadas continuas'}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#d4af37] shrink-0" />
              <span>{isPt ? 'Salão & Delivery VIP' : 'Salón & Delivery VIP'}</span>
            </div>
            <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
              <span>{isPt ? 'Aberto hoje' : 'Abierto hoy'}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
