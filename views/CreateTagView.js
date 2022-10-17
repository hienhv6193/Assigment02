import React from 'react';
import {Alert, ImageBackground, StyleSheet ,Text, TouchableOpacity, View } from 'react-native';
import IonIcons from 'react-native-vector-icons/IonIcons';
import { TextInput } from 'react-native-web';
// step 1
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import { createTag } from '../redux/actions/tagAction';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CreateTagView = ({navigation,}) => {
    // step 2
    const dispatch = useDispatch();
    const db = useSelector((state) => state.tags);

    const [id,setId] = useState(0);
    const [name,setName] = useState('');

    const handleSaveTag =() => {
        let newtag = {
            id: id,
            name: name
        }
        console.log(newtag);
        //step 3
        dispatch(createTag(newtag))
        navigation.navigate('ViewAll')
    }

    return(
        <View style={styles.CRUDContainer}>
            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <TextInput placeholder='TagId' style={styles.inputText} 
                                onChangeText = {(val) => setId(val)}/>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput placeholder='TagName' style={styles.inputText}
                                onChangeText = {(val) => setName(val)}/>
                </View>
                <TouchableOpacity style={styles.btn} onPress={() => handleSaveTag()}>
                    <Text style={styles.btnText}>Save</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default CreateTagView;

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
        fontSize: 17
    },
    btn: {
        backgroundColor: '#d81b60',
        width: '70%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 45/2,
    },
    btnText: {
        color: '#fff'
    },
    listItemContainer: {
        flex: 1,
    },
    headerComponentTitle: {
        color: 'black',
        fontSize: 30,
    },
    headerListComponent: {
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 20
    },
    itemContainer: {
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 15,
    },
    imgItem: {
        width: 100,
        height: 100
    },
    itemInfo: {},
    itemDetails: {
        marginLeft: 15,
        marginBottom: 30,
        width: '65%'
    },
    nameText: {
        color: '#000',
        fontSize: 22,
        flexWrap: 'wrap'
    },
    descriptionText: {
        color: '#bdbdbd',
        fontSize: 22
    },
    ratingText: {
        color: '#000',
        fontSize: 22
    },
    priceText: {
        color: '#000',
        fontSize: 22
    },
});