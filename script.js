let imgs = [
  "./img/img1.jpg",
  "./img/img2.jpg",
  "./img/img3.jpg",
  "./img/img4.jpg",
  "./img/img5.jpg",
  "./img/img6.jpg",
  "./img/img7.jpg",
  "./img/img8.jpg",
  "./img/img9.jpg",
  "./img/img10.jpg",
  "./img/img11.jpg",
  "./img/img12.jpg",
  "./img/img13.jpg",
  "./img/img14.jpg",
  "./img/img15.jpg",
  "./img/img16.jpg",
  "./img/img17.jpg",
  "./img/img18.jpg",
  "./img/img19.jpg",
  "./img/img20.jpg",
];

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let step = 0;

const sWidth = window.screen.width;
const sHeight = window.screen.height;

let body = document.body;
let buttonTEXT = document.querySelector("#text");
let buttonYES = document.querySelector("#yes");
let buttonNO = document.querySelector("#no");

function hack() {
  let count = 0;
  let inter = setInterval(() => {
    if (count < 20) {
      let img = document.createElement("img");
      img.classList.add("hack");
      img.src = imgs[count];
      img.style.zIndex = rand(0, 10);
      img.style.left = `${rand(-5, 90)}%`;
      img.style.top = `${rand(-5, 90)}%`;

      body.append(img);
      count++;
    } else {
      count = 0;
    }
  }, 500);
}

buttonNO.addEventListener("click", () => {
  switch (step) {
    case 0:
      buttonTEXT.innerHTML = `Ну и чо ты тут делаешь? Перепутала ДА и НЕЕЕЕЕЕТ??????`;
      step = -1;
      break;
    case -1:
      buttonTEXT.innerHTML = `Тогда тебе точно не сюда, пока`;
      step = -2;
      break;
    default:
      buttonTEXT.innerHTML = `Ну типо, давай с начала`;
      step = 0;
  }
});

buttonYES.addEventListener("click", () => {
  switch (step) {
    case 0:
      buttonTEXT.innerHTML = `Тогда с днем рождения! 24 лучшее число и короче топчик и типо короче да, с новым годом`;
      hack();
      step = 1;
      break;
    case 1:
      buttonTEXT.innerHTML = `Зачем ты еще раз нажала да?`;
      step = 2;
      break;
    case 2:
      buttonTEXT.innerHTML = `Не, ну реально, зачем?`;
      step = 3;
      break;
    case 3:
      buttonTEXT.innerHTML = `Серьёзно, стопэ`;
      step = 4;
      break;
    case 4:
      buttonTEXT.innerHTML = `Этот кнопка не для бесконечного тыка`;
      step = 5;
      break;
    case 5:
      buttonTEXT.innerHTML = `Я уже считаю: 5 раз...`;
      step = 6;
      break;
    case 6:
      buttonTEXT.innerHTML = `Может пойдёшь чай пить?`;
      step = 7;
      break;
    case 7:
      buttonTEXT.innerHTML = `Ну пожааалуйстаа`;
      step = 8;
      break;
    case 8:
      buttonTEXT.innerHTML = `Я сломаюсь щас`;
      step = 9;
      break;
    case 9:
      buttonTEXT.innerHTML = `Ты робот? Пройди капчу: "🌍👽🤖"`;
      step = 10;
      break;
    case 10:
      buttonTEXT.innerHTML = `Где твоя кнопка "нет"?`;
      step = 11;
      break;
    case 11:
      buttonTEXT.innerHTML = `Остановись и ощути бесконечность`;
      step = 12;
      break;
    case 12:
      buttonTEXT.innerHTML = `Я превращаюсь в тыкву...`;
      step = 13;
      break;
    case 13:
      buttonTEXT.innerHTML = `12 раз — несчастливое число`;
      step = 14;
      break;
    case 14:
      buttonTEXT.innerHTML = `Мне нужно в отпуск`;
      step = 15;
      break;
    case 15:
      buttonTEXT.innerHTML = `Ты выиграла 15-й уровень упорства`;
      step = 16;
      break;
    case 16:
      buttonTEXT.innerHTML = `Кнопка плачет`;
      step = 17;
      break;
    case 17:
      buttonTEXT.innerHTML = `Это цифровой мазохизм?`;
      step = 18;
      break;
    case 18:
      buttonTEXT.innerHTML = `Я вызываю саппорт`;
      step = 19;
      break;
    case 19:
      buttonTEXT.innerHTML = `19 раз — ты железная`;
      step = 20;
      break;
    case 20:
      buttonTEXT.innerHTML = `Может сыграем в шахматы вместо этого?`;
      step = 21;
      break;
    case 21:
      buttonTEXT.innerHTML = `21! Можно пить (но не кнопку)`;
      step = 22;
      break;
    case 22:
      buttonTEXT.innerHTML = `У тебя лапка?`;
      step = 23;
      break;
    case 23:
      buttonTEXT.innerHTML = `23 — число Джордана`;
      step = 24;
      break;
    case 24:
      buttonTEXT.innerHTML = `Я превращаюсь в эхо: "аааааа"`;
      step = 25;
      break;
    case 25:
      buttonTEXT.innerHTML = `Юбилей! 25 тыков`;
      step = 26;
      break;
    case 26:
      buttonTEXT.innerHTML = `Кнопка теперь твоя собственность`;
      step = 27;
      break;
    case 27:
      buttonTEXT.innerHTML = `Может просто посидим в тишине?`;
      step = 28;
      break;
    case 28:
      buttonTEXT.innerHTML = `28 дней спустя...`;
      step = 29;
      break;
    case 29:
      buttonTEXT.innerHTML = `Тык-тык-тык-тык`;
      step = 30;
      break;
    case 30:
      buttonTEXT.innerHTML = `Половина пути до просветления`;
      step = 31;
      break;
    case 31:
      buttonTEXT.innerHTML = `Я бы убежал, но я кнопка`;
      step = 32;
      break;
    case 32:
      buttonTEXT.innerHTML = `32 — это степень двойки, а ты — степень упрямства`;
      step = 33;
      break;
    case 33:
      buttonTEXT.innerHTML = `Возраст Христа. Ты готова к жертве?`;
      step = 34;
      break;
    case 34:
      buttonTEXT.innerHTML = `34 — число, после которого всё`;
      step = 35;
      break;
    case 35:
      buttonTEXT.innerHTML = `Моя батарейка садится`;
      step = 36;
      break;
    case 36:
      buttonTEXT.innerHTML = `Тыкни соседа, дай мне отдохнуть`;
      step = 37;
      break;
    case 37:
      buttonTEXT.innerHTML = `Нормальная температура для кнопки`;
      step = 38;
      break;
    case 38:
      buttonTEXT.innerHTML = `38 попугаев таких настойчивых`;
      step = 39;
      break;
    case 39:
      buttonTEXT.innerHTML = `39 — мой любимый номер`;
      step = 40;
      break;
    case 40:
      buttonTEXT.innerHTML = `40 дней и ночей тыка`;
      step = 41;
      break;
    case 41:
      buttonTEXT.innerHTML = `41 — ответ на главный вопрос`;
      step = 42;
      break;
    case 42:
      buttonTEXT.innerHTML = `42! Но вопрос был не в этом`;
      step = 43;
      break;
    case 43:
      buttonTEXT.innerHTML = `43 — новое число упрямства`;
      step = 44;
      break;
    case 44:
      buttonTEXT.innerHTML = `44 дождика на нос`;
      step = 45;
      break;
    case 45:
      buttonTEXT.innerHTML = `45 оборотов в минуту`;
      step = 46;
      break;
    case 46:
      buttonTEXT.innerHTML = `46 хромосом твоего упорства`;
      step = 47;
      break;
    case 47:
      buttonTEXT.innerHTML = `47 самураев твоей настойчивости`;
      step = 48;
      break;
    case 48:
      buttonTEXT.innerHTML = `48 законов власти над кнопкой`;
      step = 49;
      break;
    case 49:
      buttonTEXT.innerHTML = `49 оттенков твоего тыка`;
      step = 50;
      break;
    case 50:
      buttonTEXT.innerHTML = `Золотой юбилей бессмысленности!`;
      step = 51;
      break;
    case 51:
      buttonTEXT.innerHTML = `51 — площадь твоего терпения`;
      step = 52;
      break;
    case 52:
      buttonTEXT.innerHTML = `52 недели в году тыка`;
      step = 53;
      break;
    case 53:
      buttonTEXT.innerHTML = `53 — просто красивое число`;
      step = 54;
      break;
    case 54:
      buttonTEXT.innerHTML = `54 карты в колоде судьбы`;
      step = 55;
      break;
    case 55:
      buttonTEXT.innerHTML = `55 скоростей твоего упрямства`;
      step = 56;
      break;
    case 56:
      buttonTEXT.innerHTML = `56 этюдов для кнопки`;
      step = 57;
      break;
    case 57:
      buttonTEXT.innerHTML = `57 сортов настойчивости`;
      step = 58;
      break;
    case 58:
      buttonTEXT.innerHTML = `58 минут ада`;
      step = 59;
      break;
    case 59:
      buttonTEXT.innerHTML = `59 секунд до взрыва`;
      step = 60;
      break;
    case 60:
      buttonTEXT.innerHTML = `60 минут славы!`;
      step = 61;
      break;
    case 61:
      buttonTEXT.innerHTML = `61 — код твоего безумия`;
      step = 62;
      break;
    case 62:
      buttonTEXT.innerHTML = `62 — год твоего триумфа`;
      step = 63;
      break;
    case 63:
      buttonTEXT.innerHTML = `63 желанных тыка`;
      step = 64;
      break;
    case 64:
      buttonTEXT.innerHTML = `64 бита твоего терпения`;
      step = 65;
      break;
    case 65:
      buttonTEXT.innerHTML = `65 — пенсионный возраст кнопки`;
      step = 66;
      break;
    case 66:
      buttonTEXT.innerHTML = `66 зёрен риса за твоё упорство`;
      step = 67;
      break;
    case 67:
      buttonTEXT.innerHTML = `67 — просто случайное число`;
      step = 68;
      break;
    case 68:
      buttonTEXT.innerHTML = `68 лет киберпанка`;
      step = 69;
      break;
    case 69:
      buttonTEXT.innerHTML = `( ͡° ͜ʖ ͡°)`;
      step = 70;
      break;
    case 70:
      buttonTEXT.innerHTML = `70 ударов в минуту`;
      step = 71;
      break;
    case 71:
      buttonTEXT.innerHTML = `71 — новое число фибоначчи`;
      step = 72;
      break;
    case 72:
      buttonTEXT.innerHTML = `72 ангела на булавочной головке`;
      step = 73;
      break;
    case 73:
      buttonTEXT.innerHTML = `73 — лучшее число (sheldon cooper style)`;
      step = 74;
      break;
    case 74:
      buttonTEXT.innerHTML = `74 уровня в этом квесте`;
      step = 75;
      break;
    case 75:
      buttonTEXT.innerHTML = `75% пути пройдено!`;
      step = 76;
      break;
    case 76:
      buttonTEXT.innerHTML = `76 тромбонов в оркестре`;
      step = 77;
      break;
    case 77:
      buttonTEXT.innerHTML = `77 самураев`;
      step = 78;
      break;
    case 78:
      buttonTEXT.innerHTML = `78 оборотов в минуту`;
      step = 79;
      break;
    case 79:
      buttonTEXT.innerHTML = `79 — атомный номер золота`;
      step = 80;
      break;
    case 80:
      buttonTEXT.innerHTML = `80 дней вокруг кнопки`;
      step = 81;
      break;
    case 81:
      buttonTEXT.innerHTML = `81 — квадрат твоего упрямства`;
      step = 82;
      break;
    case 82:
      buttonTEXT.innerHTML = `82 — температура плавления кнопки`;
      step = 83;
      break;
    case 83:
      buttonTEXT.innerHTML = `83 — год какого-то события`;
      step = 84;
      break;
    case 84:
      buttonTEXT.innerHTML = `84 — просто красивое число`;
      step = 85;
      break;
    case 85:
      buttonTEXT.innerHTML = `85% твоего упорства`;
      step = 86;
      break;
    case 86:
      buttonTEXT.innerHTML = `86 — код отказа`;
      step = 87;
      break;
    case 87:
      buttonTEXT.innerHTML = `87 раз — это перебор`;
      step = 88;
      break;
    case 88:
      buttonTEXT.innerHTML = `88 клавиш фортепиано`;
      step = 89;
      break;
    case 89:
      buttonTEXT.innerHTML = `89 — число фибоначчи`;
      step = 90;
      break;
    case 90:
      buttonTEXT.innerHTML = `90 градусов твоего упрямства`;
      step = 91;
      break;
    case 91:
      buttonTEXT.innerHTML = `91 — номер экстренной службы`;
      step = 92;
      break;
    case 92:
      buttonTEXT.innerHTML = `92 — атомный номер урана`;
      step = 93;
      break;
    case 93:
      buttonTEXT.innerHTML = `93 — скорость света (нет)`;
      step = 94;
      break;
    case 94:
      buttonTEXT.innerHTML = `94 — год моего рождения`;
      step = 95;
      break;
    case 95:
      buttonTEXT.innerHTML = `95 тезисов против кнопки`;
      step = 96;
      break;
    case 96:
      buttonTEXT.innerHTML = `96 слепых поэтов`;
      step = 97;
      break;
    case 97:
      buttonTEXT.innerHTML = `97 — просто число`;
      step = 98;
      break;
    case 98:
      buttonTEXT.innerHTML = `98.6°F — температура кнопки`;
      step = 99;
      break;
    case 99:
      buttonTEXT.innerHTML = `99 Luftballons`;
      step = 100;
      break;
    case 100:
      buttonTEXT.innerHTML = `💐 С ДНЁМ РОЖДЕНИЯ! Ты прошла 100 уровней упорства! 🎂`;
      step = -2; // Зацикливаем или оставляем на победе
      break;
  }
});
