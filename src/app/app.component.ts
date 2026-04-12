import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.init();
  }

  ngAfterViewInit(): void {
    this.initCursor();
    this.initScrollProgress();
    this.initScrollReveal();
  }

  private initCursor(): void {
    const cursor = document.getElementById('cursor');
    const ring   = document.getElementById('cursorRing');
    if (!cursor || !ring) return;

    let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;

    document.addEventListener('mousemove', (e: MouseEvent) => {
      mouseX = e.clientX; mouseY = e.clientY;
      cursor.style.left = mouseX - 6 + 'px';
      cursor.style.top  = mouseY - 6 + 'px';
    });

    const animateRing = () => {
      ringX += (mouseX - ringX - 20) * 0.15;
      ringY += (mouseY - ringY - 20) * 0.15;
      ring.style.left = ringX + 'px';
      ring.style.top  = ringY + 'px';
      requestAnimationFrame(animateRing);
    };
    animateRing();

    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', () => { cursor.style.transform = 'scale(2.5)'; ring.style.transform = 'scale(1.5)'; });
      el.addEventListener('mouseleave', () => { cursor.style.transform = 'scale(1)';   ring.style.transform = 'scale(1)'; });
    });
  }

  private initScrollProgress(): void {
    const bar = document.getElementById('scrollProgress');
    if (!bar) return;
    window.addEventListener('scroll', () => {
      const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      bar.style.width = pct + '%';
    });
  }

  private initScrollReveal(): void {
    const observer = new IntersectionObserver(entries => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 100);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.exp-item').forEach(el => {
      el.classList.add('animate-ready');
      observer.observe(el);
    });
    document.querySelectorAll('.project-card').forEach(el => observer.observe(el));
  }
}
