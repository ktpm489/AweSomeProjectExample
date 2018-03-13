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

class MyKeyboard extends Component {
    constructor(props){
        super(props)
        this.animatedValue = new Animated.Value(0)
    }
    componentWillMount() {
         this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
         this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
    }
    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    _keyboardDidShow = () => {
        this.setState({ bottomDistance : 0})
       //  this.show()
    }

    _keyboardDidHide = () => {
        this.setState({ bottomDistance: -300 })
       //  this.hide()
    }

    show = () => {
        Animated.timing(this.animatedValue, {
            toValue: 0,
            duration: 100
        }).start()
    }
    hide = () => {
        Animated.timing(this.animatedValue, {
            toValue: 1,
            duration: 100
        }).start(Keyboard.dismiss())
    }
    
    onPress(val) {
        let data = val.toString().toLowerCase()
        if (data === 'back') {
            backSpace(this.props.tag)
        } else if (data === 'close') {
/*             this.setState({ bottomDistance: -800 })
            this.hide() */
            Keyboard.dismiss()
        } else {
            insertText(this.props.tag, data);
        }
    }
    render() {

        return (
          
                <View style={styles.container}> 
                   <View style={[styles.row, {marginTop : 20 }] }>
                        {<View style={{ flex: 1 }} />}
                        {<View style={{ flex: 1 }} />}
                        {this.Custom('Close', false)}
                    </View> 
                    {this.Row([1, 2, 3])}
                    {this.Row([4, 5, 6])}
                    {this.Row([7, 8, 9])}
                    <View style={[styles.row , {marginBottom :4} ]}>
                        {this.Custom('.',false )}
                        {this.Cell(0)}
                        {this.Custom('back')}
                    </View>
                </View> 
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