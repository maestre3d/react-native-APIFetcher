import React, { Component } from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';
import TitleView from './TitleView';

// Class component -  Dynamic data
export default class AlbumList extends Component {
    
    // React's adapter observer class
    state = { albums: [] };

    // Constructor
    componentWillMount() {
        // Await - Promise - Fetch data AJAX
        fetch('https://rallycoding.herokuapp.com/api/music_albums')
        // Parse fetched data to JSON
        .then((response) => response.json())
        // Update Oberserver data
        .then((responseData) => this.setState({ albums: responseData }));
    }

    // Get Artist name from album fetched data
    renderTitle() {
        let x;

        for (let i = 0; i < this.state.albums.length; i++) {
            x = this.state.albums[i].artist;
            break;
        }

        if (x === undefined) {
            x = '';
        } else {
            x = x + "'s Albums";
        }

        return <TitleView name={x} />;
    }

    // Render album object
    renderAlbums() {
        return this.state.albums.map(album => 
            // Call RecyclerView adapter
            // key = hashmap key - album = pass album object as a Prop to AlbumDetail class
            <AlbumDetail key={album.title} album={album} />
        );
    }

    // Then render items (placeholder / data changed)
    render() {
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.titleText} >{this.renderTitle()}</Text>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

// Custom stylesheet
const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
    titleText: {
        fontSize: 28,
        color: 'black',
        fontWeight: 'bold',
    }
});
