//Buffer是Node.js中的一个全局对象，用于处理二进制数据。它提供了一种在JavaScript中处理二进制数据的方式，特别是在处理网络协议、文件操作和加密等场景中非常有用。
//创建Buffer
const buf = Buffer.alloc(10);
const buf2 = Buffer.from("hello,world!");
const buf3 = Buffer.from([0x68, 0x65, 0x6c, 0x6c, 0x6f]);

console.log(buf, buf2, buf3);
console.log(buf2.toString());
console.log(buf2.toString("hex"));
console.log(Array.from(buf2));
console.log(buf2.toString("base64"));

//Buffer.write()方法用于将字符串写入Buffer。
buf.write("hello");
buf.write("world", 5);
console.log(buf.toString());

//Buffer.concat()方法用于将多个Buffer连接在一起。
const buf4 = Buffer.from("hello");
const buf5 = Buffer.from("world");
const buf6 = Buffer.concat([buf4, buf5]);
console.log(buf6.toString());

//Buffer.slice()方法用于从Buffer中提取一个子Buffer。
const buf7 = buf2.slice(0, 5);
console.log(buf7.toString());
