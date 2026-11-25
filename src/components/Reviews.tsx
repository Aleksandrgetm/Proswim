import type { Review } from '../data/content';
export function Reviews({reviews}:{reviews:Review[]}){if(!reviews.length)return null;return <section className="section light-section" id="reviews"><h2>Отзывы учеников</h2>{reviews.map(r=><blockquote key={r.source}><p>{r.text}</p><footer>{r.author} · <a href={r.source} target="_blank" rel="noreferrer">Источник</a></footer></blockquote>)}</section>}
