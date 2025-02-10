import { useContext } from 'react';
import { SearchContext } from '../contexts/search';
import SearchStyles from './Search.styles';
import { SearchTypes } from '../types';
import { Button, FlatList, Text, TextInput, View } from 'react-native';

const Search: React.FunctionComponent = () => {
  const { searchResults, setSearchResults } = useContext(SearchContext);

  const search = (keyword: string) => {
    // Logic to search for users
  };

  const renderItem = ({ item }: { item: SearchTypes.SearchResult }) => {
    return (
      <View style={SearchStyles.itemContainer}>
        <Text style={SearchStyles.itemText}>{item.username}</Text>
      </View>
    );
  };

  return (
    <View style={SearchStyles.container}>
      <TextInput style={SearchStyles.input} onChangeText={search} placeholder="Search" />
      <FlatList
        data={searchResults}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Search;