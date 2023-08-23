mtc

```javascirpt
npm i @zrcode/mtc
```

根据md、html 自动生成目录数组、锚点链接

```javascirpt
const {mtc,content}=parseMd(md)


const {mtc,content}=parseHtml(html)

console.log('目录数组mtc'， mtc)
console.log('添加了锚点链接的新内容html/md'，content)
```
