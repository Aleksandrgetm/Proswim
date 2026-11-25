import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
export function usePageMotion(reduced:boolean){useEffect(()=>{if(reduced)return;const mm=gsap.matchMedia();mm.add('(prefers-reduced-motion: no-preference)',()=>{gsap.utils.toArray<HTMLElement>('.reveal').forEach(el=>gsap.from(el,{y:30,opacity:.25,duration:.9,ease:'power2.out',scrollTrigger:{trigger:el,start:'top 94%',once:true},clearProps:'all'}));gsap.utils.toArray<HTMLElement>('.image-reveal img').forEach(el=>gsap.fromTo(el,{scale:1.08},{scale:1,ease:'none',scrollTrigger:{trigger:el,start:'top bottom',end:'bottom top',scrub:1}}));});return()=>mm.revert();},[reduced]);}
