import React, { useState, useMemo, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryNav } from './components/CategoryNav';
import { ProductCard } from './components/ProductCard';
import { ProductModal } from './components/ProductModal';
import { CartDrawer } from './components/CartDrawer';
import { OrderSuccessModal } from './components/OrderSuccessModal';
import { StoreConfigModal } from './components/StoreConfigModal';
import { ShareCatalogModal } from './components/ShareCatalogModal';
import { OrderReceiptModal } from './components/OrderReceiptModal';
import { Footer } from './components/Footer';
import { MENU_ITEMS, CATEGORIES, DEFAULT_STORE_CONFIG, CATEGORY_DEFAULT_IMAGES, LUXURY_EMPADA_SINGLE } from './data/menu';
import {
  Currency,
  Language,
  CategoryId,
  MenuItem,
  CartItem,
  CustomerOrderInfo,
  StoreConfig,
  SortOption,
} from './types';
import { formatPrice } from './utils/format';
import { ShoppingBag, Filter, X, ArrowUpDown, Check, CheckCircle2 } from 'lucide-react';

export default function App() {
  // Store Config persistence
  const [storeConfig, setStoreConfig] = useState<StoreConfig>(() => {
    try {
      const saved = localStorage.getItem('betts_store_config');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (!parsed.whatsappPhone || parsed.whatsappPhone === '595981000000') {
          parsed.whatsappPhone = DEFAULT_STORE_CONFIG.whatsappPhone;
        }
        return { ...DEFAULT_STORE_CONFIG, ...parsed };
      }
      return DEFAULT_STORE_CONFIG;
    } catch {
      return DEFAULT_STORE_CONFIG;
    }
  });

  // Language & Currency
  const [language, setLanguage] = useState<Language>(() => {
    return (localStorage.getItem('betts_lang') as Language) || 'pt';
  });

  const [currency, setCurrency] = useState<Currency>(() => {
    return (localStorage.getItem('betts_curr') as Currency) || 'PYG';
  });

  // Filters & Sorting
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('default');
  const [onlyFavorites, setOnlyFavorites] = useState(false);
  const [filterVegetarian, setFilterVegetarian] = useState(false);
  const [filterGlutenFree, setFilterGlutenFree] = useState(false);

  // Cart state
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('betts_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Favorites state
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('betts_favs');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Toast feedback
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Modals
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [activeModalItem, setActiveModalItem] = useState<MenuItem | null>(null);

  // Order Success & Receipt State
  const [orderSuccessInfo, setOrderSuccessInfo] = useState<{
    info: CustomerOrderInfo;
    total: number;
  } | null>(null);

  const [receiptInfo, setReceiptInfo] = useState<{
    orderInfo: CustomerOrderInfo;
    orderNumber: string;
  } | null>(null);

  // Persistence effects
  useEffect(() => {
    localStorage.setItem('betts_store_config', JSON.stringify(storeConfig));
  }, [storeConfig]);

  useEffect(() => {
    localStorage.setItem('betts_lang', language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem('betts_curr', currency);
  }, [currency]);

  useEffect(() => {
    localStorage.setItem('betts_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('betts_favs', JSON.stringify(favorites));
  }, [favorites]);

  const isPt = language === 'pt';

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  // Toggle Favorite
  const toggleFavorite = (itemId: string) => {
    setFavorites((prev) =>
      prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]
    );
  };

  // Cart operations
  const handleAddToCart = (item: CartItem) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex((i) => i.cartItemId === item.cartItemId);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += item.quantity;
        return updated;
      }
      return [...prev, item];
    });
    showToast(isPt ? `"${item.name}" adicionado ao pedido` : `"${item.name}" agregado al pedido`);
  };

  const handleQuickAdd = (item: MenuItem) => {
    if (item.options && item.options.length > 0) {
      setActiveModalItem(item);
      return;
    }
    const cartItem: CartItem = {
      cartItemId: `${item.id}-default`,
      productId: item.id,
      name: item.name[language],
      unitPrice: item.price,
      quantity: 1,
      image: item.image || CATEGORY_DEFAULT_IMAGES[item.categoryId] || LUXURY_EMPADA_SINGLE,
    };
    handleAddToCart(cartItem);
  };

  const handleUpdateQuantity = (cartItemId: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(cartItemId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.cartItemId === cartItemId ? { ...item, quantity: newQty } : item
      )
    );
  };

  const handleRemoveItem = (cartItemId: string) => {
    setCartItems((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Compute total cart quantity and sum
  const cartTotalQuantity = useMemo(
    () => cartItems.reduce((acc, item) => acc + item.quantity, 0),
    [cartItems]
  );
  const cartTotalPyg = useMemo(
    () => cartItems.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0),
    [cartItems]
  );

  // Compute counts by category
  const countsByCategory = useMemo(() => {
    const counts: Record<string, number> = {};
    MENU_ITEMS.forEach((item) => {
      counts[item.categoryId] = (counts[item.categoryId] || 0) + 1;
    });
    return counts;
  }, []);

  // Filtered & Sorted products list
  const filteredProducts = useMemo(() => {
    const list = MENU_ITEMS.filter((item) => {
      // Category match
      if (selectedCategory !== 'todos' && item.categoryId !== selectedCategory) {
        return false;
      }

      // Search match
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const nameMatch =
          item.name.es.toLowerCase().includes(q) || item.name.pt.toLowerCase().includes(q);
        const descMatch =
          item.description.es.toLowerCase().includes(q) ||
          item.description.pt.toLowerCase().includes(q);
        const subCatMatch = item.subCategory?.toLowerCase().includes(q);
        if (!nameMatch && !descMatch && !subCatMatch) {
          return false;
        }
      }

      // Favorites filter
      if (onlyFavorites && !favorites.includes(item.id)) {
        return false;
      }

      // Vegetarian filter
      if (filterVegetarian && !item.isVegetarian) {
        return false;
      }

      // Gluten Free filter
      if (filterGlutenFree && !item.isGlutenFree) {
        return false;
      }

      return true;
    });

    // Apply sorting
    if (sortBy === 'price_asc') {
      return [...list].sort((a, b) => a.price - b.price);
    }
    if (sortBy === 'price_desc') {
      return [...list].sort((a, b) => b.price - a.price);
    }
    if (sortBy === 'name_asc') {
      return [...list].sort((a, b) => a.name[language].localeCompare(b.name[language]));
    }

    return list;
  }, [
    selectedCategory,
    searchQuery,
    sortBy,
    onlyFavorites,
    filterVegetarian,
    filterGlutenFree,
    favorites,
    language,
  ]);

  // Group by category when "todos" is selected, default sort, and no active search
  const showGroupedSections =
    selectedCategory === 'todos' &&
    !searchQuery.trim() &&
    !onlyFavorites &&
    sortBy === 'default';

  const handleOpenReceiptView = (info: CustomerOrderInfo) => {
    const randomOrderNum = Math.floor(1000 + Math.random() * 9000).toString();
    setReceiptInfo({ orderInfo: info, orderNumber: randomOrderNum });
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#241a15] flex flex-col font-sans selection:bg-[#8c2d19] selection:text-white">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-4 z-50 flex items-center gap-2 px-4 py-2.5 bg-[#241a15] text-white rounded-xl shadow-lg border border-white/10 text-xs font-medium animate-in fade-in slide-in-from-top-2 duration-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 1. Header with Store Status & QR Code shortcut */}
      <Header
        cartCount={cartTotalQuantity}
        currency={currency}
        language={language}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenShareModal={() => setIsShareOpen(true)}
        onOpenSettingsModal={() => setIsSettingsOpen(true)}
        favoritesCount={favorites.length}
        onOpenFavorites={() => {
          setOnlyFavorites((prev) => !prev);
          setSelectedCategory('todos');
        }}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        activeCategory={selectedCategory}
        onSelectCategory={(id) => {
          setSelectedCategory(id as CategoryId);
          setOnlyFavorites(false);
        }}
        storeConfig={storeConfig}
      />

      {/* 2. Hero Section */}
      <Hero
        language={language}
        onExploreClick={() => {
          const menuAnchor = document.getElementById('catalog-content');
          menuAnchor?.scrollIntoView({ behavior: 'smooth' });
        }}
        storeConfig={storeConfig}
      />

      {/* 3. Category Bar Sticky */}
      <CategoryNav
        selectedCategory={selectedCategory}
        onSelectCategory={(id) => {
          setSelectedCategory(id);
          setOnlyFavorites(false);
          const elem = document.getElementById('catalog-content');
          if (elem) {
            const offset = 140;
            const top = elem.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
          }
        }}
        language={language}
        countsByCategory={countsByCategory}
        totalCount={MENU_ITEMS.length}
      />

      {/* 4. Main Catalog Content */}
      <main id="catalog-content" className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Active Filters, Count & Sorting Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#e8dfd5] mb-8">
          <div className="flex items-center gap-3">
            <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#19120e]">
              {onlyFavorites
                ? isPt
                  ? 'Meus Itens Favoritos'
                  : 'Mis Ítems Favoritos'
                : selectedCategory === 'todos'
                ? isPt
                  ? 'Cardápio Completo'
                  : 'Carta Completa'
                : CATEGORIES.find((c) => c.id === selectedCategory)?.name[language]}
            </h2>
            <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[#f3ebdF] text-[#8c7465]">
              {filteredProducts.length} {isPt ? 'produtos' : 'productos'}
            </span>
          </div>

          {/* Quick Dietary, Favorites filter toggles and Sorting */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            {/* Sorting Dropdown */}
            <div className="flex items-center gap-1.5 bg-white border border-[#ded7cb] hover:border-[#c59b6d]/60 rounded-xl px-2.5 py-1.5 text-[#5c4a3e] transition-colors">
              <ArrowUpDown className="w-3.5 h-3.5 text-[#c59b6d]" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="bg-transparent text-xs font-semibold focus:outline-hidden cursor-pointer text-[#19120e]"
              >
                <option value="default">{isPt ? 'Ordem Padrão' : 'Orden Estándar'}</option>
                <option value="price_asc">{isPt ? 'Menor Preço' : 'Menor Precio'}</option>
                <option value="price_desc">{isPt ? 'Maior Preço' : 'Mayor Precio'}</option>
                <option value="name_asc">{isPt ? 'Nome (A - Z)' : 'Nombre (A - Z)'}</option>
              </select>
            </div>

            {onlyFavorites && (
              <button
                onClick={() => setOnlyFavorites(false)}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#19120e] text-[#f7e6d0] border border-[#c59b6d]/60 font-medium cursor-pointer"
              >
                <span>{isPt ? 'Filtrando: Favoritos' : 'Filtrando: Favoritos'}</span>
                <X className="w-3.5 h-3.5" />
              </button>
            )}

            <button
              onClick={() => setFilterVegetarian((prev) => !prev)}
              className={`px-3 py-1.5 rounded-xl font-medium transition-colors cursor-pointer ${
                filterVegetarian
                  ? 'bg-[#19120e] text-[#f7e6d0] border border-[#c59b6d]/60 shadow-xs'
                  : 'bg-white border border-[#ded7cb] hover:border-[#c59b6d]/50 text-[#5c4a3e] hover:bg-[#fbf7f0]'
              }`}
            >
              🌱 {isPt ? 'Vegetarianos' : 'Vegetarianos'}
            </button>

            <button
              onClick={() => setFilterGlutenFree((prev) => !prev)}
              className={`px-3 py-1.5 rounded-xl font-medium transition-colors cursor-pointer ${
                filterGlutenFree
                  ? 'bg-[#19120e] text-[#f7e6d0] border border-[#c59b6d]/60 shadow-xs'
                  : 'bg-white border border-[#ded7cb] hover:border-[#c59b6d]/50 text-[#5c4a3e] hover:bg-[#fbf7f0]'
              }`}
            >
              🌾 {isPt ? 'Sem Glúten' : 'Sin Gluten'}
            </button>

            {(searchQuery || filterVegetarian || filterGlutenFree || onlyFavorites || sortBy !== 'default') && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setFilterVegetarian(false);
                  setFilterGlutenFree(false);
                  setOnlyFavorites(false);
                  setSortBy('default');
                  setSelectedCategory('todos');
                }}
                className="text-xs text-[#a8825c] hover:text-[#19120e] hover:underline px-2 py-1 cursor-pointer font-medium"
              >
                {isPt ? 'Limpar filtros' : 'Limpiar filtros'}
              </button>
            )}
          </div>
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-[#e8e2d9] p-8 max-w-lg mx-auto shadow-xs">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#f4eee6] flex items-center justify-center text-[#8c7465] mb-4">
              <Filter className="w-8 h-8 opacity-60" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#3d271d] mb-2">
              {isPt ? 'Nenhum item encontrado' : 'Ningún ítem encontrado'}
            </h3>
            <p className="text-xs sm:text-sm text-[#735e50] mb-6">
              {isPt
                ? 'Tente ajustar sua busca ou limpar os filtros ativos para ver mais opções deliciosas.'
                : 'Intenta ajustar tu búsqueda o limpiar los filtros activos para ver más delicias.'}
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setFilterVegetarian(false);
                setFilterGlutenFree(false);
                setOnlyFavorites(false);
                setSortBy('default');
                setSelectedCategory('todos');
              }}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-[#8c2d19] hover:bg-[#722312] rounded-xl transition-colors cursor-pointer"
            >
              {isPt ? 'Ver Todo o Cardápio' : 'Ver Todo el Catálogo'}
            </button>
          </div>
        )}

        {/* Catalog Grid View */}
        {showGroupedSections ? (
          /* Grouped by category for an editorial, organized menu layout */
          <div className="space-y-16">
            {CATEGORIES.map((category) => {
              const categoryItems = filteredProducts.filter(
                (item) => item.categoryId === category.id
              );
              if (categoryItems.length === 0) return null;

              return (
                <section key={category.id} className="space-y-6">
                  {/* Category Title & Prose */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#ded7cb] pb-3">
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-[#3d271d]">
                        {category.name[language]}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#735e50] mt-1 max-w-xl">
                        {category.description[language]}
                      </p>
                    </div>
                    <span className="text-xs font-medium text-[#8c7465] shrink-0">
                      {categoryItems.length} {isPt ? 'itens' : 'ítems'}
                    </span>
                  </div>

                  {/* 3-Column Desktop Grid with generous whitespace */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {categoryItems.map((item) => (
                      <ProductCard
                        key={item.id}
                        item={item}
                        currency={currency}
                        language={language}
                        onOpenDetails={setActiveModalItem}
                        onQuickAdd={handleQuickAdd}
                        isFavorite={favorites.includes(item.id)}
                        onToggleFavorite={toggleFavorite}
                        cartQuantity={
                          cartItems.find((ci) => ci.productId === item.id)?.quantity || 0
                        }
                      />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        ) : (
          /* Flat Grid for filtered / single category view */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((item) => (
              <ProductCard
                key={item.id}
                item={item}
                currency={currency}
                language={language}
                onOpenDetails={setActiveModalItem}
                onQuickAdd={handleQuickAdd}
                isFavorite={favorites.includes(item.id)}
                onToggleFavorite={toggleFavorite}
                cartQuantity={
                  cartItems.find((ci) => ci.productId === item.id)?.quantity || 0
                }
              />
            ))}
          </div>
        )}
      </main>

      {/* 5. Mobile Sticky Bottom Bar (Controlled < 15% viewport height per SKILL rule) */}
      {cartTotalQuantity > 0 && (
        <div className="sm:hidden fixed bottom-3 left-3 right-3 z-40">
          <button
            onClick={() => setIsCartOpen(true)}
            className="w-full flex items-center justify-between p-3.5 bg-[#8c2d19] text-white rounded-2xl shadow-xl active:scale-98 transition-all cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-white text-[#8c2d19] text-xs font-bold flex items-center justify-center">
                {cartTotalQuantity}
              </span>
              <span className="text-xs font-bold uppercase tracking-wider">
                {isPt ? 'Ver Pedido' : 'Ver Pedido'}
              </span>
            </div>
            <span className="font-mono text-sm font-bold tabular-nums">
              {formatPrice(cartTotalPyg, currency)}
            </span>
          </button>
        </div>
      )}

      {/* 6. Product Detail / Options Modal */}
      <ProductModal
        item={activeModalItem}
        isOpen={Boolean(activeModalItem)}
        onClose={() => setActiveModalItem(null)}
        currency={currency}
        language={language}
        onAddToCart={handleAddToCart}
      />

      {/* 7. Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        currency={currency}
        language={language}
        config={storeConfig}
        onOrderSuccess={(info, total) => {
          setIsCartOpen(false);
          setOrderSuccessInfo({ info, total });
        }}
        onViewReceipt={(info) => {
          handleOpenReceiptView(info);
        }}
      />

      {/* 8. Order Success Modal */}
      <OrderSuccessModal
        isOpen={Boolean(orderSuccessInfo)}
        onClose={() => setOrderSuccessInfo(null)}
        orderInfo={orderSuccessInfo?.info || null}
        totalPyg={orderSuccessInfo?.total || 0}
        currency={currency}
        language={language}
      />

      {/* 10. Store Config / Settings Modal */}
      <StoreConfigModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        config={storeConfig}
        onSave={(newCfg) => {
          setStoreConfig(newCfg);
          showToast(isPt ? 'Configurações salvas com sucesso' : 'Configuración guardada con éxito');
        }}
        language={language}
      />

      {/* 11. Share / QR Code Modal */}
      <ShareCatalogModal
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
        language={language}
        config={storeConfig}
      />

      {/* 12. Kitchen & Order Receipt Ticket Modal */}
      {receiptInfo && (
        <OrderReceiptModal
          isOpen={Boolean(receiptInfo)}
          onClose={() => setReceiptInfo(null)}
          orderInfo={receiptInfo.orderInfo}
          items={cartItems}
          totalPyg={cartTotalPyg}
          currency={currency}
          language={language}
          config={storeConfig}
          orderNumber={receiptInfo.orderNumber}
        />
      )}

      {/* 13. Footer */}
      <Footer language={language} />
    </div>
  );
}
