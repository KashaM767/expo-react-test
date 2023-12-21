import React, { useState } from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const ForgotPasswordScreen = () => {
    const [username, setUsername] = useState('');

    const onSendPressed = () => {
        console.warn('register');
    }

    const onSigninPressed = () => {
        console.warn('onSigninPressed');
    }

    return (
        <View style={styles.root}>
            <Text style={styles.title}>Reset your password</Text>
            <CustomInput placeholder="Username" value={username} setValue={setUsername} />
            <CustomButton text="Send" onPress={onSendPressed} />
            <CustomButton text="Back to sign in" onPress={onSigninPressed} type="TERTIARY" />
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },

    title: {
        paddingTop: 20,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#5158bb',
        margin: 10,
    },

    text: {
        color: 'gray',
        marginVertical: 10,
    },

    link: {
        color: '#4361ee'
    }
})

export default ForgotPasswordScreen;