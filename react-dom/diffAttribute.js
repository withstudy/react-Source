/**
 * Created by 14843 on 2020/5/11.
 */
import {setAttribute} from "./setAttribute";
 export  function diffAttribute(dom,vnode) {
    // console.log(dom)
    let oldAttrs={};
    let newAttrs=vnode.attrs;
    let domAttrs=  dom.attributes;
    //获取旧的DOM节点的属性
    [...domAttrs].forEach(item=>{
        oldAttrs[item.name]=item.value;
    })
    //如果原来的属性没有在新的属性中，就移除该属性
    for(let key in oldAttrs){
        if(!(key in newAttrs)){
            setAttribute(dom,key,undefined);
        }
    }
    //如果原来的属性值和新的属性值不想等，就跟新
    for (let key in newAttrs){
        if(oldAttrs[key]!==newAttrs[key]){
            setAttribute(dom,key,newAttrs[key]);
        }
    }
}