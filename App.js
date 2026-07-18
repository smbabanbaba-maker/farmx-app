import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar, View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

// Colors - Fari, Baki, Ja
const COLORS = {
  white: '#FFFFFF',
  black: '#000000',
  red: '#FF0000',
  dark: '#1A1A1A',
  gray: '#666666',
  lightGray: '#F5F5F5'
};

// Screens
function HomeScreen() {
  return (
    <View style={[styles.center, { backgroundColor: COLORS.white }]}>
      <Text style={[styles.title, { color: COLORS.black }]}>🌾 FarmX</Text>
      <Text style={[styles.subtitle, { color: COLORS.gray }]}>
        Welcome to FarmX!
      </Text>
      <Text style={[styles.subtitle, { color: COLORS.gray }]}>
        Agricultural Marketplace
      </Text>
    </View>
  );
}

function MarketScreen() {
  return (
    <View style={[styles.center, { backgroundColor: COLORS.white }]}>
      <Text style={[styles.title, { color: COLORS.black }]}>🛒 Market</Text>
      <Text style={[styles.subtitle, { color: COLORS.gray }]}>
        Buy & Sell Products
      </Text>
    </View>
  );
}

function WalletScreen() {
  return (
    <View style={[styles.center, { backgroundColor: COLORS.white }]}>
      <Text style={[styles.title, { color: COLORS.black }]}>💰 Wallet</Text>
      <Text style={[styles.subtitle, { color: COLORS.gray }]}>
        Your Balance
      </Text>
      <Text style={[styles.balance, { color: COLORS.red }]}>₦0.00</Text>
    </View>
  );
}

function JobsScreen() {
  return (
    <View style={[styles.center, { backgroundColor: COLORS.white }]}>
      <Text style={[styles.title, { color: COLORS.black }]}>💼 Jobs</Text>
      <Text style={[styles.subtitle, { color: COLORS.gray }]}>
        Find Agricultural Jobs
      </Text>
    </View>
  );
}

function CommunityScreen() {
  return (
    <View style={[styles.center, { backgroundColor: COLORS.white }]}>
      <Text style={[styles.title, { color: COLORS.black }]}>👥 Community</Text>
      <Text style={[styles.subtitle, { color: COLORS.gray }]}>
        Connect with Farmers
      </Text>
    </View>
  );
}

function ChatScreen() {
  return (
    <View style={[styles.center, { backgroundColor: COLORS.white }]}>
      <Text style={[styles.title, { color: COLORS.black }]}>💬 Chat</Text>
      <Text style={[styles.subtitle, { color: COLORS.gray }]}>
        Messages & AI Assistant
      </Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={[styles.center, { backgroundColor: COLORS.white }]}>
      <Text style={[styles.title, { color: COLORS.black }]}>👤 Profile</Text>
      <Text style={[styles.subtitle, { color: COLORS.gray }]}>
        Your Account
      </Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.black} />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            const icons = {
              'Home': 'home',
              'Market': 'storefront',
              'Wallet': 'account-balance-wallet',
              'Jobs': 'work',
              'Community': 'people',
              'Chat': 'chat',
              'Profile': 'person'
            };
            return <Icon name={icons[route.name]} size={size} color={color} />;
          },
          tabBarActiveTintColor: COLORS.red,
          tabBarInactiveTintColor: COLORS.gray,
          tabBarStyle: {
            backgroundColor: COLORS.white,
            borderTopColor: COLORS.red,
            borderTopWidth: 3,
            height: 60,
            paddingBottom: 5,
            paddingTop: 5
          },
          headerStyle: {
            backgroundColor: COLORS.white,
            borderBottomColor: COLORS.red,
            borderBottomWidth: 2
          },
          headerTitleStyle: {
            color: COLORS.black,
            fontWeight: 'bold'
          },
          headerTintColor: COLORS.red,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Market" component={MarketScreen} />
        <Tab.Screen name="Wallet" component={WalletScreen} />
        <Tab.Screen name="Jobs" component={JobsScreen} />
        <Tab.Screen name="Community" component={CommunityScreen} />
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    marginTop: 10,
  },
  balance: {
    fontSize: 36,
    fontWeight: 'bold',
    marginTop: 10,
  }
});
