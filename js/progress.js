/* Segunda Vida Digital — Progress Manager
 *
 * Anonymous, code-based progress tracking. Each user generates a unique
 * code (SVD-XXXX-XXXX) on first visit and writes it down to resume their
 * progress from any browser/device. The code is the only key to their data
 * — no email, no password, no account creation.
 *
 * Data lives at /progress/<code> in Firebase Realtime Database with
 * public read/write rules scoped per-code (you can't list all codes).
 */

(function () {
  const FIREBASE_CONFIG = {
    apiKey: "AIzaSyDnnc8Sli0hH5Ne6mv89y7vewQM6nusvC8",
    authDomain: "segunda-vida-digital.firebaseapp.com",
    databaseURL: "https://segunda-vida-digital-default-rtdb.firebaseio.com",
    projectId: "segunda-vida-digital",
    storageBucket: "segunda-vida-digital.firebasestorage.app",
    messagingSenderId: "429210360338",
    appId: "1:429210360338:web:b8606a1c3f9b24378096cb"
  };

  // Avoid I/O/0/1 to prevent transcription errors when users write the code
  // down on paper. 32 chars × 8 positions = ~1.1 trillion combos.
  const ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  const CODE_KEY = 'svd_progress_code';

  const SVDProgress = {
    db: null,
    code: null,
    nombre: null,
    paths: {}, // { pathId: [moduleId, ...] }
    _onReadyCbs: [],
    _ready: false,

    init() {
      try {
        if (!firebase.apps.length) firebase.initializeApp(FIREBASE_CONFIG);
        this.db = firebase.database();
      } catch (e) {
        console.error('No se pudo iniciar Firebase:', e);
        this.db = null;
      }
    },

    generateCode() {
      const part = (n) => {
        let s = '';
        for (let i = 0; i < n; i++) {
          s += ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
        }
        return s;
      };
      return 'SVD-' + part(4) + '-' + part(4);
    },

    normalizeCode(input) {
      if (!input) return '';
      let s = input.toUpperCase().replace(/\s+/g, '').replace(/[^A-Z0-9-]/g, '');
      // Accept 8-char no-dash format too: insert dashes
      if (/^SVD[A-Z0-9]{8}$/.test(s)) s = 'SVD-' + s.slice(3, 7) + '-' + s.slice(7);
      if (/^[A-Z0-9]{8}$/.test(s)) s = 'SVD-' + s.slice(0, 4) + '-' + s.slice(4);
      return s;
    },

    isValidCodeFormat(code) {
      return /^SVD-[A-Z0-9]{4}-[A-Z0-9]{4}$/.test(code);
    },

    getCachedCode() {
      try { return localStorage.getItem(CODE_KEY); } catch { return null; }
    },

    cacheCode(code) {
      try { localStorage.setItem(CODE_KEY, code); } catch {}
    },

    clearCache() {
      try { localStorage.removeItem(CODE_KEY); } catch {}
      this.code = null;
      this.nombre = null;
      this.paths = {};
    },

    async load(code) {
      if (!this.db) throw new Error('Firebase no disponible');
      code = this.normalizeCode(code);
      if (!this.isValidCodeFormat(code)) throw new Error('Formato de código inválido');
      const snap = await this.db.ref('progress/' + code).get();
      if (!snap.exists()) throw new Error('Código no encontrado');
      const data = snap.val() || {};
      this.code = code;
      this.nombre = data.nombre || null;
      this.paths = data.paths || {};
      this.cacheCode(code);
      // Best-effort timestamp; ignore failures
      this.db.ref('progress/' + code + '/ultimo_acceso').set(new Date().toISOString()).catch(() => {});
      return true;
    },

    async create(nombre) {
      if (!this.db) throw new Error('Firebase no disponible');
      let code = null;
      for (let i = 0; i < 5; i++) {
        const candidate = this.generateCode();
        const snap = await this.db.ref('progress/' + candidate).get();
        if (!snap.exists()) { code = candidate; break; }
      }
      if (!code) throw new Error('No se pudo generar un código único');
      const data = {
        nombre: nombre || '',
        creado: new Date().toISOString(),
        ultimo_acceso: new Date().toISOString()
      };
      await this.db.ref('progress/' + code).set(data);
      this.code = code;
      this.nombre = nombre || null;
      this.paths = {};
      this.cacheCode(code);
      return code;
    },

    async toggleModule(pathId, moduleId) {
      if (!this.code || !this.db) return false;
      if (!this.paths[pathId]) this.paths[pathId] = [];
      const arr = this.paths[pathId];
      const idx = arr.indexOf(moduleId);
      if (idx >= 0) arr.splice(idx, 1);
      else arr.push(moduleId);
      if (arr.length === 0) delete this.paths[pathId];
      const writeVal = Object.keys(this.paths).length ? this.paths : null;
      await this.db.ref('progress/' + this.code + '/paths').set(writeVal);
      return true;
    },

    isModuleCompleted(pathId, moduleId) {
      return (this.paths[pathId] || []).includes(moduleId);
    },

    onReady(cb) {
      if (this._ready) cb();
      else this._onReadyCbs.push(cb);
    },

    _fireReady() {
      this._ready = true;
      this._onReadyCbs.forEach(cb => { try { cb(); } catch (e) { console.error(e); } });
      this._onReadyCbs = [];
    }
  };

  // ============================================================
  // AUTH SCREEN — UI for entering or generating a code
  // ============================================================
  const AuthScreen = {
    el: null,
    state: 'welcome', // welcome | enter | createName | showCode

    mount() {
      if (this.el) return;
      const overlay = document.createElement('div');
      overlay.id = 'svd-auth-overlay';
      overlay.innerHTML = `
        <style>
          #svd-auth-overlay {
            position: fixed;
            inset: 0;
            background: #faf7f2;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 300;
            padding: 20px;
          }
          #svd-auth-overlay .svd-auth-card {
            background: #ffffff;
            border: 1px solid #e8e2d6;
            border-radius: 14px;
            padding: 36px 32px;
            width: 100%;
            max-width: 440px;
            box-shadow: 0 6px 24px rgba(42, 38, 32, 0.08);
            text-align: center;
            font-family: 'Segoe UI', system-ui, sans-serif;
          }
          #svd-auth-overlay h2 {
            font-size: 1.2rem;
            font-weight: 600;
            color: #2a2620;
            margin-bottom: 12px;
            letter-spacing: 0.05em;
          }
          #svd-auth-overlay p {
            color: #6a6358;
            font-size: 14px;
            line-height: 1.5;
            margin-bottom: 20px;
          }
          #svd-auth-overlay .svd-auth-actions {
            display: flex;
            flex-direction: column;
            gap: 10px;
          }
          #svd-auth-overlay button {
            padding: 12px 18px;
            border-radius: 8px;
            border: 1px solid #d4ccba;
            background: #ffffff;
            color: #2a2620;
            font-size: 14px;
            cursor: pointer;
            font-family: inherit;
            transition: all 0.2s;
            font-weight: 500;
          }
          #svd-auth-overlay button:hover {
            background: #f2ede2;
            border-color: #7a6a3d;
          }
          #svd-auth-overlay button.primary {
            background: #4a6a3a;
            border-color: #4a6a3a;
            color: #ffffff;
          }
          #svd-auth-overlay button.primary:hover {
            background: #3a5a2a;
            border-color: #3a5a2a;
          }
          #svd-auth-overlay button.link {
            background: none;
            border: none;
            color: #6a6358;
            text-decoration: underline;
            padding: 8px;
          }
          #svd-auth-overlay input {
            width: 100%;
            padding: 12px 14px;
            border: 1px solid #d4ccba;
            border-radius: 8px;
            background: #faf7f2;
            color: #2a2620;
            font-size: 15px;
            font-family: inherit;
            margin-bottom: 14px;
            outline: none;
            text-align: center;
          }
          #svd-auth-overlay input:focus {
            background: #ffffff;
            border-color: #7a6a3d;
          }
          #svd-auth-overlay input.code-input {
            font-family: 'Courier New', monospace;
            font-size: 20px;
            letter-spacing: 0.15em;
            font-weight: bold;
            color: #7a6a3d;
          }
          #svd-auth-overlay .svd-code-display {
            background: #f2ede2;
            border: 2px dashed #7a6a3d;
            border-radius: 10px;
            padding: 20px 16px;
            margin: 18px 0;
            font-family: 'Courier New', monospace;
            font-size: 28px;
            font-weight: bold;
            color: #2a2620;
            letter-spacing: 0.15em;
          }
          #svd-auth-overlay .svd-warn {
            background: #fef5e6;
            border: 1px solid #d4c08a;
            border-radius: 8px;
            padding: 12px 14px;
            color: #6a5520;
            font-size: 13px;
            margin: 16px 0;
            text-align: left;
          }
          #svd-auth-overlay .svd-error {
            color: #a83a3a;
            font-size: 13px;
            margin-top: 8px;
            min-height: 18px;
          }
          #svd-auth-overlay .svd-back {
            margin-top: 14px;
          }
        </style>
        <div class="svd-auth-card" id="svd-auth-card"></div>
      `;
      document.body.appendChild(overlay);
      this.el = overlay;
      this.render();
    },

    show() {
      this.mount();
      this.el.style.display = 'flex';
      this.render();
    },

    hide() {
      if (this.el) this.el.style.display = 'none';
    },

    render() {
      const card = document.getElementById('svd-auth-card');
      if (!card) return;
      if (this.state === 'welcome') {
        card.innerHTML = `
          <h2>🎓 Tu progreso</h2>
          <p>Para guardar tu avance y poder retomar desde cualquier computadora, usamos un código único.</p>
          <div class="svd-auth-actions">
            <button class="primary" onclick="SVDAuth.go('createName')">Soy nuevo, generar mi código</button>
            <button onclick="SVDAuth.go('enter')">Ya tengo un código</button>
          </div>
        `;
      } else if (this.state === 'enter') {
        card.innerHTML = `
          <h2>Ingresá tu código</h2>
          <p>Tipealo tal como lo anotaste.</p>
          <input type="text" id="svd-code-in" class="code-input" placeholder="SVD-XXXX-XXXX" maxlength="16" />
          <div class="svd-auth-actions">
            <button class="primary" id="svd-code-submit">Continuar</button>
            <button class="link" onclick="SVDAuth.go('welcome')">← Volver</button>
          </div>
          <div class="svd-error" id="svd-code-error"></div>
        `;
        const input = document.getElementById('svd-code-in');
        input.focus();
        input.addEventListener('keydown', e => { if (e.key === 'Enter') this.submitCode(); });
        document.getElementById('svd-code-submit').addEventListener('click', () => this.submitCode());
      } else if (this.state === 'createName') {
        card.innerHTML = `
          <h2>¿Cómo te llamás?</h2>
          <p>Tu nombre va a aparecer en los certificados que ganes. Podés dejarlo en blanco si preferís.</p>
          <input type="text" id="svd-name-in" placeholder="Tu nombre" maxlength="60" />
          <div class="svd-auth-actions">
            <button class="primary" id="svd-name-submit">Generar mi código</button>
            <button class="link" onclick="SVDAuth.go('welcome')">← Volver</button>
          </div>
          <div class="svd-error" id="svd-name-error"></div>
        `;
        const input = document.getElementById('svd-name-in');
        input.focus();
        input.addEventListener('keydown', e => { if (e.key === 'Enter') this.submitName(); });
        document.getElementById('svd-name-submit').addEventListener('click', () => this.submitName());
      } else if (this.state === 'showCode') {
        card.innerHTML = `
          <h2>¡Listo${SVDProgress.nombre ? ', ' + escapeHtml(SVDProgress.nombre) : ''}!</h2>
          <p>Tu código de progreso es:</p>
          <div class="svd-code-display">${escapeHtml(SVDProgress.code)}</div>
          <div class="svd-warn">
            <strong>Anotalo en un papel ahora.</strong><br>
            Es la única forma de retomar tu progreso desde otra computadora. Si lo perdés, no se puede recuperar.
          </div>
          <button class="primary" onclick="SVDAuth.finish()">Continuar a los cursos</button>
        `;
      }
    },

    go(state) {
      this.state = state;
      this.render();
    },

    async submitCode() {
      const input = document.getElementById('svd-code-in');
      const errEl = document.getElementById('svd-code-error');
      const submitBtn = document.getElementById('svd-code-submit');
      const raw = input.value.trim();
      errEl.textContent = '';
      if (!raw) { errEl.textContent = 'Ingresá tu código'; return; }
      submitBtn.disabled = true;
      submitBtn.textContent = 'Verificando...';
      try {
        await SVDProgress.load(raw);
        this.finish();
      } catch (e) {
        errEl.textContent = e.message || 'No se pudo verificar el código';
        submitBtn.disabled = false;
        submitBtn.textContent = 'Continuar';
      }
    },

    async submitName() {
      const input = document.getElementById('svd-name-in');
      const errEl = document.getElementById('svd-name-error');
      const submitBtn = document.getElementById('svd-name-submit');
      const name = (input.value || '').trim();
      errEl.textContent = '';
      submitBtn.disabled = true;
      submitBtn.textContent = 'Generando...';
      try {
        await SVDProgress.create(name);
        this.go('showCode');
      } catch (e) {
        errEl.textContent = e.message || 'No se pudo generar el código';
        submitBtn.disabled = false;
        submitBtn.textContent = 'Generar mi código';
      }
    },

    finish() {
      this.hide();
      SVDProgress._fireReady();
    }
  };

  // ============================================================
  // BOOTSTRAP
  // ============================================================
  async function bootstrap() {
    SVDProgress.init();
    if (!SVDProgress.db) {
      // Firebase failed; still allow page to render but progress won't persist
      console.warn('Progress tracking is offline.');
      SVDProgress._fireReady();
      return;
    }

    const cached = SVDProgress.getCachedCode();
    if (cached) {
      try {
        await SVDProgress.load(cached);
        SVDProgress._fireReady();
        return;
      } catch (e) {
        console.warn('Cached code no longer valid, prompting again:', e.message);
        SVDProgress.clearCache();
      }
    }
    AuthScreen.show();
  }

  function escapeHtml(s) {
    if (s === undefined || s === null) return '';
    const d = document.createElement('div');
    d.textContent = String(s);
    return d.innerHTML;
  }

  // Public API
  window.SVDProgress = SVDProgress;
  window.SVDAuth = AuthScreen;
  window.SVDProgress.changeCode = function () {
    SVDProgress.clearCache();
    AuthScreen.state = 'welcome';
    AuthScreen.show();
  };

  // Start
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootstrap);
  } else {
    bootstrap();
  }
})();
