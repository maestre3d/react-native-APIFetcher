import React from 'react';
import { View, StyleSheet } from 'react-native';


// Card item - Functional
const CardSection = (props) => {
    return (
        <View style={styles.container}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 0.5,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative',
    }
});

export default CardSection;
