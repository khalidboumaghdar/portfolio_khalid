import { Component } from '@angular/core';

export interface Project {
  id: string;
  title: string;
  sub: string;
  desc: string;
  tags: string[];
}

export interface School {
  id: string;
  badge: string;
  label: string;
  logoClass: string;
  logoText: string;
  name: string;
  badgeText: string;
  period: string;
  desc: string;
  projects: Project[];
  activeProject: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  activeSchool = 's1337';

  schools: School[] = [
    {
      id: 's1337', badge: '42', label: '1337 Rabat',
      logoClass: 's1337-logo', logoText: '42',
      name: '1337 Rabat', badgeText: '42 Network',
      period: '2025 — Present · Software Engineering',
      desc: 'Part of the global 42 network — a peer-to-peer, project-based engineering school with no teachers and no classes. Pure problem-solving through code.',
      activeProject: 'p1337_1',
      projects: [
        { id: 'p1337_1', title: 'libft — C Standard Library', sub: 'Reimplementing libc from scratch in C',
          desc: 'Full reimplementation of the C standard library (40+ functions) from scratch without using any standard functions. Covers string manipulation, memory management, linked lists, and more.',
          tags: ['C', 'Makefile', 'Pointers', 'Memory'] },
        { id: 'p1337_2', title: 'ft_printf', sub: 'Custom printf with full format support',
          desc: 'A complete reimplementation of printf() handling %c, %s, %d, %i, %u, %x, %X, %p and %% with full flag, width, and precision support.',
          tags: ['C', 'Variadic', 'Formatting'] },
        { id: 'p1337_3', title: 'get_next_line', sub: 'File descriptor reader, line by line',
          desc: 'Reads a file descriptor one line at a time with static buffers. Handles multiple file descriptors simultaneously with any buffer size.',
          tags: ['C', 'File I/O', 'Static vars'] },
      ],
    },
    {
      id: 'simplon', badge: 'S', label: 'Simplon',
      logoClass: 'simplon-logo', logoText: 'S',
      name: 'Simplon', badgeText: 'Full Stack Java',
      period: '2024 — 2025 · Angular · Spring Boot · Java',
      desc: 'Professional certification program focused on enterprise Java development with Spring Boot backend and Angular frontend, following Agile/Scrum methodology.',
      activeProject: 'psimp_1',
      projects: [
        { id: 'psimp_1', title: 'Pharmacy Management System', sub: 'Full Stack ERP — Final year project',
          desc: 'Complete pharmacy ERP with drug inventory, stock alerts, prescription tracking, and sales analytics. Secured with JWT authentication and role-based access (pharmacist / assistant).',
          tags: ['Angular', 'Spring Boot', 'Java', 'MySQL', 'JWT', 'Figma'] },
      ],
    },
    {
      id: 'ensa', badge: 'E', label: 'ENSA Fès',
      logoClass: 'ensa-logo', logoText: 'E',
      name: 'ENSA Fès', badgeText: 'Licence Génie Logiciel',
      period: '2023 — 2024 · Software Engineering Degree',
      desc: 'National School of Applied Sciences — Bachelor in Software Engineering with a focus on web development, databases, software architecture, and project management.',
      activeProject: 'pensa_1',
      projects: [
        { id: 'pensa_1', title: 'E-Commerce Platform', sub: 'Capstone project — React + Laravel',
          desc: 'Full-stack e-commerce app with product catalog, stock management, order tracking, and admin dashboard. Built with React.js frontend and Laravel 10 REST API backend.',
          tags: ['React.js', 'Laravel 10', 'PHP', 'MySQL', 'Bootstrap'] },
        { id: 'pensa_2', title: 'Attendance Web App', sub: 'Internship — Agence Urbaine de Fès',
          desc: 'Staff attendance tracking system for the Urban Agency of Fès. Designed UML architecture, created Figma mockups, and built the full app using Laravel with Postman-tested REST APIs.',
          tags: ['Laravel', 'MySQL', 'UML', 'Figma', 'Postman'] },
      ],
    },
    {
      id: 'etec', badge: 'T', label: 'ETEC Fès',
      logoClass: 'etec-logo', logoText: 'T',
      name: 'ETEC Fès', badgeText: 'Technicien Spécialisé',
      period: '2021 — 2023 · Développement Informatique',
      desc: 'Specialized technician diploma in computer development. Foundational training in web development, databases, programming logic, and software development lifecycle.',
      activeProject: 'petec_1',
      projects: [
        { id: 'petec_1', title: 'Email Campaign Tool', sub: 'Internal tool — E-SEND SOLUTION',
          desc: 'Internal marketing management platform handling campaign creation, scheduling, sending (1,000/min), and performance analytics. Generated $2,000+ in revenue.',
          tags: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'JavaScript'] },
        { id: 'petec_2', title: 'C# AutoLogin App', sub: 'Desktop automation — E-SEND',
          desc: 'Windows desktop application that automates email account login via providers. Configured mail servers and optimized the sending pipeline, reducing manual work for marketing teams.',
          tags: ['C#', '.NET', 'Windows Forms', 'Automation'] },
      ],
    },
  ];

  get currentSchool(): School {
    return this.schools.find(s => s.id === this.activeSchool)!;
  }

  get activeProject(): Project {
    const s = this.currentSchool;
    return s.projects.find(p => p.id === s.activeProject)!;
  }

  switchSchool(id: string): void {
    this.activeSchool = id;
  }

  setActiveProject(school: School, projectId: string): void {
    school.activeProject = projectId;
  }
}
