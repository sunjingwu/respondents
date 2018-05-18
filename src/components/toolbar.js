import React, {Component} from 'react';

import imageExtensions from 'image-extensions'
import Html from 'slate-html-serializer'

import './toolbar.css'
import rules from '../schemas/rules'

const html = new Html({ rules })
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

  constructor(props) {
    super(props);
    this.state = this.props.state;
  }

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps);
  }

  onChange = ({value}) => {
    this.props.editorChange({value});
  }

  /**
   * On redo in history.
   *
   */

  onClickRedo = event => {
    event.preventDefault()
    const { value } = this.state
    const change = value.change().redo()
    this.onChange(change)
  }

  /**
   * On undo in history.
   *
   */

  onClickUndo = event => {
    event.preventDefault()
    const { value } = this.state
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
    const { value } = this.state
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
    const { value } = this.state
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

    if(!isImage(src)) return


    const change = this.state.value.change().call(insertImage, src)

    this.onChange(change)
  }


  onClickSave = (value,event) => {

    const content = JSON.stringify(value.toJSON())
    localStorage.setItem('content', content)


    /* 获取页面上的html
    const string = html.serialize(value)
    localStorage.setItem('html', string)*/

    let htmlStr = "";
    const pages = document.getElementsByClassName("page");
    let pageLength = pages.length;
    for(let i = 0; i < pageLength; i++){
      htmlStr += pages[i].outerHTML;
    }

    //添加HTML文档头部
    localStorage.setItem('html', htmlStr)

    //TODO 获取所有元素，获取对应位置信息
    for(let i = 0; i < pageLength; i++){
      const pg = pages[i];
      const studyNo = pg.getElementsByClassName("studyNo");
    }


    this.state.location;


    alert("保存成功！")
  }

  /**
   * Check if the current selection has a mark with `type` in it.
   *
   * @param {String} type
   * @return {Boolean}
   */

  hasMark = type => {
    const { value } = this.state
    return value.activeMarks.some(mark => mark.type == type)
  }

  /**
   * Check if the any of the currently selected blocks are of `type`.
   *
   * @param {String} type
   * @return {Boolean}
   */

  hasBlock = type => {
    const { value } = this.state
    return value.blocks.some(node => node.type == type)
  }


  render() {
    const { value } = this.state
    return (
      <div className="menu toolbar-menu">
        {this.renderMarkButton('bold', 'format_bold')}
        {this.renderMarkButton('italic', 'format_italic')}
        {this.renderMarkButton('underlined', 'format_underlined')}
        {this.renderMarkButton('strikethrough', 'format_strikethrough')}
        {this.renderMarkButton('code', 'code')}

        {this.renderImgButton()}
        {this.renderSaveButton()}

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

  renderSaveButton = () => {
    return (
      <div className="menu toolbar-menu">
        <span className="button" onMouseDown={this.onClickSave.bind(this,this.state.value)}>
          <span className="material-icons">save</span>
        </span>
      </div>
    )
  }

}

export default Toolbar;