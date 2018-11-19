import React from 'react'
import PropTypes from 'prop-types'
import { ProjectTemplate } from '../../templates/project-page'

const ProjectPagePreview = ({ entry, widgetFor }) => (
  <ProjectTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    title={entry.getIn(['data', 'title'])}
  />
)

ProjectPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ProjectPagePreview
