import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
export function useSmoothScroll(reduced: boolean) {
  useEffect(() => {
    if (reduced || window.matchMedia('(pointer: coarse)').matches) return;
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true, anchors: true, prevent: (node) => node.tagName === 'DIALOG' });
    const tick = (time: number) => lenis.raf(time * 1000);
    lenis.on('scroll', ScrollTrigger.update); gsap.ticker.add(tick);
    return () => { gsap.ticker.remove(tick); lenis.destroy(); };
  }, [reduced]);
}
