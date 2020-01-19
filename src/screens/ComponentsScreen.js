import React from 'react';
import {Text,StyleSheet,View } from 'react-native';

const ComponentsScreen = () => {
    const greeting = 'Bye there!';
    const array1 = [123,13232323232];
    const array2 = ['adddd','bbbbb'];
    const greeting2 = <Text> Hello text </Text>;
    const name = 'Krirk';



    return (
    <View>
    <Text style={styles.trxtStyle}> Hello Krirk </Text>
    <Text> Hi again  {greeting} {array1} {array2} </Text>
    {greeting2}
    <Text style={styles.textStyle}> hello {name}</Text>
    <Text style={styles.subHeaderStyle}> start react</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    trxtStyle: {
        fontSize : 30
    },
    textStyle:{
        fontSize:45
    },
    subHeaderStyle:{
        fontSize:20
    }
});

export default ComponentsScreen;