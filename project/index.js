var generator = require("random-seed");

var rand = generator.create();
rand.initState();
var hash = rand.hashString(" ZhangWei");

var
var randomInt = rand.intBetween(1000, 2000);
var randomFloat = rand.floatBetween(1000, 2000);
// 等同于Math.random()
var randomNumber = rand.random();
// 生成长度为18位的随机字符串
var randomStr = rand.string(18);
// 清楚字符串前后空格
var clear = rand.cleanString(" sa sas s ");
console.log(hash)
// var randomSeed = rand.seed(100);
// console.log(clear)