#### 数组

##### arrayToTree

```js
 function arrayToTree(
  array: TArray,
  parentId: number | string,
  idProp: string = "id",
  parentIdProp: string = "parentId",
  childrenProp: string = "children"
): TArray {
  return array
    .filter(item => item[parentIdProp] === parentId)
    .map(item => ({ ...item, [childrenProp]: arrayToTree(array, item[idProp]) }))
}

```

http://175.178.39.125:10004/

##### 不借助临时变量，进行两个整数的交换

```js

b = b - a
a = a + b
b = a - b
```

```js
 let a = 2
 let b = 3
 ;[a, b] = [b, a]
```

##### 倒计时

```js