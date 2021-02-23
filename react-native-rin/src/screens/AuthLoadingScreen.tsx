import React from 'react';
import {
    ActivityIndicator,
    StatusBar,
    View,
} from 'react-native';
import firebase from 'firebase'

class AuthLoadingScreen extends React.Component {
    constructor(props) {
        super(props);
        try {
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    console.log(user.email)
                    props.navigation.navigate('Dashboard')
                } else {
                    props.navigation.navigate('HomeScreen')
                }
            })
        } catch (e) {
            props.navigation.navigate('HomeScreen')
        }
    }

    // Render any loading content that you like here
    render() {
        return (
            <View>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}

export default AuthLoadingScreen;