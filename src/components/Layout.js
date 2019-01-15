import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import './all.sass'

const TemplateWrapper = ({ children, style }) => (
  <div>
    <Helmet title="Ufficio Misteri" />
    <Navbar />
    <div className={`main-container ${style}`}>{children}</div>
  </div>
)

export default TemplateWrapper
