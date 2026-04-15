const STORAGE_KEY = 'acredit_consent_v1'

const state = ref<'pending' | 'accepted' | 'rejected'>('pending')

export const useConsent = () => {
  const load = () => {
    if (typeof window === 'undefined') return
    const v = localStorage.getItem(STORAGE_KEY)
    if (v === 'accepted' || v === 'rejected') state.value = v
  }

  const accept = () => {
    state.value = 'accepted'
    localStorage.setItem(STORAGE_KEY, 'accepted')
    loadTrackers()
  }

  const reject = () => {
    state.value = 'rejected'
    localStorage.setItem(STORAGE_KEY, 'rejected')
  }

  const loadTrackers = () => {
    if (typeof window === 'undefined') return
    const w = window as any
    if (w.__acreditTrackersLoaded) return
    w.__acreditTrackersLoaded = true

    // GA4
    const gaScript = document.createElement('script')
    gaScript.async = true
    gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-MMEQPEDJGC'
    document.head.appendChild(gaScript)
    w.dataLayer = w.dataLayer || []
    w.gtag = function () { w.dataLayer.push(arguments) }
    w.gtag('js', new Date())
    w.gtag('config', 'G-MMEQPEDJGC')

    // Meta Pixel
    ;(function (f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
      if (f.fbq) return
      n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments) }
      if (!f._fbq) f._fbq = n
      n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = []
      t = b.createElement(e); t.async = !0; t.src = v
      s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s)
    })(w, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js')
    w.fbq('init', '699022069969634')
    w.fbq('track', 'PageView')
  }

  return { state: readonly(state), load, accept, reject, loadTrackers }
}
