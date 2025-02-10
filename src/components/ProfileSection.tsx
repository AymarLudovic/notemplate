import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

interface ProfileSectionProps {
  username: string;
  profilePicture: string;
  fullName: string;
  bio: string;
  followers: number;
  following: number;
  posts: number;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({
  username,
  profilePicture,
  fullName,
  bio,
  followers,
  following,
  posts,
}) => {
  return (
    <View style={styles.profileSectionContainer}>
      <Image style={styles.profilePicture} source={{ uri: profilePicture }} />
      <View style={styles.profileInfoContainer}>
        <Text style={styles.username}>{username}</Text>
        <Text style={styles.fullName}>{fullName}</Text>
        <Text style={styles.bio}>{bio}</Text>
        <View style={styles.statsContainer}>
          <Text style={styles.stat}>{followers} Followers</Text>
          <Text style={styles.stat}>{following} Following</Text>
          <Text style={styles.stat}>{posts} Posts</Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileSection;