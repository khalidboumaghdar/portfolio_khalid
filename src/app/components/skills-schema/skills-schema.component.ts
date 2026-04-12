import { Component, AfterViewInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';

interface Skill { name: string; icon: string; pct: number; color: [string, string]; }
interface Node  { x: number; y: number; r: number; label: string; color: string; textColor: string; core?: boolean; }
interface RadarData { label: string; value: number; }

@Component({
  selector: 'app-skills-schema',
  templateUrl: './skills-schema.component.html',
  styleUrls: ['./skills-schema.component.css']
})
export class SkillsSchemaComponent implements AfterViewInit, OnDestroy {

  @ViewChild('techMapCanvas') techMapRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('radarCanvas')   radarRef!:   ElementRef<HTMLCanvasElement>;
  @ViewChild('barsContainer') barsRef!:    ElementRef<HTMLDivElement>;

  skills: Skill[] = [
    { name: 'HTML / CSS',    icon: '🌐', pct: 95, color: ['#ff6b35','#f7931e'] },
    { name: 'JavaScript',   icon: '⚡', pct: 82, color: ['#f7df1e','#f0a500'] },
    { name: 'PHP / Laravel', icon: '🐘', pct: 85, color: ['#7c5cfc','#9b6dff'] },
    { name: 'Java / Spring', icon: '☕', pct: 78, color: ['#00e5c3','#00b89c'] },
    { name: 'TypeScript',   icon: '📘', pct: 74, color: ['#3178c6','#5ba4f5'] },
    { name: 'Angular',      icon: '🔺', pct: 76, color: ['#dd0031','#ff4468'] },
    { name: 'React.js',     icon: '⚛️', pct: 70, color: ['#61dafb','#21a9c4'] },
    { name: 'C# / .NET',    icon: '🪟', pct: 60, color: ['#9b4dca','#c678dd'] },
    { name: 'MySQL / SQL',  icon: '🗄️', pct: 88, color: ['#00e5c3','#7c5cfc'] },
  ];

  barWidths: number[]  = [];
  barLabels: string[]  = [];
  barsAnimated = false;

  radarData: RadarData[] = [
    { label: 'Frontend',    value: 88 },
    { label: 'Backend',     value: 82 },
    { label: 'Databases',   value: 85 },
    { label: 'DevOps',      value: 60 },
    { label: 'UI/UX',       value: 75 },
    { label: 'Agile/Scrum', value: 78 },
  ];

  private nodes: Node[] = [
    { x:240, y:210, r:48, label:'Khalid',     color:'#7c5cfc', textColor:'#fff', core:true },
    { x:90,  y:90,  r:34, label:'Angular',    color:'#dd0031', textColor:'#fff' },
    { x:200, y:60,  r:30, label:'React',      color:'#61dafb', textColor:'#0a0a0f' },
    { x:320, y:55,  r:28, label:'TypeScript', color:'#3178c6', textColor:'#fff' },
    { x:420, y:100, r:26, label:'Bootstrap',  color:'#7952b3', textColor:'#fff' },
    { x:60,  y:200, r:27, label:'HTML/CSS',   color:'#ff6b35', textColor:'#fff' },
    { x:100, y:330, r:34, label:'Laravel',    color:'#ff2d20', textColor:'#fff' },
    { x:220, y:370, r:32, label:'Spring Boot',color:'#6db33f', textColor:'#fff' },
    { x:360, y:350, r:27, label:'ASP.NET',    color:'#512bd4', textColor:'#fff' },
    { x:430, y:240, r:28, label:'Java',       color:'#f89820', textColor:'#0a0a0f' },
    { x:390, y:160, r:26, label:'PHP',        color:'#9b6dff', textColor:'#fff' },
    { x:60,  y:290, r:24, label:'MySQL',      color:'#00e5c3', textColor:'#0a0a0f' },
    { x:310, y:390, r:24, label:'MongoDB',    color:'#4db33d', textColor:'#fff' },
  ];

  private animPhase    = 0;
  private rafId        = 0;
  private radarStarted = false;
  private observers: IntersectionObserver[] = [];

  constructor() {
    this.barWidths = this.skills.map(() => 0);
    this.barLabels = this.skills.map(() => '0%');
  }

  ngAfterViewInit(): void {
    this.initBarsObserver();
    this.drawTechMap();
    this.initRadarObserver();
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.rafId);
    this.observers.forEach(o => o.disconnect());
  }

  /* ── BAR CHART ─────────────────────────────────────────── */
  private initBarsObserver(): void {
    const el = this.barsRef?.nativeElement;
    if (!el) return;
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !this.barsAnimated) {
        this.barsAnimated = true;
        this.animateBars();
        obs.disconnect();
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    this.observers.push(obs);
  }

  private animateBars(): void {
    this.skills.forEach((s, i) => {
      setTimeout(() => {
        this.barWidths[i] = s.pct;
        let cur = 0;
        const step = s.pct / 40;
        const t = setInterval(() => {
          cur = Math.min(cur + step, s.pct);
          this.barLabels[i] = Math.round(cur) + '%';
          if (cur >= s.pct) clearInterval(t);
        }, 25);
      }, i * 120);
    });
  }

  /* ── TECH MAP CANVAS ───────────────────────────────────── */
  private drawTechMap(): void {
    const canvas = this.techMapRef?.nativeElement;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    const isLight = document.body.classList.contains('light');

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      this.animPhase += 0.02;

      // Lines
      const core = this.nodes[0];
      this.nodes.slice(1).forEach(n => {
        const alpha = 0.1 + 0.05 * Math.sin(this.animPhase + n.x * 0.01);
        ctx.beginPath();
        ctx.strokeStyle = isLight ? `rgba(98,68,232,${alpha})` : `rgba(124,92,252,${alpha})`;
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 6]);
        ctx.moveTo(core.x, core.y);
        ctx.lineTo(n.x, n.y);
        ctx.stroke();
        ctx.setLineDash([]);
      });

      // Nodes
      this.nodes.forEach((n, i) => {
        const pulse = n.core ? Math.sin(this.animPhase * 2) * 3 : Math.sin(this.animPhase + i) * 1.5;
        const r = n.r + pulse;

        const grd = ctx.createRadialGradient(n.x, n.y, r * 0.3, n.x, n.y, r * 1.8);
        grd.addColorStop(0, n.color + '33');
        grd.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(n.x, n.y, r * 1.8, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fillStyle = n.color;
        ctx.fill();
        if (n.core) { ctx.strokeStyle = '#fff'; ctx.lineWidth = 2; ctx.stroke(); }

        ctx.fillStyle = n.textColor;
        ctx.font = n.core ? 'bold 12px Syne, sans-serif' : '10px Outfit, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        const words = n.label.split(' ');
        if (words.length === 1) { ctx.fillText(n.label, n.x, n.y); }
        else { ctx.fillText(words[0], n.x, n.y - 6); ctx.fillText(words[1], n.x, n.y + 7); }
      });

      this.rafId = requestAnimationFrame(draw);
    };
    draw();
  }

  /* ── RADAR CHART ───────────────────────────────────────── */
  private initRadarObserver(): void {
    const el = this.radarRef?.nativeElement;
    if (!el) return;
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !this.radarStarted) {
        this.radarStarted = true;
        let start: number | null = null;
        const animate = (ts: number) => {
          if (!start) start = ts;
          const p = Math.min((ts - start) / 1200, 1);
          this.drawRadar(p);
          if (p < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
        obs.disconnect();
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    this.observers.push(obs);
  }

  private drawRadar(progress: number): void {
    const canvas = this.radarRef?.nativeElement;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    const isLight = document.body.classList.contains('light');
    const cx = canvas.width / 2, cy = canvas.height / 2;
    const maxR = 180;
    const n = this.radarData.length;
    const angleStep = (Math.PI * 2) / n;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Grid rings
    for (let ring = 1; ring <= 5; ring++) {
      const r = (maxR / 5) * ring;
      ctx.beginPath();
      for (let i = 0; i < n; i++) {
        const angle = i * angleStep - Math.PI / 2;
        const x = cx + Math.cos(angle) * r, y = cy + Math.sin(angle) * r;
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.strokeStyle = 'rgba(124,92,252,0.12)';
      ctx.lineWidth = 1; ctx.stroke();
      if (ring % 2 === 0) {
        ctx.fillStyle = isLight ? 'rgba(80,80,120,0.6)' : 'rgba(107,107,138,0.6)';
        ctx.font = '10px DM Mono, monospace'; ctx.textAlign = 'center';
        ctx.fillText((ring * 20) + '%', cx + 6, cy - r + 4);
      }
    }

    // Spokes
    for (let i = 0; i < n; i++) {
      const angle = i * angleStep - Math.PI / 2;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + Math.cos(angle) * maxR, cy + Math.sin(angle) * maxR);
      ctx.strokeStyle = 'rgba(124,92,252,0.15)';
      ctx.lineWidth = 1; ctx.stroke();
    }

    // Filled area
    ctx.beginPath();
    this.radarData.forEach((d, i) => {
      const angle = i * angleStep - Math.PI / 2;
      const r = (d.value / 100) * maxR * progress;
      const x = cx + Math.cos(angle) * r, y = cy + Math.sin(angle) * r;
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.closePath();
    const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, maxR);
    grad.addColorStop(0, 'rgba(124,92,252,0.5)');
    grad.addColorStop(1, 'rgba(0,229,195,0.15)');
    ctx.fillStyle = grad; ctx.fill();
    ctx.strokeStyle = '#7c5cfc'; ctx.lineWidth = 2; ctx.stroke();

    // Dots + labels
    this.radarData.forEach((d, i) => {
      const angle = i * angleStep - Math.PI / 2;
      const r = (d.value / 100) * maxR * progress;
      const x = cx + Math.cos(angle) * r, y = cy + Math.sin(angle) * r;
      ctx.beginPath(); ctx.arc(x, y, 5, 0, Math.PI * 2);
      ctx.fillStyle = '#00e5c3'; ctx.fill();
      ctx.strokeStyle = '#0a0a0f'; ctx.lineWidth = 2; ctx.stroke();

      const lx = cx + Math.cos(angle) * (maxR + 28);
      const ly = cy + Math.sin(angle) * (maxR + 28);
      ctx.fillStyle = isLight ? '#12111a' : '#f0f0f8';
      ctx.font = 'bold 12px Syne, sans-serif';
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(d.label, lx, ly);
      ctx.font = '10px DM Mono, monospace';
      ctx.fillStyle = '#7c5cfc';
      ctx.fillText(d.value + '%', lx, ly + 14);
    });
  }
}
