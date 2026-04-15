export default defineNuxtPlugin(() => {
  const consent = useConsent()
  consent.load()
  if (consent.state.value === 'accepted') {
    consent.loadTrackers()
  }
})
