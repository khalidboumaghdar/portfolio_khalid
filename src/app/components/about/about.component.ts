import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  highlights = [
    'Based in Morocco · Available for remote & on-site',
    'Fluent in Arabic, French & English',
    '3+ certifications · 5+ shipped projects',
    'Passionate about open-source & continuous learning',
  ];
}
