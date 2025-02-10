import React, { createContext, useContext } from 'react';

interface SearchContextState {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const SearchContext = createContext<SearchContextState>(null);

export const useSearchContext = () => {
  const context = useContext(SearchContext);

  if (context === null) {
    throw new Error('useSearchContext must be used within a SearchContext provider.');
  }

  return context;
};