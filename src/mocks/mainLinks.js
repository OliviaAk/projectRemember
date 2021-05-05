import Solders from '../assets/images/solders.jpg';
import Days from '../assets/images/i1.png';
import Remember from '../assets/images/remember.jpg';

export const mainLinks = [
  {
    name: '23 ДНЯ МУЖЕСТВА ',
    image: Days,
    text: ` В Календаре воинской славы «Оборона Могилева: день за  днем» мы остановились 
    на некоторых основных событиях обороны нашего города. `,
    url:
      'https://uploads.knightlab.com/storymapjs/0b00d1b239e2b26a3f630058f4bf7d5c/test/draft.html',
    link: '',
  },
  {
    name: 'ОНИ СРАЖАЛИСЬ ЗА МОГИЛЕВ',
    image: Solders,
    link: '/dashboard',
    url: '',
    text: `Доска памяти  посвящена героям, чьими именами увековечены названия улиц Могилева за стойкость и 
     героизм которых  вписаны в историю Великой Отечественной войны.`,
  },

  {
    name: 'ДОБАВЬТЕ СВОЕГО ГЕРОЯ',
    image: Remember,
    link: '/card',
    url: '',
    text: `  Сохраните воспоминания
     о родных — участниках Великой Отечественной войны, 
     создайте видеооткрытку о героях своей семьи!
     Гордость за их подвиги должна жить вечно!`,
  },
];
