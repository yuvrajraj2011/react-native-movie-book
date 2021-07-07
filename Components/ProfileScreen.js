import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function ProfileScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Screen</Text>
        <MyBackButton />
      </View>
    );
  }

  function MyBackButton() {
    const navigation = useNavigation();
  
    return (
      <Button
        title="Back"
        onPress={() => {
          navigation.goBack();
        }}
      />
    );
  }