import fs from "fs";
import path from "path";

/**
 * 递归获取指定目录下所有文件的绝对路径
 * @param {string} dirPath - 要遍历的目录路径
 * @param {string[]} arrayOfFiles - 存储文件路径的数组（递归用）
 * @returns {string[]} 包含所有文件绝对路径的数组
 */
function getAllFiles(dirPath, arrayOfFiles) {
  // 读取目录内容，withFileTypes选项使返回的是Dirent对象，包含文件类型信息，也就是有了这个才可以用isxxx方法
  const files = fs.readdirSync(dirPath, { withFileTypes: true });

  // 初始化文件路径数组（第一次调用时）
  arrayOfFiles = arrayOfFiles || [];

  // 遍历目录中的所有文件和文件夹
  files.forEach((file) => {
    if (file.isDirectory()) {
      // 如果是文件夹，递归调用getAllFiles
      arrayOfFiles = getAllFiles(
        path.resolve(dirPath, file.name),
        arrayOfFiles
      );
    } else {
      // 如果是文件，将其绝对路径添加到数组中
      arrayOfFiles.push(path.resolve(dirPath, file.name));
    }
  });

  return arrayOfFiles;
}

console.log(getAllFiles("../"));

/**
 * fs模块常用方法说明：
 *
 * 同步文件操作：
 * fs.readFileSync(path[, options]) - 同步读取文件内容
 * fs.writeFileSync(file, data[, options]) - 同步写入文件
 * fs.appendFileSync(path, data[, options]) - 同步追加内容到文件
 * fs.unlinkSync(path) - 同步删除文件
 * fs.mkdirSync(path[, options]) - 同步创建目录
 * fs.rmdirSync(path[, options]) - 同步删除目录
 * fs.readdirSync(path[, options]) - 同步读取目录内容
 * fs.statSync(path[, options]) - 同步获取文件/目录信息
 * fs.existsSync(path) - 同步检查路径是否存在
 *
 * 异步文件操作：
 * fs.readFile(path[, options], callback) - 异步读取文件
 * fs.writeFile(file, data[, options], callback) - 异步写入文件
 * fs.appendFile(path, data[, options], callback) - 异步追加内容
 * fs.unlink(path, callback) - 异步删除文件
 * fs.mkdir(path[, options], callback) - 异步创建目录
 * fs.rmdir(path[, options], callback) - 异步删除目录
 * fs.readdir(path[, options], callback) - 异步读取目录
 * fs.stat(path[, options], callback) - 异步获取文件信息
 *
 * Promise版本（fs.promises）：
 * fs.promises.readFile() - 返回Promise的读取文件
 * fs.promises.writeFile() - 返回Promise的写入文件
 * fs.promises.appendFile() - 返回Promise的追加内容
 * fs.promises.unlink() - 返回Promise的删除文件
 * fs.promises.mkdir() - 返回Promise的创建目录
 * fs.promises.rmdir() - 返回Promise的删除目录
 * fs.promises.readdir() - 返回Promise的读取目录
 * fs.promises.stat() - 返回Promise的获取文件信息
 *
 * 文件流操作：
 * fs.createReadStream(path[, options]) - 创建可读流
 * fs.createWriteStream(path[, options]) - 创建可写流
 *
 * 文件监听：
 * fs.watch(filename[, options][, listener]) - 监听文件/目录变化
 * fs.watchFile(filename[, options], listener) - 监听文件变化
 *
 * 权限操作：
 * fs.chmod(path, mode, callback) - 修改文件权限
 * fs.chown(path, uid, gid, callback) - 修改文件所有者
 * fs.access(path[, mode], callback) - 检查文件访问权限
 */
