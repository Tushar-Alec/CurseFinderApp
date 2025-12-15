
import React from 'react';

function CourseCard({ course }) {
  return (
    <div className="course-card">
      <h3>{course.name}</h3>
      <p>Category: <strong>{course.category}</strong></p>
      <p>Duration: {course.duration}</p>
      <p>Instructor: {course.instructor}</p>
    </div>
  );
}

export default CourseCard;