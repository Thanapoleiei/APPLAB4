import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';



export default class Cm extends React.Component {

    static navigationOptions = {
        title: 'CHORD C minor',
    };

    render() {
        const { navigate } = this.props.navigation;

        return (

            <View style={styles.container}>
                <Image source={require('./Cm.jpg')} />
                <View>
                    <Button title="SELECT" style={styles.button1} onPress={() => navigate('Select')} />
                </View>
            </View>
        );

    }
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        margin: 20,
        // flexDirection: 'column',
       
    },
   

    button1: {
        textAlign: 'center',
        color: 'gold',
        fontSize: 20,
        display: 'flex',
        margin: 20,
        flexDirection: 'row',
       

    },
   

});