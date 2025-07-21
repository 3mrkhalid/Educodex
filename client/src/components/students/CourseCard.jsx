import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { AppContext } from '../../context/AppContext'
import { Link } from "react-router-dom";

const CourseCard = ({course}) => {

  const {currency , calculateRating} = useContext(AppContext)


  return (
    <Link
      to={"/course/" + course._id}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="course-card_all"
    >
      <img className="course-thumbnail" src={course.courseThumbnail} alt="" />
      <div className="course-card">
        <h3 className="course-title">{course.courseTitle}</h3>
        <p className="educator-name">{course.educator.name}</p>

        <div className="course-rating">
          <p>{calculateRating(course)}</p>
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <img key={i} src={i < Math.floor(calculateRating(course)) ? assets.star : assets.star_blank} alt="" className="star-icon" />
            ))}
          </div>
          <p className="rating-count">{course.courseRatings.length}</p>
        </div>

        <p className="course-price">
          {currency}
          {(
            course.coursePrice -
            (course.discount * course.coursePrice) / 100
          ).toFixed(2)}
        </p>
      </div>
    </Link>
  );}

export default CourseCard
