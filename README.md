<img class="lyb" src="http://lengyibai.gitee.io/img-bed/img/lyb.png" style="width:200px;margin:0 auto;border-radius:50%" />

<p style="font-size:50px;font-weight:bold;width:100%;text-align:center;color:#fff;text-shadow:0 0 15px">冷弋白</p>
<p style="text-align:center;color:#aaa;position: relative;top:-10px;text-shadow:0 0 10px"><a href='https://wpa.qq.com/msgrd?v=3&uin=1329670984&site=qq&menu=yes' style='text-decoration: none;
'>点击此处联系我</a></p>

# 页面滚动元素动画入场

## 起步

> 引入：`http://lengyibai.gitee.io/scroll-animate/scroll-animate.js`
>
> 页面滚动到一定位置，元素从网页底部滚上来的入场动画
>
> 不建议配合图片懒加载使用
>
> 此功能也支持盒子内的滚动动画，但这个盒子的父盒子千万不要通过`flex`布局的给子盒子(这个盒子)设置垂直居中，否则可能会造成高度计算错误
>
> 注：如果是通过`window`或`body`来监听的滚动，请给`body`设置`height: 100vh`，否则无法使用

```js
$lybS2(obj, obj);
```

## 传递两个对象

### 参数对象(对象 1)

| 对象属性    | 说明                                                         | 类型                           | 是否必填 | 默认值                   |
| ----------- | ------------------------------------------------------------ | ------------------------------ | -------- | ------------------------ |
| el          | 传递一个或多个已经通过*document.querSelector*或*document.querSelectorAll*获取的元素，<br />需要存放在数组内，即使只有一个元素 | Array                          | 是       | -                        |
| animate     | 传递的参数请访问这个网站，[复制动画名](http://lengyibai.gitee.io/scroll-animate/)，粘贴赋给这个参数<br />如果要使用自定义动画，请删除这个参数，自定义动画参考下面的参数 | Function                       | 否       | 自定义动画函数           |
| playY       | 元素进入可视区需要再滚动`playY`的距离才会播放出场动画以及开启`scrollFllow`后的滚动动画<br />如`100`，则元素进入可视区`100`像素后出场<br />如果为负数，则会距离可视区`100`像素时出场（此时还未进入可视区，滑动过慢可能会导致无法看到动画效果）<br />还可设置为百分比，如`50%`，则元素自身一半的位置进入可视区才会出场 | 数字(Number) \| 百分比(String) | 否       | 50%                      |
| scrollFllow | 是否开启元素随着滚动而慢慢播放动画，暂停滚动则暂停动画，反向滚动则倒放动画<br />注意：开启后只支持自定义动画的`x`和`y`轴修改，也不支持旋转和缩放以及作者提供的动画函数 | Boolean                        | 否       | false                    |
| PLAYY       | 元素滚动到可视区`PLAYY`的距离，才能达到最终位置，传递参数与参数`playY`一致<br />释义：如`100%`则元素完全滚动到可视区才会达到最终位置 | 数字(Number) \| 百分比(String) | 否       | 100%                     |
| time        | 每个盒子的动画持续时间，单位为毫秒                           | Number                         | 否       | 500                      |
| fade        | 是否开启淡入淡出，`0`则开启，`0`以上开启，最高为`1`，小数为出场时元素的透明度 | Number                         | 否       | 0                        |
| father      | 针对部分开发者将`body`里面的某个盒子作为滚动的区域，如果要让内部元素支持出场动画和跟随滚动动画，则需要把这个可以滚动的盒子的`dom`赋给`father`，我需要它来计算高度<br />注意：如果`body`内有盒子支持内部滚动了，就不能让`body`滚动，否则会计算错误 | Dom                            | 否       | document.documentElement |

### 自定义动画对象(对象 2)

> 当使用了作者提供的动画函数，也就是给`animal`传值了，自定义动画将会失效

| 对象属性 | 说明                                                                                                                                                                                               | 类型             | 是否必填 | 默认值 |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | -------- | ------ |
| x        | 从 x 轴哪个坐标开始播放动画，内部封装的`translateX()`，传递格式如`'100px'`                                                                                                                         | String           | 否       | -200%  |
| y        | 从 y 轴哪个坐标开始播放动画，内部封装的`translateY()`，传递格式如`'100px'`                                                                                                                         | String           | 否       | 0      |
| rx       | 沿 x 轴旋转，内部封装的`rotateX()`，单位为度 deg<br />开启`scrollFllow`后不支持此属性                                                                                                              | Number           | 否       | 0      |
| ry       | 沿 y 轴旋转，内部封装的`rotateY()`，单位为度 deg<br />开启`scrollFllow`后不支持此属性                                                                                                              | Number           | 否       | 0      |
| rz       | 沿 z 轴旋转，内部封装的`rotateZ()`，单位为度 deg<br />开启`scrollFllow`后不支持此属性                                                                                                              | Number           | 否       | 0      |
| sx       | 横向缩放倍数，低于 1 为缩小，大于 1 为放大，不可为负数，在没有设置`rx`或`ry`时，不可为`0`，单位为倍数，<br />横向与纵向相等时会等比缩放，内部封装的`scaleX()`<br />开启`scrollFllow`后不支持此属性 | Number \| String | 否       | 0.01   |
| sy       | 纵向缩放倍数，低于 1 为缩小，大于 1 为放大，不可为负数，在没有设置`rx`或`ry`时，不可为`0`，单位为倍数，<br />横向与纵向相等时会等比缩放，内部封装的`scaleY()`<br />开启`scrollFllow`后不支持此属性 | Number \| String | 否       | 0.01   |

具体操作如下

```html
<body>
  <ul>
    <p></p>
    <p></p>
    <p></p>
    <li></li>
    <li></li>
    <li></li>
    <div class="box1"></div>
    <div class="box2"></div>
    <div class="box3"></div>
  </ul>

  <!-- JS -->
  <script>
    const a = document.querySelectorAll('li');
    const b = document.querySelectorAll('p');
    const c = document.querySelector('.box1');
    window.onscroll = () => {
      $lybS2({ el: [a, b, c], animate: translate3, time: 1 }, { x: '-100%' });
    };
  </script>
</body>
```

### 动画函数

> 详情请访问[复制动画名](http://lengyibai.gitee.io/scroll-animate/)

#### 普通动画函数

| 函数名动画 |                      |
| ---------- | -------------------- |
| opacity    | 默认，从透明到不透明 |

##### 平移

| 函数名动画 | 动画样式     |
| ---------- | ------------ |
| translate1 | 从上向下移动 |
| translate2 | 从下向上移动 |
| translate3 | 从左向右移动 |
| translate4 | 从右向左移动 |

###### 混合平移

| 函数名动画 | 动画样式             |
| ---------- | -------------------- |
| mixedT1    | 从左下角往右上角移动 |
| mixedT2    | 从左上角往右下角移动 |
| mixedT3    | 从右上角往左下角移动 |
| mixedT4    | 从右下角往左下角移动 |

##### 旋转

| 函数名动画 | 动画样式     |
| ---------- | ------------ |
| rotate1    | 从上到下旋转 |
| rotate2    | 从左到右旋转 |

##### 缩放

| 函数名动画 | 动画样式 |
| ---------- | -------- |
| scale1     | 从小到大 |
| scale2     | 从大到小 |

#### 花样动画函数

##### 混合平移旋转

| 函数名动画 | 动画样式                        |
| ---------- | ------------------------------- |
| mixedTR1   | 从上到下平移并逆时针旋转 180 度 |
| mixedTR2   | 从上到下平移并顺时针旋转 180 度 |
| mixedTR3   | 从左到右平移并顺时针旋转 180 度 |
| mixedTR4   | 从右到左平移并顺时针旋转 180 度 |
| mixedTR5   | 从左到右平移并顺时针旋转 180 度 |
| mixedTR6   | 从右到左平移并逆时针旋转 180 度 |

##### 混合平移缩放

| 函数名动画 | 动画样式     |
| ---------- | ------------ |
| mixedTS1   | 从左到右放大 |
| mixedTS2   | 从右到左放大 |
| mixedTS3   | 从右到左缩小 |
| mixedTS4   | 从左到右缩小 |
| mixedTS5   | 从上到下缩小 |
| mixedTS6   | 从下到上放大 |
| mixedTS7   | 从下到上缩小 |

##### 混合旋转缩放

| 函数名动画 | 动画样式              |
| ---------- | --------------------- |
| mixedRS1   | 逆时针旋转 180 度放大 |
