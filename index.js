const arr = [
  translate1,
  translate2,
  translate3,
  translate4,
  mixedT1,
  mixedT2,
  mixedT3,
  mixedT4,
  rotate1,
  rotate2,
  scale1,
  scale2,
  mixedTR1,
  mixedTR2,
  mixedTR3,
  mixedTR4,
  mixedTR5,
  mixedTR6,
  mixedTS1,
  mixedTS2,
  mixedTS3,
  mixedTS4,
  mixedTS5,
  mixedTS6,
  mixedTS7,
  mixedRS1,
  mixedRS2,
];
const animatsName = [
  ["上-下", "translate1"],
  ["下-上", "translate2"],
  ["左-右", "translate3"],
  ["右-左", "translate4"],
  ["左下-右上", "mixedT1"],
  ["左上-右下", "mixedT2"],
  ["右上-左下", "mixedT3"],
  ["右下-左上", "mixedT4"],
  ["横轴逆转", "rotate1"],
  ["纵轴逆转", "rotate2"],
  ["小-大", "scale1"],
  ["大-小", "scale2"],
  ["上-下横轴逆转", "mixedTR1"],
  ["下-上横轴顺转", "mixedTR2"],
  ["左-右纵轴逆转", "mixedTR3"],
  ["右-左纵轴逆转", "mixedTR4"],
  ["左-右正轴顺转", "mixedTR5"],
  ["右-左正轴逆转", "mixedTR6"],
  ["左小-右大", "mixedTS1"],
  ["右小-左大", "mixedTS2"],
  ["右大-左小", "mixedTS3"],
  ["左大-右小", "mixedTS4"],
  ["上大-下小", "mixedTS5"],
  ["下小-上大", "mixedTS6"],
  ["下大-上小", "mixedTS7"],
  ["小-大正轴逆转", "mixedRS1"],
  ["大-小正轴顺转", "mixedRS2"],
];
const animats = document.querySelector(".animats");
let array = [];
animatsName.forEach((item, index) => {
  array.push(
    `<li data-index="${index}" data-animate="${item[1]}">${item[0]}</li>`
  );
});
animats.innerHTML = array.join(" "); //join转换成字符串
const li = animats.querySelectorAll("li");
const boxs = document.querySelectorAll(".box");
let flag = true;
fn();
function fn() {
  li.forEach((item) => {
    item.addEventListener("mouseup", function () {
      boxs.forEach((el, i) => {
        el.style.opacity = 0;
        el.style.transition = "all 0s";
        arr[item.getAttribute("data-index")](el);
        setTimeout(() => {
          if (flag) {
            el.style.transition = `all 0.5s ${i / 10}s `;
          } else {
            el.style.transition = "all 0.5s ";
          }
          el.style.transitionDelay = el.style.opacity = 1;
          el.style.transform = "";
          setTimeout(() => {
            el.style.transition = "all 0.5s ";
          }, parseFloat(el.style.transitionDuration) * 1000);
        }, 1000);
      });
    });
  });
}

function copyText(text, callback) {
  var tag = document.createElement("input");
  tag.setAttribute("id", "cp_hgz_input");
  tag.value = text;
  document.getElementsByTagName("body")[0].appendChild(tag);
  document.getElementById("cp_hgz_input").select();
  document.execCommand("copy");
  document.getElementById("cp_hgz_input").remove();
  if (callback) {
    callback(text);
  }
}
const success = document.querySelector(".success");
for (var i = 0; i < li.length; i++) {
  li[i].onclick = function () {
    var color = this.getAttribute("data-animate");
    success.style.backgroundColor = color;
    copyText(color, function () {
      setTimeout(() => {
        success.style.opacity = "1";
      }, 0);
      setTimeout(() => {
        success.style.opacity = "0";
      }, 750);
    });
  };
}




function translate1(el) {
  el.style.transform = `translateY(-100%)`;
}
function translate2(el) {
  el.style.transform = "translateY(100%)";
}
function translate3(el) {
  el.style.transform = "translateX(-200%)";
}
function translate4(el) {
  el.style.transform = "translateX(200%)";
}
function rotate1(el) {
  el.style.transform = "rotateX(180deg)";
}
function rotate2(el) {
  el.style.transform = "rotateY(-180deg)";
}
function scale1(el) {
  el.style.transform = "scale(0.1)";
}
function scale2(el) {
  el.style.transform = "scale(2)";
}
function scale3(el) {
  el.style.transform = "scale3d(2,1,1)";
}
function mixedT1(el) {
  el.style.transform = "translateX(-200%) translateY(100%)";
}
function mixedT2(el) {
  el.style.transform = "translateX(-200%) translateY(-100%)";
}
function mixedT3(el) {
  el.style.transform = "translateX(200%) translateY(-100%)";
}
function mixedT4(el) {
  el.style.transform = "translateX(200%) translateY(100%)";
}
function mixedTR1(el) {
  el.style.transform = "translateY(-100%) rotateX(180deg)";
}
function mixedTR2(el) {
  el.style.transform = "translateY(100%) rotateX(-180deg)";
}
function mixedTR3(el) {
  el.style.transform = "translateX(-200%) rotateY(180deg)";
}
function mixedTR4(el) {
  el.style.transform = "translateX(200%) rotateY(-180deg)";
}
function mixedTR5(el) {
  el.style.transform = "translateX(-200%) rotateZ(-180deg)";
}
function mixedTR6(el) {
  el.style.transform = "translateX(200%) rotateZ(180deg)";
}
function mixedTS1(el) {
  el.style.transform = "translateX(-200%) scale(0.1)";
}
function mixedTS2(el) {
  el.style.transform = "translateX(200%) scale(0.1)";
}
function mixedTS3(el) {
  el.style.transform = "translateX(200%) scale(2)";
}
function mixedTS4(el) {
  el.style.transform = "translateX(-200%) scale(2)";
}
function mixedTS5(el) {
  el.style.transform = "translateY(-100%) scale(2)";
}
function mixedTS6(el) {
  el.style.transform = "translateY(100%) scale(0.1)";
}
function mixedTS7(el) {
  el.style.transform = "translateY(100%) scale(2)";
}
function mixedRS1(el) {
  el.style.transform = "rotateZ(180deg) scale(0.1)";
}
function mixedRS2(el) {
  el.style.transform = "rotateZ(-180deg) scale(2)";
}
function opacity(el) {
  el.style.opacity = 0;
}