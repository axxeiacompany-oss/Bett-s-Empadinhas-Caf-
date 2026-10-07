import React from 'react';
import {
  PieChart,
  SunMedium,
  Croissant,
  Wheat,
  Cookie,
  Users,
  Coffee,
  Snowflake,
  CupSoda,
  Sparkles,
  GlassWater,
  LayoutGrid,
} from 'lucide-react';
import { CATEGORIES } from '../data/menu';
import { CategoryId, Language } from '../types';

interface CategoryNavProps {
  selectedCategory: CategoryId;
  onSelectCategory: (id: CategoryId) => void;
  language: Language;
  countsByCategory: Record<string, number>;
  totalCount: number;
}

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  PieChart,
  SunMedium,
  Croissant,
  Wheat,
  Cookie,
  Users,
  Coffee,
  Snowflake,
  CupSoda,
  Sparkles,
  GlassWater,
};

export const CategoryNav: React.FC<CategoryNavProps> = ({
  selectedCategory,
  onSelectCategory,
  language,
  countsByCategory,
  totalCount,
}) => {
  const isPt = language === 'pt';

  return (
    <div className="sticky top-28 z-30 bg-[#faf7f2]/95 backdrop-blur-md border-b border-[#e8dfd5] shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar scroll-smooth">
          {/* "Todos" button */}
          <button
            onClick={() => onSelectCategory('todos')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap shrink-0 cursor-pointer ${
              selectedCategory === 'todos'
                ? 'bg-[#19120e] text-[#f7e6d0] border border-[#c59b6d]/60 shadow-sm'
                : 'bg-white text-[#5c4a3e] border border-[#ded7cb] hover:border-[#c59b6d]/50 hover:bg-[#f6eee2] hover:text-[#19120e]'
            }`}
          >
            <LayoutGrid className="w-4 h-4 shrink-0 text-[#c59b6d]" />
            <span>{isPt ? 'Coleção Completa' : 'Colección Completa'}</span>
            <span
              className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                selectedCategory === 'todos'
                  ? 'bg-white/15 text-[#f7e6d0]'
                  : 'bg-[#ede6da] text-[#735e50]'
              }`}
            >
              {totalCount}
            </span>
          </button>

          {/* Individual categories */}
          {CATEGORIES.map((cat) => {
            const IconComponent = ICON_MAP[cat.iconName] || PieChart;
            const isSelected = selectedCategory === cat.id;
            const count = countsByCategory[cat.id] || 0;

            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  isSelected
                    ? 'bg-[#19120e] text-[#f7e6d0] border border-[#c59b6d]/60 shadow-sm'
                    : 'bg-white text-[#5c4a3e] border border-[#ded7cb] hover:border-[#c59b6d]/50 hover:bg-[#f6eee2] hover:text-[#19120e]'
                }`}
              >
                <IconComponent className={`w-4 h-4 shrink-0 ${isSelected ? 'text-[#d4af37]' : 'text-[#8c7465]'}`} />
                <span>{cat.name[language]}</span>
                {count > 0 && (
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                      isSelected
                        ? 'bg-white/15 text-[#f7e6d0]'
                        : 'bg-[#ede6da] text-[#735e50]'
                    }`}
                  >
                    {count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
