import React,{useState,useReducer} from 'react';
import {View, Text,StyleSheet,TextInput} from 'react-native';

const TextScreen = () => {
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    return (
        <View>
            <Text>Text input</Text>
            <Text>Enter name : </Text>
            <TextInput 
            style={styles.input} 
            autoCapitalize="none"
            autoCorrect={false}
            // value="Hi hello"
            value={name}
            onChangeText={newValue => setName(newValue)}
            />
            <Text> My name is {name} </Text>
            <Text> Enter PASS</Text>
            <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            value={password}
            onChangeText={newValue=>setPassword(newValue)}
            
            />
            {password.length < 4 ? <Text> password 4+ </Text> : null }
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black' , 
        borderWidth: 1
    }
});

export default TextScreen;