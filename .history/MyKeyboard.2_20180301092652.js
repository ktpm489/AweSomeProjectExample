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
        this.animatedValue = new Animated.Value(0)
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
        this.show()
    }

    _keyboardDidHide = () => {
      //  alert('Keyboard Hidden');
     //   console.log('Keyboard Hidden');
        this.setState({ bottomDistance: -200 })
        this.hide()
    }

    show = () => {
        // this.animatedValue.setValue(0)
        Animated.timing(this.animatedValue, {
            toValue: 0,
            duration: 300
        }).start()
    }
    hide = () => {
       // this.animatedValue.setValue(0)
        Animated.timing(this.animatedValue, {
            toValue: 1,
            duration: 300
        }).start()
    }
    
    

    onPress = () => {
       insertText(this.props.tag, 'Hello, world');
    };
    onPressClose = () => {
        this.setState({ bottomDistance: -200 })
        this.hide()
    }
    render() {

        const paddingBottom = this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -200]
        })
        const { bottomDistance } = this.state
        const styleCustom = [{ backgroundColor: 'red' }, { width: 100 }, { height: 100 }, { position: "absolute" }, { bottom: paddingBottom }]
        return (
            <Animated.View style={styleCustom}>
                <TouchableOpacity onPress={this.onPress}>
                    <Text>Hello, world</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.onPressClose}>
                    <Text>Close </Text>
                </TouchableOpacity>
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({


})

register('hello3', () => MyKeyboard);