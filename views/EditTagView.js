import React from 'react';
import {ImageBackground, StyleSheet ,Text, TouchableOpacity, View } from 'react-native';
import IonIcons from 'react-native-vector-icons/IonIcons';
import { TextInput } from 'react-native-web';

import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import { createTag,updateTag,deleteTag } from '../redux/actions/tagAction';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EditTagView = ({navigation,route}) => {
    const dispatch = useDispatch();
    const db = useSelector((state) => state.tags);
    const {tagId} = route.params;
    const {tagName}=route.params;

    const [id,setId] = useState(tagId);
    const [name,setName] = useState('');
    const [price,setPrice] = useState('');
    const [image,setImage] = useState('');

    const handleUpdateTag =() => {
        let uptag = {
            id: id,
            name: name,
            price: price,
            image: image,
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
        <View style={styles.loginContainer}>
            <ImageBackground    source={{uri:'https://i.pinimg.com/originals/2e/e9/18/2ee918427712255bc116749e33616d33.png'}}  
        resizeMode='cover'
                
                style={styles.bgContainer}
            >
                <View style={styles.logoLogin}>
                    <IonIcons name='create' color='#FFF' size={36}/>
                </View>
                <Text style={styles.signinText}>    
                    Sửa món ăn
                </Text>
                <View style={styles.formContainer}>
                    <View style={styles.inputContainer}>
                        <TextInput value={id} style={styles.inputText} onChangeText={(val)=>setId(val)}/>
                    </View>
                    {/* check val */}
                    <View style={styles.inputContainer}>
                        <TextInput value={name} style={styles.inputText} onChangeText={(val)=>setName(val)}/>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput  value={price} style={styles.inputText} onChangeText={(val)=>setPrice(val)}/>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput  value={image} style={styles.inputText} onChangeText={(val)=>setImage(val)}/>
                    </View>
                    <TouchableOpacity style={styles.btn} onPress={() => handleUpdateTag()}>
                        <Text style={styles.btnTxt} >Lưu</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={() => handleDeleteTag(tagId)}>
                        <Text style={styles.btnTxt} >Xóa</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}

export default EditTagView;

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
    },
    logoLogin: {
        width: 60,
        height: 60,
        borderRadius: 60/2,
        backgroundColor: '#d81b60',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
    }, 
    signinText: {
        color: '#d81b60',
        fontSize: 30,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginTop: 10,
        color: '#FFF',

    },
    formContainer: {
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50,
    },
    inputContainer: {
        width: '70%',
        marginBottom: 10,
    },
    inputText: {
        borderBottomWidth: 2,
        borderBottomColor: '#d81b60',
        paddingVertical:10,
        color: '#FFF',
        paddingLeft: 15,
    },
    btn: {
        backgroundColor: '#d81b60',
        width: '70%',
        height: 45,
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: 10,
        marginTop: 50,
    },
    btnTxt: {
        color: '#FFF'
    },
    bgContainer: {
        flex: 1,
        alignItems: 'center',

    },
});