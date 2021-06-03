import React from 'react'
import { Image, Header, Paragraph } from '../../lib/bundle_sitecore.js'
import PropTypes from 'prop-types'

import './yusuf_kalayci_yy.css'

const YusufKalayciYy = (props) => {
  return (
    <div className="yusuf_kalayci_yy-container">
      <Image field={props.fields.image_1} className="yusuf_kalayci_yy-image"></Image>
      <div className="yusuf_kalayci_yy-container1">
        <Header field={props.fields.header_0} className="yusuf_kalayci_yy-header"></Header>
        <Paragraph
          field={props.fields.paragraph_2}
          className="yusuf_kalayci_yy-paragraph"
        ></Paragraph>
      </div>
    </div>
  )
}

YusufKalayciYy.defaultProps = {
  'fields.header_0': 'text',
  fields: {},
  'fields.image_1': 'src',
  'fields.paragraph_2': 'text',
}

YusufKalayciYy.propTypes = {
  'fields.header_0': PropTypes.string,
  fields: PropTypes.object,
  'fields.image_1': PropTypes.object,
  'fields.paragraph_2': PropTypes.string,
}

export default YusufKalayciYy
