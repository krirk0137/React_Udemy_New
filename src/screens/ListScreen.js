import React from 'react';
import {View,Text,StyleSheet,FlatList} from 'react-native';

const ListScreen = () => {
    const friends = [
        {name: 'People #1' , age : 51},
        // {name: 'People #1', key:'1'},
        {name: 'People #2' , age : 54},
        {name: 'People #3' , age : 53},
        {name: 'People #4' , age : 52},
        {name: 'People #5' , age : 51},
        {name: 'People #6' , age : 52},
        {name: 'People #7' , age : 53},
        {name: 'People #8' , age : 54},
        {name: 'People #9' , age : 55}

    ]



    return (
        <View>
        <Text> List Screen</Text>
        <FlatList 
            // horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={friend => friend.name}
            data={friends}
            renderItem={({item}) => {
                return <Text style={styles.textStyle}>{item.name} 
                - Age {item.age}
                </Text>;
                // element === { item : {name: 'Friend #1'}, index: 0} 
                // item ==={ name  : 'Friend #1'}
            }} />
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical:5
    }
});

export default ListScreen ;

