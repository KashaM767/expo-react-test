import React, { useState } from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const SignUpScreen = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const onRegisterPressed = () => {
        console.warn('register');
    }

    const onTermsPressed = () => {
        console.warn('onTermsPressed');
    }

    const onSigninPressed = () => {
        console.warn('onSigninPressed');
    }

    return (
        <View style={styles.root}>
            <Text style={styles.title}>Create an account</Text>
            <CustomInput placeholder="Username" value={username} setValue={setUsername} />
            <CustomInput placeholder="Email" value={email} setValue={setEmail} />
            <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry />
            <CustomInput placeholder="Repeat password" value={repeatPassword} setValue={setRepeatPassword} secureTextEntry />
            <CustomButton text="Register" onPress={onRegisterPressed} />
            <Text style={styles.text}>By registering, you confirm that you accept our <Text style={styles.link} onPress={onTermsPressed}>Terms and Conditions</Text></Text>
            <CustomButton text="Have an account, sign in" onPress={onSigninPressed} type="TERTIARY" />
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

export default SignUpScreen;