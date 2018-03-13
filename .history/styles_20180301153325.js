import { StyleSheet, Dimensions, Platform } from 'react-native';
const { height, width } = Dimensions.get('window');

module.exports = StyleSheet.create({
    container: {
       // marginVertical: 5,
       // marginLeft: 5,
       // marginRight: 5,
        //position: "relative" ,
        //bottom: 0,
        flex: 1,
        alignItems: 'flex-start',
        backgroundColor: '#2A2A2A'
    },
    row: {
        flexDirection: 'row',
        marginTop: 1,
        marginHorizontal: 3,
        flex: 1,
    },
    number: {
        fontSize: 25,
        color : 'white',
        textAlign: 'center',
    },
    customText: {
        fontSize: 25,
        color: 'white',
        textAlign: 'center',
    },
    backspace: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cell: {
        flex: 1,
        borderRadius:5,
        backgroundColor:'gray',
        marginVertical :3,
        marginHorizontal : 2,
        justifyContent: 'center',
    },
});