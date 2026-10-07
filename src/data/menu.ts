import { Category, MenuItem, StoreConfig } from '../types';

export const HERO_IMAGE = '/src/assets/images/hero_betts_catalog_1791395501305.jpg';
export const SHOWCASE_EMPADAS = '/src/assets/images/showcase_empadas_1791395513700.jpg';
export const SHOWCASE_PASTRIES = '/src/assets/images/showcase_pastries_dulces_1791395526835.jpg';
export const SHOWCASE_BEVERAGES = '/src/assets/images/showcase_beverages_cafe_1791395537078.jpg';
export const SHOWCASE_MBEJU_CHIPA = '/src/assets/images/cat_mbeju_chipa_1791396277503.jpg';
export const SHOWCASE_PANIFICADOS = '/src/assets/images/cat_panificados_queijo_1791396288560.jpg';
export const SHOWCASE_BOCADITOS = '/src/assets/images/cat_bocaditos_fiesta_1791396297867.jpg';
export const SHOWCASE_ICED_COFFEE = '/src/assets/images/cat_iced_coffee_beverages_1791396306601.jpg';

// Dedicated luxury product photography
export const LUXURY_EMPADA_SINGLE = '/src/assets/images/luxury_empada_single_1791396723805.jpg';
export const LUXURY_EMPADAO_PIE = '/src/assets/images/luxury_empadao_pie_1791396734212.jpg';
export const LUXURY_CROISSANT = '/src/assets/images/luxury_croissant_pastry_1791396746994.jpg';
export const LUXURY_SPECIALTY_COFFEE = '/src/assets/images/luxury_specialty_coffee_1791396756660.jpg';
export const LUXURY_SWEETS_BROWNIE = '/src/assets/images/luxury_sweets_brownie_1791396766267.jpg';

// Authentic individual product photos
export const PROD_MBEJU_TRADICIONAL = '/src/assets/images/prod_mbeju_tradicional_1791397752532.jpg';
export const PROD_AVOCADO_TOAST = '/src/assets/images/prod_avocado_toast_1791397761942.jpg';
export const PROD_EMPADAS_DULCES = '/src/assets/images/prod_empadas_dulces_1791397770869.jpg';
export const PROD_CHOCOLATE_CALIENTE = '/src/assets/images/prod_chocolate_caliente_1791397780969.jpg';
export const PROD_SODA_ITALIANA = '/src/assets/images/prod_soda_italiana_1791397793302.jpg';
export const PROD_JUGO_MARACUJA = '/src/assets/images/prod_jugo_maracuja_1791397805046.jpg';
export const PROD_CROISSANT_DULCE = '/src/assets/images/prod_croissant_dulce_1791397814917.jpg';
export const PROD_PAO_DE_QUEIJO = '/src/assets/images/prod_pao_de_queijo_1791397825374.jpg';
export const PROD_MATCHA_LATTE = '/src/assets/images/prod_matcha_latte_1791397836802.jpg';
export const PROD_MEDIALUNAS = '/src/assets/images/prod_medialunas_1791397847360.jpg';
export const PROD_CHIPA_PARAGUAYA = '/src/assets/images/prod_chipa_paraguaya_1791397636043.jpg';
export const PROD_CINNAMON_ROLL = '/src/assets/images/prod_cinnamon_roll_1791397647746.jpg';
export const PROD_ALFAJORES_MAICENA = '/src/assets/images/prod_alfajores_maicena_1791397659686.jpg';
export const PROD_CROISSANT_SALADO = '/src/assets/images/prod_croissant_salado_1791397678465.jpg';
export const PROD_HUEVOS_REVUELTOS = '/src/assets/images/prod_huevos_revueltos_1791397707483.jpg';
export const PROD_EMPADA_PRESUNTO_QUEIJO = '/src/assets/images/prod_empada_presunto_queijo_1791398413032.jpg';
export const PROD_EMPADA_CARNE = '/src/assets/images/prod_empada_carne_1791399080774.jpg';
export const PROD_EMPADA_CARNE_DESFIADA = '/src/assets/images/prod_empada_desfiada_1791399210720.jpg';
export const PROD_EMPADA_CARNE_SECA_ABOBORA = '/src/assets/images/prod_empada_seca_abobora_1791399313591.jpg';
export const PROD_EMPADA_CALABRESA = '/src/assets/images/prod_empada_calabresa_1791399447508.jpg';
export const PROD_EMPADA_FRANGO = '/src/assets/images/prod_empada_frango_1791399658699.jpg';
export const PROD_EMPADA_PALMITO = '/src/assets/images/prod_empada_palmito_1791399671835.jpg';
export const PROD_EMPADA_QUEIJO = '/src/assets/images/prod_empada_queijo_1791399685079.jpg';
export const PROD_EMPADA_CAMARAO = '/src/assets/images/prod_empada_camarao_1791399697071.jpg';
export const PROD_EMPADA_COSTELA = '/src/assets/images/prod_empada_costela_1791399715731.jpg';
export const PROD_EMPADA_ESPINAFRE = '/src/assets/images/prod_empada_espinafre_1791399728095.jpg';
export const PROD_PASTAFROLA = '/src/assets/images/prod_pastafrola_1791399740189.jpg';
export const PROD_COOKIES = '/src/assets/images/prod_cookies_1791399752691.jpg';
export const PROD_EMPADA_MANDIOCA = '/src/assets/images/prod_empada_mandioca_1791399768550.jpg';
export const PROD_EMPADA_BACALHAU = '/src/assets/images/prod_empada_bacalhau_1791399781862.jpg';

// Exchange rates approximate (1 BRL ≈ 1380 PYG, 1 USD ≈ 7800 PYG)
export const EXCHANGE_RATES = {
  PYG: 1,
  BRL: 1 / 1380,
  USD: 1 / 7800,
};

export const DEFAULT_STORE_CONFIG: StoreConfig = {
  storeName: "Bett's Empadinhas & Café",
  storeSlogan: 'Tu mejor momento del día',
  whatsappPhone: '595993524238',
  address: 'Av. Gastronómica 1234 - Salón & Delivery',
  deliveryEstimatedMinutes: '25 - 40 min',
  defaultDeliveryFeePyg: 10000,
  pixKey: 'betts@empadinhas.com',
  openingHour: 7,
  closingHour: 21,
};

export const WHATSAPP_PHONE = DEFAULT_STORE_CONFIG.whatsappPhone;
export const STORE_NAME = DEFAULT_STORE_CONFIG.storeName;
export const STORE_SLOGAN = DEFAULT_STORE_CONFIG.storeSlogan;

export const CATEGORY_DEFAULT_IMAGES: Record<string, string> = {
  empadas: LUXURY_EMPADA_SINGLE,
  desayunos: PROD_MBEJU_TRADICIONAL,
  croissants: LUXURY_CROISSANT,
  panificados: PROD_PAO_DE_QUEIJO,
  dulces: LUXURY_SWEETS_BROWNIE,
  compartir: SHOWCASE_BOCADITOS,
  cafes_calientes: LUXURY_SPECIALTY_COFFEE,
  cafes_frios: SHOWCASE_ICED_COFFEE,
  tes: PROD_MATCHA_LATTE,
  sodas: PROD_SODA_ITALIANA,
  jugos: PROD_JUGO_MARACUJA,
};

export const CATEGORIES: Category[] = [
  {
    id: 'empadas',
    name: { es: 'Empadas Artesanales', pt: 'Empadas Artesanais' },
    iconName: 'PieChart',
    description: {
      es: 'La especialidad de la casa: masa fina dorada con rellenos salados y dulces generosos.',
      pt: 'A especialidade da casa: massa fina folhada e dourada com recheios salgados e doces generosos.',
    },
  },
  {
    id: 'desayunos',
    name: { es: 'Empezá Bien el Día', pt: 'Comece Bem o Dia' },
    iconName: 'SunMedium',
    description: {
      es: 'Desayunos completos, mbeju crocante, chipa tradicional y opciones para recargar energías.',
      pt: 'Café da manhã completo, mbeju crocante, chipa tradicional e opções para recarregar as energias.',
    },
  },
  {
    id: 'croissants',
    name: { es: 'Croissants', pt: 'Croissants' },
    iconName: 'Croissant',
    description: {
      es: 'Hojaldre francés crujiente y mantecoso, en versiones saladas y dulces irresistibles.',
      pt: 'Folhado francês crocante e amanteigado, em versões salgadas e doces irresistíveis.',
    },
  },
  {
    id: 'panificados',
    name: { es: 'Panificados', pt: 'Panificados & Pães' },
    iconName: 'Wheat',
    description: {
      es: 'Panes recién horneados, pan de queso, pan de papas relleno y tostadas especiales.',
      pt: 'Pães recém assados, pão de queijo, pão de batata recheado e torradas especiais.',
    },
  },
  {
    id: 'dulces',
    name: { es: 'Amantes de lo Dulce', pt: 'Amantes do Doce' },
    iconName: 'Cookie',
    description: {
      es: 'Brownies con dulce de leche, brigadeiros, medialunas, cinnamon rolls y alfajores caseros.',
      pt: 'Brownies com doce de leite, brigadeiros, medialunas, cinnamon rolls e alfajores caseiros.',
    },
  },
  {
    id: 'compartir',
    name: { es: 'Ideales para Compartir', pt: 'Ideais para Compartilhar' },
    iconName: 'Users',
    description: {
      es: 'Cajas de 100 bocaditos y salgadinhos para eventos, reuniones familiares y celebraciones.',
      pt: 'Centos de salgadinhos e mini bocaditos para festas, reuniões e celebrações.',
    },
  },
  {
    id: 'cafes_calientes',
    name: { es: 'Cafés y Chocolates Calientes', pt: 'Cafés e Chocolates Quentes' },
    iconName: 'Coffee',
    description: {
      es: 'Expresos intensos, lattes cremosos, capuccinos con chantilly y chocolates europeos espesos.',
      pt: 'Expressos intensos, lattes cremosos, capuccinos com chantilly e chocolates europeus espessos.',
    },
  },
  {
    id: 'cafes_frios',
    name: { es: 'Café y Chocolates Fríos', pt: 'Cafés e Chocolates Gelados' },
    iconName: 'Snowflake',
    description: {
      es: 'Capuccinos helados, mocaccinos frappé y chocolate batido frío para los días cálidos.',
      pt: 'Capuccinos gelados, mocaccinos frappé e chocolate batido gelado.',
    },
  },
  {
    id: 'tes',
    name: { es: 'Hora del Té', pt: 'Hora do Chá' },
    iconName: 'CupSoda',
    description: {
      es: 'Matcha ceremonial caliente o latte frío, chai latte especiado y té mate tradicional paraguayo.',
      pt: 'Matcha cerimonial quente ou latte gelado, chai latte aromático e chá mate tradicional.',
    },
  },
  {
    id: 'sodas',
    name: { es: 'Sodas Italianas', pt: 'Sodas Italianas' },
    iconName: 'Sparkles',
    description: {
      es: 'Refrescantes bebidas gasificadas con jarabes artesanales de manzana verde, cítricos y frutos rojos.',
      pt: 'Bebidas gasificadas refrescantes com xaropes artesanais de maçã verde, cítricos e frutas vermelhas.',
    },
  },
  {
    id: 'jugos',
    name: { es: 'Bebidas Heladas y Jugos', pt: 'Bebidas Geladas e Sucos' },
    iconName: 'GlassWater',
    description: {
      es: 'Jugos de frutas frescas al agua o batidos con leche cremosa, mburukujá, frutilla y detox.',
      pt: 'Sucos de frutas naturais na água ou batidos com leite cremoso, maracujá, morango e detox.',
    },
  },
];

export const MENU_ITEMS: MenuItem[] = [
  // ================= EMPADAS =================
  {
    id: 'emp-mini',
    name: { es: 'Mini Empadas (Unidad)', pt: 'Mini Empadas (Unidade)' },
    description: {
      es: 'Bocados individuales horneados en todos los sabores salados o dulces disponibles.',
      pt: 'Mini empadinhas individuais assadas na hora, disponíveis em todos os sabores.',
    },
    price: 5000,
    categoryId: 'empadas',
    subCategory: 'Especial',
    image: SHOWCASE_EMPADAS,
    featured: true,
    highlightBadge: { es: 'Favorito', pt: 'Favorito' },
    options: [
      {
        name: { es: 'Sabor de la Mini Empada', pt: 'Sabor da Mini Empada' },
        choices: [
          { name: { es: 'Pollo con Catupiry', pt: 'Frango com Catupiry' } },
          { name: { es: 'Carne Desmechada', pt: 'Carne Desfiada' } },
          { name: { es: 'Jamón y Queso', pt: 'Presunto e Queijo' } },
          { name: { es: '4 Quesos', pt: '4 Queijos' } },
          { name: { es: 'Palmito', pt: 'Palmito' } },
          { name: { es: 'Dulce: Nutella', pt: 'Doce: Nutella' } },
          { name: { es: 'Dulce: Dulce de Leche', pt: 'Doce: Doce de Leite' } },
        ],
      },
    ],
  },
  {
    id: 'emp-empadao',
    name: { es: 'Empadão Artesanal (1 Kilo)', pt: 'Empadão Artesanal (1 Quilo)' },
    description: {
      es: 'Tarta grande de masa hojaldrada quebradiza rellena a elección (1kg rinde 6-8 porciones).',
      pt: 'Torta grande de massa podre artesanal que desmancha na boca (1kg rende de 6 a 8 porções).',
    },
    price: 150000,
    categoryId: 'empadas',
    subCategory: 'Familiar',
    image: LUXURY_EMPADAO_PIE,
    featured: true,
    highlightBadge: { es: '1 Kilo', pt: '1 Quilo' },
    options: [
      {
        name: { es: 'Relleno del Empadão', pt: 'Recheio do Empadão' },
        choices: [
          { name: { es: 'Pollo con Catupiry', pt: 'Frango com Catupiry' } },
          { name: { es: 'Carne Desmechada con Queso', pt: 'Carne Desfiada com Queijo' } },
          { name: { es: 'Palmito con Queso Blanco', pt: 'Palmito com Queijo Branco' } },
          { name: { es: 'Costilla Horneada', pt: 'Costela Assada' } },
        ],
      },
    ],
  },
  // Empadas Clásicas al Horno
  {
    id: 'emp-clas-jamon',
    name: { es: 'Empada Clásica Jamón y Queso', pt: 'Empada Clássica Presunto e Queijo' },
    description: {
      es: 'Masa fina dorada al horno rellena de jamón cocido seleccionado y queso muzzarella fundido.',
      pt: 'Massa fina dourada ao forno recheada com presunto cozido e queijo derretido.',
    },
    price: 8000,
    image: PROD_EMPADA_PRESUNTO_QUEIJO,
    categoryId: 'empadas',
    subCategory: 'Clásicas al Horno',
  },
  {
    id: 'emp-clas-pollo',
    name: { es: 'Empada Clásica de Pollo', pt: 'Empada Clássica de Frango' },
    description: {
      es: 'Masa fina dorada rellena de pechuga de pollo sazonada con especias aromáticas, tomate y hierbas frescas.',
      pt: 'Peito de frango desfiado suculento temperado com ervas frescas e toque especial em massa podre douradinha.',
    },
    price: 8000,
    categoryId: 'empadas',
    subCategory: 'Clásicas al Horno',
    image: PROD_EMPADA_FRANGO,
  },
  {
    id: 'emp-clas-carne',
    name: { es: 'Empada Clásica de Carne', pt: 'Empada Clássica de Carne' },
    description: {
      es: 'Masa quebrada tradicional dorada y mantecosa que se deshace en la boca, generosamente rellena de carne vacuna seleccionada, estofada lentamente a fuego suave con cebollita de verdeo, huevo picado, azeitonas y especias secretas de la casa para una jugosidad inigualable.',
      pt: 'Massa podre artesanal dourada e amanteigada que derrete na boca, generosamente recheada com carne bovina moída de primeira, refogada lentamente com cebolinha fresca, ovo picadinho, azeitonas e temperos secretos da casa para uma suculência irresistível.',
    },
    price: 10000,
    categoryId: 'empadas',
    subCategory: 'Clásicas al Horno',
    image: PROD_EMPADA_CARNE,
    featured: true,
    highlightBadge: { es: 'La Más Pedida', pt: 'Mais Pedida' },
    options: [
      {
        name: { es: 'Temperatura para Servir', pt: 'Temperatura ao Servir' },
        choices: [
          { name: { es: 'Bien Caliente (Calentada al momento)', pt: 'Quentinha (Aquecida na hora)' } },
          { name: { es: 'Temperatura Ambiente (Pronta para llevar)', pt: 'Temperatura Ambiente (Pronta para viagem)' } },
        ],
      },
      {
        name: { es: 'Acompañamiento o Adicional', pt: 'Acompanhamento ou Adicional' },
        choices: [
          { name: { es: 'Sin adicionales', pt: 'Sem adicionais' } },
          { name: { es: 'Molho de Pimenta Artesanal da Casa (Cortesía)', pt: 'Molho de Pimenta Artesanal da Casa (Cortesia)' } },
          { name: { es: 'Toque de Catupiry Cremoso (+2.000 ₲)', pt: 'Toque de Catupiry Cremoso (+2.000 ₲)' }, priceDelta: 2000 },
        ],
      },
    ],
  },
  // Empadas Saladas Especiales
  {
    id: 'emp-sal-carne-desm',
    name: { es: 'Empada de Carne Desmechada', pt: 'Empada de Carne Desfiada' },
    description: {
      es: 'Carne vacuna suavemente desmechada y cocida a fuego lento en su propio jugo con especias aromáticas, envuelta en masa quebrada dorada y crocante.',
      pt: 'Carne bovina desfiada extremamente macia, cozida lentamente em seu próprio caldo com tempero encorpado e suculência inigualável em massa artesanal dourada.',
    },
    price: 13000,
    categoryId: 'empadas',
    subCategory: 'Saladas Especiales',
    image: PROD_EMPADA_CARNE_DESFIADA,
    featured: true,
    highlightBadge: { es: 'Especial', pt: 'Especial' },
  },
  {
    id: 'emp-sal-carne-seca-mandioca',
    name: { es: 'Empada Carne Seca con Mandioca', pt: 'Empada Carne Seca com Mandioca' },
    description: {
      es: 'Típica combinación norteña: carne seca desmenuzada y suave puré de mandioca cremosa.',
      pt: 'Clássica combinação brasileira: carne seca desfiada com purê cremoso de mandioca.',
    },
    price: 13000,
    categoryId: 'empadas',
    subCategory: 'Saladas Especiales',
    image: PROD_EMPADA_MANDIOCA,
  },
  {
    id: 'emp-sal-carne-seca-zapallo',
    name: { es: 'Empada Carne Seca con Zapallo', pt: 'Empada Carne Seca com Abóbora' },
    description: {
      es: 'Combinación gourmet brasileña: carne seca desmenuzada y sazonada con cebolla morada, combinada con puré suave y aterciopelado de calabaza cabotiá en masa crocante dorada.',
      pt: 'Clássico gourmet brasileiro: carne seca desfiada nobre refogada na manteiga com cebola roxa, combinada com purê aveludado e cremoso de abóbora cabotiá na massa podre dourada.',
    },
    price: 13000,
    categoryId: 'empadas',
    subCategory: 'Saladas Especiales',
    image: PROD_EMPADA_CARNE_SECA_ABOBORA,
    featured: true,
    highlightBadge: { es: 'Gourmet', pt: 'Gourmet' },
    options: [
      {
        name: { es: 'Temperatura para Servir', pt: 'Temperatura ao Servir' },
        choices: [
          { name: { es: 'Bien Caliente (Calentada al momento)', pt: 'Quentinha (Aquecida na hora)' } },
          { name: { es: 'Temperatura Ambiente (Pronta para llevar)', pt: 'Temperatura Ambiente (Pronta para viagem)' } },
        ],
      },
      {
        name: { es: 'Acompañamiento o Toque Especial', pt: 'Acompanhamento ou Toque Especial' },
        choices: [
          { name: { es: 'Tradicional (Sin adicionales)', pt: 'Tradicional (Sem adicionais)' } },
          { name: { es: 'Molho de Pimenta Artesanal da Casa (Cortesía)', pt: 'Molho de Pimenta Artesanal da Casa (Cortesia)' } },
          { name: { es: 'Adicional de Queijo Coalho / Catupiry (+2.000 ₲)', pt: 'Adicional de Queijo Coalho / Catupiry (+2.000 ₲)' }, priceDelta: 2000 },
        ],
      },
    ],
  },
  {
    id: 'emp-sal-calabresa',
    name: { es: 'Empada de Calabresa', pt: 'Empada de Calabresa' },
    description: {
      es: 'Masa fina dorada rellena de auténtica calabresa ahumada en cubos y rodajas finas, salteada con cebolla caramelizada, toque de queso fundido y orégano fresco.',
      pt: 'Massa podre tradicional fininha e dourada, recheada com linguiça calabresa defumada artesanal salteada com cebola caramelizada, toque suave de queijo derretido e orégano.',
    },
    price: 13000,
    categoryId: 'empadas',
    subCategory: 'Saladas Especiales',
    image: PROD_EMPADA_CALABRESA,
    featured: true,
    highlightBadge: { es: 'Ahumada', pt: 'Defumada' },
    options: [
      {
        name: { es: 'Temperatura para Servir', pt: 'Temperatura ao Servir' },
        choices: [
          { name: { es: 'Bien Caliente (Calentada al momento)', pt: 'Quentinha (Aquecida na hora)' } },
          { name: { es: 'Temperatura Ambiente (Pronta para llevar)', pt: 'Temperatura Ambiente (Pronta para viagem)' } },
        ],
      },
      {
        name: { es: 'Acompañamiento o Toque Especial', pt: 'Acompanhamento ou Toque Especial' },
        choices: [
          { name: { es: 'Tradicional (Sin adicionales)', pt: 'Tradicional (Sem adicionais)' } },
          { name: { es: 'Molho de Pimenta Artesanal da Casa (Cortesía)', pt: 'Molho de Pimenta Artesanal da Casa (Cortesia)' } },
          { name: { es: 'Adicional de Catupiry Cremoso (+2.000 ₲)', pt: 'Adicional de Catupiry Cremoso (+2.000 ₲)' }, priceDelta: 2000 },
        ],
      },
    ],
  },
  {
    id: 'emp-sal-queso-bacon',
    name: { es: 'Empada Queso con Bacon', pt: 'Empada Queijo com Bacon' },
    description: {
      es: 'Queso fundido ultra cremoso con crujientes trocitos de panceta ahumada.',
      pt: 'Queijo bem derretido com crocantes cubos de bacon artesanal.',
    },
    price: 13000,
    categoryId: 'empadas',
    subCategory: 'Saladas Especiales',
    image: PROD_EMPADA_QUEIJO,
  },
  {
    id: 'emp-sal-pollo',
    name: { es: 'Empada Salada Pollo', pt: 'Empada Especial de Frango' },
    description: {
      es: 'Pechuga desmenuzada jugosa con condimentos frescos.',
      pt: 'Frango desfiado suave com tempero da casa.',
    },
    price: 12000,
    categoryId: 'empadas',
    subCategory: 'Saladas Especiales',
    image: PROD_EMPADA_FRANGO,
  },
  {
    id: 'emp-sal-pollo-katupiry',
    name: { es: 'Empada Pollo con Catupiry', pt: 'Empada Frango com Catupiry' },
    description: {
      es: 'El clásico brasileño: pollo desmechado con auténtico queso requeijão Catupiry.',
      pt: 'O campeão de pedidos: frango desfiado com o legítimo requeijão cremoso tipo catupiry.',
    },
    price: 12000,
    categoryId: 'empadas',
    subCategory: 'Saladas Especiales',
    image: PROD_EMPADA_FRANGO,
    featured: true,
    highlightBadge: { es: 'Más Vendido', pt: 'Mais Pedido' },
  },
  {
    id: 'emp-sal-pollo-aceitunas',
    name: { es: 'Empada Pollo con Aceitunas', pt: 'Empada Frango com Azeitonas' },
    description: {
      es: 'Pollo desmechado jugoso salteado con aceitunas verdes picadas.',
      pt: 'Frango com azeitonas fatiadas em molho suave.',
    },
    price: 12000,
    categoryId: 'empadas',
    subCategory: 'Saladas Especiales',
    image: PROD_EMPADA_FRANGO,
  },
  {
    id: 'emp-sal-espinaca-queso',
    name: { es: 'Empada Espinaca con Queso Blanco', pt: 'Empada Espinafre com Queijo Branco' },
    description: {
      es: 'Hojas frescas de espinaca salteadas con queso blanco cremoso suave.',
      pt: 'Espinafre fresco refogado com queijo branco leve e cremoso.',
    },
    price: 12000,
    categoryId: 'empadas',
    subCategory: 'Saladas Especiales',
    image: PROD_EMPADA_ESPINAFRE,
    isVegetarian: true,
  },
  {
    id: 'emp-sal-palmito',
    name: { es: 'Empada de Palmito', pt: 'Empada de Palmito' },
    description: {
      es: 'Trozos tiernos de palmito en salsa blanca aterciopelada y cebollita.',
      pt: 'Coração de palmito macio em creme aveludado e cheiro-verde.',
    },
    price: 12000,
    categoryId: 'empadas',
    subCategory: 'Saladas Especiales',
    image: PROD_EMPADA_PALMITO,
    isVegetarian: true,
  },
  {
    id: 'emp-sal-pizza',
    name: { es: 'Empada Sabor Pizza', pt: 'Empada Sabor Pizza' },
    description: {
      es: 'Queso muzzarella, jamón en cubitos, tomate fresco y toque de orégano.',
      pt: 'Mussarela derretida, presunto, tomate fresco picadinho e orégano.',
    },
    price: 12000,
    categoryId: 'empadas',
    subCategory: 'Saladas Especiales',
    image: PROD_EMPADA_QUEIJO,
  },
  {
    id: 'emp-sal-4quesos',
    name: { es: 'Empada 4 Quesos', pt: 'Empada 4 Queijos' },
    description: {
      es: 'Mezcla gourmet de muzzarella, queso azul, provolone y requesón cremoso.',
      pt: 'Blend requintado de quatro queijos nobres derretidos.',
    },
    price: 12000,
    categoryId: 'empadas',
    subCategory: 'Saladas Especiales',
    image: PROD_EMPADA_QUEIJO,
    isVegetarian: true,
  },
  {
    id: 'emp-sal-costilla',
    name: { es: 'Empada de Costilla', pt: 'Empada de Costela Bovina' },
    description: {
      es: 'Costilla vacuna desmechada tras horas de cocción lenta, ultra tierna y sabrosa.',
      pt: 'Costela desfiada cozida lentamente até desmanchar, com molho artesanal.',
    },
    price: 15000,
    categoryId: 'empadas',
    subCategory: 'Saladas Especiales',
    image: PROD_EMPADA_COSTELA,
  },
  {
    id: 'emp-sal-camaron',
    name: { es: 'Empada de Camarón', pt: 'Empada de Camarão' },
    description: {
      es: 'Camarones seleccionados salteados en salsa de hierbas y crema suave.',
      pt: 'Camarões selecionados flambados com tempero aromático e molho cremoso.',
    },
    price: 20000,
    categoryId: 'empadas',
    subCategory: 'Saladas Especiales',
    image: PROD_EMPADA_CAMARAO,
    highlightBadge: { es: 'Gourmet', pt: 'Gourmet' },
  },
  {
    id: 'emp-sal-bacalao',
    name: { es: 'Empada de Bacalao', pt: 'Empada de Bacalhau' },
    description: {
      es: 'Auténtico bacalao desmenuzado con oliva, cebolla tierna y hierbas aromáticas.',
      pt: 'Bacalhau nobre desfiado com azeite de oliva extra virgem e temperos finos.',
    },
    price: 15000,
    categoryId: 'empadas',
    subCategory: 'Saladas Especiales',
    image: PROD_EMPADA_BACALHAU,
  },
  // Empadas Integrales
  {
    id: 'emp-int-espinaca',
    name: { es: 'Empada Integral de Espinaca', pt: 'Empada Integral de Espinafre' },
    description: {
      es: 'Masa integral con semillas y relleno ligero de espinacas tiernas.',
      pt: 'Massa 100% integral leve recheada com espinafre e queijo magro.',
    },
    price: 13000,
    categoryId: 'empadas',
    subCategory: 'Integrales',
    image: PROD_EMPADA_ESPINAFRE,
    isVegetarian: true,
  },
  {
    id: 'emp-int-pollo',
    name: { es: 'Empada Integral de Pollo', pt: 'Empada Integral de Frango' },
    description: {
      es: 'Pechuga magra con masa de harina integral, nutritiva y crocante.',
      pt: 'Frango com baixo teor de gordura e massa integral nutritiva.',
    },
    price: 13000,
    categoryId: 'empadas',
    subCategory: 'Integrales',
    image: PROD_EMPADA_FRANGO,
  },
  {
    id: 'emp-int-palmito',
    name: { es: 'Empada Integral de Palmito', pt: 'Empada Integral de Palmito' },
    description: {
      es: 'Palmitos seleccionados con masa integral y toque aromático.',
      pt: 'Palmito macio e cremoso em massa integral crocante.',
    },
    price: 13000,
    categoryId: 'empadas',
    subCategory: 'Integrales',
    image: PROD_EMPADA_PALMITO,
    isVegetarian: true,
  },
  // Empadas Dulces
  {
    id: 'emp-dulce-clasica',
    name: { es: 'Empada Dulce (Sabores Clásicos)', pt: 'Empada Doce (Sabores Clássicos)' },
    description: {
      es: 'Masa fina horneada con el relleno dulce que elijas.',
      pt: 'Empadinha doce quentinha com seu recheio favorito.',
    },
    price: 15000,
    categoryId: 'empadas',
    subCategory: 'Empadas Dulces',
    image: PROD_EMPADAS_DULCES,
    options: [
      {
        name: { es: 'Elige tu sabor dulce', pt: 'Escolha o sabor doce' },
        choices: [
          { name: { es: 'Chocolate', pt: 'Chocolate' } },
          { name: { es: 'Nutella', pt: 'Nutella' } },
          { name: { es: 'Nutella con Leche Nido', pt: 'Nutella com Leite Ninho' } },
          { name: { es: 'Dulce de Leche', pt: 'Doce de Leite' } },
          { name: { es: 'Leche Condensada con Coco', pt: 'Leite Condensado com Coco' } },
          { name: { es: 'Brigadeiro', pt: 'Brigadeiro' } },
          { name: { es: 'Kit Kat', pt: 'Kit Kat' } },
          { name: { es: 'Galak (Chocolate Blanco)', pt: 'Galak (Chocolate Branco)' } },
          { name: { es: 'Ovomaltine', pt: 'Ovomaltine' } },
          { name: { es: 'Maní', pt: 'Amendoim' } },
        ],
      },
    ],
  },
  {
    id: 'emp-dulce-gourmet',
    name: { es: 'Empada Dulce Gourmet Especial', pt: 'Empada Doce Gourmet Especial' },
    description: {
      es: 'Nuestras opciones dulces prémium elaboradas con ingredientes selectos.',
      pt: 'Nossas empadas doces nobres com ingredientes especiais selecionados.',
    },
    price: 20000,
    categoryId: 'empadas',
    subCategory: 'Empadas Dulces',
    image: PROD_EMPADAS_DULCES,
    options: [
      {
        name: { es: 'Sabor Gourmet', pt: 'Sabor Gourmet' },
        choices: [
          { name: { es: 'Pistacho Artesanal', pt: 'Pistache Artesanal' } },
          { name: { es: 'Nueces con Caramelo', pt: 'Nozes com Caramelo' } },
          { name: { es: 'Pie de Limón con Merengue', pt: 'Torta de Limão' } },
        ],
      },
    ],
  },

  // ================= EMPEZÁ BIEN EL DÍA =================
  {
    id: 'des-completo',
    name: { es: 'Desayuno Completo', pt: 'Café da Manhã Completo' },
    description: {
      es: 'Selección de frutas de estación, café con leche a punto y jugo fresco de preferencia.',
      pt: 'Seleção de frutas da estação, café com leite cremoso e suco natural de sua preferência.',
    },
    price: 5000,
    categoryId: 'desayunos',
    image: PROD_HUEVOS_REVUELTOS,
    featured: true,
    highlightBadge: { es: 'Recomendado', pt: 'Recomendado' },
    options: [
      {
        name: { es: 'Jugo a Elección', pt: 'Suco de Escolha' },
        choices: [
          { name: { es: 'Jugo de Naranja', pt: 'Suco de Laranja' } },
          { name: { es: 'Jugo de Frutilla', pt: 'Suco de Morango' } },
          { name: { es: 'Jugo de Mburukujá', pt: 'Suco de Maracujá' } },
          { name: { es: 'Jugo de Piña', pt: 'Suco de Abacaxi' } },
        ],
      },
    ],
  },
  {
    id: 'des-huevo-tostadas',
    name: { es: 'Huevo Revuelto con Tostadas', pt: 'Ovos Mexidos com Torradas' },
    description: {
      es: 'Huevos cremosos preparados al momento acompañados de crujientes tostadas artesanales.',
      pt: 'Ovos mexidos cremosos feitos na hora com torradas crocantes douradas na manteiga.',
    },
    price: 25000,
    categoryId: 'desayunos',
    image: PROD_HUEVOS_REVUELTOS,
  },
  {
    id: 'des-mbeju-tradicional',
    name: { es: 'Mbeju Tradicional', pt: 'Mbeju Tradicional' },
    description: {
      es: 'Típica torta paraguaya de almidón de mandioca, queso Paraguay y manteca dorada en sartén.',
      pt: 'Tradicional iguaria à base de polvilho de mandioca e queijo artesanal dourado na chapa.',
    },
    price: 12000,
    categoryId: 'desayunos',
    image: PROD_MBEJU_TRADICIONAL,
    isGlutenFree: true,
    highlightBadge: { es: 'Típico', pt: 'Típico' },
  },
  {
    id: 'des-mbeju-queso',
    name: { es: 'Mbeju con Relleno de Queso', pt: 'Mbeju Recheado com Queijo' },
    description: {
      es: 'Doble capa de mbeju crocante con un generoso corazón de queso derretido en su interior.',
      pt: 'Massa crocante com camada farta e puxa-puxa de queijo derretido no centro.',
    },
    price: 15000,
    categoryId: 'desayunos',
    image: PROD_MBEJU_TRADICIONAL,
    isGlutenFree: true,
  },
  {
    id: 'des-chipa-tradicional',
    name: { es: 'Chipa Tradicional', pt: 'Chipa Tradicional Paraguaia' },
    description: {
      es: 'Chipa artesanal recién salida del horno, crujiente por fuera y suave por dentro.',
      pt: 'Chipa quentinha saindo do forno, casquinha dourada e interior macio queijudo.',
    },
    price: 6000,
    categoryId: 'desayunos',
    image: PROD_CHIPA_PARAGUAYA,
    isGlutenFree: true,
  },
  {
    id: 'des-doguinho',
    name: { es: 'Doguinho Artesanal', pt: 'Doguinho Folhado / Assado' },
    description: {
      es: 'Salchicha envuelta en masa suave horneada con semillas de sésamo y queso.',
      pt: 'Enroladinho de salsicha com massa fofinha assada e toque de queijo.',
    },
    price: 12000,
    categoryId: 'desayunos',
    image: PROD_CROISSANT_SALADO,
  },
  {
    id: 'des-hojaldre',
    name: { es: 'Hojaldre Salado Horneado', pt: 'Folhado Salgado Assado' },
    description: {
      es: 'Masa de hojaldre crujiente y laminada con relleno a tu elección.',
      pt: 'Massa folhada levíssima e dourada com recheio à sua escolha.',
    },
    price: 13000,
    categoryId: 'desayunos',
    image: PROD_CROISSANT_SALADO,
    options: [
      {
        name: { es: 'Sabor del Hojaldre', pt: 'Sabor do Folhado' },
        choices: [
          { name: { es: 'Jamón y Queso', pt: 'Presunto e Queijo' } },
          { name: { es: 'Carne Condimentada', pt: 'Carne Temperada' } },
          { name: { es: 'Pollo con Finas Hierbas', pt: 'Frango com Ervas Finas' } },
        ],
      },
    ],
  },

  // ================= CROISSANT =================
  {
    id: 'crois-jamon-queso',
    name: { es: 'Croissant Jamón y Queso', pt: 'Croissant Presunto e Queijo' },
    description: {
      es: 'Croissant hojaldrado con manteca pura, relleno de jamón cocido y queso derretido.',
      pt: 'Croissant folhado com manteiga nobre, recheado de presunto cozido e queijo derretido.',
    },
    price: 20000,
    categoryId: 'croissants',
    subCategory: 'Croissant Salado',
    image: PROD_CROISSANT_SALADO,
  },
  {
    id: 'crois-carne-desmechada',
    name: { es: 'Croissant Carne Desmechada y Queso', pt: 'Croissant Carne Desfiada e Queijo' },
    description: {
      es: 'Relleno de carne desmechada jugosa y queso fundido en crujiente hojaldre.',
      pt: 'Carne desfiada macia e queijo fundido dentro de massa folhada francesa crocante.',
    },
    price: 30000,
    categoryId: 'croissants',
    subCategory: 'Croissant Salado',
    image: PROD_CROISSANT_SALADO,
    highlightBadge: { es: 'Especial', pt: 'Especial' },
  },
  {
    id: 'crois-pollo-queso',
    name: { es: 'Croissant Pollo y Queso', pt: 'Croissant Frango e Queijo' },
    description: {
      es: 'Pechuga desmenuzada sazonada y cubierta de queso caliente derretido.',
      pt: 'Peito de frango temperado coberto com queijo quente derretido.',
    },
    price: 25000,
    categoryId: 'croissants',
    subCategory: 'Croissant Salado',
    image: PROD_CROISSANT_SALADO,
  },
  // Croissant Dulce
  {
    id: 'crois-choc-negro',
    name: { es: 'Croissant con Chocolate Negro', pt: 'Croissant Chocolate Meio Amargo' },
    description: {
      es: 'Relleno generoso de chocolate negro fundente de alta pureza.',
      pt: 'Recheio abundante de chocolate meio amargo cremoso.',
    },
    price: 20000,
    categoryId: 'croissants',
    subCategory: 'Croissant Dulce',
    image: PROD_CROISSANT_DULCE,
  },
  {
    id: 'crois-choc-blanco',
    name: { es: 'Croissant con Chocolate Blanco', pt: 'Croissant Chocolate Branco' },
    description: {
      es: 'Cremoso chocolate blanco aterciopelado en capas de hojaldre crujiente.',
      pt: 'Chocolate branco cremoso e suave envolto em massa folhada amanteigada.',
    },
    price: 20000,
    categoryId: 'croissants',
    subCategory: 'Croissant Dulce',
    image: PROD_CROISSANT_DULCE,
  },
  {
    id: 'crois-almendras',
    name: { es: 'Croissant con Crema de Almendras', pt: 'Croissant Creme de Amêndoas' },
    description: {
      es: 'Clásico francés con crema frangipane de almendras y láminas tostadas.',
      pt: 'Clássico francês com creme suave de amêndoas e lâminas crocantes por cima.',
    },
    price: 20000,
    categoryId: 'croissants',
    subCategory: 'Croissant Dulce',
    image: PROD_CROISSANT_DULCE,
    featured: true,
  },
  {
    id: 'crois-nutella',
    name: { es: 'Croissant con Nutella', pt: 'Croissant com Nutella' },
    description: {
      es: 'Puro relleno de crema de avellanas Nutella italiana.',
      pt: 'Farto recheio de creme de avelã Nutella autêntico.',
    },
    price: 20000,
    categoryId: 'croissants',
    subCategory: 'Croissant Dulce',
    image: PROD_CROISSANT_DULCE,
  },
  {
    id: 'crois-dulce-leche',
    name: { es: 'Croissant con Dulce de Leche', pt: 'Croissant com Doce de Leite' },
    description: {
      es: 'Dulce de leche artesanal suave y espeso en abundante porción.',
      pt: 'Doce de leite colonial cremoso em porção caprichada.',
    },
    price: 20000,
    categoryId: 'croissants',
    subCategory: 'Croissant Dulce',
    image: PROD_CROISSANT_DULCE,
  },
  {
    id: 'crois-sin-relleno',
    name: { es: 'Croissant Tradicional sin Relleno', pt: 'Croissant Tradicional Puro' },
    description: {
      es: 'Hojaldre puro al estilo francés, aireado, mantecoso y crujiente.',
      pt: 'Folhado tradicional leve e amanteigado, perfeito para acompanhar café.',
    },
    price: 15000,
    categoryId: 'croissants',
    subCategory: 'Croissant Dulce',
    image: LUXURY_CROISSANT,
  },

  // ================= PANIFICADOS =================
  {
    id: 'pan-leche',
    name: { es: 'Pan de Leche Casero', pt: 'Pão de Leite Caseiro' },
    description: {
      es: 'Pan suave, esponjoso y aromático con toque sutilmente dulce.',
      pt: 'Pão fofinho, aromático e de casca macia feito com leite fresco.',
    },
    price: 20000,
    categoryId: 'panificados',
    image: SHOWCASE_PANIFICADOS,
  },
  {
    id: 'pan-integral',
    name: { es: 'Pan Integral Artesanal', pt: 'Pão Integral Artesanal' },
    description: {
      es: 'Elaborado con harina integral de grano entero, nutritivo y saciante.',
      pt: 'Pão 100% integral com farinhas selecionadas e grãos.',
    },
    price: 25000,
    categoryId: 'panificados',
    image: SHOWCASE_PANIFICADOS,
  },
  {
    id: 'pan-parmesano-huevo',
    name: { es: 'Pan con Queso Parmesano y Huevo Revuelto', pt: 'Pão com Parmesão e Ovos Mexidos' },
    description: {
      es: 'Pan tostado con costra dorada de parmesano coronado con huevos revueltos cremosos.',
      pt: 'Pão quentinho gratinado com parmesão e ovos mexidos super cremosos.',
    },
    price: 25000,
    categoryId: 'panificados',
    image: PROD_HUEVOS_REVUELTOS,
    featured: true,
  },
  {
    id: 'pan-queso-porcion',
    name: { es: 'Pan de Queso (Porción)', pt: 'Pão de Queijo (Porção)' },
    description: {
      es: 'Porción de panes de queso brasileños horneados y elásticos por dentro.',
      pt: 'Porção quentinha de pães de queijo tradicionais com muito queijo curado.',
    },
    price: 10000,
    categoryId: 'panificados',
    image: PROD_PAO_DE_QUEIJO,
    isGlutenFree: true,
  },
  {
    id: 'pan-papas',
    name: { es: 'Pan de Papas Relleno', pt: 'Pão de Batata Recheado' },
    description: {
      es: 'Masa de papa suave como una nube rellena con tu sabor preferido.',
      pt: 'Massa macia e aveludada de batata com recheio farto e saboroso.',
    },
    price: 15000,
    categoryId: 'panificados',
    image: SHOWCASE_PANIFICADOS,
    options: [
      {
        name: { es: 'Relleno del Pan de Papas', pt: 'Recheio do Pão de Batata' },
        choices: [
          { name: { es: 'Calabresa con Queso', pt: 'Calabresa com Queijo' } },
          { name: { es: 'Pollo con Catupiry', pt: 'Frango com Catupiry' } },
          { name: { es: 'Carne Suave', pt: 'Carne Suave' } },
          { name: { es: 'Puro Queso Derretido', pt: 'Puro Queijo Derretido' } },
        ],
      },
    ],
  },
  {
    id: 'pan-tostado-mermelada',
    name: { es: 'Pan Tostado con Mermelada y Manteca', pt: 'Pão Tostado com Geléia e Manteiga' },
    description: {
      es: 'Rebanadas de pan tostadas a la plancha servidas con manteca fresca y mermelada de frutas.',
      pt: 'Fatias douradas de pão com manteiga de fazenda e geleia de frutas selecionadas.',
    },
    price: 10000,
    categoryId: 'panificados',
    image: PROD_AVOCADO_TOAST,
  },

  // ================= PARA LOS AMANTES DE LO DULCE =================
  {
    id: 'dulce-brownie-dulcedeleche',
    name: { es: 'Brownie con Dulce de Leche', pt: 'Brownie com Doce de Leite' },
    description: {
      es: 'Brownie húmedo de chocolate intenso bañado con capa generosa de dulce de leche.',
      pt: 'Brownie denso e molhadinho coberto com farta camada de doce de leite cremoso.',
    },
    price: 20000,
    categoryId: 'dulces',
    image: LUXURY_SWEETS_BROWNIE,
  },
  {
    id: 'dulce-brownie-chocolate',
    name: { es: 'Brownie con Ganache de Chocolate', pt: 'Brownie com Ganache de Chocolate' },
    description: {
      es: 'Masa fudge chocolatosa con nueces y cobertura de chocolate brillante.',
      pt: 'Brownie de chocolate meio amargo com cobertura de calda cremosa.',
    },
    price: 20000,
    categoryId: 'dulces',
    image: LUXURY_SWEETS_BROWNIE,
  },
  {
    id: 'dulce-brigadeiros',
    name: { es: 'Brigadeiro Artesanal (Unidad)', pt: 'Brigadeiro Artesanal Gourmet' },
    description: {
      es: 'Tradicional dulce brasileño de leche condensada, cacao puro y granulado crocante.',
      pt: 'O autêntico brigadeiro feito com cacau nobre e enrolado no confeito de chocolate.',
    },
    price: 3500,
    categoryId: 'dulces',
    image: SHOWCASE_PASTRIES,
  },
  {
    id: 'dulce-medialuna-rellena',
    name: { es: 'Medialuna con Relleno Clásico', pt: 'Medialuna Recheada Clássica' },
    description: {
      es: 'Medialuna esponjosa almibarada rellena a elección.',
      pt: 'Medialuna macia e dourada com recheio clássico.',
    },
    price: 10000,
    categoryId: 'dulces',
    image: PROD_MEDIALUNAS,
    options: [
      {
        name: { es: 'Relleno de Medialuna', pt: 'Recheio da Medialuna' },
        choices: [
          { name: { es: 'Dulce de Guayaba', pt: 'Goiabada Cremosa' } },
          { name: { es: 'Dulce de Leche', pt: 'Doce de Leite' } },
          { name: { es: 'Crema Pastelera', pt: 'Creme de Confeiteiro' } },
        ],
      },
    ],
  },
  {
    id: 'dulce-medialuna-nutella',
    name: { es: 'Medialuna con Nutella', pt: 'Medialuna com Nutella' },
    description: {
      es: 'Medialuna mantecosa rellena de abundante crema de avellanas Nutella.',
      pt: 'Medialuna recheada com Nutella pura e finalizada com açúcar de confeiteiro.',
    },
    price: 12000,
    categoryId: 'dulces',
    image: PROD_MEDIALUNAS,
  },
  {
    id: 'dulce-medialuna-sin-relleno',
    name: { es: 'Medialuna sin Relleno', pt: 'Medialuna Simples Tradicional' },
    description: {
      es: 'Medialuna tradicional con sutil brillo de almíbar.',
      pt: 'Medialuna tradicional macia e amanteigada.',
    },
    price: 8000,
    categoryId: 'dulces',
    image: PROD_MEDIALUNAS,
  },
  {
    id: 'dulce-cinnamon-tradicional',
    name: { es: 'Cinnamon Roll Tradicional', pt: 'Cinnamon Roll Tradicional' },
    description: {
      es: 'Rollo de canela horneado con aroma especiado y centro suave y acaramelado.',
      pt: 'Pãozinho caracol de canela macio e perfumado com açúcar mascavo.',
    },
    price: 12000,
    categoryId: 'dulces',
    image: PROD_CINNAMON_ROLL,
  },
  {
    id: 'dulce-cinnamon-crema',
    name: { es: 'Cinnamon Roll con Cobertura de Crema', pt: 'Cinnamon Roll com Cream Cheese Glaze' },
    description: {
      es: 'Rollo de canela bañado en caliente con glaseado cremoso de queso crema y vainilla.',
      pt: 'Cinnamon roll fofinho coberto com generosa camada de cobertura aveludada de cream cheese.',
    },
    price: 15000,
    categoryId: 'dulces',
    image: PROD_CINNAMON_ROLL,
    featured: true,
  },
  {
    id: 'dulce-alfajor-maicena',
    name: { es: 'Alfajor de Maicena con Dulce de Leche', pt: 'Alfajor de Maizena com Coco' },
    description: {
      es: 'Tapas tiernas que se deshacen en la boca, dulce de leche abundante y coco rallado.',
      pt: 'Massa amanteigada suave que derrete na boca recheada de doce de leite e coco nas bordas.',
    },
    price: 5000,
    categoryId: 'dulces',
    image: PROD_ALFAJORES_MAICENA,
    options: [
      {
        name: { es: 'Tamaño del Alfajor', pt: 'Tamanho do Alfajor' },
        choices: [
          { name: { es: 'Pequeño', pt: 'Pequeno' }, priceDelta: 0 },
          { name: { es: 'Mediano', pt: 'Médio' }, priceDelta: 3000 },
          { name: { es: 'Grande', pt: 'Grande' }, priceDelta: 5000 },
        ],
      },
    ],
  },
  {
    id: 'dulce-pastafrola',
    name: { es: 'Pastafrola Artesanal de Guayaba', pt: 'Pastafrola de Goiabada' },
    description: {
      es: 'Tarta clásica con enrejado artesanal y dulce de guayaba espeso.',
      pt: 'Torta clássica com massa amanteigada e doce de goiabada especial.',
    },
    price: 3000,
    categoryId: 'dulces',
    image: PROD_PASTAFROLA,
    options: [
      {
        name: { es: 'Tamaño', pt: 'Tamanho' },
        choices: [
          { name: { es: 'Pequeña', pt: 'Pequena' }, priceDelta: 0 },
          { name: { es: 'Grande', pt: 'Grande' }, priceDelta: 5000 },
        ],
      },
    ],
  },
  {
    id: 'dulce-cookies',
    name: { es: 'Cookie Horneada', pt: 'Cookie Recheado Artesanal' },
    description: {
      es: 'Galletita crocante en los bordes y suave en el centro con chispas de chocolate.',
      pt: 'Cookie artesanal com borda crocante e centro incrivelmente macio.',
    },
    price: 6000,
    categoryId: 'dulces',
    image: PROD_COOKIES,
    options: [
      {
        name: { es: 'Variedad de Cookie', pt: 'Variedade do Cookie' },
        choices: [
          { name: { es: 'Chocolate Chips', pt: 'Gotas de Chocolate' } },
          { name: { es: 'Red Velvet con Chocolate Blanco', pt: 'Red Velvet com Chocolate Branco' } },
          { name: { es: 'Tradicional con Vainilla', pt: 'Tradicional de Baunilha' } },
        ],
      },
    ],
  },

  // ================= IDEALES PARA COMPARTIR =================
  {
    id: 'comp-bocaditos-100',
    name: { es: 'Bocaditos Tradicionales (100 Unidades)', pt: 'Cento de Bocaditos Tradicionais (100 un.)' },
    description: {
      es: 'Caja surtida con croquetitas, milanesitas, sandwichitos y empanaditas de carne y pollo para tu evento.',
      pt: 'Caixa farta com croquetes, milanesinhas, mini sanduíches e empadinhas de frango e carne.',
    },
    price: 180000,
    categoryId: 'compartir',
    image: SHOWCASE_BOCADITOS,
    featured: true,
    highlightBadge: { es: 'Para Fiestas', pt: 'Para Festas' },
    serves: '10 a 15 personas',
  },
  {
    id: 'comp-salgadinhos-100',
    name: { es: 'Salgadinhos para Fiesta (100 Unidades)', pt: 'Cento de Salgadinhos de Festa (100 un.)' },
    description: {
      es: 'Variedad de salgadinhos fritos y horneados para cumpleaños, bodas y eventos especiales.',
      pt: 'Cento sortido de salgadinhos crocantes fritos e assados na hora para suas comemorações.',
    },
    price: 120000,
    categoryId: 'compartir',
    image: SHOWCASE_BOCADITOS,
    highlightBadge: { es: '100 Unidades', pt: '100 Unidades' },
    serves: '8 a 12 personas',
  },

  // ================= CAFÉS Y CHOCOLATES CALIENTES =================
  {
    id: 'cafe-expreso',
    name: { es: 'Café Expreso', pt: 'Café Expresso' },
    description: {
      es: 'Shot concentrado de granos selectos con crema avellana densa.',
      pt: 'Shot encorpado de grãos nobres com crema aveludada.',
    },
    price: 12000,
    categoryId: 'cafes_calientes',
    image: LUXURY_SPECIALTY_COFFEE,
  },
  {
    id: 'cafe-doble-expreso',
    name: { es: 'Café Doble Expresso', pt: 'Café Expresso Duplo' },
    description: {
      es: 'Doble extracción para el doble de intensidad y energía.',
      pt: 'Dose dupla para o dobro de sabor e energia.',
    },
    price: 15000,
    categoryId: 'cafes_calientes',
    image: LUXURY_SPECIALTY_COFFEE,
  },
  {
    id: 'cafe-americano',
    name: { es: 'Café Americano', pt: 'Café Americano' },
    description: {
      es: 'Expreso alargado con agua caliente, suave y aromático.',
      pt: 'Expresso suave e aromático com água filtrada aquecida.',
    },
    price: 15000,
    categoryId: 'cafes_calientes',
    image: LUXURY_SPECIALTY_COFFEE,
  },
  {
    id: 'cafe-cortado',
    name: { es: 'Café Cortado', pt: 'Café Pingado / Cortado' },
    description: {
      es: 'Expreso con una ligera nube de leche caliente vaporizada.',
      pt: 'Expresso com um toque leve de leite vaporizado.',
    },
    price: 15000,
    categoryId: 'cafes_calientes',
    image: LUXURY_SPECIALTY_COFFEE,
  },
  {
    id: 'cafe-leche-normal',
    name: { es: 'Café con Leche Normal', pt: 'Café com Leite Médio' },
    description: {
      es: 'Equilibrio perfecto de café expreso y leche emulsionada tibia.',
      pt: 'Equilíbrio clássico de café especial e leite cremoso quentinho.',
    },
    price: 14000,
    categoryId: 'cafes_calientes',
    image: LUXURY_SPECIALTY_COFFEE,
  },
  {
    id: 'cafe-leche-grande',
    name: { es: 'Café con Leche Grande', pt: 'Café com Leite Grande' },
    description: {
      es: 'Taza grande para disfrutar sin prisas de un café reconfortante.',
      pt: 'Xícara grande generosa para saborear lentamente.',
    },
    price: 16000,
    categoryId: 'cafes_calientes',
    image: LUXURY_SPECIALTY_COFFEE,
  },
  {
    id: 'cafe-latte-nutella',
    name: { es: 'Café Latte con Nutella', pt: 'Café Latte com Nutella' },
    description: {
      es: 'Cremoso café latte con base generosa de Nutella derretida y espuma suave.',
      pt: 'Latte cremoso com borda e fundo generoso de Nutella pura.',
    },
    price: 25000,
    categoryId: 'cafes_calientes',
    image: LUXURY_SPECIALTY_COFFEE,
    featured: true,
    highlightBadge: { es: 'Especialidad', pt: 'Especialidade' },
  },
  {
    id: 'cafe-latte-chocolate',
    name: { es: 'Café Latte con Chocolate', pt: 'Café Latte com Chocolate' },
    description: {
      es: 'Latte suave con sirope artesanal de chocolate fundido.',
      pt: 'Latte com calda cremosa de chocolate meio amargo.',
    },
    price: 20000,
    categoryId: 'cafes_calientes',
    image: LUXURY_SPECIALTY_COFFEE,
  },
  {
    id: 'cafe-latte-dulcedeleche',
    name: { es: 'Café Latte con Dulce de Leche', pt: 'Café Latte com Doce de Leite' },
    description: {
      es: 'Café con leche aromatizado con dulce de leche artesanal.',
      pt: 'Café latte aveludado misturado com doce de leite caseiro.',
    },
    price: 20000,
    categoryId: 'cafes_calientes',
    image: LUXURY_SPECIALTY_COFFEE,
  },
  {
    id: 'cafe-mocca-tradicional',
    name: { es: 'Café Mocca Tradicional', pt: 'Café Mocha Tradicional' },
    description: {
      es: 'Combinación armoniosa de café expreso, chocolate y leche vaporizada.',
      pt: 'Café expresso combinado com chocolate artesanal e leite vaporizado.',
    },
    price: 20000,
    categoryId: 'cafes_calientes',
    image: LUXURY_SPECIALTY_COFFEE,
  },
  {
    id: 'cafe-capuccino-tradicional',
    name: { es: 'Café Capuccino Tradicional', pt: 'Capuccino Tradicional' },
    description: {
      es: 'Expreso con leche montada y lluvia de canela y cacao fino.',
      pt: 'Expresso com espuma densa de leite e polvilhado de canela e cacau.',
    },
    price: 20000,
    categoryId: 'cafes_calientes',
    image: LUXURY_SPECIALTY_COFFEE,
  },
  {
    id: 'cafe-capuccino-vainilla',
    name: { es: 'Capuccino de Vainilla', pt: 'Capuccino de Baunilha' },
    description: {
      es: 'Capuccino aromático con notas florales de vainilla dulce.',
      pt: 'Capuccino suave enriquecido com essência pura de baunilha.',
    },
    price: 25000,
    categoryId: 'cafes_calientes',
    image: LUXURY_SPECIALTY_COFFEE,
  },
  {
    id: 'cafe-capuccino-completo-chantilly',
    name: { es: 'Capuccino Completo con Chantilly', pt: 'Capuccino Completo com Chantilly' },
    description: {
      es: 'Capuccino especial coronado con generoso remolino de crema chantilly fresca.',
      pt: 'Capuccino cremoso coberto com farta nuvem de chantilly fresco e cacau.',
    },
    price: 28000,
    categoryId: 'cafes_calientes',
    image: LUXURY_SPECIALTY_COFFEE,
    featured: true,
  },
  {
    id: 'cafe-capuccino-tricolor',
    name: { es: 'Capuccino Tricolor', pt: 'Capuccino Tricolor' },
    description: {
      es: 'Espectacular presentación en tres capas: licor/chocolate, café y microespuma de leche.',
      pt: 'Apresentação em três camadas perfeitas de sabor e textura.',
    },
    price: 25000,
    categoryId: 'cafes_calientes',
    image: LUXURY_SPECIALTY_COFFEE,
  },
  {
    id: 'cafe-mocaccino',
    name: { es: 'Café Mocaccino', pt: 'Café Mocaccino' },
    description: {
      es: 'Intensidad de café con doble crema de chocolate belga.',
      pt: 'Expresso encorpado com chocolate belga e leite vaporizado sedoso.',
    },
    price: 25000,
    categoryId: 'cafes_calientes',
    image: LUXURY_SPECIALTY_COFFEE,
  },
  {
    id: 'cafe-afogato',
    name: { es: 'Affogato al Caffè', pt: 'Affogato com Sorvete' },
    description: {
      es: 'Bola de helado artesanal de crema ahogada en un shot hirviendo de expreso recién extraído.',
      pt: 'Bola de sorvete de baunilha artesanal afogada em shot quente de expresso puro.',
    },
    price: 25000,
    categoryId: 'cafes_calientes',
    image: LUXURY_SPECIALTY_COFFEE,
  },
  {
    id: 'cafe-irlandes-whisky',
    name: { es: 'Café Irlandés con Whisky', pt: 'Café Irlandês com Uísque' },
    description: {
      es: 'Café caliente endulzado combinado con whisky irlandés y crema flotante.',
      pt: 'Combinação clássica de café quente, whisky e topo cremoso.',
    },
    price: 35000,
    categoryId: 'cafes_calientes',
    image: LUXURY_SPECIALTY_COFFEE,
    highlightBadge: { es: 'Con Licor', pt: 'Com Licor' },
  },
  {
    id: 'cafe-chocolate-caliente-clasico',
    name: { es: 'Chocolate Caliente Clásico', pt: 'Chocolate Quente Clássico' },
    description: {
      es: 'Bebida reconfortante de chocolate con leche cremosa.',
      pt: 'Chocolate quente tradicional cremoso e reconfortante.',
    },
    price: 15000,
    categoryId: 'cafes_calientes',
    image: PROD_CHOCOLATE_CALIENTE,
  },
  {
    id: 'cafe-chocolate-europeo',
    name: { es: 'Chocolate Europeo Espeso', pt: 'Chocolate Quente Europeu Cremoso' },
    description: {
      es: 'Receta europea densa, espesa y aterciopelada, para tomar con cuchara.',
      pt: 'Receita europeia densa e aveludada, servida bem quente e encorpada.',
    },
    price: 25000,
    categoryId: 'cafes_calientes',
    image: PROD_CHOCOLATE_CALIENTE,
    featured: true,
  },

  // ================= CAFÉ Y CHOCOLATES FRÍOS =================
  {
    id: 'frio-chocolate-helado',
    name: { es: 'Chocolate Helado Batido', pt: 'Chocolate Gelado Batido' },
    description: {
      es: 'Cremoso batido helado de chocolate con leche y hielo triturado.',
      pt: 'Bebida refrescante batida com chocolate especial e leite gelado.',
    },
    price: 15000,
    categoryId: 'cafes_frios',
    image: SHOWCASE_ICED_COFFEE,
  },
  {
    id: 'frio-capuccino-helado',
    name: { es: 'Capuccino Helado', pt: 'Capuccino Gelado Frappé' },
    description: {
      es: 'Delicioso café batido con hielo y sabor a tu elección.',
      pt: 'Capuccino super cremoso gelado batido com sabor a escolher.',
    },
    price: 25000,
    categoryId: 'cafes_frios',
    image: SHOWCASE_ICED_COFFEE,
    options: [
      {
        name: { es: 'Sabor del Capuccino Helado', pt: 'Sabor do Capuccino Gelado' },
        choices: [
          { name: { es: 'Nutella', pt: 'Nutella' } },
          { name: { es: 'Vainilla', pt: 'Baunilha' } },
          { name: { es: 'Tradicional', pt: 'Tradicional' } },
        ],
      },
    ],
  },
  {
    id: 'frio-mocaccino-helado',
    name: { es: 'Mocaccino Helado', pt: 'Mocaccino Gelado' },
    description: {
      es: 'Café, chocolate y leche batidos con hielo para un refresco energético.',
      pt: 'Café com calda de chocolate e leite batido bem gelado.',
    },
    price: 25000,
    categoryId: 'cafes_frios',
    image: SHOWCASE_ICED_COFFEE,
  },

  // ================= HORA DEL TÉ =================
  {
    id: 'te-matcha-caliente',
    name: { es: 'Té Matcha Caliente', pt: 'Chá Matcha Quente' },
    description: {
      es: 'Puro té verde matcha japonés batido con espumadera tradicional.',
      pt: 'Matcha cerimonial batido à moda oriental, revigorante e antioxidante.',
    },
    price: 25000,
    categoryId: 'tes',
    image: PROD_MATCHA_LATTE,
  },
  {
    id: 'te-matcha-latte-frio',
    name: { es: 'Té Matcha Latte Frío', pt: 'Matcha Latte Gelado' },
    description: {
      es: 'Matcha japonés servido sobre leche fría y cubos de hielo.',
      pt: 'Refrescante mistura de matcha puro, leite gelado e cubos de gelo.',
    },
    price: 25000,
    categoryId: 'tes',
    image: PROD_MATCHA_LATTE,
    featured: true,
  },
  {
    id: 'te-chai-latte',
    name: { es: 'Chai Latte Especiado', pt: 'Chai Latte Especiarias' },
    description: {
      es: 'Té negro con cardamomo, canela, clavo, jengibre y leche espumosa.',
      pt: 'Infusão oriental aromática com canela, cardamomo, gengibre e leite vaporizado.',
    },
    price: 20000,
    categoryId: 'tes',
    image: LUXURY_SPECIALTY_COFFEE,
  },
  {
    id: 'te-mate-tradicional',
    name: { es: 'Té Mate (Frío o Caliente)', pt: 'Chá Mate (Gelado ou Quente)' },
    description: {
      es: 'Cocido paraguayo tradicional preparado con yerba mate seleccionada.',
      pt: 'Tradicional chá mate tostado, servido refrescante gelado ou quentinho.',
    },
    price: 15000,
    categoryId: 'tes',
    image: SHOWCASE_ICED_COFFEE,
    options: [
      {
        name: { es: 'Temperatura', pt: 'Temperatura' },
        choices: [
          { name: { es: 'Bien Frío con Hielo', pt: 'Gelado com Gelo' } },
          { name: { es: 'Caliente Reconfortante', pt: 'Quente' } },
        ],
      },
    ],
  },
  {
    id: 'te-mate-limon',
    name: { es: 'Té Mate con Limón', pt: 'Chá Mate com Limão' },
    description: {
      es: 'Refrescante té mate con rodajas y zumo de limón fresco exprimido.',
      pt: 'Chá mate com suco fresco de limão e muito gelo.',
    },
    price: 15000,
    categoryId: 'tes',
    image: SHOWCASE_ICED_COFFEE,
  },
  {
    id: 'te-normal-hierbas',
    name: { es: 'Té Normal de Hierbas', pt: 'Chá de Ervas Medicinais / Clássico' },
    description: {
      es: 'Infusión suave de manzanilla, menta, anís o té negro.',
      pt: 'Infusão de ervas selecionadas calmantes e digestivas.',
    },
    price: 10000,
    categoryId: 'tes',
    image: LUXURY_SPECIALTY_COFFEE,
  },

  // ================= SODAS ITALIANAS =================
  {
    id: 'soda-manzana-verde',
    name: { es: 'Soda Italiana Manzana Verde', pt: 'Soda Italiana Maçã Verde' },
    description: {
      es: 'Agua carbonatada con sirope artesanal de manzana verde ácida y hojas de menta.',
      pt: 'Bebida frisante e refrescante com xarope francês de maçã verde e gelo.',
    },
    price: 25000,
    categoryId: 'sodas',
    image: PROD_SODA_ITALIANA,
    highlightBadge: { es: 'Refrescante', pt: 'Refrescante' },
  },
  {
    id: 'soda-limon-siciliano',
    name: { es: 'Soda Italiana Limón Siciliano', pt: 'Soda Italiana Limão Siciliano' },
    description: {
      es: 'Cítrica y equilibrada con esencia de limón de Sicilia y soda bien helada.',
      pt: 'Notas cítricas equilibradas de limão siciliano com borbulhas refrescantes.',
    },
    price: 25000,
    categoryId: 'sodas',
    image: PROD_SODA_ITALIANA,
  },
  {
    id: 'soda-limon-frances',
    name: { es: 'Soda Italiana Limón Francés', pt: 'Soda Italiana Limão Francês' },
    description: {
      es: 'Sutil toque herbal y floral con notas cítricas suaves.',
      pt: 'Toque cítrico delicado e sofisticado com gelo filtrado.',
    },
    price: 25000,
    categoryId: 'sodas',
    image: PROD_SODA_ITALIANA,
  },
  {
    id: 'soda-frutos-rojos',
    name: { es: 'Soda Italiana Frutos Rojos', pt: 'Soda Italiana Frutas Vermelhas' },
    description: {
      es: 'Explosión de sabor a frambuesas, moras y fresas silvestres con burbujas.',
      pt: 'Mistura vibrante de amoras, morangos e framboesas com água gaseificada.',
    },
    price: 25000,
    categoryId: 'sodas',
    image: PROD_SODA_ITALIANA,
    featured: true,
  },

  // ================= BEBIDAS HELADAS & JUGOS =================
  {
    id: 'jugo-agua-15k',
    name: { es: 'Jugo Natural con Agua (Selección A)', pt: 'Suco Natural na Água (Seleção A)' },
    description: {
      es: 'Jugo 100% natural preparado al instante con frutas seleccionadas.',
      pt: 'Suco natural feito na hora com fruta fresca batida na água e gelo.',
    },
    price: 15000,
    categoryId: 'jugos',
    image: PROD_JUGO_MARACUJA,
    options: [
      {
        name: { es: 'Sabor de Fruta', pt: 'Sabor da Fruta' },
        choices: [
          { name: { es: 'Naranja Exprimida', pt: 'Laranja Espremida' } },
          { name: { es: 'Frutilla Fresca', pt: 'Morango Fresco' } },
          { name: { es: 'Frutos Rojos Silvestres', pt: 'Frutas Vermelhas' } },
          { name: { es: 'Acerola con Naranja', pt: 'Acerola com Laranja' } },
        ],
      },
    ],
  },
  {
    id: 'jugo-agua-12k',
    name: { es: 'Jugo Natural con Agua (Selección B)', pt: 'Suco Natural na Água (Seleção B)' },
    description: {
      es: 'Fruta fresca batida con agua purificada y hielo.',
      pt: 'Fruta fresca batida com água e gelo.',
    },
    price: 12000,
    categoryId: 'jugos',
    image: PROD_JUGO_MARACUJA,
    options: [
      {
        name: { es: 'Sabor de Fruta', pt: 'Sabor da Fruta' },
        choices: [
          { name: { es: 'Mburukujá (Maracuyá)', pt: 'Maracujá Fresco' } },
          { name: { es: 'Piña Dorada', pt: 'Abacaxi Doce' } },
          { name: { es: 'Acerola', pt: 'Acerola' } },
          { name: { es: 'Durazno', pt: 'Pêssego' } },
        ],
      },
    ],
  },
  {
    id: 'jugo-especiales-13k',
    name: { es: 'Jugo Especial Piña con Menta o Detox', pt: 'Suco Especial Abacaxi com Hortelã ou Detox' },
    description: {
      es: 'Combinaciones saludables y súper refrescantes.',
      pt: 'Combinações leves, diuréticas e revigorantes.',
    },
    price: 13000,
    categoryId: 'jugos',
    image: PROD_JUGO_MARACUJA,
    options: [
      {
        name: { es: 'Variedad Especial', pt: 'Variedade Especial' },
        choices: [
          { name: { es: 'Piña con Menta Fresca', pt: 'Abacaxi com Hortelã' } },
          { name: { es: 'Verde Detox (Manzana, Jengibre, Pepino, Limón)', pt: 'Detox Verde (Maçã, Gengibre, Couve/Pepino, Limão)' } },
        ],
      },
    ],
  },
  {
    id: 'jugo-leche-20k',
    name: { es: 'Jugo / Batido Cremoso con Leche', pt: 'Suco Cremoso / Vitamina com Leite' },
    description: {
      es: 'Fruta fresca batida con leche entera o descremada bien fría, suave y nutritivo.',
      pt: 'Vitamina aveludada batida com fruta fresca e leite integral bem gelado.',
    },
    price: 20000,
    categoryId: 'jugos',
    image: PROD_JUGO_MARACUJA,
    featured: true,
    options: [
      {
        name: { es: 'Sabor del Batido', pt: 'Sabor da Vitamina' },
        choices: [
          { name: { es: 'Mburukujá con Leche', pt: 'Maracujá com Leite' } },
          { name: { es: 'Frutilla con Leche', pt: 'Morango com Leite' } },
          { name: { es: 'Frutos Rojos con Leche', pt: 'Frutas Vermelhas com Leite' } },
          { name: { es: 'Durazno con Leche', pt: 'Pêssego com Leite' } },
          { name: { es: 'Vitaminas Frutas Mix', pt: 'Vitamina de Frutas Mistas Especial' } },
        ],
      },
    ],
  },
];
