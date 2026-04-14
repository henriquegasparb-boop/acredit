<template>
  <div>
    <!-- HEADER -->
    <header class="sim-header">
      <NuxtLink to="/" class="sim-logo">
        <img src="/LOGO3.png" alt="A-CREDIT">
      </NuxtLink>
    </header>

    <!-- PROGRESS BAR -->
    <div class="progress-bar">
      <div class="progress-fill" :style="{ width: progressPct + '%' }"></div>
      <span class="progress-text" v-show="progressPct > 0" :style="{ left: 'calc(' + progressPct + '% - 20px)' }">{{ progressPct }} %</span>
    </div>

    <!-- SIMULATOR WIZARD -->
    <main class="wizard-container">

      <!-- STEP 1 -->
      <div class="wizard-step" :class="{ active: step === 1 }">
        <h2 class="wizard-title">O que você está <span class="underline">buscando</span>?</h2>
        <p class="wizard-subtitle">Você precisa de um <strong>Financiamento Imobiliário</strong> ou <strong>Crédito com garantia de imóvel</strong>?</p>
        <div class="options-grid cols-2">
          <button class="option-card" :class="{ selected: state.operationType === 'financiamento' }" @click="selectOption(1, 'operationType', 'financiamento', 2)">
            <div class="option-icon">
              <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            </div>
            <span class="option-label">Quero comprar um imóvel.</span>
          </button>
          <button class="option-card" :class="{ selected: state.operationType === 'garantia' }" @click="selectOption(1, 'operationType', 'garantia', 2)">
            <div class="option-icon">
              <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
            </div>
            <span class="option-label">Quero empréstimo usando meu imóvel.</span>
          </button>
        </div>
      </div>

      <!-- STEP 2 -->
      <div class="wizard-step" :class="{ active: step === 2 }">
        <h2 class="wizard-title">Em <span class="underline">quanto tempo</span> pretende realizar?</h2>
        <p class="wizard-subtitle">Com isso entendemos sua urgência em conseguir o seu crédito.</p>
        <div class="options-grid cols-5">
          <button v-for="u in urgencyOptions" :key="u.value" class="option-card option-card-sm" :class="{ selected: state.urgency === u.value }" @click="selectOption(2, 'urgency', u.value, 3)">
            <div class="option-icon" v-html="u.icon"></div>
            <span class="option-label">{{ u.label }}</span>
          </button>
        </div>
        <div class="wizard-nav"><button class="btn-back" @click="goToStep(1)">Voltar</button></div>
      </div>

      <!-- STEP 3 -->
      <div class="wizard-step" :class="{ active: step === 3 }">
        <h2 class="wizard-title">Qual o <span class="underline">perfil</span> do imóvel?</h2>
        <p class="wizard-subtitle">Selecione o tipo do imóvel que irá utilizar</p>
        <div class="options-grid" :class="state.operationType === 'financiamento' ? 'cols-4' : 'cols-5'">
          <button v-for="p in propertyOptions" :key="p.value" class="option-card" :class="{ selected: state.propertyType === p.value }" @click="selectOption(3, 'propertyType', p.value, 4)">
            <div class="option-icon" v-html="p.icon"></div>
            <span class="option-label">{{ p.label }}</span>
          </button>
        </div>
        <div class="wizard-nav"><button class="btn-back" @click="goToStep(2)">Voltar</button></div>
      </div>

      <!-- STEP 4 -->
      <div class="wizard-step" :class="{ active: step === 4 }">
        <h2 class="wizard-title">Qual <span class="underline">prazo</span> você prefere?</h2>
        <p class="wizard-subtitle">Escolha a quantidade de parcelas.</p>
        <div class="options-grid cols-5">
          <button v-for="t in [120, 180, 240, 360, 420]" :key="t" class="option-card option-card-number" :class="{ selected: state.term === t }" @click="selectOption(4, 'term', t, 5)">
            <span class="option-number">{{ t }}</span>
            <span class="option-label">meses</span>
          </button>
        </div>
        <div class="wizard-nav"><button class="btn-back" @click="goToStep(3)">Voltar</button></div>
      </div>

      <!-- STEP 5 -->
      <div class="wizard-step" :class="{ active: step === 5 }">
        <h2 class="wizard-title">Quais os <span class="underline">valores</span> da operação?</h2>
        <p class="wizard-subtitle">Preencha os dados para gerarmos sua simulação.</p>
        <div class="form-card">
          <div class="form-group">
            <label for="propertyValue">Valor aproximado do imóvel</label>
            <input type="text" id="propertyValue" class="form-input" placeholder="R$ 0,00" v-model="propertyValueDisplay" @input="onPropertyValueInput" :style="{ borderColor: propertyError ? '#EF4444' : '' }">
            <span class="form-hint">O valor mínimo do imóvel deve ser R$ 100.000,00</span>
          </div>
          <div class="form-group" v-show="state.propertyValue >= 100000">
            <label>Valor do empréstimo</label>
            <input type="range" class="form-range" :min="loanMin" :max="loanMax" step="10000" v-model.number="state.loanValue">
            <div class="range-labels">
              <span>Valor mínimo<br>{{ formatCurrency(loanMin) }}</span>
              <span>Valor máximo<br>{{ formatCurrency(loanMax) }}</span>
            </div>
            <input type="text" class="form-input" :value="formatCurrency(state.loanValue)" readonly>
          </div>
        </div>
        <div class="wizard-nav">
          <button class="btn-back" @click="goToStep(4)">Voltar</button>
          <button class="btn-next" @click="nextStep5">Avançar</button>
        </div>
      </div>

      <!-- STEP 6 -->
      <div class="wizard-step" :class="{ active: step === 6 }">
        <h2 class="wizard-title">Qual é o <span class="underline">tipo</span> da operação?</h2>
        <p class="wizard-subtitle">Pessoa jurídica ou pessoa física?</p>
        <div class="options-grid cols-2">
          <button class="option-card" :class="{ selected: state.personType === 'fisica' }" @click="selectOption(6, 'personType', 'fisica', 7)">
            <div class="option-icon">
              <svg width="56" height="56" viewBox="0 0 24 24" fill="currentColor" stroke="none"><circle cx="12" cy="8" r="4"/><path d="M12 14c-6 0-8 3-8 5v1h16v-1c0-2-2-5-8-5z"/></svg>
            </div>
            <span class="option-label">Física</span>
          </button>
          <button class="option-card" :class="{ selected: state.personType === 'juridica' }" @click="selectOption(6, 'personType', 'juridica', 7)">
            <div class="option-icon">
              <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="12" y1="12" x2="12" y2="12" stroke-width="3" stroke-linecap="round"/></svg>
            </div>
            <span class="option-label">Jurídica</span>
          </button>
        </div>
        <div class="wizard-nav"><button class="btn-back" @click="goToStep(5)">Voltar</button></div>
      </div>

      <!-- STEP 7 -->
      <div class="wizard-step" :class="{ active: step === 7 }">
        <h2 class="wizard-title">Você possui um <span class="underline">valor de entrada</span>?</h2>
        <div class="options-grid cols-2">
          <button class="option-card" :class="{ selected: state.hasEntry === true }" @click="state.hasEntry = true; showEntryForm = true">
            <div class="option-icon">
              <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <span class="option-label">Sim</span>
          </button>
          <button class="option-card" :class="{ selected: state.hasEntry === false }" @click="state.hasEntry = false; state.entryValue = 0; showEntryForm = false; goToStep(8)">
            <div class="option-icon">
              <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </div>
            <span class="option-label">Não</span>
          </button>
        </div>
        <div class="form-card" v-show="showEntryForm">
          <div class="form-group">
            <label for="entryValue">Qual é o seu valor de entrada?</label>
            <input type="text" id="entryValue" class="form-input" placeholder="R$ 0,00" v-model="entryValueDisplay" @input="onEntryValueInput">
          </div>
        </div>
        <div class="wizard-nav">
          <button class="btn-back" @click="goToStep(6)">Voltar</button>
          <button class="btn-next" v-show="showEntryForm" @click="goToStep(8)">Avançar</button>
        </div>
      </div>

      <!-- STEP 8 -->
      <div class="wizard-step" :class="{ active: step === 8 }">
        <h2 class="wizard-title">Em relação a <span class="underline">negociação</span></h2>
        <div class="options-grid cols-2">
          <button class="option-card" :class="{ selected: state.negotiation === 'escolhido' }" @click="selectOption(8, 'negotiation', 'escolhido', 9)">
            <div class="option-icon">
              <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><circle cx="12" cy="14" r="3" fill="currentColor"/></svg>
            </div>
            <span class="option-label">Já tenho imóvel escolhido</span>
          </button>
          <button class="option-card" :class="{ selected: state.negotiation === 'procurando' }" @click="selectOption(8, 'negotiation', 'procurando', 9)">
            <div class="option-icon">
              <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><circle cx="12" cy="14" r="3" fill="none"/><line x1="14.5" y1="16.5" x2="18" y2="20" stroke-width="2"/></svg>
            </div>
            <span class="option-label">Estou procurando um imóvel</span>
          </button>
        </div>
        <div class="wizard-nav"><button class="btn-back" @click="goToStep(7)">Voltar</button></div>
      </div>

      <!-- STEP 9 -->
      <div class="wizard-step" :class="{ active: step === 9 }">
        <h2 class="wizard-title">Agora precisamos dos seus <span class="underline">dados</span></h2>
        <p class="wizard-subtitle">Preencha seus dados para que possamos entrar em contato com a melhor proposta.</p>
        <div class="form-card form-card-wide">
          <div class="form-row">
            <div class="form-group">
              <label for="userName">Nome completo</label>
              <input type="text" id="userName" class="form-input" placeholder="Nome completo" v-model="state.userName">
            </div>
            <div class="form-group">
              <label for="userCPF">CPF</label>
              <input type="text" id="userCPF" class="form-input" placeholder="000.000.000-00" maxlength="14" v-model="cpfDisplay" @input="onCpfInput">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="userIncome">Renda familiar total</label>
              <input type="text" id="userIncome" class="form-input" placeholder="R$ 0,00" v-model="incomeDisplay" @input="onIncomeInput">
            </div>
            <div class="form-group">
              <label for="userBirth">Data de nascimento</label>
              <input type="text" id="userBirth" class="form-input" placeholder="dd/mm/aaaa" maxlength="10" v-model="birthDisplay" @input="onBirthInput">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="userWhatsapp">WhatsApp</label>
              <input type="text" id="userWhatsapp" class="form-input" placeholder="(00) 00000-0000" maxlength="15" v-model="whatsappDisplay" @input="onWhatsappInput">
            </div>
            <div class="form-group">
              <label for="userEmail">E-mail</label>
              <input type="email" id="userEmail" class="form-input" placeholder="Seu melhor e-mail" v-model="state.userEmail">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="userCity">Cidade</label>
              <input type="text" id="userCity" class="form-input" placeholder="Sua cidade" v-model="state.userCity">
            </div>
            <div class="form-group">
              <label for="userState">Estado</label>
              <select id="userState" class="form-input form-select" v-model="state.userState">
                <option value="">Selecione</option>
                <option v-for="s in states" :key="s" :value="s">{{ stateNames[s] }}</option>
              </select>
            </div>
          </div>
          <div class="form-check">
            <input type="checkbox" id="termsCheck" v-model="termsAccepted">
            <label for="termsCheck">Concordo com os <NuxtLink to="/termos" target="_blank">Termos de Uso</NuxtLink> e a <NuxtLink to="/politica" target="_blank">Política de Privacidade</NuxtLink> da A-CREDIT.</label>
          </div>
        </div>
        <div class="wizard-nav">
          <button class="btn-back" @click="goToStep(8)">Voltar</button>
          <button class="btn-submit" @click="submitSimulation">Simular</button>
        </div>
      </div>

      <!-- STEP 10: Resultado -->
      <div class="wizard-step" :class="{ active: step === 10 }">
        <h2 class="wizard-title">Resultado da sua <span class="underline">simulação</span></h2>
        <p class="wizard-subtitle">Confira abaixo as condições estimadas para o seu crédito</p>
        <div class="result-card">
          <div class="result-header">
            <img src="/LOGO 2.png" alt="A-CREDIT" class="result-logo">
          </div>
          <div class="result-body">
            <div class="result-main">
              <span class="result-label">Parcela estimada</span>
              <span class="result-value">{{ formatCurrency(result.payment) }}</span>
            </div>
            <div class="result-grid">
              <div class="result-item">
                <span class="result-item-label">Tipo</span>
                <span class="result-item-value">{{ result.typeLabel }}</span>
              </div>
              <div class="result-item">
                <span class="result-item-label">Valor do imóvel</span>
                <span class="result-item-value">{{ formatCurrency(state.propertyValue) }}</span>
              </div>
              <div class="result-item">
                <span class="result-item-label">Valor financiado</span>
                <span class="result-item-value">{{ formatCurrency(result.loanUsed) }}</span>
              </div>
              <div class="result-item">
                <span class="result-item-label">Prazo</span>
                <span class="result-item-value">{{ result.termUsed }} meses</span>
              </div>
              <div class="result-item">
                <span class="result-item-label">Total pago</span>
                <span class="result-item-value">{{ formatCurrency(result.total) }}</span>
              </div>
              <div class="result-item">
                <span class="result-item-label">Entrada</span>
                <span class="result-item-value">{{ state.hasEntry ? formatCurrency(state.entryValue) : 'Sem entrada' }}</span>
              </div>
            </div>
            <p class="result-disclaimer">* Valores estimados. Sujeito à análise de crédito e condições do banco parceiro. Taxa utilizada: Financiamento 11,69% a.a. | Crédito com Garantia 1,00% a.m.</p>
          </div>
          <div class="result-actions">
            <a :href="whatsappResultLink" target="_blank" rel="noopener" class="btn-whatsapp-result">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Falar com um especialista no WhatsApp
            </a>
            <NuxtLink to="/" class="btn-back-home">Voltar ao site</NuxtLink>
          </div>
        </div>
      </div>

    </main>
  </div>
</template>

<script setup>
import emailjs from '@emailjs/browser'

useHead({ title: 'Simulador | A-CREDIT Soluções Financeiras' })

const EMAILJS_PUBLIC_KEY = 'CGNT4227Cf9IJRgW6'
const EMAILJS_SERVICE_ID = 'service_ss094qf'
const EMAILJS_TEMPLATE_ID = 'template_e6he5fz'

const step = ref(1)
const totalSteps = 10

const state = reactive({
  operationType: '',
  urgency: '',
  propertyType: '',
  term: 0,
  propertyValue: 0,
  loanValue: 0,
  personType: '',
  hasEntry: null,
  entryValue: 0,
  negotiation: '',
  userName: '',
  userCPF: '',
  userIncome: 0,
  userBirth: '',
  userWhatsapp: '',
  userEmail: '',
  userCity: '',
  userState: ''
})

const propertyValueDisplay = ref('')
const entryValueDisplay = ref('')
const cpfDisplay = ref('')
const incomeDisplay = ref('')
const birthDisplay = ref('')
const whatsappDisplay = ref('')
const showEntryForm = ref(false)
const termsAccepted = ref(false)
const propertyError = ref(false)

const result = reactive({ payment: 0, total: 0, typeLabel: '', loanUsed: 0, termUsed: 0 })
const whatsappResultLink = ref('#')

const progressPct = computed(() => Math.round(((step.value - 1) / (totalSteps - 1)) * 100))

const loanMax = computed(() => state.operationType === 'garantia' ? state.propertyValue * 0.6 : state.propertyValue * 0.8)
const loanMin = computed(() => state.propertyValue * 0.1)

watch(() => state.propertyValue, (val) => {
  if (val >= 100000) {
    state.loanValue = loanMax.value
  }
})

const urgencyOptions = [
  { value: 'imediatamente', label: 'Imediatamente', icon: '<svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="4" width="18" height="16" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/><line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" stroke-width="1.5"/><polyline points="9 15 11 17 15 13" fill="none" stroke="currentColor" stroke-width="2"/></svg>' },
  { value: '1mes', label: 'Em até 1 mês', icon: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="3" y1="10" x2="21" y2="10"/><text x="12" y="18" text-anchor="middle" fill="currentColor" font-size="8" font-weight="700" stroke="none">1</text></svg>' },
  { value: '3meses', label: 'Em até 3 meses', icon: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="3" y1="10" x2="21" y2="10"/><text x="12" y="18" text-anchor="middle" fill="currentColor" font-size="8" font-weight="700" stroke="none">3</text></svg>' },
  { value: 'mais3', label: 'Acima de 3 meses', icon: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="3" y1="10" x2="21" y2="10"/><text x="12" y="18" text-anchor="middle" fill="currentColor" font-size="7" font-weight="700" stroke="none">3+</text></svg>' },
  { value: 'simulando', label: 'Apenas simulando', icon: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="3" y1="10" x2="21" y2="10"/><line x1="9" y1="14" x2="15" y2="18" stroke="currentColor" stroke-width="2"/><line x1="15" y1="14" x2="9" y2="18" stroke="currentColor" stroke-width="2"/></svg>' }
]

const propertyOptions = computed(() => {
  if (state.operationType === 'financiamento') {
    return [
      { value: 'casa', label: 'Casa', icon: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>' },
      { value: 'apartamento', label: 'Apartamento', icon: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="4" y="2" width="16" height="20" rx="1"/><rect x="10" y="18" width="4" height="4"/></svg>' },
      { value: 'comercial', label: 'Sala Comercial', icon: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="7" width="20" height="14" rx="1"/><path d="M6 7V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2"/><line x1="2" y1="13" x2="22" y2="13"/></svg>' },
      { value: 'outros', label: 'Outros', icon: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="1.5" fill="currentColor"/><circle cx="6" cy="12" r="1.5" fill="currentColor"/><circle cx="18" cy="12" r="1.5" fill="currentColor"/></svg>' }
    ]
  }
  return [
    { value: 'casa', label: 'Casa', icon: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>' },
    { value: 'apartamento', label: 'Apartamento', icon: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="4" y="2" width="16" height="20" rx="1"/><rect x="10" y="18" width="4" height="4"/></svg>' },
    { value: 'terreno', label: 'Terreno', icon: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 20L8 8l4 6 4-10 6 16H2z"/></svg>' },
    { value: 'comercial', label: 'Sala Comercial', icon: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="7" width="20" height="14" rx="1"/><path d="M6 7V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2"/></svg>' },
    { value: 'outros', label: 'Outros', icon: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="1.5" fill="currentColor"/><circle cx="6" cy="12" r="1.5" fill="currentColor"/><circle cx="18" cy="12" r="1.5" fill="currentColor"/></svg>' }
  ]
})

const states = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO']
const stateNames = { AC:'Acre',AL:'Alagoas',AP:'Amapá',AM:'Amazonas',BA:'Bahia',CE:'Ceará',DF:'Distrito Federal',ES:'Espírito Santo',GO:'Goiás',MA:'Maranhão',MT:'Mato Grosso',MS:'Mato Grosso do Sul',MG:'Minas Gerais',PA:'Pará',PB:'Paraíba',PR:'Paraná',PE:'Pernambuco',PI:'Piauí',RJ:'Rio de Janeiro',RN:'Rio Grande do Norte',RS:'Rio Grande do Sul',RO:'Rondônia',RR:'Roraima',SC:'Santa Catarina',SP:'São Paulo',SE:'Sergipe',TO:'Tocantins' }

function formatCurrency(val) {
  return (val || 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

function formatInputAsCurrency(raw) {
  const num = parseInt(raw.replace(/\D/g, '')) || 0
  return num / 100
}

function goToStep(n) {
  step.value = n
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function selectOption(stepNum, field, value, next) {
  state[field] = value
  setTimeout(() => goToStep(next), 200)
}

function onPropertyValueInput(e) {
  const cents = formatInputAsCurrency(e.target.value)
  state.propertyValue = cents
  propertyValueDisplay.value = formatCurrency(cents)
  propertyError.value = false
}

function onEntryValueInput(e) {
  const cents = formatInputAsCurrency(e.target.value)
  state.entryValue = cents
  entryValueDisplay.value = formatCurrency(cents)
}

function onCpfInput(e) {
  let v = e.target.value.replace(/\D/g, '').slice(0, 11)
  if (v.length > 9) v = v.slice(0,3)+'.'+v.slice(3,6)+'.'+v.slice(6,9)+'-'+v.slice(9)
  else if (v.length > 6) v = v.slice(0,3)+'.'+v.slice(3,6)+'.'+v.slice(6)
  else if (v.length > 3) v = v.slice(0,3)+'.'+v.slice(3)
  cpfDisplay.value = v
  state.userCPF = v
}

function onIncomeInput(e) {
  const cents = formatInputAsCurrency(e.target.value)
  state.userIncome = cents
  incomeDisplay.value = formatCurrency(cents)
}

function onBirthInput(e) {
  let v = e.target.value.replace(/\D/g, '').slice(0, 8)
  if (v.length > 4) v = v.slice(0,2)+'/'+v.slice(2,4)+'/'+v.slice(4)
  else if (v.length > 2) v = v.slice(0,2)+'/'+v.slice(2)
  birthDisplay.value = v
  state.userBirth = v
}

function onWhatsappInput(e) {
  let v = e.target.value.replace(/\D/g, '').slice(0, 11)
  if (v.length > 6) v = '('+v.slice(0,2)+') '+v.slice(2,7)+'-'+v.slice(7)
  else if (v.length > 2) v = '('+v.slice(0,2)+') '+v.slice(2)
  whatsappDisplay.value = v
  state.userWhatsapp = v
}

function nextStep5() {
  if (state.propertyValue < 100000) {
    propertyError.value = true
    return
  }
  goToStep(6)
}

function submitSimulation() {
  if (!state.userName || !state.userWhatsapp || !state.userEmail) {
    alert('Por favor, preencha os campos obrigatórios: Nome, WhatsApp e E-mail.')
    return
  }
  if (!termsAccepted.value) {
    alert('Você precisa concordar com os Termos de uso para continuar.')
    return
  }
  showResult()
}

function showResult() {
  const pv = state.loanValue || state.propertyValue * 0.8
  const n = state.term || 360
  const i = state.operationType === 'garantia'
    ? 0.01
    : Math.pow(1.1169, 1/12) - 1
  const factor = Math.pow(1 + i, n)
  const pmt = pv * (i * factor) / (factor - 1)
  const total = pmt * n

  const typeLabel = state.operationType === 'financiamento' ? 'Financiamento Imobiliário' : 'Crédito com Garantia de Imóvel'

  result.payment = pmt
  result.total = total
  result.typeLabel = typeLabel
  result.loanUsed = pv
  result.termUsed = n

  const urgencyLabels = { imediatamente: 'Imediatamente', '1mes': 'Em até 1 mês', '3meses': 'Em até 3 meses', mais3: 'Acima de 3 meses', simulando: 'Apenas simulando' }
  const propertyLabels = { casa: 'Casa', apartamento: 'Apartamento', comercial: 'Sala Comercial', terreno: 'Terreno', outros: 'Outros' }

  // EmailJS
  emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY })
  emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
      to_email: 'solucoes.acredit@gmail.com',
      subject: 'Nova Simulação - ' + state.userName,
      tipoImovel: propertyLabels[state.propertyType] || state.propertyType,
      valorFinanciado: formatCurrency(pv),
      selectedState: stateNames[state.userState] || state.userState,
      city: state.userCity,
      estadoImovel: stateNames[state.userState] || state.userState,
      nome: state.userName,
      dataNascimento: state.userBirth,
      tipoRenda: formatCurrency(state.userIncome) + ' (' + (state.personType === 'fisica' ? 'Pessoa Física' : 'Pessoa Jurídica') + ')',
      contato: state.userWhatsapp + ' | ' + state.userEmail,
      estadoCivil: '—',
      cpf: state.userCPF,
      operacao: typeLabel,
      urgencia: urgencyLabels[state.urgency] || state.urgency,
      negociacao: state.negotiation === 'escolhido' ? 'Já tem imóvel escolhido' : 'Está procurando imóvel',
      valorImovel: formatCurrency(state.propertyValue),
      prazo: n + ' meses',
      entrada: state.hasEntry ? formatCurrency(state.entryValue) : 'Sem entrada',
      parcela: formatCurrency(pmt),
      totalPago: formatCurrency(total),
      message: 'Simulação de ' + state.userName + ' - ' + typeLabel + ' - ' + formatCurrency(state.propertyValue)
    }).then(() => console.log('Email enviado')).catch(err => {
      console.error('Erro email:', err)
      alert('Não foi possível enviar o e-mail automaticamente. Detalhes no console.')
    })

  // WhatsApp link
  let msg = 'Olá! Fiz uma simulação no site da A-CREDIT e gostaria de mais informações.\n\n'
  msg += '📋 *Dados da simulação:*\n'
  msg += '• Tipo: ' + typeLabel + '\n'
  msg += '• Valor do imóvel: ' + formatCurrency(state.propertyValue) + '\n'
  msg += '• Valor financiado: ' + formatCurrency(pv) + '\n'
  msg += '• Prazo: ' + n + ' meses\n'
  msg += '• Parcela estimada: ' + formatCurrency(pmt) + '\n'
  if (state.hasEntry) msg += '• Entrada: ' + formatCurrency(state.entryValue) + '\n'
  msg += '\n👤 *Meus dados:*\n'
  msg += '• Nome: ' + state.userName + '\n'
  if (state.userWhatsapp) msg += '• WhatsApp: ' + state.userWhatsapp + '\n'
  if (state.userEmail) msg += '• E-mail: ' + state.userEmail + '\n'

  whatsappResultLink.value = 'https://wa.me/5511945723238?text=' + encodeURIComponent(msg)
  goToStep(10)
}
</script>
