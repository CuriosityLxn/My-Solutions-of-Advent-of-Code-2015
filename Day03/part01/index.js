import txt from './input.txt';

var txt = document.querySelectorAll('pre')[0].innerText;
var x = 0, y = 0, visited = [];
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
思路：一开始想用二维数组，数组长度不固定，array.push() 不能避免重复的值，所以用了 obj 来做
控制台使用：var txt = document.querySelectorAll('pre')[0].innerText 取到文本内容，打印 res 值为 2572
*/