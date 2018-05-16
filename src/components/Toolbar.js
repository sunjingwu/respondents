
import React, {Component} from 'react';

import imageExtensions from 'image-extensions'

import './Toolbar.css'
/**
 * Define the default node type.
 *
 * @type {String}
 */

const DEFAULT_NODE = 'paragraph'

/**
 * Define hotkey matchers.
 *
 * @type {Function}
 */

/*
 * A function to determine whether a URL has an image extension.
 *
 * @param {String} url
 * @return {Boolean}
 */

function isImage(url) {
  return !!imageExtensions.find(url.endsWith)
}

/**
 * A change function to standardize inserting images.
 *
 * @param {Change} change
 * @param {String} src
 * @param {Range} target
 */

function insertImage(change, src, target) {
  if (target) {
    change.select(target)
  }

  change.insertBlock({
    type: 'image',
    isVoid: true,
    data: { src },
  })
}


function insertDiv(change, src, target) {
  if (target) {
    change.select(target)
  }

  change.insertBlock({
    isVoid: true,
    type: 'study-no'
  })
}


/**
 * Toolbar button component.
 *
 * @type {Function}
 */

const ToolbarButton = props => (
  <span className="button" onMouseDown={props.onMouseDown}>
    <span className="material-icons">{props.icon}</span>
  </span>
)

class Toolbar extends Component{


  onChange = ({value}) => {
    this.props.editorChange({value});
  }


  /**
   * On redo in history.
   *
   */

  onClickRedo = event => {
    event.preventDefault()
    const { value } = this.props.state
    const change = value.change().redo()
    this.onChange(change)
  }

  /**
   * On undo in history.
   *
   */

  onClickUndo = event => {
    event.preventDefault()
    const { value } = this.props.state
    const change = value.change().undo()
    this.onChange(change)
  }

  /**
   * When a mark button is clicked, toggle the current mark.
   *
   * @param {Event} event
   * @param {String} type
   */

  onClickMark = (event, type) => {
    event.preventDefault()
    const { value } = this.props.state
    const change = value.change().toggleMark(type)
    this.onChange(change)
  }

  /**
   * When a block button is clicked, toggle the block type.
   *
   * @param {Event} event
   * @param {String} type
   */

  onClickBlock = (event, type) => {
    event.preventDefault()
    const { value } = this.props.state
    const change = value.change()
    const { document } = value

    // Handle everything but list buttons.
    if (type != 'bulleted-list' && type != 'numbered-list') {
      const isActive = this.hasBlock(type)
      const isList = this.hasBlock('list-item')

      if (isList) {
        change
          .setBlocks(isActive ? DEFAULT_NODE : type)
          .unwrapBlock('bulleted-list')
          .unwrapBlock('numbered-list')
      } else {
        change.setBlocks(isActive ? DEFAULT_NODE : type)
      }
    } else {
      // Handle the extra wrapping required for list buttons.
      const isList = this.hasBlock('list-item')
      const isType = value.blocks.some(block => {
        return !!document.getClosest(block.key, parent => parent.type == type)
      })

      if (isList && isType) {
        change
          .setBlocks(DEFAULT_NODE)
          .unwrapBlock('bulleted-list')
          .unwrapBlock('numbered-list')
      } else if (isList) {
        change
          .unwrapBlock(
            type == 'bulleted-list' ? 'numbered-list' : 'bulleted-list'
          )
          .wrapBlock(type)
      } else {
        change.setBlocks('list-item').wrapBlock(type)
      }
    }

    this.onChange(change)
  }


  /**
   * On clicking the image button, prompt for an image and insert it.
   *
   * @param {Event} event
   */

  onClickImage = event => {
    event.preventDefault()
    const src = window.prompt('Enter the URL of the image:')
    if (!src) return

    const change = this.props.state.value.change().call(insertImage, src)

    this.onChange(change)
  }


  onClickDiv = event => {
    event.preventDefault()


    const change = this.props.state.value.change().call(insertDiv, 'a')

    this.onChange(change)
  }

  /**
   * Check if the current selection has a mark with `type` in it.
   *
   * @param {String} type
   * @return {Boolean}
   */

  hasMark = type => {
    const { value } = this.props.state
    return value.activeMarks.some(mark => mark.type == type)
  }

  /**
   * Check if the any of the currently selected blocks are of `type`.
   *
   * @param {String} type
   * @return {Boolean}
   */

  hasBlock = type => {
    const { value } = this.props.state
    return value.blocks.some(node => node.type == type)
  }


  render() {
    const { value } = this.props.state
    return (
      <div className="menu toolbar-menu">
        {this.renderMarkButton('bold', 'format_bold')}
        {this.renderMarkButton('italic', 'format_italic')}
        {this.renderMarkButton('underlined', 'format_underlined')}
        {this.renderMarkButton('strikethrough', 'format_strikethrough')}
        {this.renderMarkButton('code', 'code')}

        {this.renderImgButton()}
        {this.renderDivButton()}

        {this.renderBlockButton('heading-one', 'looks_one')}
        {this.renderBlockButton('heading-two', 'looks_two')}
        {this.renderBlockButton('block-quote', 'format_quote')}
        {this.renderBlockButton('numbered-list', 'format_list_numbered')}
        {this.renderBlockButton('bulleted-list', 'format_list_bulleted')}


        <ToolbarButton icon="undo" onMouseDown={this.onClickUndo} />
        <ToolbarButton icon="redo" onMouseDown={this.onClickRedo} />
        <span className="button">Undos: {value.history.undos.size}</span>
        <span className="button">Redos: {value.history.redos.size}</span>
      </div>
    )
  }


  /**
   * Render a mark-toggling toolbar button.
   *
   * @param {String} type
   * @param {String} icon
   * @return {Element}
   */

  renderMarkButton = (type, icon) => {
    const isActive = this.hasMark(type)
    const onMouseDown = event => this.onClickMark(event, type)

    return (
      // eslint-disable-next-line react/jsx-no-bind
      <span className="button" onMouseDown={onMouseDown} data-active={isActive}>
        <span className="material-icons">{icon}</span>
      </span>
    )
  }

  /**
   * Render a block-toggling toolbar button.
   *
   * @param {String} type
   * @param {String} icon
   * @return {Element}
   */

  renderBlockButton = (type, icon) => {
    const isActive = this.hasBlock(type)
    const onMouseDown = event => this.onClickBlock(event, type)

    return (
      // eslint-disable-next-line react/jsx-no-bind
      <span className="button" onMouseDown={onMouseDown} data-active={isActive}>
        <span className="material-icons">{icon}</span>
      </span>
    )
  }

  /**
   * Render the toolbar.
   *
   * @return {Element} element
   */

  renderImgButton = () => {
    return (
      <div className="menu toolbar-menu">
        <span className="button" onMouseDown={this.onClickImage}>
          <span className="material-icons">image</span>
        </span>
      </div>
    )
  }

  renderDivButton = () => {
    return (
      <div className="menu toolbar-menu">
        <span className="button" onMouseDown={this.onClickDiv}>
          <span className="material-icons">image</span>
        </span>
      </div>
    )
  }
}

export default Toolbar;