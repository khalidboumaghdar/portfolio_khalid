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
  desc: 'Full Stack web development training at ENAA / Simplon.co — building real-world applications with Angular, TypeScript, and modern frontend architecture.',
  activeProject: 'blogapp',
  projects: [
    {
      id: 'blogapp',
      title: 'Blog App',
      sub: 'Article publishing platform — Angular 16',
      desc: 'A full article management web app built with Angular 16. Users can browse, create, and manage blog posts through a component-driven UI with routing and services.',
      tags: ['Angular', 'TypeScript', 'HTML', 'CSS', 'RxJS', 'Angular CLI'],
      github: 'https://github.com/khalidboumaghdar/ENAA_Bolg_App_Application-d-article',
    },
    {
      id: 'quizapp',
      title: 'Application de Quiz',
      sub: 'Interactive quiz app — Angular 16',
      desc: 'An interactive quiz application built with Angular 16. Presents questions one by one, tracks answers, calculates scores, and displays results — all managed through Angular components and services.',
      tags: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Angular CLI'],
      github: 'https://github.com/khalidboumaghdar/ENAA_Application_de_Quiz',
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
    },
    {
      title: 'C# AutoLogin App',
      sub: 'Desktop automation — E-SEND',
      desc: 'Windows app that automates email provider login & mail server config, cutting manual work for marketing teams.',
      tags: ['C#', '.NET', 'Windows Forms', 'Automation'],
      type: 'tool', iconClass: 'icon-blue',
      year: '2022',
      github: 'https://github.com/yourname/autologin',
    },
    {
      title: 'Portfolio Website',
      sub: 'Personal — Angular + animations',
      desc: "The site you're looking at. Built with Angular, custom cursor, scroll animations, and a fully themed design system.",
      tags: ['Angular', 'TypeScript', 'CSS', 'RxJS'],
      type: 'web', iconClass: 'icon-green',
      year: '2025', featured: true,
      demo: '/',
    },
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