import txt from './input.txt';

var input = txt.split('');

var RbSanta = [], Santa = [];

input.filter((item, index) => index % 2 ? RbSanta.push(item) : Santa.push(item));

/*
输入：文本 txt、方向 dir
输出：访问过的值的个数
思路：跟 part 01 一样，只是将文本拆分成了两份，这里只记录拆分两份的过程
控制台使用：var txt = document.querySelectorAll('pre')[0].innerText 取到文本内容，打印 res 值为 2631
*/