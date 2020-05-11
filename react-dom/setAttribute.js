/**
 * Created by 14843 on 2020/5/10.
 */
/**
 * 将属性设置到对应的dom节点上
 * @param dom dom节点
 * @param key 属性名
 * @param value  属性值
 */
export function setAttribute(dom,key,value) {
    //如果key为className 就转换为class
    if(key === "className"){
        key="class";
    }
    //如果key 是 事件 onclick onfoucs  转换为小写
    if(/on\w+/.test(key)){
        key=key.toLowerCase();
        //添加事件
        dom[key]=value || "";
    }else if(key === "style"){
        //如果style 传入的是一个字符串  直接写入css  或者值为空
        if(typeof key === "string" || !value){
            dom.style.cssText=value || "";
        }else if(typeof key === "object" && value){
            //这个时候 value的值可能 是 {width:100}
            for(let k in value ){
                //如果 value[k]为数字
                if(typeof value[k] === "number"){
                    dom.style[k]=value[k]+"px";
                }else{
                    dom.style[k]=value[k];
                }
            }
        }
    }else{
        //其他属性
        if(key in dom){
            dom[key]=value||"";
        }
        //如果value 存在
        if(value){
            dom.setAttribute(key,value);
        }else{
            dom.removeAttribute(key);
        }
    }
}