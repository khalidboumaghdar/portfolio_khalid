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
    { year: '2024 — 2025',   degree: 'Full Stack Dev — Java | Angular | Spring Boot',                 school: 'Digital school Ahmed Al Hansali · Simplon — Certified' },
    { year: '2023 — 2024',   degree: 'Software Engineering',                                          school: 'ALX Africa — Certified' },
    { year: '2023 — 2024',   degree: 'Licence en Génie Logiciel',                                     school: 'The National School of Applied Sciences of Fez' },
    { year: '2021 — 2023',   degree: 'Technician specializing in IT development',           school: 'School of Economic and Commercial Techniques in Fez' },
    { year: '2020 — 2021',   degree: 'Bachelor’s degree in Physical Sciences',                            school: 'Noure High School, Beni Mellal' },
  ];
}
