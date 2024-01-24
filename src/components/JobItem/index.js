import React from 'react'
import {Link} from 'react-router-dom'

const JobItem = props => {
  const {details} = props
  const {
    companyLogoUrl,
    employmentType,
    id,
    jobDescription,
    location,
    packagePerAnnum,
    rating,
    title,
  } = details

  return (
    <Link to={`/jobs/${id}`} className="job-link">
      <li className="jobItems">
        <div className="job-details">
          <div className="company-logo">
            <img src={companyLogoUrl} alt="company logo" />
          </div>
          <div className="title-rating">
            <h1>{title}</h1>
            <p>Rating: {rating}</p>
          </div>
          <div className="location-type">
            <p>{location}</p>
            <p>{employmentType}</p>
          </div>
          <p className="package">{packagePerAnnum}</p>
          <hr />
          <div className="description">
            <p>Description:</p>
            <p>{jobDescription}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default JobItem
