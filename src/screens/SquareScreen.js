import React,{useState,useReducer} from 'react';
import {View,Text,StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 50 ; 

const reducer = (state, action) => {
    // const reducer = (state, colorToChange) => {

    // const reducer = (state, action) => {
    // const reducer = (state, howToChangeStateObject)
    //state === {red: number , g: number , b: number  };
    // action ==={colorToChange : 'red' || ' g ' || 'b  ' , amount : 15|| -15} 
    // action ==={type: 'change_red' || 'change_green'|| 'change_blue' , amount: 15|| -15}
    switch(action.type) {
        // switch(action.colorToChange) {

        case 'change_red' :
            return state.red + action.payload > 255 || state.red + action.payload < 0 ? state : { ...state, red: state.red + action.payload};

            // return state.red + action.amount > 255 || state.red + action.amount < 0 ? state : { ...state, red: state.red + action.amount};


            // if (state.red + action.amount > 255 || state.red + action.amount)
            // {return state;}
            // // never going to do :  state.red = state.red -15;
            // return { ...state,red: state.red + action.amount};
            // return { red:0,green:0,blue:0,red: state.red + action.amount};

        case 'change_green' :
            return state.green + action.payload > 255 || state.green + action.payload < 0 ? state : { ...state, green: state.green + action.payload};
            
        case 'change_blue' :
            return state.blue + action.payload > 255 || state.blue + action.payload < 0 ? state : { ...state, blue: state.blue + action.payload};

        default:
            return state;
    }
};

// const setColor = (color , change ) => {
//     // color === 'red' , 'green' , 'blue ' 
//     // change === +15 , -15 
//     // if (color === 'red') {
//     //     if (red + change > 255 || red + change < 0 ) {
//     //         return ;
//     //     } else {
//     //         setRed(red + change ) ;

//     //     }
//     // }
//     switch (color) {
//         case 'red' : 
//             red + change > 255 || red + change < 0 ? null : setRed(red + change ) ;
//             return ; 
//         case 'green' : 
//         green + change > 255 || green + change < 0 ? null : setGreen(green + change ) ;
//             return ; 
//         case 'blue' : 
//         blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change ) ;
//             return ; 
//         default: 
//             return ;

//     }
// };

const SquareScreen = () => {
    const [state,dispatch] = useReducer(reducer, { red: 0 , green : 0 , blue : 0});
    const {red,green,blue} = state;
    
    // const [state,runMyReducer]
    // console.log(state)
    // const [red, setRed] = useState(0);
    // const [green, setGreen] = useState(0);
    // const [blue, setBlue] = useState(0);

    return (
        <View>
            <ColorCounter 
            onIncrease={() => dispatch({ type:'change_red',payload: COLOR_INCREMENT})}
            onDecrease={() => dispatch({ type:'change_red',payload: -1 * COLOR_INCREMENT}) }
            // onIncrease={() => setColor('red',COLOR_INCREMENT)}
            // onDecrease={() => setColor('red',-1 * COLOR_INCREMENT)}
            color = "red"
            />
            <ColorCounter 
            onIncrease={() => dispatch({ type:'change_green',payload: COLOR_INCREMENT})}
            onDecrease={() => dispatch({ type:'change_green',payload: -1 * COLOR_INCREMENT}) }
            color = "green" 
            />
            <ColorCounter 
            onIncrease={() => dispatch({ type:'change_blue',payload: COLOR_INCREMENT})}
            onDecrease={() => dispatch({ type:'change_blue',payload: -1 * COLOR_INCREMENT}) }
            // onDecrease={() => dispatch({ colorToChange:'blue',amount: -1 * COLOR_INCREMENT}) }
            color = "blue" 
            />

            <View 
                style={{ height: 150, width:150 , backgroundColor: `rgb(${state.red},${state.green},${state.blue})`}}
            />   
            <Text> ${state.red} ${state.green} ${state.blue}</Text> 
    
        </View>
    );
};

const styles =StyleSheet.create({});

export default SquareScreen ;