/**
 * Schedule block.
 * Content authored as a table in DA with columns: Date, Opponent, Game1Score, Game2Score, Result1, Result2, Field, Note, Playoff, Series
 * Or loaded from a schedule.json query index.
 */
export default async function decorate(block) {
  // Try to load from JSON endpoint first, fall back to inline content
  let scheduleData;
  try {
    const resp = await fetch('/schedule-data.json');
    if (resp.ok) {
      const json = await resp.json();
      scheduleData = json.data || json;
    }
  } catch (e) {
    // fall back to hardcoded
  }

  if (!scheduleData) {
    // Hardcoded schedule data
    scheduleData = [
      { date: 'Sunday, March 22nd', opp: 'Bandits', s1: '24-9', s2: '22-9', r1: 'W', r2: 'W', field: 'Legacy Field' },
      { date: 'Sunday, March 29th', opp: 'Tainos', s1: '8-9', s2: '8-7', r1: 'L', r2: 'W', field: 'Legacy Field' },
      { date: 'Sunday, April 5th', note: 'NO GAMES, Easter' },
      { date: 'Sunday, April 12th', opp: 'Glove Handles', s1: '23-16', s2: '24-11', r1: 'W', r2: 'W', field: 'Legacy Field' },
      { date: 'Sunday, April 19th', opp: 'War Machine', s1: '9-10', s2: '14-19', r1: 'L', r2: 'L', field: 'Legacy Field' },
      { date: 'Sunday, April 26th', note: 'RAINOUT' },
      { date: 'Sunday, May 3rd, Playoffs Round 1', opp: 'Snipers', s1: '14-4', s2: '20-7', r1: 'W', r2: 'W', field: 'Legacy Field', playoff: 'true', series: '(2B) Drunken Hitmen vs (3B) Snipers, Best of 3' },
      { date: 'Sunday, May 10th', note: 'NO GAMES, Mother\'s Day' },
      { date: 'Sunday, May 17th, Division Championships', opp: 'Walkoff Warriors', r1: 'TBD', r2: 'TBD', field: 'Sylvan', playoff: 'true', series: '(2B) Drunken Hitmen vs (4B) Warriors, Best of 3' },
    ];
  }

  let html = '';
  scheduleData.forEach((week) => {
    const isPlayoff = week.playoff === 'true' || week.playoff === true;
    html += `<div class="week-block${isPlayoff ? ' playoff' : ''}">`;
    html += `<div class="week-header"><span class="week-date">${week.date}</span>`;
    if (isPlayoff) html += '<span class="playoff-badge">PLAYOFFS</span>';
    html += '</div><div class="week-body">';

    if (week.note) {
      html += `<div class="week-note">${week.note}</div>`;
    }

    if (week.opp) {
      if (week.series) html += `<div class="series-label">${week.series}</div>`;
      // Game 1
      const r1class = week.r1 || 'TBD';
      html += `<div class="game-row">
        <div class="game-info">
          <span class="game-pip ${r1class}">${r1class}</span>
          <div><span class="game-label">Game 1 vs ${week.opp}</span>
          ${week.field ? `<span class="game-field">${week.field}</span>` : ''}</div>
        </div>`;
      if (week.s1) {
        const [ours, theirs] = week.s1.split('-');
        html += `<div class="game-score"><span class="ours">${ours}</span><span class="sep">-</span><span>${theirs}</span></div>`;
      } else {
        html += '<span class="game-tbd">TBD</span>';
      }
      html += '</div>';

      // Game 2
      if (week.r2) {
        const r2class = week.r2 || 'TBD';
        html += `<div class="game-row">
          <div class="game-info">
            <span class="game-pip ${r2class}">${r2class}</span>
            <span class="game-label">Game 2 vs ${week.opp}</span>
          </div>`;
        if (week.s2) {
          const [ours2, theirs2] = week.s2.split('-');
          html += `<div class="game-score"><span class="ours">${ours2}</span><span class="sep">-</span><span>${theirs2}</span></div>`;
        } else {
          html += '<span class="game-tbd">TBD</span>';
        }
        html += '</div>';
      }
    }
    html += '</div></div>';
  });

  html += `<div class="schedule-link"><a href="https://www.legacysoftball.com/schedule---spring-25---11.html" target="_blank" rel="noopener noreferrer">View full league schedule on Legacy Softball →</a></div>`;

  block.innerHTML = html;
}
