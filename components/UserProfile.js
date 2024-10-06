import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert, Switch} from 'react-native';
import { Avatar } from 'react-native-elements';
import MyPicture from '../assets/images/prof.png';
import Icon from 'react-native-vector-icons/Ionicons';

const UserProfile = () => {
  const [user] = useState({
    name: 'Krysel Tiempo',
    email: 'tiempo.kryselapril@gmail.com',
    phone: '+639123456789',
    bio: 'rawr!',
    profilePicture: MyPicture,
    joinedDate: '1 month ago',
  });

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleEditProfile = () => {
    Alert.alert('Edit Profile Pressed');
  };

  const handleSignOut = () => {
    Alert.alert('Sign Out Pressed');
  };

  const handleSettings = () => {
    Alert.alert('Settings Pressed');
  };

  return (
    <ScrollView style={[styles.container, isDarkMode && styles.containerDark]}>
      <View style={[styles.header, isDarkMode && styles.headerDark]}>
        <Avatar
          rounded
          size="xlarge"
          source={user.profilePicture}
          containerStyle={styles.avatar}
        />
        <Text style={[styles.name, isDarkMode && styles.nameDark]}>{user.name}</Text>
        <Text style={[styles.joinedText, isDarkMode && styles.joinedTextDark]}>Joined {user.joinedDate}</Text>

        <TouchableOpacity onPress={handleEditProfile}>
          <Text style={[styles.editText, isDarkMode ? styles.editTextDark : styles.editTextLight]}>Edit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleSettings} style={styles.settingsContainer}>
          <Icon name="settings-outline" size={30} color={isDarkMode ? '#00ffcc' : '#000080'} />
        </TouchableOpacity>
      </View>

      <View style={styles.toggleContainer}>
        <Text style={[styles.infoLabel, isDarkMode && styles.infoLabelDark]}>
          {isDarkMode ? 'Dark Mode' : 'Light Mode'}
        </Text>
        <Switch
          value={isDarkMode}
          onValueChange={toggleDarkMode}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isDarkMode ? '#f4f3f4' : '#f4f3f4'}
        />
      </View>

      <View style={[styles.infoSection, isDarkMode && styles.infoSectionDark]}>
        <Text style={[styles.infoLabel, isDarkMode && styles.infoLabelDark]}>Email:</Text>
        <Text style={[styles.infoText, isDarkMode && styles.infoTextDark]}>{user.email}</Text>

        <Text style={[styles.infoLabel, isDarkMode && styles.infoLabelDark]}>Phone:</Text>
        <Text style={[styles.infoText, isDarkMode && styles.infoTextDark]}>{user.phone}</Text>

        <Text style={[styles.infoLabel, isDarkMode && styles.infoLabelDark]}>Bio:</Text>
        <Text style={[styles.infoText, isDarkMode && styles.infoTextDark]}>{user.bio}</Text>
      </View>

      <View style={styles.buttonContainer}> 
        <TouchableOpacity style={[styles.signOutButton, isDarkMode && styles.signOutButtonDark]} onPress={handleSignOut}>
          <Text style={styles.buttonText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  containerDark: {
    backgroundColor: '#121212',
  },
  header: {
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#007bff', // Light mode blue background
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    position: 'relative',
  },
  headerDark: {
    backgroundColor: '#1f1f1f', // Dark mode background
  },
  avatar: {
    marginBottom: 10,
  },
  name: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
  },
  nameDark: {
    color: '#f2f2f2',
  },
  joinedText: {
    fontSize: 16,
    color: '#fff',
    marginTop: 5,
  },
  joinedTextDark: {
    color: '#cccccc',
  },
  infoSection: {
    margin: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  infoSectionDark: {
    backgroundColor: '#333333',
  },
  infoLabel: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
  },
  infoLabelDark: {
    color: '#bbbbbb',
  },
  infoText: {
    fontSize: 16,
    color: '#333',
  },
  infoTextDark: {
    color: '#f2f2f2',
  },
  buttonContainer: {
    margin: 20,
    padding: 10,
    alignItems: 'center',
  },
  signOutButton: {
    backgroundColor: '#dc3545',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  signOutButtonDark: {
    backgroundColor: '#ff5a5f',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  editText: {
    fontSize: 18,
    marginTop: 10,
    textDecorationLine: 'underline',
  },
  editTextLight: {
    color: '#000080', 
  },
  editTextDark: {
    color: '#00ffcc',
  },
  settingsContainer: {
    position: 'absolute',
    top: 30,
    right: 20,
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    marginHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 10,
  },
});

export default UserProfile;
