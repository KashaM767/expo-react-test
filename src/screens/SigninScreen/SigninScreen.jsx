import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, useWindowDimensions } from 'react-native';
import london from '../../../assets/london.jpg';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const SigninScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSigninPressed = () => {
        console.warn('sign in');
    }

    const onForgotPasswordPressed = () => {
        console.warn('onForgotPasswordPressed')
    }

    const { height } = useWindowDimensions();
    return (
        <View style={styles.root}>
            <Image source={london}
                style={[styles.london, { height: height * 0.3 }]}
                resizeMode='contain' />
            <CustomInput placeholder="Username" value={username} setValue={setUsername} />
            <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry />
            <CustomButton text="Sign in" onPress={onSigninPressed} />
            <CustomButton text="Forgot password?" onPress={onForgotPasswordPressed} type="TERTIARY" />
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    london: {
        maxHeight: 300,
        maxWidth: 500,
        width: '70%',
    },
})

export default SigninScreen;