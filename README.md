# Frontle Toast

Toast UI in Frontle



 [![NPM Version][npm-version-image]][npm-url]

 [![NPM Install Size][npm-install-size-image]][npm-install-size-url]

 [![NPM Downloads][npm-downloads-image]][npm-downloads-url]

```javascript
<style>
  .testToastContents{
      font-size: 16px;
  }
  .testToastContents1{
      color: black;
  }
</style>

let toast = new Toast(this.handler, `
    <div>this is a toast<div>
`);
toast.toastContentsClass = 'testToastContents testToastContents1';
toast.start = () => {
    console.log('toast start!');
}
toast.open();
```



## Installation

Installation is done using the

```shell
$ frontle install-original frontle-toast
```



## Function

#### new toast(handler, html)

Create a toast object

```javascript
let toast = new Toast(this.handler, `
    <div>this is a toast<div>
`);
```



#### toast.toastClass

Sets the class of a toast

```javascript
toast.toastClass = 'classname';
toast.toastContentsClass = 'classname';
```



#### toast.transitionSeconds

Setting the Toast Animation time

```javascript
toast.transitionSeconds = '0.3';
```



#### toast.holdSeconds

Setting the Toast hold time

```javascript
toast.holdSeconds = '3';
```



#### toast.awake

Lifecycle running before the toast is rendered

```javascript
toast.awake () => { console.log('before rendering') }
```



#### toast.start

Lifecycle that runs after the toast is rendered

```javascript
toast.start () => { console.log('after rendering') }
```



#### toast.end

Lifecycle running before toast termination

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

The original author of frontle-modal is [MushStory](https://github.com/MushStory)



## License

 [MIT](LICENSE)



[npm-downloads-image]: https://badgen.net/npm/dm/frontle-toast
[npm-downloads-url]: https://npmcharts.com/compare/frontle-toast?minimal=true
[npm-install-size-image]: https://badgen.net/packagephobia/install/frontle-toast
[npm-install-size-url]: https://packagephobia.com/result?p=frontle-toast
[npm-url]: https://npmjs.org/package/frontle-toast
[npm-version-image]: https://badgen.net/npm/v/frontle-toast