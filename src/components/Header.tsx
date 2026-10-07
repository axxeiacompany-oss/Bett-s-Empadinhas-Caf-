import React from 'react';
import { ShoppingBag, Search, Heart, QrCode, Settings } from 'lucide-react';
import { Currency, Language, StoreConfig } from '../types';

interface HeaderProps {
  cartCount: number;
  currency: Currency;
  onCurrencyChange?: (c: Currency) => void;
  language: Language;
  onLanguageChange?: (l: Language) => void;
  onOpenCart: () => void;
  onOpenDigitalFlyer?: () => void;
  onOpenShareModal: () => void;
  onOpenSettingsModal: () => void;
  favoritesCount: number;
  onOpenFavorites: () => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  activeCategory: string;
  onSelectCategory: (id: string) => void;
  storeConfig: StoreConfig;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  language,
  onOpenCart,
  onOpenShareModal,
  onOpenSettingsModal,
  favoritesCount,
  onOpenFavorites,
  searchQuery,
  onSearchChange,
  onSelectCategory,
  storeConfig,
}) => {
  const isPt = language === 'pt';

  // Check store status
  const currentHour = new Date().getHours();
  const isStoreOpen =
    storeConfig.isOpenOverride ??
    (currentHour >= storeConfig.openingHour && currentHour < storeConfig.closingHour);

  return (
    <header className="sticky top-0 z-40 bg-[#faf7f2]/95 backdrop-blur-md border-b border-[#e8dfd5] transition-all">
      {/* Top utility row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Zone 1: Pure Brand Wordmark & Operational Indicator */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                onSelectCategory('todos');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-left group cursor-pointer"
            >
              <span className="font-serif text-2xl sm:text-3xl font-extrabold tracking-tight text-[#19120e] group-hover:text-[#9d774a] transition-colors">
                {storeConfig.storeName}
              </span>
            </button>

            {/* Live Open / Closed indicator */}
            <div className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white border border-[#e8dfd5] shadow-2xs">
              <span
                className={`w-2 h-2 rounded-full ${
                  isStoreOpen ? 'bg-emerald-500 animate-pulse' : 'bg-rose-500'
                }`}
              />
              <span className={isStoreOpen ? 'text-emerald-700' : 'text-rose-700'}>
                {isStoreOpen
                  ? isPt
                    ? `Aberto até ${storeConfig.closingHour}:00`
                    : `Abierto hasta ${storeConfig.closingHour}:00`
                  : isPt
                  ? `Fechado (Abre às ${storeConfig.openingHour}:00)`
                  : `Cerrado (Abre a las ${storeConfig.openingHour}:00)`}
              </span>
            </div>
          </div>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#5c4a3e]">
            <button
              onClick={() => onSelectCategory('empadas')}
              className="hover:text-[#9d774a] transition-colors cursor-pointer"
            >
              {isPt ? 'Empadas' : 'Empadas'}
            </button>
            <button
              onClick={() => onSelectCategory('desayunos')}
              className="hover:text-[#9d774a] transition-colors cursor-pointer"
            >
              {isPt ? 'Café da Manhã' : 'Desayunos'}
            </button>
            <button
              onClick={() => onSelectCategory('croissants')}
              className="hover:text-[#9d774a] transition-colors cursor-pointer"
            >
              Croissants
            </button>
            <button
              onClick={() => onSelectCategory('dulces')}
              className="hover:text-[#9d774a] transition-colors cursor-pointer"
            >
              {isPt ? 'Doces' : 'Dulces'}
            </button>
            <button
              onClick={() => onSelectCategory('cafes_calientes')}
              className="hover:text-[#9d774a] transition-colors cursor-pointer"
            >
              {isPt ? 'Cafés' : 'Cafés'}
            </button>
            <button
              onClick={() => onSelectCategory('jugos')}
              className="hover:text-[#9d774a] transition-colors cursor-pointer"
            >
              {isPt ? 'Sucos & Bebidas' : 'Jugos & Bebidas'}
            </button>
          </nav>

          {/* Zone 3: Primary Actions (QR Code, Settings, Favorites, Cart) */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* QR Code / Share */}
            <button
              onClick={onOpenShareModal}
              className="p-2 text-[#5c4a3e] hover:text-[#9d774a] hover:bg-[#f6eee2] rounded-xl transition-colors cursor-pointer"
              title={isPt ? 'Gerar QR Code para mesas' : 'Generar QR Code para mesas'}
            >
              <QrCode className="w-4 h-4" />
            </button>

            {/* Settings button */}
            <button
              onClick={onOpenSettingsModal}
              className="p-2 text-[#5c4a3e] hover:text-[#9d774a] hover:bg-[#f6eee2] rounded-xl transition-colors cursor-pointer"
              title={isPt ? 'Configurações da Loja' : 'Ajustes del Comercio'}
            >
              <Settings className="w-4 h-4" />
            </button>

            {/* Favorites shortcut */}
            {favoritesCount > 0 && (
              <button
                onClick={onOpenFavorites}
                className="relative p-2 text-[#5c4a3e] hover:text-[#9d774a] hover:bg-[#f6eee2] rounded-xl transition-colors cursor-pointer"
                title={isPt ? 'Favoritos salvos' : 'Favoritos guardados'}
              >
                <Heart className="w-4 h-4 fill-[#d4af37] text-[#d4af37]" />
                <span className="absolute -top-1 -right-1 bg-[#19120e] text-[#f7e6d0] border border-[#c59b6d]/50 text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {favoritesCount}
                </span>
              </button>
            )}

            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#19120e] hover:bg-[#9d774a] active:scale-98 rounded-xl shadow-sm border border-[#c59b6d]/50 transition-all cursor-pointer"
              aria-label={isPt ? 'Abrir Carrinho' : 'Abrir Carrito'}
            >
              <ShoppingBag className="w-4 h-4 text-[#f7e6d0]" />
              <span className="hidden sm:inline font-medium tracking-wide">{isPt ? 'Pedido' : 'Pedido'}</span>
              <span className="inline-flex items-center justify-center min-w-[1.25rem] h-5 px-1 bg-[#d4af37] text-[#19120e] text-xs font-bold rounded-full">
                {cartCount}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Subheader live search bar for fast filtering */}
      <div className="bg-[#f6eee2] border-t border-[#e8dfd5] py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="relative flex-1 max-w-lg">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8c7465]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder={
                isPt
                  ? 'Buscar por empadas, cafés, croissants, mbeju, recheios...'
                  : 'Buscar por empadas, cafés, croissants, mbeju, sabores...'
              }
              className="w-full pl-9 pr-4 py-1.5 text-xs sm:text-sm bg-white border border-[#ded7cb] rounded-xl text-[#2a2420] placeholder-[#8c7465] focus:outline-hidden focus:ring-1 focus:ring-[#c59b6d] focus:border-[#c59b6d] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#8c7465] hover:text-[#2a2420]"
              >
                ✕
              </button>
            )}
          </div>

          <div className="hidden md:flex items-center gap-4 text-xs text-[#735e50]">
            <span>⏱️ {storeConfig.deliveryEstimatedMinutes}</span>
            <span aria-hidden="true">·</span>
            <span>🛵 {isPt ? 'Delivery & Retirada' : 'Delivery & Retiro'}</span>
            <span aria-hidden="true">·</span>
            <span>💬 {isPt ? 'Pedidos Diretos via WhatsApp' : 'Pedidos Directos por WhatsApp'}</span>
          </div>
        </div>
      </div>
    </header>
  );
};
