// Import libs
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Make component
const Header = (props) => {
    const { textStyle, container } = styles;
    return (
        <View style={container}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

// Custom stylesheet
const styles = StyleSheet.create({
    container: {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F8F8F8',
        height: 60,
        // iOS
        shadowColor: '#191414',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        // Android
        elevation: 2,
        position: 'relative',
    },
    textStyle: {
        fontSize: 24,
        color: 'black', 
        fontWeight: 'bold'
    }
});

// Export module
export default Header;
