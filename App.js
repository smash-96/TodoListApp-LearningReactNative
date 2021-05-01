/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  View,
  Alert,
} from 'react-native';

import TodoItem from './components/TodoItem';
import HeaderComponent from './components/HeaderComponent';
import AddTodo from './components/AddTodo';

function App(props) {
  const [todo, setTodo] = useState([
    {text: 'Wake Up', key: '1'},
    {text: 'Exercise', key: '2'},
    {text: 'Eat', key: '3'},
    {text: 'Sleep', key: '4'},
  ]);

  const handlePress = key => {
    setTodo(prevState => {
      return prevState.filter(item => item.key != key);
    });
  };

  const handleAdd = item => {
    if (item.length > 3) {
      setTodo(prevState => {
        return [{text: item, key: Math.random().toString()}, ...prevState];
      });
    } else {
      Alert.alert(
        'Hang On!!',
        'Length of Todo should be greater than 3 characters.',
        [{text: 'Understood', onPress: () => console.log('OK Pressed')}],
      );
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log('Keyboard Dismissed!');
      }}>
      <SafeAreaView style={styles.container}>
        <HeaderComponent />
        <View style={styles.form}>
          <AddTodo onAdd={item => handleAdd(item)} />
          <View style={styles.list}>
            <FlatList
              data={todo}
              renderItem={({item}) => (
                <TodoItem item={item} handlePress={key => handlePress(key)} />
              )}
            />
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  form: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});
export default App;
