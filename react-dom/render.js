/**
 * Created by 14843 on 2020/5/10.
 */
import {createComponent} from "./createComponent";
import {setComponentProps}from "./setComponentProps"
import {setAttribute}from "./setAttribute"
/**
 * 将虚拟dom转换为dom 节点
 * @param vnode  虚拟Dom对象
 * @returns {*}  一个dom节点
 * @private
 */
export  function _render(vnode) {
    //console.log(vnode.chlidren)
    //没有传虚拟DOM
    if(vnode === undefined || vnode=== null || typeof vnode === "boolean") return "";
    if(typeof vnode === "number") vnode = String(vnode);
    //vnode 是一个字符串
    if(typeof vnode === "string"){
        //创建文本节点
        const  txtNode = document.createTextNode(vnode);
        //插入容器
        return txtNode;
    }
    //如果vode.tag是自定义函数组件
    if(typeof vnode.tag === "function"){
        //console.log(vnode)
        //创建组件对象
        const component=createComponent(vnode.tag,vnode.attrs);
        //console.log(component)
        //设置组件属性
        setComponentProps(component,vnode.attrs);
        //渲染组件DOM节点
        console.log(component)
        return component.base;
    }
    //vnode 是虚拟DOM
    const {tag,attrs}=vnode;
    //创建节点
    const dom=document.createElement(tag);
    //如果存在属性
    if(attrs){
        Object.keys(attrs).forEach(key=>{
            const value=attrs[key];
            setAttribute(dom,key,value);
        })
    }

    //渲染子节点
    if(vnode.chlidren) {
        vnode.chlidren.forEach(child => dom.appendChild(_render(child, dom)));
    }
    //console.log("5")
    //将节点放入容器
    return dom;

}