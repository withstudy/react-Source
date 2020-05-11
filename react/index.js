/**
 * Created by 14843 on 2020/5/10.
 */
const react={
    createElement
}
/**
 * @param tag  标签名
 * @param attrs 标签属性
 * @param chlidren  标签子元素
 */

function createElement(tag,attrs={},...chlidren) {
    return{
        tag,attrs,chlidren,
        key:attrs?attrs.key:null
    }
}

export default react;