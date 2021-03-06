import React, { Component } from 'react';
 import { CustomTextInput, install } from 'seer-custom-keyboard';
 import MyKeyBoard from './MyKeyboard'
// import MyKeyBoard from './MyKeyboardDemo'
import { View, TextInput,Text,Animated,   Keyboard, TouchableWithoutFeedback } from 'react-native'
export default class MyPage extends Component {
    state = {
        value: ''
    };
    onChangeText = text => {
        this.setState({ value: text });
    };
    render() {
        return <Animated.View style={{ backgroundColor: "transparent" }}>
             <View style={{ opacity: 0, width: 0, height: 0 }}>
              <MyKeyBoard/>
            </View> 
            <TouchableWithoutFeedback onPress={() => {
                Keyboard.dismiss();
              }}>
              <Animated.View>
                <TextInput multiline={false} autoFocus={true} style={{ height: 100, width: 500, backgroundColor: "red" }} />
                <CustomTextInput multiline={false} autoFocus={false} style={{ backgroundColor: "green", height: 100, width: 500 }} customKeyboardType="hello" value={this.state.value} onChangeText={this.onChangeText} />
                <Text>AAAA</Text>
              </Animated.View>
            </TouchableWithoutFeedback>
          </Animated.View>;
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