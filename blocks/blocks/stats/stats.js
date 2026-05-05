/**
 * Stats block.
 * Renders sortable batting and pitching tables.
 */
const battingData = [
  { name:'Greg Madaia', gp:2, h:8, ab:9, avg:.889, r:7, b2:1, b3:1, hr:4, rbi:7, bb:1, obp:.900 },
  { name:'James Romeo', gp:2, h:7, ab:8, avg:.875, r:4, b2:2, b3:0, hr:1, rbi:7, bb:1, obp:.889 },
  { name:'Mike Bergs', gp:2, h:7, ab:9, avg:.778, r:4, b2:2, b3:0, hr:0, rbi:5, bb:0, obp:.778 },
  { name:'Mike Caton', gp:6, h:15, ab:20, avg:.750, r:7, b2:0, b3:1, hr:1, rbi:9, bb:2, obp:.773 },
  { name:'Jimmy Morrell', gp:2, h:6, ab:8, avg:.750, r:6, b2:2, b3:0, hr:1, rbi:5, bb:0, obp:.750 },
  { name:'Jovan Sapp', gp:6, h:14, ab:20, avg:.700, r:10, b2:0, b3:0, hr:2, rbi:13, bb:4, obp:.750 },
  { name:'Paul Ingrassia', gp:4, h:7, ab:10, avg:.700, r:6, b2:0, b3:0, hr:0, rbi:5, bb:5, obp:.800 },
  { name:'Jimmy Bopp', gp:4, h:11, ab:16, avg:.688, r:7, b2:0, b3:0, hr:1, rbi:8, bb:1, obp:.706 },
  { name:'Nick Johnson', gp:8, h:23, ab:35, avg:.657, r:13, b2:3, b3:0, hr:0, rbi:16, bb:1, obp:.667 },
  { name:'Hec Rincon', gp:6, h:17, ab:26, avg:.654, r:8, b2:2, b3:0, hr:0, rbi:7, bb:0, obp:.654 },
  { name:'Justin Grosskurth', gp:4, h:10, ab:16, avg:.625, r:6, b2:1, b3:0, hr:0, rbi:3, bb:2, obp:.667 },
  { name:'Matt LaCapra', gp:8, h:22, ab:37, avg:.595, r:15, b2:1, b3:0, hr:1, rbi:9, bb:0, obp:.595 },
  { name:'Devin Miller', gp:2, h:4, ab:7, avg:.571, r:2, b2:0, b3:0, hr:0, rbi:2, bb:1, obp:.625 },
  { name:'Frank Digregorio', gp:2, h:5, ab:9, avg:.556, r:4, b2:1, b3:0, hr:1, rbi:4, bb:0, obp:.556 },
  { name:'Jon Petchonka', gp:4, h:7, ab:14, avg:.500, r:8, b2:2, b3:0, hr:3, rbi:9, bb:3, obp:.588 },
  { name:'Jon Michel', gp:4, h:5, ab:11, avg:.455, r:3, b2:1, b3:0, hr:0, rbi:5, bb:5, obp:.625 },
  { name:'Mike Volpe', gp:6, h:10, ab:25, avg:.400, r:9, b2:1, b3:0, hr:0, rbi:3, bb:1, obp:.423 },
  { name:'Joe Economos', gp:2, h:2, ab:6, avg:.333, r:4, b2:0, b3:0, hr:0, rbi:1, bb:3, obp:.556 },
  { name:'Dandre Baker', gp:2, h:2, ab:6, avg:.333, r:3, b2:0, b3:0, hr:0, rbi:5, bb:1, obp:.429 },
  { name:'Joe Gergenti', gp:4, h:5, ab:16, avg:.313, r:3, b2:0, b3:0, hr:0, rbi:4, bb:1, obp:.353 },
  { name:'Shawn Miller', gp:6, h:6, ab:22, avg:.273, r:4, b2:0, b3:1, hr:0, rbi:5, bb:4, obp:.385 },
];

const pitchingData = [
  { name:'Matt LaCapra', gp:4, w:3, l:1, inn:26, ra:43, k:4, bb:6 },
  { name:'Shawn Miller', gp:2, w:2, l:0, inn:15, ra:23, k:4, bb:4 },
];

const batCols = ['gp','h','ab','avg','r','b2','b3','hr','rbi','bb','obp'];
const batLabels = ['GP','H','AB','AVG','R','2B','3B','HR','RBI','BB','OBP'];

function fmtAvg(v) { return v.toFixed(3).replace(/^0/, ''); }

function renderBatting(container, sortKey, sortDir) {
  const sorted = [...battingData].sort((a, b) => (sortDir === 'desc' ? b[sortKey] - a[sortKey] : a[sortKey] - b[sortKey]));

  let html = '<div class="stats-header"><div>Player</div>';
  batLabels.forEach((l) => { html += `<div>${l}</div>`; });
  html += '</div>';

  sorted.forEach((p, i) => {
    html += `<div class="stats-row${i === 0 ? ' top' : ''}">`;
    html += `<div class="player">${i === 0 ? '<span class="star">★</span>' : ''}${p.name}</div>`;
    batCols.forEach((c) => {
      const hl = c === sortKey ? ' highlight' : '';
      const val = (c === 'avg' || c === 'obp') ? fmtAvg(p[c]) : p[c];
      html += `<div class="stat-val${hl}">${val}</div>`;
    });
    html += '</div>';
  });

  container.innerHTML = html;
}

function renderPitching(container) {
  const cols = ['gp','w','l','inn','ra','k','bb'];
  const labels = ['GP','W','L','INN','RA','K','BB'];
  let html = '<div class="pitch-header"><div>Pitcher</div>';
  labels.forEach((l) => { html += `<div>${l}</div>`; });
  html += '</div>';

  pitchingData.forEach((p) => {
    html += '<div class="pitch-row">';
    html += `<div class="player">${p.name}</div>`;
    cols.forEach((c) => { html += `<div class="stat-val">${p[c]}</div>`; });
    html += '</div>';
  });
  container.innerHTML = html;
}

export default function decorate(block) {
  let currentSort = 'avg';
  let sortDir = 'desc';

  block.innerHTML = `
    <div class="stats-subtitle">Batting</div>
    <div class="sort-btns" id="sortBtns"></div>
    <div class="stats-scroll-hint">← Scroll horizontally to see all stats →</div>
    <div class="stats-table-wrap"><div class="stats-grid" id="battingTable"></div></div>
    <div class="stats-subtitle">Pitching</div>
    <div class="pitch-table-wrap"><div class="pitch-grid" id="pitchTable"></div></div>
    <p class="stats-source">Source: <a href="https://www.legacysoftball.com/stats---spring-26---1.html" target="_blank">Legacy Softball</a> &bull; Updated after each game day.</p>
  `;

  const battingEl = block.querySelector('#battingTable');
  const pitchEl = block.querySelector('#pitchTable');
  const sortBtnsEl = block.querySelector('#sortBtns');

  function renderSortBtns() {
    const keys = [
      { key: 'avg', label: 'AVG' }, { key: 'gp', label: 'GP' }, { key: 'h', label: 'H' },
      { key: 'ab', label: 'AB' }, { key: 'r', label: 'R' }, { key: 'b2', label: '2B' },
      { key: 'b3', label: '3B' }, { key: 'hr', label: 'HR' }, { key: 'rbi', label: 'RBI' },
      { key: 'bb', label: 'BB' }, { key: 'obp', label: 'OBP' },
    ];
    sortBtnsEl.innerHTML = keys.map((s) => {
      const isActive = s.key === currentSort;
      const arrow = isActive ? (sortDir === 'desc' ? ' ▼' : ' ▲') : '';
      return `<button class="sort-btn${isActive ? ' active' : ''}" data-key="${s.key}">${s.label}${arrow}</button>`;
    }).join('');
  }

  sortBtnsEl.addEventListener('click', (e) => {
    const btn = e.target.closest('.sort-btn');
    if (!btn) return;
    const key = btn.dataset.key;
    if (currentSort === key) {
      sortDir = sortDir === 'desc' ? 'asc' : 'desc';
    } else {
      currentSort = key;
      sortDir = 'desc';
    }
    renderSortBtns();
    renderBatting(battingEl, currentSort, sortDir);
  });

  renderSortBtns();
  renderBatting(battingEl, currentSort, sortDir);
  renderPitching(pitchEl);
}
