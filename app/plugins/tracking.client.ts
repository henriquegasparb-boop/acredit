export default defineNuxtPlugin((nuxtApp) => {
  const router = useRouter()

  router.afterEach((to) => {
    if (typeof window === 'undefined') return
    const w = window as any

    w.fbq?.('track', 'PageView')
    w.gtag?.('event', 'page_view', { page_path: to.fullPath })

    if (to.path === '/simulador') {
      w.fbq?.('track', 'InitiateCheckout')
      w.gtag?.('event', 'begin_checkout', { page_path: to.fullPath })
    }
  })

  if (typeof document !== 'undefined') {
    document.addEventListener('click', (e) => {
      const target = (e.target as HTMLElement)?.closest('a[href*="wa.me"]') as HTMLAnchorElement | null
      if (!target) return
      const w = window as any
      w.fbq?.('track', 'Lead', { content_name: 'WhatsApp Click', source: target.dataset.source || 'generic' })
      w.gtag?.('event', 'generate_lead', { method: 'whatsapp', source: target.dataset.source || 'generic' })
    }, { capture: true })
  }
})
