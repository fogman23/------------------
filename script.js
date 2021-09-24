function sclon(glag, mest) {
  const iscl1 = ['дышать', 'держать', 'гнать', 'ненавидеть', 'слышать', 'вертеть', 'смотреть', 'видеть', 'обидеть', 'терпеть', 'зависеть'].indexOf(glag) != -1;
  const iscl2 = ['брить', 'стелить', 'зиждиться', 'зыбиться'].indexOf(glag) != -1;

  const reg1 = /о(ть|ться)$/;
  const reg2 = /[вмрн]ы(ть|ться)$/;
  const reg3 = /быть$/;
  const reg4 = /лыть$/;
  const reg5 = /у(ть|ться)$/;
  const reg6 = /[^гна](ду|на)(ть|ться)$/;
  const reg7 = /[^(он|ан)][нирл]я(ть|ться)$/;
  const reg8 = /[^р][оа]ня(ть|ться)$/;
  const reg9 = /раня(ть|ться)$/;
  const reg10 = /роня(ть|ться)$/;
  const reg11 = /ея(ть|ться)$/;
  const reg12 = /оя(ть|ться)$/;
  const reg13 = /[^че]за(ть|ться)$/;
  const reg14 = /чеза(ть|ться)$/;
  const reg15 = /гна(ть|ться)$/;
  const reg16 = /а(ть|ться)$/;
  const reg17 = /[илу]ча(ть|ться)$/;
  const reg18 = /ова(ть|ться)$/;
  const reg19 = /и(ть|ться)$/;

  if (typeof (glag) === 'string' && typeof (mest) === 'string') {

    if (reg1.test(glag) && iscl1) {
      switch (mest.toLowerCase()) {
        // 1 лицо
        case 'я':
          return glag.replace(reg1, 'ю');
        case 'мы':
          return glag.replace(reg1, 'им');
        // 2 лицо
        case 'ты':
          return glag.replace(reg1, 'ишь');
        case 'вы':
          return glag.replace(reg1, 'ите');
        // 3 лицо
        case 'он':
        case 'она':
          return glag.replace(reg1, 'ит');
        case 'они':
          return glag.replace(reg1, 'ят');
        default:
          return 'указано неправильное местоимение'
      }
    } else if (reg2.test(glag)) {
      const end = 'ыть';
      switch (mest.toLowerCase()) {
        // 1 лицо
        case 'я':
          return glag.replace(end, 'ою');
        case 'мы':
          return glag.replace(end, 'оем');
        // 2 лицо
        case 'ты':
          return glag.replace(end, 'оешь');
        case 'вы':
          return glag.replace(end, 'оете');
        // 3 лицо
        case 'он':
        case 'она':
          return glag.replace(end, 'оет');
        case 'они':
          return glag.replace(end, 'оют');
        default:
          return 'указано неправильное местоимение'
      }
    } else if (reg3.test(glag)) {
      const end = 'ыть';
      switch (mest.toLowerCase()) {
        // 1 лицо
        case 'я':
          return glag.replace(end, 'уду');
        case 'мы':
          return glag.replace(end, 'удем');
        // 2 лицо
        case 'ты':
          return glag.replace(end, 'удешь');
        case 'вы':
          return glag.replace(end, 'удете');
        // 3 лицо
        case 'он':
        case 'она':
          return glag.replace(end, 'удет');
        case 'они':
          return glag.replace(end, 'удут');
        default:
          return 'указано неправильное местоимение'
      }
    } else if (reg4.test(glag)) {
      const end = 'ыть';
      switch (mest.toLowerCase()) {
        // 1 лицо
        case 'я':
          return glag.replace(end, 'ыву');
        case 'мы':
          return glag.replace(end, 'ывем');
        // 2 лицо
        case 'ты':
          return glag.replace(end, 'ывешь');
        case 'вы':
          return glag.replace(end, 'ывете');
        // 3 лицо
        case 'он':
        case 'она':
          return glag.replace(end, 'ывет');
        case 'они':
          return glag.replace(end, 'ывут');
        default:
          return 'указано неправильное местоимение'
      }
    } else if (reg5.test(glag)) {
      const end = 'уть';
      switch (mest.toLowerCase()) {
        // 1 лицо
        case 'я':
          return glag.replace(end, 'у');
        case 'мы':
          return glag.replace(end, 'ем');
        // 2 лицо
        case 'ты':
          return glag.replace(end, 'ешь');
        case 'вы':
          return glag.replace(end, 'ете');
        // 3 лицо
        case 'он':
        case 'она':
          return glag.replace(end, 'ет');
        case 'они':
          return glag.replace(end, 'ут');
        default:
          return 'указано неправильное местоимение'
      }
    } else if (reg6.test(glag)) {
      const end = 'ть';
      switch (mest.toLowerCase()) {
        // 1 лицо
        case 'я':
          return glag.replace(end, 'ю');
        case 'мы':
          return glag.replace(end, 'ем');
        // 2 лицо
        case 'ты':
          return glag.replace(end, 'ешь');
        case 'вы':
          return glag.replace(end, 'ете');
        // 3 лицо
        case 'он':
        case 'она':
          return glag.replace(end, 'ет');
        case 'они':
          return glag.replace(end, 'ют');
        default:
          return 'указано неправильное местоимение'
      }
    } else if (reg7.test(glag)) {
      const end = 'ть';
      switch (mest.toLowerCase()) {
        // 1 лицо
        case 'я':
          return glag.replace(end, 'ю');
        case 'мы':
          return glag.replace(end, 'ем');
        // 2 лицо
        case 'ты':
          return glag.replace(end, 'ешь');
        case 'вы':
          return glag.replace(end, 'ете');
        // 3 лицо
        case 'он':
        case 'она':
          return glag.replace(end, 'ет');
        case 'они':
          return glag.replace(end, 'ют');
        default:
          return 'указано неправильное местоимение'
      }
    } else if (reg8.test(glag)) {
      const end = 'нять';
      switch (mest.toLowerCase()) {
        // 1 лицо
        case 'я':
          return glag.replace(end, 'йму');
        case 'мы':
          return glag.replace(end, 'ймем');
        // 2 лицо
        case 'ты':
          return glag.replace(end, 'ймешь');
        case 'вы':
          return glag.replace(end, 'ймете');
        // 3 лицо
        case 'он':
        case 'она':
          return glag.replace(end, 'ймет');
        case 'они':
          return glag.replace(end, 'ймут');
        default:
          return 'указано неправильное местоимение'
      }
    } else if (reg9.test(glag)) {
      const end = 'ять';
      switch (mest.toLowerCase()) {
        // 1 лицо
        case 'я':
          return glag.replace(end, 'ю');
        case 'мы':
          return glag.replace(end, 'им');
        // 2 лицо
        case 'ты':
          return glag.replace(end, 'ишь');
        case 'вы':
          return glag.replace(end, 'ите');
        // 3 лицо
        case 'он':
        case 'она':
          return glag.replace(end, 'ит');
        case 'они':
          return glag.replace(end, 'ят');
        default:
          return 'указано неправильное местоимение'
      }
    } else if (reg10.test(glag)) {
      const end = 'ть';
      switch (mest.toLowerCase()) {
        // 1 лицо
        case 'я':
          return glag.replace(end, 'ю');
        case 'мы':
          return glag.replace(end, 'ем');
        // 2 лицо
        case 'ты':
          return glag.replace(end, 'ешь');
        case 'вы':
          return glag.replace(end, 'ете');
        // 3 лицо
        case 'он':
        case 'она':
          return glag.replace(end, 'ет');
        case 'они':
          return glag.replace(end, 'ют');
        default:
          return 'указано неправильное местоимение'
      }
    } else if (reg11.test(glag)) {
      const end = 'ять';
      switch (mest.toLowerCase()) {
        // 1 лицо
        case 'я':
          return glag.replace('е' + end, 'ею');
        case 'мы':
          return glag.replace(end, 'ем');
        // 2 лицо
        case 'ты':
          return glag.replace(end, 'ешь');
        case 'вы':
          return glag.replace(end, 'ете');
        // 3 лицо
        case 'он':
        case 'она':
          return glag.replace(end, 'ет');
        case 'они':
          return glag.replace(end, 'ют');
        default:
          return 'указано неправильное местоимение'
      }
    } else if (reg12.test(glag)) {
      const end = 'ять';
      switch (mest.toLowerCase()) {
        // 1 лицо
        case 'я':
          return glag.replace(end, 'ю');
        case 'мы':
          return glag.replace(end, 'им');
        // 2 лицо
        case 'ты':
          return glag.replace(end, 'ишь');
        case 'вы':
          return glag.replace(end, 'ите');
        // 3 лицо
        case 'он':
        case 'она':
          return glag.replace(end, 'ит');
        case 'они':
          return glag.replace(end, 'ят');
        default:
          return 'указано неправильное местоимение'
      }
    } else if (reg13.test(glag)) {
      const end = 'зать';
      switch (mest.toLowerCase()) {
        // 1 лицо
        case 'я':
          return glag.replace(end, 'жу');
        case 'мы':
          return glag.replace(end, 'жем');
        // 2 лицо
        case 'ты':
          return glag.replace(end, 'жешь');
        case 'вы':
          return glag.replace(end, 'жете');
        // 3 лицо
        case 'он':
        case 'она':
          return glag.replace(end, 'жет');
        case 'они':
          return glag.replace(end, 'жут');
        default:
          return 'указано неправильное местоимение'
      }
    } else if (reg14.test(glag)) {
      const end = 'ать';
      switch (mest.toLowerCase()) {
        // 1 лицо
        case 'я':
          return glag.replace(end, 'ну');
        case 'мы':
          return glag.replace(end, 'нем');
        // 2 лицо
        case 'ты':
          return glag.replace(end, 'нешь');
        case 'вы':
          return glag.replace(end, 'нете');
        // 3 лицо
        case 'он':
        case 'она':
          return glag.replace(end, 'нет');
        case 'они':
          return glag.replace(end, 'нут');
        default:
          return 'указано неправильное местоимение'
      }
    } else if (reg15.test(glag)) {
      const end = 'нать';
      switch (mest.toLowerCase()) {
        // 1 лицо
        case 'я':
          return glag.replace(end, 'оню');
        case 'мы':
          return glag.replace(end, 'оним');
        // 2 лицо
        case 'ты':
          return glag.replace(end, 'онишь');
        case 'вы':
          return glag.replace(end, 'оните');
        // 3 лицо
        case 'он':
        case 'она':
          return glag.replace(end, 'онит');
        case 'они':
          return glag.replace(end, 'онят');
        default:
          return 'указано неправильное местоимение'
      }
    } else if (reg16.test(glag) && !iscl1) {
      const end = 'ать';
      switch (mest.toLowerCase()) {
        // 1 лицо
        case 'я':
          return glag.replace(end, 'аю');
        case 'мы':
          return glag.replace(end, 'аем');
        // 2 лицо
        case 'ты':
          return glag.replace(end, 'аешь');
        case 'вы':
          return glag.replace(end, 'аете');
        // 3 лицо
        case 'он':
        case 'она':
          return glag.replace(end, 'ает');
        case 'они':
          return glag.replace(end, 'ают');
        default:
          return 'указано неправильное местоимение'
      }
    } else if (reg17.test(glag)) {
      const end = 'ать';
      switch (mest.toLowerCase()) {
        // 1 лицо
        case 'я':
          return glag.replace(end, 'у');
        case 'мы':
          return glag.replace(end, 'им');
        // 2 лицо
        case 'ты':
          return glag.replace(end, 'ишь');
        case 'вы':
          return glag.replace(end, 'ите');
        // 3 лицо
        case 'он':
        case 'она':
          return glag.replace(end, 'ит');
        case 'они':
          return glag.replace(end, 'ат');
        default:
          return 'указано неправильное местоимение'
      }
    } else if (reg18.test(glag)) {
      const end = 'овать';
      switch (mest.toLowerCase()) {
        // 1 лицо
        case 'я':
          return glag.replace(end, 'ую');
        case 'мы':
          return glag.replace(end, 'ем');
        // 2 лицо
        case 'ты':
          return glag.replace(end, 'ешь');
        case 'вы':
          return glag.replace(end, 'ете');
        // 3 лицо
        case 'он':
        case 'она':
          return glag.replace(end, 'ет');
        case 'они':
          return glag.replace(end, 'ют');
        default:
          return 'указано неправильное местоимение'
      }
    } else if (reg19.test(glag)) {
      const end = 'ить';
      switch (mest.toLowerCase()) {
        // 1 лицо
        case 'я':
          return glag.replace(end, 'у');
        case 'мы':
          return glag.replace(end, 'им');
        // 2 лицо
        case 'ты':
          return glag.replace(end, 'ишь');
        case 'вы':
          return glag.replace(end, 'ите');
        // 3 лицо
        case 'он':
        case 'она':
          return glag.replace(end, 'ит');
        case 'они':
          return glag.replace(end, 'ат');
        default:
          return 'указано неправильное местоимение'
      }
    } else {
      return 'Результат не найден';
    }
  } else {
    return 'Введены не строковые значения!';
  }

}

const arr = ['быть', 'забыть', 'открыть', 'закрыть', 'прибыть', 'покрыть', 'плыть', 'раскрыть', 'прикрыть', 'скрыть', 'мыть']

container = document.querySelector('#container');

arr.forEach((el, i) => {
  container.innerHTML += `<div>${i+1}.) я ${sclon(el, 'я')}</div>
                          <div>${i+1}.) мы ${sclon(el, 'мы')}</div>
                          <div>${i+1}.) ты ${sclon(el, 'ты')}</div>
                          <div>${i+1}.) вы ${sclon(el, 'вы')}</div>
                          <div>${i+1}.) он(она) ${sclon(el, 'он')}</div>
                          <div>${i+1}.) они ${sclon(el, 'они')}</div>`;
});

arr.forEach((el, i) => {
  console.group(`--- ${i+1} ---`);
  console.log('я' ,sclon(el, 'я'));
  console.log('мы' ,sclon(el, 'мы'));
  console.log('ты' ,sclon(el, 'ты'));
  console.log('вы' ,sclon(el, 'вы'));
  console.log('он(она)' ,sclon(el, 'он'));
  console.log('они' ,sclon(el, 'они'));
  console.log(sclon(el, 'dsd'));
  console.groupEnd();
});