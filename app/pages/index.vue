<template>
  <div>
    <AppHeader />

    <!-- HERO -->
    <section class="hero" id="hero">
      <div class="hero-spline" v-once>
        <spline-viewer url="https://prod.spline.design/WE2S3DJv7Hd5ajMz/scene.splinecode" loading-anim-type="none"></spline-viewer>
      </div>
      <div class="hero-spline-overlay"></div>
      <div class="container hero-inner">
        <div class="hero-content">
          <div class="hero-badge fade-up">Soluções Financeiras Premium</div>
          <h1 class="fade-up">Conquiste seu crédito imobiliário com as <span class="text-accent">melhores condições</span></h1>
          <p class="hero-sub fade-up">Simule seu financiamento ou crédito com garantia de imóvel em minutos. Processo ágil, taxas competitivas e atendimento personalizado.</p>
          <div class="hero-buttons fade-up">
            <NuxtLink to="/simulador" class="btn btn-accent btn-lg">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="12" y2="14"/></svg>
              Simular Agora
            </NuxtLink>
            <a href="https://wa.me/5511945723238" target="_blank" rel="noopener" class="btn btn-outline btn-lg">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Falar com Especialista
            </a>
          </div>
          <div class="hero-stats fade-up">
            <div class="hero-stat">
              <span class="hero-stat-number">500+</span>
              <span class="hero-stat-label">Clientes atendidos</span>
            </div>
            <div class="hero-stat">
              <span class="hero-stat-number">R$50M+</span>
              <span class="hero-stat-label">Em crédito aprovado</span>
            </div>
            <div class="hero-stat">
              <span class="hero-stat-number">98%</span>
              <span class="hero-stat-label">Satisfação</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hero-marquee" aria-hidden="true">
        <div class="hero-marquee-track">
          <span class="hero-marquee-item">Simule agora</span>
          <span class="hero-marquee-item">Seja aprovado</span>
          <span class="hero-marquee-item">Realize seu sonho</span>
          <span class="hero-marquee-item">Conte sempre com a A-Credit</span>
          <span class="hero-marquee-item">Simule agora</span>
          <span class="hero-marquee-item">Seja aprovado</span>
          <span class="hero-marquee-item">Realize seu sonho</span>
          <span class="hero-marquee-item">Conte sempre com a A-Credit</span>
        </div>
      </div>
    </section>

    <!-- PRODUTOS -->
    <section class="section" id="produtos">
      <div class="container">
        <div class="section-label fade-up">Nossos Produtos</div>
        <h2 class="section-title fade-up">Soluções financeiras <span class="text-accent">sob medida</span></h2>
        <p class="section-subtitle fade-up">Encontre o crédito ideal para realizar seus objetivos com segurança e transparência</p>
        <div class="cards-grid">
          <div class="card fade-up">
            <div class="card-icon">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            </div>
            <h3>Financiamento Imobiliário</h3>
            <p>Compre seu imóvel com as melhores taxas e aprovação facilitada. Trabalhamos com os principais bancos para encontrar a melhor condição para você.</p>
            <ul class="card-list">
              <li>Taxas a partir de 11,69% a.a.</li>
              <li>Prazo de até 420 meses</li>
              <li>Uso do FGTS</li>
              <li>Imóveis novos e usados</li>
            </ul>
            <div class="card-buttons">
              <NuxtLink to="/simulador" class="btn btn-accent">Simular</NuxtLink>
              <a href="https://wa.me/5511945723238" target="_blank" rel="noopener" class="btn btn-whatsapp-outline">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp
              </a>
            </div>
          </div>
          <div class="card fade-up">
            <div class="card-icon">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
            </div>
            <h3>Crédito com Garantia de Imóvel</h3>
            <p>Use seu imóvel quitado para conseguir crédito com juros baixos. Ideal para investir no seu negócio, quitar dívidas ou realizar projetos pessoais.</p>
            <ul class="card-list">
              <li>Juros a partir de 1,00% a.m.</li>
              <li>Até 60% do valor do imóvel</li>
              <li>Prazo de até 240 meses</li>
              <li>Liberação em até 30 dias</li>
            </ul>
            <div class="card-buttons">
              <NuxtLink to="/simulador" class="btn btn-accent">Simular</NuxtLink>
              <a href="https://wa.me/5511945723238" target="_blank" rel="noopener" class="btn btn-whatsapp-outline">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- COMO FUNCIONA -->
    <section class="section section-light">
      <div class="container">
        <div class="section-label fade-up">Processo</div>
        <h2 class="section-title fade-up">Como funciona</h2>
        <p class="section-subtitle fade-up">Processo simples e transparente do início ao fim</p>
        <div class="steps">
          <div class="step fade-up">
            <div class="step-number">1</div>
            <div class="step-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#04394e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="12" y2="14"/></svg>
            </div>
            <h4>Faça sua simulação</h4>
            <p>Preencha os dados no simulador e veja as condições em tempo real</p>
          </div>
          <div class="step-line fade-up"></div>
          <div class="step fade-up">
            <div class="step-number">2</div>
            <div class="step-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#04394e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            </div>
            <h4>Receba as melhores condições</h4>
            <p>Comparamos propostas dos maiores bancos para você</p>
          </div>
          <div class="step-line fade-up"></div>
          <div class="step fade-up">
            <div class="step-number">3</div>
            <div class="step-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#04394e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
            </div>
            <h4>Envie seus documentos</h4>
            <p>Processo digital, rápido e sem burocracia</p>
          </div>
          <div class="step-line fade-up"></div>
          <div class="step fade-up">
            <div class="step-number">4</div>
            <div class="step-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#04394e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <h4>Assine e receba seu crédito</h4>
            <p>Assinatura do contrato e liberação do crédito na sua conta</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SIMULADOR CTA -->
    <section class="section" id="simulador">
      <div class="container">
        <div class="sim-cta-wrapper fade-up">
          <div class="sim-cta-content">
            <div class="section-label" style="color: var(--accent);">Simulador</div>
            <h2 class="section-title">Simule seu Crédito</h2>
            <p style="color:rgba(255,255,255,0.6);font-size:1.05rem;margin-bottom:28px;max-width:480px;font-weight:300;line-height:1.8;">Responda algumas perguntas rápidas e descubra as melhores condições para o seu financiamento ou crédito com garantia de imóvel.</p>
            <ul style="list-style:none;margin-bottom:36px;">
              <li style="padding:10px 0;display:flex;align-items:center;gap:12px;color:rgba(255,255,255,0.8);font-weight:300;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                Simulação completa em menos de 2 minutos
              </li>
              <li style="padding:10px 0;display:flex;align-items:center;gap:12px;color:rgba(255,255,255,0.8);font-weight:300;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                Resultado personalizado na hora
              </li>
              <li style="padding:10px 0;display:flex;align-items:center;gap:12px;color:rgba(255,255,255,0.8);font-weight:300;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                Sem compromisso e 100% gratuito
              </li>
            </ul>
            <NuxtLink to="/simulador" class="btn btn-accent btn-lg">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="12" y2="14"/></svg>
              Iniciar Simulação
            </NuxtLink>
          </div>
          <div class="sim-cta-visual">
            <img src="/LOGO 1.png" alt="A-CREDIT" style="width:260px;height:260px;border-radius:50%;box-shadow:0 24px 64px rgba(0,0,0,0.3);border:3px solid rgba(201,168,76,0.2);">
          </div>
        </div>
      </div>
    </section>

    <!-- POR QUE ESCOLHER -->
    <section class="section section-light" id="sobre">
      <div class="container">
        <div class="section-label fade-up">Diferenciais</div>
        <h2 class="section-title fade-up">Por que escolher a <span class="text-accent">A-CREDIT</span>?</h2>
        <p class="section-subtitle fade-up">Somos especialistas em soluções financeiras imobiliárias</p>
        <div class="features-grid">
          <div class="feature fade-up">
            <div class="feature-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <h4>Taxas Competitivas</h4>
            <p>Negociamos diretamente com os bancos para garantir as menores taxas do mercado.</p>
          </div>
          <div class="feature fade-up fade-up-delay-1">
            <div class="feature-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <h4>Aprovação Rápida</h4>
            <p>Processo ágil e desburocratizado. Sua aprovação de crédito em tempo recorde.</p>
          </div>
          <div class="feature fade-up fade-up-delay-2">
            <div class="feature-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </div>
            <h4>Atendimento Personalizado</h4>
            <p>Consultores dedicados que acompanham todo o processo do início ao fim.</p>
          </div>
          <div class="feature fade-up fade-up-delay-3">
            <div class="feature-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <h4>Segurança e Confiança</h4>
            <p>Parcerias consolidadas com os maiores bancos do país. Transparência total.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- QUEM SOMOS -->
    <section class="section" id="quem-somos">
      <div class="container">
        <div class="about-inner">
          <div class="about-photo-wrapper fade-up">
            <div class="about-photo-accent"></div>
            <div class="about-photo-frame"></div>
            <img src="/FotoH2.jpg" alt="Fundador da A-CREDIT" class="about-photo">
          </div>
          <div class="about-content">
            <div class="section-label fade-up">Quem Somos</div>
            <h2 class="section-title fade-up">Experiência bancária a <span class="text-accent">seu favor</span></h2>
            <p class="about-text fade-up">A A-CREDIT nasceu com o propósito de transformar o acesso ao crédito em algo <span class="about-highlight">simples, transparente e estratégico</span> para cada cliente.</p>
            <p class="about-text fade-up">Por trás da empresa está um profissional com sólida experiência no mercado financeiro, certificado na área e com mais de <span class="about-highlight">5 anos de atuação como gerente bancário</span>. Ao longo dessa trajetória, foram atendidos os mais diversos perfis de clientes, sempre com foco em entender necessidades e oferecer as melhores soluções de crédito disponíveis.</p>
            <p class="about-text fade-up">Com esse conhecimento prático e visão de mercado, surgiu a A-CREDIT: uma empresa criada para ir além do atendimento tradicional dos bancos, trazendo um serviço mais <span class="about-highlight">próximo, consultivo e personalizado</span>. Aqui, cada cliente tem um objetivo e nosso papel é tornar esse caminho mais fácil, rápido e vantajoso.</p>
            <p class="about-text fade-up" style="font-style: italic; color: var(--primary); font-weight: 400;">Mais do que intermediar operações, a A-CREDIT atua como parceira na sua jornada financeira.</p>
            <div class="about-stats fade-up">
              <div class="about-stat">
                <span class="about-stat-number">5+</span>
                <span class="about-stat-label">Anos no mercado financeiro</span>
              </div>
              <div class="about-stat">
                <span class="about-stat-number">500+</span>
                <span class="about-stat-label">Clientes atendidos</span>
              </div>
              <div class="about-stat">
                <span class="about-stat-number">100%</span>
                <span class="about-stat-label">Foco no cliente</span>
              </div>
            </div>
            <div class="about-signature fade-up">
              <div class="about-signature-line"></div>
              <div>
                <span class="about-signature-text">Fundador & CEO</span>
                <span class="about-signature-role">A-CREDIT Soluções Financeiras</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- BANCOS PARCEIROS -->
    <section class="section section-light" id="parceiros">
      <div class="container">
        <div class="section-label fade-up">Parceiros</div>
        <h2 class="section-title fade-up">Bancos Parceiros</h2>
        <p class="section-subtitle fade-up">Trabalhamos com as maiores instituições financeiras do Brasil</p>
        <div class="partners-grid fade-up">
          <div class="partner">
            <span class="partner-name">Inter</span>
            <span class="partner-sub">Banco Inter</span>
          </div>
          <div class="partner">
            <span class="partner-name">Itaú</span>
            <span class="partner-sub">Unibanco</span>
          </div>
          <div class="partner">
            <span class="partner-name">Bradesco</span>
            <span class="partner-sub">Banco Bradesco</span>
          </div>
          <div class="partner">
            <span class="partner-name">Santander</span>
            <span class="partner-sub">Brasil</span>
          </div>
          <div class="partner">
            <span class="partner-name">BRB</span>
            <span class="partner-sub">Banco de Brasília</span>
          </div>
          <div class="partner">
            <span class="partner-name">BB</span>
            <span class="partner-sub">Banco do Brasil</span>
          </div>
          <div class="partner">
            <span class="partner-name">PAN</span>
            <span class="partner-sub">Banco PAN</span>
          </div>
          <div class="partner">
            <span class="partner-name">CashMe</span>
            <span class="partner-sub">Cyrela</span>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section section-light" id="faq">
      <div class="container">
        <div class="section-label fade-up">Dúvidas</div>
        <h2 class="section-title fade-up">Perguntas Frequentes</h2>
        <p class="section-subtitle fade-up">Tire suas dúvidas sobre nossos serviços</p>
        <div class="faq-list fade-up">
          <div v-for="(faq, i) in faqs" :key="i" class="faq-item" :class="{ active: activeFaq === i }">
            <button class="faq-question" @click="toggleFaq(i)">
              <span>{{ faq.q }}</span>
              <svg class="faq-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="faq-answer" :ref="el => faqRefs[i] = el" :style="{ maxHeight: activeFaq === i ? faqHeights[i] + 'px' : '0px' }">
              <p>{{ faq.a }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA FINAL -->
    <section class="cta-final">
      <div class="container cta-final-inner fade-up">
        <h2>Pronto para conquistar seu crédito?</h2>
        <p>Fale com nossos especialistas e dê o primeiro passo rumo à realização do seu sonho.</p>
        <a href="https://wa.me/5511945723238?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20cr%C3%A9dito%20imobili%C3%A1rio." target="_blank" rel="noopener" class="btn btn-whatsapp btn-xl">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          Falar no WhatsApp
        </a>
      </div>
    </section>

    <AppFooter />
    <WhatsAppFloat />
  </div>
</template>

<script setup>
useHead({ title: 'A-CREDIT | Soluções Financeiras - Financiamento Imobiliário' })

const faqs = [
  { q: 'Quanto tempo leva a aprovação do crédito?', a: 'O prazo varia conforme o tipo de crédito e o banco. Em geral, o financiamento imobiliário leva de 30 a 45 dias para aprovação completa. O crédito com garantia de imóvel pode ser liberado em até 30 dias úteis após a entrega de toda a documentação.' },
  { q: 'Preciso ter nome limpo para conseguir crédito?', a: 'Na maioria dos casos, sim. Os bancos realizam análise de crédito e restrições no CPF podem dificultar a aprovação. No entanto, existem opções para diferentes perfis. Entre em contato para avaliarmos seu caso.' },
  { q: 'Posso usar o FGTS no financiamento?', a: 'Sim! O FGTS pode ser utilizado como entrada, para amortização ou para pagamento de parte das parcelas do financiamento imobiliário, desde que o imóvel atenda aos requisitos do programa.' },
  { q: 'Como funciona o crédito com garantia de imóvel?', a: 'Você oferece seu imóvel quitado como garantia e obtém crédito com taxas muito menores que empréstimos tradicionais. O imóvel fica alienado ao banco durante o período do contrato, mas você continua morando nele normalmente. É possível conseguir até 60% do valor do imóvel.' },
  { q: 'Qual o valor mínimo de crédito?', a: 'O valor mínimo varia de acordo com o banco e o tipo de crédito. Para financiamento imobiliário, geralmente a partir de R$ 50.000. Para crédito com garantia de imóvel, a partir de R$ 30.000. Consulte-nos para mais detalhes.' }
]

const activeFaq = ref(null)
const faqRefs = ref([])
const faqHeights = ref([])

function toggleFaq(i) {
  if (activeFaq.value === i) {
    activeFaq.value = null
  } else {
    activeFaq.value = i
    nextTick(() => {
      if (faqRefs.value[i]) {
        faqHeights.value[i] = faqRefs.value[i].scrollHeight
      }
    })
  }
}

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' })

  document.querySelectorAll('.fade-up').forEach((el) => {
    observer.observe(el)
  })
})
</script>
