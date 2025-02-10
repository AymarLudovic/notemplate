import { useContext, useEffect, useState } from 'react';
import { ProfileContext } from '../contexts/ProfileContext';
import { Post } from '../types';
import ProfileSection from './components/ProfileSection';
import ProfileStats from './components/ProfileStats';
import { ProfileStyles } from './Profile.styles';

const Profile: React.FC = () => {
  const { user, posts, getPosts } = useContext(ProfileContext);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(posts);

  useEffect(() => {
    if (!posts) {
      getPosts();
    } else {
      setFilteredPosts(posts.filter((post) => post.userId === user?.id));
    }
  }, [posts, user?.id, getPosts]);

  return (
    <ProfileStyles.Container>
      <ProfileSection user={user} />
      <ProfileStats posts={filteredPosts} />
    </ProfileStyles.Container>
  );
};

export default Profile;