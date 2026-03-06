/* ══════════════════════════════════════════
   DADOS — cursos agrupados por área
══════════════════════════════════════════ */
const COURSES = {
  tecnologia: [
    {
      title:'Técnico em Informática', tag:'Técnico', badge:'🔥 Alta Demanda',
      desc:'Desenvolva habilidades em programação, redes e banco de dados.',
      duration:'18 meses', level:'Técnico', modality:'Presencial', area:'tecnico',
      salary:'R$ 2.500 – R$ 5.000',
      detail:'Lógica de Programação, Redes, Banco de Dados, Sistemas Operacionais e Desenvolvimento Web.',
      mascotMsg:'TI está em todo lugar! O mercado de Informática só cresce — clique no card para ver os dados mais recentes! 💻',
      marketQuery:'demanda por técnicos em informática e programação no mercado de trabalho brasileiro 2024 2025'
    },
    {
      title:'Automação Industrial', tag:'Técnico', badge:'🏆 Destaque',
      desc:'Programe CLPs, robôs e sistemas de controle para a Indústria 4.0.',
      duration:'20 meses', level:'Técnico', modality:'Presencial', area:'tecnico',
      salary:'R$ 3.500 – R$ 7.000',
      detail:'CLP, Pneumática, Hidráulica, Robótica Industrial e SCADA.',
      mascotMsg:'Automação é o futuro! Robôs e sistemas inteligentes são cada vez mais usados nas fábricas! 🤖',
      marketQuery:'mercado de trabalho automação industrial robótica indústria 4.0 brasil vagas 2024 2025'
    },
    {
      title:'Automação Residencial', tag:'Qualificação', badge:'',
      desc:'Desenvolver e implementar sistemas e dispositivos de automação e controle de processos industriais',
      duration:'60 Horas', level:'Básico', modality:'presencial', area:'qualificacao',
      salary:'R$ 3.000 – R$ 8.000',
      detail:'HTML5, CSS3, JavaScript, React e APIs REST.',
      mascotMsg:'Dev Web tem vagas no Brasil todo! Dá pra trabalhar remoto de qualquer lugar! 🌐',
      marketQuery:'vagas desenvolvedor web frontend react javascript brasil 2024 2025 mercado tecnologia'
    },
    {
      title:'Técnico em refrigeração e climatização', tag:'Qualificação', badge:'',
      desc:'Elaborar e implementar projetos de instalação de sistemas de refrigeração e climatização.',
      duration:'1200 Horas', level:'Intermediário', modality:'EAD', area:'Qualificação',
      salary:'R$ 6.000 – R$ 15.000',
      detail:'Python, Pandas, Machine Learning, Power BI e Visualização de Dados.',
      mascotMsg:'Cientista de dados é uma das profissões mais bem pagas do Brasil! Veja os dados! 📊',
      marketQuery:'cientista de dados data science vagas salários mercado brasil 2024 2025'
    },
    {
      title:'Segurança da Informação', tag:'Técnico', badge:'',
      desc:'Proteja redes e sistemas contra ataques cibernéticos.',
      duration:'18 meses', level:'Técnico', modality:'Presencial', area:'tecnico',
      salary:'R$ 5.000 – R$ 12.000',
      detail:'Redes, Criptografia, Ethical Hacking e Análise de Vulnerabilidades.',
      mascotMsg:'Ataques hackers aumentaram muito — profissionais de segurança são urgentemente procurados! 🔒',
      marketQuery:'segurança da informação cybersegurança vagas mercado brasil 2024 2025 demanda profissionais'
    },
    {
      title:'Cloud Computing', tag:'Aperfeiçoamento', badge:'',
      desc:'AWS, Azure e Google Cloud para ambientes corporativos modernos.',
      duration:'5 meses', level:'Intermediário', modality:'EAD', area:'aperfeicoamento',
      salary:'R$ 7.000 – R$ 18.000',
      detail:'AWS, Azure, Google Cloud Platform, Docker e DevOps.',
      mascotMsg:'Cloud está em toda empresa! É uma das áreas com maior crescimento no mundo! ☁️',
      marketQuery:'cloud computing AWS Azure vagas mercado brasil 2024 2025 salários profissionais'
    },
  ],
  industria: [
    {
      title:'Mecânica Industrial', tag:'Técnico', badge:'🏆 Clássico',
      desc:'Torno mecânico, fresagem e manutenção de máquinas industriais.',
      duration:'20 meses', level:'Técnico', modality:'Presencial', area:'tecnico',
      salary:'R$ 2.800 – R$ 5.500',
      detail:'Usinagem, Ajustagem, Pneumática, Hidráulica e Manutenção Preventiva.',
      mascotMsg:'Mecânica Industrial é a base das fábricas brasileiras! Emprego sólido em todo o país! ⚙️',
      marketQuery:'técnico mecânica industrial vagas mercado brasil 2024 2025 demanda indústria'
    },
    {
      title:'Eletrotécnica', tag:'Técnico', badge:'🔥 Alta Demanda',
      desc:'Instalações elétricas industriais, painéis e sistemas de proteção.',
      duration:'18 meses', level:'Técnico', modality:'Presencial', area:'tecnico',
      salary:'R$ 3.000 – R$ 6.000',
      detail:'Circuitos Elétricos, Instalações Industriais, CLP e NR10.',
      mascotMsg:'Eletrotécnica tem emprego em qualquer indústria — desde alimentícia até petroquímica! ⚡',
      marketQuery:'técnico eletrotécnica eletricista industrial vagas mercado trabalho brasil 2024 2025'
    },
    {
      title:'Mecatrônica', tag:'Técnico', badge:'',
      desc:'Mecânica, eletrônica e programação. O tripé da Indústria 4.0.',
      duration:'24 meses', level:'Técnico', modality:'Presencial', area:'tecnico',
      salary:'R$ 4.000 – R$ 9.000',
      detail:'Robótica, Sensores, Atuadores, Microcontroladores e IoT Industrial.',
      mascotMsg:'Mecatrônica é o curso mais completo do SENAI! Une três áreas em uma! 🔧',
      marketQuery:'mecatrônica técnico indústria vagas mercado trabalho brasil automação 2024 2025'
    },
    {
      title:'Segurança do Trabalho', tag:'Técnico', badge:'',
      desc:'Fiscalize normas e previna acidentes no ambiente industrial.',
      duration:'18 meses', level:'Técnico', modality:'Presencial + EAD', area:'tecnico',
      salary:'R$ 2.500 – R$ 5.000',
      detail:'NRs, PPRA, PCMSO, Ergonomia e Gestão de Riscos.',
      mascotMsg:'Toda empresa é obrigada a ter técnico de segurança — é lei! Estabilidade garantida! 🛡️',
      marketQuery:'técnico segurança do trabalho vagas mercado brasil NR 2024 2025 demanda'
    },
  ],
  construcao: [
    {
      title:'Técnico em Edificações', tag:'Técnico', badge:'🔥 Alta Demanda',
      desc:'AutoCAD, BIM, orçamentos e supervisão de obras.',
      duration:'20 meses', level:'Técnico', modality:'Presencial', area:'tecnico',
      salary:'R$ 2.800 – R$ 5.500',
      detail:'AutoCAD, Revit, Orçamento, Projetos Estruturais e Topografia.',
      mascotMsg:'O setor de construção civil brasileiro nunca para! Muitas obras, muitas vagas! 🏗️',
      marketQuery:'técnico edificações construção civil vagas mercado brasil 2024 2025 obras infraestrutura'
    },
    {
      title:'Marcenaria', tag:'Qualificação', badge:'',
      desc:'Criação de móveis planejados com técnicas tradicionais e modernas.',
      duration:'4 meses', level:'Básico', modality:'Presencial', area:'qualificacao',
      salary:'R$ 2.000 – R$ 5.000',
      detail:'Corte, encaixe, acabamento e CNC para marcenaria.',
      mascotMsg:'Marcenaria une arte e técnica! Muitos se tornam empreendedores de sucesso! 🪵',
      marketQuery:'marceneiro marcenaria móveis planejados mercado trabalho brasil vagas 2024 2025'
    },
    {
      title:'Design de Interiores', tag:'Aperfeiçoamento', badge:'',
      desc:'Projete ambientes residenciais e comerciais com estética e funcionalidade.',
      duration:'8 meses', level:'Intermediário', modality:'Presencial + EAD', area:'aperfeicoamento',
      salary:'R$ 3.000 – R$ 8.000',
      detail:'SketchUp, AutoCAD, Teoria das Cores, Iluminação e Projetos.',
      mascotMsg:'Design de Interiores está valorizado com o boom imobiliário! Criatividade com mercado real! 🎨',
      marketQuery:'designer de interiores decoração mercado brasil vagas salários 2024 2025 setor imobiliário'
    },
    {
      title:'Instalações Elétricas Residenciais', tag:'Qualificação', badge:'',
      desc:'Execute instalações elétricas com segurança em residências.',
      duration:'3 meses', level:'Básico', modality:'Presencial', area:'qualificacao',
      salary:'R$ 2.500 – R$ 5.000',
      detail:'NR10, Diagramas Elétricos, Aterramento e Eficiência Energética.',
      mascotMsg:'Eletricista residencial sempre tem serviço! Autônomo ou contratado, a demanda é constante! 🔌',
      marketQuery:'eletricista residencial vagas mercado trabalho brasil autônomo 2024 2025'
    },
  ],
  alimentos: [
    {
      title:'Técnico em Alimentos', tag:'Técnico', badge:'🏆 Destaque',
      desc:'Controle de qualidade, processamento e boas práticas na indústria alimentícia.',
      duration:'18 meses', level:'Técnico', modality:'Presencial', area:'tecnico',
      salary:'R$ 2.500 – R$ 4.500',
      detail:'Microbiologia, HACCP, BPF, Análise Sensorial e Vigilância Sanitária.',
      mascotMsg:'Brasil é potência alimentícia! Técnicos em Alimentos são muito requisitados! 🍕',
      marketQuery:'técnico em alimentos indústria alimentícia agronegócio vagas mercado brasil 2024 2025'
    },
    {
      title:'Confeitaria e Panificação', tag:'Qualificação', badge:'',
      desc:'Bolos artísticos, pães artesanais e sobremesas com técnicas profissionais.',
      duration:'4 meses', level:'Básico', modality:'Presencial', area:'qualificacao',
      salary:'R$ 1.800 – R$ 6.000',
      detail:'Massas, Cremes, Chocolateria, Panificação Artesanal e Precificação.',
      mascotMsg:'Confeitaria artesanal explodiu no Brasil! É uma das áreas que mais cresceu nos últimos anos! 🍰',
      marketQuery:'confeitaria panificação artesanal mercado brasil crescimento empreendedorismo 2024 2025'
    },
    {
      title:'Barismo e Cafeteria', tag:'Qualificação', badge:'',
      desc:'Espresso, latte art, métodos alternativos e gestão de cafeteria.',
      duration:'2 meses', level:'Básico', modality:'Presencial', area:'qualificacao',
      salary:'R$ 2.000 – R$ 4.000',
      detail:'Espresso, V60, Chemex, AeroPress, Latte Art e Gestão.',
      mascotMsg:'O mercado de café especial está crescendo muito no Brasil! Uma arte deliciosa e rentável! ☕',
      marketQuery:'barista café especial terceira onda mercado brasil vagas crescimento 2024 2025'
    },
  ],
  saude: [
    {
      title:'Técnico em Enfermagem', tag:'Técnico', badge:'🏆 Mais Procurado',
      desc:'Assistência ao paciente, procedimentos técnicos e emergências.',
      duration:'20 meses', level:'Técnico', modality:'Presencial', area:'tecnico',
      salary:'R$ 2.200 – R$ 4.000',
      detail:'Anatomia, Farmacologia, Procedimentos, Saúde Mental e Emergência.',
      mascotMsg:'Enfermagem é a área de saúde com mais vagas no Brasil! Carreira nobre e estável! 💉',
      marketQuery:'técnico enfermagem vagas mercado saúde brasil 2024 2025 demanda hospitais'
    },
    {
      title:'Técnico em Saúde Bucal', tag:'Técnico', badge:'🔥 Alta Demanda',
      desc:'Auxilie cirurgiões-dentistas com biossegurança e instrumentação.',
      duration:'18 meses', level:'Técnico', modality:'Presencial', area:'tecnico',
      salary:'R$ 1.800 – R$ 3.500',
      detail:'Radiologia, Instrumentação, Materiais Dentários e Biossegurança.',
      mascotMsg:'Planos odontológicos expandiram muito no Brasil — técnicos em saúde bucal são muito requisitados! 🦷',
      marketQuery:'técnico saúde bucal odontologia vagas mercado brasil 2024 2025 planos odontológicos'
    },
    {
      title:'Personal Trainer', tag:'Qualificação', badge:'',
      desc:'Prescrição de exercícios, avaliação física e treinamento personalizado.',
      duration:'4 meses', level:'Básico', modality:'Presencial + EAD', area:'qualificacao',
      salary:'R$ 3.000 – R$ 10.000',
      detail:'Fisiologia do Exercício, Avaliação Postural, Musculação e Nutrição Esportiva.',
      mascotMsg:'Personal trainer tem alta demanda! O mercado de bem-estar nunca para de crescer! 🏃',
      marketQuery:'personal trainer academia wellness mercado trabalho brasil vagas 2024 2025'
    },
  ],
  gestao: [
    {
      title:'Técnico em Administração', tag:'Técnico', badge:'🔥 Alta Demanda',
      desc:'Gestão empresarial, finanças, RH e processos administrativos.',
      duration:'18 meses', level:'Técnico', modality:'Presencial + EAD', area:'tecnico',
      salary:'R$ 2.000 – R$ 4.500',
      detail:'Contabilidade, RH, Marketing, Logística e Finanças.',
      mascotMsg:'Administração tem emprego em qualquer setor — toda empresa precisa de bons gestores! 📈',
      marketQuery:'técnico administração empresas vagas mercado brasil 2024 2025 gestão'
    },
    {
      title:'Logística', tag:'Técnico', badge:'',
      desc:'Cadeia de suprimentos, armazenagem, transporte e controle de estoque.',
      duration:'18 meses', level:'Técnico', modality:'Presencial', area:'tecnico',
      salary:'R$ 2.500 – R$ 5.000',
      detail:'Supply Chain, WMS, Controle de Estoque e Comércio Exterior.',
      mascotMsg:'Com o e-commerce explodindo, logística se tornou área crítica! Muitas vagas no Brasil! 📦',
      marketQuery:'logística supply chain e-commerce vagas mercado brasil 2024 2025 crescimento'
    },
    {
      title:'Marketing Digital', tag:'Aperfeiçoamento', badge:'',
      desc:'SEO, redes sociais, Google Ads e estratégias de marketing online.',
      duration:'4 meses', level:'Básico', modality:'EAD', area:'aperfeicoamento',
      salary:'R$ 2.800 – R$ 7.000',
      detail:'SEO, Google Ads, Social Media, Analytics e Inbound Marketing.',
      mascotMsg:'Marketing Digital é habilidade que toda empresa precisa — e o mercado está enorme! 🎯',
      marketQuery:'marketing digital redes sociais vagas mercado brasil 2024 2025 profissionais demanda'
    },
    {
      title:'Finanças e Contabilidade', tag:'Qualificação', badge:'',
      desc:'Fluxo de caixa, DRE, análise de balanços e planejamento financeiro.',
      duration:'5 meses', level:'Básico', modality:'EAD', area:'qualificacao',
      salary:'R$ 2.200 – R$ 5.000',
      detail:'Contabilidade Básica, Controle de Caixa, Excel Financeiro e DRE.',
      mascotMsg:'Quem sabe de finanças é indispensável em qualquer empresa! Área sólida e estável! 💰',
      marketQuery:'assistente financeiro contabilidade vagas mercado brasil 2024 2025'
    },
  ],
  moda: [
    {
      title:'Técnico em Vestuário', tag:'Técnico', badge:'🏆 Destaque',
      desc:'Modelagem, costura industrial e gestão de produção têxtil.',
      duration:'18 meses', level:'Técnico', modality:'Presencial', area:'tecnico',
      salary:'R$ 2.000 – R$ 4.500',
      detail:'Modelagem, Costura Industrial, Pilotagem e Gestão de Produção.',
      mascotMsg:'O setor têxtil brasileiro é um dos maiores do mundo! Muito mercado para técnicos! ✂️',
      marketQuery:'técnico vestuário têxtil moda indústria vagas mercado brasil 2024 2025'
    },
    {
      title:'Design de Moda', tag:'Aperfeiçoamento', badge:'',
      desc:'Criação de coleções, pesquisa de tendências e identidade de marca.',
      duration:'8 meses', level:'Intermediário', modality:'Presencial', area:'aperfeicoamento',
      salary:'R$ 3.000 – R$ 8.000',
      detail:'Desenho de Moda, Illustrator, Tendências, Coleções e Branding.',
      mascotMsg:'Design de Moda é criatividade com mercado real! Muitos criam suas próprias marcas! 👜',
      marketQuery:'designer de moda mercado trabalho brasil vagas tendências 2024 2025'
    },
    {
      title:'Costura Criativa', tag:'Qualificação', badge:'',
      desc:'Costura do básico ao avançado, customizações e peças exclusivas.',
      duration:'3 meses', level:'Básico', modality:'Presencial', area:'qualificacao',
      salary:'R$ 1.500 – R$ 5.000',
      detail:'Costura Manual, Máquina, Overloque e Customização Têxtil.',
      mascotMsg:'Costura criativa nunca sai de moda! Muitos viram empreendedores de sucesso com ela! 🧵',
      marketQuery:'costura criativa customização roupas mercado empreendedorismo brasil 2024 2025'
    },
  ],
};

/* Mensagens do mascote por área */
const TAB_MESSAGES = {
  tecnologia: 'Tecnologia é a área que mais cresce! Salários altos e vagas em abundância. Escolha um curso! 💻',
  industria:  'Indústria é o coração do SENAI! Você aprende na prática nas melhores fábricas. Explore! ⚙️',
  construcao: 'Construção Civil em pleno crescimento! Muitas obras, muitas oportunidades. Veja os cursos! 🏗️',
  alimentos:  'Alimentos é uma das maiores indústrias do Brasil! Muito mercado por aqui. Explore! 🍕',
  saude:      'Saúde é carreira nobre e estável! Sempre haverá necessidade de profissionais capacitados! 💊',
  gestao:     'Gestão está em todo lugar! Todo negócio precisa de quem sabe administrar! 📊',
  moda:       'Moda une arte e mercado! O Brasil tem uma das maiores indústrias têxteis do mundo! 👗',
};

/* Lista plana de todos os cursos para a busca */
const ALL_COURSES = Object.values(COURSES).flat();

/* Filtro ativo */
let currentFilter = 'todos';
/* Índice do item destacado no dropdown */
let dropdownHighlight = -1;
/* Itens visíveis no dropdown */
let dropdownItems = [];

/* ══════════════════════════════════════════
   INICIALIZAÇÃO
══════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  buildAllGrids();        /* Constrói todos os grids de cursos */
  animateCounter();       /* Anima o contador de cursos */
  spawnParticles();       /* Cria partículas decorativas no hero */
  populateDropdown('');   /* Preenche dropdown com todos os cursos */
  initCarousel();         /* Inicializa o carrossel de fotos */
});

/* ══════════════════════════════════════════
   GRIDS — constrói cards em cada aba
══════════════════════════════════════════ */
function buildAllGrids() {
  Object.entries(COURSES).forEach(([area, list]) => {
    document.getElementById('grid-' + area).innerHTML =
      list.map(buildCardHTML).join('');
  });
}

function buildCardHTML(c) {
  const bg = randomBg();
  const safe = encodeCardData(c);
  return `
    <div class="course-card" onclick="openModal(${safe})">
      <div class="card-thumb" style="background:${bg}">
        <span>${c.icon}</span>
        ${c.badge ? `<div class="card-badge">${c.badge}</div>` : ''}
      </div>
      <div class="card-body">
        <div class="card-tag">${c.tag} · ${c.modality}</div>
        <div class="card-title">${c.title}</div>
        <div class="card-desc">${c.desc}</div>
        <div class="card-meta">
          <span>⏱ ${c.duration}</span>
          <span>📍 ${c.modality}</span>
        </div>
      </div>
      <div class="card-footer">
        <span class="card-level">${c.level}</span>
        <button class="card-cta">Ver detalhes</button>
      </div>
    </div>`;
}

function randomBg() {
  const bgs = [
    'linear-gradient(135deg,#001f5c,#0035a0)',
    'linear-gradient(135deg,#002070,#003dcc)',
    'linear-gradient(135deg,#001840,#00296b)',
    'linear-gradient(135deg,#0d2b5e,#1a4db5)',
    'linear-gradient(135deg,#001530,#003087)',
  ];
  return bgs[Math.floor(Math.random() * bgs.length)];
}

function encodeCardData(c) {
  return JSON.stringify(c).replace(/"/g, '&quot;');
}

/* ══════════════════════════════════════════
   ABAS
══════════════════════════════════════════ */
function switchTab(btn) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  const tab = btn.dataset.tab;
  document.getElementById('tab-' + tab).classList.add('active');
  updateMascot(TAB_MESSAGES[tab]);
}

/* ══════════════════════════════════════════
   FILTROS
══════════════════════════════════════════ */
function toggleFilter(btn, filter) {
  document.querySelectorAll('.filter-chip').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  currentFilter = filter;
  filterCards();
}

function filterCards() {
  document.querySelectorAll('.course-card').forEach(card => {
    const tag = card.querySelector('.card-tag').textContent.toLowerCase();
    const show = currentFilter === 'todos' || tag.includes(currentFilter);
    card.style.display = show ? '' : 'none';
  });
}

/* ══════════════════════════════════════════
   BUSCA INSTANTÂNEA — dropdown
══════════════════════════════════════════ */

/* Mostra o dropdown ao focar no campo */
function showSearchDropdown() {
  const dropdown = document.getElementById('search-dropdown');
  const overlay  = document.getElementById('search-overlay');
  dropdown.classList.add('open');
  overlay.classList.add('active');
  populateDropdown(document.getElementById('header-search').value);
}

/* Esconde o dropdown */
function hideSearchDropdown() {
  document.getElementById('search-dropdown').classList.remove('open');
  document.getElementById('search-overlay').classList.remove('active');
  dropdownHighlight = -1;
}

/* Filtra o dropdown conforme digita */
function handleSearchInput(value) {
  populateDropdown(value);
  dropdownHighlight = -1; /* Reseta highlight ao digitar */
}

/* Navega no dropdown com teclado */
function handleSearchKey(e) {
  if (!document.getElementById('search-dropdown').classList.contains('open')) return;

  if (e.key === 'ArrowDown') {
    e.preventDefault();
    dropdownHighlight = Math.min(dropdownHighlight + 1, dropdownItems.length - 1);
    updateHighlight();
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    dropdownHighlight = Math.max(dropdownHighlight - 1, 0);
    updateHighlight();
  } else if (e.key === 'Enter' && dropdownHighlight >= 0) {
    e.preventDefault();
    const course = dropdownItems[dropdownHighlight];
    if (course) { hideSearchDropdown(); openModal(course); }
  } else if (e.key === 'Escape') {
    hideSearchDropdown();
  }
}

/* Atualiza o item visualmente destacado */
function updateHighlight() {
  document.querySelectorAll('.dropdown-item').forEach((el, i) => {
    el.classList.toggle('highlighted', i === dropdownHighlight);
  });
}

/* Renderiza a lista de resultados no dropdown */
function populateDropdown(query) {
  const list = document.getElementById('dropdown-list');
  const label = document.querySelector('.dropdown-label');
  const q = query.trim().toLowerCase();

  /* Filtra pelos cursos que batem com a busca */
  dropdownItems = q
    ? ALL_COURSES.filter(c =>
        c.title.toLowerCase().includes(q) ||
        c.desc.toLowerCase().includes(q) ||
        c.tag.toLowerCase().includes(q) ||
        c.modality.toLowerCase().includes(q)
      )
    : ALL_COURSES; /* Sem filtro: mostra todos */

  label.textContent = q
    ? `${dropdownItems.length} resultado${dropdownItems.length !== 1 ? 's' : ''} para "${query}"`
    : 'Todos os cursos disponíveis';

  if (dropdownItems.length === 0) {
    list.innerHTML = `<div class="dropdown-empty">Nenhum curso encontrado para "${query}"</div>`;
    return;
  }

  list.innerHTML = dropdownItems.map((c, i) => `
    <div class="dropdown-item" onclick="selectFromDropdown(${i})">
      <span class="di-icon">${c.icon}</span>
      <div class="di-info">
        <div class="di-title">${c.title}</div>
        <div class="di-meta">⏱ ${c.duration} · 📍 ${c.modality}</div>
      </div>
      <span class="di-tag">${c.tag}</span>
    </div>
  `).join('');
}

/* Seleciona curso pelo índice no dropdown */
function selectFromDropdown(index) {
  const course = dropdownItems[index];
  if (!course) return;
  hideSearchDropdown();
  document.getElementById('header-search').value = '';
  openModal(course);
}

/* ══════════════════════════════════════════
   MASCOTE FLUTUANTE
══════════════════════════════════════════ */
let bubbleVisible = true;

function toggleMascot() {
  bubbleVisible = !bubbleVisible;
  document.getElementById('float-bubble').classList.toggle('hidden', !bubbleVisible);
}

function updateMascot(msg) {
  const bubble = document.getElementById('float-bubble');
  bubble.classList.remove('hidden');
  bubbleVisible = true;
  bubble.style.opacity = '0';
  setTimeout(() => {
    bubble.innerHTML = msg;
    bubble.style.opacity = '1';
  }, 150);
}

/* ══════════════════════════════════════════
   MODAL — abre com detalhes e busca dados de mercado
══════════════════════════════════════════ */
function openModal(course) {
  /* Preenche cabeçalho */
  document.getElementById('modal-icon').textContent  = course.icon;
  document.getElementById('modal-title').textContent = course.title;
  document.getElementById('modal-tag').textContent   = `${course.tag} · ${course.modality}`;
  document.getElementById('modal-desc').textContent  = course.desc + ' ' + course.detail;

  /* Preenche grade de detalhes */
  document.getElementById('modal-grid').innerHTML = `
    <div class="detail-item">
      <div class="detail-label">Duração</div>
      <div class="detail-val">⏱ ${course.duration}</div>
    </div>
    <div class="detail-item">
      <div class="detail-label">Nível</div>
      <div class="detail-val">🎓 ${course.level}</div>
    </div>
    <div class="detail-item">
      <div class="detail-label">Modalidade</div>
      <div class="detail-val">📍 ${course.modality}</div>
    </div>
    <div class="detail-item">
      <div class="detail-label">Faixa Salarial Estimada</div>
      <div class="detail-val">💰 ${course.salary}</div>
    </div>
  `;

  /* Abre o modal */
  document.getElementById('modal-overlay').classList.add('open');

  /* Atualiza mascote com fala do curso */
  updateMascot('Boa escolha! ' + course.mascotMsg);

  /* Inicia a busca de dados em tempo real */
  fetchMarketData(course);
}

function closeModal(e) {
  if (e.target === document.getElementById('modal-overlay')) {
    document.getElementById('modal-overlay').classList.remove('open');
  }
}

/* ══════════════════════════════════════════
   DADOS DE MERCADO — busca via Anthropic API com web search
══════════════════════════════════════════ */
async function fetchMarketData(course) {
  const loading = document.getElementById('market-loading');
  const result  = document.getElementById('market-result');

  /* Exibe estado de carregamento */
  loading.style.display = 'flex';
  result.style.display  = 'none';
  result.innerHTML      = '';

  const prompt = `Você é um analista de mercado de trabalho especializado em educação profissional.

Para o curso: "${course.title}" (${course.tag}, modalidade: ${course.modality})
Oferecido pelo SENAI Stenio Lopes, em Campina Grande – PB.

Pesquise e forneça um relatório CONCISO e ATUALIZADO sobre:

1. **Situação atual do mercado** — demanda por esses profissionais hoje
2. **Tendências** — crescimento ou retração da área em 2024/2025
3. **Principais empregadores** — tipos de empresa que contratam
4. **Salários** — faixa salarial atual (referência: ${course.salary})
5. **Perspectivas** — o que esperar nos próximos 2–3 anos

Use dados reais e seja direto. Formate com títulos em negrito.
Marque tendências positivas com 🟢, negativas com 🔴, e neutras com 🟡.
Máximo 250 palavras.`;

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        tools: [{ type: 'web_search_20250305', name: 'web_search' }], /* Busca web em tempo real */
        messages: [{ role: 'user', content: prompt }],
      })
    });

    if (!response.ok) throw new Error('Falha na API');

    const data = await response.json();

    /* Extrai o texto da resposta (pode ter blocos de tool_use e text) */
    const textBlocks = data.content.filter(b => b.type === 'text');
    const text = textBlocks.map(b => b.text).join('\n');

    if (!text) throw new Error('Resposta vazia');

    /* Formata o texto para HTML */
    const html = formatMarketText(text);

    /* Timestamp da consulta */
    const now = new Date().toLocaleString('pt-BR', {
      day:'2-digit', month:'2-digit', year:'numeric',
      hour:'2-digit', minute:'2-digit'
    });

    loading.style.display = 'none';
    result.style.display  = 'block';
    result.innerHTML      = html + `<div class="market-timestamp">Consultado em ${now} via busca em tempo real</div>`;

  } catch (err) {
    /* Fallback caso a API falhe */
    loading.style.display = 'none';
    result.style.display  = 'block';
    result.innerHTML = `
      <p style="color:var(--blue-tint)">
        ⚠️ Não foi possível carregar dados ao vivo neste momento.<br>
        <strong style="color:var(--white)">Faixa salarial estimada:</strong> ${course.salary}
      </p>`;
  }
}

/* Converte o texto markdown-like da API em HTML estilizado */
function formatMarketText(text) {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')        /* **negrito** → <strong> */
    .replace(/^### (.+)$/gm, '<h4>$1</h4>')                  /* ### título → <h4> */
    .replace(/^## (.+)$/gm, '<h4>$1</h4>')                   /* ## título → <h4> */
    .replace(/^# (.+)$/gm, '<h4>$1</h4>')                    /* # título → <h4> */
    .replace(/^[\-\*] (.+)$/gm, '<li>$1</li>')               /* - item → <li> */
    .replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>')              /* Envolve listas em <ul> */
    .replace(/🟢 (.+)/g, '<span class="trend-up">🟢 $1</span>') /* Verde para positivo */
    .replace(/🔴 (.+)/g, '<span class="trend-down">🔴 $1</span>') /* Vermelho para negativo */
    .replace(/🟡 (.+)/g, '<span class="trend-mid">🟡 $1</span>') /* Amarelo para neutro */
    .replace(/\n\n/g, '</p><p>')                              /* Parágrafos */
    .replace(/\n/g, '<br>')
    .replace(/^(.+)/, '<p>$1')                               /* Abre primeiro parágrafo */
    .concat('</p>');                                         /* Fecha último parágrafo */
}

/* ══════════════════════════════════════════
   CARROSSEL — fotos da unidade
══════════════════════════════════════════ */
let carouselIndex   = 0;   /* Slide atual */
let carouselTimer   = null; /* Timer do autoplay */
let carouselTotal   = 0;   /* Total de slides */

function initCarousel() {
  const slides = document.querySelectorAll('.carousel-slide');
  carouselTotal = slides.length;
  if (carouselTotal === 0) return;

  /* Cria os dots indicadores */
  const dotsWrap = document.getElementById('carousel-dots');
  if (dotsWrap) {
    dotsWrap.innerHTML = Array.from({ length: carouselTotal }, (_, i) =>
      `<div class="carousel-dot${i === 0 ? ' active' : ''}" onclick="goToSlide(${i})"></div>`
    ).join('');
  }

  /* Inicia o autoplay a cada 4 segundos */
  startCarouselTimer();

  /* Pausa o autoplay ao passar o mouse sobre o carrossel */
  const frame = document.querySelector('.carousel-frame');
  if (frame) {
    frame.addEventListener('mouseenter', () => clearInterval(carouselTimer));
    frame.addEventListener('mouseleave', startCarouselTimer);
  }
}

function startCarouselTimer() {
  clearInterval(carouselTimer);
  carouselTimer = setInterval(() => carouselStep(1), 4000); /* Avança a cada 4s */
}

function carouselStep(dir) {
  goToSlide((carouselIndex + dir + carouselTotal) % carouselTotal);
}

function goToSlide(index) {
  carouselIndex = index;

  /* Move o track horizontalmente */
  const track = document.getElementById('carousel-track');
  if (track) track.style.transform = `translateX(-${carouselIndex * 100}%)`;

  /* Atualiza os dots */
  document.querySelectorAll('.carousel-dot').forEach((dot, i) =>
    dot.classList.toggle('active', i === carouselIndex)
  );
}

/* ══════════════════════════════════════════
   ANIMAÇÕES EXTRAS
══════════════════════════════════════════ */

/* Anima o contador de cursos no hero */
function animateCounter() {
  const el = document.getElementById('counter-cursos');
  const target = ALL_COURSES.length;
  let current = 0;
  const step = Math.ceil(target / 40); /* Incremento por frame */
  const interval = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = '+' + current;
    if (current >= target) clearInterval(interval);
  }, 40);
}

/* Cria partículas flutuantes no hero */
function spawnParticles() {
  const container = document.getElementById('hero-particles');
  for (let i = 0; i < 12; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 60 + 20; /* Tamanho aleatório */
    p.style.width  = size + 'px';
    p.style.height = size + 'px';
    p.style.left   = Math.random() * 100 + '%';
    p.style.animationDuration  = (Math.random() * 12 + 8) + 's'; /* Velocidade aleatória */
    p.style.animationDelay     = (Math.random() * 8) + 's';      /* Delay aleatório */
    p.style.opacity = Math.random() * 0.4;
    container.appendChild(p);
  }
}