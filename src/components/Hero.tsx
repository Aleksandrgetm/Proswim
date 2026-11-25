import { useEffect, useRef, useState } from 'react';
import { Pause, Play, Instagram } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { WaterRipples } from './WaterRipples';
gsap.registerPlugin(ScrollTrigger);
export function Hero({ reduced, open }: { reduced: boolean; open: (topic: string) => void }) {
  const root = useRef<HTMLElement>(null); const video = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(false); const [playing, setPlaying] = useState(false); const [hasPlayed, setHasPlayed] = useState(false);
  const saveData = !!(navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
  const allowVideo = !reduced && !saveData;
  useEffect(() => { video.current?.load(); }, [allowVideo]);
  useEffect(() => {
    const el = video.current; if (!el) return;
    let visible = true;
    const sync = () => { if (paused || document.hidden || !allowVideo || !visible) el.pause(); else void el.play().catch(() => setPlaying(false)); };
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); });
    if (root.current) observer.observe(root.current);
    sync(); document.addEventListener('visibilitychange', sync); return () => { observer.disconnect(); document.removeEventListener('visibilitychange', sync); };
  }, [paused, allowVideo]);
  useEffect(() => {
    if (reduced) return;
    const context = gsap.context(() => {
      gsap.from('.hero-reveal', { y: 28, opacity: 0, duration: 1.2, stagger: .12, ease: 'power3.out', clearProps: 'all' });
      gsap.to('.hero-media', { yPercent: 8, ease: 'none', scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true } });
    }, root);
    return () => context.revert();
  }, [reduced]);
  return <section aria-label="PROSWIM — школа плавания" ref={root} className="hero" tabIndex={-1}>
    <div className="hero-media"><img className="hero-poster" src="/media/hero-poster.jpg" alt="" fetchPriority="high"/><video ref={video} className={hasPlayed && allowVideo ? 'hero-video is-playing' : 'hero-video'} muted loop playsInline preload="none" poster="/media/hero-poster.jpg" onPlaying={() => { setPlaying(true); setHasPlayed(true); }} onPause={() => setPlaying(false)} onError={() => setPlaying(false)} aria-hidden="true">{allowVideo && <><source src="/media/hero-mobile.mp4" media="(max-width: 700px)" type="video/mp4"/><source src="/media/hero-desktop.mp4" type="video/mp4"/></>}</video></div>
    <div className="hero-shade"/><WaterRipples disabled={reduced || paused}/>
    <div className="hero-topline hero-reveal"><span>ШКОЛА ПЛАВАНИЯ</span><span>РИГА · ЮРМАЛА</span></div>
    <h1 className="hero-wordmark hero-reveal" aria-label="PROSWIM">PROSWIM</h1>
    <div className="water-caption" aria-hidden="true"><span className="caption-line"/> ГРУППОВЫЕ ЗАНЯТИЯ</div>
    <div className="hero-bottom"><div className="hero-copy hero-reveal"><span className="eyebrow">PROSWIM</span><h2>Для детей.<br/><span>И взрослых.</span></h2></div><div className="hero-action hero-reveal"><p>Групповые занятия<br/>в Риге и Юрмале.</p><button className="button button-primary" onClick={() => open('Запись на тренировку')}>Записаться на тренировку <span className="button-lines" aria-hidden="true">///</span></button></div></div>
    <div className="hero-footer"><span className="demo-label">Школа плавания</span><a href="https://www.instagram.com/_proswim_/" target="_blank" rel="noreferrer" className="social-link"><Instagram size={15}/> <span>_proswim_</span></a><button className="motion-control" onClick={() => { if (playing) { setPaused(true); video.current?.pause(); } else { setPaused(false); void video.current?.play().catch(() => setPlaying(false)); } }} disabled={!allowVideo} aria-label={paused || !playing ? 'Воспроизвести фоновое видео' : 'Приостановить фоновое видео'} aria-pressed={paused}>{paused || !playing ? <Play size={14}/> : <Pause size={14}/>}<span>{!allowVideo ? 'Видео отключено' : !playing ? 'Включить видео' : 'Пауза видео'}</span></button></div>
  </section>;
}
