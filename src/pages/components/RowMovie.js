import * as React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { startAsync } from 'expo/build/AR';

const RowMovie = ({ item, onPress }) => {
    const ratingFive = (item.rating * 5)/10

    const getStars = () => {
        let stars = '';
        return stars.padStart(ratingFive, '★')//☆
    }
    return (
        <TouchableOpacity onPress={() => onPress(item)} style={{ flexDirection: 'row', marginVertical: 8 }}>
            <Image
                style={styles.cover}
                source={{ uri: item.medium_cover_image }}
            />
            <View style={styles.side}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.year}>{item.year}</Text>
                <Text style={styles.rating}>{ratingFive.toFixed(1)}</Text>
                <Text style={styles.rating}>{getStars()}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    cover: {
        marginLeft: 16,
        width: 100,
        height: 130
    },
    side: {
        height: 100,
        marginLeft: 16
    },
    title: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    },
    year: {
        color: '#ccc',
        fontSize: 12,
        marginTop: 8
    },
    rating: {
        color: 'yellow',
        fontSize: 13,
        marginTop: 8
    },
})

export default RowMovie;
