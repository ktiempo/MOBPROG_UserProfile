import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Avatar } from 'react-native-elements';
import MyPicture from '../assets/images/prof.png';

const UserProfile = () => {
  const [user] = useState({
    name: 'Krysel Tiempo',
    email: 'tiempo.kryselapril@gmail.com',
    phone: '+639123456789',
    bio: 'rawr!',
    profilePicture: MyPicture,
    joinedDate: '1 month ago',
  });

  const handleEditProfile = () => {
    // Logic
    alert('Edit Profile Pressed');
  };

  const handleSignOut = () => {
    //logic
    Alert.alert('Sign Out Pressed');
  };


  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Avatar
          rounded
          size="xlarge"
          source={user.profilePicture}
          containerStyle={styles.avatar}
        />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.joinedText}>Joined {user.joinedDate}</Text>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.infoLabel}>Email:</Text>
        <Text style={styles.infoText}>{user.email}</Text>

        <Text style={styles.infoLabel}>Phone:</Text>
        <Text style={styles.infoText}>{user.phone}</Text>

        <Text style={styles.infoLabel}>Bio:</Text>
        <Text style={styles.infoText}>{user.bio}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.editButton} onPress={handleEditProfile}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
            <Text style={styles.ButtonText}>Sign Out</Text>
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
  header: {
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#007bff', 
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  avatar: {
    marginBottom: 10,
  },
  name: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
  },
  joinedText: {
    fontSize: 16,
    color: '#fff',
    marginTop: 5,
  },
  infoSection: {
    margin: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  infoLabel: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
  },
  infoText: {
    fontSize: 16,
    color: '#333',
  },
  buttonContainer: {
    margin: 20,
    padding: 10,
    allignItems: 'center',
  },
  editButton: {
    backgroundColor: '#28a745',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 15,
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
  editButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  }
});

export default UserProfile;
