import { Component } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

export interface Project {
  id: string; title: string; sub: string; desc: string; tags: string[];
  github?: string; demo?: string; image?: string;
}

export interface School {
  id: string; badge: string; label: string; logoClass: string; logoText: string;
  name: string; badgeText: string; period: string; desc: string;
  projects: Project[]; activeProject: string;
}

export interface FreelanceProject {
  title: string; sub: string; desc: string; tags: string[];
  type: 'web' | 'mobile' | 'tool' | 'api';
  iconClass: string; year: string; featured?: boolean;
  stat?: string; statLabel?: string;
  github?: string; demo?: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    trigger('fadeSlide', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(18px)' }),
        animate('400ms cubic-bezier(0.25,0.8,0.25,1)',
          style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('staggerIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(24px)' }),
        animate('450ms cubic-bezier(0.25,0.8,0.25,1)',
          style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class ProjectsComponent {
  activeCategory: 'school' | 'freelance' = 'school';
  activeSchool = 's1337';

  schools: School[] = [
  {
    id: 's1337',
    badge: '42',
    label: '1337 · C',
    logoClass: 'logo-1337',
    logoText: '42',
    name: '1337 School — C Track',
    badgeText: 'System Programming',
    period: '2022 – Present',
    desc: 'A peer-to-peer coding school part of the 42 Network. No teachers, no classes — pure project-based learning in C and beyond.',
    activeProject: 'pool',
    projects: [
      {
        id: 'pool',
        title: 'C Piscine Pool',
        sub: 'Intensive C bootcamp — 1337 Selection',
        desc: 'A 26-day intensive selection bootcamp covering the fundamentals of C programming: variables, pointers, memory management, file I/O, and algorithmic problem-solving under pressure.',
        tags: ['C', 'Shell', 'Algorithms', 'Unix'],
        github: 'https://github.com/khalidboumaghdar/C_1337_POOL',
      },
      {
        id: 'libft',
        title: 'Libft',
        sub: 'Custom C Standard Library — 42 Cursus',
        desc: 'Re-implementation of a subset of the C standard library from scratch, including string manipulation, memory allocation, linked lists, and utility functions reused across all future projects.',
        tags: ['C', 'Makefile', 'Memory Management', 'Linked Lists'],
        github: 'https://github.com/khalidboumaghdar/1337_Libft',
      },
      {
        id: 'ftprintf',
        title: 'ft_printf',
        sub: 'printf() reimplementation — 42 Cursus',
        desc: 'A faithful recreation of the C printf() function using variadic arguments. Handles all major format specifiers (%s, %d, %x, %p…) and was integrated into Libft for use in later projects.',
        tags: ['C', 'Variadic Functions', 'Makefile', 'Formatting'],
        github: 'https://github.com/khalidboumaghdar/ft_printf',
      },
      {
        id: 'gnl',
        title: 'get_next_line',
        sub: 'Line-by-line file reader — 42 Cursus',
        desc: 'A function that reads one line at a time from any file descriptor using static variables and a dynamic buffer. The bonus part supports multiple simultaneous file descriptors.',
        tags: ['C', 'File Descriptors', 'Static Variables', 'Buffer Management'],
        github: 'https://github.com/khalidboumaghdar/get_next_line',
      },
      {
        id: 'pushswap',
        title: 'push_swap',
        sub: 'Sorting algorithm — 42 Cursus',
        desc: 'Sort a stack of integers using two stacks and a strictly limited set of operations (push, swap, rotate), with the fewest possible moves. Focuses on algorithm design and optimization.',
        tags: ['C', 'Algorithms', 'Sorting', 'Stack', 'Optimization'],
        github: 'https://github.com/khalidboumaghdar/push_swap',
      },
    ],
  },
  {
    id: 's1337py',
    badge: 'Py',
    label: '1337 · Python',
    logoClass: 'logo-1337py',
    logoText: 'Py',
    name: '1337 School — Python Track',
    badgeText: 'Python Modules',
    period: '2024 – Present',
    desc: 'Advanced Python curriculum at 1337: OOP, data structures, algorithms, graph traversal, and system simulation — all built from scratch.',
    activeProject: 'pymodules',
    projects: [
      {
        id: 'pymodules',
        title: 'Python Modules (01–10)',
        sub: 'Python curriculum — 42 Cursus',
        desc: 'A complete series of 10 Python modules covering core and advanced concepts: OOP, decorators, iterators, file I/O, functional programming, error handling, and more. Each module is an independent, graded project.',
        tags: ['Python', 'OOP', 'Functional Programming', 'Decorators', 'Iterators'],
        github: 'https://github.com/khalidboumaghdar/All_module_python',
      },
      {
        id: 'amazing',
        title: 'A-Maze-ing',
        sub: 'Maze generator & solver — 42 Cursus',
        desc: 'An interactive Python maze program built with DFS generation and BFS shortest-path solving. Features ASCII rendering, configurable grid size, color themes, and a publishable mazegen Python package.',
        tags: ['Python', 'DFS', 'BFS', 'Graph Theory', 'Data Structures', 'Pygame'],
        github: 'https://github.com/khalidboumaghdar/a-maze-ing',
      },
      {
        id: 'flyin',
        title: 'Fly-in',
        sub: 'Drone routing simulation — 42 Cursus',
        desc: 'An autonomous drone fleet management simulation that routes multiple drones through a zone network using a modified Dijkstra algorithm. Handles zone capacity limits, congestion penalties, and priority terrain — minimizing total turns.',
        tags: ['Python', 'Dijkstra', 'Graph Theory', 'Simulation', 'Pygame', 'heapq'],
        github: 'https://github.com/khalidboumaghdar/Fly-in',
      },
      {
        id: 'callmemaybe',
        title: 'call_me_maybe',
        sub: 'LLM Function Calling — 42 Cursus',
        desc: 'Building a reliable function calling system on top of a small 0.6B LLM (Qwen3). Uses constrained decoding to guarantee 100% valid JSON output — guiding the model token-by-token to translate natural language prompts into structured function calls with typed arguments.',
        tags: ['Python', 'LLM', 'Constrained Decoding', 'Pydantic', 'JSON', 'NLP'],
        // github: 'https://github.com/khalidboumaghdar/call_me_maybe', // uncomment when public
      },
    ],
  },
  {
  id: 'senaa',
  badge: 'SAS',
  label: 'ENAA · SAS',
  logoClass: 'logo-enaa',
  logoText: 'SAS',
  name: 'Ahmed Al Hansali · Simplon',
  badgeText: 'C Programming',          // ← changed
  period: '2023 – 2024',
  desc: 'End-of-SAS brief at ENAA / Simplon.co — a certified C programming module focused on low-level application development using structs, file I/O, and memory management.',
  activeProject: 'sas',
  projects: [
    {
      id: 'sas',
      title: 'Brief Fin de SAS',
      sub: 'Console task manager in C — ENAA / Simplon',
      desc: 'A console application built in C for the "OneHand" association to manage their mission tasks. Features full CRUD: create, edit, delete and display tasks, each with a title, description, due date, and priority level (high / low).',
      tags: ['C', 'CRUD', 'Console App', 'Structs', 'File I/O'],
      github: 'https://github.com/khalidboumaghdar/Enaa-Brief_fin_de_SAS',
    },
  ],
},
{
  id: 'senaa_fs',
  badge: 'FS',
  label: 'ENAA · FullStack',
  logoClass: 'logo-enaa-fs',
  logoText: 'FS',
  name: 'Ahmed Al Hansali · Simplon',
  badgeText: 'Full Stack Formation',
  period: '2024 – Present',
  desc: 'Full Stack web development training at ENAA / Simplon.co — building real-world applications across three Java tracks: Java Native, Java EE (JEE), and Spring Boot + Angular.',
  activeProject: 'blogapp',
  projects: [

    // ── TypeScript / Angular ──────────────────────────────
    {
      id: 'blogapp',
      title: 'Blog App',
      sub: 'Article publishing platform — Angular 16',
      desc: 'A full article management web app built with Angular 16. Users can browse, create, and manage blog posts through a component-driven UI with routing and services.',
      tags: ['Angular', 'TypeScript', 'HTML', 'CSS', 'RxJS'],
      github: 'https://github.com/khalidboumaghdar/ENAA_Bolg_App_Application-d-article',
    },
    {
      id: 'quizapp',
      title: 'Application de Quiz',
      sub: 'Interactive quiz app — Angular 16',
      desc: 'An interactive quiz application built with Angular 16. Presents questions one by one, tracks answers, calculates scores, and displays results — all managed through Angular components and services.',
      tags: ['Angular', 'TypeScript', 'HTML', 'CSS'],
      github: 'https://github.com/khalidboumaghdar/ENAA_Application_de_Quiz',
    },

    // ── Java Native (OOP) ─────────────────────────────────
    {
      id: 'javacalc',
      title: 'Calculatrice Java',
      sub: 'Java fundamentals — Brief 1',
      desc: 'First Java brief — a console calculator covering the basics of the language: variables, operators, control flow and methods.',
      tags: ['Java', 'OOP', 'Console App'],
      github: 'https://github.com/khalidboumaghdar/Enaa-Brief_java',
    },
    {
      id: 'javachallenges',
      title: 'Challenges pratiques',
      sub: 'OOP exercises — Java Native',
      desc: 'A series of 5 OOP challenges in Java: modelling a Dog, a Book collection, an Employee with salary logic, abstract Shape subclasses (Rectangle, Circle, Triangle), and a Vehicle/Car/Truck inheritance hierarchy.',
      tags: ['Java', 'OOP', 'Inheritance', 'Abstraction', 'Polymorphism'],
      github: 'https://github.com/khalidboumaghdar/Enaa_Challenges_pratiques',
    },
    {
      id: 'gestionenaa',
      title: 'Gestion ENAA',
      sub: 'School management system — Brief 2',
      desc: 'A console application in Java for managing learners, trainers, and classrooms at the ENAA training centre. Implements full OOP with CRUD operations and class–learner/trainer associations.',
      tags: ['Java', 'OOP', 'CRUD', 'Console App'],
      github: 'https://github.com/khalidboumaghdar/Enaa_Brief_2_Application_de_gestion_d-ENAA',
    },
    {
      id: 'bancaire',
      title: 'Application Bancaire',
      sub: 'Bank management system — Brief 3',
      desc: 'A console banking application in Java for managing clients, bank accounts, and operations (deposit, withdrawal, balance check). Designed with UML class, use-case and sequence diagrams.',
      tags: ['Java', 'OOP', 'UML', 'Console App', 'CRUD'],
      github: 'https://github.com/khalidboumaghdar/Enaa_Brief_3_Application_Bancaire',
    },

    // ── Java EE (JEE) ─────────────────────────────────────
    {
      id: 'stockmaster',
      title: 'StockMaster',
      sub: 'Inventory management — JEE',
      desc: 'A web-based stock management app built with Java EE (Servlets, JSP, JDBC) and MySQL. Supports full CRUD for products: add, edit, delete, and list with quantities. Deployed on Apache Tomcat.',
      tags: ['Java EE', 'Servlets', 'JSP', 'JDBC', 'MySQL', 'Bootstrap', 'Tomcat'],
      github: 'https://github.com/khalidboumaghdar/Enna_Aplication_de_gestion_Stock',
    },
    {
      id: 'doctorrv',
      title: 'DoctorRV',
      sub: 'Medical appointment system — JEE',
      desc: 'A web application for booking and managing medical appointments. Patients can book and view appointments, doctors can manage their schedule. Built with Java EE + MySQL.',
      tags: ['Java EE', 'Servlets', 'JSP', 'JDBC', 'MySQL', 'CSS', 'Tomcat'],
      github: 'https://github.com/khalidboumaghdar/Enaa_DoctorRV',
    },
    {
      id: 'jobconnect',
      title: 'JobConnect',
      sub: 'Recruitment platform — JEE / MVC',
      desc: 'A full recruitment web platform built with Java EE following MVC + DAO architecture. Candidates can apply to job offers; recruiters can manage listings and track application statuses (accepted, refused, pending) with role-based access control.',
      tags: ['Java EE', 'Servlets', 'JSP', 'JDBC', 'MySQL', 'Maven', 'Bootstrap', 'MVC'],
      github: 'https://github.com/khalidboumaghdar/JobConnect',
    },
    {
      id: 'sportflow',
      title: 'SportFlow',
      sub: 'Sports club management — JEE / MVC',
      desc: 'A web platform for managing sports clubs, coaches, and training sessions. Full CRUD for members, trainers and sessions; role-based auth; responsive Bootstrap UI. Built with Java EE MVC + MySQL on Tomcat.',
      tags: ['Java EE', 'Servlets', 'JSP', 'JDBC', 'MySQL', 'Maven', 'MVC', 'Bootstrap'],
      github: 'https://github.com/khalidboumaghdar/Enaa_SportFlow',
    },
    {
      id: 'constructionxpert',
      title: 'ConstructionXpert',
      sub: 'Construction project management — JEE / Jury Blanc',
      desc: 'Mock jury project: a Java EE web app for managing construction projects, tasks, resources, and suppliers. Full CRUD with admin authentication, resource quantity tracking, and supplier management — designed with UML diagrams.',
      tags: ['Java EE', 'Servlets', 'JSP', 'JDBC', 'MySQL', 'Maven', 'MVC', 'Bootstrap'],
      github: 'https://github.com/khalidboumaghdar/Enaa_Brief_Jury_Blanc',
    },

    // ── Spring Boot ───────────────────────────────────────
    {
      id: 'deliverymatch',
      title: 'DeliveryMatch',
      sub: 'Collaborative transport platform — Spring Boot + Angular',
      desc: 'A full-stack collaborative co-transport platform connecting drivers and senders. Spring Boot REST API with JWT security, Spring Data JPA, Docker; Angular 16 frontend with Chart.js dashboard. Three roles: sender, driver, admin.',
      tags: ['Spring Boot', 'Spring Security', 'JWT', 'JPA', 'MySQL', 'Angular', 'Docker', 'Maven'],
      github: 'https://github.com/khalidboumaghdar/DeliveryMatch',
    },
    {
      id: 'enaaSkills',
      title: 'ENAA Skills',
      sub: 'Skills assessment platform — Spring Boot (Part 1 & 2)',
      desc: 'A two-part Spring Boot project building a skills management and assessment platform. Part 1 covers the core REST API and data model; Part 2 extends it with advanced features.',
      tags: ['Spring Boot', 'Spring Data JPA', 'REST API', 'MySQL', 'Maven'],
      github: 'https://github.com/khalidboumaghdar/ENAA_SKills',
    },
  ],
},
{
  id: 'salx',
  badge: 'ALX',
  label: 'ALX',
  logoClass: 'logo-alx',
  logoText: 'ALX',
  name: 'ALX Africa',
  badgeText: 'Software Engineering',
  period: '2023 – 2024',
  desc: 'ALX Software Engineering Program — an intensive 12-month program covering full-stack development from low-level C/Shell to high-level Python, JavaScript backend, DevOps, and system engineering.',
  activeProject: 'alxzero',
  projects: [

    // ── Foundation ────────────────────────────────────────
    {
      id: 'alxzero',
      title: 'ALX Zero Day',
      sub: 'Onboarding & Shell basics — ALX',
      desc: 'First project of the ALX program — covers Git workflow, Shell scripting basics, and navigating the Unix environment. The starting point of the full engineering journey.',
      tags: ['Shell', 'Git', 'Unix', 'Bash'],
      github: 'https://github.com/khalidboumaghdar/alx-zero_day',
    },
    {
      id: 'alxprecourse',
      title: 'ALX Pre-Course',
      sub: 'Shell & Git fundamentals — ALX',
      desc: 'Pre-course projects covering Shell scripting, permissions, redirections, and Git fundamentals — building the command-line foundation before diving into C and Python.',
      tags: ['Shell', 'Bash', 'Git', 'Unix'],
      github: 'https://github.com/khalidboumaghdar/alx-pre_course',
    },

    // ── Low Level / C ─────────────────────────────────────
    {
      id: 'alxlowlevel',
      title: 'Low Level Programming',
      sub: 'C & algorithms — ALX',
      desc: 'Deep dive into C programming: pointers, memory management, data structures, algorithms, bit manipulation, and system-level concepts. Foundation for understanding how software really works.',
      tags: ['C', 'Algorithms', 'Data Structures', 'Memory Management', 'Pointers'],
      github: 'https://github.com/khalidboumaghdar/alx-low_level_programming',
    },

    // ── High Level / Python ───────────────────────────────
    {
      id: 'alxhighlevel',
      title: 'Higher Level Programming',
      sub: 'Python & JavaScript — ALX',
      desc: 'Python and JavaScript projects covering OOP, file I/O, web scraping, SQL databases, and object-relational mapping — bridging low-level knowledge with high-level development.',
      tags: ['Python', 'JavaScript', 'OOP', 'SQL', 'ORM'],
      github: 'https://github.com/khalidboumaghdar/alx-higher_level_programming',
    },

    // ── Backend ───────────────────────────────────────────
    {
      id: 'alxbackendpython',
      title: 'Backend — Python',
      sub: 'Python backend track — ALX',
      desc: 'Backend development with Python: variable annotations, async programming, caching, pagination, authentication, and NoSQL databases.',
      tags: ['Python', 'Async', 'Redis', 'MongoDB', 'Authentication', 'Caching'],
      github: 'https://github.com/khalidboumaghdar/alx-backend-python',
    },
    {
      id: 'alxbackend',
      title: 'Backend — Core',
      sub: 'Core backend concepts — ALX',
      desc: 'Core backend engineering topics: queuing systems, caching strategies, internationalization (i18n), and server-side pagination.',
      tags: ['Python', 'Redis', 'Queuing', 'i18n', 'Pagination'],
      github: 'https://github.com/khalidboumaghdar/alx-backend',
    },
    {
      id: 'alxbackendjs',
      title: 'Backend — JavaScript',
      sub: 'Node.js backend track — ALX',
      desc: 'Backend development with JavaScript and Node.js: ES6+ features, promises, async/await, unit testing with Mocha, and building backend services.',
      tags: ['JavaScript', 'Node.js', 'ES6', 'Mocha', 'Async/Await'],
      github: 'https://github.com/khalidboumaghdar/alx-backend-javascript',
    },
    {
      id: 'alxbackendstorage',
      title: 'Backend — Storage',
      sub: 'Databases & storage — ALX (Private)',
      desc: 'Advanced storage topics: SQL/NoSQL databases, file storage strategies, and data persistence patterns for scalable backend systems.',
      tags: ['Python', 'SQL', 'NoSQL', 'MySQL', 'MongoDB'],
      // github private
    },
    {
      id: 'alxbackenduserdata',
      title: 'Backend — User Data',
      sub: 'Security & user management — ALX',
      desc: 'Personal data handling, password hashing, session authentication, and secure user management practices for production-grade backends.',
      tags: ['Python', 'Authentication', 'bcrypt', 'Session', 'Security'],
      github: 'https://github.com/khalidboumaghdar/alx-backend-user-data',
    },

    // ── System Engineering / DevOps ───────────────────────
    {
      id: 'alxsysdevops',
      title: 'System Engineering & DevOps',
      sub: 'Shell, networking & infra — ALX',
      desc: 'System engineering fundamentals: Shell scripting, networking, web infrastructure, configuration management with Puppet, server monitoring, load balancing, and HTTPS/SSL setup.',
      tags: ['Shell', 'Bash', 'Networking', 'Puppet', 'Nginx', 'DevOps', 'Linux'],
      github: 'https://github.com/khalidboumaghdar/alx-system_engineering-devops',
    },

    // ── Interview Prep ────────────────────────────────────
    {
      id: 'alxinterview',
      title: 'Interview Preparation',
      sub: 'Algorithms & whiteboarding — ALX',
      desc: 'Whiteboarding and technical interview preparation: sorting algorithms, data structures, time/space complexity analysis, and problem-solving under pressure.',
      tags: ['Python', 'Algorithms', 'Sorting', 'Data Structures', 'Big O'],
      github: 'https://github.com/khalidboumaghdar/alx-interview',
    },

    // ── Files Manager ─────────────────────────────────────
    {
      id: 'alxfilesmanager',
      title: 'Files Manager',
      sub: 'Capstone project — ALX',
      desc: 'Capstone project: a full-featured file upload and management platform built with Node.js, Express, MongoDB, Redis, and Bull queue. Covers authentication, file storage, background workers, and REST API design.',
      tags: ['JavaScript', 'Node.js', 'Express', 'MongoDB', 'Redis', 'Bull', 'REST API'],
      github: 'https://github.com/khalidboumaghdar/alx-files_manager',
    },
  ],
},
{
  id: 'sensa',
  badge: 'EN',
  label: 'ENSA',
  logoClass: 'logo-ensa',
  logoText: 'EN',
  name: 'ENSA',
  badgeText: 'École Nationale des Sciences Appliquées',
  period: '2023 – 2024',
  desc: 'Engineering school (ENSA) — applied sciences curriculum including mobile development with native Android and local database management.',
  activeProject: 'mymenu',
  projects: [
    {
      id: 'mymenu',
      title: 'My Menu',
      sub: 'Android menu app — SQLite',
      desc: 'A native Android application for managing a restaurant-style menu. Uses SQLite for local data persistence to store, retrieve, update and delete menu items — built with Java and the Android SDK (Gradle/Kotlin DSL).',
      tags: ['Java', 'Android', 'SQLite', 'Android SDK', 'Gradle'],
      github: 'https://github.com/khalidboumaghdar/My-menu-Sqlite-Android-app',
    },
  ],
},
];

  freelanceProjects: FreelanceProject[] = [
    {
      title: 'Email Campaign Tool',
      sub: 'E-SEND SOLUTION — Internal SaaS',
      desc: 'Marketing platform for campaign creation, scheduling & sending at 1,000 emails/min with performance analytics.',
      tags: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
      type: 'tool', iconClass: 'icon-purple',
      year: '2022', featured: true,
      stat: '$2K+', statLabel: 'revenue generated',
      github: 'https://github.com/yourname/email-campaign',
    }
    /* add more freelance/personal projects here */
  ];

  get currentSchool(): School {
    return this.schools.find(s => s.id === this.activeSchool)!;
  }
  get activeProject(): Project {
    const s = this.currentSchool;
    return s.projects.find(p => p.id === s.activeProject)!;
  }
  switchSchool(id: string): void { this.activeSchool = id; }
  setActiveProject(school: School, projectId: string): void { school.activeProject = projectId; }
}