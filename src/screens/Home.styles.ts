

```javascript
import { StyleSheet } from 'react-native';
import { colors, typography, spacing } from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: spacing.large,
  },
  title: {
    ...typography.title,
    color: colors.text,
  },
  subtitle: {
    ...typography.subtitle,
    color: colors.text,
  },
  body: {
    flex: 1,
    padding: spacing.large,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: spacing.large,
  },
});

export default styles;
```

