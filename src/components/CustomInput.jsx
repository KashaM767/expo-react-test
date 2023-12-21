import React from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';

const CustomInput = ({ value, setValue, placeholder }) => {
    return (
        <View style={styles.container}>
            <TextInput
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                style={styles.input}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: '15%',
        borderColor: '#5158bb',
        borderWidth: 1,
        borderRadius: 5,

        paddingHorizontal: 10,
        marginVertical: 5,
    },
    input: {},
})

export default CustomInput;