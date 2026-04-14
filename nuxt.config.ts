export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'A-CREDIT | Soluções Financeiras',
      meta: [
        { name: 'description', content: 'A-CREDIT Soluções Financeiras - Financiamento Imobiliário e Crédito com Garantia de Imóvel com as melhores condições do mercado.' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/LOGO 1.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700&display=swap' }
      ],
      script: [
        { src: 'https://unpkg.com/@splinetool/viewer@1.9.82/build/spline-viewer.js', type: 'module' }
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
