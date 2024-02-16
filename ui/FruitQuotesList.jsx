import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const FruitQuotesListPage = ({ fruitQuotes }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={fruitQuotes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.quote}>{item.quote}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 16,
      paddingTop: 16,
      backgroundColor: '#f0f0f0',
    },
    card: {
      backgroundColor: '#ffffff',
      borderRadius: 8,
      padding: 16,
      marginBottom: 8,
      elevation: 3, // Shadow for Android
      shadowColor: '#000', // Shadow for iOS
      shadowOffset: { width: 0, height: 1 }, // Shadow for iOS
      shadowOpacity: 0.2, // Shadow for iOS
      shadowRadius: 4, // Shadow for iOS
    },
    name: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    quote: {
      fontSize: 16,
    },
  });

export default FruitQuotesListPage;
