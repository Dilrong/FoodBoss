import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar, Platform } from 'react-native';
import { WebView } from 'react-native-webview';

const ContactScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <WebView source={{ uri: 'https://blog.naver.com/dilrong' }}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
})

export default ContactScreen;