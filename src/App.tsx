import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Directions } from './components/Directions';
import { Coaches } from './components/Coaches';
import { Schedule } from './components/Schedule';
import { Gallery } from './components/Gallery';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Booking } from './components/Booking';
import type { BookingRequest } from './components/Booking';
import { Contacts } from './components/Contacts';
import { Reviews } from './components/Reviews';
import { verifiedReviews } from './data/content';
import type { BookingSeed } from './data/content';
import { useReducedMotion } from './hooks/useReducedMotion';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { usePageMotion } from './hooks/usePageMotion';
import './styles/sections.css';
import './styles/mobile.css';
export default function App(){
 const [request,setRequest]=useState<BookingRequest|null>(null);const reduced=useReducedMotion();useSmoothScroll(reduced);usePageMotion(reduced);
 const book=(seed:BookingSeed={})=>{setRequest({seed,nonce:Date.now()});requestAnimationFrame(()=>{document.getElementById('booking')?.scrollIntoView({behavior:reduced?'instant':'smooth'});document.querySelector<HTMLElement>('#booking h3')?.focus({preventScroll:true});});};
 return <><a className="skip-link" href="#main">Перейти к содержимому</a><Header open={()=>book()}/><main id="main" tabIndex={-1}><Hero reduced={reduced} open={()=>book()}/><About/><Directions book={book}/><Coaches book={book}/><Schedule book={book}/><Gallery/><Pricing book={book}/><Reviews reviews={verifiedReviews}/><FAQ/><Booking request={request}/></main><Contacts book={book}/></>;
}
