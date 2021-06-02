import React from 'react'
import { Image, Header, Paragraph } from '../../lib/bundle_sitecore.js'
import PropTypes from 'prop-types'

import './yusuf_kalayci_tt.css'

const YusufKalayciTt = (props) => {
  return (
    <div className="yusuf_kalayci_tt-container">
      <Image field={props.fields.image_1} className="yusuf_kalayci_tt-image"></Image>
      <div className="yusuf_kalayci_tt-container1">
        <Header field={props.fields.header_0} className="yusuf_kalayci_tt-header"></Header>
        <Paragraph
          field={props.fields.paragraph_2}
          className="yusuf_kalayci_tt-paragraph"
        ></Paragraph>
      </div>
    </div>
  )
}

YusufKalayciTt.defaultProps = {
  'fields.header_0': 'text',
  fields: {},
  'fields.image_1': 'src',
  'fields.paragraph_2': 'text',
}

YusufKalayciTt.propTypes = {
  'fields.header_0': PropTypes.string,
  fields: PropTypes.object,
  'fields.image_1': PropTypes.object,
  'fields.paragraph_2': PropTypes.string,
}

export default YusufKalayciTt
