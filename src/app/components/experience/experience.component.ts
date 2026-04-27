import { Component } from '@angular/core';

export interface Experience {
  date: string;
  title: string;
  company: string;
  desc: string;
  tags: string[];
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      date: 'Sept – Oct 2025',
      title: 'Full Stack Developer — Pharmacy App',
      company: 'Final Year Project · Simplon / École Numérique Ahmed Al Hansali',
      desc: 'Built a complete pharmacy management system with secure user roles (pharmacist, assistant), drug inventory, sales tracking, and prescription management. Designed the full UI/UX in Figma and implemented it with Angular + Spring Boot.',
      tags: ['Angular', 'Spring Boot', 'Java', 'MySQL', 'Figma', 'TypeScript'],
    },
    {
      date: 'Août – Sept 2024',
      title: 'Full Stack Developer — E-Commerce App',
      company: 'Licence Capstone Project · ENSA Fès',
      desc: 'Developed an e-commerce platform with product catalog, stock management, and order processing. Built responsive front-end with React.js and robust back-end API with Laravel 10.',
      tags: ['React.js', 'Laravel 10', 'PHP', 'MySQL', 'Bootstrap'],
    },
    {
      date: 'Avril 2023',
      title: 'Web Developer Intern',
      company: 'Agence Urbaine de Fès',
      desc: 'Built an attendance management web application. Designed UML diagrams (use case, class, sequence), created UI/UX wireframes in Figma, and implemented the full stack using Laravel + MySQL with Bootstrap front-end. Tested APIs with Postman.',
      tags: ['Laravel', 'PHP', 'MySQL', 'Figma', 'UML', 'Postman'],
    },
  ];
}
