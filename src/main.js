(() => {
  const STORAGE_KEY = 'seek-anime-list-v1';
  const IMAGE_BASE = 'https://cdn.myanimelist.net/images/anime/';
  const PAGE_SIZE = 24;
  const STATUS = {
    planned: 'planned', watching: 'watching', completed: 'completed', paused: 'paused', dropped: 'dropped'
  };
  const TEXT = {
    pt: {
      home:'Início', menu:'MENU', sidebarNote:'Seu próximo anime favorito pode estar a um clique.', seekCatalog:'CATÁLOGO SEEK', myProfile:'Meu perfil', loginProfile:'Entrar', thisDevice:'Lista neste dispositivo', discover:'Descobrir', myList:'Minha lista', menuMyList:'Minha lista', menuDiscover:'Descobrir animes', menuLogout:'Sair da conta', gridView:'Modo grade', listView:'Modo lista', viewMode:'Modo de visualização', pageDiscover:'Descubra seu próximo anime', pageList:'Sua lista de animes', subDiscover:'Explore histórias, encontre novos favoritos e organize sua jornada.', subList:'Acompanhe o que está assistindo e escolha o que vem depois.', eyebrowDiscover:'SEU PRÓXIMO UNIVERSO', eyebrowList:'SUA JORNADA ATÉ AQUI', sectionDiscover:'Animes para descobrir', sectionList:'Minha coleção', sectionEyebrowDiscover:'ESCOLHA SUA PRÓXIMA HISTÓRIA', sectionEyebrowList:'TUDO O QUE VOCÊ QUER ACOMPANHAR', catalogTitles:'títulos no catálogo', featured:'DESTAQUE DO CATÁLOGO', seeAnime:'Ver anime', addToList:'Adicionar à lista', inList:'na minha lista', watchingNow:'assistindo agora', completedAnime:'animes concluídos', episodesSeen:'episódios assistidos', filterType:'Tipo', filterAll:'Todos', typeSeries:'Série', typeMovie:'Filme', typeSpecial:'Especial', filterGenre:'Gênero', genreAll:'Todos os gêneros', filterYear:'Ano', yearAny:'Qualquer ano', sortLabel:'Ordenar:', sortScore:'Mais bem avaliados', sortTitle:'Título A–Z', sortNewest:'Mais recentes', sortOldest:'Mais antigos', tabAll:'Todos', planned:'Quero assistir', watching:'Assistindo', completed:'Concluídos', paused:'Pausados', dropped:'Abandonados', clearFilters:'Limpar filtros', footer:'Feito para organizar suas próximas maratonas', searchDiscover:'Buscar anime, gênero...', searchList:'Buscar na minha lista...', resultAnime:'animes', resultTitles:'títulos', emptyListTitle:'Sua lista começa aqui', emptyListText:'Explore o catálogo e adicione os animes que quer acompanhar.', emptySearchTitle:'Nenhum anime encontrado', emptySearchText:'Tente outra busca ou ajuste os filtros.', explore:'Explorar catálogo', loading:'Preparando o catálogo...', loadError:'O catálogo não carregou', loadErrorText:'Abra esta pasta por um servidor local para que o navegador consiga ler o arquivo anime.json.', resultFilter:'resultados para seus filtros', episodes:'episódios', rating:'no catálogo', myProgress:'Seu progresso', finished:'Você concluiu este anime!', synopsis:'Sinopse', genres:'Gêneros', themes:'Temas', production:'Produção', noInfo:'Não informado', saveError:'Não foi possível salvar a lista neste navegador.', featureFallback:'Uma história esperando para ser descoberta.', noRating:'Classificação não informada', watchTrailer:'Assistir trailer', moreInfo:'Mais informações', addStatus:'＋ Adicionar à lista...', markEpisode:'＋ Marcar episódio assistido', done:'Concluído', percentDone:'Concluído', added:'Adicionado: ', removed:'Anime removido da sua lista', keychainLogin:'Entrar com Keychain', hiveAccount:'CONTA HIVE', loginTitle:'Entrar com Hive Keychain', loginText:'Informe seu nome de usuário Hive. O Keychain pedirá para assinar uma mensagem de login.', usernameLabel:'Usuário Hive', loginTrust:'Sua chave privada permanece no Hive Keychain. Nenhuma transação será publicada.', cancel:'Cancelar', signIn:'Continuar com Keychain', invalidUsername:'Digite um nome de usuário Hive válido.',  connect:'Conectando...', keychainMissing:'Hive Keychain não foi encontrado. Instale ou ative a extensão para entrar.', keychainError:'Não foi possível conectar ao Hive Keychain.', signatureFailed:'A assinatura não foi aprovada.', signaturePrompt:'Entrar no Seek', signedAs:'Conectado', logout:'Sair', keychainProfile:'Conectado via Hive Keychain', signedOut:'Sessão encerrada', demo:'Modo demo', demoName:'Conta de demonstração', demoActive:'Demo ativa', demoStarted:'Modo demo ativado. Sua lista fica salva neste navegador.', demoExited:'Modo demo encerrado.', themeToLight:'Ativar modo claro', themeToDark:'Ativar modo escuro', language:'Idioma', typeTV:'TV', typeMovieLabel:'Filme', typeOVA:'OVA', typeONA:'ONA', typeSpecialLabel:'Especial', coverOf:'Capa de', noDuration:'Duração não informada', of:'de', decreaseEpisode:'Diminuir episódio', markEpisodeShort:'Marcar episódio assistido', noSynopsis:'Sinopse não disponível.', 
    },
      en: {
      home:'Home', menu:'MENU', sidebarNote:'Your next favorite anime could be one click away.', seekCatalog:'SEEK CATALOG', myProfile:'My profile', loginProfile:'Sign in', thisDevice:'List saved on this device', discover:'Discover', myList:'My list', menuMyList:'My list', menuDiscover:'Discover anime', menuLogout:'Sign out', gridView:'Grid view', listView:'List view', viewMode:'View mode', pageDiscover:'Discover your next anime', pageList:'Your anime list', subDiscover:'Explore stories, find new favorites, and organize your journey.', subList:'Track what you are watching and choose what comes next.', eyebrowDiscover:'YOUR NEXT UNIVERSE', eyebrowList:'YOUR JOURNEY SO FAR', sectionDiscover:'Anime to discover', sectionList:'My collection', sectionEyebrowDiscover:'CHOOSE YOUR NEXT STORY', sectionEyebrowList:'EVERYTHING YOU WANT TO TRACK', catalogTitles:'titles in catalog', featured:'CATALOG SPOTLIGHT', seeAnime:'View anime', addToList:'Add to my list', inList:'in my list', watchingNow:'watching now', completedAnime:'anime completed', episodesSeen:'episodes watched', filterType:'Type', filterAll:'All', typeSeries:'Series', typeMovie:'Movie', typeSpecial:'Special', filterGenre:'Genre', genreAll:'All genres', filterYear:'Year', yearAny:'Any year', sortLabel:'Sort:', sortScore:'Top rated', sortTitle:'Title A–Z', sortNewest:'Newest', sortOldest:'Oldest', tabAll:'All', planned:'Plan to watch', watching:'Watching', completed:'Completed', paused:'Paused', dropped:'Dropped', clearFilters:'Clear filters', footer:'Made to organize your next anime marathon', searchDiscover:'Search anime, genre...', searchList:'Search my list...', resultAnime:'anime', resultTitles:'titles', emptyListTitle:'Your list starts here', emptyListText:'Explore the catalog and add anime you want to track.', emptySearchTitle:'No anime found', emptySearchText:'Try another search or adjust your filters.', explore:'Explore catalog', loading:'Loading the catalog...', loadError:'The catalog did not load', loadErrorText:'Open this folder through a local server so the browser can read anime.json.', resultFilter:'results match your filters', episodes:'episodes', rating:'on catalog', myProgress:'Your progress', finished:'You completed this anime!', synopsis:'Synopsis', genres:'Genres', themes:'Themes', production:'Production', noInfo:'Not provided', saveError:'Could not save your list in this browser.', featureFallback:'A story waiting to be discovered.', noRating:'Rating not provided', watchTrailer:'Watch trailer', moreInfo:'More information', addStatus:'＋ Add to my list...', markEpisode:'＋ Mark episode watched', done:'Completed', percentDone:'Completed', added:'Added: ', removed:'Anime removed from your list', keychainLogin:'Connect Keychain', hiveAccount:'HIVE ACCOUNT', loginTitle:'Sign in with Hive Keychain', loginText:'Enter your Hive username. Keychain will ask you to sign a login message.', usernameLabel:'Hive username', loginTrust:'Your private key stays in Hive Keychain. No transaction will be broadcast.', cancel:'Cancel', signIn:'Continue with Keychain', invalidUsername:'Enter a valid Hive username.',  connect:'Connecting...', keychainMissing:'Hive Keychain was not found. Install or enable the extension to sign in.', keychainError:'Could not connect to Hive Keychain.', signatureFailed:'The signature was not approved.', signaturePrompt:'Sign in to Seek', signedAs:'Connected', logout:'Sign out',   demo:'Demo mode', demoName:'Demo account', demoActive:'Demo active', demoStarted:'Demo mode enabled. Your list is saved in this browser.', demoExited:'Demo mode ended.', keychainProfile:'Connected with Hive Keychain', signedOut:'Signed out', themeToLight:'Switch to light mode', themeToDark:'Switch to dark mode', language:'Language', typeTV:'TV', typeMovieLabel:'Movie', typeOVA:'OVA', typeONA:'ONA', typeSpecialLabel:'Special', coverOf:'Cover of', noDuration:'Duration not provided', of:'of', decreaseEpisode:'Decrease episode', markEpisodeShort:'Mark episode watched', noSynopsis:'Synopsis not available.'
    },
    es: {
      home:'Inicio', menu:'MENÚ', sidebarNote:'Tu próximo anime favorito puede estar a un clic.', seekCatalog:'CATÁLOGO SEEK', myProfile:'Mi perfil', loginProfile:'Iniciar sesión', thisDevice:'Lista en este dispositivo', discover:'Descubrir', myList:'Mi lista', menuMyList:'Mi lista', menuDiscover:'Descubrir animes', menuLogout:'Cerrar sesión', gridView:'Vista de cuadrícula', listView:'Vista de lista', viewMode:'Modo de visualización', pageDiscover:'Descubre tu próximo anime', pageList:'Tu lista de anime', subDiscover:'Explora historias, encuentra favoritos y organiza tu recorrido.', subList:'Sigue lo que estás viendo y elige qué ver después.', eyebrowDiscover:'TU PRÓXIMO UNIVERSO', eyebrowList:'TU RECORRIDO HASTA AHORA', sectionDiscover:'Animes por descubrir', sectionList:'Mi colección', sectionEyebrowDiscover:'ELIGE TU PRÓXIMA HISTORIA', sectionEyebrowList:'TODO LO QUE QUIERES SEGUIR', catalogTitles:'títulos en el catálogo', featured:'DESTACADO DEL CATÁLOGO', seeAnime:'Ver anime', addToList:'Añadir a mi lista', inList:'en mi lista', watchingNow:'viendo ahora', completedAnime:'animes completados', episodesSeen:'episodios vistos', filterType:'Tipo', filterAll:'Todos', typeSeries:'Serie', typeMovie:'Película', typeSpecial:'Especial', filterGenre:'Género', genreAll:'Todos los géneros', filterYear:'Año', yearAny:'Cualquier año', sortLabel:'Ordenar:', sortScore:'Mejor valorados', sortTitle:'Título A–Z', sortNewest:'Más recientes', sortOldest:'Más antiguos', tabAll:'Todos', planned:'Quiero ver', watching:'Viendo', completed:'Completados', paused:'En pausa', dropped:'Abandonados', clearFilters:'Borrar filtros', footer:'Hecho para organizar tus próximas maratones', searchDiscover:'Buscar anime, género...', searchList:'Buscar en mi lista...', resultAnime:'animes', resultTitles:'títulos', emptyListTitle:'Tu lista empieza aquí', emptyListText:'Explora el catálogo y añade los animes que quieras seguir.', emptySearchTitle:'No se encontraron animes', emptySearchText:'Prueba otra búsqueda o ajusta los filtros.', explore:'Explorar catálogo', loading:'Cargando el catálogo...', loadError:'No se pudo cargar el catálogo', loadErrorText:'Abre esta carpeta desde un servidor local para que el navegador pueda leer anime.json.', resultFilter:'resultados con estos filtros', episodes:'episodios', rating:'en el catálogo', myProgress:'Tu progreso', finished:'¡Has completado este anime!', synopsis:'Sinopsis', genres:'Géneros', themes:'Temas', production:'Producción', noInfo:'Sin información', saveError:'No se pudo guardar la lista en este navegador.', featureFallback:'Una historia esperando ser descubierta.', noRating:'Clasificación no disponible', watchTrailer:'Ver tráiler', moreInfo:'Más información', addStatus:'＋ Añadir a mi lista...', markEpisode:'＋ Marcar episodio visto', done:'Completado', percentDone:'Completado', added:'Añadido: ', removed:'Anime eliminado de tu lista', keychainLogin:'Conectar Keychain', hiveAccount:'CUENTA HIVE', loginTitle:'Entrar con Hive Keychain', loginText:'Escribe tu usuario de Hive. Keychain te pedirá firmar un mensaje de inicio de sesión.', usernameLabel:'Usuario de Hive', loginTrust:'Tu clave privada permanece en Hive Keychain. No se publicará ninguna transacción.', cancel:'Cancelar', signIn:'Continuar con Keychain', invalidUsername:'Escribe un usuario Hive válido.',  connect:'Conectando...', keychainMissing:'No se encontró Hive Keychain. Instala o activa la extensión para entrar.', keychainError:'No se pudo conectar con Hive Keychain.', signatureFailed:'No se aprobó la firma.', signaturePrompt:'Iniciar sesión en Seek', signedAs:'Conectado', logout:'Cerrar sesión', demo:'Modo demo', demoName:'Cuenta de demostración', demoActive:'Demo activa', demoStarted:'Modo demo activado. Tu lista se guarda en este navegador.', demoExited:'Modo demo finalizado.', keychainProfile:'Conectado con Hive Keychain', signedOut:'Sesión cerrada', themeToLight:'Activar modo claro', themeToDark:'Activar modo oscuro', language:'Idioma', typeTV:'TV', typeMovieLabel:'Película', typeOVA:'OVA', typeONA:'ONA', typeSpecialLabel:'Especial',   coverOf:'Portada de', noDuration:'Duración no disponible', of:'de', decreaseEpisode:'Restar episodio', markEpisodeShort:'Marcar episodio visto', noSynopsis:'Sinopsis no disponible.', 
    }
  };

  const app = {
    animes: [], byId: new Map(), list: {}, view: 'discover', listFilter: 'all',
    results: [], page: 1, toastTimer: null, currentAnime: null, language: readLanguage(), account: readAccount(), feature: null, displayMode: readDisplayMode(), theme: readTheme()
  };
  app.list = readList(app.account);

  const $ = (selector) => document.querySelector(selector);
  const escapeHTML = (value) => String(value ?? '').replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
  const imageFor = (anime) => anime?.img ? `${IMAGE_BASE}${String(anime.img).split('/').map(encodeURIComponent).join('/')}.jpg` : '';
  const safeNumber = (value, fallback = 0) => Number.isFinite(Number(value)) ? Number(value) : fallback;
  const listEntry = (anime) => app.list[String(anime.id)] || null;
  const t = (key) => TEXT[app.language]?.[key] || TEXT.pt[key] || key;
  const statusLabel = (status) => t(STATUS[status] || status);
  const localeCode = () => ({ pt: 'pt-BR', en: 'en-US', es: 'es-ES' })[app.language] || 'pt-BR';

  function readDisplayMode() { try { return localStorage.getItem('seek-display-mode') === 'list' ? 'list' : 'grid'; } catch { return 'grid'; } }
  function readLanguage() { try { const value = localStorage.getItem('seek-language'); return ['pt','en','es'].includes(value) ? value : 'pt'; } catch { return 'pt'; } }
  function readTheme() { try { return localStorage.getItem('seek-theme') === 'dark' ? 'dark' : 'light'; } catch { return 'light'; } }
  function readAccount() { try { const value = JSON.parse(localStorage.getItem('seek-account') || 'null'); return value && typeof value.username === 'string' ? value : null; } catch { return null; } }

  function listStorageKey(account) {
    const identity = account?.mode === 'demo' ? 'demo' : account?.username ? `hive:${account.username.toLowerCase()}` : 'guest';
    return `${STORAGE_KEY}:${identity}`;
  }

  function readList(account = null) {
    try {
      const key = listStorageKey(account);
      let raw = localStorage.getItem(key);
      if (raw == null && !account) {
        raw = localStorage.getItem(STORAGE_KEY);
        if (raw != null) localStorage.setItem(key, raw);
      }
      const parsed = JSON.parse(raw || '{}');
      return parsed && typeof parsed === 'object' ? parsed : {};
    } catch { return {}; }
  }

  function saveList() {
    try { localStorage.setItem(listStorageKey(app.account), JSON.stringify(app.list)); }
    catch { showToast(t('saveError')); }
    updateStats();
    applyFilters();
  }

  function updateStatus(anime, status) {
    const id = String(anime.id);
    if (!status) delete app.list[id];
    else {
      const previous = app.list[id] || {};
      app.list[id] = { status, progress: Math.min(Math.max(0, safeNumber(previous.progress)), Math.max(1, safeNumber(anime.ep, 1))), updatedAt: Date.now() };
      if (status === 'completed' && anime.ep) app.list[id].progress = safeNumber(anime.ep, 1);
      if (status === 'watching' && app.list[id].progress === 0) app.list[id].progress = anime.tp === 'Movie' ? 0 : 1;
    }
    saveList();
    if (app.currentAnime?.id === anime.id) renderModal(anime);
    showToast(status ? `${t('added')}${statusLabel(status)}` : t('removed'));
  }

  function setProgress(anime, amount) {
    const entry = listEntry(anime);
    if (!entry) return;
    const total = Math.max(1, safeNumber(anime.ep, 1));
    entry.progress = Math.min(total, Math.max(0, safeNumber(entry.progress) + amount));
    if (anime.tp === 'Movie' && amount > 0) entry.progress = total;
    if (entry.progress >= total) entry.status = 'completed';
    else if (entry.status === 'completed') entry.status = 'watching';
    saveList();
    if (app.currentAnime?.id === anime.id) renderModal(anime);
  }

  async function init() {
    applyTheme();
    bindEvents();
    applyLanguage();
    renderProfileChip();
    try {
      const response = await fetch('/anime.json');
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = await response.json();
      app.animes = (Array.isArray(data.d) ? data.d : []).filter((anime) => anime && anime.id != null);
      app.byId = new Map(app.animes.map((anime) => [String(anime.id), anime]));
      $('#catalogCount').textContent = new Intl.NumberFormat(localeCode()).format(data.c || app.animes.length);
      populateFilters();
      setFeature();
      updateStats();
      applyFilters();
      $('#loading').hidden = true;
    } catch (error) {
      console.error('Não foi possível carregar o catálogo:', error);
      $('#loading').innerHTML = `<div class="empty-state"><span>!</span><h3>${escapeHTML(t('loadError'))}</h3><p>${escapeHTML(t('loadErrorText'))}</p></div>`;
    }
  }

  function populateFilters() {
    const genres = new Set(); const years = new Set();
    for (const anime of app.animes) {
      (Array.isArray(anime.g) ? anime.g : []).forEach((genre) => genres.add(genre));
      if (anime.y) years.add(anime.y);
    }
    [...genres].sort((a, b) => a.localeCompare(b)).forEach((genre) => $('#genreFilter').insertAdjacentHTML('beforeend', `<option value="${escapeHTML(genre)}">${escapeHTML(genre)}</option>`));
    [...years].sort((a, b) => b - a).forEach((year) => $('#yearFilter').insertAdjacentHTML('beforeend', `<option value="${escapeHTML(year)}">${escapeHTML(year)}</option>`));
  }

  function setFeature() {
    const feature = app.animes.find((anime) => anime.id === 1) || [...app.animes].sort((a, b) => safeNumber(b.s) - safeNumber(a.s))[0];
    if (!feature) return;
    app.feature = feature;
    const img = imageFor(feature);
    $('#heroTitle').textContent = feature.t;
    $('#heroMeta').innerHTML = `<span class="hero-score">★ ${safeNumber(feature.s).toFixed(2)}</span><span>${escapeHTML(typeLabel(feature.tp))}</span><span>${escapeHTML(feature.y || '—')}</span><span>${escapeHTML(feature.ep || '?')} ${escapeHTML(t('episodes'))}</span>`;
    $('#heroSynopsis').textContent = feature.syn || t('featureFallback');
    $('#heroPoster').src = img; $('#heroBackdrop').style.backgroundImage = `linear-gradient(90deg, #15141b 0%, rgba(21,20,27,.9) 42%, rgba(21,20,27,.22) 100%), url("${img}")`;
    updateHeroAction();
  }

  function typeLabel(type) {
    if (type === 'TV') return t('typeSeries');
    if (type === 'Movie') return t('typeMovieLabel');
    if (type === 'OVA') return 'OVA';
    if (type === 'ONA') return 'ONA';
    if (type === 'Special') return t('typeSpecialLabel');
    return type || 'Anime';
  }

  function updateHeroAction() {
    if (!app.feature) return;
    const entry = listEntry(app.feature);
    $('#heroAdd').textContent = entry ? `✓ ${statusLabel(entry.status)}` : `＋ ${t('addToList')}`;
    $('#heroAdd').classList.toggle('is-saved', Boolean(entry));
  }

  function bindEvents() {
    document.querySelectorAll('[data-view]').forEach((button) => button.addEventListener('click', () => switchView(button.dataset.view)));
    document.querySelectorAll('.list-tab').forEach((button) => button.addEventListener('click', () => {
      app.listFilter = button.dataset.status; app.page = 1;
      document.querySelectorAll('.list-tab').forEach((tab) => tab.classList.toggle('active', tab === button));
      applyFilters();
    }));
    ['search', 'typeFilter', 'genreFilter', 'yearFilter', 'sortBy'].forEach((id) => $(`#${id}`).addEventListener(id === 'search' ? 'input' : 'change', () => { app.page = 1; applyFilters(); }));
    $('#languageSelect').addEventListener('change', (event) => {
      app.language = ['pt','en','es'].includes(event.target.value) ? event.target.value : 'pt';
      try { localStorage.setItem('seek-language', app.language); } catch {}
      applyLanguage();
    });
    $('#themeToggle').addEventListener('click', () => {
      app.theme = app.theme === 'light' ? 'dark' : 'light';
      try { localStorage.setItem('seek-theme', app.theme); } catch {}
      applyTheme();
    });
    $('#profileButton').addEventListener('click', () => app.account ? toggleAccountMenu(false) : openLoginModal());
    $('#mobileProfileButton').addEventListener('click', () => app.account ? toggleAccountMenu(true) : openLoginModal());
    document.querySelectorAll('[data-display-mode]').forEach((button) => button.addEventListener('click', () => setDisplayMode(button.dataset.displayMode)));
    document.querySelectorAll('[data-account-view]').forEach((button) => button.addEventListener('click', () => {
      closeAccountMenu();
      switchView(button.dataset.accountView);
    }));
    $('#accountLogout').addEventListener('click', disconnectAccount);
    document.addEventListener('click', (event) => {
      if (!event.target.closest('#accountMenu, #profileButton, #mobileProfileButton')) closeAccountMenu();
    });
    $('#demoLogin').addEventListener('click', startDemo);
    document.querySelectorAll('[data-close-login]').forEach((element) => element.addEventListener('click', closeLoginModal));
    $('#loginForm').addEventListener('submit', (event) => {
      event.preventDefault();
      const username = $('#hiveUsername').value.trim().toLowerCase();
      if (!/^[a-z][a-z0-9.-]{2,15}$/.test(username)) { showToast(t('invalidUsername')); return; }
      loginWithKeychain(username);
    });
    $('#heroDetails').addEventListener('click', () => app.feature && showDetails(app.feature));
    $('#heroAdd').addEventListener('click', () => app.feature && updateStatus(app.feature, listEntry(app.feature) ? '' : 'planned'));
    $('#clearFilters').addEventListener('click', () => {
      $('#search').value = ''; $('#typeFilter').value = ''; $('#genreFilter').value = ''; $('#yearFilter').value = ''; $('#sortBy').value = 'score';
      app.page = 1; applyFilters();
    });
    $('#prevBtn').addEventListener('click', () => { if (app.page > 1) { app.page--; render(); } });
    $('#nextBtn').addEventListener('click', () => { if (app.page < Math.ceil(app.results.length / PAGE_SIZE)) { app.page++; render(); } });
    $('#animeGrid').addEventListener('click', (event) => {
      const action = event.target.closest('[data-action]'); const card = event.target.closest('[data-id]');
      if (!card) return;
      const anime = app.byId.get(card.dataset.id); if (!anime) return;
      if (!action) { showDetails(anime); return; }
      event.stopPropagation();
      if (action.dataset.action === 'add') updateStatus(anime, 'planned');
      if (action.dataset.action === 'increment') setProgress(anime, 1);
      if (action.dataset.action === 'complete') updateStatus(anime, 'completed');
    });
    $('#animeGrid').addEventListener('keydown', (event) => {
      if ((event.key === 'Enter' || event.key === ' ') && event.target.matches('.anime-card')) {
        event.preventDefault();
        const anime = app.byId.get(event.target.dataset.id);
        if (anime) showDetails(anime);
      }
    });
    document.querySelectorAll('[data-close-modal]').forEach((element) => element.addEventListener('click', closeModal));
    $('#animeModal').addEventListener('change', (event) => {
      if (event.target.id === 'modalStatus') updateStatus(app.currentAnime, event.target.value);
    });
    $('#animeModal').addEventListener('click', (event) => {
      const action = event.target.closest('[data-modal-action]')?.dataset.modalAction;
      if (!action || !app.currentAnime) return;
      if (action === 'increment') setProgress(app.currentAnime, 1);
      if (action === 'decrement') setProgress(app.currentAnime, -1);
    });
    document.addEventListener('keydown', (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); $('#search').focus(); }
      if (event.key === 'Escape') closeModal();
      if (event.key === 'Escape') closeLoginModal();
      if (event.key === 'Escape') closeAccountMenu();
    });
  }

  function applyLanguage() {
    const lang = app.language;
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;
    document.title = lang === 'en' ? 'Seek — your anime journey' : lang === 'es' ? 'Seek — tu recorrido por el anime' : 'Seek — sua jornada pelos animes';
    $('#languageSelect').value = lang;
    $('#languageSelect').setAttribute('aria-label', t('language'));
    applyTheme();
    applyTheme();
    $('.view-mode').setAttribute('aria-label', t('viewMode'));
    document.querySelector('[data-display-mode="grid"]').setAttribute('aria-label', t('gridView'));
    document.querySelector('[data-display-mode="grid"]').title = t('gridView');
    document.querySelector('[data-display-mode="list"]').setAttribute('aria-label', t('listView'));
    document.querySelector('[data-display-mode="list"]').title = t('listView');
    document.querySelectorAll('[data-i18n]').forEach((node) => { node.textContent = t(node.dataset.i18n); });
    $('#search').placeholder = t(app.view === 'my-list' ? 'searchList' : 'searchDiscover');
    $('#heroDetails').innerHTML = `${escapeHTML(t('seeAnime'))} <span>↗</span>`;
    $('#sortBy').querySelector('[value="score"]').textContent = t('sortScore');
    $('#sortBy').querySelector('[value="title"]').textContent = t('sortTitle');
    $('#sortBy').querySelector('[value="year"]').textContent = t('sortNewest');
    $('#sortBy').querySelector('[value="year_old"]').textContent = t('sortOldest');
    document.querySelectorAll('.list-tab').forEach((button) => {
      const key = button.dataset.status === 'all' ? 'tabAll' : button.dataset.status;
      const count = button.querySelector('span')?.textContent || '0';
      button.innerHTML = `${escapeHTML(t(key))} <span id="tab-${escapeHTML(button.dataset.status)}">${escapeHTML(count)}</span>`;
    });
    switchView(app.view);
    setFeature();
    renderProfileChip();
    if (app.currentAnime && $('#animeModal').classList.contains('open')) renderModal(app.currentAnime);
  }

  function renderProfileChip() {
    const profileButton = $('#profileButton');
    if (!profileButton) return;
    if (app.account?.mode === 'demo') {
      updateProfile('@demo.seeker', t('demoActive'), 'D');
      profileButton.title = t('logout');
      profileButton.setAttribute('aria-label', `@demo.seeker — ${t('logout')}`);
    } else if (app.account) {
      updateProfile(`@${app.account.username}`, t('keychainProfile'), app.account.username.slice(0, 1).toUpperCase());
      profileButton.title = t('logout');
      profileButton.setAttribute('aria-label', `@${app.account.username} — ${t('logout')}`);
    } else {
      updateProfile(t('loginProfile'), t('keychainLogin'), 'H');
      profileButton.title = t('keychainLogin');
      profileButton.setAttribute('aria-label', t('keychainLogin'));
      closeAccountMenu();
    }
  }

  function updateProfile(name, detail, avatar) {
    $('#profileName').textContent = name;
    $('#profileDetail').textContent = detail;
    $('#profileAvatar').textContent = avatar;
    $('#mobileProfileAvatar').textContent = avatar;
    $('#menuAvatar').textContent = avatar;
    $('#menuAccountName').textContent = name;
    $('#menuAccountType').textContent = detail;
  }

  function persistAccount() {
    try { app.account ? localStorage.setItem('seek-account', JSON.stringify(app.account)) : localStorage.removeItem('seek-account'); }
    catch { /* Login can still be used for this page session. */ }
    renderProfileChip();
  }

  function applyTheme() {
    document.documentElement.dataset.theme = app.theme;
    const button = $('#themeToggle');
    if (!button) return;
    const label = t(app.theme === 'light' ? 'themeToDark' : 'themeToLight');
    button.textContent = app.theme === 'light' ? '☾' : '☀';
    button.title = label;
    button.setAttribute('aria-label', label);
    button.setAttribute('aria-pressed', String(app.theme === 'dark'));
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', app.theme === 'light' ? '#f4f5f7' : '#111318');
  }

  function startDemo() {
    closeLoginModal();
    activateAccount({ username: 'demo.seeker', mode: 'demo' });
    showToast(t('demoStarted'));
  }

  function disconnectAccount() {
    const wasDemo = app.account?.mode === 'demo';
    closeAccountMenu();
    activateAccount(null);
    showToast(wasDemo ? t('demoExited') : t('signedOut'));
  }

  function activateAccount(account) {
    app.account = account;
    app.list = readList(account);
    persistAccount();
    updateStats();
    applyFilters();
  }

  function openLoginModal() {
    closeAccountMenu();
    $('#loginModal').classList.add('open');
    $('#loginModal').setAttribute('aria-hidden', 'false');
    $('#hiveUsername').focus();
  }

  function closeLoginModal() {
    $('#loginModal').classList.remove('open');
    $('#loginModal').setAttribute('aria-hidden', 'true');
  }

  function toggleAccountMenu(mobile) {
    const menu = $('#accountMenu');
    const open = menu.hidden;
    if (!app.account) { openLoginModal(); return; }
    menu.hidden = !open;
    menu.classList.toggle('mobile-open', open && mobile);
    $('#profileButton').setAttribute('aria-expanded', String(open && !mobile));
    $('#mobileProfileButton').setAttribute('aria-expanded', String(open && mobile));
    $('#profileButton').classList.toggle('menu-open', open && !mobile);
  }

  function closeAccountMenu() {
    const menu = $('#accountMenu');
    if (!menu) return;
    menu.hidden = true;
    menu.classList.remove('mobile-open');
    $('#profileButton').setAttribute('aria-expanded', 'false');
    $('#mobileProfileButton').setAttribute('aria-expanded', 'false');
    $('#profileButton').classList.remove('menu-open');
  }

  function setDisplayMode(mode) {
    app.displayMode = mode === 'list' ? 'list' : 'grid';
    try { localStorage.setItem('seek-display-mode', app.displayMode); } catch {}
    document.querySelectorAll('[data-display-mode]').forEach((button) => {
      const active = button.dataset.displayMode === app.displayMode;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    render();
  }

  function loginWithKeychain(username) {
    const keychain = window.hive_keychain;
    if (!keychain) { showToast(t('keychainMissing')); return; }
    const button = $('#loginSubmit');
    button.disabled = true;
    button.textContent = t('connect');
    const bytes = new Uint8Array(18);
    crypto.getRandomValues(bytes);
    const nonce = Array.from(bytes, (byte) => byte.toString(16).padStart(2, '0')).join('');
    const message = `Seek login\nOrigin: ${location.origin}\nNonce: ${nonce}\nIssued: ${new Date().toISOString()}`;
    const requestSignature = () => {
      try {
        keychain.requestSignBuffer(username, message, 'Posting', (response) => {
          button.disabled = false;
          button.textContent = t('signIn');
          if (!response?.success) { renderProfileChip(); showToast(response?.error || t('signatureFailed')); return; }
          closeLoginModal();
          activateAccount({ username, mode: 'keychain' });
          showToast(`${t('signedAs')} @${username}`);
        }, null, t('signaturePrompt'));
      } catch (error) {
        button.disabled = false; button.textContent = t('signIn'); renderProfileChip(); showToast(error?.message || t('keychainError'));
      }
    };
    try {
      if (typeof keychain.requestHandshake === 'function') keychain.requestHandshake(requestSignature);
      else requestSignature();
    } catch (error) {
      button.disabled = false; button.textContent = t('signIn'); renderProfileChip(); showToast(error?.message || t('keychainError'));
    }
  }

  function switchView(view) {
    app.view = view; app.page = 1;
    document.querySelectorAll('.nav-item').forEach((button) => button.classList.toggle('active', button.dataset.view === view));
    const isList = view === 'my-list';
    $('#breadcrumbCurrent').textContent = isList ? t('myList') : t('discover');
    $('#welcomeEyebrow').textContent = isList ? t('eyebrowList') : t('eyebrowDiscover');
    $('#pageTitle').innerHTML = `${escapeHTML(isList ? t('pageList') : t('pageDiscover'))}<span>.</span>`;
    $('#pageSubtitle').textContent = isList ? t('subList') : t('subDiscover');
    $('#sectionEyebrow').textContent = isList ? t('sectionEyebrowList') : t('sectionEyebrowDiscover');
    $('#sectionTitle').textContent = isList ? t('sectionList') : t('sectionDiscover');
    $('#hero').hidden = isList; $('#statsRow').hidden = !isList;
    $('#discoverToolbar').hidden = isList; $('#listTabs').hidden = !isList;
    $('#search').placeholder = t(isList ? 'searchList' : 'searchDiscover');
    app.listFilter = isList ? app.listFilter : 'all';
    document.querySelectorAll('.list-tab').forEach((tab) => tab.classList.toggle('active', tab.dataset.status === app.listFilter));
    applyFilters();
  }

  function applyFilters() {
    const term = $('#search').value.trim().toLocaleLowerCase(localeCode());
    const type = $('#typeFilter').value; const genre = $('#genreFilter').value; const year = $('#yearFilter').value;
    let source = app.animes;
    if (app.view === 'my-list') source = source.filter((anime) => listEntry(anime) && (app.listFilter === 'all' || listEntry(anime).status === app.listFilter));
    app.results = source.filter((anime) => {
      if (app.view === 'discover' && type && anime.tp !== type) return false;
      if (app.view === 'discover' && genre && !(anime.g || []).includes(genre)) return false;
      if (app.view === 'discover' && year && String(anime.y) !== year) return false;
      if (!term) return true;
      return [anime.t, anime.syn, ...(anime.g || []), ...(anime.th || [])].some((value) => String(value || '').toLocaleLowerCase(localeCode()).includes(term));
    });
    const sort = $('#sortBy').value;
    app.results.sort((a, b) => sort === 'title' ? String(a.t).localeCompare(String(b.t)) : sort === 'year' ? safeNumber(b.y) - safeNumber(a.y) : sort === 'year_old' ? safeNumber(a.y) - safeNumber(b.y) : safeNumber(b.s) - safeNumber(a.s));
    const hasFilters = app.view === 'discover' && Boolean(term || type || genre || year);
    $('#activeFilters').hidden = !hasFilters;
    $('#activeFilterText').textContent = hasFilters ? `${app.results.length.toLocaleString(localeCode())} ${t('resultFilter')}` : '';
    $('#resultCount').textContent = `${app.results.length.toLocaleString(localeCode())} ${app.view === 'my-list' ? t('resultTitles') : t('resultAnime')}`;
    render();
  }

  function render() {
    const grid = $('#animeGrid');
    grid.classList.toggle('list-layout', app.displayMode === 'list');
    document.querySelectorAll('[data-display-mode]').forEach((button) => {
      const active = button.dataset.displayMode === app.displayMode;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    const pages = Math.max(1, Math.ceil(app.results.length / PAGE_SIZE));
    app.page = Math.min(app.page, pages);
    const visible = app.results.slice((app.page - 1) * PAGE_SIZE, app.page * PAGE_SIZE);
    if (!visible.length) {
      const isEmptyList = app.view === 'my-list' && Object.keys(app.list).length === 0;
      grid.innerHTML = `<div class="empty-state"><span>${isEmptyList ? '✦' : '⌕'}</span><h3>${escapeHTML(isEmptyList ? t('emptyListTitle') : t('emptySearchTitle'))}</h3><p>${escapeHTML(isEmptyList ? t('emptyListText') : t('emptySearchText'))}</p>${isEmptyList ? `<button class="button button-primary" data-empty-discover>${escapeHTML(t('explore'))}</button>` : ''}</div>`;
      grid.querySelector('[data-empty-discover]')?.addEventListener('click', () => switchView('discover'));
    } else grid.innerHTML = visible.map(createCard).join('');
    $('#pagination').hidden = app.results.length <= PAGE_SIZE;
    $('#prevBtn').disabled = app.page <= 1; $('#nextBtn').disabled = app.page >= pages;
    const numbers = $('#pageNumbers'); numbers.innerHTML = '';
    const start = Math.max(1, Math.min(app.page - 2, pages - 4));
    for (let page = start; page <= Math.min(pages, start + 4); page++) {
      const button = document.createElement('button'); button.className = `page-number${page === app.page ? ' active' : ''}`; button.textContent = page;
      button.setAttribute('aria-label', `Página ${page}`); button.addEventListener('click', () => { app.page = page; render(); }); numbers.appendChild(button);
    }
  }

  function createCard(anime) {
    const entry = listEntry(anime); const genres = (anime.g || []).slice(0, 2).map((genre) => `<span class="genre-chip">${escapeHTML(genre)}</span>`).join('');
    const synopsis = String(anime.syn || '').trim();
    const progress = entry ? safeNumber(entry.progress) : 0; const total = safeNumber(anime.ep); const percent = total ? Math.min(100, Math.round(progress / total * 100)) : 0;
    const image = imageFor(anime); const imageAlt = escapeHTML(anime.t);
    return `<article class="anime-card" data-id="${escapeHTML(anime.id)}" tabindex="0" role="button" aria-label="Ver detalhes de ${imageAlt}">
      <div class="card-art"><img src="${image}" alt="${escapeHTML(t('coverOf'))} ${imageAlt}" loading="lazy" onerror="this.classList.add('image-failed')">${entry ? `<span class="status-badge status-${escapeHTML(entry.status)}">${escapeHTML(statusLabel(entry.status))}</span>` : ''}<span class="rating-badge">★ ${safeNumber(anime.s).toFixed(2)}</span><button class="quick-save${entry ? ' saved' : ''}" data-action="${entry ? 'complete' : 'add'}" aria-label="${escapeHTML(entry ? t('done') : t('addToList'))}">${entry ? '✓' : '+'}</button></div>
      <div class="card-body"><h3>${escapeHTML(anime.t)}</h3>${synopsis ? `<p class="card-description">${escapeHTML(synopsis)}</p>` : ''}<div class="card-subtitle"><span>${escapeHTML(typeLabel(anime.tp))}</span><i>·</i><span>${escapeHTML(anime.y || '—')}</span><i>·</i><span>${escapeHTML(anime.ep || '?')} ${escapeHTML(t('episodes'))}</span></div><div class="card-genres">${genres}</div>
      ${entry ? `<div class="card-progress"><div class="progress-label"><span>${entry.status === 'completed' ? escapeHTML(t('percentDone')) : `${progress} / ${total || '?'} ${escapeHTML(t('episodes'))}`}</span><span>${percent}%</span></div><div class="progress-track"><span style="width:${percent}%"></span></div>${entry.status !== 'completed' ? `<button class="progress-action" data-action="increment">${escapeHTML(t('markEpisode'))}</button>` : ''}</div>` : `<div class="card-add-hint">＋ ${escapeHTML(t('addToList'))}</div>`}</div>
    </article>`;
  }

  function showDetails(anime) {
    app.currentAnime = anime; renderModal(anime);
    $('#animeModal').classList.add('open'); $('#animeModal').setAttribute('aria-hidden', 'false'); document.body.classList.add('modal-open');
    $('.modal-close').focus();
  }

  function renderModal(anime) {
    const entry = listEntry(anime); const progress = entry ? safeNumber(entry.progress) : 0; const total = Math.max(1, safeNumber(anime.ep, 1));
    const genres = (anime.g || []).map((genre) => `<span class="detail-tag">${escapeHTML(genre)}</span>`).join('');
    const themes = (anime.th || []).slice(0, 8).map((theme) => `<span class="detail-tag muted-tag">${escapeHTML(theme)}</span>`).join('');
    const producers = (anime.pd || []).slice(0, 8).map((producer) => `<span class="detail-tag muted-tag">${escapeHTML(producer)}</span>`).join('');
    const trailer = anime.v ? `<a class="trailer-link" href="https://www.youtube.com/watch?v=${encodeURIComponent(anime.v)}" target="_blank" rel="noopener noreferrer">${escapeHTML(t('watchTrailer'))} ↗</a>` : '';
    $('#modalBody').innerHTML = `<div class="detail-cover" style="background-image:linear-gradient(90deg,rgba(15,14,20,.96),rgba(15,14,20,.5)),url('${imageFor(anime)}')"></div>
      <div class="detail-main"><div class="detail-poster"><img src="${imageFor(anime)}" alt="${escapeHTML(t('coverOf'))} ${escapeHTML(anime.t)}"></div><div class="detail-title-area"><div class="detail-kicker">${escapeHTML(typeLabel(anime.tp))} · ${escapeHTML(anime.y || '—')} · ${escapeHTML(anime.r || t('noRating'))}</div><h2 id="modalTitle">${escapeHTML(anime.t)}</h2><div class="detail-score">★ <strong>${safeNumber(anime.s).toFixed(2)}</strong><span>/ 10 ${escapeHTML(t('rating'))}</span></div><div class="detail-quick-meta"><span>▣ ${escapeHTML(anime.ep || '?')} ${escapeHTML(t('episodes'))}</span><span>◷ ${escapeHTML(anime.d || t('noDuration'))}</span></div></div></div>
      <div class="detail-content"><div class="detail-list-control"><label for="modalStatus">${escapeHTML(t('myList'))}</label><select id="modalStatus"><option value="" ${!entry ? 'selected' : ''}>${escapeHTML(t('addStatus'))}</option>${Object.entries(STATUS).map(([key]) => `<option value="${key}" ${entry?.status === key ? 'selected' : ''}>${escapeHTML(statusLabel(key))}</option>`).join('')}</select></div>
      ${entry ? `<div class="episode-control"><div><strong>${escapeHTML(t('myProgress'))}</strong><small>${entry.status === 'completed' ? escapeHTML(t('finished')) : `${progress} ${escapeHTML(t('of'))} ${total} ${escapeHTML(t('episodes'))}`}</small></div><div class="episode-buttons"><button data-modal-action="decrement" aria-label="${escapeHTML(t('decreaseEpisode'))}" ${progress <= 0 ? 'disabled' : ''}>−</button><b>${progress}<small> / ${total}</small></b><button data-modal-action="increment" aria-label="${escapeHTML(t('markEpisodeShort'))}">＋</button></div></div>` : ''}
      <h3>${escapeHTML(t('synopsis'))}</h3><p class="detail-synopsis">${escapeHTML(anime.syn || t('noSynopsis'))}</p><h3>${escapeHTML(t('genres'))}</h3><div class="detail-tags">${genres || `<span class="detail-tag">${escapeHTML(t('noInfo'))}</span>`}</div>${themes ? `<h3>${escapeHTML(t('themes'))}</h3><div class="detail-tags">${themes}</div>` : ''}${producers ? `<h3>${escapeHTML(t('production'))}</h3><div class="detail-tags">${producers}</div>` : ''}<div class="detail-footer">${trailer}<a class="mal-link" href="https://myanimelist.net/anime/${encodeURIComponent(anime.id)}" target="_blank" rel="noopener noreferrer">${escapeHTML(t('moreInfo'))} ↗</a></div></div>`;
  }

  function closeModal() {
    $('#animeModal').classList.remove('open'); $('#animeModal').setAttribute('aria-hidden', 'true'); document.body.classList.remove('modal-open');
  }

  function updateStats() {
    const entries = Object.entries(app.list).map(([id, entry]) => ({ anime: app.byId.get(id), entry })).filter((item) => item.anime && item.entry);
    const count = (status) => entries.filter((item) => item.entry.status === status).length;
    const episodes = entries.reduce((sum, item) => sum + safeNumber(item.entry.progress), 0);
    $('#navListCount').textContent = entries.length.toLocaleString(localeCode());
    $('#statTotal').textContent = entries.length.toLocaleString(localeCode()); $('#statWatching').textContent = count('watching').toLocaleString(localeCode()); $('#statCompleted').textContent = count('completed').toLocaleString(localeCode()); $('#statEpisodes').textContent = episodes.toLocaleString(localeCode());
    $('#tab-all').textContent = entries.length.toLocaleString(localeCode());
    for (const status of Object.keys(STATUS)) $(`#tab-${status}`).textContent = count(status).toLocaleString(localeCode());
    updateHeroAction();
  }

  function showToast(message) {
    const toast = $('#toast'); toast.textContent = message; toast.classList.add('visible');
    clearTimeout(app.toastTimer); app.toastTimer = setTimeout(() => toast.classList.remove('visible'), 2300);
  }

  document.addEventListener('DOMContentLoaded', init);
})();
