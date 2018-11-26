import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => (
    <View style={[Styles.containerStyle, props.style]}>
      {props.children}
    </View>
  );

const Styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 0,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export { CardSection };
