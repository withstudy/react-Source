/**
 * Created by 14843 on 2020/5/11.
 */
import {diffComponent} from "./diffComponent";
import {diffAttribute} from "./diffAttribute";
import {diffChildren} from "./diffChildren";
export function diffNode(dom,vnode) {
    //console.log(dom,vnode);
    let out = dom;
    //没有传虚拟DOM
    if(vnode === undefined || vnode=== null || typeof vnode === "boolean") return "";
    if(typeof vnode === "number") vnode = String(vnode);
    //vnode 是一个字符串
    if(typeof vnode === "string"){
        //如果旧的dom节点的是文本节点
        if(dom && dom.nodeType===3){
            //如果旧的文本节点不等与新的文本
            if(dom.textContent !== vnode){
                dom.textContent = vnode;
            }
        }else{
            //如果旧的dom不存在对应的文本节点，就新创建一个
            out=document.createTextNode(vnode);
            if(dom && dom.parentNode){
                dom.parentNode.replaceChild(out,dom)
            }
        }
        //插入容器
        return out;
    }
    if(typeof vnode.tag === "function"){

        return diffComponent(out,vnode);
    }
    //如果不存在旧的节点，就型创建一个节点
    if(!dom){
        console.log(vnode.tag)
        out=document.createElement(vnode.tag);
    }

    //console.log(vnode.chlidren)
    //如果虚拟对象还有子元素或者原来的dom节点还有子节点
    if(vnode.chlidren && vnode.chlidren.length>0||(out.childNodes&&out.childNodes.length>0)){
        //比较子元素
        diffChildren(out,vnode.chlidren);
    }
    //插入属性

    diffAttribute(out,vnode);
    return out;
}