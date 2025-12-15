
import React from 'react';
import CourseCard from './CourseCard';

function CourseList({ courses }) {
  if (courses.length === 0) {
    return <p>No courses found matching your search criteria.</p>;
  }

  return (
    <div className="course-list-container">
      {courses.map(course => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}

export default CourseList;