import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const CreateFruitQuotePage = ({ navigation, onAddQuote }) => {
  const [fruitName, setFruitName] = useState('');
  const [fruitQuote, setFruitQuote] = useState('');

  const handleAddQuote = () => {
    onAddQuote({ name: fruitName, quote: fruitQuote });
    setFruitName('');
    setFruitQuote('');
  };

  const navigateToList = () => {
    navigation.navigate('FruitQuotesList');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Fruit Name"
        value={fruitName}
        onChangeText={setFruitName}
      />
      <TextInput
        placeholder="Fruit Quote"
        style={styles.input}
        value={fruitQuote}
        onChangeText={setFruitQuote}
      />
      <View style={styles.buttonsContainer}>
        <Button style={styles.button} title="Add Quote" onPress={handleAddQuote} />
        <Button style={styles.button} title="Go to List" onPress={navigateToList} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      padding: 12,
      marginBottom: 16,
    },
    buttonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    button: {
        borderRadius: 25,
        paddingVertical: 12,
        paddingHorizontal: 20,
      },
  });

export default CreateFruitQuotePage;