import React , {useState,useReducer} from 'react';
import { View,Text,StyleSheet,Button} from 'react-native';

const CounterScreen = () => {
    const [counter,setCounter] = useState(0);


    return (
        <View>
            <Button 
            title = "Increase"
            onPress={() =>  {
                // counter++; X dont do this 
                // console.log(counter);
                setCounter(counter + 1);
            }
                }
            />

            <Button 
            title = "Decrease"
            onPress={() =>  {
                // counter--;  X dont do this 
                // console.log(counter);
                setCounter(counter - 1);

            }
                }
            />      

            <Text>Current Count : {counter}  </Text> 
        </View>
    );
};

const styles = StyleSheet.create({});

export default CounterScreen;
