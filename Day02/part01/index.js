import txt from './input.txt';

// 这里有个坑: 文本末尾有个换行，所以 txt.split('\n').length = 1001，其中 txt.split('\n')[1000] = ''
var input = txt.slice(0, -1).split('\n');
var res = input.reduce((totalArea, curStr) => {
  var dims = curStr.split('x');
  var lw = dims[0] * dims[1];
  var wh = dims[1] * dims[2];
  var lh = dims[0] * dims[2];

  return totalArea + 2 * (lw + wh + lh) + Math.min(lw, wh, lh);
  
}, 0);

console.log('res: ', res); // res: 1606483

/*
输入：文本 txt、面积计算公式 2 * (lw + wh + lh) + Math.min(lw, wh, lh)
输出：总面积 totalArea
思路：reduce((acc, cur) => {})
控制台使用：var txt = document.querySelectorAll('pre')[0].innerText 取到文本内容，打印 res 值为 1606483
*/

/* 简单粗暴的方法写起来简单，但应该有针对单个面积的更好的计算方法，可以再想一下 */
