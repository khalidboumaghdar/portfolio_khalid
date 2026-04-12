import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements AfterViewInit {
  stats = [
    { num: 3,  suffix: '+', label: 'Years Coding' },
    { num: 5,  suffix: '+', label: 'Projects Shipped' },
    { num: 10, suffix: '+', label: 'Technologies' },
    { num: 3,  suffix: '',  label: 'Certifications' },
  ];

  displayNums: string[] = [];

  ngAfterViewInit(): void {
    this.animateStatsOnScroll();
  }

  scrollTo(id: string): void {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  private animateStatsOnScroll(): void {
    this.displayNums = this.stats.map(s => '0' + s.suffix);
    const statsEl = document.querySelector('.hero-stats');
    if (!statsEl) return;

    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        this.stats.forEach((s, i) => {
          let cur = 0;
          const step = s.num / 40;
          const t = setInterval(() => {
            cur = Math.min(cur + step, s.num);
            this.displayNums[i] = Math.floor(cur) + s.suffix;
            if (cur >= s.num) clearInterval(t);
          }, 30);
        });
        observer.disconnect();
      }
    }, { threshold: 0.5 });

    observer.observe(statsEl);
  }
}
