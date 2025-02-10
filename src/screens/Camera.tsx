import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { CameraContext } from '../contexts/CameraContext';

const Camera: React.FC = () => {
  const { camera } = React.useContext(CameraContext);
  return (
    <View style={styles.container}>
      {camera}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default Camera;