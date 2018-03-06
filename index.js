{/*  RN引用区  */}
import React, { Component,PropTypes} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    Platform,
    Keyboard,PixelRatio,Dimensions
} from 'react-native';

{/*  自定义引用区  */}
var size = Dimensions.get('window');

{/*  类实现  */}
export default class RightArrowView extends Component {
    /* props定义 */
    static defaultProps = {
       title : '',  //标题
       subTitle:'', //副标题
       isLine : true, //是否显示分割线 
       titleWidth : 80, //标题宽度
       subtitleWidth : 100, //副标题宽度
       lineAlign : 'right',//分割线位置
       titleFontSize : 16,//标题文字大小
       subTitleFontSize : 14,//输入框文字大小
       isTouch : true , //是否触发点击事件
       selectStyle : 'Custom',//点击类型  (默认为自定义 如果是地区选择 传:Area)
       onClick(){} // 回调方法
    }
    static propTypes = {
        title : PropTypes.string,
        subTitle : PropTypes.string,
        isLine : PropTypes.bool,
        titleWidth : PropTypes.number,
        subtitleWidth : PropTypes.number,
        isDefaultImage : PropTypes.bool,
        lineAlign : PropTypes.string,
        titleFontSize  : PropTypes.number,
        subTitleFontSize : PropTypes.number,
        isTouch : PropTypes.bool,
        selectStyle : PropTypes.string,
        onClick : PropTypes.func,
        imageSource:PropTypes.node
    }
   
    /* 构造函数 */
    constructor (props) {
        super(props);
    }
             
    /* 页面布局 */
    render() {
        return(
            <View>
                <TouchableOpacity activeOpacity={0.8} style={this.props.style} onPress={this.onClick.bind(this)}>
                    <View style={styles.parentStyle}>
                        <Text style={[styles.textStyle,{width:this.props.titleWidth}]}>{this.props.title}</Text>
                        <Text style={styles.subTitleStyle}>{this.props.subTitle}</Text>
                        <Image style ={{width:9,height:16}} source={!this.props.imageSource?require('./Cell-Arrow.png'):this.props.imageSource}/>
                    </View>
                    {
                    this.props.isLine? <View style={[styles.lineStyle,this.props.lineAlign=='right'?{marginLeft:15}:this.props.lineAlign=='center'?{marginHorizontal:15}:{marginRight:15}]}></View>:null
                    }

                </TouchableOpacity>  
            </View>           
    );
    }

 

    /*点击事件*/
    onClick(){

        let _this=this;
        return _this.props.onClick();  
       
    }

}

{/*  布局样式  */}
const styles = StyleSheet.create({
    parentStyle:{
        flex:1,
        flexDirection : 'row',
        backgroundColor : '#fff',
        alignItems:'center',
        width : size.width,
        paddingLeft:15,
        paddingRight:15
    },
    subTitleStyle:{
        flex:1,
        backgroundColor:'#fff',
        marginLeft:15,
        marginRight:15,
        color:'#C7C7C7',       
       
        textAlign: 'right',
        fontSize:15,

    },

    textStyle:{
        fontSize:16,
        color:'#181818',
        marginLeft:0,
    },

    lineStyle:{
        borderBottomWidth:1/PixelRatio.get(),
        borderBottomColor:'#d2d2d2'
    },

   
    
})