import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet} from 'react-native';

export default function SignupScreen({ navigation }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = () => {
        navigation.navigate('UserProfile');
    };

    return (
        <View style={Styles.container}>
            <Text style={styles.title}>Sign Up</Text>
            <TextInput
                style={styles.input}
                placeholder='Name'
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder='Email'
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
            <Button title="Sign up" onPress={handleSignup} />
            <Text
                style={styles.link}
                onPress={() => navigation.navigate('Login')}
            >
                Already have an account? Login
            </Text>
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