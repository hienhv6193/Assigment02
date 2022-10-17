import React from 'react';
import {ImageBackground, StyleSheet ,Text, TouchableOpacity, View } from 'react-native';
import IonIcons from 'react-native-vector-icons/IonIcons';
import { TextInput } from 'react-native-web';

import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import {updateTag , deleteTag} from '../redux/actions/tagActions';

const EditTagView = ({navigation,route}) => {
    const dispatch = useDispatch();
    const db = useSelector((state) => state.tags);
    const {tagId} = route.params;
    const {tagName}=route.params;

    const [id,setId] = useState(tagId);
    const [name,setName] = useState('');

    const handleUpdateTag =() => {
        let uptag = {
            id: id,
            name: name
        }
        console.log(uptag);
        dispatch(updateTag(uptag))
        navigation.navigate('ViewAll')
    }
    const handleDeleteTag =(id) => {
        console.log(tagId);
        dispatch(deleteTag(id))
        navigation.navigate('ViewAll')
    }

    return(
        <View style={styles.CRUDContainer}>
            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <TextInput
                    style={styles.inputText}
                     value={tagId}/>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput value={name}
                        onChangeText={(value) => {setName(value)}}
                        style={styles.inputText}
                    ></TextInput>
                </View>
                <TouchableOpacity style={styles.btn} onPress={() => handleUpdateTag()}>
                    <Text style={styles.btnText}>Update</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => handleDeleteTag(tagId)}>
                    <Text style={styles.btnText}>Delete</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default EditTagView;

const styles = StyleSheet.create({
    CRUDContainer: {
        flex: 1,
    },
    formContainer: {
        // backgroundColor: 'black'
        width: '100%',
        alignItems: 'center',
    },
    inputContainer: {
        width: '70%'
    },
    inputText: {
        borderBottomWidth: 2,
        borderBottomColor: '#d81b60',
        paddingVertical: 5,
        marginBottom: 10,
    },
    btn: {
        backgroundColor: '#d81b60',
        width: '70%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 45/2,
        marginBottom: 10,
    },
    btnText: {
        color: '#fff'
    },
});