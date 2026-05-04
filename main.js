@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@300;400;500&family=Lora:ital,wght@0,400;0,500;1,400&display=swap');

:root {
  --bg: #0a0a08;
  --surface: #111110;
  --surface2: #1a1a18;
  --border: #2a2a26;
  --accent: #e8c547;
  --accent2: #4ecdc4;
  --accent3: #ff6b47;
  --text: #f0ede6;
  --text-muted: #8a8880;
  --text-dim: #5a5855;
  --green: #5dde8a;
  --radius: 12px;
}

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  font-family: 'Lora', Georgia, serif;
  background: var(--bg);
  color: var(--text);
  min-height: 100vh;
  overflow-x: hidden;
}

body::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 9999;
  opacity: 0.4;
}

/* ── SIDEBAR ── */
.sidebar {
  position: fixed;
  left: 0; top: 0; bottom: 0;
  width: 280px;
  background: var(--surface);
  border-right: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  z-index: 100;
  transition: transform 0.3s ease;
  overflow: hidden;
}

.sidebar-logo {
  padding: 28px 24px 20px;
  border-bottom: 1px solid var(--border);
  flex-shrink: 0;
}

.logo-badge {
  font-family: 'DM Mono', monospace;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.15em;
  color: var(--accent);
  background: rgba(232,197,71,0.12);
  border: 1px solid rgba(232,197,71,0.25);
  padding: 4px 10px;
  border-radius: 4px;
  display: inline-block;
  margin-bottom: 10px;
  text-transform: uppercase;
  text-decoration: none;
}

.logo-title {
  font-family: 'Syne', sans-serif;
  font-size: 22px;
  font-weight: 800;
  color: var(--text);
  line-height: 1.1;
  text-decoration: none;
  display: block;
}

.logo-title span { color: var(--accent); }

.sidebar-progress {
  padding: 16px 24px;
  border-bottom: 1px solid var(--border);
  flex-shrink: 0;
}

.progress-label {
  font-family: 'DM Mono', monospace;
  font-size: 10px;
  color: var(--text-muted);
  letter-spacing: 0.1em;
  margin-bottom: 8px;
  text-transform: uppercase;
}

.progress-bar-track {
  background: var(--surface2);
  border-radius: 99px;
  height: 6px;
  overflow: hidden;
}

.progress-bar-fill {
  background: linear-gradient(90deg, var(--accent), var(--accent2));
  height: 100%;
  border-radius: 99px;
  transition: width 0.5s ease;
}

.progress-count {
  font-family: 'DM Mono', monospace;
  font-size: 11px;
  color: var(--text-muted);
  margin-top: 6px;
}

.sidebar-nav {
  flex: 1;
  overflow-y: auto;
  padding: 12px 0;
}

.sidebar-nav::-webkit-scrollbar { width: 4px; }
.sidebar-nav::-webkit-scrollbar-track { background: transparent; }
.sidebar-nav::-webkit-scrollbar-thumb { background: var(--border); border-radius: 99px; }

.module-group { margin-bottom: 4px; }

.module-header {
  padding: 10px 24px;
  font-family: 'DM Mono', monospace;
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text-dim);
  display: flex;
  align-items: center;
  gap: 8px;
}

.module-header::after {
  content: '';
  flex: 1;
  height: 1px;
  background: var(--border);
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 24px;
  cursor: pointer;
  transition: all 0.15s ease;
  border-left: 2px solid transparent;
  text-decoration: none;
  color: inherit;
}

.nav-item:hover { background: var(--surface2); }

.nav-item.active {
  background: rgba(232,197,71,0.07);
  border-left-color: var(--accent);
}

.nav-item.completed .nav-dot { background: var(--green); }

.nav-dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: var(--border);
  flex-shrink: 0;
  transition: background 0.3s;
}

.nav-item.active .nav-dot { background: var(--accent); }

.nav-text {
  font-family: 'DM Mono', monospace;
  font-size: 11px;
  color: var(--text-muted);
  line-height: 1.4;
  flex: 1;
}

.nav-item.active .nav-text { color: var(--text); }
.nav-item.completed .nav-text { color: var(--text-muted); }

.nav-check {
  font-size: 10px;
  color: var(--green);
  opacity: 0;
  transition: opacity 0.3s;
}

.nav-item.completed .nav-check { opacity: 1; }

/* ── MAIN ── */
.main {
  margin-left: 280px;
  min-height: 100vh;
}

/* ── LESSON PAGE ── */
.lesson-page {
  padding: 60px 64px;
  max-width: 820px;
  animation: fadeIn 0.4s ease;
}

.lesson-breadcrumb {
  font-family: 'DM Mono', monospace;
  font-size: 10px;
  color: var(--text-dim);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 32px;
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.lesson-breadcrumb a {
  color: var(--text-dim);
  text-decoration: none;
}

.lesson-breadcrumb a:hover { color: var(--accent); }
.lesson-breadcrumb span { color: var(--accent); }

.lesson-title {
  font-family: 'Syne', sans-serif;
  font-size: clamp(28px, 4vw, 44px);
  font-weight: 800;
  line-height: 1.15;
  margin-bottom: 16px;
}

.lesson-meta {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 40px;
  padding-bottom: 32px;
  border-bottom: 1px solid var(--border);
}

.lesson-tag {
  font-family: 'DM Mono', monospace;
  font-size: 10px;
  color: var(--text-muted);
  background: var(--surface2);
  border: 1px solid var(--border);
  padding: 4px 10px;
  border-radius: 4px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.lesson-body {
  font-size: 16px;
  line-height: 1.85;
  color: #d8d5ce;
}

.lesson-body h3 {
  font-family: 'Syne', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: var(--text);
  margin: 40px 0 16px;
}

.lesson-body p { margin-bottom: 20px; }

.lesson-body ul {
  list-style: none;
  margin-bottom: 20px;
}

.lesson-body ul li {
  padding: 8px 0 8px 24px;
  position: relative;
  border-bottom: 1px solid rgba(255,255,255,0.04);
}

.lesson-body ul li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--accent);
  font-family: 'DM Mono', monospace;
}

.callout {
  background: var(--surface2);
  border-left: 3px solid var(--accent);
  border-radius: 0 var(--radius) var(--radius) 0;
  padding: 20px 24px;
  margin: 28px 0;
  font-style: italic;
  color: var(--text-muted);
  font-size: 15px;
}

.callout strong { color: var(--accent); font-style: normal; }

.info-box {
  background: rgba(78,205,196,0.07);
  border: 1px solid rgba(78,205,196,0.2);
  border-radius: var(--radius);
  padding: 20px 24px;
  margin: 24px 0;
}

.info-box-label {
  font-family: 'DM Mono', monospace;
  font-size: 10px;
  color: var(--accent2);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.info-box p { color: var(--text-muted); font-size: 14px; margin: 0; }

.platform-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin: 24px 0;
}

.platform-chip {
  background: var(--surface2);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 14px 16px;
  text-align: center;
  font-family: 'DM Mono', monospace;
  font-size: 11px;
  color: var(--text-muted);
  letter-spacing: 0.05em;
}

.platform-chip .icon { font-size: 20px; display: block; margin-bottom: 6px; }

/* ── QUIZ ── */
.quiz-section {
  margin-top: 48px;
  padding-top: 40px;
  border-top: 1px solid var(--border);
}

.quiz-label {
  font-family: 'DM Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 20px;
}

.quiz-question {
  font-family: 'Syne', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 20px;
  line-height: 1.4;
}

.quiz-options {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 24px;
}

.quiz-option {
  background: var(--surface2);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 16px 20px;
  cursor: pointer;
  font-family: 'DM Mono', monospace;
  font-size: 12px;
  color: var(--text-muted);
  transition: all 0.15s;
  display: flex;
  align-items: center;
  gap: 12px;
  text-align: left;
  width: 100%;
}

.quiz-option:hover { border-color: rgba(232,197,71,0.4); color: var(--text); }
.quiz-option.selected { border-color: var(--accent); background: rgba(232,197,71,0.08); color: var(--text); }
.quiz-option.correct { border-color: var(--green); background: rgba(93,222,138,0.08); color: var(--green); }
.quiz-option.wrong { border-color: var(--accent3); background: rgba(255,107,71,0.08); color: var(--accent3); }

.option-letter {
  width: 24px; height: 24px;
  border-radius: 6px;
  background: var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 500;
  flex-shrink: 0;
}

.quiz-option.selected .option-letter { background: var(--accent); color: var(--bg); }
.quiz-option.correct .option-letter { background: var(--green); color: var(--bg); }
.quiz-option.wrong .option-letter { background: var(--accent3); color: #fff; }

.quiz-feedback {
  display: none;
  padding: 16px 20px;
  border-radius: var(--radius);
  font-family: 'DM Mono', monospace;
  font-size: 12px;
  margin-bottom: 20px;
  line-height: 1.6;
}

.quiz-feedback.show-correct { background: rgba(93,222,138,0.1); border: 1px solid rgba(93,222,138,0.3); color: var(--green); display: block; }
.quiz-feedback.show-wrong { background: rgba(255,107,71,0.1); border: 1px solid rgba(255,107,71,0.3); color: var(--accent3); display: block; }

/* ── NAV BUTTONS ── */
.lesson-nav {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 48px;
  padding-top: 40px;
  border-top: 1px solid var(--border);
}

.btn-nav {
  font-family: 'DM Mono', monospace;
  font-size: 12px;
  padding: 14px 24px;
  border-radius: var(--radius);
  cursor: pointer;
  transition: all 0.2s;
  border: 1px solid var(--border);
  background: var(--surface2);
  color: var(--text-muted);
  letter-spacing: 0.05em;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
}

.btn-nav:hover { border-color: var(--text-muted); color: var(--text); }

.btn-nav-primary {
  background: var(--accent);
  color: var(--bg);
  border-color: var(--accent);
  font-weight: 500;
}

.btn-nav-primary:hover { background: #f0d060; color: var(--bg); border-color: #f0d060; }

.btn-complete {
  background: transparent;
  color: var(--green);
  border-color: var(--green);
  font-weight: 500;
}

.btn-complete:hover { background: rgba(93,222,138,0.1); }

/* ── HOMEPAGE ── */
.hero {
  padding: 80px 64px;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 60% 60% at 80% 20%, rgba(232,197,71,0.08) 0%, transparent 70%),
    radial-gradient(ellipse 40% 50% at 20% 80%, rgba(78,205,196,0.06) 0%, transparent 70%);
  pointer-events: none;
}

.hero-eyebrow {
  font-family: 'DM Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 24px;
  opacity: 0;
  animation: fadeUp 0.6s 0.1s forwards;
}

.hero-title {
  font-family: 'Syne', sans-serif;
  font-size: clamp(48px, 6vw, 88px);
  font-weight: 800;
  line-height: 1.0;
  margin-bottom: 28px;
  opacity: 0;
  animation: fadeUp 0.6s 0.2s forwards;
}

.hero-title .line2 { color: var(--accent); }

.hero-subtitle {
  font-size: 18px;
  line-height: 1.7;
  color: var(--text-muted);
  max-width: 520px;
  margin-bottom: 48px;
  opacity: 0;
  animation: fadeUp 0.6s 0.3s forwards;
}

.hero-stats {
  display: flex;
  gap: 48px;
  margin-bottom: 48px;
  opacity: 0;
  animation: fadeUp 0.6s 0.4s forwards;
  flex-wrap: wrap;
}

.stat-num {
  font-family: 'Syne', sans-serif;
  font-size: 36px;
  font-weight: 800;
  color: var(--text);
  line-height: 1;
}

.stat-num span { color: var(--accent); }

.stat-label {
  font-family: 'DM Mono', monospace;
  font-size: 10px;
  color: var(--text-dim);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-top: 4px;
}

.hero-cta {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  opacity: 0;
  animation: fadeUp 0.6s 0.5s forwards;
}

.btn-primary {
  background: var(--accent);
  color: var(--bg);
  font-family: 'DM Mono', monospace;
  font-size: 13px;
  font-weight: 500;
  padding: 16px 32px;
  border: none;
  border-radius: var(--radius);
  cursor: pointer;
  transition: all 0.2s;
  letter-spacing: 0.05em;
  text-decoration: none;
  display: inline-block;
}

.btn-primary:hover { background: #f0d060; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(232,197,71,0.25); }

.btn-secondary {
  background: transparent;
  color: var(--text-muted);
  font-family: 'DM Mono', monospace;
  font-size: 13px;
  padding: 16px 32px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  cursor: pointer;
  transition: all 0.2s;
  letter-spacing: 0.05em;
  text-decoration: none;
  display: inline-block;
}

.btn-secondary:hover { border-color: var(--text-muted); color: var(--text); }

/* ── MODULES GRID ── */
.modules-section {
  padding: 0 64px 80px;
}

.modules-section-title {
  font-family: 'Syne', sans-serif;
  font-size: 28px;
  font-weight: 800;
  margin-bottom: 8px;
}

.modules-section-sub {
  font-family: 'DM Mono', monospace;
  font-size: 11px;
  color: var(--text-muted);
  margin-bottom: 32px;
  letter-spacing: 0.08em;
}

.modules-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 16px;
}

.module-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 24px;
  text-decoration: none;
  transition: all 0.2s;
  position: relative;
  overflow: hidden;
  display: block;
}

.module-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: var(--accent);
  opacity: 0;
  transition: opacity 0.2s;
}

.module-card:hover { border-color: rgba(232,197,71,0.3); transform: translateY(-3px); }
.module-card:hover::before { opacity: 1; }

.module-card-num {
  font-family: 'DM Mono', monospace;
  font-size: 10px;
  color: var(--text-dim);
  letter-spacing: 0.1em;
  margin-bottom: 12px;
}

.module-card-icon { font-size: 28px; margin-bottom: 12px; display: block; }

.module-card-title {
  font-family: 'Syne', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 8px;
  line-height: 1.3;
}

.module-card-desc {
  font-size: 13px;
  color: var(--text-muted);
  line-height: 1.6;
}

.module-card-lessons {
  font-family: 'DM Mono', monospace;
  font-size: 10px;
  color: var(--text-dim);
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid var(--border);
}

/* ── MODULE PAGE ── */
.module-page { padding: 60px 64px; max-width: 820px; }

.module-page-eyebrow {
  font-family: 'DM Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.15em;
  color: var(--text-dim);
  text-transform: uppercase;
  margin-bottom: 16px;
}

.module-page-eyebrow a { color: var(--text-dim); text-decoration: none; }
.module-page-eyebrow a:hover { color: var(--accent); }

.module-page-icon { font-size: 40px; margin-bottom: 16px; display: block; }

.module-page-title {
  font-family: 'Syne', sans-serif;
  font-size: clamp(32px, 4vw, 52px);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 16px;
}

.module-page-desc {
  font-size: 17px;
  color: var(--text-muted);
  line-height: 1.7;
  max-width: 560px;
  margin-bottom: 48px;
  padding-bottom: 40px;
  border-bottom: 1px solid var(--border);
}

.lessons-list { display: flex; flex-direction: column; gap: 12px; }

.lesson-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 20px 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  text-decoration: none;
  transition: all 0.2s;
}

.lesson-card:hover { border-color: rgba(232,197,71,0.3); transform: translateX(4px); }

.lesson-card-num {
  font-family: 'DM Mono', monospace;
  font-size: 11px;
  color: var(--text-dim);
  width: 28px;
  flex-shrink: 0;
}

.lesson-card-info { flex: 1; }

.lesson-card-title {
  font-family: 'Syne', sans-serif;
  font-size: 15px;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 4px;
}

.lesson-card-meta {
  font-family: 'DM Mono', monospace;
  font-size: 10px;
  color: var(--text-dim);
  letter-spacing: 0.08em;
}

.lesson-card-arrow {
  color: var(--text-dim);
  font-size: 18px;
  transition: color 0.2s;
}

.lesson-card:hover .lesson-card-arrow { color: var(--accent); }

/* ── MOBILE TOGGLE ── */
.mobile-toggle {
  display: none;
  position: fixed;
  top: 16px; left: 16px;
  z-index: 200;
  background: var(--surface);
  border: 1px solid var(--border);
  padding: 10px 14px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  color: var(--text);
}

/* ── ANIMATIONS ── */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* ── RESPONSIVE ── */
@media (max-width: 768px) {
  .sidebar { transform: translateX(-100%); }
  .sidebar.open { transform: translateX(0); }
  .main { margin-left: 0; }
  .hero { padding: 80px 24px 40px; }
  .modules-section { padding: 0 24px 60px; }
  .lesson-page { padding: 80px 24px 40px; }
  .module-page { padding: 80px 24px 40px; }
  .mobile-toggle { display: block; }
  .hero-stats { gap: 24px; }
  .platform-grid { grid-template-columns: repeat(2,1fr); }
  .modules-grid { grid-template-columns: 1fr; }
}
