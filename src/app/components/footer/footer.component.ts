import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer>
      <div>© 2025 Khalid Boumaghdar. All rights reserved.</div>
      <div>Built with passion · Maroc 🇲🇦</div>
    </footer>
  `,
  styles: [`
    footer {
      padding: 2rem 4rem;
      border-top: 1px solid var(--border);
      display: flex; justify-content: space-between; align-items: center;
      font-family: 'DM Mono', monospace; font-size: 0.75rem; color: var(--muted);
    }
    @media (max-width: 768px) {
      footer { flex-direction: column; gap: 0.5rem; text-align: center; padding: 1.5rem 1.25rem; }
    }
  `]
})
export class FooterComponent {}
