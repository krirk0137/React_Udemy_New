import React,{useState,useReducer} from 'react';
import {Text,View,StyleSheet} from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textOneStyle}> BOX child1 </Text>
            <Text style={styles.textTwoStyle}> BOX child12</Text>
            <Text style={styles.textThreeStyle}> BOX child13</Text>

        </View>
    );
};
const styles = StyleSheet.create({
    viewStyle:{
            borderWidth: 3,
            borderColor: 'black',
            // alignItems:'center',
            // flexDirection:'row', 
            height:200,
            // justifyContent:'center',

    },
    textOneStyle: {
        borderWidth: 3,
        borderColor: 'red',
        // marginVertical: 20,
        // marginHorizontal: 20,
        // margin : 20 , 
        flex: 2,
    },
    textTwoStyle: {
        borderWidth: 3,
        borderColor: 'red',
        // marginVertical: 20,
        // marginHorizontal: 20,
        // margin : 20 , 
        flex: 2,

    },
    textThreeStyle: {
        borderWidth: 3,
        borderColor: 'red',
        // marginVertical: 20,
        // marginHorizontal: 20,
        // margin : 20 , 
        flex: 1,

    },
});

export default BoxScreen;
