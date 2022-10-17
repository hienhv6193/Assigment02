import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet ,Text, View } from 'react-native';
import CreateTagView from './CreateTagView';
import ViewAlTagsView from './ViewAlTagsView';
import EditTagView from './EditTagView'
const Stack = createNativeStackNavigator();

const TagManagementView = ({params,}) => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='ViewAll' component={ViewAlTagsView}/>
                <Stack.Screen name='Create' component={CreateTagView}/>
                <Stack.Screen name='Edit' component={EditTagView}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default TagManagementView;

const styles = StyleSheet.create({
    
});