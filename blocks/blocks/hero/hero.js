export default function decorate(block) {
  const rows = [...block.children];
  const title = rows[0]?.textContent?.trim() || 'Drunken Hitmen';
  const subtitle = rows[1]?.textContent?.trim() || "Men's Slowpitch Softball";
  const est = rows[2]?.textContent?.trim() || 'Est. 2001 • Celebrating 25+ Years';

  const logoSVG = `<svg width="120" height="120" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="72" stroke="#fff" stroke-width="4" fill="none"/>
    <line x1="100" y1="10" x2="100" y2="190" stroke="#fff" stroke-width="3"/>
    <line x1="10" y1="100" x2="190" y2="100" stroke="#fff" stroke-width="3"/>
    <circle cx="100" cy="100" r="12" stroke="#fff" stroke-width="2" fill="none"/>
    <text x="62" y="118" font-family="'Playfair Display',Georgia,serif" font-size="62" font-weight="700" fill="#fff" letter-spacing="-2">D</text>
    <text x="108" y="118" font-family="'Playfair Display',Georgia,serif" font-size="62" font-weight="700" fill="#fff" letter-spacing="-2">H</text>
  </svg>`;

  block.innerHTML = `
    <div class="hero-grid"></div>
    <div class="hero-content">
      <div class="hero-logo">${logoSVG}</div>
      <h1>${title}</h1>
      <p class="hero-tagline">${subtitle}</p>
      <p class="hero-est">${est}</p>
    </div>
  `;
}
