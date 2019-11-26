import txt from './input.txt';

var x = 0, y = 0, visited = {};
var input = txt.split('');

input.forEach(dir => {
  dir === '^' && y++;
  dir === '>' && x++;
  dir === 'v' && y--;
  dir === '<' && x--;
  visited[[x, y]] = 1;
})

var res = Object.keys(visited).length;
console.log('res:', res); // res: 2572

/*
输入：文本 txt、方向 dir
输出：访问过的值的个数
思路：一开始想用二维数组，数组长度不固定，array.push() 不能避免重复的值(去重需要额外判断，不如直接利用对象性质)，所以用了 obj 来做
控制台使用：var txt = document.querySelectorAll('pre')[0].innerText 取到文本内容，打印 res 值为 2572
*/


// 补 去重法

var txt = document.querySelectorAll('pre')[0].innerText;
var x = 0, y = 0, visited = [];
var input = txt.split('');

input.forEach(dir => {
  dir === '^' && y++;
  dir === '>' && x++;
  dir === 'v' && y--;
  dir === '<' && x--;
  visited.push(`(${x}, ${y})`);
})

// 遍历去重，线型复杂度
var res = visited.reduce((pre, acc) => pre.includes(acc) ? pre : [...pre, acc], []).length;

// Set 对象去重，对数复杂度。
// Set 对象存储任何类型的唯一值。见 MDN: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set
var res = [...new Set(visited)].length;
