import React, {Component} from 'react';


/**
 * 页面，指一张纸的一面
 */
class PaperFace extends Component {


  render() {
    const { node } = this.props
    const pageWidth = node.data.get('pageWidth')
    const pageHeight = node.data.get('pageHeight')

    const pageStyle = {
      boxShadow: '0 0 0 0.75pt #d1d1d1, 0 0 3pt 0.75pt #ccc',
      position: 'relative',
      backgroundColor: '#fff',
      cursor: 'text',
      margin: '1px auto',
      width: pageWidth+'mm',
      height: pageHeight+'mm'
    }

    return (
      <div className="page" style={pageStyle} {...this.props.attributes}>
        {this.props.children}
      </div>
    )
  }
}


export default PaperFace;