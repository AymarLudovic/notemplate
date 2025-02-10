import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type Props = {};

const HomeHeader: React.FC<Props> = ({}) => {
  const [isCameraOpen, setIsCameraOpen] = useState(false);

  useEffect(() => {
    console.log('HomeHeader mounted');

    return () => {
      console.log('HomeHeader unmounted');
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <TouchableOpacity>
          <Ionicons name="ios-camera-outline" size={32} color="black" />
        </TouchableOpacity>
        <Text style={styles.logo}>Instagram</Text>
      </View>
      <View style={styles.rightContainer}>
        <TouchableOpacity>
          <Ionicons name="ios-send-outline" size={32} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default HomeHeader;