import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) =>{
    // navigation.getParam('id');
    const {state} = useContext(Context);

    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'));

    return (
        <View>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </View>
    );
}

//customize header
ShowScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => (
            <TouchableOpacity
                style={styles.editButton}
                onPress={() => navigation.navigate('Edit', {id: navigation.getParam('id')})}>
                <EvilIcons name="pencil" size={30} />
            </TouchableOpacity>
        ),
    };
}

const styles = StyleSheet.create({
    editButton:{
        marginRight: 10
    }
});

export default ShowScreen;