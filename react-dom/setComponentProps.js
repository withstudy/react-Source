/**
 * Created by 14843 on 2020/5/10.
 */
import {renderComponent} from "./renderComponent";
/**
 *给组件对象设置属性
 * @param component 组件对象
 * @param props 属性
 */
export function setComponentProps(component,props) {
    //如果组件对象还没有base dom节点，是即将挂载
    if(!component.base){
        if(component.componentWillMount){
            component.componentWillMount();
        }
    }else if(component.componentWillReceiveProps){
        //props 将改变时
        component.componentWillReceiveProps(props);
    }
    //设置属性
    component.props=props;
    //渲染组件
    renderComponent(component);
}