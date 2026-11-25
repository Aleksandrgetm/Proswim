# PROSWIM — этап 1

React / TypeScript / Vite, GSAP ScrollTrigger, Lenis, Lucide. Только навигация и hero. Исследование, источники и ограничения — в DESIGN_CONCEPT.md.

## Запуск

```sh
npm install
npm run dev -- --port 5174
```

http://127.0.0.1:5174/

```sh
npm run build
npm run preview -- --port 4174
```

## Структура

- `src/components`: Header, Hero, WaterRipples, PreviewDialog.
- `src/hooks`: reduced motion и smooth scroll с cleanup.
- `src/styles/tokens.css`: палитра и базовые токены.
- `public/media`: локальное видео 1600px (~2 MB), 854px (~544 KB), JPEG poster (~56 KB).
- `docs/references`: фото для moodboard, не попадает в production build.

В демо нет backend и отправки заявок. CTA открывает пояснение и Instagram. Будущие разделы обозначены в модальном окне без фиктивных данных. `noindex` включён намеренно; перед запуском нужны реальный домен, canonical, абсолютный OG URL, согласованная локаль LV/RU, данные школы и оригинальная съёмка.

Видео без звука, с паузой, poster fallback, остановкой в скрытой вкладке. При reduced motion / save-data видео не запрашивается; Lenis и GSAP не включаются при reduced motion. На touch отключены pointer ripples и smooth scroll. На очень низком экране минимальная высота сохраняет читаемость и допускает вертикальный скролл. Реальный переход к следующему разделу отложен до его утверждения.
