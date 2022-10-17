import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TagManagementView from './views/TagManagementView';
import { Provider } from 'react-redux';
// import reduxStore from "./redux/stores/store";
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/stores/store'

export default function App() {
  // const { store, persistor } = reduxStore();

  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <TagManagementView />
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
