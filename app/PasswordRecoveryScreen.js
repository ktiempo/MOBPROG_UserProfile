import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function PasswordRecovery() {
    const router = useRouter();
    const [email, setEmail] = useState('');

    const handlePasswordRecovery = () => {
        alert('Password recovery link sent!');
        router.push('/'); // Navigate back to Login (index.js)
    };
    

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Password Recovery</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <Button title="Recover Password" onPress={handlePasswordRecovery} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 16 },
    title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
    input: { height: 50, borderColor: '#ddd', borderWidth: 1, paddingHorizontal: 10, marginBottom: 15, borderRadius: 5 },
});
