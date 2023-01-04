import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import EnglishScreen from './lang/English';
import UkrainianScreen from './lang/Ukraine';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Stack = createStackNavigator();

const LangScreen = () => {

  const navigation = useNavigation<any>();

  return (
    <View style={styles.lang}>
      <TouchableOpacity onPress={() => navigation.navigate('En')}>
        <View style={styles.langTextContainer}><Text style={styles.langText}> En</Text></View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Ua')}>
        <View style={styles.langTextContainer}><Text style={styles.langText}> Ua</Text></View>
      </TouchableOpacity>
    </View>
  )
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LangScreen'>
        <Stack.Screen name='LangScreen' component={LangScreen} options={{ headerShown: false}} />
        <Stack.Screen name='En' component={EnglishScreen} options={{ headerShown: false}}/>
        <Stack.Screen name='Ua' component={UkrainianScreen} options={{ headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )

}

const styles = StyleSheet.create({
lang: {
  flex: 1,
  backgroundColor: '#2f373d',
  justifyContent: 'space-around',
  alignItems: 'center',
  flexDirection: 'row',
},
langText: {
  color: '#fff',
  fontSize: 24,
  fontWeight: '600',
  
},
langTextContainer: {
  borderRadius: 30,
  backgroundColor: '#000',
  paddingVertical: 10,
  paddingHorizontal: 40,
}
})
