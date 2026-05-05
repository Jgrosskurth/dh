export default async function decorate(block) {
  const navLinks = [
    { text: 'Home', href: '/' },
    { text: 'Schedule', href: '/schedule' },
    { text: 'Stats', href: '/stats' },
    { text: 'Hall of Fame', href: '/hall-of-fame' },
    { text: 'About Us', href: '/about' },
    { text: 'Contact Us', href: '/contact' },
  ];

  const currentPath = window.location.pathname;

  const logoSVG = `<svg width="48" height="48" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="72" stroke="#fff" stroke-width="4" fill="none"/>
    <line x1="100" y1="10" x2="100" y2="190" stroke="#fff" stroke-width="3"/>
    <line x1="10" y1="100" x2="190" y2="100" stroke="#fff" stroke-width="3"/>
    <circle cx="100" cy="100" r="12" stroke="#fff" stroke-width="2" fill="none"/>
    <text x="62" y="118" font-family="'Playfair Display',Georgia,serif" font-size="62" font-weight="700" fill="#fff" letter-spacing="-2">D</text>
    <text x="108" y="118" font-family="'Playfair Display',Georgia,serif" font-size="62" font-weight="700" fill="#fff" letter-spacing="-2">H</text>
  </svg>`;

  block.innerHTML = `
    <div class="nav-inner">
      <a class="nav-brand" href="/">
        ${logoSVG}
        <div>
          <div class="nav-brand-top">Drunken</div>
          <div class="nav-brand-bot">Hitmen</div>
        </div>
      </a>
      <nav class="nav-links" id="navLinks">
        ${navLinks.map((l) => `<a href="${l.href}" class="nav-link${currentPath === l.href || (l.href !== '/' && currentPath.startsWith(l.href)) ? ' active' : ''}">${l.text}</a>`).join('')}
      </nav>
      <button class="nav-hamburger" id="navHamburger" aria-label="Menu">☰</button>
    </div>
    <div class="nav-mobile" id="navMobile">
      ${navLinks.map((l) => `<a href="${l.href}" class="nav-link${currentPath === l.href ? ' active' : ''}">${l.text}</a>`).join('')}
    </div>
  `;

  const hamburger = block.querySelector('#navHamburger');
  const mobile = block.querySelector('#navMobile');
  hamburger.addEventListener('click', () => {
    mobile.classList.toggle('open');
    hamburger.textContent = mobile.classList.contains('open') ? '✕' : '☰';
  });
}
