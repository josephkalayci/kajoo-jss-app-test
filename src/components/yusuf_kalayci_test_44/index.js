import React from 'react'
import { Image, Header, Paragraph, Label } from '../../lib/bundle_sitecore.js'
import PropTypes from 'prop-types'

import './yusuf_kalayci_test_44.css'

const YusufKalayciTest44 = (props) => {
  return (
    <div className="yusuf_kalayci_test_44-container">
      <div className="yusuf_kalayci_test_44-container1">
        <Image field={props.fields.image_1} className="yusuf_kalayci_test_44-image"></Image>
        <Header field={props.fields.header_0} className="yusuf_kalayci_test_44-header"></Header>
      </div>
      <Paragraph
        field={props.fields.paragraph_2}
        className="yusuf_kalayci_test_44-paragraph"
      ></Paragraph>
      <Label
        field={props.fields.label_1624543253040}
        className="yusuf_kalayci_test_44-label"
      ></Label>
    </div>
  )
}

YusufKalayciTest44.defaultProps = {
  'fields.header_0': 'text',
  fields: {},
  'fields.image_1': 'src',
  'fields.paragraph_2': 'text',
  'fields.label_1624543253040': 'text',
}

YusufKalayciTest44.propTypes = {
  'fields.header_0': PropTypes.string,
  fields: PropTypes.object,
  'fields.image_1': PropTypes.object,
  'fields.paragraph_2': PropTypes.string,
  'fields.label_1624543253040': PropTypes.string,
}

export default YusufKalayciTest44
