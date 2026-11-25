import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { directions } from '../data/content';
import type { BookingSeed } from '../data/content';
import { SectionHeading } from './SectionHeading';
export function Directions({ book }: { book: (seed?: BookingSeed) => void }) {
  const [active, setActive] = useState('children');
  return <section className="section directions" id="directions"><SectionHeading label="ДЕТИ И ВЗРОСЛЫЕ" title="Направления тренировок"/><div className="direction-list">{directions.map(d => <article className={`direction ${active === d.id ? 'active' : ''}`} key={d.id}><h3><button aria-expanded={active === d.id} aria-controls={`direction-${d.id}`} onClick={() => setActive(active === d.id ? '' : d.id)}><span>{d.name}</span>{active === d.id ? <Minus aria-hidden="true"/> : <Plus aria-hidden="true"/>}</button></h3><div className="direction-collapse" id={`direction-${d.id}`} inert={active !== d.id}><div className="direction-body"><figure><img src={d.image} alt={`${d.name} — иллюстративная стоковая съёмка`} width="1600" height="1067" loading="lazy"/><figcaption>Иллюстрация: Pexels.</figcaption></figure><div className="direction-copy"><span className="section-label">{d.audience}</span><h4>{d.name}</h4><p>{d.description}</p><button className="button button-primary" onClick={() => book({direction:d.id})}>Выбрать для записи</button></div></div></div></article>)}</div></section>;
}
