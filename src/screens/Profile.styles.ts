

```javascript
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileImage: {
    width: width * 0.3,
    height: width * 0.3,
    borderRadius: width * 0.3 / 2,
    alignSelf: 'center',
    marginTop: height * 0.1,
  },
  profileInfo: {
    marginTop: height * 0.05,
    alignItems: 'center',
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  profileUsername: {
    fontSize: 16,
    color: '#666',
  },
  profileBio: {
    marginTop: height * 0.02,
    fontSize: 14,
    color: '#444',
    textAlign: 'center',
    width: width * 0.8,
  },
  profileStats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: height * 0.05,
  },
  profileStat: {
    alignItems: 'center',
  },
  profileStatNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  profileStatLabel: {
    fontSize: 12,
    color: '#666',
  },
  profileEditButton: {
    marginTop: height * 0.05,
    alignSelf: 'center',
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 5,
  },
  profileEditButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default styles;
```

