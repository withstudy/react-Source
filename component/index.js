/**
 * Created by 14843 on 2020/5/10.
 */
import {renderComponent} from "../react-dom/renderComponent";
import {enqueueSetState} from "./setStateEqueue";
class Component {
    constructor(props){
        this.props=props;
        this.state={};
    }
    setState(stateChange){
        // Object.assign(this.state,newstate);
        // renderComponent(this);
        enqueueSetState(stateChange,this)
    }
}
export default Component;