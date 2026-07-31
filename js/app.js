// ============================= WORD BANK =============================
const CATEGORIES = {
  'חיות': [
    'כלב','חתול','אריה','פיל','קוף',"ג'ירפה",'זברה','דולפין','נשר','ארנב',
    'חמור','פרה','עז','ברווז','תרנגול','נמר','דוב','כריש','צפרדע','צב',
    'פינגווין','נחש','תוכי','חזיר','פרפר','נמלה','חיפושית','כבשה','גמל','אייל',
    'סוס','עכבר','שועל','זאב','קיפוד','סנאי','תנין','לווייתן','כלב ים','קרנף',
    'היפופוטם','עטלף','יונה','עורב','ינשוף','טווס','אפרוח','גור','ברווזון','טלה',
    'דבורה','זבוב','יתוש','עכביש','שבלול','תולעת','דג','דג זהב','תמנון','מדוזה',
    'סרטן','כוכב ים','פנדה','קוואלה','קנגורו','למה','עצלן','ברבור','אווז','חסידה',
    'פלמינגו','יען','פרת משה רבנו','זחל','סוס ים','זיקית','לטאה','תרנגולת','גדי','סייח',
    'לביאה','שימפנזה','גורילה','נמרה','דובה','שועלון','זאבון','חתלתול','כלבלב','דינוזאור',
    'ברדלס','אריה ים','נחליאלי','דוכיפת','חגב','צרעה','שפנפן','חפרפרת','סוריקטה','שלדג'
  ],
  'מאכלים': [
    'פיצה','המבורגר','סושי','פסטה','שווארמה','פלאפל','גלידה','עוגה','שוקולד','בורקס',
    'פיתה','עוף','סלמון','חומוס','מרק','לחם','אורז','ביצה','גבינה','עגבנייה',
    'בננה','תפוח','ענבים','אבוקדו','גזר','קרקר','לאגנה','קרפ','וופל','דונאט',
    'מלווח','ג\'חנון','קוסקוס','סטייק','נקניקייה','צ\'יפס','שקשוקה','חביתה','סלט','טונה',
    'טחינה','ממולאים','פנקייק','מאפינס','קרואסון','בייגל','טוסט','שניצל','פירה','חציל',
    'פשטידה','נקניק','קציצה','קבב','שישליק','טאקו','בוריטו','נאצ\'וס','חלה','בגט',
    'טורטייה','יוגורט','חמאה','שמנת','מלפפון','בצל','תפוח אדמה','בטטה','פלפל','שום',
    'תירס','אפונה','שעועית','תות','תפוז','קלמנטינה','אפרסק','משמש','שזיף','אבטיח',
    'מלון','מנגו','אננס','תמר','אגוז','שקד','בוטנים','דבש','ריבה','קורנפלקס',
    'שוקו','חלב','סוכרייה','מסטיק','פופקורן','וופלה','פטיבר','מעדן','קטשופ','זיתים'
  ],
  'חפצים בבית': [
    'כיסא','שולחן','מקרר','תנור','מיטה','ספה','טלוויזיה','מנורה','מראה','שטיח',
    'ארון','כרית','שמיכה','מיקרוגל','כוס','מחשב','מדף','דלת','חלון','מטאטא',
    'ברז','כיור','מגבת','סכין','מצלמה','שעון','אוזניות','מרפסת','קולב','מזוודה',
    'מזלג','כף','כפית','צלחת','קערה','סיר','מחבת','קומקום','בלנדר','מזגן',
    'שלט','טלפון','מטען','סוללה','ספר','מחברת','עיפרון','עט','מספריים','סבון',
    'שמפו','משחת שיניים','מברשת שיניים','מברשת שיער','מסרק','בושם','קרם','עציץ','תמונה','וילון',
    'תריס','מפתח','מנעול','ארנק','משקפיים','פנס','מטרייה','סולם','פטיש','מברג',
    'מסמר','ברגים','צינור','אמבטיה','אסלה','שידה','שולחן כתיבה','פוף','שרפרף','מזרון',
    'סדין','שטיחון','צעצוע','בובה','משחק','פאזל','קוביות','טוש','צבע','קלמר',
    'ילקוט','תיק','מדבקה','כדור','פלסטר','נייר','לוח','שעון קיר','מגהץ','פח אשפה'
  ],
  'מדינות': [
    'ישראל','ברזיל','יפן','צרפת','איטליה','גרמניה','אוסטרליה','קנדה','הודו','ספרד',
    'מקסיקו','רוסיה','סין','בריטניה','פורטוגל','תורכיה','ארגנטינה','מרוקו','פולין','שוודיה',
    'נורווגיה','אוסטריה','שווייץ','בלגיה','הולנד','יוון','מצרים','דרום אפריקה','קוריאה','אירלנד',
    'ארצות הברית','אנגליה','סקוטלנד','ויילס','תאילנד','ניו זילנד','קפריסין','ירדן','לבנון','סוריה',
    'איראן','עיראק','ערב הסעודית','איחוד האמירויות','מדגסקר','קניה','אתיופיה','ג\'מייקה','קובה','פנמה',
    'קוסטה ריקה','קולומביה','פרו','צ\'ילה','אורוגוואי','אוקראינה','רומניה','הונגריה','צ\'כיה','בולגריה',
    'פינלנד','דנמרק','איסלנד','קרואטיה','סינגפור','וייטנאם','פיליפינים','ניגריה','קטר','גאורגיה',
    'מונקו','מלטה','סלובקיה','סרביה','ונצואלה','אקוודור','בוליביה','פרגוואי','גאנה','סנגל',
    'טנזניה','לוב','תוניסיה','אלג\'יריה','תימן','פקיסטן','נפאל','מונגוליה','ארמניה','לוקסמבורג',
    'גואטמלה','הונדורס','אל סלוודור','אינדונזיה','מלזיה','סרי לנקה','מלדיביים','קמבודיה','אלבניה','עומאן'
  ],
  'מקצועות': [
    'רופא','מורה','שוטר','טבח','עורך דין','מהנדס','אדריכל','פסיכולוג','טייס','שחקן',
    'זמר','נהג','ספר','עיתונאי','פוליטיקאי','רופא שיניים','מכונאי','כלכלן','מאמן','כבאי',
    'חייל','גנן','חקלאי','מלצר','צלם','מתכנת','אחות','ספן','אסטרונאוט','פסל',
    'נגר','חשמלאי','אינסטלטור','טכנאי','רוקח','וטרינר','מדען','חוקר','סופר','צייר',
    'במאי','רקדן','מוזיקאי','מלחין','מנצח','בנקאי','מנהל','מזכירה','קופאי','מוכר',
    'שליח','דוור','מנקה','שומר','מאבטח','בלש','שופט','ספרן','דייל','קברניט',
    'מלח','צוללן','בנאי','צבע','תופר','חייט','דוגמן','מאפר','קוסם','ליצן',
    'גננת','סייעת','כדורגלן','כדורסלן','שחיין','מציל','אופה','קונדיטור','יוטיובר','גיימר',
    'נהג מונית','נהג אוטובוס','דייג','רועה צאן','פקח','שומר ראש','בייביסיטר','מטפלת','מדריך קייטנה','ליצן רפואי',
    'מדבב','מוסכניק','מחלק עיתונים','סוכן נסיעות','מדריך טיולים','מלביש','מאמן כושר','חובש','טכנאי מחשבים','מוכר גלידה'
  ],
  'ספורט': [
    'כדורגל','כדורסל','טניס','שחייה','גולף','סקי','אגרוף','התעמלות','רכיבה','כדור עף',
    'ריצה','אופניים','סקייטבורד','גלישה','כדוריד','קראטה','יוגה','שחמט','בדמינטון','רוגבי',
    'פינג פונג','ג\'ודו','גלגיליות','טריאתלון','ירייה','סיוף','פולו','צלילה','קפיצה למים','אמנות לחימה',
    'פוטבול','בייסבול','הוקי','הוקי קרח','כדורמים','באולינג','ביליארד','חץ וקשת','קפיצה לגובה','קפיצה לרוחק',
    'מרתון','מרוץ מכשולים','מרוץ שליחים','אירובי','זומבה','הרמת משקולות','היאבקות','קיקבוקסינג','טקוואנדו','קפוארה',
    'קרב מגע','מרוץ מכוניות','מרוץ אופנועים','שיט','חתירה','קיאקים','גלישת רוח','גלישת גלים','סנובורד','החלקה על הקרח',
    'החלקה אמנותית','טיפוס קירות','טיפוס הרים','צניחה חופשית','מרוץ סוסים','מחניים','תופסת','מחבואים','קלאס','חבל קפיצה',
    'קורקינט','טרמפולינה','כדורשת','סטנגה','גומי','חמש אבנים','דג מלוח','משיכת חבל','הורדת ידיים','קרב כריות',
    'ים יבשה','כיסאות מוזיקליים','קליעה למטרה','גלגלון','עמידת ידיים','עמידת ראש','שפגט','כדורגל שולחן','הוקי אוויר','אקרובטיקה',
    'ג\'אגלינג','מסירות','מיני גולף','רכיבה על פוני','שחייה צורנית','אופני הרים','אופני פעלולים','ריצת משוכות','הליכה','קפיצה בחבל'
  ],
  'טבע': [
    'הר','ים','מדבר','יער','נהר','אגם','מפל','מערה','חוף','אי',
    'ענן','שלג','ברק','גשם','שמש','כוכב','ירח','רוח','פרח','עץ',
    'עלה','חול','קרח','גל','בוץ','ריף','בצה','שיח','מולקנו','צונאמי',
    'גבעה','עמק','צוק','נחל','מעיין','שלולית','אוקיינוס','מפרץ','קרחון','ברד',
    'סופה','סערה','טורנדו','הוריקן','רעידת אדמה','ליקוי חמה','ליקוי ירח','מטאור','אסטרואיד','גלקסיה',
    'שמיים','אופק','אדמה','סלע','אבן','חלוק נחל','חצץ','עפר','לבה','אפר',
    'קשת בענן','ערפל','חמסין','שרב','שורש','גזע','ענף','ניצן','זרע','פרי',
    'דשא','פטריה','אצה','אלמוג','קונכייה','צדף','פנינה','ג\'ונגל','שדה','מישור',
    'סוואנה','חורש','קניון','מצוק','שקיעה','זריחה','חושך','אור','שתיל','בוסתן',
    'כרם','פרדס','חממה','אדנית','נביעה','מערת נטיפים','אבן חול','הר געש','שביל','צמח'
  ],
  'סרטים': [
    'גיבור','נבל','ריגול','אנימציה','אימה','קומדיה','דרמה','מדע בדיוני','תיעודי','סדרה',
    'בימאי','אוסקר','טריילר','פופקורן','קולנוע','עריכה','תסריט','פסקול','אקשן','פנטזיה',
    'רובוט','חייזר','תחפושת','מסכה','בובה','רוח רפאים','פרס','מחיאות','ביקורת','הצגה',
    'שחקן','צלם','מלביש','תפאורה','אפקטים','מסך ירוק','אולפן','מיקרופון','סאונד','סצנה',
    'צילומים','הקרנה','כרטיס','אולם','מושב','מסך','מקרן','מתח','אהבה','אגדה',
    'סיפור','גיבורה','הרפתקאות','נסיך','מדבב','דיבוב','תרגום','שטיח אדום','גביע','מדליה',
    'זכייה','חגיגה','הצלחה','פוסטר','פרומו','צופים','קהל','עלילה','סרט','שיר',
    'מוזיקה','כוכב','שלט','טלוויזיה','מצויר','גיבור על','נסיכה','מלך','מלכה','קסם',
    'מצחיק','מפחיד','חברים','משפחה','צחוק','דמעות','סוף','התחלה','חטיף','שתייה',
    'פנס','כיבוד','ממתק','סוכרייה','מצלמה','מחשב','וידאו','יוטיוב','טלפון','סלולרי'
  ],
};

// ============================= GAME STATE =============================
const G = {
  players:          [],
  numPlayers:       4,
  imposterIndices:  [],
  secretWord:       '',
  category:         '',
  currentReveal:    0,
  roleVisible:      false,
  votedPlayer:      -1,
  hintEnabled:      true,
  noFirstEnabled:   false,
};

// ============================= INIT =============================
document.addEventListener('DOMContentLoaded', onNumPlayersChange);

function onNumPlayersChange() {
  const n = parseInt(document.getElementById('num-players').value);
  G.numPlayers = n;
  rebuildPlayerRows(new Array(n).fill(''));

  // Changing player count resets the game settings to their defaults,
  // since imposter count / hint / order rules depend on player count.
  const impInput = document.getElementById('num-imposters');
  impInput.max   = Math.max(1, n - 1);
  impInput.value = 1;
  setToggle('hint', true);
  setToggle('noFirst', false);
}

// ============================= PLAYERS CARD (chips + edit accordion) =============================
function escapeHtml(s) {
  return (s || '').replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Rebuilds the editable player-name rows from a values array, re-attaching
// drag handles and refreshing the chip summary. Used on init, on player-count
// change, and after a drag-reorder completes.
function rebuildPlayerRows(values) {
  const grid = document.getElementById('player-inputs');
  grid.innerHTML = '';
  values.forEach((val, i) => {
    const row = document.createElement('div');
    row.className = 'player-input-row';
    row.innerHTML = `
      <span class="player-num">${i + 1}</span>
      <input type="text" id="pname-${i}" placeholder="שחקן ${i + 1}" maxlength="18" value="${escapeHtml(val)}" oninput="updatePlayerChips()">
      <span class="drag-handle" title="גרור לשינוי סדר"><iconify-icon icon="mdi:drag-vertical"></iconify-icon></span>`;
    grid.appendChild(row);
    initRowDrag(row);
  });
  updatePlayerChips();
}

function updatePlayerChips() {
  const chipsEl = document.getElementById('players-chips');
  chipsEl.innerHTML = '';
  for (let i = 0; i < G.numPlayers; i++) {
    const input = document.getElementById(`pname-${i}`);
    const val   = input ? input.value.trim() : '';
    const chip  = document.createElement('div');
    chip.className = 'player-chip';
    chip.onclick = () => focusPlayerEdit(i);
    chip.innerHTML = `<span class="chip-num">${i + 1}</span><span class="chip-name">${escapeHtml(val) || `שחקן ${i + 1}`}</span>`;
    chipsEl.appendChild(chip);
  }
}

// ---- Drag-to-reorder (Pointer Events, works for mouse + touch) ----
let _drag = null;
const ROW_GAP = 9; // must match .players-grid { gap: 9px }

function initRowDrag(row) {
  const handle = row.querySelector('.drag-handle');
  handle.addEventListener('pointerdown', (e) => startDrag(e, row, handle));
}

function startDrag(e, row, handle) {
  e.preventDefault();
  const activeInput = document.activeElement;
  if (activeInput && activeInput.tagName === 'INPUT') activeInput.blur();

  handle.setPointerCapture(e.pointerId);

  const grid     = document.getElementById('player-inputs');
  const rows     = Array.from(grid.querySelectorAll('.player-input-row'));
  const rowHeight = row.offsetHeight + ROW_GAP;
  const origIndex = rows.indexOf(row);

  _drag = { grid, rows, row, origIndex, startY: e.clientY, rowHeight, targetSlot: origIndex, pointerId: e.pointerId, handle };

  row.classList.add('dragging');

  handle.addEventListener('pointermove', dragMove);
  handle.addEventListener('pointerup', endDrag);
  handle.addEventListener('pointercancel', endDrag);
}

function dragMove(e) {
  if (!_drag) return;
  const dy = e.clientY - _drag.startY;
  _drag.row.style.transform = `translateY(${dy}px)`;

  const n = _drag.rows.length;
  const draggedCenter = _drag.origIndex * _drag.rowHeight + _drag.rowHeight / 2 + dy;
  let targetSlot = Math.round((draggedCenter - _drag.rowHeight / 2) / _drag.rowHeight);
  targetSlot = Math.max(0, Math.min(n - 1, targetSlot));
  _drag.targetSlot = targetSlot;

  _drag.rows.forEach((r, slot) => {
    if (r === _drag.row) return;
    let shift = 0;
    if (_drag.origIndex < targetSlot && slot > _drag.origIndex && slot <= targetSlot) {
      shift = -_drag.rowHeight;
    } else if (_drag.origIndex > targetSlot && slot >= targetSlot && slot < _drag.origIndex) {
      shift = _drag.rowHeight;
    }
    r.style.transform = shift ? `translateY(${shift}px)` : '';
  });
}

function endDrag(e) {
  if (!_drag) return;
  const { rows, row, origIndex, targetSlot, handle, pointerId } = _drag;

  handle.removeEventListener('pointermove', dragMove);
  handle.removeEventListener('pointerup', endDrag);
  handle.removeEventListener('pointercancel', endDrag);
  try { handle.releasePointerCapture(pointerId); } catch (err) {}

  row.classList.remove('dragging');
  rows.forEach(r => { r.style.transform = ''; });

  if (targetSlot !== origIndex) {
    const values = rows.map(r => r.querySelector('input').value);
    const moved  = values.splice(origIndex, 1)[0];
    values.splice(targetSlot, 0, moved);
    rebuildPlayerRows(values);
    vibrate([25]);
  }

  _drag = null;
}


let _playersEditOpen = false;
function togglePlayersEdit() {
  _playersEditOpen = !_playersEditOpen;
  document.getElementById('players-edit-content').classList.toggle('open', _playersEditOpen);
  document.getElementById('players-edit-chevron').classList.toggle('open', _playersEditOpen);
}

// Tapping a player chip opens the edit panel (if closed) and jumps straight
// to that player's input row, briefly highlighting it.
function focusPlayerEdit(i) {
  const wasOpen = _playersEditOpen;
  if (!wasOpen) togglePlayersEdit();

  const jumpToInput = () => {
    const input = document.getElementById(`pname-${i}`);
    if (!input) return;
    input.focus();
    input.scrollIntoView({ behavior: 'smooth', block: 'center' });
    const row = input.closest('.player-input-row');
    if (row) {
      row.classList.add('highlight-row');
      setTimeout(() => row.classList.remove('highlight-row'), 900);
    }
  };

  // Wait for the open transition to finish before scrolling, if it was just opened
  setTimeout(jumpToInput, wasOpen ? 30 : 300);
}

// ============================= SETTINGS TOGGLES =============================
function setToggle(key, value) {
  if (key === 'hint')    G.hintEnabled    = value;
  if (key === 'noFirst') G.noFirstEnabled = value;
  const btn = document.getElementById(`toggle-${key}`);
  if (btn) btn.classList.toggle('on', value);
}

function toggleSetting(key) {
  const current = key === 'hint' ? G.hintEnabled : G.noFirstEnabled;
  setToggle(key, !current);
  vibrate([20]);
}

// ============================= ADVANCED SETTINGS ACCORDION =============================
let _advSettingsOpen = false;
function toggleAdvancedSettings() {
  _advSettingsOpen = !_advSettingsOpen;
  document.getElementById('advanced-settings-content').classList.toggle('open', _advSettingsOpen);
  document.getElementById('adv-settings-chevron').classList.toggle('open', _advSettingsOpen);
}

// ============================= START =============================
function startGame() {
  const n = parseInt(document.getElementById('num-players').value);
  G.numPlayers = n;
  G.players = [];
  for (let i = 0; i < n; i++) {
    const v = document.getElementById(`pname-${i}`).value.trim();
    G.players.push(v || `שחקן ${i + 1}`);
  }

  let cat = document.getElementById('category-select').value;
  if (cat === 'random') {
    const cats = Object.keys(CATEGORIES);
    cat = cats[~~(Math.random() * cats.length)];
  }
  G.category    = cat;
  G.secretWord  = pickRandom(CATEGORIES[cat]);

  // Choose imposters (clamped 1..n-1, so at least one citizen always knows the word)
  let numImp = parseInt(document.getElementById('num-imposters').value) || 1;
  numImp = Math.max(1, Math.min(numImp, n - 1));
  const shuffledIdx = shuffle([...Array(n).keys()]);
  G.imposterIndices = shuffledIdx.slice(0, numImp).sort((a, b) => a - b);

  G.currentReveal = 0;
  G.roleVisible   = false;
  G.votedPlayer   = -1;

  setHeader(true, helpBtn());
  renderReveal(0);
}

// ============================= REVEAL PHASE =============================
function renderReveal(idx) {
  G.currentReveal = idx;
  G.roleVisible   = false;

  // Progress dots
  document.getElementById('reveal-progress').innerHTML =
    G.players.map((_, i) =>
      `<div class="reveal-dot ${i < idx ? 'done' : i === idx ? 'current' : ''}"></div>`
    ).join('');

  // Player label
  document.getElementById('reveal-name').textContent = G.players[idx];
  document.getElementById('reveal-sub').innerHTML = 'תורך לצפות בתפקידך.<br>אל תראה למישהו אחר!';

  // Reset icon (bouncing, hidden state)
  const iconEl = document.getElementById('reveal-icon');
  iconEl.className = 'reveal-icon-wrap';
  iconEl.innerHTML = `<iconify-icon icon="mdi:eye-off-outline"
    style="font-size:4.5rem;width:4.5rem;height:4.5rem;color:var(--text-dim)"></iconify-icon>`;

  // Reset card to cover
  const card = document.getElementById('role-card');
  card.className = 'role-card cover';
  card.innerHTML = `
    <iconify-icon icon="mdi:lock-outline"
      style="font-size:2.6rem;width:2.6rem;height:2.6rem;color:var(--text-dim)"></iconify-icon>
    <div class="role-label" style="color:var(--text-dim)">מוסתר</div>`;

  // Reset action button
  document.getElementById('reveal-action').innerHTML = `
    <button class="btn btn-primary" onclick="tapToReveal()">
      <iconify-icon icon="mdi:eye-outline"></iconify-icon> לחץ לצפייה
    </button>`;

  showScreen('screen-reveal');
}

function tapToReveal() {
  G.roleVisible = true;
  const isImposter = G.imposterIndices.includes(G.currentReveal);

  // Update icon (static, no bounce)
  const iconEl = document.getElementById('reveal-icon');
  iconEl.className = 'reveal-icon-wrap static';
  iconEl.innerHTML = isImposter
    ? `<iconify-icon icon="mdi:spy"
        style="font-size:4.5rem;width:4.5rem;height:4.5rem;color:var(--red)"></iconify-icon>`
    : `<iconify-icon icon="mdi:shield-check-outline"
        style="font-size:4.5rem;width:4.5rem;height:4.5rem;color:var(--green)"></iconify-icon>`;

  // Reveal role card
  const card = document.getElementById('role-card');
  if (isImposter) {
    card.className = 'role-card imposter';
    card.innerHTML = `
      <div style="font-size:2.8rem">🕵️</div>
      <div class="role-label" style="color:var(--red)">אתה המתחזה!</div>
      ${G.hintEnabled ? `<div class="role-hint">💡 רמז — קטגוריה: ${G.category}</div>` : ''}
      <div class="role-desc">נסה להשתלב ולא להיתפס.<br>אין לך מושג מה המילה הסודית — <strong style="color:var(--red)">תאלתר!</strong></div>`;
  } else {
    card.className = 'role-card citizen';
    card.innerHTML = `
      <div class="role-label" style="color:var(--green)">אתה אזרח 🟢</div>
      <div class="role-word">${G.secretWord}</div>
      <div class="role-cat">קטגוריה: ${G.category}</div>`;
  }

  document.getElementById('reveal-sub').textContent = 'זכרת? מעולה! העבר את הטלפון הלאה.';

  // Update action button
  const isLast = G.currentReveal === G.numPlayers - 1;
  document.getElementById('reveal-action').innerHTML = `
    <button class="btn btn-green" onclick="acknowledgeReveal()">
      <iconify-icon icon="mdi:check-circle-outline"></iconify-icon>
      ${isLast ? 'כולם מוכנים — התחל דיון!' : 'הבנתי, העבר לשחקן הבא'}
    </button>`;

  vibrate([60]);
}

function acknowledgeReveal() {
  const next = G.currentReveal + 1;
  if (next < G.numPlayers) {
    renderReveal(next);
  } else {
    showDiscussion();
  }
}

// ============================= DISCUSSION =============================
// Builds the speaking order. When "imposter not first" is enabled, a random
// citizen is guaranteed to occupy position 0 — the rest (remaining citizens +
// all imposters) are shuffled together for positions 1..n-1.
function buildSpeakingOrder() {
  const all       = [...Array(G.numPlayers).keys()];
  const citizens  = all.filter(i => !G.imposterIndices.includes(i));
  const imposters = all.filter(i => G.imposterIndices.includes(i));

  if (G.noFirstEnabled && citizens.length > 0) {
    const shuffledCitizens = shuffle([...citizens]);
    const first = shuffledCitizens[0];
    const rest  = shuffle([...shuffledCitizens.slice(1), ...imposters]);
    return [first, ...rest];
  }

  return shuffle([...citizens, ...imposters]);
}

function showDiscussion() {
  const HELP = helpBtn();
  setHeader(true, HELP);

  const order = buildSpeakingOrder();

  document.getElementById('discussion-list').innerHTML = order.map((pi, pos) => `
    <div class="player-row">
      <span class="pr-num">${pos + 1}</span>
      <span class="pr-name">${escapeHtml(G.players[pi])}</span>
      <span class="pr-badge ${pos === 0 ? 'first' : 'order'}">${pos === 0 ? 'מתחיל! 🎙️' : `#${pos + 1}`}</span>
    </div>`).join('');

  showScreen('screen-discussion');
}

// ============================= VOTE =============================
function showVote() {
  setHeader(true, helpBtn());
  G.votedPlayer = -1;

  document.getElementById('vote-list').innerHTML = G.players.map((name, i) => `
    <button class="vote-btn" id="vbtn-${i}" onclick="selectVote(${i})">
      <span class="vb-num">${i + 1}</span>
      <span class="vb-name">${escapeHtml(name)}</span>
      <iconify-icon icon="mdi:close-circle-outline" class="vb-icon"></iconify-icon>
    </button>`).join('');

  document.getElementById('vote-confirm').style.display = 'none';
  showScreen('screen-vote');
}

function selectVote(idx) {
  G.players.forEach((_, i) => document.getElementById(`vbtn-${i}`).classList.remove('selected'));
  document.getElementById(`vbtn-${idx}`).classList.add('selected');
  G.votedPlayer = idx;
  document.getElementById('vote-confirm').style.display = 'block';
  vibrate([30]);
}

function confirmVote() {
  if (G.votedPlayer < 0) return;
  if (G.imposterIndices.includes(G.votedPlayer)) {
    showGuess();
  } else {
    showResult(true, false); // imposter(s) win — wrong citizen voted out
  }
}

// ============================= GUESS =============================
function showGuess() {
  setHeader(true, helpBtn());
  const impName = G.players[G.votedPlayer];
  document.getElementById('guess-sub').innerHTML =
    `<strong>${impName}</strong>, תפסו אותך!<br>נחש את המילה הסודית — ונצח!`;

  // 4 choices: real word + 3 distractors from the same category
  const pool     = CATEGORIES[G.category].filter(w => w !== G.secretWord);
  const shuffled = shuffle([...pool]).slice(0, 3);
  const choices  = shuffle([G.secretWord, ...shuffled]);

  document.getElementById('guess-choices').innerHTML = choices.map(w => `
    <button class="guess-choice" data-word="${w}" onclick="submitGuess(this)">
      ${w}
    </button>`).join('');

  showScreen('screen-guess');
}

function submitGuess(btn) {
  const guessed = btn.dataset.word === G.secretWord;
  showResult(guessed, true);
}

// ============================= RESULT =============================
function showResult(imposterWon, guessAttempted) {
  setHeader(true, helpBtn());

  const screen = document.getElementById('screen-result');
  screen.className = `screen has-header ${imposterWon ? 'imposter-wins' : 'citizens-win'}`;

  const crownEl = document.getElementById('result-crown');
  const nameEl  = document.getElementById('result-name');
  const multi   = G.imposterIndices.length > 1;

  if (imposterWon) {
    crownEl.textContent = '🕵️';
    if (guessAttempted) {
      nameEl.innerHTML = `<span style="color:var(--red)">${multi ? 'אחד המתחזים ניחש וניצח!' : 'המתחזה ניחש וניצח!'}</span>`;
    } else {
      const wrongName = G.players[G.votedPlayer];
      nameEl.innerHTML = `<span style="color:var(--red)">${multi ? 'המתחזים ניצחו!' : 'המתחזה ניצח!'}</span>
        <div style="font-size:1.1rem;color:var(--text-dim);margin-top:6px;font-weight:700">הצבעתם על ${wrongName} — אזרח תמים 😅</div>`;
    }
    vibrate([500]);
  } else {
    crownEl.textContent = '🎉';
    nameEl.innerHTML = `<span style="color:var(--green)">האזרחים ניצחו!</span>`;
    launchConfetti();
    vibrate([200, 100, 200, 100, 400]);
  }

  document.getElementById('ri-imposter-label').textContent = multi ? 'המתחזים היו' : 'המתחזה היה';
  document.getElementById('ri-imposter').textContent = G.imposterIndices.map(i => G.players[i]).join(', ');
  document.getElementById('ri-word').textContent     = G.secretWord;
  document.getElementById('ri-category').textContent = G.category;

  showScreen('screen-result');
}

// ============================= NAV HELPERS =============================
function goToSettings() {
  setHeader(true,
    `<button class="header-btn" onclick="openInfo('rules')">
      <iconify-icon icon="mdi:help-circle-outline"></iconify-icon> כללים</button>`
  );
  showScreen('screen-settings');
}

function goHome() {
  if (!confirm('לחזור לדף הבית? המשחק הנוכחי יאופס.')) return;
  setHeader(false);
  showScreen('screen-home');
}

function newGame() {
  setHeader(false);
  showScreen('screen-home');
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function setHeader(visible, slotHtml = '') {
  document.getElementById('page-header').style.display = visible ? 'flex' : 'none';
  document.getElementById('header-slot').innerHTML = slotHtml;
  document.getElementById('home-help-btn').style.display = visible ? 'none' : 'flex';
}

function helpBtn() {
  return `<button class="header-btn" onclick="openInfo('rules')">
    <iconify-icon icon="mdi:help-circle-outline"></iconify-icon> כללים</button>`;
}

// ============================= CONFETTI =============================
function launchConfetti() {
  const area = document.getElementById('confetti-area');
  area.innerHTML = '';
  const colors = ['#facc15','#22c55e','#38bdf8','#f97316','#a855f7','#ec4899','#fff'];
  for (let i = 0; i < 60; i++) {
    const p = document.createElement('div');
    p.className = 'confetti-piece';
    p.style.cssText = [
      `left:${Math.random()*100}%`,
      `background:${colors[~~(Math.random()*colors.length)]}`,
      `width:${6+Math.random()*10}px`,
      `height:${6+Math.random()*10}px`,
      `border-radius:${Math.random()>.5?'50%':'2px'}`,
      `animation-duration:${2+Math.random()*3}s`,
      `animation-delay:${Math.random()*1.5}s`,
    ].join(';');
    area.appendChild(p);
  }
}

// ============================= UTILS =============================
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = ~~(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
function pickRandom(arr) { return arr[~~(Math.random() * arr.length)]; }
function vibrate(p) { try { navigator.vibrate && navigator.vibrate(p); } catch(e) {} }

// ============================= INFO SHEET =============================
const INFO_CONTENT = {
  rules: `
    <div class="rules-section">
      <h3><iconify-icon icon="mdi:cellphone-arrow-down-variant"></iconify-icon> Pass &amp; Play</h3>
      <p>משחק מסיבה לקבוצה אחת עם טלפון אחד. כל שחקן רואה בסתר את תפקידו.</p>
    </div>
    <div class="rules-section">
      <h3><iconify-icon icon="mdi:spy"></iconify-icon> הגדרות</h3>
      <p>מרבית השחקנים הם <strong style="color:var(--green)">אזרחים</strong> שיודעים את המילה הסודית. שחקן אחד בלבד הוא <strong style="color:var(--red)">המתחזה</strong> — הוא לא יודע!</p>
    </div>
    <div class="rules-section">
      <h3><iconify-icon icon="mdi:play-circle-outline"></iconify-icon> מהלך המשחק</h3>
      <div class="rules-item">
        <span class="ri-icon"><iconify-icon icon="mdi:numeric-1-circle-outline"></iconify-icon></span>
        <span class="ri-text">כל שחקן מקבל בסתר את תפקידו — <strong>אזרח</strong> (רואה את המילה) או <strong>מתחזה</strong>.</span>
      </div>
      <div class="rules-item">
        <span class="ri-icon"><iconify-icon icon="mdi:numeric-2-circle-outline"></iconify-icon></span>
        <span class="ri-text">כל שחקן אומר בתורו <strong>מילה אחת בלבד</strong> הקשורה למילה הסודית — המתחזה צריך להמציא!</span>
      </div>
      <div class="rules-item">
        <span class="ri-icon"><iconify-icon icon="mdi:vote-outline"></iconify-icon></span>
        <span class="ri-text">לאחר שכולם דיברו, <strong>מצביעים</strong> יחד מי לדעתם המתחזה.</span>
      </div>
    </div>
    <div class="rules-section">
      <h3><iconify-icon icon="mdi:trophy-outline"></iconify-icon> תנאי ניצחון</h3>
      <div class="rules-item">
        <span class="ri-icon"><iconify-icon icon="mdi:check-circle-outline" style="color:var(--green)"></iconify-icon></span>
        <span class="ri-text"><strong>אזרחים מנצחים:</strong> הצביעו על המתחזה — והוא לא הצליח לנחש את המילה הסודית.</span>
      </div>
      <div class="rules-item">
        <span class="ri-icon"><iconify-icon icon="mdi:close-circle-outline" style="color:var(--red)"></iconify-icon></span>
        <span class="ri-text"><strong>המתחזה מנצח:</strong> הצביעו על אזרח תמים — <em>או</em> שהמתחזה נתפס אך ניחש נכון!</span>
      </div>
    </div>`,
  about: `
    <div class="rules-section">
      <h3><iconify-icon icon="mdi:star-outline"></iconify-icon> משחקים נבחרים</h3>
      <div class="game-tiles">
        <a class="game-tile tile-imposter" href="https://loteman.github.io/Imposter/" target="_blank" rel="noopener">
          <span class="tile-emoji">🕵️</span>
          <span class="tile-name">המתחזה</span>
        </a>
        <a class="game-tile tile-alias" href="https://loteman.github.io/GuessWord/" target="_blank" rel="noopener">
          <span class="tile-emoji">🗣️</span>
          <span class="tile-name">נחש ת׳מילה</span>
        </a>
        <a class="game-tile tile-category" href="https://loteman.github.io/Categorys/" target="_blank" rel="noopener">
          <span class="tile-emoji">🏷️</span>
          <span class="tile-name">מה בקטגוריה?</span>
        </a>
        <a class="game-tile tile-hirtotim" href="https://loteman.github.io/Opposites/" target="_blank" rel="noopener">
          <span class="tile-emoji">🤥</span>
          <span class="tile-name">חירטוטים</span>
        </a>
      </div>
    </div>
    <div class="rules-section">
      <h3><iconify-icon icon="mdi:view-grid-outline"></iconify-icon> לכל המשחקים</h3>
      <a class="about-link" href="https://loteman.github.io/Loteman-Games/games.html" target="_blank" rel="noopener">
        <div>
          <div class="about-link-label"><iconify-icon icon="mdi:gamepad-variant-outline"></iconify-icon> כל המשחקים</div>
          <div class="about-link-sub">לרשימה המלאה — לחץ לביקור באתר</div>
        </div>
        <iconify-icon icon="mdi:open-in-new" style="font-size:1rem;color:var(--text-dim)"></iconify-icon>
      </a>
    </div>
    <div class="rules-section">
      <h3><iconify-icon icon="mdi:information-outline"></iconify-icon> אודות</h3>
      <a class="about-link" href="https://loteman.github.io/Loteman-Games/" target="_blank" rel="noopener">
        <div>
          <div class="about-link-label"><iconify-icon icon="mdi:gamepad-variant-outline"></iconify-icon> Loteman Games</div>
          <div class="about-link-sub">למשחקים נוספים — לחץ לביקור באתר</div>
        </div>
        <iconify-icon icon="mdi:open-in-new" style="font-size:1rem;color:var(--text-dim)"></iconify-icon>
      </a>
      <div class="about-tm">המתחזה © ${new Date().getFullYear()}<br>כל הזכויות שמורות ל-Loteman Games</div>
    </div>`
};

let _infoTab = 'rules';

function openInfo(type) {
  _infoTab = type || 'rules';
  document.getElementById('tab-rules').classList.toggle('active', _infoTab === 'rules');
  document.getElementById('tab-about').classList.toggle('active', _infoTab === 'about');
  document.getElementById('info-content').innerHTML = INFO_CONTENT[_infoTab];
  if (!document.getElementById('info-sheet').classList.contains('open')) {
    document.getElementById('info-backdrop').classList.add('open');
    document.getElementById('info-sheet').classList.add('open');
  }
}
function switchInfoTab(type) { openInfo(type); }
function closeInfo() {
  document.getElementById('info-backdrop').classList.remove('open');
  document.getElementById('info-sheet').classList.remove('open');
}
