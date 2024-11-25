import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Dashboard() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            {/* Main Content */}
            <View style={styles.main}>
                <Text style={styles.title}>Welcome to the Home Page</Text>
                <Text style={styles.subtitle}>Enjoy exploring the app!</Text>
            </View>

            {/* Bottom Navigation */}
            <View style={styles.navigation}>
                <TouchableOpacity
                    style={styles.navItem}
                    onPress={() => router.push('/Dashboard')}
                >
                    <Icon name="home" size={24} color="#007bff" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.navItem}
                    onPress={() => router.push('/UserProfile')}
                >
                    <Icon name="user" size={24} color="#888" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.navItem}
                    onPress={() => router.push('/settings')}
                >
                    <Icon name="cog" size={24} color="#888" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
    },
    navigation: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#ddd',
    },
    navItem: {
        alignItems: 'center',
    },
    navText: {
        fontSize: 14,
        color: '#888',
    },
    activeNav: {
        color: '#007bff', // Highlight the active tab
        fontWeight: 'bold',
    },
});
