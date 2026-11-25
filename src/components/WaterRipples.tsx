import { useEffect, useRef } from 'react';
export function WaterRipples({ disabled }: { disabled: boolean }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas || disabled || !matchMedia('(pointer: fine)').matches) return;
    const ctx = canvas.getContext('2d'); if (!ctx) return;
    let frame = 0; let last = 0; let width = 0; let height = 0;
    let rings: { x: number; y: number; born: number }[] = [];
    const resize = () => { const dpr = Math.min(devicePixelRatio, 1.5); width = innerWidth; height = innerHeight; canvas.width = width * dpr; canvas.height = height * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); };
    const render = (now: number) => { ctx.clearRect(0, 0, width, height); rings = rings.filter(r => now - r.born < 1400); for (const r of rings) { const p = (now - r.born) / 1400; ctx.beginPath(); ctx.ellipse(r.x, r.y, 12 + p * 110, 5 + p * 32, -.2, 0, Math.PI * 2); ctx.strokeStyle = `rgba(155,235,255,${(1-p)*.15})`; ctx.lineWidth = 1; ctx.stroke(); } frame = rings.length ? requestAnimationFrame(render) : 0; };
    const move = (e: PointerEvent) => { const bounds = canvas.getBoundingClientRect(); if (bounds.bottom <= 0 || e.clientY < bounds.top || e.clientY > bounds.bottom) return; const now = performance.now(); if (now - last < 100) return; last = now; rings.push({ x: e.clientX, y: e.clientY - bounds.top, born: now }); rings = rings.slice(-12); if (!frame) frame = requestAnimationFrame(render); };
    const hide = () => { if (document.hidden) { cancelAnimationFrame(frame); frame = 0; rings = []; ctx.clearRect(0, 0, width, height); } };
    resize(); window.addEventListener('resize', resize); window.addEventListener('pointermove', move); document.addEventListener('visibilitychange', hide);
    return () => { cancelAnimationFrame(frame); ctx.clearRect(0, 0, width, height); window.removeEventListener('resize', resize); window.removeEventListener('pointermove', move); document.removeEventListener('visibilitychange', hide); };
  }, [disabled]);
  return <canvas ref={ref} className="water-ripples" aria-hidden="true"/>;
}
