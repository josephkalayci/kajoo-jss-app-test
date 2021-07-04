import React from 'react'
import { Image, Header, Paragraph } from '../../lib/bundle_sitecore.js'
import PropTypes from 'prop-types'

import './ss.css'

const Ss = (props) => {
  return (
    <div className="ss-container">
      <Image field={props.fields.image_1} className="ss-image"></Image>
      <div className="ss-container1">
        <Header field={props.fields.header_0} className="ss-header"></Header>
        <Paragraph field={props.fields.paragraph_2} className="ss-paragraph"></Paragraph>
      </div>
    </div>
  )
}

Ss.defaultProps = {
  'fields.header_0': 'text',
  fields: {},
  'fields.image_1': 'src',
  'fields.paragraph_2': 'text',
}

Ss.propTypes = {
  'fields.header_0': PropTypes.string,
  fields: PropTypes.object,
  'fields.image_1': PropTypes.object,
  'fields.paragraph_2': PropTypes.string,
}

export default Ss
