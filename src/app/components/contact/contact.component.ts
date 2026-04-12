import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  form = { name: '', email: '', message: '' };
  btnText  = 'send message →';
  sending  = false;
  showToast = false;

  links = [
    { icon: '✉',  label: 'khalid.boumaghdar@email.com', href: 'mailto:khalid.boumaghdar@email.com' },
    { icon: '📱', label: '+212 611 782 921',             href: 'tel:+212611782921' },
    { icon: '🔗', label: 'linkedin.com/in/khalidboumaghdar', href: 'https://linkedin.com/in/khalidboumaghdar' },
    { icon: '📍', label: 'Morocco',                      href: '#' },
  ];

  handleSubmit(e: Event): void {
    e.preventDefault();
    if (this.sending) return;
    this.sending = true;
    this.btnText  = 'sending...';

    setTimeout(() => {
      this.btnText = '✓ sent!';
      this.showToast = true;

      setTimeout(() => {
        this.showToast = false;
        this.btnText   = 'send message →';
        this.sending   = false;
        this.form      = { name: '', email: '', message: '' };
      }, 3500);
    }, 1200);
  }
}
