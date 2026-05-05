export default async function decorate(block) {
  const logoSVG = `<svg width="40" height="40" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="72" stroke="#fff" stroke-width="4" fill="none" opacity=".4"/>
    <line x1="100" y1="10" x2="100" y2="190" stroke="#fff" stroke-width="3" opacity=".4"/>
    <line x1="10" y1="100" x2="190" y2="100" stroke="#fff" stroke-width="3" opacity=".4"/>
    <circle cx="100" cy="100" r="12" stroke="#fff" stroke-width="2" fill="none" opacity=".4"/>
    <text x="62" y="118" font-family="'Playfair Display',Georgia,serif" font-size="62" font-weight="700" fill="#fff" opacity=".4" letter-spacing="-2">D</text>
    <text x="108" y="118" font-family="'Playfair Display',Georgia,serif" font-size="62" font-weight="700" fill="#fff" opacity=".4" letter-spacing="-2">H</text>
  </svg>`;

  block.innerHTML = `
    <div class="footer-inner">
      ${logoSVG}
      <div class="footer-text">Drunken Hitmen &bull; Est. 2001 &bull; 25+ Years</div>
      <div class="footer-copy">&copy; 2001-2026 Drunken Hitmen Softball. All rights reserved.</div>
    </div>
  `;
}
