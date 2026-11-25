import { useEffect, useRef } from 'react';
import { Instagram, X } from 'lucide-react';
export function PreviewDialog({ topic, close }: { topic: string | null; close: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => { if (topic) ref.current?.showModal(); else ref.current?.close(); }, [topic]);
  return <dialog ref={ref} className="preview-dialog" onClose={close} onClick={e => { if (e.target === e.currentTarget) close(); }} aria-labelledby="dialog-title"><div className="dialog-inner"><button className="icon-button dialog-close" onClick={close} aria-label="Закрыть"><X /></button><span className="eyebrow">PROSWIM</span><h2 id="dialog-title">{topic === 'Запись на тренировку' ? 'Запись на тренировку' : topic}</h2><p>{topic === 'Запись на тренировку' ? 'Онлайн-отправка заявки пока недоступна. Для записи свяжитесь со школой в Instagram.' : 'Информацию можно уточнить у школы в Instagram.'}</p><a className="button button-primary" href="https://www.instagram.com/_proswim_/" target="_blank" rel="noreferrer"><Instagram size={18}/> Instagram школы</a><p className="dialog-note">Иллюстрации: Pexels.</p></div></dialog>;
}
