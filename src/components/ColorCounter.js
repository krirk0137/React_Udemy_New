import React,{useState,useReducer} from 'react';
import {View,Text,StyleSheet,Button } from 'react-native';

const ColorCounter = ({color, onIncrease, onDecrease}) => {
    return (
        <View>
            <Text> Square Screen {color} </Text>
            <Button 
            onPress={() => onIncrease()}
            title = {`increase red ${color}`}

            
            />
            <Button 
            onPress={() => onDecrease()}
            
            title = {`decrease red ${color}`}
            
            />


        </View>
    );
};

const styles =StyleSheet.create({});

export default ColorCounter ;