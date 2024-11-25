import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome';

const Settings = () => {
    const router = useRouter();

    return (
        <View style={styles.container}>
            {/* Title */}
            <View style={styles.header}>
                <Text style={styles.title}>Settings</Text>
            </View>

            {/* Options */}
            <View style={styles.optionsContainer}>
                <TouchableOpacity style={styles.option} onPress={() => alert('Edit Profile Pressed')}>
                    <Icon name="user" size={20} color="#555" style={styles.icon} />
                    <Text style={styles.optionText}>Edit Profile</Text>
                </TouchableOpacity>
            </View>

            {/* Log Out Button */}
            <TouchableOpacity
                style={styles.logoutButton}
                onPress={() => router.push('/')}
            >
                <Text style={styles.logoutText}>Log out</Text>
            </TouchableOpacity>

            {/* Bottom Navigation */}
            <View style={styles.navigation}>
                <TouchableOpacity
                    style={styles.navItem}
                    onPress={() => router.push('/Dashboard')}
                >
                    <Icon name="home" size={24} color="#888" />
                    <Text style={styles.navText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.navItem}
                    onPress={() => router.push('/UserProfile')}
                >
                    <Icon name="user" size={24} color="#888" />
                    <Text style={styles.navText}>Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.navItem}
                    onPress={() => router.push('/Settings')}
                >
                    <Icon name="cog" size={24} color="#007bff" />
                    <Text style={[styles.navText, styles.activeNavText]}>Settings</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        padding: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    optionsContainer: {
        marginHorizontal: 20,
        marginTop: 20,
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    icon: {
        marginRight: 15,
    },
    optionText: {
        fontSize: 16,
        color: '#333',
    },
    logoutButton: {
        marginTop: 20,
        backgroundColor: '#eee',
        padding: 15,
        borderRadius: 10,
        marginHorizontal: 20,
        alignItems: 'center',
    },
    logoutText: {
        fontSize: 16,
        color: '#ff3b30',
    },
    navigation: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        position: 'absolute',
        bottom: 0, // Stick navigation to the bottom
        width: '100%', // Ensure it spans the entire width
    },
    navItem: {
        alignItems: 'center',
    },
    navText: {
        fontSize: 12,
        color: '#888',
        marginTop: 4,
    },
    activeNavText: {
        color: '#007bff',
    },
});

export default Settings;
