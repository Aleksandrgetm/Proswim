export const instagram = 'https://www.instagram.com/_proswim_/';
export const poolSource = 'https://svmezaparks.lv/lv/baseins/';
export const priceSource = 'https://svmezaparks.lv/wp-content/uploads/2023/09/1000241566.jpg';
export const scheduleSource = 'https://svmezaparks.lv/wp-content/uploads/2023/09/1000241561.jpg';
export const phone = '+371 20027271';
export const directions = [
  { id: 'children', name: 'Детское плавание', audience: 'Группы 4–6, 6–9 и 9–12 лет в Mežaparks', image: '/media/children-swim.jpg', description: 'Групповые занятия в Mežaparks для детей 4–6, 6–9 и 9–12 лет. При записи школа уточнит опыт ребёнка и подходящую группу.' },
  { id: 'adults', name: 'Плавание для взрослых', audience: 'Взрослые · групповые занятия', image: '/media/adult-swim.jpg', description: 'Групповые занятия для взрослых. Расписание, бассейн и необходимый уровень подготовки уточняйте у школы.' },
  { id: 'start', name: 'Обучение с нуля', audience: 'Дети · начинающие', image: '/media/about-swim.jpg', description: 'Начинающие детские группы указаны в информации бассейна Mežaparks. Возраст, состав группы и актуальное время уточняйте у школы.' },
];
export const coaches = [
  { id: 'oleksandrs', name: 'Aleksandrs', initials: 'A', role: 'Детские группы · Mežaparks', description: 'Занятия по понедельникам, средам и субботам по расписанию 2026/2027.', detail: 'Опубликованные возрастные категории: 4–6, 6–9 и 9–12 лет. Полная фамилия, биография, квалификация и стаж в актуальном расписании не указаны. Эти сведения уточняются у школы.', accent: 'blue' },
  { id: 'fjodors', name: 'Fjodors', initials: 'F', role: 'Детские группы · Mežaparks', description: 'Занятия по понедельникам, средам и пятницам по расписанию 2026/2027.', detail: 'Опубликованные возрастные категории: 4–6, 6–9 и 9–12 лет. Полная фамилия, биография, квалификация и стаж в актуальном расписании не указаны. Эти сведения уточняются у школы.', accent: 'light' },
];
export type DirectionId = typeof directions[number]['id'];
export type Session = { id: string; day: number; time: string; direction: string; coach: string; pool: string; age: string; published: boolean };
// Published time slots come from the 2026/27 image. Date availability and booking remain a demo.
export const sessions: Session[] = [
  ...[0,2].flatMap(day => [
    {id:`${day}-o1`,day,time:'16:45',direction:'children',coach:'oleksandrs',pool:'Mežaparks',age:'9–12 лет',published:true},
    {id:`${day}-o2`,day,time:'17:30',direction:'children',coach:'oleksandrs',pool:'Mežaparks',age:'6–9 лет',published:true},
    {id:`${day}-f1`,day,time:'17:30',direction:'children',coach:'fjodors',pool:'Mežaparks',age:'9–12 лет',published:true},
    {id:`${day}-f2`,day,time:'18:15',direction:'children',coach:'fjodors',pool:'Mežaparks',age:'6–9 лет',published:true},
  ]),
  {id:'4-f1',day:4,time:'16:45',direction:'children',coach:'fjodors',pool:'Mežaparks',age:'9–12 лет',published:true},
  {id:'4-f2',day:4,time:'17:30',direction:'children',coach:'fjodors',pool:'Mežaparks',age:'6–9 лет',published:true},
  {id:'4-f3',day:4,time:'18:15',direction:'children',coach:'fjodors',pool:'Mežaparks',age:'4–6 лет',published:true},
  {id:'5-o1',day:5,time:'11:45',direction:'children',coach:'oleksandrs',pool:'Mežaparks',age:'6–9 лет',published:true},
  {id:'5-o2',day:5,time:'12:30',direction:'children',coach:'oleksandrs',pool:'Mežaparks',age:'4–6 лет',published:true},
  {id:'demo-adult-1',day:1,time:'19:00',direction:'adults',coach:'school',pool:'Zolitūde',age:'Взрослые',published:false},
  {id:'demo-adult-2',day:3,time:'19:30',direction:'adults',coach:'school',pool:'OSC',age:'Взрослые',published:false},
  {id:'demo-start',day:5,time:'10:00',direction:'start',coach:'school',pool:'Jūrmala',age:'Возраст уточняется',published:false},
];
export const pools = ['Mežaparks','Zolitūde','OSC','Jūrmala','RNDV'];
export const dayNames = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'];
export const shortDays = ['Пн','Вт','Ср','Чт','Пт','Сб','Вс'];
export const coachName = (id: string) => coaches.find(c => c.id === id)?.name ?? 'Подберёт школа';
export const directionName = (id: string) => directions.find(d => d.id === id)?.name ?? 'Выбрать направление';
export type BookingSeed = { direction?: string; coach?: string; session?: Session };
export const faq = [
 ['Как записаться на тренировку?', 'Позвоните школе по номеру +371 20027271 или напишите в Instagram @_proswim_. Онлайн-отправка заявки пока недоступна. Для записи свяжитесь со школой.'],
 ['Что необходимо взять с собой?', 'Обычно для бассейна нужны купальный костюм, шапочка, очки, полотенце и сменная обувь. Это общая рекомендация, а не правила PROSWIM. Точный список и требования выбранного бассейна уточните у школы.'],
 ['Можно ли начать плавать с нуля?', 'В информации бассейна Mežaparks упоминаются начинающие детские группы PRO SWIM. Для взрослого без опыта возможность и подходящую группу нужно уточнить у школы.'],
 ['Как выбрать подходящую группу?', 'Сообщите возраст, опыт плавания и удобную локацию. В сезонном расписании Mežaparks есть детские категории 4–6, 6–9 и 9–12 лет. Окончательное распределение согласуется со школой.'],
 ['Как узнать стоимость?', 'На сайте приведён опубликованный прайс PROSWIM 2026/2027 для Mežaparks. Условия абонементов, актуальность предложения и цены в других бассейнах уточняйте по телефону школы.'],
 ['Где проходят тренировки?', 'В профиле школы указаны Mežaparks, Zolitūde, RNDV, OSC и Jūrmala. Подтверждённый адрес Mežaparks Sports Village — Ezermalas iela 30, Rīga. Точные адреса остальных локаций уточняются у PROSWIM.'],
];
export type Review = { author: string; text: string; source: string };
export const verifiedReviews: Review[] = [];
