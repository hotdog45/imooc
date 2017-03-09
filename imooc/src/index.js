/**
 * Created by lishunfeng on 2017/3/9.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

//导入第三方
//https://js.coach/react-native
import TabNavigator from 'react-native-tab-navigator';
//导入自定义
import Home from './business/Home/HomePage';
import Me from './business/Me/MePage';



export default class imooc extends Component {

    //构造函数
    constructor() {
        //子类必须调用父类的构造函数
        super();

        //state: 存放组件内部的数据
        this.state = {
            selectedTab: 'home'
        }
    }

    render() {
        return (
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    title="首页"
                    renderIcon={() => <Image source={require('./img/homeUnselected.png')} />}
                    renderSelectedIcon={() => <Image source={require('./img/homeSelected.png')} />}
                    onPress={() => this.setState({ selectedTab: 'home' })}
                    titleStyle={styles.titleStyle}
                    selectedTitleStyle={styles.selectedTitleStyle}
                >
                    <Home/>
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab === 'me'}
                    title="我的"
                    renderIcon={() => <Image source={require('./img/homeUnselected.png')} />}
                    renderSelectedIcon={() => <Image source={require('./img/homeSelected.png')} />}
                    onPress={() => this.setState({ selectedTab: 'me' })}
                    titleStyle={styles.titleStyle}
                    selectedTitleStyle={styles.selectedTitleStyle}
                >
                    <Me/>
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}



/**组件的生命周期
 * 加载过程
 * constructor()
 * componentWillMount()
 * render()
 * componentDidMount()
 *
 * 更新过程
 * componentWillReceiveProps()
 * shouldComponentUpdate()
 * componentWillUpdate()
 * render()
 * componentDidUpdate()
 *
 * 释放组件
 * componentWillUnMount()
 *
 * */



const styles = StyleSheet.create({
    titleStyle: {
        color: '#B8B6B6',
    },
    selectedTitleStyle: {
        color: '#919191',
    }
});

/**
 * 注册程序加载第一个组件
 * AppRegistry.registerComponent(应用标识符，获取组件的函数)
 * 应用标识符：要和工程名字保持一致
 * 获取组件的函数的返回值，和当前的组件名保持一致
 *
 * ES6允许使用"箭头"（=>）定义函数。
 * var f = v =>v;
 * var f = function(v){
 *   return v;
 * }
 * 函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
 *
 * */
AppRegistry.registerComponent('imooc', () => imooc);