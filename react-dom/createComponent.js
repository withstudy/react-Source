/**
 * Created by 14843 on 2020/5/10.
 */
import Component from "../component/index" ;
/**
 * 创建组件对象
 * @param tag 可能是一个类或者是一个函数 ，对应类组件，函数组件
 * @param attrs  给这个组件设置的属性
 * @returns {*}  返回的是一个组件对象
 */
export function createComponent(tag,attrs) {
    let component;
    if(tag.prototype && tag.prototype.render){
        //如果通过class 创建的组件 直接new 一个对象返回
        component=new tag(attrs);
       // console.log(component)
    }else{
        //函数组件
        component=new Component(attrs);
        //将组件对象的构造函数设置为函数组件
        component.constructor=tag;
        component.render=function () {
            //调用对象的构造函数，得到的是函数组件返回的jsx 也就是虚拟对象
            return this.constructor();
        }
    }
    //console.log(component);
    return component;
}