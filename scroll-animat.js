function translate1(el) {
  el.style.transform = `translateY(-500px)`;
}
function translate2(el) {
  el.style.transform = 'translateY(500px)';
}
function translate3(el) {
  el.style.transform = 'translateX(-500px)';
}
function translate4(el) {
  el.style.transform = 'translateX(500px)';
}
function rotate1(el) {
  el.style.transform = 'rotateX(180deg)';
}
function rotate2(el) {
  el.style.transform = 'rotateY(-180deg)';
}
function scale1(el) {
  el.style.transform = 'scale(0.1)';
}
function scale2(el) {
  el.style.transform = 'scale(2)';
}
function scale3(el) {
  el.style.transform = 'scale3d(2,1,1)';
}
function mixedT1(el) {
  el.style.transform = 'translateX(-500px) translateY(500px)';
}
function mixedT2(el) {
  el.style.transform = 'translateX(-500px) translateY(-500px)';
}
function mixedT3(el) {
  el.style.transform = 'translateX(500px) translateY(-500px)';
}
function mixedT4(el) {
  el.style.transform = 'translateX(500px) translateY(500px)';
}
function mixedTR1(el) {
  el.style.transform = 'translateY(-500px) rotateX(180deg)';
}
function mixedTR2(el) {
  el.style.transform = 'translateY(500px) rotateX(-180deg)';
}
function mixedTR3(el) {
  el.style.transform = 'translateX(-500px) rotateY(180deg)';
}
function mixedTR4(el) {
  el.style.transform = 'translateX(500px) rotateY(-180deg)';
}
function mixedTR5(el) {
  el.style.transform = 'translateX(-500px) rotateZ(-180deg)';
}
function mixedTR6(el) {
  el.style.transform = 'translateX(500px) rotateZ(180deg)';
}
function mixedTS1(el) {
  el.style.transform = 'translateX(-500px) scale(0.1)';
}
function mixedTS2(el) {
  el.style.transform = 'translateX(500px) scale(0.1)';
}
function mixedTS3(el) {
  el.style.transform = 'translateX(500px) scale(2)';
}
function mixedTS4(el) {
  el.style.transform = 'translateX(-500px) scale(2)';
}
function mixedTS5(el) {
  el.style.transform = 'translateY(-500px) scale(2)';
}
function mixedTS6(el) {
  el.style.transform = 'translateY(500px) scale(0.1)';
}
function mixedTS7(el) {
  el.style.transform = 'translateY(500px) scale(2)';
}
function mixedRS1(el) {
  el.style.transform = 'rotateZ(180deg) scale(0.1)';
}
function mixedRS2(el) {
  el.style.transform = 'rotateZ(-180deg) scale(2)';
}
function opacity(el) {
  el.style.opacity = 0;
}

function Animats(el, obj = {}) {
  let { x = 0, y = 0, rx = 0, ry = 0, rz = 0, sx = 1, sy = 1 } = obj;
  el.style.transform = `translateX(${x}) translateY(${y}) rotateX(${rx}deg)  rotateY(${ry}deg)  rotateZ(${rz}deg) scaleX(${sx}) scaleY(${sy})`;
}

function $lybS2(obj, animats) {
  let { el, animat = Animats, time = 1 } = obj;
  function lyb(item, animat, time) {
    if (
      document.documentElement.clientHeight -
        item.getBoundingClientRect().top -
        item.offsetHeight / 1.25 >=
      -item.offsetHeight
    ) {
      item.style.opacity = 1;
      item.style.transform = 'translateX(0%) rotate(0deg) scale(1)';
    } else {
      item.style.transition = `all ${time}s`;
      item.style.transitionDelay = '0s';

      item.style.opacity = 0;
      animat(item, animats);
    }
  }
  el.forEach(item => {
    if (item.length) {
      item.forEach(item => {
        lyb(item, animat, time);
      });
    } else {
      lyb(item, animat, time);
    }
  });
}
