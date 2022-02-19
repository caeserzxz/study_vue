//1.导入{}中的变量
import { flag,sum } from "./aaa.js"
if(flag){
	console.log('嘿嘿嘿')
}
console.log(sum(1,2))

//2.直接导入export定义的变量
import	{num1,height} from "./aaa.js"
console.log(num1)
console.log(height)

//3.导入 export的function
import {mul, Person} from './aaa.js';

console.log(mul(30,50));

const p = new Person();
p.run();

// 4.default导入 export default 中的内容
import addr from './aaa.js';
// console.log(addr)
addr('你好阿');

//5统一全部导出
import * as aaa from './aaa.js';

console.log(aaa.flag)