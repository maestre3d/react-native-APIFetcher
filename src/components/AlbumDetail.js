import React from 'react';
import { Text, StyleSheet, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import CustomButton from './CustomButton';



// Functional component - Static data
// RecyclerView adapter
const AlbumDetail = ({ album }) => {

    const { title, artist, thumbnail_image, image, url } = album;
    const { picContainer, thumbnail, headerContainer, titleStyle, coverPic } = styles;

    return (
        <Card>
            <CardSection>
                <View style={picContainer}>
                    <Image 
                        style={thumbnail}
                        source={{ uri: thumbnail_image }} 
                    />
                </View>
                <View style={headerContainer}>
                    <Text style={titleStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image 
                    style={coverPic}
                    source={{ uri: image }} 
                />
            </CardSection>

            <CardSection>
                <CustomButton onPress={() => { Linking.openURL(url); }} title={'Buy Now'} />
            </CardSection>
        </Card>
    );
};

const styles = StyleSheet.create({
    picContainer: {
        marginLeft: 10,
        marginRight: 10,
    },
    thumbnail: {
        height: 50,
        width: 50,
        borderRadius: 40,
    },
    headerContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000'
    },
    coverPic: {
        backgroundColor: '#000',
        height: 300,
        flex: 1,
        width: null,
    }
});

export default AlbumDetail;
