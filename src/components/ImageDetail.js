import React from 'react' ;
import {View,Text, StyleSheet, Image} from 'react-native';

const ImageDetail = ({ imageSource,title,score}) => {
    // const ImageDetail = props => {

    // console.log(props);
    return (
        <View>
            <Text> Image ImageDetail {title}</Text>
            <Image 
                // source={require('../../assets/beach.jpg')}
                // source={props.imageSource}
                source={imageSource}

            />
            <Text> Score - {score} </Text>
        </View>
    );
};
const styles = StyleSheet.create({});

export default ImageDetail ;

