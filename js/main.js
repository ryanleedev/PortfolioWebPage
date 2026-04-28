/**
 * main.js — App initialization
 * Handles: cursor, language switcher, typing animation,
 *          skills render, timeline render, projects render,
 *          scroll reveal, visitor counter.
 */

import { TYPING_EN, TYPING_KO, SKILLS, TIMELINE, PROJECTS } from './data.js';

/* ── CURSOR ──────────────────────────────────────── */
function initCursor() {
  const c = document.getElementById('cur');
  const r = document.getElementById('ring');
  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    c.style.left = mx + 'px'; c.style.top = my + 'px';
  });

  (function animate() {
    rx += (mx - rx) * .12;
    ry += (my - ry) * .12;
    r.style.left = rx + 'px'; r.style.top = ry + 'px';
    requestAnimationFrame(animate);
  })();

  document.querySelectorAll('a,button,.sr,.ti,.pc,.qq,.fc,.ec').forEach(el => {
    el.addEventListener('mouseenter', () => r.classList.add('h'));
    el.addEventListener('mouseleave', () => r.classList.remove('h'));
  });
}

/* ── LANGUAGE SWITCHER ───────────────────────────── */
let lang = 'en';

function applyLang() {
  document.querySelectorAll('[data-en]').forEach(el => {
    const v = el.getAttribute('data-' + lang) || el.getAttribute('data-en');
    if (el.tagName === 'INPUT') el.placeholder = v;
    else el.innerHTML = v;
  });
  document.querySelectorAll('.qq').forEach(b =>
    b.textContent = b.getAttribute('data-' + lang) || b.getAttribute('data-en')
  );
  document.getElementById('wmsg').textContent = lang === 'en'
    ? "Hey! 👋 I'm Ryan's AI assistant. Ask me anything about his experience, skills, or background."
    : "안녕하세요! 👋 라이언의 AI 어시스턴트입니다. 경력, 스킬, 배경에 대해 무엇이든 물어보세요.";
}

function initLang() {
  document.getElementById('lb').addEventListener('click', function () {
    lang = lang === 'en' ? 'ko' : 'en';
    this.textContent = lang === 'en' ? 'KO' : 'EN';
    applyLang();
    // reset typing animation
    tStr = lang === 'en' ? [...TYPING_EN] : [...TYPING_KO];
    tIdx = 0; cIdx = 0; del = false;
    document.getElementById('ttext').textContent = '';
    clearTimeout(tt);
    tloop();
  });
}

/* ── TYPING ANIMATION ────────────────────────────── */
let tStr = [...TYPING_EN], tIdx = 0, cIdx = 0, del = false, tt;

function tloop() {
  const s = tStr[tIdx];
  const el = document.getElementById('ttext');
  if (!del) {
    el.textContent = s.slice(0, ++cIdx);
    if (cIdx === s.length) { del = true; tt = setTimeout(tloop, 1800); return; }
  } else {
    el.textContent = s.slice(0, --cIdx);
    if (cIdx === 0) { del = false; tIdx = (tIdx + 1) % tStr.length; }
  }
  tt = setTimeout(tloop, del ? 55 : 100);
}

/* ── VISITOR COUNTER ─────────────────────────────── */
// function initVisitor() {
//   const vk = 'rlv3';
//   let vc = parseInt(localStorage.getItem(vk) || '0') + 1;
//   localStorage.setItem(vk, vc);
//   document.getElementById('vc').textContent = vc.toLocaleString();
//   fetch('https://api.ipify.org?format=json')
//     .then(r => r.json())
//     .then(d => document.getElementById('vip').textContent = d.ip)
//     .catch(() => document.getElementById('vip').textContent = 'hidden');
// }

/* ── RENDER SKILLS ───────────────────────────────── */
function renderSkills() {
  const skl  = document.getElementById('skl');
  const spop = document.getElementById('spop');
  const spb  = document.getElementById('spb');

  SKILLS.forEach((s, i) => {
    const row = document.createElement('div');
    row.className = 'sr rv';
    row.innerHTML = `
      <span class="srk">0${i + 1}</span>
      <span class="sn">${s.name}</span>
      <div class="sbw"><div class="sbf" data-p="${s.pct}"></div></div>
      <span class="sp2">${s.pct}%</span>
      <div class="sti">${s.tags.slice(0, 2).map(t => `<span class="sk">${t}</span>`).join('')}</div>`;

    row.addEventListener('mouseenter', e => {
      spb.innerHTML = s.projs.map(p =>
        `<div class="spi"><div class="spin">${p.n}</div><div class="spid">${p.d}</div></div>`
      ).join('');
      spop.style.left = (e.clientX + 16) + 'px';
      spop.style.top  = (e.clientY - 10) + 'px';
      spop.classList.add('show');
    });
    row.addEventListener('mousemove', e => {
      spop.style.left = (e.clientX + 16) + 'px';
      spop.style.top  = (e.clientY - 10) + 'px';
    });
    row.addEventListener('mouseleave', () => spop.classList.remove('show'));
    skl.appendChild(row);
  });
}

/* ── RENDER TIMELINE ─────────────────────────────── */
function renderTimeline() {
  const tl = document.getElementById('tl');

  TIMELINE.forEach(e => {
    const item = document.createElement('div');
    item.className = 'ti';
    item.innerHTML = `
      <div class="th">
        <div class="thl">
          <span class="tp">${e.p}</span>
          <span>
            <span class="tr">${e.r}</span>
            ${e.b ? `<span class="tbg">${e.b}</span>` : ''}
            <span class="tc2">— ${e.c}</span>
          </span>
          <span style="font-size:.75rem;color:var(--text3)">${e.l}</span>
        </div>
        <span class="tch">▾</span>
      </div>
      <div class="tb">
        <div class="tbd">
          <ul>${e.bl.map(b => `<li>${b}</li>`).join('')}</ul>
        </div>
      </div>`;

    item.querySelector('.th').addEventListener('click', () => {
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.ti').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
    tl.appendChild(item);
  });
}

/* ── RENDER PROJECTS ─────────────────────────────── */
function renderProjects() {
  const pg = document.getElementById('pg');

  PROJECTS.forEach(p => {
    const card = document.createElement('a');
    card.className = 'pc rv';
    card.href = p.u;
    if (p.u !== '#') card.target = '_blank';
    card.innerHTML = `
      <div class="plnk">↗</div>
      <span class="pico">${p.i}</span>
      <div class="pn">${p.n}</div>
      <div class="pd">${p.d}</div>
      <div class="pst">${p.st.map(t => `<span class="ptg">${t}</span>`).join('')}</div>`;
    pg.appendChild(card);
  });
}

/* ── SCROLL REVEAL + SKILL BARS ──────────────────── */
function initScrollReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('vis');
        e.target.querySelectorAll('.sbf').forEach(f =>
          setTimeout(() => f.style.width = f.dataset.p + '%', 150)
        );
      }
    });
  }, { threshold: .1 });

  document.querySelectorAll('.rv').forEach(el => obs.observe(el));
}

/* ── BOOT ─────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initCursor();
  initLang();
  tloop();
  // initVisitor();
  renderSkills();
  renderTimeline();
  renderProjects();
  initScrollReveal();
  initChat();
});
