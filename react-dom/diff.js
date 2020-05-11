/**
 * Created by 14843 on 2020/5/11.
 */


import {diffNode} from "./diffNode";
export function diff(vnode,container,dom) {
    //console.log(vnode ,container,dom)
    //对新虚拟dom和旧的dom节点
    const ret=diffNode(dom,vnode);

    if(container){
        //console.log(ret)
        container.appendChild(ret);
    }
    return ret;
}


