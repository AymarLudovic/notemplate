import { View, Text, FlatList } from 'react-native';
import { Post } from './Post';
import styles from './styles';

type PostType = {
  id: string;
  user: string;
  caption: string;
  image: string;
  likes: number;
  comments: number;
};

const Posts: React.FC<{ posts: PostType[] }> = ({ posts }) => {
  return (
    <View style={styles.posts}>
      <FlatList
        data={posts}
        renderItem={({ item }) => <Post post={item} />}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Posts;