import Solders from '../assets/images/solders.jpg';
import Days from '../assets/images/i1.png';
import Remember from '../assets/images/remember.jpg';

export const mainLinks = [
  {
    name: '23 ДНЯ МУЖЕСТВА ',
    image: Days,
    text: ` В Календаре воинской славы «Оборона Могилева: день за  днем»
    приведены основные события нашего города, события первых дней Великой Отечественной войны. `,
    url:
      'https://uploads.knightlab.com/storymapjs/0b00d1b239e2b26a3f630058f4bf7d5c/test/draft.html',
    link: '',
  },
  {
    name: 'ОНИ СРАЖАЛИСЬ ЗА МОГИЛЕВ',
    image: Solders,
    link: '/dashboard',
    url: '',
    text: `Доска памяти  посвящена героям обороны города, 
    чьи имена увековечены в названиях улиц Могилева за стойкость и мужество.
    `,
  },

  {
    name: 'ДОБАВЬТЕ СВОЕГО ГЕРОЯ',
    image: Remember,
    link: '/card',
    url: '',
    text: `  Сохраните воспоминания
     о родных — участниках Великой Отечественной войны, 
     создайте открытку о героях своей семьи!
     Гордость за их подвиги должна жить вечно!`,
  },
];
