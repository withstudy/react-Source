/**
 * Created by 14843 on 2020/5/11.
 */
import {diffNode} from "./diffNode";
/**
 * 比较子元素，原来的dom节点和虚拟dom子元素哪里不同，就改变哪里
 * @param dom 真实的dom
 * @param vchildren 虚拟dom对象
 */
export function diffChildren(dom,vchildren) {
    //console.log(dom,vchildren);
    //获取原来dom节点的子节点
    const domChildren = dom.childNodes;
    const children = [];
    const keyed = {};
    //将有key的用对象保存，没有key的用数组保存
    if(domChildren.length > 0){
        //console.log(domChildren)
        domChildren.forEach(item=>{
            //console.log(item)
            const attrs = item.attributes;
            if(attrs&&attrs.length>0&&attrs["key"] in attrs){
                //console.log(attrs);
                //如果原来的dom节点有key值
                keyed[i.value]=item;
            }else{
                //如果原来的dom节点么有key值
                children.push(item);
            }
        })
    }
    // console.log(children,keyed);
    if(vchildren && vchildren.length > 0){
        let min = 0;
        let childrenLen = children.length;
        [...vchildren].forEach((vchild,i)=>{
            const key = vchild.key;
            let child;
            if(key){
                if(keyed[key]){
                    child=keyed[key];
                    keyed[key]=undefined
                }
            }else if(childrenLen>min){
                for(let j=min;j<childrenLen;j++){
                    let c=children[j];
                    if(c){
                        child=c;
                        children[j]=undefined;
                        if(j===childrenLen-1) childrenLen--;
                        if(j===min)min++;
                        break;
                    }
                }
            }
            child=diffNode(child,vchild);
            const f=domChildren[i];
            if(child&&child!==dom && child!==f){
                if(!f){
                    dom.appendChild(child);
                }else  if(child===f.nextSibling){
                    removeNode(f);
                }else{
                    dom.insertBefore(child,f);
                }
            }
        })
    }
}
function removeNode(node) {
    if(node&&node.parentNode){
        node.parentNode.removeChild(node);
    }
}