const fs = require("fs");
// 初始化README，每次都不会变的内容
let data = `
![Yes](https://qiniu.lqh.kim/banner1.jpg)
# 算法题整理

该仓库主要是为了整理记录自己平时所做的算法题，提升内功从每天一点点开始。

- 题目按照模块划分，主要分为链表、栈、队列、树等几大模块，后续会逐步添加
- 每道题目的题解会通过注释的方式将思路和一些注意点进行说明
- 每个文件命名的前面的数字就是该题在**LeetCode中对应的题号**
- 概念相关的可以查看我的语雀笔记，[点击这里查看](https://www.yuque.com/callmew/blog/qdou1k)

> 建议：对于算法初学者来说，还是按照模块并且从简单类型的题目入手开始，一是给自己增加信心，二是便于理解掌握算法的套路

---
`;

// 获取文件夹
const folders = fs
  .readdirSync("./")
  .filter((f) => !f.includes(".") && !f.includes("node_modules"));
// 需要写入的内容
let content = "";
// 已经做题的总数
let count = 0;
// 获取文件夹下的每个文件
folders.forEach((item) => {
  const list = fs.readdirSync(`./${item}`);
  // 设置二级标题
  content += `\r\n## ${item}`;
  // 遍历每个文件下的文件将对应文件名写入content中
  list.forEach((i) => {
    count++;
    // 为每个分类下添加无序列表
    // ## A
    // - xxxxxx
    content += `
- [${i.split(".")[1]}](/${item}/${i})
    `;
  });
});
// 更新刷题总数

data += `\r\n 已完成：【<font color=#f0215 size=72>${count}</font>】道题`;
// 拼接文件
content = data + content;
// 清空文件重新写入
fs.truncate("./README.md", 0, function () {
  // 清空完成
  console.log("done");
  // 添加content至README文档
  fs.appendFileSync("./README.md", content);
});
