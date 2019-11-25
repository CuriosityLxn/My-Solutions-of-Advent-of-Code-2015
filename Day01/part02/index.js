import txt from './input.txt';

var input = txt.split('');
var floor = 0;
var res = input.findIndex(dir => {
  floor += dir === '(' ? 1 : -1;
  return floor < 0;
}) + 1;

console.log('res:', res); // res: 1979

/*
输入：文本 txt、方向 dir
输出：满足条件的 index
思路：findIndex(element => {element 需要满足的条件})，下标从1开始，输出 index + 1
控制台使用：var txt = document.querySelectorAll('pre')[0].innerText 取到文本内容，打印 res 值为 1979
*/