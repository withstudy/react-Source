/**
 * Created by 14843 on 2020/5/10.
 */

import {_render} from "./render";
import {diff} from "./diff";
const ReactDOM ={
    render
}
/**
 *
 * @param vnode 虚拟对象
 * @param container 容器
 */
function render(vnode,container,dom) {
    return diff(vnode,container,dom);
   //  const dom=_render(vnode);
   // return container.appendChild(dom);
}

export default ReactDOM;