import txt from './input.txt';
// var txt = document.querySelectorAll('pre')[0].innerText;
var input = txt.split('');
var res = input.reduce((acc, dir) => dir === '(' ? ++acc : --acc, 0);
console.log('res:', res);

/*
输入：文本 txt、方向 dir
输出：累计结果 acc
思路：reduce((acc, dir) => {})
控制台使用：var txt = document.querySelectorAll('pre')[0].innerText 取到文本内容，打印 res 值为 280
*/
