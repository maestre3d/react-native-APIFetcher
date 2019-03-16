// Import library
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
//import AppContent from './App';
import AlbumList from './src/components/AlbumList';

// Create component
const App = () => (
    // Flex: 1 = FillParent
    <View style={{ flex: 1, backgroundColor: '#fff', color: '#000' }}>
        <Header headerText={'NightLifeX'} />
        <AlbumList />
    </View>
);

// Render it to device
AppRegistry.registerComponent('albums', () => App);
