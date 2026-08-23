/* ============================================================
   MUFIMUFI — data & state
   ============================================================ */
const AREAS = [
  {id:'rumah', name:'Rumah Mufi', icon:'🏠', color:'#FFE3C4', accent:'#FF8B5E', words:[
    {id:'r1', ar:'بَيْتٌ', tr:"bait", id_:'Rumah', em:'🏠'},
    {id:'r2', ar:'بَابٌ', tr:"baab", id_:'Pintu', em:'🚪'},
    {id:'r3', ar:'كُرْسِيٌّ', tr:"kursiy", id_:'Kursi', em:'🪑'},
    {id:'r4', ar:'مَطْبَخٌ', tr:"matbakh", id_:'Dapur', em:'🍳'},
    {id:'r5', ar:'غُرْفَةٌ', tr:"ghurfah", id_:'Kamar', em:'🛋️'},
    {id:'r6', ar:'سَرِيرٌ', tr:"sariir", id_:'Tempat tidur', em:'🛏️'},
    {id:'r7', ar:'مَكْتَبٌ', tr:"maktab", id_:'Meja', em:'📚'},
    {id:'r8', ar:'نَافِذَةٌ', tr:"naafidzah", id_:'Jendela', em:'🪟'},
  ]},
  {id:'sekolah', name:'Sekolah Ceria', icon:'🏫', color:'#D9F0FF', accent:'#57C4DB', words:[
    {id:'s1', ar:'مُعَلِّمٌ', tr:"mu'allim", id_:'Guru', em:'🧑\u200d🏫'},
    {id:'s2', ar:'طَالِبٌ', tr:"thaalib", id_:'Murid', em:'🧑\u200d🎓'},
    {id:'s3', ar:'كِتَابٌ', tr:"kitaab", id_:'Buku', em:'📖'},
    {id:'s4', ar:'قَلَمٌ', tr:"qalam", id_:'Pena', em:'✏️'},
    {id:'s5', ar:'حَقِيبَةٌ', tr:"haqiibah", id_:'Tas', em:'🎒'},
    {id:'s6', ar:'مَدْرَسَةٌ', tr:"madrasah", id_:'Sekolah', em:'🏫'},
    {id:'s7', ar:'سَبُّورَةٌ', tr:"sabbuurah", id_:'Papan tulis', em:'📋'},
    {id:'s8', ar:'فَصْلٌ', tr:"fashl", id_:'Kelas', em:'🚪'},
  ]},
  {id:'kebun', name:'Kebun Makanan', icon:'🍎', color:'#FFE7DF', accent:'#F4665A', words:[
    {id:'k1', ar:'تُفَّاحَةٌ', tr:"tuffaahah", id_:'Apel', em:'🍎'},
    {id:'k2', ar:'مَوْزَةٌ', tr:"mauzah", id_:'Pisang', em:'🍌'},
    {id:'k3', ar:'خُبْزٌ', tr:"khubz", id_:'Roti', em:'🍞'},
    {id:'k4', ar:'مَاءٌ', tr:"maa'", id_:'Air', em:'💧'},
    {id:'k5', ar:'لَحْمٌ', tr:"lahm", id_:'Daging', em:'🍖'},
    {id:'k6', ar:'أَرُزٌّ', tr:"aruzz", id_:'Nasi', em:'🍚'},
    {id:'k7', ar:'عَصِيرٌ', tr:"'ashiir", id_:'Jus', em:'🧃'},
    {id:'k8', ar:'بَيْضَةٌ', tr:"baidhah", id_:'Telur', em:'🥚'},
  ]},
  {id:'hutan', name:'Hutan Hewan', icon:'🐾', color:'#E6F4E1', accent:'#4FAE7A', words:[
    {id:'h1', ar:'قِطٌّ', tr:"qitt", id_:'Kucing', em:'🐱'},
    {id:'h2', ar:'كَلْبٌ', tr:"kalb", id_:'Anjing', em:'🐶'},
    {id:'h3', ar:'أَسَدٌ', tr:"asad", id_:'Singa', em:'🦁'},
    {id:'h4', ar:'فِيلٌ', tr:"fiil", id_:'Gajah', em:'🐘'},
    {id:'h5', ar:'قِرْدٌ', tr:"qird", id_:'Monyet', em:'🐒'},
    {id:'h6', ar:'طَائِرٌ', tr:"thaa'ir", id_:'Burung', em:'🐦'},
    {id:'h7', ar:'سَمَكَةٌ', tr:"samakah", id_:'Ikan', em:'🐟'},
    {id:'h8', ar:'أَرْنَبٌ', tr:"arnab", id_:'Kelinci', em:'🐰'},
  ]},
  {id:'keluarga', name:'Desa Keluarga', icon:'👨\u200d👩\u200d👧', color:'#FFE9F1', accent:'#E8703E', words:[
    {id:'f1', ar:'أَبٌ', tr:"ab", id_:'Ayah', em:'👨'},
    {id:'f2', ar:'أُمٌّ', tr:"umm", id_:'Ibu', em:'👩'},
    {id:'f3', ar:'أَخٌ', tr:"akh", id_:'Saudara laki-laki', em:'👦'},
    {id:'f4', ar:'أُخْتٌ', tr:"ukht", id_:'Saudara perempuan', em:'👧'},
    {id:'f5', ar:'جَدٌّ', tr:"jadd", id_:'Kakek', em:'👴'},
    {id:'f6', ar:'جَدَّةٌ', tr:"jaddah", id_:'Nenek', em:'👵'},
    {id:'f7', ar:'ابْنٌ', tr:"ibn", id_:'Anak laki-laki', em:'🧒'},
    {id:'f8', ar:'ابْنَةٌ', tr:"ibnah", id_:'Anak perempuan', em:'👧'},
  ]},
  {id:'taman', name:'Taman', icon:'🌳', color:'#EAF6E9', accent:'#38875D', words:[
    {id:'t1', ar:'شَجَرَةٌ', tr:"syajarah", id_:'Pohon', em:'🌳'},
    {id:'t2', ar:'زَهْرَةٌ', tr:"zahrah", id_:'Bunga', em:'🌸'},
    {id:'t3', ar:'عُشْبٌ', tr:"'usyb", id_:'Rumput', em:'🌿'},
    {id:'t4', ar:'شَمْسٌ', tr:"syams", id_:'Matahari', em:'☀️'},
    {id:'t5', ar:'سَمَاءٌ', tr:"samaa'", id_:'Langit', em:'☁️'},
    {id:'t6', ar:'نَهْرٌ', tr:"nahr", id_:'Sungai', em:'🏞️'},
    {id:'t7', ar:'حَدِيقَةٌ', tr:"hadiiqah", id_:'Taman', em:'🏡'},
    {id:'t8', ar:'طَرِيقٌ', tr:"thariiq", id_:'Jalan', em:'🛣️'},
  ]},
  {id:'kota', name:'Kota Bahasa Arab', icon:'🏙️', color:'#E8ECFF', accent:'#5B6FD8', words:[
    {id:'c1', ar:'مَدِينَةٌ', tr:"madiinah", id_:'Kota', em:'🏙️'},
    {id:'c2', ar:'سُوقٌ', tr:"suuq", id_:'Pasar', em:'🛒'},
    {id:'c3', ar:'مَسْجِدٌ', tr:"masjid", id_:'Masjid', em:'🕌'},
    {id:'c4', ar:'مُسْتَشْفَى', tr:"mustasyfaa", id_:'Rumah sakit', em:'🏥'},
    {id:'c5', ar:'شُرْطِيٌّ', tr:"syurthiy", id_:'Polisi', em:'👮'},
    {id:'c6', ar:'طَبِيبٌ', tr:"thabiib", id_:'Dokter', em:'🧑\u200d⚕️'},
    {id:'c7', ar:'سَيَّارَةٌ', tr:"sayyaarah", id_:'Mobil', em:'🚗'},
    {id:'c8', ar:'دَرَّاجَةٌ', tr:"darraajah", id_:'Sepeda', em:'🚲'},
  ]},
  {id:'istana', name:'Istana Mufradat', icon:'🏰', color:'#F5E6FF', accent:'#8B5FBF', words:[
    {id:'p1', ar:'مَلِكٌ', tr:"malik", id_:'Raja', em:'🤴'},
    {id:'p2', ar:'مَلِكَةٌ', tr:"malikah", id_:'Ratu', em:'👸'},
    {id:'p3', ar:'تَاجٌ', tr:"taaj", id_:'Mahkota', em:'👑'},
    {id:'p4', ar:'قَصْرٌ', tr:"qashr", id_:'Istana', em:'🏰'},
    {id:'p5', ar:'حَارِسٌ', tr:"haaris", id_:'Penjaga', em:'🛡️'},
    {id:'p6', ar:'سَيْفٌ', tr:"saif", id_:'Pedang', em:'⚔️'},
    {id:'p7', ar:'كَنْزٌ', tr:"kanz", id_:'Harta', em:'💎'},
    {id:'p8', ar:'مِفْتَاحٌ', tr:"miftaah", id_:'Kunci', em:'🔑'},
  ]},
];
const ALL_WORDS = {}; AREAS.forEach(a=>a.words.forEach(w=>ALL_WORDS[w.id]=({...w, areaId:a.id})));

const BADGES_DEF = [
  {id:'first', name:'First Word', em:'🥇', cond:s=>totalCollected(s)>=1},
  {id:'explorer', name:'Vocabulary Explorer', em:'🧭', cond:s=>totalCollected(s)>=20},
  {id:'collector', name:'Word Collector', em:'🎒', cond:s=>totalCollected(s)>=50},
  {id:'hero', name:'Arabic Hero', em:'🦸', cond:s=>completedAreasCount(s)>=5},
  {id:'master', name:'Mufradat Master', em:'👑', cond:s=>completedAreasCount(s)>=8},
];

function freshProfile(name, extra){
  const areaProgress = {};
  AREAS.forEach((a,i)=>{
    areaProgress[a.id] = { unlocked: i===0, completed:false, words:{} };
    a.words.forEach(w=> areaProgress[a.id].words[w.id] = {status:'red', correct:0, wrong:0, mastery:0, learned:false});
  });
  return {
    uid: 'mufi_'+Math.random().toString(36).slice(2,9),
    name, age:extra.age||'', gender:extra.gender||'', grade:extra.grade||'', school:extra.school||'',
    xp:0, point:0, badges:[], areaProgress, createdAt: Date.now()
  };
}

function totalCollected(s){ let c=0; Object.values(s.areaProgress).forEach(ap=>Object.values(ap.words).forEach(w=>{if(w.learned)c++;})); return c; }
function totalMastered(s){ let c=0; Object.values(s.areaProgress).forEach(ap=>Object.values(ap.words).forEach(w=>{if(w.status==='green')c++;})); return c; }
function completedAreasCount(s){ return Object.values(s.areaProgress).filter(a=>a.completed).length; }
function areaPercent(s, areaId){ const ap=s.areaProgress[areaId]; const ws=Object.values(ap.words); const learned=ws.filter(w=>w.learned).length; return Math.round(learned/ws.length*100); }
function playerTitleLevel(s){ return Math.min(8, 1+Math.floor(s.xp/150)); }
const TITLES = ['Mufi Pemula','Mufi Penjelajah','Mufi Pencari','Mufi Petualang','Mufi Pemberani','Mufi Cendekia','Mufi Ahli','Mufi Legenda'];

/* ============================================================
   STORAGE (persistent, per-user personal + shared admin index)
   ============================================================ */
async function storageGet(key, shared=false){
  try{ const r = await window.storage.get(key, shared); return r? JSON.parse(r.value): null; }catch(e){ return null; }
}
async function storageSet(key, value, shared=false){
  try{ await window.storage.set(key, JSON.stringify(value), shared); }catch(e){ console.warn('storage set failed', e); }
}
async function saveProfile(){
  await storageSet('profile', state.profile, false);
  await storageSet('admin_users:'+state.profile.uid, {
    uid: state.profile.uid, name: state.profile.name, grade: state.profile.grade,
    xp: state.profile.xp, point: state.profile.point,
    collected: totalCollected(state.profile), mastered: totalMastered(state.profile),
    areasCompleted: completedAreasCount(state.profile), updatedAt: Date.now()
  }, true);
}

/* ============================================================
   APP STATE
   ============================================================ */
let state = {
  screen: 'loading',
  profile: null,
  authMode: 'login',
  activeAreaId: null,
  quiz: null,
  learnIndex: 0,
  progressPrev: null,
};

async function boot(){
  const p = await storageGet('profile', false);
  if(p){ state.profile = migrateProfile(p); state.screen='dashboard'; }
  else { state.screen = 'auth'; }
  render();
}
function migrateProfile(p){
  // ensure new areas/words exist if data model grows
  AREAS.forEach((a,i)=>{
    if(!p.areaProgress[a.id]) p.areaProgress[a.id] = {unlocked:i===0, completed:false, words:{}};
    a.words.forEach(w=>{ if(!p.areaProgress[a.id].words[w.id]) p.areaProgress[a.id].words[w.id]={status:'red',correct:0,wrong:0,mastery:0,learned:false}; });
  });
  if(!p.badges) p.badges=[];
  return p;
}

function goto(screen, extra){ state.screen = screen; if(extra) Object.assign(state, extra); render(); window.scrollTo(0,0); }

/* ============================================================
   MASCOT SVG
   ============================================================ */
function mufiSVG(mood='happy', size=90){
  const eyes = {
    happy: '<path d="M34 40 Q38 34 42 40" stroke="#3E2E4D" stroke-width="3.2" fill="none" stroke-linecap="round"/><path d="M58 40 Q62 34 66 40" stroke="#3E2E4D" stroke-width="3.2" fill="none" stroke-linecap="round"/>',
    blink: '<circle cx="38" cy="39" r="3.4" fill="#3E2E4D"/><circle cx="62" cy="39" r="3.4" fill="#3E2E4D"/>',
    sad: '<path d="M34 42 Q38 47 42 42" stroke="#3E2E4D" stroke-width="3.2" fill="none" stroke-linecap="round"/><path d="M58 42 Q62 47 66 42" stroke="#3E2E4D" stroke-width="3.2" fill="none" stroke-linecap="round"/>',
    think: '<circle cx="38" cy="39" r="3.4" fill="#3E2E4D"/><path d="M58 40 Q62 34 66 40" stroke="#3E2E4D" stroke-width="3.2" fill="none" stroke-linecap="round"/>',
    excited: '<path d="M32 36 Q38 28 44 36" stroke="#3E2E4D" stroke-width="3.4" fill="none" stroke-linecap="round"/><path d="M56 36 Q62 28 68 36" stroke="#3E2E4D" stroke-width="3.4" fill="none" stroke-linecap="round"/>',
  };
  const mouth = {
    happy:'<path d="M40 54 Q50 64 60 54" stroke="#3E2E4D" stroke-width="3.4" fill="none" stroke-linecap="round"/>',
    blink:'<path d="M40 54 Q50 64 60 54" stroke="#3E2E4D" stroke-width="3.4" fill="none" stroke-linecap="round"/>',
    sad:'<path d="M40 58 Q50 50 60 58" stroke="#3E2E4D" stroke-width="3.4" fill="none" stroke-linecap="round"/>',
    think:'<circle cx="50" cy="57" r="3" fill="#3E2E4D"/>',
    excited:'<ellipse cx="50" cy="56" rx="9" ry="7" fill="#3E2E4D"/><ellipse cx="50" cy="53" rx="6" ry="3" fill="#FF8B9E"/>',
  };
  const e = eyes[mood]||eyes.happy, m = mouth[mood]||mouth.happy;
  return `<svg class="mufi-wrap" width="${size}" height="${size}" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="88" rx="26" ry="6" fill="#3E2E4D" opacity=".08"/>
    <path d="M20 34 Q14 8 30 18 Q36 10 40 20 Z" fill="#FF9D6E"/>
    <path d="M80 34 Q86 8 70 18 Q64 10 60 20 Z" fill="#FF9D6E"/>
    <path d="M22 36 Q14 10 29 20" fill="#FFE0C7"/>
    <path d="M78 36 Q86 10 71 20" fill="#FFE0C7"/>
    <circle cx="50" cy="52" r="34" fill="#FFB07E"/>
    <ellipse cx="50" cy="60" rx="17" ry="13" fill="#FFF3E4"/>
    ${e}
    <ellipse cx="30" cy="52" rx="5" ry="3.5" fill="#FF8B9E" opacity=".7"/>
    <ellipse cx="70" cy="52" rx="5" ry="3.5" fill="#FF8B9E" opacity=".7"/>
    ${m}
    <path d="M50 20 Q56 8 68 12 Q60 18 62 26 Q54 24 50 20" fill="#57C4DB"/>
  </svg>`;
}

/* ============================================================
   RENDER ROOT
   ============================================================ */
function render(){
  const app = document.getElementById('app');
  let html = '';
  if(state.screen==='loading') html = `<div class="screen" style="text-align:center;padding-top:120px;">${mufiSVG('think',100)}<p class="muted" style="margin-top:14px;font-weight:800;">Memuat petualangan…</p></div>`;
  else if(state.screen==='auth') html = renderAuth();
  else if(state.screen==='dashboard') html = shell(renderDashboard(), 'dashboard');
  else if(state.screen==='map') html = shell(renderMap(), 'map');
  else if(state.screen==='area') html = shell(renderArea(), 'map', true);
  else if(state.screen==='learn') html = renderLearn();
  else if(state.screen==='quiz') html = renderQuiz();
  else if(state.screen==='collection') html = shell(renderCollection(), 'collection');
  else if(state.screen==='progress') html = shell(renderProgress(), 'progress');
  else if(state.screen==='profile') html = shell(renderProfile(), 'profile');
  else if(state.screen==='admin') html = renderAdmin();
  app.innerHTML = html;
  afterRender();
}

function shell(inner, activeNav, showBack){
  return `
  <div class="topbar">
    ${showBack?`<div class="back-btn" onclick="goto('map')">←</div>`:''}
    <h2>${screenTitle(activeNav)}</h2>
  </div>
  ${inner}
  <div class="bottomnav">
    ${navItem('dashboard','🏠','Beranda')}
    ${navItem('map','🗺️','Peta')}
    ${navItem('collection','🎒','Koleksi')}
    ${navItem('progress','📊','Progress')}
    ${navItem('profile','🙂','Profil')}
  </div>`;
}
function screenTitle(nav){
  return {dashboard:'MufiMufi', map:'Adventure Map', collection:'Koleksi Mufradatku', progress:'Progress Belajar', profile:'Profilku'}[nav]||'MufiMufi';
}
function navItem(id, icon, label){
  const active = state.screen===id;
  return `<div class="navitem ${active?'active':''}" onclick="goto('${id}')"><span class="ic">${icon}</span><span>${label}</span></div>`;
}

/* ============================================================
   AUTH
   ============================================================ */
function renderAuth(){
  const isLogin = state.authMode==='login';
  return `
  <div class="screen">
    <div class="auth-hero">
      <div class="float">${mufiSVG('excited',110)}</div>
      <div class="logo">MufiMufi</div>
      <p>Petualangan seru menghafal Mufradat 🌵✨</p>
    </div>
    <div class="tabs">
      <div class="tab ${isLogin?'active':''}" onclick="state.authMode='login';render();">Masuk</div>
      <div class="tab ${!isLogin?'active':''}" onclick="state.authMode='register';render();">Daftar Baru</div>
    </div>
    <div class="card">
      ${isLogin ? `
        <div class="field"><label>Nama Panggilan</label><input id="in-name" placeholder="Contoh: Aisyah"></div>
        <button class="btn btn-primary btn-block" onclick="doLogin()">🚀 Mulai Petualangan</button>
        <p class="muted" style="font-size:12px;margin-top:10px;text-align:center;">Data belajarmu tersimpan otomatis di perangkat ini.</p>
      `: `
        <div class="field"><label>Nama Panggilan</label><input id="reg-name" placeholder="Contoh: Aisyah"></div>
        <div class="row" style="gap:10px;">
          <div class="field" style="flex:1"><label>Umur</label><input id="reg-age" type="number" placeholder="8"></div>
          <div class="field" style="flex:1"><label>Jenis Kelamin</label>
            <select id="reg-gender"><option value="">Pilih</option><option>Laki-laki</option><option>Perempuan</option></select>
          </div>
        </div>
        <div class="field"><label>Tingkat Sekolah</label>
          <select id="reg-grade"><option value="">Pilih</option><option>TK</option><option>SD</option><option>SMP</option><option>SMA</option></select>
        </div>
        <div class="field"><label>Nama Sekolah</label><input id="reg-school" placeholder="Contoh: SD Cendekia"></div>
        <button class="btn btn-primary btn-block" onclick="doRegister()">🌟 Buat Petualangan Baru</button>
      `}
    </div>
    <p style="text-align:center;margin-top:16px;"><a href="#" onclick="goto('admin');return false;" style="color:var(--plum-soft);font-weight:700;font-size:13px;text-decoration:none;">🛠️ Masuk sebagai Admin</a></p>
  </div>`;
}
async function doLogin(){
  const name = document.getElementById('in-name').value.trim();
  if(!name){ toast('Isi dulu nama panggilanmu ya 🙂'); return; }
  const existing = await storageGet('profile', false);
  if(existing && existing.name.toLowerCase()===name.toLowerCase()){
    state.profile = migrateProfile(existing);
  } else {
    state.profile = freshProfile(name, {});
    await saveProfile();
  }
  goto('dashboard');
}
async function doRegister(){
  const name = document.getElementById('reg-name').value.trim();
  if(!name){ toast('Nama panggilan wajib diisi ya!'); return; }
  const extra = {
    age: document.getElementById('reg-age').value,
    gender: document.getElementById('reg-gender').value,
    grade: document.getElementById('reg-grade').value,
    school: document.getElementById('reg-school').value,
  };
  state.profile = freshProfile(name, extra);
  await saveProfile();
  goto('dashboard');
}

/* ============================================================
   DASHBOARD
   ============================================================ */
function renderDashboard(){
  const p = state.profile;
  const lvl = playerTitleLevel(p);
  const xpInLevel = p.xp % 150;
  return `
  <div class="screen">
    <div class="greet-card">
      <div class="row between">
        <div>
          <div style="font-weight:800;font-size:20px;">Halo, ${p.name}! 🌷</div>
          <div style="font-weight:700;opacity:.85;font-size:13px;margin-top:2px;">${TITLES[lvl-1]} · Level ${lvl}</div>
        </div>
        <div style="width:64px;">${mufiSVG('happy',64)}</div>
      </div>
      <div style="margin-top:14px;">
        <div class="row between" style="font-size:12px;font-weight:800;margin-bottom:4px;"><span>XP</span><span>${xpInLevel}/150</span></div>
        <div class="progress-track" style="background:rgba(255,255,255,.5)"><div class="progress-fill" style="width:${xpInLevel/150*100}%"></div></div>
      </div>
      <div class="stat-grid">
        <div class="stat-box"><div class="val">⭐ ${p.point}</div><div class="lbl">Point</div></div>
        <div class="stat-box"><div class="val">🎒 ${totalCollected(p)}</div><div class="lbl">Kosakata</div></div>
        <div class="stat-box"><div class="val">🏆 ${completedAreasCount(p)}/8</div><div class="lbl">Area Selesai</div></div>
      </div>
    </div>
    <button class="btn btn-primary btn-block" style="margin-top:20px;font-size:18px;padding:16px;" onclick="goto('map')">🗺️ Lanjutkan Petualangan</button>

    <div class="sectitle">Area Terakhir</div>
    ${renderContinueCard()}

    <div class="sectitle">Badge Terbaru</div>
    <div class="row" style="gap:10px;overflow-x:auto;padding-bottom:4px;">
      ${BADGES_DEF.map(b=>`<div class="badge-item ${b.cond(p)?'':'locked'}" style="min-width:84px;"><div class="em">${b.em}</div><div class="nm">${b.name}</div></div>`).join('')}
    </div>
  </div>`;
}
function renderContinueCard(){
  const p = state.profile;
  const cur = AREAS.find(a=>p.areaProgress[a.id].unlocked && !p.areaProgress[a.id].completed) || AREAS[AREAS.length-1];
  const pct = areaPercent(p, cur.id);
  return `<div class="card" onclick="goto('area',{activeAreaId:'${cur.id}'})" style="cursor:pointer;">
    <div class="row" style="gap:12px;">
      <div class="icon-badge" style="background:${cur.color};font-size:30px;">${cur.icon}</div>
      <div style="flex:1;">
        <div style="font-weight:800;">${cur.name}</div>
        <div class="progress-track" style="margin-top:6px;"><div class="progress-fill" style="width:${pct}%"></div></div>
        <div class="muted" style="font-size:12px;margin-top:4px;font-weight:700;">${pct}% kosakata dikumpulkan</div>
      </div>
    </div>
  </div>`;
}

/* ============================================================
   MAP
   ============================================================ */
function renderMap(){
  const p = state.profile;
  return `<div class="screen map-wrap">
    <p class="muted" style="text-align:center;font-weight:700;margin-bottom:16px;">Ikuti jejak Mufi menjelajahi negeri Mufradat ✨</p>
    ${AREAS.map((a,i)=>{
      const ap = p.areaProgress[a.id];
      const pct = areaPercent(p, a.id);
      const isCurrent = ap.unlocked && !ap.completed;
      const locked = !ap.unlocked;
      const prevDone = i===0 || p.areaProgress[AREAS[i-1].id].completed;
      return `
      ${i>0?`<div class="connector ${p.areaProgress[AREAS[i-1].id].completed?'done':''}"></div>`:''}
      <div class="node ${isCurrent?'current':''} ${locked?'locked':''}" onclick="${locked?'':`goto('area',{activeAreaId:'${a.id}'})`}">
        ${isCurrent?`<div class="mufi-onmap float">${mufiSVG('happy',34)}</div>`:''}
        <div class="icon-badge" style="background:${a.color};">${locked?'🔒':a.icon}</div>
        <div style="flex:1;">
          <div class="row between"><span style="font-weight:800;">${i+1}. ${a.name}</span> ${ap.completed?'<span class="status-chip" style="background:#EAF8F0;color:var(--leaf-dark);">✅ Selesai</span>':''}</div>
          ${locked ? `<div class="muted" style="font-size:12px;font-weight:700;margin-top:2px;">Selesaikan area sebelumnya untuk membuka 🔒</div>`
            : `<div class="progress-track" style="margin-top:6px;"><div class="progress-fill" style="width:${pct}%"></div></div><div class="muted" style="font-size:12px;font-weight:700;margin-top:4px;">${pct}% · ${Object.values(ap.words).filter(w=>w.learned).length}/${a.words.length} kosakata</div>`}
        </div>
      </div>`;
    }).join('')}
  </div>`;
}

/* ============================================================
   AREA DETAIL
   ============================================================ */
function renderArea(){
  const p = state.profile;
  const a = AREAS.find(x=>x.id===state.activeAreaId);
  const ap = p.areaProgress[a.id];
  const pct = areaPercent(p, a.id);
  const mastered = Object.values(ap.words).filter(w=>w.status==='green').length;
  const avgMastery = Math.round(Object.values(ap.words).reduce((s,w)=>s+w.mastery,0)/a.words.length);
  const medUnlocked = mastered>=Math.ceil(a.words.length*0.4) || pct>=100;
  const expUnlocked = mastered>=a.words.length*0.8;
  return `<div class="screen">
    <div class="card" style="text-align:center;background:${a.color};">
      <div style="font-size:40px;">${a.icon}</div>
      <h3 style="margin-top:4px;">${a.name}</h3>
      <div class="progress-track" style="margin-top:10px;background:rgba(255,255,255,.6);"><div class="progress-fill" style="width:${pct}%"></div></div>
      <div class="muted" style="font-size:12px;font-weight:800;margin-top:6px;">${pct}% dikumpulkan · ${mastered}/${a.words.length} dikuasai</div>
    </div>

    <button class="btn btn-sky btn-block" style="margin-top:16px;" onclick="startLearn('${a.id}')">📖 Pelajari Kosakata</button>

    <div class="sectitle">Pilih Tingkat Kesulitan</div>
    <div class="difftabs">
      <div class="difftab dactive-easy ${state._diff==='easy'||!state._diff?'active':''}" onclick="setDiff('easy')">🌱 Easy</div>
      <div class="difftab dactive-medium ${!medUnlocked?'locked':''} ${state._diff==='medium'?'active':''}" onclick="setDiff('medium')">🌟 Medium</div>
      <div class="difftab dactive-expert ${!expUnlocked?'locked':''} ${state._diff==='expert'?'active':''}" onclick="setDiff('expert')">🔥 Expert</div>
    </div>
    <button class="btn btn-primary btn-block" onclick="startQuiz('${a.id}', '${state._diff||'easy'}')">🎮 Main Mini Game</button>

    <div class="sectitle">Kosakata di Area Ini</div>
    <div style="display:flex;flex-direction:column;gap:8px;">
      ${a.words.map(w=>{
        const st = ap.words[w.id];
        return `<div class="vocab-card">
          <div class="vocab-emoji">${st.learned?w.em:'❔'}</div>
          <div style="flex:1;">
            <div class="row between"><span class="vocab-arabic arabic">${st.learned?w.ar:'• • •'}</span><span class="status-dot dot-${st.status}"></span></div>
            <div class="muted" style="font-size:12px;font-weight:700;">${st.learned? w.id_ : 'Belum ditemukan'}</div>
            <div class="mastery-track"><div class="mastery-fill" style="width:${st.mastery}%;"></div></div>
          </div>
        </div>`;
      }).join('')}
    </div>
  </div>`;
}
function setDiff(d){ state._diff = d; render(); }

/* ============================================================
   LEARN (word discovery flashcards)
   ============================================================ */
function startLearn(areaId){ state.activeAreaId = areaId; state.learnIndex = 0; goto('learn'); }
function renderLearn(){
  const a = AREAS.find(x=>x.id===state.activeAreaId);
  const w = a.words[state.learnIndex];
  const p = state.profile;
  const st = p.areaProgress[a.id].words[w.id];
  return `<div class="screen" style="padding-top:14px;">
    <div class="row between" style="margin-bottom:10px;">
      <div class="back-btn" onclick="goto('area',{activeAreaId:'${a.id}'})">←</div>
      <div class="pill">${state.learnIndex+1} / ${a.words.length}</div>
    </div>
    <div class="quiz-progress">${a.words.map((_,i)=>`<span class="${i<state.learnIndex?'done':(i===state.learnIndex?'now':'')}"></span>`).join('')}</div>

    <div class="card" style="text-align:center;padding:30px 18px;">
      <div style="font-size:52px;">${w.em}</div>
      <div style="margin:14px 0 6px;">${!st.learned?'✨✨✨<br><b>KOSAKATA BARU!</b>':''}</div>
      <div class="arabic" style="font-size:44px;color:var(--coral-dark);">${w.ar}</div>
      <div class="muted" style="font-weight:800;margin-top:4px;">${w.tr}</div>
      <div style="font-size:22px;font-weight:800;margin-top:8px;">${w.id_}</div>
      <button class="btn btn-ghost" style="margin-top:14px;" onclick="playAudio('${w.ar.replace(/'/g,"\\'")}')">🔊 Dengarkan</button>
    </div>

    <button class="btn btn-leaf btn-block" style="margin-top:18px;" onclick="collectWord('${a.id}','${w.id}')">🎒 ${st.learned? 'Lanjut':'Tambahkan ke Koleksi'}</button>
  </div>`;
}
function playAudio(text){
  try{
    const u = new SpeechSynthesisUtterance(text);
    u.lang='ar-SA'; u.rate=0.85;
    speechSynthesis.cancel(); speechSynthesis.speak(u);
  }catch(e){}
}
async function collectWord(areaId, wordId){
  const p = state.profile;
  const st = p.areaProgress[areaId].words[wordId];
  const firstTime = !st.learned;
  if(firstTime){
    st.learned = true; st.status='yellow'; st.mastery=Math.max(st.mastery,25);
    p.point += 2; p.xp += 5;
    checkNewBadges();
    await saveProfile();
  }
  const a = AREAS.find(x=>x.id===areaId);
  if(state.learnIndex < a.words.length-1){ state.learnIndex++; render(); }
  else { toast('🎉 Semua kosakata di area ini sudah dipelajari!'); goto('area',{activeAreaId:areaId}); }
}

/* ============================================================
   QUIZ / MINI GAME
   ============================================================ */
function shuffle(arr){ const a=[...arr]; for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]];} return a; }
function pickDistractors(pool, correctId, n){
  return shuffle(pool.filter(w=>w.id!==correctId)).slice(0,n);
}
function buildQuestion(word, allPool, difficulty){
  const distractors3 = pickDistractors(allPool, word.id, 3);
  const types = difficulty==='easy' ? ['emoji_choice','word_choice']
              : difficulty==='medium' ? ['meaning_choice','unscramble','fillblank']
              : ['type_answer','meaning_choice','situational'];
  const type = types[Math.floor(Math.random()*types.length)];
  if(type==='emoji_choice'){
    const opts = shuffle([word, ...distractors3]);
    return {type, word, prompt:`مَا هَذَا؟`, sub:'Pilih gambar yang sesuai kata ini', display:word.ar, opts, answer:word.id, mode:'emoji'};
  }
  if(type==='word_choice'){
    const opts = shuffle([word, ...distractors3]);
    return {type, word, prompt:word.em, sub:'Pilih kata Arab yang sesuai', display:word.em, opts, answer:word.id, mode:'arabic'};
  }
  if(type==='meaning_choice'){
    const opts = shuffle([word, ...distractors3]);
    return {type, word, prompt:word.ar, sub:'Apa artinya?', display:word.ar, opts, answer:word.id, mode:'meaning'};
  }
  if(type==='situational'){
    const opts = shuffle([word, ...distractors3]);
    return {type, word, prompt:`Benda ini digunakan untuk: "${word.id_}"`, sub:'Pilih kosakata Arab yang tepat', display:'🤔', opts, answer:word.id, mode:'arabic'};
  }
  if(type==='unscramble'){
    const letters = shuffle(word.tr.split(''));
    return {type, word, prompt:word.id_, sub:'Susun huruf transliterasi menjadi kata yang benar', letters, answer:word.tr};
  }
  if(type==='fillblank'){
    const idx = Math.floor(word.tr.length/2);
    const missing = word.tr[idx];
    const blanked = word.tr.slice(0,idx)+'_'+word.tr.slice(idx+1);
    const opts = shuffle([missing, ...shuffle('abcdefghijklmnopqrstuvwxyz'.split('').filter(c=>c!==missing)).slice(0,3)]);
    return {type, word, prompt:blanked, sub:`Lengkapi kata: ${word.id_}`, opts:opts.map(c=>({id:c,label:c})), answer:missing};
  }
  if(type==='type_answer'){
    return {type, word, prompt:word.id_, sub:'Ketik ejaan Arab (transliterasi)', answer:word.tr};
  }
}
function startQuiz(areaId, difficulty){
  if(difficulty==='medium'){
    const a = AREAS.find(x=>x.id===areaId); const p=state.profile;
    const mastered = Object.values(p.areaProgress[a.id].words).filter(w=>w.status==='green').length;
    if(mastered < Math.ceil(a.words.length*0.4)){ toast('🔒 Kuasai lebih banyak kosakata dulu untuk membuka Medium!'); return; }
  }
  if(difficulty==='expert'){
    const a = AREAS.find(x=>x.id===areaId); const p=state.profile;
    const mastered = Object.values(p.areaProgress[a.id].words).filter(w=>w.status==='green').length;
    if(mastered < a.words.length*0.8){ toast('🔒 Kuasai 80% kosakata dulu untuk membuka Expert!'); return; }
  }
  const a = AREAS.find(x=>x.id===areaId);
  const isBoss = areaId==='istana';
  let pool = a.words;
  if(isBoss){ pool = AREAS.flatMap(ar=>ar.words); }
  const learnedPool = pool.filter(w=> state.profile.areaProgress[wordAreaId(w.id)].words[w.id].learned);
  const usePool = learnedPool.length>=4? learnedPool : pool;
  const qCount = isBoss? Math.min(12, usePool.length) : Math.min(8, usePool.length);
  const chosenWords = shuffle(usePool).slice(0,qCount);
  const questions = chosenWords.map(w=>buildQuestion(w, usePool, difficulty));
  state.quiz = { areaId, difficulty, isBoss, questions, idx:0, correct:0, wrong:0, answered:false, selected:null, typedVal:'', unscrambleSel:[] };
  goto('quiz');
}
function wordAreaId(wid){ return ALL_WORDS[wid].areaId; }

function renderQuiz(){
  const q = state.quiz;
  const cur = q.questions[q.idx];
  const w = cur.word;
  let body = '';
  if(cur.type==='emoji_choice'){
    body = `<div class="opt-grid">${cur.opts.map(o=>`<div class="opt emoji-opt ${optClass(o.id)}" onclick="answerQuiz('${o.id}')">${o.em}</div>`).join('')}</div>`;
  } else if(cur.type==='word_choice' || cur.type==='situational'){
    body = `<div class="opt-grid">${cur.opts.map(o=>`<div class="opt arabic ${optClass(o.id)}" onclick="answerQuiz('${o.id}')">${o.ar}</div>`).join('')}</div>`;
  } else if(cur.type==='meaning_choice'){
    body = `<div class="opt-grid">${cur.opts.map(o=>`<div class="opt ${optClass(o.id)}" onclick="answerQuiz('${o.id}')">${o.id_}</div>`).join('')}</div>`;
  } else if(cur.type==='fillblank'){
    body = `<div class="opt-grid">${cur.opts.map(o=>`<div class="opt ${optClassLetter(o.id)}" onclick="answerQuiz('${o.id}')">${o.label}</div>`).join('')}</div>`;
  } else if(cur.type==='unscramble'){
    const chosen = q.unscrambleSel.map(i=>cur.letters[i]).join('');
    body = `
      <div class="card" style="text-align:center;margin-bottom:14px;"><div class="arabic" style="font-size:30px;">${w.ar}</div><div style="font-size:20px;font-weight:800;margin-top:6px;letter-spacing:2px;">${chosen||'&nbsp;'}</div></div>
      <div style="text-align:center;">${cur.letters.map((l,i)=>`<span class="tile ${q.unscrambleSel.includes(i)?'used':''}" onclick="pickLetter(${i})">${l}</span>`).join('')}</div>
      <button class="btn btn-ghost" style="margin-top:10px;" onclick="q.unscrambleSel=[];render();">↺ Ulangi Susunan</button>
      <button class="btn btn-primary btn-block" style="margin-top:10px;" onclick="submitUnscramble()" ${q.answered?'disabled':''}>✅ Periksa Jawaban</button>
    `;
  } else if(cur.type==='type_answer'){
    body = `
      <div class="card" style="text-align:center;margin-bottom:14px;"><div style="font-size:24px;">🖊️</div></div>
      <input id="typeIn" placeholder="Ketik transliterasi di sini..." ${q.answered?'disabled':''} value="${q.typedVal||''}" oninput="q.typedVal=this.value">
      <button class="btn btn-primary btn-block" style="margin-top:12px;" onclick="submitTyped()" ${q.answered?'disabled':''}>✅ Periksa Jawaban</button>
    `;
  }
  return `<div class="screen" style="padding-top:14px;">
    <div class="row between" style="margin-bottom:8px;">
      <div class="back-btn" onclick="exitQuiz()">✕</div>
      <div class="pill">⭐ ${q.correct*2} · ${q.idx+1}/${q.questions.length}</div>
    </div>
    <div class="quiz-progress">${q.questions.map((_,i)=>`<span class="${i<q.idx?'done':(i===q.idx?'now':'')}"></span>`).join('')}</div>
    <div class="quiz-prompt">
      <div style="width:56px;margin:0 auto 8px;">${mufiSVG(q.answered? (q.lastCorrect?'excited':'sad'):'think',56)}</div>
      ${cur.mode==='arabic'||cur.type==='emoji_choice'?`<div class="big-ar">${cur.display && cur.type!=='word_choice' && cur.type!=='situational' ? '' : ''}</div>`:''}
      ${cur.type==='emoji_choice'? `<div class="arabic big-ar">${w.ar}</div>` : ''}
      ${cur.type==='word_choice'? `<div class="big-ar">${w.em}</div>` : ''}
      ${cur.type==='meaning_choice'? `<div class="arabic big-ar">${w.ar}</div>` : ''}
      ${cur.type==='situational'? `<div style="font-size:15px;font-weight:800;">"${w.id_}"</div>` : ''}
      ${cur.type==='fillblank'? `<div style="font-size:28px;font-weight:800;letter-spacing:2px;">${cur.prompt}</div>` : ''}
      <div class="muted" style="font-weight:800;margin-top:8px;">${cur.sub}</div>
    </div>
    ${body}
  </div>`;
  function optClass(id){ if(!q.answered) return ''; if(id===cur.answer) return 'correct'; if(id===q.selected) return 'wrong'; return ''; }
  function optClassLetter(id){ if(!q.answered) return ''; if(id===cur.answer) return 'correct'; if(id===q.selected) return 'wrong'; return ''; }
}
function pickLetter(i){ if(state.quiz.answered) return; state.quiz.unscrambleSel.push(i); render(); }
function submitUnscramble(){
  const q = state.quiz; const cur = q.questions[q.idx];
  const chosen = q.unscrambleSel.map(i=>cur.letters[i]).join('');
  gradeAnswer(chosen.toLowerCase()===cur.answer.toLowerCase());
}
function submitTyped(){
  const q = state.quiz; const cur = q.questions[q.idx];
  const val = (q.typedVal||'').trim().toLowerCase();
  gradeAnswer(val.length>0 && val===cur.answer.toLowerCase());
}
function answerQuiz(optId){
  const q = state.quiz; if(q.answered) return; const cur = q.questions[q.idx];
  q.selected = optId;
  gradeAnswer(optId===cur.answer);
}
function gradeAnswer(isCorrect){
  const q = state.quiz; const cur = q.questions[q.idx];
  q.answered = true; q.lastCorrect = isCorrect;
  const p = state.profile;
  const st = p.areaProgress[wordAreaId(cur.word.id)].words[cur.word.id];
  if(isCorrect){
    q.correct++; st.correct++; p.point+=2; p.xp+=5;
    st.mastery = Math.min(100, st.mastery + 20);
  } else {
    q.wrong++; st.wrong++;
    st.mastery = Math.max(0, st.mastery - 10);
  }
  st.status = st.mastery>=80?'green': st.mastery>=30?'yellow':'red';
  st.learned = true;
  render();
  showFeedbackPopup(isCorrect, cur.word);
  setTimeout(()=>{ nextQuestion(); }, 1450);
}
function showFeedbackPopup(isCorrect, word){
  document.querySelectorAll('.feedback-popup').forEach(e=>e.remove());
  const el = document.createElement('div');
  el.className = 'feedback-popup ' + (isCorrect?'fp-correct':'fp-wrong');
  el.innerHTML = `<div class="fp-icon">${isCorrect?'🎉':'😊'}</div>
    <div class="fp-body">
      <div class="fp-text">${isCorrect?'Hebat! Kamu menemukan kosakata baru!':'Belum tepat. Yuk coba lagi nanti!'}</div>
      <div class="fp-sub">${word.ar} · ${word.tr} · ${word.id_}</div>
    </div>`;
  document.body.appendChild(el);
  requestAnimationFrame(()=>el.classList.add('show'));
  setTimeout(()=>{ el.classList.remove('show'); setTimeout(()=>el.remove(), 250); }, 1150);
}
function nextQuestion(){
  const q = state.quiz;
  if(q.idx < q.questions.length-1){
    q.idx++; q.answered=false; q.selected=null; q.typedVal=''; q.unscrambleSel=[];
    render();
  } else {
    finishQuiz();
  }
}
async function finishQuiz(){
  const q = state.quiz; const p = state.profile;
  const bonus = q.correct===q.questions.length;
  if(bonus){ p.point+=10; p.xp+=20; }
  const wasCompleted = p.areaProgress[q.areaId] ? p.areaProgress[q.areaId].completed : false;
  if(!q.isBoss){
    const pct = areaPercent(p, q.areaId);
    const allMastered = Object.values(p.areaProgress[q.areaId].words).every(w=>w.status==='green');
    if(pct>=70 && !wasCompleted){
      p.areaProgress[q.areaId].completed = allMastered || pct>=100;
    }
    if(pct>=70){
      const idx = AREAS.findIndex(a=>a.id===q.areaId);
      if(idx>=0 && idx<AREAS.length-1){
        const nextA = AREAS[idx+1];
        if(!p.areaProgress[nextA.id].unlocked){
          p.areaProgress[nextA.id].unlocked = true;
          state._justUnlocked = nextA.name;
        }
      }
    }
  } else {
    if(q.correct >= Math.ceil(q.questions.length*0.7)){
      p.areaProgress['istana'].completed = true;
      state._justUnlocked = 'MUFRADAT MASTER 👑';
    }
  }
  checkNewBadges();
  await saveProfile();
  state.progressPrev = {correct:q.correct, wrong:q.wrong, total:q.questions.length, bonus, areaId:q.areaId};
  goto('quizresult');
}
function exitQuiz(){ goto('area',{activeAreaId: state.quiz.areaId}); }

function checkNewBadges(){
  const p = state.profile;
  BADGES_DEF.forEach(b=>{
    if(b.cond(p) && !p.badges.includes(b.id)){ p.badges.push(b.id); state._newBadge = b; }
  });
}

/* quiz result as overlay-ish full screen reuse */
const origGoto = goto;
function renderQuizResult(){
  const r = state.progressPrev;
  const pct = Math.round(r.correct/r.total*100);
  return `<div class="screen" style="padding-top:60px;text-align:center;">
    <div class="float">${mufiSVG(pct>=70?'excited':'happy',120)}</div>
    <h2 style="margin-top:10px;">${pct>=70? 'Kerja Bagus! 🏁' : 'Terus Berlatih! 💪'}</h2>
    <div class="card" style="margin-top:16px;">
      <div style="font-size:32px;font-weight:800;color:var(--coral-dark);">${r.correct}/${r.total} Benar</div>
      <div class="progress-track" style="margin-top:10px;"><div class="progress-fill" style="width:${pct}%"></div></div>
      <div class="stat-grid">
        <div class="stat-box"><div class="val">⭐ +${r.correct*2 + (r.bonus?10:0)}</div><div class="lbl">Point</div></div>
        <div class="stat-box"><div class="val">✨ +${r.correct*5 + (r.bonus?20:0)}</div><div class="lbl">XP</div></div>
        <div class="stat-box"><div class="val">${pct}%</div><div class="lbl">Akurasi</div></div>
      </div>
    </div>
    ${state._justUnlocked? `<div class="card" style="margin-top:14px;background:linear-gradient(135deg,#FFE49B,#FFB55E);">🚀 <b>Keren! Area baru berhasil dibuka:</b><br><span style="font-size:18px;font-weight:800;">${state._justUnlocked}</span></div>`:''}
    ${state._newBadge? `<div class="card" style="margin-top:14px;">🏅 Badge baru diraih!<br><span style="font-size:26px;">${state._newBadge.em}</span><br><b>${state._newBadge.name}</b></div>`:''}
    <button class="btn btn-primary btn-block" style="margin-top:20px;" onclick="clearQuizFlags();goto('area',{activeAreaId:'${r.areaId}'})">Kembali ke Area</button>
    <button class="btn btn-ghost btn-block" style="margin-top:10px;" onclick="clearQuizFlags();goto('map')">🗺️ Lihat Peta</button>
  </div>`;
}
function clearQuizFlags(){ state._justUnlocked=null; state._newBadge=null; }

/* ============================================================
   COLLECTION
   ============================================================ */
function renderCollection(){
  const p = state.profile;
  return `<div class="screen">
    ${AREAS.map(a=>{
      const ap = p.areaProgress[a.id];
      if(!ap.unlocked) return `<div class="sectitle" style="margin-top:22px;">${a.icon} ${a.name}</div><div class="card muted" style="text-align:center;font-weight:700;">🔒 Belum terbuka</div>`;
      const pct = areaPercent(p, a.id);
      return `
      <div class="sectitle" style="margin-top:22px;">${a.icon} ${a.name}</div>
      <div class="muted" style="font-weight:800;font-size:12px;margin-bottom:8px;">${Object.values(ap.words).filter(w=>w.learned).length}/${a.words.length} kosakata dikumpulkan</div>
      <div style="display:flex;flex-direction:column;gap:8px;">
        ${a.words.map(w=>{
          const st = ap.words[w.id];
          return `<div class="vocab-card">
            <div class="vocab-emoji">${st.learned?w.em:'🔒'}</div>
            <div style="flex:1;">
              <div class="row between"><span class="vocab-arabic arabic">${st.learned?w.ar:'••••'}</span><span class="status-dot dot-${st.status}"></span></div>
              <div class="muted" style="font-size:12px;font-weight:700;">${st.learned? (st.status==='green'?'✅ Dikuasai': st.status==='yellow'?'🔄 Sedang dipelajari':'🆕 Baru ditemukan') : 'Belum ditemukan'}</div>
              ${st.learned?`<div class="mastery-track"><div class="mastery-fill" style="width:${st.mastery}%;"></div></div>`:''}
            </div>
          </div>`;
        }).join('')}
      </div>`;
    }).join('')}

    <div class="sectitle" style="margin-top:24px;">🏅 Badge</div>
    <div class="badge-grid">
      ${BADGES_DEF.map(b=>`<div class="badge-item ${b.cond(p)?'':'locked'}"><div class="em">${b.em}</div><div class="nm">${b.name}</div></div>`).join('')}
    </div>
  </div>`;
}

/* ============================================================
   PROGRESS
   ============================================================ */
function renderProgress(){
  const p = state.profile;
  const total = Object.values(ALL_WORDS).length;
  const collected = totalCollected(p);
  const mastered = totalMastered(p);
  const learning = collected - mastered;
  const attemptsCorrect = sumStat(p,'correct'), attemptsWrong = sumStat(p,'wrong');
  const acc = (attemptsCorrect+attemptsWrong)>0 ? Math.round(attemptsCorrect/(attemptsCorrect+attemptsWrong)*100) : 0;
  return `<div class="screen">
    <div class="stat-grid" style="grid-template-columns:repeat(2,1fr);">
      <div class="stat-box"><div class="val">🎒 ${collected}/${total}</div><div class="lbl">Total Kosakata</div></div>
      <div class="stat-box"><div class="val">🟢 ${mastered}</div><div class="lbl">Dikuasai</div></div>
      <div class="stat-box"><div class="val">🟡 ${learning}</div><div class="lbl">Sedang Dipelajari</div></div>
      <div class="stat-box"><div class="val">🎯 ${acc}%</div><div class="lbl">Akurasi</div></div>
      <div class="stat-box"><div class="val">⭐ ${p.point}</div><div class="lbl">Total Point</div></div>
      <div class="stat-box"><div class="val">✨ ${p.xp}</div><div class="lbl">Total XP</div></div>
    </div>

    <div class="sectitle">Progress per Area</div>
    <div style="display:flex;flex-direction:column;gap:10px;">
    ${AREAS.map(a=>{
      const ap = p.areaProgress[a.id]; if(!ap.unlocked) return `<div class="card row between muted" style="font-weight:700;"><span>${a.icon} ${a.name}</span><span>🔒</span></div>`;
      const pct = areaPercent(p,a.id);
      return `<div class="card">
        <div class="row between" style="margin-bottom:6px;"><span style="font-weight:800;">${a.icon} ${a.name}</span><span class="muted" style="font-weight:800;">${pct}%</span></div>
        <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>
        ${ap.completed?'<div style="font-size:12px;font-weight:800;color:var(--leaf-dark);margin-top:4px;">✅ Level selesai</div>':''}
      </div>`;
    }).join('')}
    </div>
  </div>`;
}
function sumStat(p, key){ let s=0; Object.values(p.areaProgress).forEach(ap=>Object.values(ap.words).forEach(w=>s+=w[key])); return s; }

/* ============================================================
   PROFILE
   ============================================================ */
function renderProfile(){
  const p = state.profile;
  const lvl = playerTitleLevel(p);
  return `<div class="screen">
    <div class="card" style="text-align:center;">
      <div class="avatar-lg">${mufiSVG('happy',60)}</div>
      <h3 style="margin-top:10px;">${p.name}</h3>
      <div class="muted" style="font-weight:800;">${TITLES[lvl-1]} · Level ${lvl}</div>
      <div class="row center" style="gap:16px;margin-top:12px;">
        <div style="text-align:center;"><div style="font-weight:800;">⭐ ${p.point}</div><div class="muted" style="font-size:11px;">Point</div></div>
        <div style="text-align:center;"><div style="font-weight:800;">✨ ${p.xp}</div><div class="muted" style="font-size:11px;">XP</div></div>
        <div style="text-align:center;"><div style="font-weight:800;">🎒 ${totalCollected(p)}</div><div class="muted" style="font-size:11px;">Kosakata</div></div>
      </div>
    </div>

    <div class="sectitle">Data Diri</div>
    <div class="card">
      <div class="field"><label>Umur</label><input id="pf-age" value="${p.age||''}" placeholder="Umur"></div>
      <div class="field"><label>Jenis Kelamin</label>
        <select id="pf-gender"><option ${p.gender===''?'selected':''} value="">Pilih</option><option ${p.gender==='Laki-laki'?'selected':''}>Laki-laki</option><option ${p.gender==='Perempuan'?'selected':''}>Perempuan</option></select>
      </div>
      <div class="field"><label>Tingkat Sekolah</label>
        <select id="pf-grade"><option value="" ${p.grade===''?'selected':''}>Pilih</option>${['TK','SD','SMP','SMA'].map(g=>`<option ${p.grade===g?'selected':''}>${g}</option>`).join('')}</select>
      </div>
      <div class="field"><label>Nama Sekolah</label><input id="pf-school" value="${p.school||''}" placeholder="Nama sekolah"></div>
      <button class="btn btn-leaf btn-block" onclick="saveProfileEdit()">💾 Simpan Perubahan</button>
    </div>

    <div class="sectitle">🏅 Semua Badge</div>
    <div class="badge-grid">${BADGES_DEF.map(b=>`<div class="badge-item ${b.cond(p)?'':'locked'}"><div class="em">${b.em}</div><div class="nm">${b.name}</div></div>`).join('')}</div>

    <button class="btn btn-ghost btn-block" style="margin-top:20px;" onclick="doLogout()">🚪 Ganti Pemain / Keluar</button>
  </div>`;
}
async function saveProfileEdit(){
  const p = state.profile;
  p.age = document.getElementById('pf-age').value;
  p.gender = document.getElementById('pf-gender').value;
  p.grade = document.getElementById('pf-grade').value;
  p.school = document.getElementById('pf-school').value;
  await saveProfile();
  toast('✅ Profil tersimpan!');
}
async function doLogout(){
  await storageSet('profile', null, false);
  state.profile = null;
  goto('auth');
}

/* ============================================================
   ADMIN
   ============================================================ */
async function renderAdminAsync(){
  const users = [];
  try{
    const list = await window.storage.list('admin_users:', true);
    if(list && list.keys){
      for(const k of list.keys){
        const r = await window.storage.get(k, true);
        if(r) users.push(JSON.parse(r.value));
      }
    }
  }catch(e){}
  state._adminUsers = users.sort((a,b)=>(b.updatedAt||0)-(a.updatedAt||0));
  render();
}
function renderAdmin(){
  const tab = state._adminTab || 'overview';
  const users = state._adminUsers || [];
  const totalWords = Object.values(ALL_WORDS).length;
  return `<div class="screen">
    <div class="topbar" style="margin:-18px -16px 16px;">
      <div class="back-btn" onclick="goto('auth')">←</div>
      <h2>🛠️ Admin Dashboard</h2>
    </div>
    <div class="admin-tabs">
      <div class="admin-tab ${tab==='overview'?'active':''}" onclick="setAdminTab('overview')">Ringkasan</div>
      <div class="admin-tab ${tab==='users'?'active':''}" onclick="setAdminTab('users')">Monitoring Siswa</div>
      <div class="admin-tab ${tab==='vocab'?'active':''}" onclick="setAdminTab('vocab')">Manajemen Vocabulary</div>
      <div class="admin-tab ${tab==='games'?'active':''}" onclick="setAdminTab('games')">Manajemen Game</div>
    </div>
    ${tab==='overview'? `
      <div class="stat-grid" style="grid-template-columns:repeat(2,1fr);">
        <div class="stat-box"><div class="val">${users.length}</div><div class="lbl">Total Siswa Aktif</div></div>
        <div class="stat-box"><div class="val">${totalWords}</div><div class="lbl">Total Mufradat</div></div>
        <div class="stat-box"><div class="val">${AREAS.length}</div><div class="lbl">Total Area</div></div>
        <div class="stat-box"><div class="val">${users.reduce((s,u)=>s+(u.mastered||0),0)}</div><div class="lbl">Total Kosakata Dikuasai</div></div>
      </div>
      <p class="muted" style="font-size:12px;margin-top:14px;text-align:center;">Data diperbarui otomatis setiap siswa menyelesaikan aktivitas.</p>
    `:''}
    ${tab==='users'? `
      <div class="card" style="overflow-x:auto;">
        <table>
          <thead><tr><th>Nama</th><th>Level</th><th>XP</th><th>Point</th><th>Kosakata</th><th>Area Selesai</th></tr></thead>
          <tbody>
          ${users.length? users.map(u=>`<tr><td>${u.name}</td><td>${u.grade||'-'}</td><td>${u.xp}</td><td>${u.point}</td><td>${u.collected}/${totalWords}</td><td>${u.areasCompleted}/8</td></tr>`).join('') : `<tr><td colspan="6" class="muted">Belum ada data siswa.</td></tr>`}
          </tbody>
        </table>
      </div>
    `:''}
    ${tab==='vocab'? `
      ${AREAS.map(a=>`
        <div class="sectitle">${a.icon} ${a.name}</div>
        <div class="card" style="overflow-x:auto;">
          <table><thead><tr><th>Arab</th><th>Translit</th><th>Arti</th></tr></thead>
          <tbody>${a.words.map(w=>`<tr><td class="arabic">${w.ar}</td><td>${w.tr}</td><td>${w.id_}</td></tr>`).join('')}</tbody></table>
        </div>
      `).join('')}
    `:''}
    ${tab==='games'? `
      <div class="card">
        <b>Jenis mini game aktif:</b>
        <ul style="margin:10px 0 0;padding-left:18px;line-height:1.9;">
          <li>🎯 Tebak Gambar (Easy)</li>
          <li>🔤 Pilih Kata dari Gambar (Easy)</li>
          <li>🧠 Tebak Arti (Medium)</li>
          <li>🧩 Susun Kata / Transliterasi (Medium)</li>
          <li>🔤 Lengkapi Kata (Medium)</li>
          <li>✍️ Ketik Kosakata (Expert)</li>
          <li>🧠 Tebak dari Situasi (Expert)</li>
          <li>👑 Mufradat Challenge — Boss di Istana Mufradat</li>
        </ul>
      </div>
    `:''}
  </div>`;
}
function setAdminTab(t){ state._adminTab = t; render(); }

/* ============================================================
   MISC UI HELPERS
   ============================================================ */
function toast(msg){
  const el = document.createElement('div');
  el.className='toast'; el.textContent = msg;
  document.body.appendChild(el);
  setTimeout(()=>el.remove(), 2200);
}
function confettiBurst(){
  const colors = ['#FF8B5E','#FFC93C','#57C4DB','#4FAE7A','#8B5FBF'];
  for(let i=0;i<26;i++){
    const p = document.createElement('div');
    p.className='confetti-piece';
    p.style.left = Math.random()*100+'vw';
    p.style.width = p.style.height = (6+Math.random()*6)+'px';
    p.style.background = colors[Math.floor(Math.random()*colors.length)];
    p.style.animationDuration = (1.6+Math.random()*1.2)+'s';
    document.body.appendChild(p);
    setTimeout(()=>p.remove(), 3000);
  }
}
function afterRender(){
  if(state.screen==='admin' && !state._adminUsers){ renderAdminAsync(); }
  if(state.screen==='quiz' && state.quiz && state.quiz.answered===false){ /* noop */ }
}
// patch goto to support 'quizresult' pseudo-screen + confetti triggers
const _origGotoFn = goto;
goto = function(screen, extra){
  _origGotoFn(screen, extra);
  if(screen==='quizresult'){ document.getElementById('app').innerHTML = renderQuizResult(); if(state._justUnlocked||state._newBadge) confettiBurst(); }
};

boot();