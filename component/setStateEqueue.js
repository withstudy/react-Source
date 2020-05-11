/**
 * Created by 14843 on 2020/5/11.
 */
import {renderComponent} from "../react-dom/renderComponent";
const setStateQueue=[];
const renderQueue=[];
export function enqueueSetState(stateChange,component) {
    //console.log(stateChange,component)
    if (setStateQueue.length===0){
        defer(flush);
    }
    //合并多个setState
    setStateQueue.push({
        stateChange,component
    });

    //如果需要渲染的是同一个组件，只在最后渲染一次
    const r=renderQueue.some(item=>{
        return item === component;
    });
    if(!r){
        renderQueue.push(component);
    }
}
function defer(flush) {
    return Promise.resolve().then(flush);
}
/**
 * 清空setStateQueue
 */
function flush() {
    let item;
    let component;
    while (item=setStateQueue.shift()){
        const {stateChange,component}=item;

        //component.prevState 还不存在
        if(!component.prevState){
            component.prevState=Object.assign({},component.state);
        }
        if(typeof stateChange === "function"){
            //如果是函数，直接将函数的运行结果赋值给component.state 当前的状态
            Object.assign(component.state,stateChange(component.prevState,component.props));
        }else{
            //如果是对象直接赋值给当前状态
            Object.assign(component.state,stateChange);
        }
        //最后要将当前的状态赋值给 component.prevState
        component.prevState=component.state;
    }
    //将状态改变的组件渲染
    while(component=renderQueue.shift()){
        renderComponent(component);
    }
}