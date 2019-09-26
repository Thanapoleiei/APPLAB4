import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';


export default class Home extends React.Component {

    static navigationOptions = {
        title: 'Home',
    };

    render() {
        const { navigate } = this.props.navigation;

        return (

            <View style={styles.container}>
                <Text style={styles.text}>CHORD GUITAR</Text>
                <Image source={require('./sol1.jpg')} style={{ width: 350, height: 450 }} />
                <View>
                    <Button title="GO TO SELECT" style={styles.button1} onPress={() => navigate('Select')} />
                </View>
            </View>
        );

    }
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    text: {
        textAlign: 'center',
        color: 'blue',
        margin: 10,
        fontSize: 40,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',

    },

    button1: {
        textAlign: 'center',
        display: 'flex',
        margin: 10,
        justifyContent: 'space-between',

    }

});