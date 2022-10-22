// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import TagManagementView from './views/TagManagementView';
// import { Provider } from 'react-redux';
// // import reduxStore from "./redux/stores/store";
// import { PersistGate } from 'redux-persist/integration/react';
// import { store, persistor } from './redux/stores/store'
// import { NavigationContainer } from '@react-navigation/native';
// export default function App() {
//   // const { store, persistor } = reduxStore();

//   return (
//     // <Provider store={store}>
//     //   <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
//     //     <TagManagementView />
//     //   </PersistGate>
//     // </Provider>
//     <NavigationContainer>
//       <Tabs/>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
// });
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TagManagement from './views/TagManagementView';
import Tabs from './views/TagManagementView'
import { Provider } from 'react-redux';
import Food from './views/Food'

// import reduxStore from "./redux/stores/store";
import { PersistGate } from 'redux-persist/integration/react';
import store from './redux/stores/store'
import { NavigationContainer } from '@react-navigation/native';
export default function App() {
  // const { store, persistor } = reduxStore();
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
        <Tabs/>
      
    </Provider>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
