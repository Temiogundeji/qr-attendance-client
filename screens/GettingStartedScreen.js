import React from 'react';
import {  StyleSheet, View, Image } from 'react-native';
import { images } from '../shared/global';
import { globalStyles } from '../shared/global';
import { Button, Text } from '@ui-kitten/components';

const GettingStartedScreen = ({ navigation }) => {

    return (
        <View style={[Styles.container, globalStyles.background]}>
            <View style={Styles.header}>
                <Image style={Styles.gettingStartedImage} source={images.getStarted} />
                <Text style={[globalStyles.normalText]}>The Federal Polytechnic Ilaro attendance System</Text>
            </View>
            <View style={Styles.Buttons}>
                <Button 
                    onPress={() => navigation.navigate('RegisterScreen')}
                    appearance="filled"
                    style={Styles.button}

                     >
                    <Text style={Styles.registerText}>Register</Text>
                </Button>
                <Button
                    style={Styles.button}
                    onPress={() => navigation.navigate('LoginScreen')}
                    appearance="outline"
                   >
                    <Text style={[globalStyles.secondaryColor, globalStyles.fontFamily]}>Login</Text>
                </Button>
            </View>
        </View>
    );
}

const Styles = StyleSheet.create({
    container:{
        flex:1,
        display:'flex',
        alignItems:'center',
        alignItems:'center',
        padding: 55,
        paddingTop: 150,
    },
    header:{
        display:'flex',
        justifyContent:'center',
        alignItems: 'center'
    },  
    gettingStartedImage: {
        width: 356,
        height: 116,
        marginBottom: 20
    },
    SubHeading:{
       marginRight: 100
    },
    Buttons:{
        display: 'flex',
        marginTop:70
    },
    button:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        width:280,
        marginBottom:20,
    },
    registerText: {
        color:'#dc780b'
    }
});

export default GettingStartedScreen;