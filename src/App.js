import React from 'react';
import './App.css';
import data from './data';
import MovieList from './component/Movies/List';

const App = props => <MovieList data={data}/>;
export default App;
