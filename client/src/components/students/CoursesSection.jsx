import React, { useCallback, useContext } from 'react'
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import CourseCard from './CourseCard';

const CoursesSection = () => {

  const {allCourses} = useContext(AppContext);

  return (
    <div className="section-padding">
      <h2 class="education-heading">Education crafted by professionals</h2>
      <p className="course-description">
        Explore our highest-rated courses across diverse fields — from coding
        and design to business and wellness. Each course is expertly crafted to
        help you achieve real, measurable results.
      </p>

      <div className="courses-grid">
        {allCourses.slice(0, 4).map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>

      <Link
        to="/course-list"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="course-link"
      >
        Explore All Courses
      </Link>
    </div>
  );
}

export default CoursesSection
