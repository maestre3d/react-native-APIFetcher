import React from 'react';
import { Text } from 'react-native';

const TitleView = (props) => {
    return (
        <Text style={{ color: '#000' }}>{props.name}</Text>
    );
};

export default TitleView;
