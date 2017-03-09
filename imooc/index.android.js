/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


//global: js的全局变量, 类似web端中js的window
global.ANDROID = true;
global.IOS = false;
//require导入其他模块, 如果不指定默认导入index.js
require('./src');
