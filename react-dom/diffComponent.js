/**
 * Created by 14843 on 2020/5/11.
 */
import {setComponentProps} from "./setComponentProps";
import {createComponent} from "./createComponent";
export function diffComponent(dom,vnode) {
    let component=dom;
    //如果组件相同
    if(component && component.constructor === vnode.tag){
        setComponentProps(component,vnode.attrs);
        dom=component.base;
    }else{
        //如果组件变化
        if(component){
            //删除组件
            unmountComponent(component);
            component=null;
        }
        //重新创建组件
        component=createComponent(vnode.tag,vnode.attrs);
        //设置属性
        setComponentProps(component,vnode.attrs);
    }
    return component.base;
}
function unmountComponent(component) {
    removeNode(component.base);
}
function removeNode(node) {
    if(node&&node.parentNode){
        node.parentNode.removeChild(node);
    }
}