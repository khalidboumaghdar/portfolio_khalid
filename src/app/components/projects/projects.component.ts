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
    /* ── paste your existing schools array here, unchanged ── */
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