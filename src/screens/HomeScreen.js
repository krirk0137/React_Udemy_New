import React from 'react';
import { Text, StyleSheet,Button,View ,TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
  // const HomeScreen = props => {

  // console.log(props.navigation);

  return (
    <View>
    <Text style={styles.text}>HomeScreen</Text>
    <Button
      // onPress={() => console.log('Button preses')}
      onPress={() => navigation.navigate('Components')}
      // onPress={() => props.navigation.navigate('Components')}

      title="Go to Components"
    />
    <Button
      title ="Go to List Demo " 
      onPress={() => navigation.navigate('List')}
      />
    <TouchableOpacity
      onPress={() => navigation.navigate('List')}>
      {/* onPress={() => console.log('List Pressed')}> */}

      <Text> go to list demo </Text>
      <Text> go to list demo </Text>
      <Text> go to list demo </Text>

    </TouchableOpacity>

    <Button
      title ="Go to IMG Demo " 
      onPress={() => navigation.navigate('Image')}
      />


    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
