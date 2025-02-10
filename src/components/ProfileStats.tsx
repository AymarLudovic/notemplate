import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Typography, Colors } from '../../styles';

interface ProfileStatsProps {
  followers?: number;
  following?: number;
  posts?: number;
}

const ProfileStats: React.FC<ProfileStatsProps> = ({ followers, following, posts }) => {
  return (
    <View style={styles.container}>
      <View style={styles.stat}>
        <Text style={styles.statNumber}>{followers || 0}</Text>
        <Text style={styles.statLabel}>Followers</Text>
      </View>
      <View style={styles.stat}>
        <Text style={styles.statNumber}>{following || 0}</Text>
        <Text style={styles.statLabel}>Following</Text>
      </View>
      <View style={styles.stat}>
        <Text style={styles.statNumber}>{posts || 0}</Text>
        <Text style={styles.statLabel}>Posts</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    ...Typography.headline3,
    color: Colors.black,
  },
  statLabel: {
    ...Typography.bodySmall,
    color: Colors.gray,
  },
});

export default ProfileStats;