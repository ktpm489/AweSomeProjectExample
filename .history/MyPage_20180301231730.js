import React, { Component } from 'react';
 import { CustomTextInput } from 'seer-custom-keyboard';
// import MyKeyBoard from './MyKeyboard'
import MyKeyBoard from './MyKeyboardDemo'
import { View, TextInput,Text,  Keyboard, TouchableWithoutFeedback } from 'react-native'
export default class MyPage extends Component {
    state = {
        value: ''
    };
    onChangeText = text => {
        this.setState({ value: text });
    };
    render() {
        return (
            <View style={{ backgroundColor: 'transparent'}}>
            <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
            <View>
                <TextInput multiline={false} autoFocus={true} style={{ height: 100, width: 500, backgroundColor: 'red' }} />
                <CustomTextInput multiline={false} autoFocus={false} style={{ backgroundColor: 'green', height: 100, width: 500 }} customKeyboardType="hello" value={this.state.value} onChangeText={this.onChangeText} />
                <Text>AAAA</Text>
            </View>
            </TouchableWithoutFeedback>
            </View>
            
        );
        {/*  <View style={{ backgroundColor: 'transparent', flex: 1 }}>
                <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
                    <View>
                        <TextInput multiline={false} autoFocus={true} style={{ height: 100, width: 500, backgroundColor: 'red' }} />
                        <CustomTextInput multiline={false} autoFocus={false} style={{ backgroundColor: 'green', height: 100, width: 500 }} customKeyboardType="hello" value={this.state.value} onChangeText={this.onChangeText} />
                        <Text>AAAA</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>*/}
    }
}