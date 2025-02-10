interface InstagramCloneApp {
  name: string;
  description: string;
  features: {
    feed: boolean;
    explore: boolean;
    profile: boolean;
    messages: boolean;
    notifications: boolean;
    stories: boolean;
    igtv: boolean;
    reels: boolean;
    shop: boolean;
  };
  design: {
    theme: string;
    layout: string;
    typography: string;
  };
  pages: {
    home: boolean;
    explore: boolean;
    profile: boolean;
    messages: boolean;
    notifications: boolean;
  };

  component: {
    header: boolean;
    footer: boolean;
    navigation: boolean;
    feed: boolean;
    profile: boolean;
    messages: boolean;
    notifications: boolean;
    stories: boolean;
    igtv: boolean;
    reels: boolean;
    shop: boolean;
  };

  auth: {
    login: boolean;
    signup: boolean;
    forgotPassword: boolean;
  };

  data: {
    users: {
      name: string;
      username: string;
      bio: string;
      profilePicture: string;
      followers: number;
      following: number;
      posts: number;
    }[];
    posts: {
      author: string;
      caption: string;
      media: string;
      likes: number;
      comments: number;
    }[];
    stories: {
      author: string;
      media: string;
      duration: number;
    }[];
    igtv: {
      author: string;
      title: string;
      description: string;
      media: string;
      duration: number;
      likes: number;
      comments: number;
    }[];
    reels: {
      author: string;
      caption: string;
      media: string;
      likes: number;
      comments: number;
    }[];
    shops: {
      name: string;
      description: string;
      products: {
        name: string;
        description: string;
        price: number;
        image: string;
      }[];
    }[];
  };
}