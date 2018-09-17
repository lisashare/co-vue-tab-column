# vue-tab-column

> A Vue.js project

目的是需要动态设置ul的位置，可以设置绝对定位调整left值，也可以用css3的translateX

那首先需要拿到active 对应li 标签的位置， 实现的关键是这2个方法

offsetLeft  获取当前元素相对于父元素的left值

getBoundingClientRect() 获取当前元素相对于视口（viewport）的位置,宽高等属性。

首先需要获得  居中的位置 = （window.innerWidth - li的宽度 ） / 2;

公式： ul目标位置 = li相对于父元素的left值 -  居中的位置。
   let li= document.querySelector(‘.active‘);
 2           let ul = document.querySelector(‘ul‘)
 3           let window_offsetWidth = window.innerWidth; //屏幕宽度;
 4           if (dom) {
 5              let lioffsetWidth = dom.offsetLeft,
 6               //中间值 =( 屏幕宽度 - li宽度 ) / 2;
 7               diffWidth = (window_offsetWidth - dom.getBoundingClientRect().width) / 2,
 8               //目标值 = offset - 中间值
 9               targetOffset = lioffsetWidth - diffWidth;
10            
11             if (targetOffset < 0) {
12               ul.style.left = ‘0px‘;
13               return;
14             }
15             ul.style.left = -targetOffset + ‘px‘  