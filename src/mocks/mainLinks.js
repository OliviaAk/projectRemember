import Solders from '../assets/images/solders.jpg';
import Days from '../assets/images/i1.png';
import Remember from '../assets/images/logo.png';

export const mainLinks = [
  {
    name: '23 ДНЯ МУЖЕСТВА ',
    image: Days,
    text: ` В Календаре воинской славы «Оборона Могилева: день за  днем» мы остановились 
    на некоторых основных событиях обороны нашего города. Даже из краткой картины обороны,
     которую мы попытались воссоздать на основе документов и воспоминаний очевидцев, видна особая сила нашего народа.`,
    link:
      'https://uploads.knightlab.com/storymapjs/0b00d1b239e2b26a3f630058f4bf7d5c/test/draft.html',
  },
  {
    name: 'ОНИ СРАЖАЛИСЬ ЗА МОГИЛЕВ',
    image: Solders,
    link: '/dashboard',
    text: `Перед вами представлена доска памяти героям обороны Могилева.
     Она посвящена героям, чьими именами увековечены названия улиц Могилева за стойкость и 
     героизм которых золотыми буквами вписаны в историю Великой Отечественной войны, в оборону нашего города. `,
  },

  {
    name: 'ДОБАВЬТЕ СВОЕГО ГЕРОЯ',
    image: Remember,
    link: '/card',
    text: `  Сохраните воспоминания
     о родных — участниках Великой Отечественной войны, 
     создайте видеооткрытку о героях своей семьи!
     Гордость за их подвиги должна жить вечно!`,
  },
];
