import { StatusBar } from 'expo-status-bar';
import { useCallback, useRef, useState } from 'react';
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';




const EnglishScreen = () => {

    const [textValue, setTextValue] = useState('');

    const words = [
      {text: 'Yes', id: 0},
      {text: 'Of course', id: 1},
      {text: 'All right', id: 2},
      {text: 'Yep', id: 3},
      {text: 'Aye', id: 4},
  
      {text: 'No', id: 5},
      {text: 'Nay', id: 6},
      {text: 'Nix', id: 7},
      {text: 'Never', id: 8},
      {text: 'No! No! No!', id: 9},
    ]
  
    const changeTextValue = () => {
      const len = words.length;
      setTextValue(words[Math.floor(Math.random() * len)].text)
    }
  
    const anim = useRef(new Animated.Value(0));
  
    const shake = useCallback(() => {
      return Animated.loop(
        Animated.sequence([
          // @ts-ignore
          Animated.timing(anim.current, {
           toValue: -3,
            duration: 50,
          }),
          // @ts-ignore
          Animated.timing(anim.current, {
            toValue: 3,
            duration: 50,
          }),
          // @ts-ignore
          Animated.timing(anim.current, {
            toValue: 0,
            duration: 50,
          }),
        ]),
        { iterations: 2 }
      ).start();
    }, []);
  
    const CombineFunc = () => {
      shake();
      changeTextValue();
    }
  
    const navigation = useNavigation<any>();

    return (
      <View style={styles.container}>
        <StatusBar style='light'/>
        <View style={styles.langBtn}>
        <Pressable onPress={() => navigation.navigate('LangScreen')}>
        <FontAwesome name='globe' size={24} color={'#fff'}></FontAwesome>
        </Pressable>
        </View>
        <View>
          <Text style={styles.askText}>Ask a question and shake the ball</Text>
        </View>
        <Animated.View style={{ transform: [{ translateX: anim.current }] }}>
        <Pressable style={styles.ball} onPress={CombineFunc}>
          <Text style={styles.text}>{textValue}</Text>
        </Pressable>
        </Animated.View>
      </View>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#2f373d',
      alignItems: 'center',
      justifyContent: 'center',
    },
    ball: {
      width: 300,
      height: 300,
      borderRadius: 200,
      backgroundColor: '#33bbc7',
      borderWidth: 50,
      borderColor: '#2a2e31',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: '#fff',
      fontSize: 32,
      fontWeight: '600',
    },
    askText: {
      color: '#fff',
      fontSize: 18,
      top: -120 ,
    },
    langBtn: {
        top: -170,
        right: -150
    },
  });

export default EnglishScreen;