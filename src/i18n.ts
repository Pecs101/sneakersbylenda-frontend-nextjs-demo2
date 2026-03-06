import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        sneakers: 'Sneakers',
        vault: 'Vault',
        contact: 'Contact',
        shop_now: 'Shop Now',
        view_all: 'View All'
      },
      sneakers_page: {
        title: 'ALL SNEAKERS',
        products_found: 'Products Found',
        search_placeholder: 'Search sneakers...',
        filters: 'Filters',
        category: 'Category',
        brand: 'Brand',
        price_range: 'Price Range',
        sort_by: 'Sort By',
        no_sneakers_found: 'No sneakers found',
        no_sneakers_desc: 'Try adjusting your filters or search query.',
        clear_filters: 'Clear all filters',
        apply_filters: 'Apply Filters',
        sort_options: {
          newest: 'Newest',
          low_high: 'Price: Low to High',
          high_low: 'Price: High to Low'
        }
      },
      categories: {
        all: 'All',
        lifestyle: 'Lifestyle',
        running: 'Running',
        basketball: 'Basketball',
        skateboarding: 'Skateboarding'
      },
      price_ranges: {
        all: 'All',
        under_100: 'Under $100',
        range_100_150: '$100 - $150',
        range_150_200: '$150 - $200',
        over_200: 'Over $200'
      },
      contact: {
        title: 'GET IN TOUCH',
        subtitle: 'Have a question about a drop, an order, or just want to talk sneakers? Our team is here to help you navigate the culture.',
        info_title: 'Contact Information',
        email_us: 'Email Us',
        call_us: 'Call Us',
        visit_hq: 'Visit Our HQ',
        business_hours: 'Business Hours',
        send_message: 'Send a Message',
        full_name: 'Full Name',
        email_address: 'Email Address',
        subject: 'Subject',
        message: 'Message',
        send_btn: 'SEND MESSAGE',
        global_presence: 'Global Presence',
        ship_worldwide: 'WE SHIP WORLDWIDE',
        ship_worldwide_desc: 'No matter where you are, we bring the culture to your doorstep. Fast, secure, and fully tracked international shipping.',
        alert_success: 'Message sent! We will get back to you soon.',
        days: {
          mon_fri: 'Monday - Friday',
          sat: 'Saturday',
          sun: 'Sunday',
          closed: 'Closed'
        }
      },
      vault: {
        access_granted: 'The Vault Access Granted',
        title: 'THE VAULT',
        subtitle: 'Unlock exclusive bundles curated for the true collectors. Premium sneakers, signature apparel, and limited accessories in one ultimate package.',
        features: {
          curated_sets: 'Curated Sets',
          exclusive_savings: 'Exclusive Savings',
          limited_drops: 'Limited Drops',
          priority_shipping: 'Priority Shipping'
        },
        whats_inside: "What's Inside:",
        bundle_deal: 'Bundle Deal',
        free_shipping: 'Free Shipping',
        add_to_cart: 'Add to Cart',
        cta_title: "DON'T MISS THE NEXT DROP",
        cta_subtitle: 'Join the inner circle to get early access to Vault bundles and exclusive member-only pricing.',
        cta_placeholder: 'Enter your email',
        cta_btn: 'JOIN THE VAULT'
      },
      product_detail: {
        back_to_shop: 'Back to Shop',
        reviews: 'reviews',
        select_size: 'Select Size',
        size_guide: 'Size Guide',
        add_to_cart: 'ADD TO CART',
        authentic_only: 'Authentic Only',
        fast_shipping: 'Fast Shipping',
        easy_returns: 'Easy Returns',
        similar_items: 'SIMILAR ITEMS',
        not_found: 'Product not found',
        back_to_home: 'Back to Home'
      },
      cart: {
        title: 'Your Cart',
        empty: 'Your cart is empty',
        empty_desc: "Looks like you haven't added anything yet.",
        start_shopping: 'Start Shopping',
        subtotal: 'Subtotal',
        checkout_info: 'Shipping and taxes calculated at checkout.',
        checkout_btn: 'Checkout Now'
      },
      new_arrivals: {
        exclusive_collection: 'Exclusive Collection',
        title: 'NEW ARRIVALS',
        view_all: 'VIEW ALL'
      },
      testimonials: {
        community: 'Community',
        title: 'WHAT THEY SAY',
        trust: 'TRUST',
        voice: 'VOICE',
        items: {
          marcus: {
            role: 'Sneaker Collector',
            content: 'The curation here is unmatched. I found limited editions that were sold out everywhere else. Delivery was lightning fast.'
          },
          sarah: {
            role: 'Fashion Stylist',
            content: 'As a stylist, I need reliable sources for my clients. SNEAKERS by l3nda consistently delivers quality and authenticity every time.'
          },
          david: {
            role: 'Casual Enthusiast',
            content: 'Great customer service and the website is so easy to navigate. Love the new arrival alerts, they keep me ahead of the game.'
          }
        }
      },
      events: {
        upcoming: 'Upcoming',
        title: 'SNEAKER EVENTS',
        subtitle: 'Join the community at our upcoming meetups, conventions, and exclusive drop events across the globe.',
        view_calendar: 'VIEW CALENDAR'
      },
      hero: {
        slide1: {
          title: 'BE\nLEGEND',
          subtitle: 'It has survived not only five but dummy text to provide a glimpse into the future of performance.'
        },
        slide2: {
          title: 'FLY\nHIGH',
          subtitle: 'The legend returns with a classic silhouette and modern comfort for the next generation.'
        },
        slide3: {
          title: 'FOR\nYOU',
          subtitle: 'Craftsmanship meets performance in the latest iteration of the iconic 990 series.'
        }
      },
      common: {
        add_to_cart: 'Add to Cart',
        colours: 'Colours',
        new_arrivals: 'New Arrivals',
        exclusive_collection: 'Exclusive Collection',
        similar_items: 'Similar Items',
        select_size: 'Select Size',
        size_guide: 'Size Guide',
        select_color: 'Select Color',
        quantity: 'Quantity',
        organic_cotton: 'Organic Cotton',
        fast_shipping: 'Fast Shipping',
        easy_returns: 'Easy Returns'
      },
      footer: {
        description: 'The ultimate destination for sneakerheads. We bring you the most exclusive drops and a community that shares your passion for footwear.',
        quick_links: 'Quick Links',
        support: 'Support',
        newsletter: 'Newsletter',
        newsletter_desc: 'Subscribe to get notified about the latest drops and exclusive offers.',
        email_placeholder: 'Your email address',
        subscribe: 'Subscribe',
        rights: 'All rights reserved.',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        cookies: 'Cookies'
      }
    }
  },
  pt: {
    translation: {
      nav: {
        home: 'Início',
        sneakers: 'Sapatilhas',
        vault: 'Baú',
        contact: 'Contacto',
        shop_now: 'Comprar Agora',
        view_all: 'Ver Tudo'
      },
      sneakers_page: {
        title: 'TODAS AS SAPATILHAS',
        products_found: 'Produtos Encontrados',
        search_placeholder: 'Pesquisar sapatilhas...',
        filters: 'Filtros',
        category: 'Categoria',
        brand: 'Marca',
        price_range: 'Faixa de Preço',
        sort_by: 'Ordenar Por',
        no_sneakers_found: 'Nenhuma sapatilha encontrada',
        no_sneakers_desc: 'Tente ajustar os seus filtros ou a sua pesquisa.',
        clear_filters: 'Limpar todos os filtros',
        apply_filters: 'Aplicar Filtros',
        sort_options: {
          newest: 'Mais Recentes',
          low_high: 'Preço: Baixo para Alto',
          high_low: 'Preço: Alto para Baixo'
        }
      },
      categories: {
        all: 'Todos',
        lifestyle: 'Estilo de Vida',
        running: 'Corrida',
        basketball: 'Basquetebol',
        skateboarding: 'Skate'
      },
      price_ranges: {
        all: 'Todos',
        under_100: 'Abaixo de $100',
        range_100_150: '$100 - $150',
        range_150_200: '$150 - $200',
        over_200: 'Acima de $200'
      },
      contact: {
        title: 'ENTRE EM CONTACTO',
        subtitle: 'Tem alguma dúvida sobre um lançamento, um pedido ou apenas quer falar sobre sapatilhas? A nossa equipa está aqui para o ajudar a navegar na cultura.',
        info_title: 'Informações de Contacto',
        email_us: 'Envie-nos um e-mail',
        call_us: 'Ligue-nos',
        visit_hq: 'Visite o nosso HQ',
        business_hours: 'Horário de Funcionamento',
        send_message: 'Enviar uma Mensagem',
        full_name: 'Nome Completo',
        email_address: 'Endereço de E-mail',
        subject: 'Assunto',
        message: 'Mensagem',
        send_btn: 'ENVIAR MENSAGEM',
        global_presence: 'Presença Global',
        ship_worldwide: 'ENVIAMOS PARA TODO O MUNDO',
        ship_worldwide_desc: 'Não importa onde esteja, levamos a cultura até à sua porta. Envio internacional rápido, seguro e totalmente rastreado.',
        alert_success: 'Mensagem enviada! Entraremos em contacto em breve.',
        days: {
          mon_fri: 'Segunda - Sexta',
          sat: 'Sábado',
          sun: 'Domingo',
          closed: 'Fechado'
        }
      },
      vault: {
        access_granted: 'Acesso ao Cofre Concedido',
        title: 'O COFRE',
        subtitle: 'Desbloqueie pacotes exclusivos selecionados para os verdadeiros colecionadores. Sapatilhas premium, vestuário de assinatura e acessórios limitados num pacote definitivo.',
        features: {
          curated_sets: 'Conjuntos Curados',
          exclusive_savings: 'Poupanças Exclusivas',
          limited_drops: 'Lançamentos Limitados',
          priority_shipping: 'Envio Prioritário'
        },
        whats_inside: "O que está incluído:",
        bundle_deal: 'Oferta de Pacote',
        free_shipping: 'Envio Gratuito',
        add_to_cart: 'Adicionar ao Carrinho',
        cta_title: "NÃO PERCA O PRÓXIMO LANÇAMENTO",
        cta_subtitle: 'Junte-se ao círculo interno para obter acesso antecipado aos pacotes do Cofre e preços exclusivos para membros.',
        cta_placeholder: 'Introduza o seu e-mail',
        cta_btn: 'ADERIR AO COFRE'
      },
      product_detail: {
        back_to_shop: 'Voltar à Loja',
        reviews: 'avaliações',
        select_size: 'Selecionar Tamanho',
        size_guide: 'Guia de Tamanhos',
        add_to_cart: 'ADICIONAR AO CARRINHO',
        authentic_only: 'Apenas Autênticos',
        fast_shipping: 'Envio Rápido',
        easy_returns: 'Devoluções Fáceis',
        similar_items: 'ITENS SEMELHANTES',
        not_found: 'Produto não encontrado',
        back_to_home: 'Voltar ao Início'
      },
      cart: {
        title: 'O seu Carrinho',
        empty: 'O seu carrinho está vazio',
        empty_desc: 'Parece que ainda não adicionou nada.',
        start_shopping: 'Começar a Comprar',
        subtotal: 'Subtotal',
        checkout_info: 'Envio e taxas calculados no checkout.',
        checkout_btn: 'Finalizar Compra'
      },
      new_arrivals: {
        exclusive_collection: 'Coleção Exclusiva',
        title: 'NOVIDADES',
        view_all: 'VER TUDO'
      },
      testimonials: {
        community: 'Comunidade',
        title: 'O QUE ELES DIZEM',
        trust: 'CONFIANÇA',
        voice: 'VOZ',
        items: {
          marcus: {
            role: 'Colecionador de Sapatilhas',
            content: 'A curadoria aqui é inigualável. Encontrei edições limitadas que estavam esgotadas em todos os outros lugares. A entrega foi extremamente rápida.'
          },
          sarah: {
            role: 'Estilista de Moda',
            content: 'Como estilista, preciso de fontes confiáveis para os meus clientes. SNEAKERS by l3nda entrega consistentemente qualidade e autenticidade sempre.'
          },
          david: {
            role: 'Entusiasta Casual',
            content: 'Ótimo serviço ao cliente e o site é muito fácil de navegar. Adoro os alertas de novas chegadas, eles mantêm-me à frente do jogo.'
          }
        }
      },
      events: {
        upcoming: 'Próximos',
        title: 'EVENTOS DE SAPATILHAS',
        subtitle: 'Junte-se à comunidade nos nossos próximos encontros, convenções e eventos de lançamento exclusivos em todo o mundo.',
        view_calendar: 'VER CALENDÁRIO'
      },
      hero: {
        slide1: {
          title: 'SEJA\nLENDA',
          subtitle: 'Sobreviveu não apenas a cinco, mas a textos fictícios para fornecer um vislumbre do futuro do desempenho.'
        },
        slide2: {
          title: 'VOE\nALTO',
          subtitle: 'A lenda regressa com uma silhueta clássica e conforto moderno para a próxima geração.'
        },
        slide3: {
          title: 'PARA\nTI',
          subtitle: 'Artesanato encontra o desempenho na mais recente iteração da icónica série 990.'
        }
      },
      common: {
        add_to_cart: 'Adicionar ao Carrinho',
        colours: 'Cores',
        new_arrivals: 'Novidades',
        exclusive_collection: 'Coleção Exclusiva',
        similar_items: 'Itens Semelhantes',
        select_size: 'Selecionar Tamanho',
        size_guide: 'Guia de Tamanhos',
        select_color: 'Selecionar Cor',
        quantity: 'Quantidade',
        organic_cotton: 'Algodão Orgânico',
        fast_shipping: 'Envio Rápido',
        easy_returns: 'Devoluções Fáceis'
      },
      footer: {
        description: 'O destino final para os amantes de sapatilhas. Trazemos-lhe os lançamentos mais exclusivos e uma comunidade que partilha a sua paixão por calçado.',
        quick_links: 'Links Rápidos',
        support: 'Suporte',
        newsletter: 'Newsletter',
        newsletter_desc: 'Subscreva para ser notificado sobre os últimos lançamentos e ofertas exclusivas.',
        email_placeholder: 'O seu endereço de e-mail',
        subscribe: 'Subscrever',
        rights: 'Todos os direitos reservados.',
        privacy: 'Política de Privacidade',
        terms: 'Termos de Serviço',
        cookies: 'Cookies'
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pt', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
