# CodeBase Overview

## 外部依赖

React几乎没有外部依赖，当文件中使用`require()`导入文件时，主要是导入本地包，但是还是有一些例外，如[fbjs](https://github.com/facebook/fbjs), 这是因为react会使用到一些小型库如：[Relay](https://github.com/facebook/relay)，这些库需要保持同步性。

## 文件目录

* packages - 既有像package.json这样的元数据也有像src这样的源码，而阅读源码主要指的就是这些源码src包。
* fixtures - 包含的提供给源码贡献者的测试应用
* build - 打包好的react

## 并发测试
在每一个源码包中都有一个`__test__`测试文件文件夹

## 警告与非变量
react会使用`warning`模块展示warning:

```js
var warning = require('warning');

var didWarnAboutMath = false;
if (!didWarnAboutMath) {
  warning(
    2 + 2 === 4,
    'Math is not working today.'
  );
  didWarnAboutMath = true;
}
```

warning 仅出现在dev环境中，在production代码中会被剥离

## 开发和生产

您可以在代码库中使用`__DEV__`伪全局变量来保护仅供开发使用的代码块。

```js
if (__DEV__) {
  // This code will only run in development.
}
```

## Flow
React使用Flow对源码进行检查，如果文件的开头注释中有`@flow`就会进行类型检测。

下面就是很典型的一段测试代码：

```js
ReactRef.detachRefs = function(
  instance: ReactInstance,
  element: ReactElement | string | number | null | false,
): void {
  // ...
}
```
然后运行`yarn flow`测试.

## 动态注入

React在某些模块中使用动态注入，它的缺点在于不易于源码阅读。