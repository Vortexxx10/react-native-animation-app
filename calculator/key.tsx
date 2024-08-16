import Svg, { Path } from 'react-native-svg';
import { StyleSheet } from 'react-native';
import { View } from './components/Themed'
import { useColorScheme } from './components/useColorScheme';
import React from 'react';

const DelKey = () => {
  const colorScheme = useColorScheme();
  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        { alignItems: 'center', justifyContent: 'center' },
      ]}>
      {colorScheme === 'light' ?
        (
          <Svg width="33" height="32" viewBox="0 0 33 32" fill="black" >
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M11.0858 7H11.5H27.5H28.5V8V24V25H27.5H11.5H11.0858L10.7929 24.7071L2.79292 16.7071L2.08582 16L2.79292 15.2929L10.7929 7.29289L11.0858 7ZM11.9142 9L4.91424 16L11.9142 23H26.5V9H11.9142ZM15.5 11.5858L16.2071 12.2929L18.5 14.5858L20.7929 12.2929L21.5 11.5858L22.9142 13L22.2071 13.7071L19.9142 16L22.2071 18.2929L22.9142 19L21.5 20.4142L20.7929 19.7071L18.5 17.4142L16.2071 19.7071L15.5 20.4142L14.0858 19L14.7929 18.2929L17.0858 16L14.7929 13.7071L14.0858 13L15.5 11.5858Z" fill="black" />
          </Svg>
        ) :
        (
          <Svg width="33" height="32" viewBox="0 0 33 32" fill="white" >
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M11.0858 7H11.5H27.5H28.5V8V24V25H27.5H11.5H11.0858L10.7929 24.7071L2.79292 16.7071L2.08582 16L2.79292 15.2929L10.7929 7.29289L11.0858 7ZM11.9142 9L4.91424 16L11.9142 23H26.5V9H11.9142ZM15.5 11.5858L16.2071 12.2929L18.5 14.5858L20.7929 12.2929L21.5 11.5858L22.9142 13L22.2071 13.7071L19.9142 16L22.2071 18.2929L22.9142 19L21.5 20.4142L20.7929 19.7071L18.5 17.4142L16.2071 19.7071L15.5 20.4142L14.0858 19L14.7929 18.2929L17.0858 16L14.7929 13.7071L14.0858 13L15.5 11.5858Z" fill="white" />
          </Svg>
        )
      }
    </View>
  )
}

const itemData = [
  {
    value: 'C',
    color_type: 'gray',
  },
  {
    value: '( )',
    color_type: 'gray',
  },
  {
    value: '%',
    color_type: 'gray',
  },
  {
    value: '÷',
    color_type: 'blue',
  },
  {
    value: '7',
    color_type: 'white',
  },
  {
    value: '8',
    color_type: 'white',
  },
  {
    value: '9',
    color_type: 'white',
  },
  {
    value: '×',
    color_type: 'blue',
  },
  {
    value: '4',
    color_type: 'white',
  },
  {
    value: '5',
    color_type: 'white',
  },
  {
    value: '6',
    color_type: 'white',
  },
  {
    value: '–',
    color_type: 'blue',
  },
  {
    value: '1',
    color_type: 'white',
  },
  {
    value: '2',
    color_type: 'white',
  },
  {
    value: '3',
    color_type: 'white',
  },
  {
    value: '+',
    color_type: 'blue',
  },
  {
    value: '.',
    color_type: 'white',
  },
  {
    value: '0',
    color_type: 'white',
  },
  {
    value: (<DelKey />),
    color_type: 'white',
  },
  {
    value: '=',
    color_type: 'blue',
  },

];

export default itemData;