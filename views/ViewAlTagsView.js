import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// step 1
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';

const ViewAlTagsView = ({navigation,}) => {
    const db = useSelector((state) => state.tags)

    return(
        <View style={styles.CRUDContainer}>
            <View style={styles.tagAllContainer}>
                {
                    db.tags ?
                        db.tags.map((tag) => {
                            return(
                                <TouchableOpacity key={tag.id} style={styles.tagContainer}
                                                    onPress={() => navigation.navigate('Edit',{tagId: tag.id,tagName: tag.name})}>
                                    <Text style={styles.tagText}>{tag.name}</Text>
                                </TouchableOpacity>
                            )
                    })
                    :
                    <View><Text>No data</Text></View>
                }
            </View>
            <TouchableOpacity style={styles.btn} onPress={() => {navigation.navigate('Create')}}>
                <Text style={styles.btnText}>Create New</Text>
            </TouchableOpacity>
        </View>
    );
}

export default ViewAlTagsView;

const styles = StyleSheet.create({
    CRUDContainer: {
        flex: 1,
        alignItems: 'center'
    },
    tagAllContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    tagContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
        borderRadius: 45/2,
        borderWidth: 1,
        borderColor: '#d81b60',
        padding: 10,
        margin: 10,
    },
    tagText: {
        color: '#d81b60',
    },
    btn: {
        backgroundColor: '#d81b60',
        width: '70%',
        height: 45,
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: 45/2,
    },
    btnText: {
        color: '#FFF',
    }
});