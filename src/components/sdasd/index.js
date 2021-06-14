import React from 'react'
import { Image, Header, Paragraph } from '../../lib/bundle_sitecore.js'
import PropTypes from 'prop-types'

import './sdasd.css'

const Sdasd = (props) => {
  return (
    <div className="sdasd-container">
      <Image field={props.fields.image_1} className="sdasd-image"></Image>
      <div className="sdasd-container1">
        <Header field={props.fields.header_0} className="sdasd-header"></Header>
        <Paragraph field={props.fields.paragraph_2} className="sdasd-paragraph"></Paragraph>
      </div>
    </div>
  )
}

Sdasd.defaultProps = {
  'fields.header_0': 'text',
  fields: {},
  'fields.image_1': 'src',
  'fields.paragraph_2': 'text',
}

Sdasd.propTypes = {
  'fields.header_0': PropTypes.string,
  fields: PropTypes.object,
  'fields.image_1': PropTypes.object,
  'fields.paragraph_2': PropTypes.string,
}

export default Sdasd
