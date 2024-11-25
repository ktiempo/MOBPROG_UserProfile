import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Image, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome';
import EditButton from '../components/EditButton';
import SettingsIcon from '../components/SettingsIcon';
import ToggleSwitch from '../components/ToggleSwitch';
import Infosection from '../components/InfoSection';

const UserProfile = () => {
    const router = useRouter();

    const [user] = useState({
        name: 'Krysel Tiempo',
        email: 'tiempo.kryselapril@gmail.com',
        phone: '+639123456789',
        bio: 'rawr!',
        profilePicture: require('../assets/images/prof.png'),
        joinedDate: 'joined 1 month ago',
        bday: '04/02/2004',
    });

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <View style={styles.container}>
            {/* Main Content */}
            <ScrollView style={[styles.main, isDarkMode && styles.containerDark]}>
                <View style={[styles.header, isDarkMode && styles.headerDark]}>
                    <Image
                        source={user.profilePicture}
                        style={styles.profileImage}
                        onError={(error) => console.log('Error loading image:', error.nativeEvent.error)}
                    />

                    <Text style={[styles.name, isDarkMode && styles.nameDark]}>{user.name}</Text>
                    <Text style={[styles.joinedDate, isDarkMode && styles.joinedDateDark]}>{user.joinedDate}</Text>

                    <EditButton
                        onPress={() => alert('Edit Profile Pressed')}
                        color={isDarkMode ? '#00ffcc' : '#000080'}
                    />
                    <SettingsIcon
                        onPress={() => alert('Settings Pressed')}
                        color={isDarkMode ? '#00ffcc' : '#000080'}
                    />
                </View>

                <ToggleSwitch isDarkmode={isDarkMode} toggleDarkMode={toggleDarkMode} />
                <View style={styles.infoContainer}>
                    <Infosection label="Email" content={user.email} isDarkMode={isDarkMode} />
                    <Infosection label="Phone" content={user.phone} isDarkMode={isDarkMode} />
                    <Infosection label="Bio" content={user.bio} isDarkMode={isDarkMode} />
                    <Infosection label="Birthday" content={user.bday} isDarkMode={isDarkMode} />
                </View>
            </ScrollView>

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
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f2f2f2' },
    containerDark: { backgroundColor: '#121212' },
    main: { flex: 1 },
    header: {
        alignItems: 'center',
        padding: 30,
        backgroundColor: '#007bff',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        position: 'relative',
    },
    headerDark: { backgroundColor: '#1f1f1f' },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000080',
        marginTop: 5,
    },
    nameDark: { color: '#00ffcc' },
    joinedDate: {
        fontSize: 14,
        color: '#555555',
    },
    joinedDateDark: { color: '#aaaaaa' },
    infoContainer: { marginHorizontal: 20, marginTop: 10 },

    // Navigation Styles
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

export default UserProfile;
