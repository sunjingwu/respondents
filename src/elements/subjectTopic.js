import React from 'react'

/**
 * 主观题 component.
 *
 * @type {Component}
 */

class SubjectTopic extends React.Component {

  /**
   * Render.
   *
   * @return {Element}
   */

  render() {
    return (
      <div {...this.props.attributes}>
        {this.renderVideo()}
      </div>
    )
  }

  /**
   * Render the Youtube iframe, responsively.
   *
   * @return {Element}
   */

  renderVideo = () => {
    const { node, isSelected } = this.props
    const video = node.data.get('video')

    const wrapperStyle = {
      position: 'relative',
      outline: isSelected ? '2px solid blue' : 'none',
    }

    const maskStyle = {
      display: isSelected ? 'none' : 'block',
      position: 'absolute',
      top: '0',
      left: '0',
      height: '100%',
      width: '100%',
      cursor: 'cell',
      zIndex: 1,
    }

    const iframeStyle = {
      display: 'block',
    }

    return (
      <div style={wrapperStyle}>
        <div style={maskStyle} />

        <table style={iframeStyle}>
          <tbody>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>{video}</td>
          </tr>
          <tr>
            {this.children}
          </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

/**
 * Export.
 */

export default SubjectTopic
