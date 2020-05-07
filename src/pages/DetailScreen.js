import * as React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';

const DetailScreen = ({ navigation, route }) => {
    const { movie } = route.params;
    const { title, year, medium_cover_image, rating, background_image, summary, genres, runtime } = movie;

    const ratingFive = (rating * 5) / 10

    const getStars = () => {
        let stars = '';
        return stars.padStart(ratingFive, '★')
    }

    return (
        <View>
            <ImageBackground imageStyle={{ opacity: 0.3 }} style={styles.banner} source={{ uri: background_image }}>
                <Image style={styles.cover} source={{ uri: medium_cover_image }}></Image>
                <View style={styles.side}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.rating}>{getStars()}</Text>
                    <Text style={styles.genres}>{genres.join(' | ')}</Text>
                    <Text style={styles.year}>{year}  •  {runtime} mins</Text>
                </View>
            </ImageBackground>
            <Text style={styles.summary}>{summary}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    banner: {
        height: 160,
        flexDirection: 'row'
    },
    cover: {
        marginLeft: 16,
        width: 100,
        height: 130,
        marginTop: 100
    },
    side: {
        height: 100,
        marginLeft: 16,
        marginTop: 110
    },
    title: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    },
    genres: {
        color: '#ccc',
        fontSize: 13,
        marginTop: 10
    },
    year: {
        color: 'white',
        fontSize: 13,
        marginTop: 10
    },
    rating: {
        color: 'yellow',
        fontSize: 13,
        marginTop: 8
    },
    summary: {
        color: '#ccc',
        fontSize: 12,
        marginTop: 90,
        marginLeft: 20,
        marginRight: 20
    }
})

export default DetailScreen;