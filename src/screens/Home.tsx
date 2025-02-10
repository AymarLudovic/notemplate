import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './Home.styles';
import HomeHeader from '../components/Home/HomeHeader';
import Posts from '../components/Home/Posts';

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <HomeHeader />
      <Posts />
    </View>
  );
};

export default Home;