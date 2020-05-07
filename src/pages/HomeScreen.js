import * as React from 'react';
import { View, FlatList } from 'react-native';
import RowMovie from './components/RowMovie';
import axios from 'axios';

const HomeScreen = ({ navigation }) => {
    const url = 'https://yts.mx/api/v2/list_movies.json';
    const [movies, setMovies] = React.useState([]);

    const getData = async() => {
        try {
            const response = await axios.get(url);
            const content = response.data;
            const { movies: list }  = content.data;
            setMovies(list);
        } catch (error) {
            alert(error.message)
        }
    }

    getData();

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                keyExtractor={({ item }) => item }
                data={movies}
                renderItem={({ item }) => <RowMovie item={item} />
                }>
            </FlatList>
        </View>
    );
}

export default HomeScreen;