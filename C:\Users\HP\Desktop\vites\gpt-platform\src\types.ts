interface InstagramCloneApp {
  pages: {
    feed: FeedPage;
    profile: ProfilePage;
    search: SearchPage;
    notifications: NotificationsPage;
    messages: MessagesPage;
  };
  features: {
    postCreation: PostCreationFeature;
    storyCreation: StoryCreationFeature;
    directMessaging: DirectMessagingFeature;
    notifications: NotificationsFeature;
    search: SearchFeature;
  };
  design: {
    theme: Theme;
    layout: Layout;
    typography: Typography;
    icons: IconSet;
  };
}

interface FeedPage {
  timeline: FeedTimeline;
  filters: FeedFilters;
  actions: FeedActions;
}

interface ProfilePage {
  profileHeader: ProfileHeader;
  profileInfo: ProfileInfo;
  profilePosts: ProfilePosts;
  profileFollowers: ProfileFollowers;
  profileFollowing: ProfileFollowing;
  actions: ProfileActions;
}

interface SearchPage {
  searchInput: SearchInput;
  searchResults: SearchResults;
  trendingSearches: TrendingSearches;
}

interface NotificationsPage {
  notificationsList: NotificationsList;
  notificationsSettings: NotificationsSettings;
  actions: NotificationActions;
}

interface MessagesPage {
  chatList: ChatList;
  chatView: ChatView;
  chatActions: ChatActions;
}

interface FeedTimeline {
  posts: Post[];
  loadNewPosts: () => void;
  loadMorePosts: () => void;
  refreshPosts: () => void;
}

interface FeedFilters {
  activeFilter: Filter;
  filters: Filter[];
  updateActiveFilter: (filter: Filter) => void;
}

interface FeedActions {
  likePost: (post: Post) => void;
  commentOnPost: (post: Post) => void;
  sharePost: (post: Post) => void;
  savePost: (post: Post) => void;
}

interface ProfileHeader {
  profilePicture: string;
  username: string;
  fullName: string;
  bio: string;
  website: string;
  actions: ProfileHeaderActions;
}

interface ProfileInfo {
  followersCount: number;
  followingCount: number;
  postsCount: number;
}

interface ProfilePosts {
  posts: Post[];
  loadNewPosts: () => void;
  loadMorePosts: () => void;
  refreshPosts: () => void;
  gridMode: boolean;
  toggleGridMode: () => void;
}

interface ProfileFollowers {
  followers: User[];
  loadNewFollowers: () => void;
  loadMoreFollowers: () => void;
  refreshFollowers: () => void;
}

interface ProfileFollowing {
  following: User[];
  loadNewFollowing: () => void;
  loadMoreFollowing: () => void;
  refreshFollowing: () => void;
}

interface ProfileActions {
  follow: () => void;
  unfollow: () => void;
  editProfile: () => void;
}

interface SearchInput {
  query: string;
  setQuery: (query: string) => void;
}

interface SearchResults {
  users: User[];
  posts: Post[];
  hashtags: Hashtag[];
}

interface TrendingSearches {
  trendingSearches: string[];
}

interface NotificationsList {
  notifications: Notification[];
  loadNewNotifications: () => void;
  loadMoreNotifications: () => void;
  refreshNotifications: () => void;
}

interface NotificationsSettings {
  notificationTypes: NotificationType[];
  notificationSettings: NotificationSetting[];
  updateNotificationSettings: (notificationSettings: NotificationSetting[]) => void;
}

interface NotificationActions {
  markAllAsRead: () => void;
  deleteNotification: (notification: Notification) => void;
}

interface ChatList {
  chats: Chat[];
  loadNewChats: () => void;
  loadMoreChats: () => void;
  refreshChats: () => void;
}

interface ChatView {
  messages: Message[];
  loadNewMessages: () => void;
  loadMoreMessages: () => void;
  refreshMessages: () => void;
  sendMessage: (message: Message) => void;
}

interface ChatActions {
  startChat: (user: User) => void;
  deleteChat: (chat: Chat) => void;
  muteChat: (chat: Chat) => void;
  unmuteChat: (chat: Chat) => void;
  archiveChat: (chat: Chat) => void;
}

interface Post {
  id: string;
  author: User;
  caption: string;
  image: string;
  likesCount: number;
  commentsCount: number;
  hashtags: Hashtag[];
  createdAt: Date;
  updatedAt: Date;
}

interface User {
  id: string;
  username: string;
  fullName: string;
  profilePicture: string;
}

interface Filter {
  id: string;
  name: string;
}

interface NotificationType {
  id: string;
  name: string;
}

interface NotificationSetting {
  id: string;
  notificationTypeId: string;
  enabled: boolean;
}

interface Notification {
  id: string;
  type: NotificationType;
  message: string;
  createdAt: Date;
  updatedAt: Date;
}

interface Chat {
  id: string;
  users: User[];
  messages: Message[];
  createdAt: Date;
  updatedAt: Date;
}

interface Message {
  id: string;
  author: User;
  content: string;
  sentAt: Date;
  receivedAt: Date;
}

interface Hashtag {
  id: string;
  name: string;
}

interface Theme {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
  };
}

interface Layout {
  headerHeight: number;
  footerHeight: number;
  contentWidth: number;
  contentMargin: number;
}

interface Typography {
  fonts: {
    heading: string;
    body: string;
  };
}

interface IconSet {
  icons: {
    heart: string;
    comment: string;
    share: string;
    save: string;
    follow: string;
    unfollow: string;
    search: string;
    bell: string;
    message: string;
  };
}