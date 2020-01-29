import React,{useState,useReducer} from 'react';
import {Text,View,StyleSheet} from 'react-native';

const BoxScreen = () => {
    return (
        // <View style={styles.viewStyle}>
        //     <Text style={styles.textOneStyle}> BOX child1 </Text>
        //     <Text style={styles.textTwoStyle}> BOX child12</Text>
        //     <Text style={styles.textThreeStyle}> BOX child13</Text>
        //     <Text style={styles.text4Style}> BOX child134</Text>
        //     <Text style={styles.text5Style}> BOX child135</Text>

        // </View>,


        // exercise test 
        <View style={styles.view2Style}>
            <Text style={styles.Box1}> BOX child1 </Text>
            <Text style={styles.Box2}> BOX child12</Text>
            <Text style={styles.Box3}> BOX child13</Text>



        </View>

        // solution exercise 
        // <View style={styles.parentStyle}>
        //     <View style={styles.viewOneStyle}></View>
        //     <View style={styles.viewTwoParent}>
        //         <View style={styles.viewTwoStyle}></View>
        //     </View>
        //     <View style={styles.viewThreeStyle}></View>
        // </View>


    );
};
const styles = StyleSheet.create({
    viewStyle:{
            borderWidth: 3,
            borderColor: 'black',
            alignItems:'center',
            // flexDirection:'row',    row ซ้ายไปขวา   column บนลงล่าง 
            height:200,
            // justifyContent:'center', ชิดซ้าย กลางหมด ชิดขวา 
            

    },
    view2Style:{
        borderWidth: 3,
        borderColor: 'black',
        // alignItems:'center',
        // flexDirection:'row',    row ซ้ายไปขวา   column บนลงล่าง 
        // ...StyleSheet.absoluteFillObject,
        // justifyContent:'center', ชิดซ้าย กลางหมด ชิดขวา 
        

    },
    Box1: {
        borderWidth: 3,
        borderColor: 'red',
        // flex: 2,
        alignSelf: 'flex-start',
        height:50,
        width:50 ,
        backgroundColor: 'red',
    },
    Box2: {
        borderWidth: 3,
        borderColor: 'red',
        // flex: 2,
        alignSelf: 'flex-end',
        position: 'absolute',
        height:50,
        width:50 ,
        backgroundColor: 'purple',

    },
    Box3: {
        borderWidth: 3,
        borderColor: 'red',
        // flex: 2,
        alignSelf: 'center',
        height:50,
        width:50 ,
        backgroundColor: 'green',

    },
    textOneStyle: {
        borderWidth: 3,
        borderColor: 'red',
        // marginVertical: 20,          ขอบห่าง มาจิ้น 
        // marginHorizontal: 20,
        // margin : 20 , 
        flex: 2,
        // position: 'absolute',        แยกตัวจากพี่น้องไม่สัมพัน

    },
    textTwoStyle: {
        borderWidth: 3,
        borderColor: 'red',
        // marginVertical: 20,
        // marginHorizontal: 20,
        // margin : 20 , 
        flex: 2,
        alignSelf: "flex-end", 

        // [position: 'absolute', 
        // top: 0,
        // bottom: 0,
        // left: 0,
        // right : 0,] combo   absolute ออกจากตัวอื่นแยกเดี่ยว  อยุ่ในกล่องใหญ่คนเดียวขึ้นไปบนสุด แล้ว top 0 b 0 l 0 r 0 = ไม่ห่างจากขอบใหญ่เลย คือเต็๋มจอ 
        //== ...StyleSheet.absoluteFillObject



    },
    textThreeStyle: {
        borderWidth: 3,
        borderColor: 'red',
        // marginVertical: 20,
        // marginHorizontal: 20,
        // margin : 20 , 
        flex: 1,
// flex == % ใน 100 เช่นมี 3 กล่อง เฟลก 20 20 60  = กล่อง 1 2 ขนาด 20 เปอ กล่อง 3 จะใหญ่สุด 60 
    },
    text4Style: {
        borderWidth: 3,
        borderColor: 'red',
        // marginVertical: 20,
        // marginHorizontal: 20,
        // margin : 20 , 
        flex: 1,
        alignSelf: "stretch", // stretch = ยืด  
        
        // position: 'absolute',
        


    },
    text5Style: {
        borderWidth: 3,
        borderColor: 'red',
        // marginVertical: 20,
        // marginHorizontal: 20,
        // margin : 20 , 
        flex: 1,
        // top: 20,    เลื่อนลงให้ข้างบนมีที่เพิ่ม bott lef right 
        
    },


    parentStyle:{
        borderWidth: 3,
        borderColor:'black',
        height:200,
        flexDirection: 'row',
        justifyContent:'space-between',


    },
    viewTwoParent:{
        height:100,
        justifyContent:'flex-end'
    },
    viewOneStyle:{
        height:50,
        width:50,
        backgroundColor:'red',
    },
    viewTwoStyle:{
        height:50,
        width:50,
        backgroundColor:'green',
        // marginTop:50,
        alignSelf:'flex-end',


        
    },
    viewThreeStyle:{
        height:50,
        width:50,
        backgroundColor:'purple',
        
    }
});
// end this and go section 8 resturant food app 
export default BoxScreen;
