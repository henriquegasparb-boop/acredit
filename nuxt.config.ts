export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'A-CREDIT | Soluções Financeiras',
      meta: [
        { name: 'description', content: 'A-CREDIT Soluções Financeiras - Financiamento Imobiliário e Crédito com Garantia de Imóvel com as melhores condições do mercado.' },
        { name: 'theme-color', content: '#04394e' },
        { name: 'author', content: 'A-CREDIT Soluções Financeiras' },
        { name: 'keywords', content: 'financiamento imobiliário, crédito com garantia de imóvel, home equity, correspondente bancário, A-CREDIT' },
        // Open Graph (WhatsApp, Facebook, LinkedIn)
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'A-CREDIT Soluções Financeiras' },
        { property: 'og:title', content: 'A-CREDIT | Financiamento Imobiliário com as melhores taxas' },
        { property: 'og:description', content: 'Simule seu financiamento imobiliário ou crédito com garantia de imóvel. Processo 100% digital, parceria com os maiores bancos.' },
        { property: 'og:url', content: 'https://acreditbrasil.com' },
        { property: 'og:image', content: 'https://acreditbrasil.com/LOGO%201.png' },
        { property: 'og:locale', content: 'pt_BR' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'A-CREDIT | Financiamento Imobiliário com as melhores taxas' },
        { name: 'twitter:description', content: 'Simule seu financiamento imobiliário ou crédito com garantia de imóvel. Processo 100% digital.' },
        { name: 'twitter:image', content: 'https://acreditbrasil.com/LOGO%201.png' }
      ],
      link: [
        { rel: 'canonical', href: 'https://acreditbrasil.com' },
        { rel: 'icon', type: 'image/png', href: '/LOGO 1.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700&display=swap' }
      ],
      script: [
        { src: 'https://unpkg.com/@splinetool/viewer@1.9.82/build/spline-viewer.js', type: 'module' },
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FinancialService',
            name: 'A-CREDIT Soluções Financeiras',
            description: 'Correspondente bancário especializado em Financiamento Imobiliário e Crédito com Garantia de Imóvel.',
            url: 'https://acreditbrasil.com',
            logo: 'https://acreditbrasil.com/LOGO%201.png',
            image: 'https://acreditbrasil.com/LOGO%201.png',
            telephone: '+55-11-94572-3238',
            email: 'contato@acredit.com.br',
            priceRange: '$$',
            areaServed: { '@type': 'Country', name: 'Brasil' },
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'BR',
              addressRegion: 'SP'
            },
            sameAs: [],
            serviceType: ['Financiamento Imobiliário', 'Crédito com Garantia de Imóvel', 'Correspondente Bancário']
          })
        }
      ]
    }
  },

  css: ['~/assets/css/main.css'],

  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag === 'spline-viewer'
    }
  }
})
