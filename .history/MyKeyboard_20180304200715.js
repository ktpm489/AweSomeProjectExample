import React, { Component } from 'react';
import {
    TouchableOpacity,
    TouchableWithoutFeedback,
    Text,
    View,
    Animated ,
    Dimensions,
    Keyboard,
    StyleSheet,
    Image
} from 'react-native';
import styles from './styles'
import { register, insertText, backSpace } from 'seer-custom-keyboard';

export default class MyKeyboard extends Component {
    
    onPress(val) {
        let data = val.toString().toLowerCase()
        if (data === 'back') {
            backSpace(this.props.tag)
        } else if (data === 'close') {
            Keyboard.dismiss()
        } else {
            insertText(this.props.tag, data);
        }
    }
    render() {

        return (
          
                <Animated.View style={styles.container}> 
                   <Animated.View style={[styles.row, {marginTop : 20 }] }>
                        {<View style={{ flex: 1 }} />}
                        {<View style={{ flex: 1 }} />}
                        {this.Custom('Close', false)}
                    </Animated.View> 
                    {this.Row([1, 2, 3])}
                    {this.Row([4, 5, 6])}
                    {this.Row([7, 8, 9])}
                    <Animated.View style={[styles.row , {marginBottom :4} ]}>
                        {this.Custom('.',false )}
                        {this.Cell(0)}
                        {this.Custom('back')}
                    </Animated.View>
                </Animated.View> 
        )
    }
    Custom(value, flagCustom = true ) {
        return (
            <TouchableOpacity accessibilityLabel='backspace' style={styles.backspace} onPress={() => { this.onPress(value ) }}>
                {flagCustom  ? <Image source={require('./backspace.png')} resizeMode='contain' style={{ tintColor: 'white' }} />  :(
                    <Text style={styles.customText}>{value}</Text>
               ) }
            </TouchableOpacity>
        );
    }

    Row(numbersArray) {
        let cells = numbersArray.map((val) => this.Cell(val));
        return (
            <View style={styles.row}>
                {cells}
            </View>
        );
    }

    Cell(symbol) {
        return (
            <TouchableOpacity style={styles.cell} key={symbol} accessibilityLabel={symbol.toString()} onPress={() => { this.onPress(symbol.toString()) }}>
                <Text style={styles.number}>{symbol}</Text>
            </TouchableOpacity>
        );
    }
}


register('hello', () => MyKeyboard);