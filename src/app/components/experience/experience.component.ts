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
      date: '2026 – Present',
      title: 'call_me_maybe',
      company: '1337 School · 42 Network — Python Track',
      desc: 'Function calling system built on Qwen3-0.6B LLM. Implements constrained decoding — guides the model token-by-token to guarantee 100% valid JSON output from natural language prompts into structured function calls with typed arguments. Pydantic validation, mypy typed.',
      tags: ['Python', 'LLM', 'Constrained Decoding', 'Pydantic', 'JSON', 'NLP'],
    },
    {
      date: '2025',
      title: 'DeliveryMatch',
      company: 'ENAA / Simplon — Spring Boot + Angular',
      desc: 'Full-stack collaborative co-transport platform connecting drivers and senders. Spring Boot REST API with JWT security, Spring Data JPA, MySQL, Docker; Angular 16 frontend with Chart.js analytics dashboard. Three roles: sender, driver, admin.',
      tags: ['Spring Boot', 'Spring Security', 'JWT', 'Angular', 'Docker', 'MySQL'],
    },
    {
      date: '2024',
      title: 'JobConnect',
      company: 'Projet de fin d\'études · ENSA Fès',
      desc: 'Full recruitment web platform with three roles: candidate, recruiter, and admin. MVC + DAO architecture, session-based authentication, application status tracking (accepted / refused / pending). Maven build, Bootstrap UI, deployed on Apache Tomcat.',
      tags: ['Java EE', 'Servlets', 'JSP', 'JDBC', 'MySQL', 'Maven', 'MVC'],
    },
    {
      date: '2024',
      title: 'ALX Files Manager',
      company: 'ALX Africa — Node.js Capstone',
      desc: 'Capstone project: file upload and management REST API built with Node.js and Express. Token-based authentication, background workers with Bull queue, Redis caching, MongoDB file storage. Covers full backend engineering lifecycle.',
      tags: ['JavaScript', 'Node.js', 'Express', 'MongoDB', 'Redis', 'Bull', 'REST API'],
    },
   
  ];
}