import React, {useState} from 'react';
import {StyleSheet, TextInput, View, Button} from 'react-native';

function AddTodo({onAdd}) {
  const [text, setText] = useState('');

  const changeHandler = val => {
    setText(val);
  };
  return (
    <View>
      <TextInput
        style={styles.container}
        placeholder="E.g: Make Tea"
        onChangeText={text => changeHandler(text)}
      />
      <Button title="Add to List" onPress={() => onAdd(text)} color="orange" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 305,
    margin: 12,
    borderWidth: 1,
  },
});

export default AddTodo;
