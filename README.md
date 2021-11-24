# NOTE: THIS IS A TEST PACKAGE!

## Try it

``` bash
npm i npm-com-alert
```

## Params

``` js
this.$alert({
  // custom className，自定义的样式类
  className: '',
  visible: false,
  // title, support html，标题，可传HTML
  title: '',
  // text, support html，提示文字，可传HTML
  text: '',
  // button name, optional，按钮文字，可选
  btnTitle: '',
  // click Close in the upper right corner? 
  // It can be closed by default
  // 是否可点击右上角关闭，默认可关闭
  closable: true,
}).then((res) => {
  if (res === true) {
    // return boolean, you can write your code here.
    // 点击按钮返回布尔值true
  }
})
```
