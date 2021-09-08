import React from 'react';
import SearchBar from '../components/SearchBar';
import Questions from '../components/Questions';
import Header from '../components/Header';


export default function Explore() {
  return (
    <div className="container">
      <SearchBar/>
      <Header text="Trending Questions"/>
      <Questions/>
      <Questions/>
      <Questions/>
      <Questions/>
    </div>
  );
}
