/* ==========================================================================
   Chat Admin — Shell compartido: Sidebar, Topbar, Tema, Alertas, Modales
   y Log de Auditoría sincronizado entre módulos.
   ========================================================================== */

(function () {
  if (window.tailwind) {
    window.tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', 'sans-serif'],
          },
          colors: {
            brand: {
              200: '#bfdbfe',
              300: '#93c5fd',
              400: '#60a5fa',
              500: '#3b82f6',
              600: '#1d6fe9',
            }
          },
          animation: {
            'glow-pulse': 'glow 6s ease-in-out infinite alternate',
          },
          keyframes: {
            glow: {
              '0%': { opacity: '0.4', transform: 'scale(0.98)' },
              '100%': { opacity: '0.8', transform: 'scale(1.04)' },
            },
          }
        }
      }
    };
  }
})();

const ADMIN_NAV_ITEMS = [
  {
    label: 'Dashboard',
    href: 'dashboard.html',
    section: 'main',
    icon: 'M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z'
  },
  {
    label: 'Salas',
    href: 'sala.html',
    section: 'main',
    icon: 'M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
  },
  {
    label: 'Moderación',
    href: 'moderacion.html',
    section: 'main',
    icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
  },
  {
    label: 'Dispositivos vinculados',
    href: 'dispositivos.html',
    section: 'main',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
  },
  {
    label: 'Mensaje masivo',
    href: 'mensaje-masivo.html',
    section: 'main',
    icon: 'M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z'
  },
  {
    label: 'Mensajes privados',
    href: 'mensajes-privados.html',
    section: 'main',
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
  },
  {
    label: 'Auditoría',
    href: 'auditoria.html',
    section: 'main',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
  },
  {
    label: 'Buscar mensajes',
    href: 'buscar-mensajes.html',
    section: 'main',
    icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
  },
  {
    label: 'Administradores',
    href: 'administradores.html',
    section: 'system',
    icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
  }
];

const AUDIT_STORAGE_KEY = 'chatAdminAuditRecords_v1';
const BASE_AUDIT_RECORDS = [
  {
    id: 'aud-1',
    type: 'Privado',
    admin: 'admin@innovacion.gob.sv',
    sender: 'ALAN DONALDO ALAS VASQUEZ',
    senderEmail: 'aalas@salud.gob.sv',
    target: 'ana.asandoval@salud.gob.sv',
    tableTarget: '',
    message: 'hola',
    justification: 'wwwwwwwwwwwwwwwwwww',
    dateIso: '2026-11-06',
    dateDisplay: '06/11/2026 02:55 p. m.'
  },
  {
    id: 'aud-2',
    type: 'Grupal',
    admin: 'x',
    sender: 'ADRIANA MICHELLE FLORES POSADA',
    senderEmail: 'aflores@salud.gob.sv',
    target: 'Sala General',
    tableTarget: 'Sala General',
    message: 'prueba',
    justification: 'xxxxxxxxxx',
    dateIso: '2026-11-05',
    dateDisplay: '05/11/2026 03:52 p. m.'
  },
  {
    id: 'aud-3',
    type: 'Privado',
    admin: 'sflamenco',
    sender: 'ALAN DONALDO ALAS VASQUEZ',
    senderEmail: 'aalas@salud.gob.sv',
    target: 'lissette.rosales@salud.gob.sv',
    tableTarget: '',
    message: 'hola',
    justification: 'aaaaaaaaaa',
    dateIso: '2026-11-05',
    dateDisplay: '05/11/2026 02:33 p. m.'
  },
  {
    id: 'aud-4',
    type: 'Grupal',
    admin: 'admin@innovacion.gob.sv',
    sender: 'ANA ALVAREZ',
    senderEmail: 'ana.alvarez@salud.gob.sv',
    target: 'Hospital Nacional Ahuachapán AH "Dr. Francisco Menéndez"',
    tableTarget: 'Hospital Nacional Ahuachapán AH "Dr. Francisco Menéndez"',
    message: 'gsdgsdggs',
    justification: 'dddddddddd',
    dateIso: '2026-11-04',
    dateDisplay: '04/11/2026 03:02 p. m.'
  },
  {
    id: 'aud-5',
    type: 'Grupal',
    admin: 'admin@innovacion.gob.sv',
    sender: 'KARLA MARIA ARGUETA ACEVEDO',
    senderEmail: 'kargueta@salud.gob.sv',
    target: 'Hospital Nacional Ahuachapán AH "Dr. Francisco Menéndez"',
    tableTarget: 'Hospital Nacional Ahuachapán AH "Dr. Francisco Menéndez"',
    message: 'ss',
    justification: 'xxxxxxxxxxxxxxxxxxxx',
    dateIso: '2026-11-04',
    dateDisplay: '04/11/2026 03:02 p. m.'
  },
  {
    id: 'aud-6',
    type: 'Grupal',
    admin: 'admin@innovacion.gob.sv',
    sender: 'ALAN DONALDO ALAS VASQUEZ',
    senderEmail: 'aalas@salud.gob.sv',
    target: 'Hospital Nacional Ahuachapán AH "Dr. Francisco Menéndez"',
    tableTarget: 'Hospital Nacional Ahuachapán AH "Dr. Francisco Menéndez"',
    message: 'hola buenas tyardes 2',
    justification: 'se borro el mensaje de prueba',
    dateIso: '2026-11-04',
    dateDisplay: '04/11/2026 11:28 a. m.'
  }
];

let isDark = localStorage.getItem('chatAdminTheme') === 'dark';
let desktopSidebarCollapsed = false;

function escapeHtml(text) {
  return String(text == null ? '' : text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function showAlert(message, type = 'info') {
  const container = document.getElementById('alertContainer');
  if (!container) return;
  const alertType = ['success', 'error', 'info'].includes(type) ? type : 'info';
  const alertElement = document.createElement('div');
  const icon = document.createElement('span');
  const messageElement = document.createElement('span');
  const closeButton = document.createElement('button');

  const icons = {
    success: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"></circle><path d="m8 12 2.5 2.5L16 9"></path></svg>',
    error: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"></circle><path d="M9 9l6 6m0-6-6 6"></path></svg>',
    info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"></circle><path d="M12 10v6m0-9h.01"></path></svg>'
  };

  alertElement.className = `app-alert app-alert-${alertType}`;
  alertElement.setAttribute('role', 'alert');
  icon.className = 'app-alert-icon';
  icon.setAttribute('aria-hidden', 'true');
  icon.innerHTML = icons[alertType];
  messageElement.className = 'app-alert-message';
  messageElement.textContent = message;
  closeButton.type = 'button';
  closeButton.className = 'app-alert-close';
  closeButton.setAttribute('aria-label', 'Cerrar alerta');
  closeButton.textContent = '×';
  closeButton.addEventListener('click', () => alertElement.remove());

  alertElement.append(icon, messageElement, closeButton);
  container.appendChild(alertElement);
  setTimeout(() => alertElement.remove(), 4200);
}

function toggleMobileSidebar(forceState) {
  const sidebar = document.getElementById('sidebar');
  const backdrop = document.getElementById('sidebarBackdrop');
  if (!sidebar || !backdrop) return;
  const open = typeof forceState === 'boolean' ? forceState : sidebar.classList.contains('-translate-x-full');
  sidebar.classList.toggle('-translate-x-full', !open);
  backdrop.classList.toggle('hidden', !open);
}

function handleSidebarButton() {
  if (window.innerWidth < 1024) {
    toggleMobileSidebar();
    return;
  }
  const sidebar = document.getElementById('sidebar');
  if (!sidebar) return;
  desktopSidebarCollapsed = !desktopSidebarCollapsed;
  sidebar.classList.toggle('lg:hidden', desktopSidebarCollapsed);
}

function logout() {
  sessionStorage.removeItem('chatAdminSession');
  sessionStorage.removeItem('chatAdminUser');
  showAlert('Cerrando sesión...', 'info');
  setTimeout(() => {
    window.location.href = 'index.html';
  }, 500);
}

function openModal(modalId, focusId = null) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  if (focusId) {
    const focusEl = document.getElementById(focusId);
    if (focusEl) setTimeout(() => focusEl.focus(), 50);
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

function handleModalBackdropClick(event, modalId) {
  if (event.target.id === modalId) closeModal(modalId);
}

function applyThemeClasses() {
  const body = document.body;
  const brandGrad = document.getElementById('brandGradientText');
  const themeToggleBtn = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const themeText = document.getElementById('themeText');

  document.documentElement.classList.toggle('light', !isDark);
  if (body) body.classList.toggle('light', !isDark);

  if (themeIcon) themeIcon.textContent = isDark ? '☀️' : '🌙';
  if (themeText) themeText.textContent = isDark ? 'Modo Claro' : 'Modo Oscuro';

  if (brandGrad) {
    brandGrad.className = isDark
      ? 'bg-gradient-to-r from-brand-400 via-cyan-300 to-brand-200 bg-clip-text text-transparent'
      : 'bg-gradient-to-r from-brand-600 via-brand-500 to-cyan-600 bg-clip-text text-transparent';
  }

  if (themeToggleBtn) {
    themeToggleBtn.className = isDark
      ? 'px-3 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 hover:text-white border border-slate-700/60 shadow-lg backdrop-blur-md flex items-center gap-2 text-xs font-medium cursor-pointer'
      : 'px-3 py-2 rounded-xl bg-white/90 hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-sm backdrop-blur-md flex items-center gap-2 text-xs font-medium cursor-pointer';
  }
}

function getStoredAuditRecords() {
  try {
    const raw = localStorage.getItem(AUDIT_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch (e) {
    // Fallback al dataset base
  }
  return BASE_AUDIT_RECORDS.slice();
}

function appendAuditRecord(entry) {
  const current = getStoredAuditRecords();
  const next = [entry, ...current];
  try {
    localStorage.setItem(AUDIT_STORAGE_KEY, JSON.stringify(next));
  } catch (e) {
    // Ignorar errores de almacenamiento privado
  }
  return next;
}

function formatNowForAudit() {
  const now = new Date();
  const dd = String(now.getDate()).padStart(2, '0');
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const yyyy = now.getFullYear();
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const ampm = hours >= 12 ? 'p. m.' : 'a. m.';
  hours = hours % 12 || 12;
  return {
    dateIso: `${yyyy}-${mm}-${dd}`,
    dateDisplay: `${dd}/${mm}/${yyyy} ${String(hours).padStart(2, '0')}:${minutes} ${ampm}`
  };
}

function buildNavLinkHtml(item, activeNav) {
  const isActive = item.label === activeNav;
  const weight = isActive ? 'font-semibold nav-active' : 'font-medium';
  return `
    <a href="${item.href}" data-nav="${escapeHtml(item.label)}"
      class="nav-item ${weight} w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs transition-all cursor-pointer">
      <svg class="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="${item.icon}" />
      </svg>
      <span>${escapeHtml(item.label)}</span>
    </a>`;
}

function initAdminShell(options = {}) {
  const { activeNav = '', modalIds = [], onThemeChange = null } = options;

  // 1. Insertar contenedor de alertas, luces ambientales y backdrop móvil
  const shellOverlayHtml = `
    <div id="alertContainer" class="app-alert-container" aria-live="polite"></div>
    <div class="fixed inset-0 pointer-events-none overflow-hidden ambient-orb">
      <div class="absolute -top-32 -left-32 w-96 h-96 bg-brand-600/20 rounded-full blur-3xl animate-glow-pulse"></div>
      <div class="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-glow-pulse" style="animation-delay: 2s;"></div>
    </div>
    <div id="sidebarBackdrop" class="fixed inset-0 z-30 bg-slate-950/60 backdrop-blur-sm hidden lg:hidden" onclick="toggleMobileSidebar(false)"></div>
  `;
  document.body.insertAdjacentHTML('afterbegin', shellOverlayHtml);

  // 2. Renderizar Sidebar en #adminSidebarMount
  const sidebarMount = document.getElementById('adminSidebarMount');
  if (sidebarMount) {
    const mainLinks = ADMIN_NAV_ITEMS.filter((i) => i.section === 'main').map((i) => buildNavLinkHtml(i, activeNav)).join('');
    const sysLinks = ADMIN_NAV_ITEMS.filter((i) => i.section === 'system').map((i) => buildNavLinkHtml(i, activeNav)).join('');
    sidebarMount.outerHTML = `
      <aside id="sidebar"
        class="glass-sidebar fixed inset-y-0 left-0 z-40 w-64 flex flex-col justify-between transition-all duration-300 -translate-x-full lg:translate-x-0 lg:sticky lg:top-0 lg:h-screen">
        <div class="flex flex-col flex-1 overflow-y-auto">
          <div class="px-4 py-4 border-b theme-border flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-brand-600/20 border border-brand-500/30 flex items-center justify-center shrink-0">
              <svg class="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="#1d6fe9" d="M12 3C6.477 3 2 6.8 2 11.5c0 2.8 1.5 5.3 4 6.8L4.5 21l4.2-1.7c1 .3 2.1.5 3.3.5 5.523 0 10-3.8 10-8.3S17.523 3 12 3Z"></path>
                <circle cx="8" cy="11.5" r="1" fill="white"></circle>
                <circle cx="12" cy="11.5" r="1" fill="white"></circle>
                <circle cx="16" cy="11.5" r="1" fill="white"></circle>
              </svg>
            </div>
            <div class="min-w-0">
              <p class="text-xs font-semibold truncate theme-text-primary">Gustavo Reyes</p>
              <p class="text-[11px] truncate theme-text-muted">Panel de administración</p>
            </div>
          </div>

          <nav class="px-3 py-4 space-y-1" aria-label="Navegación principal">
            ${mainLinks}
            <div class="pt-4 pb-1 px-3">
              <p class="text-[11px] font-semibold theme-text-muted">Sistema</p>
            </div>
            ${sysLinks}
          </nav>
        </div>

        <div class="p-3 border-t theme-border space-y-1">
          <a href="mi-perfil.html" data-nav="Mi perfil"
            class="nav-item ${activeNav === 'Mi perfil' ? 'font-semibold nav-active' : 'font-medium'} w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs transition-all cursor-pointer">
            <svg class="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Mi perfil</span>
          </a>
          <button type="button" onclick="logout()"
            class="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium text-rose-400 hover:bg-rose-400/10 hover:text-rose-300 transition-all cursor-pointer">
            <svg class="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span>Cerrar sesión</span>
          </button>
        </div>
      </aside>
    `;
  }

  // 3. Renderizar Topbar en #adminTopbarMount
  const topbarMount = document.getElementById('adminTopbarMount');
  if (topbarMount) {
    topbarMount.outerHTML = `
      <header class="glass-topbar sticky top-0 z-20 px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <button type="button" onclick="handleSidebarButton()"
            class="p-2 rounded-xl theme-btn-subtle transition-all cursor-pointer" title="Mostrar u ocultar menú"
            aria-label="Mostrar u ocultar menú">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div class="flex items-center gap-2.5">
            <svg class="w-7 h-7" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="#1d6fe9" d="M12 3C6.477 3 2 6.8 2 11.5c0 2.8 1.5 5.3 4 6.8L4.5 21l4.2-1.7c1 .3 2.1.5 3.3.5 5.523 0 10-3.8 10-8.3S17.523 3 12 3Z"></path>
              <circle cx="8" cy="11.5" r="1" fill="white"></circle>
              <circle cx="12" cy="11.5" r="1" fill="white"></circle>
              <circle cx="16" cy="11.5" r="1" fill="white"></circle>
            </svg>
            <span class="text-base sm:text-lg font-extrabold tracking-tight theme-text-primary">
              Chat <span id="brandGradientText" class="bg-gradient-to-r from-brand-400 via-cyan-300 to-brand-200 bg-clip-text text-transparent">Admin</span>
            </span>
          </div>
        </div>

        <button id="themeToggle" type="button"
          class="px-3 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 hover:text-white border border-slate-700/60 shadow-lg backdrop-blur-md flex items-center gap-2 text-xs font-medium cursor-pointer">
          <span id="themeIcon">☀️</span>
          <span id="themeText">Modo Claro</span>
        </button>
      </header>
    `;
  }

  // 4. Navegación y eventos de cierre móvil
  document.querySelectorAll('.nav-item').forEach((item) => {
    item.addEventListener('click', (event) => {
      const section = item.dataset.nav;
      if (item.tagName === 'A') {
        if (section === activeNav) {
          event.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        if (window.innerWidth < 1024) toggleMobileSidebar(false);
        return;
      }
      showAlert(`La vista de "${section}" aún no está implementada.`, 'info');
      if (window.innerWidth < 1024) toggleMobileSidebar(false);
    });
  });

  // 5. Tema inicial y botón alternar
  applyThemeClasses();
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.documentElement.classList.add('theme-animating');
      isDark = !isDark;
      localStorage.setItem('chatAdminTheme', isDark ? 'dark' : 'light');
      applyThemeClasses();
      if (typeof onThemeChange === 'function') onThemeChange(isDark);
      setTimeout(() => document.documentElement.classList.remove('theme-animating'), 280);
    });
  }

  // 6. Cierre de modales con Escape
  if (modalIds.length > 0) {
    document.addEventListener('keydown', (event) => {
      if (event.key !== 'Escape') return;
      modalIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el && !el.classList.contains('hidden')) closeModal(id);
      });
    });
  }
}
