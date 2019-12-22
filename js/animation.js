"use strict";

// head.onclick = function() {
//     //...
//     let times = 1;
  
//     function go() {
//       if (times % 2) {
//         // плыть вправо
//         head.style.marginLeft = 100 + 200 + 'px';
//       } else {
//         // плыть влево
//         head.style.marginLeft = 100 - 200 + 'px';
//       }
  
//     }
  
//     go();
  
//     head.addEventListener('transitionend', function() {
//     //   times++;
//     //   go();
//     alert('animation transitionend');
//     });
//   };


head.onclick = function() {

  this.onclick = null; // анимация должна начинаться только после первого клика

  let times = 1;

  function go() {
    if (times % 2) {
      head.classList.remove('back');
      head.style.marginLeft = 100 + 200 + 'px';
    } else {
      head.classList.add('back');
      head.style.marginLeft = 100 - 200 + 'px';
    }

  }

  go();

  head.addEventListener('transitionend', function() {
    times++;
    go();
  });
}