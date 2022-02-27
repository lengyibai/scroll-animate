<img class="lyb" src="http://lengyibai.gitee.io/img-bed/img/lyb.png" style="width:200px;margin:0 auto;border-radius:50%" />

<p style="font-size:50px;font-weight:bold;width:100%;text-align:center;color:#fff;text-shadow:0 0 15px">冷弋白</p>
<p style="text-align:center;color:#aaa;position: relative;top:-10px;text-shadow:0 0 10px"><a href='https://wpa.qq.com/msgrd?v=3&uin=1329670984&site=qq&menu=yes' style='text-decoration: none;
'>点击此处联系我</a></p>

# 页面滚动元素动画入场

## 起步

> 引入：`http://lengyibai.gitee.io/scroll-animate/scroll-animate.js`
>
> 页面滚动到指定位置，元素以动画方式出场
>
> 此功能也支持盒子内的滚动动画，但这个盒子的父盒子千万不要通过`flex`布局给可以滚动的子盒子设置垂直居中，否则可能会造成高度计算错误
>
> 注：如果是通过`window`或`document.body`来监听的滚动，请给`body`设置`height: 100vh`和`overflow: auto`，否则无法使用
>
> Vue 内使用参考 demo：[Vue 内元素入场动画](https://gitee.com/lengyibai/vue-library/tree/master/src/07-%E8%BF%87%E6%B8%A1%E5%8A%A8%E7%94%BB)

## 只执行一次动画

> 即已经出现过的元素，不会在下一次出现执行动画

```js
animate([a, b, c, d, e, f, g], translate3);
scrollOnce({ father, el, into, time })
//以上两个需要一起使用
```

> animate
>
> 参数1：传递包含多个元素的数组或只传递单个元素
>
> 参数2：传递作者提供的动画函数名，或自己仿照动画函数进行自定义
>
> 参数3：传递数字，代表执行动画前的元素透明度，默认为`0`，代表淡入
>
> scrollOnce：传递对象，如下表

| 对象属性 | 说明                                                         | 类型                   | 是否必填 | 默认值                   |
| -------- | ------------------------------------------------------------ | ---------------------- | -------- | ------------------------ |
| father   | 滚动的盒子，不出意外的话，设置为`this`即可，指向滚动事件的元素 | Element                | 否       | document.documentElement |
| el       | 要跟随页面滚动而运动的元素的容器，用于坐标计算，因为`son`的位置会被改变影响坐标计算，所以需要一个容器 | [ Element ] or Element | 是       | -                        |
| son      | 要跟随页面滚动而运动的元素                                   | [ Element ] or Element | 是       | -                        |
| into     | 从进入可视区的继续滚动多长距离才开始执行动画，0-1，`el`高度的倍数 | Number                 | 否       | 0.5                      |
| time     | 动画时长，单位：秒                                           | Number                 | 否       | 0.5                      |



```js
const once = document.querySelector(".once");
const once_a = document.querySelector(".once-a");
const once_a_son = document.querySelector(".once-a-son");
animate(once_a_son, translate1)
once.onscroll = function () {
  scrollOnce({
    once: this,
    el: once_a,
    son: once_a_son,
    into: 1
  });
};
```

## 可重复执行动画

> 即已经出现过的元素，下一次可再次执行动画

```js
scrollRepeat({ father, el, into, animate, });
```

> 传递一个对象

| 对象属性 | 说明                                                         | 类型                   | 是否必填 | 默认值                   |
| -------- | ------------------------------------------------------------ | ---------------------- | -------- | ------------------------ |
| father   | 滚动的盒子，不出意外的话，设置为`this`即可，指向滚动事件的元素 | Element                | 否       | document.documentElement |
| el       | 要跟随页面滚动而运动的元素的容器，用于坐标计算，因为`son`的位置会被改变影响坐标计算，所以需要一个容器 | [ Element ] or Element | 是       | -                        |
| son      | 要跟随页面滚动而运动的元素                                   | [ Element ] or Element | 是       | -                        |
| into     | 从进入可视区的继续滚动多长距离才开始执行动画，0-1，`el`高度的倍数 | Number                 | 否       | 0.5                      |
| time     | 动画时长，单位：秒                                           | Number                 | 否       | 0.5                      |

```js
const repeat = document.querySelector(".repeat");
const repeat_a = document.querySelector(".repeat-a");
const repeat_a_son = document.querySelector(".repeat-a-son");
repeat.onscroll = function () {
  scrollRepeat({
    repeat: this,
    el: repeat_a,
    son: repeat_a_son,
    into: 1,
    animate: mixedTS1,
    time: 0.5,
  });
};
```

## 动画函数

> 详情请访问[复制动画名](http://lengyibai.gitee.io/scroll-animate/)

### 普通动画函数

#### 平移

| 函数名动画 | 动画样式     |
| ---------- | ------------ |
| translate1 | 从上向下移动 |
| translate2 | 从下向上移动 |
| translate3 | 从左向右移动 |
| translate4 | 从右向左移动 |

#### 混合平移

| 函数名动画 | 动画样式             |
| ---------- | -------------------- |
| mixedT1    | 从左下角往右上角移动 |
| mixedT2    | 从左上角往右下角移动 |
| mixedT3    | 从右上角往左下角移动 |
| mixedT4    | 从右下角往左下角移动 |

#### 旋转

| 函数名动画 | 动画样式     |
| ---------- | ------------ |
| rotate1    | 从上到下旋转 |
| rotate2    | 从左到右旋转 |

#### 缩放

| 函数名动画 | 动画样式 |
| ---------- | -------- |
| scale1     | 从小到大 |
| scale2     | 从大到小 |

### 花样动画函数

#### 混合平移旋转

| 函数名动画 | 动画样式                        |
| ---------- | ------------------------------- |
| mixedTR1   | 从上到下平移并逆时针旋转 180 度 |
| mixedTR2   | 从上到下平移并顺时针旋转 180 度 |
| mixedTR3   | 从左到右平移并顺时针旋转 180 度 |
| mixedTR4   | 从右到左平移并顺时针旋转 180 度 |
| mixedTR5   | 从左到右平移并顺时针旋转 180 度 |
| mixedTR6   | 从右到左平移并逆时针旋转 180 度 |

#### 混合平移缩放

| 函数名动画 | 动画样式     |
| ---------- | ------------ |
| mixedTS1   | 从左到右放大 |
| mixedTS2   | 从右到左放大 |
| mixedTS3   | 从右到左缩小 |
| mixedTS4   | 从左到右缩小 |
| mixedTS5   | 从上到下缩小 |
| mixedTS6   | 从下到上放大 |
| mixedTS7   | 从下到上缩小 |

#### 混合旋转缩放

| 函数名动画 | 动画样式              |
| ---------- | --------------------- |
| mixedRS1   | 逆时针旋转 180 度放大 |
