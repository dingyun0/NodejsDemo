import path from "path";
//path.join为拼接相对路径
console.log(path.join("a", "b", "c"));
console.log(path.join(process.cwd(), "/hello", "world"));

//path.resolve为拼接绝对路径
console.log(path.resolve("a", "b", "c"));
console.log(path.resolve("/hello", "world", "./a", "b"));

//path.dirname为获取路径的目录名
console.log(path.dirname(process.cwd()));

//path.basename为获取路径的文件名
console.log(path.basename(process.cwd()));

//path.extname为获取路径的文件扩展名
console.log(path.extname("pathDemo.js"));

//path.normalize为规范化路径
console.log(path.normalize(process.cwd()));

//path.parse为解析路径
console.log(path.parse(process.cwd()));

//path.sep为路径分隔符
console.log(process.cwd().split(path.sep));
