import React from 'react';
import {  StyleSheet, View, Dimensions } from 'react-native';
import { globalStyles } from '../shared/global';
import {  Text } from '@ui-kitten/components';
import {
    LineChart,
} from 'react-native-chart-kit'

const AnalyticsScreen = ({ navigation }) => {
    return (
        <View style={globalStyles.secondaryBackground}>
            <View style={Styles.container}>
                <View style={Styles.header}>
                    <Text style={globalStyles.headingText}>Pictographics representation of your attendance.</Text>
                </View>
                <View style={Styles.chartStyle}>
                    <LineChart
                        data={{
                        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                        datasets: [
                            {
                            data: [20, 45, 28, 80, 99, 43],
                            strokeWidth: 2,
                            },
                        ],
                        }}
                        width={Dimensions.get('window').width - 15}
                        height={400}
                        chartConfig={{
                        backgroundColor: '#1473e6',
                        backgroundGradientFrom: '#ccccff',
                        backgroundGradientTo: '#ffffff',
                        decimalPlaces: 2,
                        color: (opacity = 1) => `rgba(17, 27 , 27, ${opacity})`,
                        style: {
                            borderRadius: 16,
                        },
                        }}
                        style={{
                        marginVertical: 0,
                        borderRadius: 16,
                        }}
                    />
                </View>
            </View> 
        </View>
    );
}

const Styles = StyleSheet.create({
    container:{
        display:'flex',
        justifyContent:'flex-start',
        padding: 7,
        paddingHorizontal:7,
        height:'100%'
    },
    chatStyle: {
       margin: 10
    },
    header:{
        display:'flex',
        justifyContent:'flex-start',
        alignItems: 'flex-start',
        marginBottom: 25,
        padding: 10
    },
    menuCards: {
        display:'flex',
        flexDirection:'column',
        backgroundColor:'#fff',
        height:'40%'
    },
    menuRow: {
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        marginBottom: 20
    },
    menuCard:{
        backgroundColor:'#1473e6',
        display:'flex',
        justifyContent: 'center',
        alignItems:'center',
        width:'47.5%',
        height:150,
        shadowColor: "#000",
        borderRadius:10,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    cardText: {
        color:'#ffffff',
        fontFamily:'arlon-medium'
    }
});

export default AnalyticsScreen;