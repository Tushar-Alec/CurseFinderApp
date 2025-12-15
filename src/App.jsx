// src/App.jsx
import React, { useState, useMemo } from 'react';
import { courses } from './data';
import SearchBar from './components/SearchBar';
import CourseList from './components/CourseList';
import './App.css'; 
import QuoteDisplay from './components/QuoteDisplay'; 

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = useMemo(() => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    return courses.filter(course =>
      course.name.toLowerCase().includes(lowerCaseSearchTerm) ||
      course.category.toLowerCase().includes(lowerCaseSearchTerm)
    );
  }, [searchTerm]);

  return (
    <div className="App">
      <h1>Course Finder</h1>
       <QuoteDisplay />
      <SearchBar onSearchChange={setSearchTerm} />
      <CourseList courses={filteredCourses} />
    </div>
  );
}

export default App;