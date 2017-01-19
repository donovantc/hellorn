import React, {Component} from 'react';
import { View, Text } from 'react-native';

class App extends Component{
    render(){
        return (
            <View style={styles.containerStyle}>
                <Text style={styles.textStyle}>Hello big wide world!</Text>
            </View>
        )
    }
}

const styles = {
    containerStyle: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    textStyle: {
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center'
    }
}

export default App;