export default function decorate(block) {
  const rows = [...block.children];
  const cards = [];
  rows.forEach((row) => {
    const cols = [...row.children];
    if (cols.length >= 4) {
      cards.push({
        name: cols[0]?.textContent?.trim(),
        years: cols[1]?.textContent?.trim(),
        note: cols[2]?.textContent?.trim(),
        inducted: cols[3]?.textContent?.trim(),
      });
    }
  });

  block.innerHTML = `<div class="hof-grid">${cards.map((p) => `
    <div class="hof-card">
      <div class="hof-year-bg">${p.inducted}</div>
      <div class="hof-inducted">Inducted ${p.inducted}</div>
      <div class="hof-name">${p.name}</div>
      <div class="hof-years">${p.years}</div>
      <div class="hof-note">${p.note}</div>
    </div>
  `).join('')}</div>`;
}
