import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { TextInput } from 'react-native-web';

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (email === '' || password === '') {
            Alert.alert('Error', 'Please enter both email and password.');
        } else {
            navigation.navigate('UserProfile');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Login" onPress={() => navigation.navigate('UserProfile')} />
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.link}>Don't have an account? Sign up</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('PasswordRecovery')}>
                <Text style={styles.link}>Forgot Password?</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        height: 50,
        borderColor: '#ddd',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 15,
        borderRadius: 5,
    },
    link: {
        color: '#007bff',
        textAlign: 'center',
        marginTop: 15,
        textDecorationLine: 'underline',
    },
});
