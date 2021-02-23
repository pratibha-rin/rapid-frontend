import React, { memo } from 'react';
import { Navigation } from '../types';
import { Calculator } from 'react-native-calculator'
import { View } from 'react-native'

type Props = {
  navigation: Navigation;
};

const DashboardScreen = ({ navigation }: Props) => (
  <View style={{ flex: 1 }}>
    <Calculator style={{ flex: 1 }} />
  </View>
);

export default DashboardScreen;
