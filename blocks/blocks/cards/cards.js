export default function decorate(block) {
  const rows = [...block.children];
  block.classList.add('cards-grid');
  rows.forEach((row) => {
    row.classList.add('card');
    const cols = [...row.children];
    if (cols[0]) cols[0].classList.add('card-content');
    // style card headings
    const h = row.querySelector('h3, h4');
    if (h) h.classList.add('card-title');
    const ps = row.querySelectorAll('p');
    ps.forEach((p) => {
      if (!p.classList.contains('button-container')) p.classList.add('card-text');
    });
  });
}
