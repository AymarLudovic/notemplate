import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator, ScreenOptions } from "react-navigation-stack";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "styled-components";
import FeedScreen from "../screens/FeedScreen";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SearchScreen from "../screens/SearchScreen";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import { theme } from "../styles/theme";

// Navigation Types
type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  Home: undefined;
  Search: undefined;
  Feed: undefined;
  Profile: undefined;
};

// Navigation Options
const defaultNavigationOptions: ScreenOptions = {
  headerStyle: {
    backgroundColor: theme.colors.black,
  },
  headerTintColor: theme.colors.white,
  headerBackTitle: null,
};

// Stack Navigator
const AppStackNavigator = createStackNavigator<RootStackParamList>(
  {
    SignIn: { screen: SignInScreen },
    SignUp: { screen: SignUpScreen },
    Home: { screen: HomeScreen },
    Search: { screen: SearchScreen },
    Feed: { screen: FeedScreen },
    Profile: { screen: ProfileScreen },
  },
  {
    defaultNavigationOptions,
  }
);

// Root Navigator
const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      App: AppStackNavigator,
      Auth: createStackNavigator({ SignIn: { screen: SignInScreen }, SignUp: { screen: SignUpScreen } }),
    },
    {
      initialRouteName: "Auth",
    }
  )
);

// Main App
export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <AppContainer />
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}