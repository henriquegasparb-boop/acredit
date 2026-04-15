<template>
  <Transition name="banner">
    <div v-if="consent.state.value === 'pending'" class="cookie-banner" role="dialog" aria-live="polite">
      <div class="cookie-banner-inner">
        <div class="cookie-banner-text">
          <strong>Usamos cookies</strong>
          <p>Utilizamos cookies e tecnologias semelhantes para analisar o uso do site e personalizar sua experiência, inclusive para fins de marketing (Meta Pixel e Google Analytics). Ao clicar em "Aceitar", você concorda com o uso conforme nossa <NuxtLink to="/politica">Política de Privacidade</NuxtLink>.</p>
        </div>
        <div class="cookie-banner-actions">
          <button type="button" class="cookie-btn cookie-btn-reject" @click="consent.reject">Recusar</button>
          <button type="button" class="cookie-btn cookie-btn-accept" @click="consent.accept">Aceitar</button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
const consent = useConsent()
</script>

<style scoped>
.cookie-banner {
  position: fixed;
  bottom: 16px;
  left: 16px;
  right: 16px;
  z-index: 9999;
  background: #04394e;
  color: #fff;
  border: 1px solid rgba(201, 168, 76, 0.4);
  border-radius: 14px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
  max-width: 980px;
  margin: 0 auto;
}
.cookie-banner-inner {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 20px 24px;
}
.cookie-banner-text strong {
  display: block;
  font-size: 0.95rem;
  margin-bottom: 4px;
  color: #c9a84c;
  letter-spacing: 0.02em;
}
.cookie-banner-text p {
  font-size: 0.85rem;
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.85);
  margin: 0;
}
.cookie-banner-text a {
  color: #c9a84c;
  text-decoration: underline;
}
.cookie-banner-actions {
  display: flex;
  gap: 10px;
  flex-shrink: 0;
}
.cookie-btn {
  padding: 10px 22px;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  border: 1px solid transparent;
  transition: transform 0.15s, background 0.15s;
}
.cookie-btn:hover { transform: translateY(-1px); }
.cookie-btn-reject {
  background: transparent;
  border-color: rgba(255, 255, 255, 0.3);
  color: #fff;
}
.cookie-btn-reject:hover { background: rgba(255, 255, 255, 0.08); }
.cookie-btn-accept {
  background: #c9a84c;
  color: #04394e;
}
.cookie-btn-accept:hover { background: #d4b85c; }
.banner-enter-active, .banner-leave-active { transition: transform 0.3s ease, opacity 0.3s ease; }
.banner-enter-from, .banner-leave-to { transform: translateY(120%); opacity: 0; }
@media (max-width: 720px) {
  .cookie-banner-inner {
    flex-direction: column;
    align-items: stretch;
    padding: 18px;
    gap: 14px;
  }
  .cookie-banner-actions { justify-content: flex-end; }
}
</style>
