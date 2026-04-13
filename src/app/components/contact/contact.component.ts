import { Component } from '@angular/core';
import emailjs from 'emailjs-com';

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
    { icon: '✉',  label: 'khalidboumaghdar07@email.com', href: 'mailto:khalidboumaghdar07@email.com' },
    { icon: '📱', label: '+212 611 782 921',             href: 'tel:+212611782921' },
    { icon: '🔗', label: 'linkedin.com/in/khalidboumaghdar', href: 'https://linkedin.com/in/khalidboumaghdar' },
    { icon: '📍', label: 'Morocco',                      href: '#' },
  ];

 handleSubmit(e: Event): void {
  e.preventDefault();

  if (this.sending) return;

  this.sending = true;
  this.btnText = 'sending...';

  const templateParams = {
    name: this.form.name,
    email: this.form.email,
    message: this.form.message,
  };

  emailjs.send(
    'service_cfirie9',
    'template_2ka3czt',
    templateParams,
    'ibX7HZuMsfxhaAFYD'
  ).then(() => {
    this.btnText = '✓ sent!';
    this.showToast = true;

    setTimeout(() => {
      this.showToast = false;
      this.btnText = 'send message →';
      this.sending = false;
      this.form = { name: '', email: '', message: '' };
    }, 3500);
  }).catch(() => {
    this.btnText = '❌ failed';
    this.sending = false;
  });
}
}
