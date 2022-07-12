# Frontle Toast

Toast UI in Frontle

 [![NPM Version][npm-version-image]][npm-url]

 [![NPM Install Size][npm-install-size-image]][npm-install-size-url]

 [![NPM Downloads][npm-downloads-image]][npm-downloads-url]

![화면-기록-2022-07-12-오후-4.50.51](https://user-images.githubusercontent.com/49587288/178438423-d5967579-8d20-4707-acba-3c9e5a9a5245.gif)

```javascript
// at css file
.testToastContents{
    font-size: 16px;
}
.testToastContents1{
    color: black;
}

// at js file
import {Toast} from "../../frontle/browser_modules/frontle-toast/toast.js";

let toast = new Toast(`<div>this is a toast<div>`);
toast.toastContentsClass = 'testToastContents testToastContents1';
toast.start = () => {
    console.log('toast start!');
}
toast.open();
```



## Installation

**How to install from Frontle**

```shell
$ frontle install frontle-toast
```



## Function

#### new toast(html)

Create a toast object

```javascript
let toast = new Toast(`<div>this is a toast<div>`);
```



#### toast.CSSClass

Set the css class of a toast

```javascript
toast.toastClass = 'css_class_name';
toast.toastContentsClass = 'css_class_name';
```



#### toast.transitionSeconds

Set the toast animation time

```javascript
toast.transitionSeconds = '0.3';
```



#### toast.holdSeconds

Set the toast hold time

```javascript
toast.holdSeconds = '3';
```



#### toast.awake

This lifecycle runs before toast rendering.

```javascript
toast.awake () => { console.log('before rendering') }
```



#### toast.start

This lifecycle runs after toast rendered

```javascript
toast.start () => { console.log('after rendering') }
```



#### toast.end

This lifecycle runs before toast termination

```javascript
toast.end () => { console.log('end') }
```



#### toast.open()

Open toast

```javascript
toast.open();
```



#### toast.close()

Close toast

```javascript
toast.close();
```



## People

The original author of frontle-toast is [MushStory](https://github.com/MushStory)



## License

 [MIT](LICENSE)



[npm-downloads-image]: https://badgen.net/npm/dm/frontle-toast
[npm-downloads-url]: https://npmcharts.com/compare/frontle-toast?minimal=true
[npm-install-size-image]: https://badgen.net/packagephobia/install/frontle-toast
[npm-install-size-url]: https://packagephobia.com/result?p=frontle-toast
[npm-url]: https://npmjs.org/package/frontle-toast
[npm-version-image]: https://badgen.net/npm/v/frontle-toast