import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';


export default class Page extends React.Component {

    static navigationOptions = {
        title: 'SELECT CHORD',
    };

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View>
                <View >

                    <Text style={styles.text}>Choose the chords you want</Text>
                    <Button title="A major" style={styles.button1} onPress={() => navigate('A')} />
                    <Button title="B major" style={styles.button1} onPress={() => navigate('B')} />
                    <Button title="C major" style={styles.button1} onPress={() => navigate('C')} />
                    <Button title="D major" style={styles.button1} onPress={() => navigate('D')} />
                    <Button title="E major" style={styles.button1} onPress={() => navigate('E')} />
                    <Button title="F major" style={styles.button1} onPress={() => navigate('F')} />
                    <Button title="G major" style={styles.button1} onPress={() => navigate('G')} />
                    <Button title="A minor" style={styles.button1} onPress={() => navigate('Am')} />
                    <Button title="B minor" style={styles.button1} onPress={() => navigate('Bm')} />
                    <Button title="C minor" style={styles.button1} onPress={() => navigate('Cm')} />
                    <Button title="D minor" style={styles.button1} onPress={() => navigate('Dm')} />
                    <Button title="E minor" style={styles.button1} onPress={() => navigate('Em')} />
                    <Button title="F minor" style={styles.button1} onPress={() => navigate('Fm')} />
                    <Button title="G minor" style={styles.button1} onPress={() => navigate('Gm')} />
                </View>
            </View>
        );

    }
}

const styles = StyleSheet.create({

    text: {
        textAlign: 'center',
        color: 'gold',
        fontSize: 20,
        display: 'flex',
        margin: 20,
        flexDirection: 'row',
      

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