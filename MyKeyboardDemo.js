import React, { Component } from 'react';
import {
    TouchableOpacity,
    TouchableWithoutFeedback,
    Text,
    View,
    Animated ,
    Keyboard,
    StyleSheet
} from 'react-native';
import { register, insertText } from 'seer-custom-keyboard';

class MyKeyboard extends Component {
    constructor(props){
        super(props)
       /*  this.state = {
            //visible : true,
            opacity: new Animated.Value(this.state.visible ? 1 : 0)
        } */
        this.state = {
            bottomDistance : 0
        }
    }
    componentWillMount() {
        // this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
        // this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
        this.keyboardDidShowListener = Keyboard.addListener('keyboardWillShow', this._keyboardDidShow);
        this.keyboardDidHideListener = Keyboard.addListener('keyboardWillHide', this._keyboardDidHide);
    }
    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    _keyboardDidShow = () => {
       // alert('Keyboard Shown');
     //  console.log('Keyboard Shown');
        this.setState({ bottomDistance : 0})
    }

    _keyboardDidHide = () => {
      //  alert('Keyboard Hidden');
     //   console.log('Keyboard Hidden');
        this.setState({ bottomDistance: -200 })
    }

    /* animated(show) {
       Animated.timing(
        this.state.opacity,
        {   
            toValue : show ? 1: 0,
            duration: 500
        }
       ).start()
    } */
    onPress = () => {
       insertText(this.props.tag, 'Hello, world');
    };
    onPressClose = () => {
        this.setState({ bottomDistance: -200 })
    }
    render() {
        const { bottomDistance } = this.state
        const styleCustom = [{ backgroundColor: 'red' }, { width: 100 }, { height: 100 }, { position: "absolute" }, { bottom: bottomDistance }]
        return (
            <View style={styleCustom}>
                <TouchableOpacity onPress={this.onPress}>
                    <Text>Hello, world</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.onPressClose}>
                    <Text>Close </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({


})

register('hello', () => MyKeyboard);