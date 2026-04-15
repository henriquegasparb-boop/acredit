export const useTracking = () => {
  const track = (eventName: string, params: Record<string, any> = {}) => {
    if (typeof window === 'undefined') return
    const w = window as any
    w.fbq?.('track', eventName, params)
    w.gtag?.('event', eventName, params)
  }

  const trackLead = (source = 'form') => track('Lead', { source })
  const trackCompleteSimulation = (params: Record<string, any> = {}) =>
    track('CompleteRegistration', { content_name: 'Simulação concluída', ...params })

  return { track, trackLead, trackCompleteSimulation }
}
