/**
 * Created by 14843 on 2020/5/10.
 */
import React from "./react/index";
import ReactDOM from "./react-dom/index";
import Component from "./component/index";

 const ele=(
    <div className="test" title="div">
        hello,<span>world!</span>
    </div>
)
// function Home() {
//     return (
//         <div className="test" title="div">
//             hello,<span>world!</span>
//         </div>
//     )
// }
class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            num:0
        }
    }
    componentWillMount(){
        console.log("组件即将挂载");
    }
    componentWillReceiveProps(props){
        console.log(props);
    }
    componentWillUpdate(){
        console.log("组件即将修改");
    }
    componentDidMount(){
        console.log("组件挂载完成");
        for (var i=0;i<10;i++){
            this.setState((prevState,prevProps)=>{
                //console.log(prevState.num);
                return {
                    num:prevState.num+1
                }
            })
        }
    }
    componentDidUpdate(){
        console.log("组件修改完成");
    }
    increment(){
        this.setState({
            num:this.state.num+1
        })
        //console.log(this.state)
    }
    render(){
        return (
            <div className="test" title="div">
                hello,<span>world!-----{this.state.num}</span>
                <button onClick={this.increment.bind(this)}>+</button>
            </div>
        )
    }
}
//ReactDOM.render(ele,document.getElementById("root"));
ReactDOM.render(<Home title="123"/>,document.getElementById("root"));
