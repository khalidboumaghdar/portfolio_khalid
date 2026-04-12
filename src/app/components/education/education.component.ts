import { Component } from '@angular/core';

export interface Education {
  year: string;
  degree: string;
  school: string;
}

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  items: Education[] = [
    { year: '2025 — Present', degree: 'Software Engineering',                                          school: '1337 Rabat (42 Network)' },
    { year: '2024 — 2025',   degree: 'Full Stack Dev — Java | Angular | Spring Boot',                 school: 'École Numérique Ahmed Al Hansali · Simplon — Certified' },
    { year: '2023 — 2024',   degree: 'Software Engineering',                                          school: 'ALX Africa — Certified' },
    { year: '2023 — 2024',   degree: 'Licence en Génie Logiciel',                                     school: 'ENSA Fès' },
    { year: '2021 — 2023',   degree: 'Technicien Spécialisé en Développement Informatique',           school: 'ETEC Fès' },
    { year: '2020 — 2021',   degree: 'Baccalauréat en Sciences Physiques',                            school: 'Lycée Noure, Beni Mellal' },
  ];
}
