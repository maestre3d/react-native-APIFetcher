import React from 'react';
import { View, StyleSheet } from 'react-native';

// Reusable card
const Card = (props) => {
    return (
        // Place children
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        borderWidth: 0.1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0.5 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 0.5,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 10,
    }
});

export default Card;
