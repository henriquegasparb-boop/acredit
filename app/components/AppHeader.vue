<template>
  <header class="header" :class="{ scrolled }" ref="headerEl">
    <div class="container header-inner">
      <NuxtLink to="/" class="logo">
        <img src="/LOGO3.png" alt="A-CREDIT Soluções Financeiras" class="logo-img">
      </NuxtLink>
      <nav class="nav" :class="{ open: navOpen }">
        <NuxtLink to="/#produtos" class="nav-link" @click="closeNav">Produtos</NuxtLink>
        <NuxtLink to="/simulador" class="nav-link" @click="closeNav">Simulador</NuxtLink>
        <NuxtLink to="/#quem-somos" class="nav-link" @click="closeNav">Quem Somos</NuxtLink>
        <NuxtLink to="/#faq" class="nav-link" @click="closeNav">FAQ</NuxtLink>
        <NuxtLink to="/simulador" class="btn btn-accent nav-cta" @click="closeNav">Simule Agora</NuxtLink>
      </nav>
      <button class="hamburger" :class="{ active: navOpen }" @click="toggleNav" aria-label="Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>
  <div class="nav-overlay" :class="{ active: navOpen }" @click="closeNav"></div>
</template>

<script setup>
const scrolled = ref(false)
const navOpen = ref(false)

function toggleNav() {
  navOpen.value = !navOpen.value
  document.body.style.overflow = navOpen.value ? 'hidden' : ''
}

function closeNav() {
  navOpen.value = false
  document.body.style.overflow = ''
}

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 50
  })
})
</script>
