export default function decorate(block) {
  block.innerHTML = `
    <div class="contact-form" id="contactForm">
      <div class="form-group">
        <label class="form-label">Name</label>
        <input type="text" class="form-input" placeholder="Your name">
      </div>
      <div class="form-group">
        <label class="form-label">Email</label>
        <input type="email" class="form-input" placeholder="your@email.com">
      </div>
      <div class="form-group">
        <label class="form-label">Subject</label>
        <input type="text" class="form-input" placeholder="What's this about?">
      </div>
      <div class="form-group">
        <label class="form-label">Message</label>
        <textarea rows="5" class="form-textarea" placeholder="Your message..."></textarea>
      </div>
      <button class="form-submit" id="contactSubmit">Send Message</button>
    </div>
    <div class="contact-social">
      <div class="social-title">Follow Us</div>
      <p>Stay connected on social media for game updates, photos, and team news.</p>
    </div>
  `;

  block.querySelector('#contactSubmit').addEventListener('click', () => {
    block.querySelector('#contactForm').innerHTML = `
      <div class="success-card">
        <div class="success-check">✓</div>
        <div class="success-title">Message Sent!</div>
        <p class="success-text">We'll get back to you as soon as we can.</p>
      </div>
    `;
  });
}
