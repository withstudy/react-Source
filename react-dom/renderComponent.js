/**
 * Created by 14843 on 2020/5/10.
 */
import {_render} from "./render";
import {diffNode} from "./diffNode";
/**
 * 将组件对象转换为dom节点，并且设置到组件对象的base属性中
 * @param component 组件对象
 */
export function renderComponent(component) {
    //console.log(component);
    //返回的是一个jsx 转换为一个虚拟dom对象
    const compVnode=component.render();
    //如果已经存在了component.base 说明已经渲染了，继续向下执行就会改变component.base
    if(component.base){
        if(component.componentWillUpdate){
            component.componentWillUpdate();
        }
    }
    //console.log(compVnode)
    //_render 将dom对象转换为一个dom节点 返回插入容器
    //const base=_render(compVnode);
    //console.log(component.base,compVnode)
    const base=diffNode(component.base,compVnode)

   // console.log(base)
    //console.log(base)
    //如果已经存在了component.base 说明已经渲染了,这个时候状态已经修改完成
    if(component.base){
        if(component.componentDidUpdate){
            component.componentDidUpdate();
        }
    }else {
        //如果不存在了component.base 说明这是第一次渲染
        if(component.componentDidMount){
            component.componentDidMount();
        }
    }
    // if(component.base && component.base.parentNode){
    //     component.base.parentNode.replaceChild(base,component.base);
    // }
    component.base=base;
    //console.log(component)
}