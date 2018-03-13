import React, { Component } from 'react';

import {
    StyleSheet,
    ScrollView,
    View,
    Text,
} from 'react-native';

import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view';
import Icon from 'react-native-vector-icons/Ionicons';

// Using tabBarPosition='overlayTop' or 'overlayBottom' lets the content show through a
// semitransparent tab bar. Note that if you build a custom tab bar component, its outer container
// must consume a 'style' prop (e.g. <View style={this.props.style}) to support this feature.
const DemoScrollView = () => {
    return (
        <View style={{flex: 1}}>
        <Text style={{width: 400, height : 20}}>AAAAAA</Text>
        <View style={{flex: 1 ,marginHorizontal: 10}}>
        <ScrollableTabView
        style={styles.container}
                    renderTabBar={() => <DefaultTabBar backgroundColor='rgba(255, 255, 255, 0.7)' />}
        tabBarPosition='overlayTop'
        backgroundColor='red'
        tabBarUnderlineStyle={{backgroundColor :'red'}}
        tabBarActiveTextColor='blue'
        tabBarInactiveTextColor='gray'
        scrollWithoutAnimation={false}
        >
        <ScrollView  tabLabel='iOS'>
            <Icon name='logo-apple' color='black' size={30} style={styles.icon} />
            <Icon name='ios-phone-portrait' color='black' size={30} style={styles.icon} />
            <Icon name='logo-apple' color='#DBDDDE' size={30} style={styles.icon} />
        </ScrollView>
        <ScrollView tabLabel='Android'>
            <Icon name='logo-android' color='#A4C639' size={30} style={styles.icon} />
            <Icon name='logo-android' color='black' size={30} style={styles.icon} />
            <Icon name='logo-android' color='brown' size={30} style={styles.icon} />
        </ScrollView>
    </ScrollableTabView>
            </View>
        </View>
    );
}

export default DemoScrollView;

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        backgroundColor: 'transparent',
        paddingTop: 100,
    },
    icon: {
        width: 60,
        height: 60,
        alignSelf: 'center',
    },
});