import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Dimensions, Pressable } from 'react-native';
import { Text, View } from './components/Themed'
import itemData from "./key";
import { useColorScheme } from './components/useColorScheme';
import Colors from './constants/Colors';
import calculator, { initialState } from "./utils/calculator";
import { useState } from 'react';



interface Item {
  value: any;
  color_type: string;
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function App() {
  
  const colorScheme = useColorScheme();

  const [state,setState] = useState<any>(initialState);
  
  const HandleTap = (type: any, value: any) => {
    setState(calculator(type, value));
  };
  
  return (
    <View style={[styles.container,{backgroundColor: Colors[colorScheme ?? 'light'].bg}]} >
      <StatusBar style="auto" />
      <Text lightColor='#000' darkColor='#FFF' >Ligthn or dark mode</Text>

      <View style={styles.calculator}>
        <View style={styles.operation} >
          <Text lightColor='#000' darkColor='#FFF' style={{fontSize: 40, textAlign: 'right', lineHeight: 0, opacity: 0.8, fontWeight: '300' }}>6,291÷5</Text>
        </View>

        <View style={styles.result}>
          <Text style={{fontSize: 88, lineHeight:0, textAlign: 'right', fontWeight: '200'}}>860.000</Text>
        </View>

        <View style={styles.keyContainer}>
          {itemData.map((item: Item) => {
            return (
              item.color_type === 'blue' ?
                (<Pressable onPress={()=> HandleTap("clear")} style={[styles.key,{ backgroundColor: Colors[colorScheme ?? 'light'].blue}]}>
                  <Text  style={{ fontSize: 32, justifyContent: 'center', alignItems: 'center', textAlignVertical: "center", color: "#fff" }}>{item.value}</Text>
                </Pressable>
              ) :
               item.color_type === 'gray' ?
               ( <Pressable style={[styles.key,{ backgroundColor: Colors[colorScheme?? 'light'].gray}]}>
                  <Text style={{ fontSize: 32, justifyContent: 'center', alignItems: 'center', textAlignVertical: "center" }}>{item.value}</Text>
                </Pressable>
              ) :
               item.color_type === 'white' && 
               ( <Pressable style={[styles.key,{ backgroundColor: Colors[colorScheme?? 'light'].keyColor}]}>
                  <Text style={{ fontSize: 32, justifyContent: 'center', alignItems: 'center', textAlignVertical: "center" }}>{item.value}</Text>
                </Pressable>
              )
            )
          })}
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: 40,
    paddingTop: 56,
  },
  keyContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 12,
  },
  key: {
    width: (windowWidth - 14 * 2 - 14 * 3) / 4,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 24,
  },
  result: {
    width: windowWidth - 32,
  },
  calculator:{
    width: windowWidth - 32,
    gap: 12,
    height: 'auto',
    justifyContent: 'flex-end',
  },
  operation: {
  }
});
