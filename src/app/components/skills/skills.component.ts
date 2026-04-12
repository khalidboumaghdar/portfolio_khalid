import { Component } from '@angular/core';

export interface SkillCard {
  icon: string;
  name: string;
  items: string[];
  highlights: number[];   // indices to highlight with accent2
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  cards: SkillCard[] = [
    {
      icon: '⚡', name: 'Frontend',
      items: ['HTML5 · CSS3 · JavaScript', 'Angular · React.js · TypeScript', 'Bootstrap · Figma (UI/UX)'],
      highlights: [0]
    },
    {
      icon: '🔧', name: 'Backend',
      items: ['Spring Boot (Java) · Laravel', 'PHP · ASP.NET Core · C#', 'RESTful APIs · Design Patterns'],
      highlights: [0]
    },
    {
      icon: '🗄️', name: 'Databases',
      items: ['MySQL · MongoDB · SQL', 'Database Design', 'Query Optimization'],
      highlights: [0]
    },
    {
      icon: '🛠️', name: 'Tools & Methods',
      items: ['Git · GitHub · Postman', 'Agile · Scrum · UML', 'Linux · Server Administration'],
      highlights: [0]
    },
    {
      icon: '🌍', name: 'Languages',
      items: ['Arabic — Native', 'French — B2', 'English — Professional'],
      highlights: [0, 1, 2]
    },
    {
      icon: '🧠', name: 'Soft Skills',
      items: ['Problem Solving', 'Team Collaboration', 'Time Management · Ownership'],
      highlights: [0]
    },
  ];
}
