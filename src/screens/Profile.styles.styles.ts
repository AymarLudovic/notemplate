

```jsx
import { StyleSheet } from 'react-native';

// Layout styles
const layoutStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerLeft: {
    flex: 1,
  },
  headerRight: {
    flex: 1,
    alignItems: 'flex-end',
  },
  body: {
    flex: 1,
    marginTop: 20,
  },
});

// Color styles
const colorStyles = StyleSheet.create({
  primary: {
    color: '#000',
  },
  secondary: {
    color: '#888',
  },
});

// Typography styles
const typographyStyles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subheading: {
    fontSize: 18,
    fontWeight: 'normal',
  },
  bodyText: {
    fontSize: 14,
  },
});

// Spacing styles
const spacingStyles = StyleSheet.create({
  sm: {
    marginBottom: 10,
  },
  md: {
    marginBottom: 20,
  },
  lg: {
    marginBottom: 30,
  },
});

// Combine all styles
export const ProfileStyles = {
  ...layoutStyles,
  ...colorStyles,
  ...typographyStyles,
  ...spacingStyles,
};
```

