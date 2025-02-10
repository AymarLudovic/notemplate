

```jsx
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // Layout
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  searchContainer: {
    marginHorizontal: 16,
    marginVertical: 10,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputContainer: {
    flex: 1,
    marginRight: 10,
  },
  buttonContainer: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Colors
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    color: '#000000',
    fontSize: 16,
  },
  button: {
    width: 50,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Typography
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#000000',
  },

  // Spacing
  marginHorizontal: 16,
  marginVertical: 10,
});

export default styles;
```

