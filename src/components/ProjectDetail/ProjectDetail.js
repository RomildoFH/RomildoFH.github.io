import React from 'react'
import PropTypes from 'prop-types';
import './style.css';

function ProjectDetail(props) {
  const { project, setShowDetail } = props

  const handleClose = () => {
    setShowDetail(false)
  }

  return (
    <div className="project-detail-background">
      <button className="btn-close" onClick={ handleClose }>X</button>
      <div className="card-details">
        <h4 className="project-title-details">{ project.name }</h4>
        <img src={ project.thumb } alt="pixels-art" className="project-img-details" />
          <p className="project-description-details">{ project.resume }</p>
          <div className="details-button">
            <a className="card-link" href={ project.openLink } target="_blank" rel="noreferrer">Open Project</a>
            <a className="card-link" href={ project.repositoryLink } target="_blank" rel="noreferrer">Repository</a>
          </div>
      </div>
    </div>
  )
}

ProjectDetail.propTypes = {
  project: PropTypes.shape({}),
  setShowDetail: PropTypes.func,
}.isRequired;

export default ProjectDetail