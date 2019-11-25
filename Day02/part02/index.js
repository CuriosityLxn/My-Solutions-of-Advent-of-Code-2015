import txt from './input.txt';

var input = txt.slice(0, -1).split('\n');
var res = input.reduce((totalArea, curStr) => {
  var dims = curStr.split('x').map(Number); // 这里有个坑: split 后数组中的每项是字符串，直接相加得出的是字符串拼接后的结果，而不是所需的 Number 的和。
  var c = dims.reduce((acc, cur) => acc * cur);
  var p = 2 * (dims.reduce((acc, cur) => acc + cur) - Math.max(...dims));
  return totalArea + c + p;
  
}, 0);

console.log('res: ', res); // res: 3842356

/*
输入：文本 txt、面积计算公式 2 * (l + w + h - Max(l, w, h)) + l * w * h
输出：总面积 totalArea
思路：reduce((acc, cur) => {})
控制台使用：var txt = document.querySelectorAll('pre')[0].innerText 取到文本内容，打印 res 值为 3842356
*/

/* 简单粗暴的方法写起来简单，但应该有针对单个面积的更好的计算方法，可以再想一下 */
