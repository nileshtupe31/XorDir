import React from 'react';
import { ActivityIndicator, View } from 'react-native';

const Spinner = ({ size }) => (
    <View style={Styles.spinnerStyle}>
      <ActivityIndicator size={size || 'large'} />
    </View>
  );

const Styles = {
  spinnerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5
  }
};

export { Spinner };
