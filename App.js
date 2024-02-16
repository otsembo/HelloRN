import React, { useState } from 'react';
import { View } from 'react-native';
import CreateFruitQuotePage from './ui/CreateFruitQuote';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FruitQuotesListPage from './ui/FruitQuotesList';

const Stack = createNativeStackNavigator();

const App = () => {
  const [fruitQuotes, setFruitQuotes] = useState([]);

  const handleAddQuote = (quote) => {
    setFruitQuotes([...fruitQuotes, quote]);
  };

  console.log("onAddQuote", fruitQuotes)

  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="CreateFruitQuote">
    //     <Stack.Screen
    //       name="CreateFruitQuote"
    //       component={CreateFruitQuotePage}
    //       options={{ title: 'Create Fruit Quote' }}
    //       initialParams={{ onAddQuote: handleAddQuote }}
    //     />
    //     <Stack.Screen
    //       name="FruitQuotesList"
    //       component={FruitQuotesListPage}
    //       options={{ title: 'Fruit Quotes List' }}
    //       initialParams={{ fruitQuotes }}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='CreateFruitQuote'>
        <Stack.Screen 
          name='CreateFruitQuote' 
          options={{ title: 'Create Fruit Quote' }} 
        >
          {(props) => <CreateFruitQuotePage {...props} onAddQuote={handleAddQuote}></CreateFruitQuotePage>}
        </Stack.Screen>
        <Stack.Screen
          name='FruitQuotesList'
        >
          { (props) => <FruitQuotesListPage {...props} fruitQuotes={fruitQuotes}></FruitQuotesListPage> }
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;