import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View ,Image,ImageBackground} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";

// step 1
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';

const ViewAlTagsView = ({navigation,}) => {
    const db = useSelector((state) => state.tags)

    return(
        <ImageBackground source={{uri:'https://img.lovepik.com/photo/50090/3235.jpg_wh860.jpg'}}  
        resizeMode='cover' 
        style={styles.bgContainer}>
        <View style={styles.CRUDContainer}>
            <View>
                <Text style={styles.tiltle}> MENU</Text>
            </View>
            <View style={styles.tagAllContainer}>
            {
                    db.tags ?
                        db.tags.map((x) => {
                            return(
                                <TouchableOpacity key={x.id} style={styles.tagCT}>
                                    
                                            <Text style={styles.tagss}>{x.name}</Text>
                                            
                                        
                                    
                                
                                    
                                </TouchableOpacity>
                            )
                    })
                    :
                    <View><Text>No data</Text></View>
                }
            </View>
            <View style={styles.ProductAllContainer}>
                {
                    db.products ?
                        db.products.map((tag) => {
                            return(
                                <TouchableOpacity key={tag.id} style={styles.tagContainer}
                                                    onPress={() => navigation.navigate('Edit',{tagId: tag.id,tagName: tag.name})}>
                                    <View style={styles.contentMain}>
                                        <View style={styles.TxtView}>
                                            <Text style={styles.tagText}>{tag.name}</Text>
                                            <Text style={styles.tagPText}>Price:{tag.price}</Text>
                                        </View>
                                        
                                    <Image source={{uri:tag.img}} style={styles.img} />
                                    </View>
                                    
                                </TouchableOpacity>
                            )
                    })
                    :
                    <View><Text>No data</Text></View>
                }
            </View>
            <TouchableOpacity style={styles.btn} onPress={() => {navigation.navigate('Create')}}>
            <Ionicons style={styles.notiBtn}
                 name='add'
                 color='#fff'
                 size={24}
        />  
            </TouchableOpacity>
          
        </View>
        </ImageBackground>
    );
}

export default ViewAlTagsView;

const styles = StyleSheet.create({
    CRUDContainer: {
        flex: 1,
        alignItems: 'center',
    },
    bgContainer:{
        height:'auto'
    },
    contentMain:{
        flexDirection:'row',
    },
    TxtView:{
        marginRight:70
    },
    ProductAllContainer: {
        width:'100%',
        alignItems:'center',
        flexWrap: 'wrap',
    },
    tagContainer: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        width:'80%',
        height: 160,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#d81b60',
        padding: 10,
        margin: 10,
    },
    tagCT:{
        width:60,
        height:60,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        margin: 10,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#fff',
    },
    tagText: {
        color: '#d81b60',
        fontSize:25
    },
    tagPText:{
        color:'#fff'
    },
    btn: {
        backgroundColor: '#d81b60',
        width: 45,
        height: 45,
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: 45/2,
    },
    btnText: {
        color: '#FFF',
    },
    img:{
        width: 120,
        height: 120,
        borderRadius:20,
        alignItems:'flex-end'
    },
    tiltle:{
        paddingTop:20,
        fontSize:30,
        fontWeight:'bold',
        color:'red'
    },
    tagss:{
        fontSize:15,
        color: '#fff',
    },
    tagAllContainer:{
        flexDirection:'row',
        alignSelf:'flex-start'
    }
});