function scroll(obj) {
  let { map, father = document.documentElement, from, to } = obj;
  let x = 0; //当前滚动坐标
  let height = 0; //滚动高度
  let progress = 0; //当前滚动百分比
  function fn() {
    x = father.scrollTop - from;
    if (x < 0) {
      x = 0;
    } else if (x > to - from) {
      x = to - from;
    }
    height = father.scrollHeight - father.clientHeight - from;

    let a = to ? to - from : height;
    progress = Number((x / a).toFixed(4));
    map(progress);
  }
  fn();
  window.addEventListener("scroll", fn);
}
