import React, {Component} from 'react'
import {isKeyHotkey} from 'is-hotkey'
import {Layout} from 'antd'
import plugins from '../plugins/plugin'
import {Editor} from 'slate-react'
import $ from 'jquery'

import PaperFace from "../elements/paperFace";
import SheetHeader from "../elements/sheetHeader";
import SubjectTopic from "../elements/subjectTopic";
import PageContent from "../elements/pageContent";
import CautionArea from "../elements/cautionArea";
import HandWrite from "../elements/handWrite";
import EditArea from "../elements/editArea";
import ChineseCompositionTopic from "../elements/chineseCompositionTopic";
import ObjectTopic from "../elements/objectTopic";

import '../asset/editor.css'


const isBoldHotkey = isKeyHotkey('mod+b')
const isItalicHotkey = isKeyHotkey('mod+i')
const isUnderlinedHotkey = isKeyHotkey('mod+u')
const isCodeHotkey = isKeyHotkey('mod+`')

class EditorContainer extends Component{

  /*componentWillReceiveProps(nextProps) {
    this.setState(nextProps);
  }*/

  onChange = ({value}) => {
    this.props.editorChange({value});
  }
  /**
   * Render a Slate node.
   *
   * @param {Object} props
   * @return {Element}
   */

  renderNode = props => {
    const { attributes, children, node, isSelected } = props
    switch (node.type) {
      case 'table':
        return (
          <table>
            <tbody {...attributes}>{children}</tbody>
          </table>
        )
      case 'table-row':
        return <tr {...attributes}>{children}</tr>
      case 'table-cell':
        return <td {...attributes}>{children}</td>
      case 'block-quote':
        return <blockquote {...attributes}>{children}</blockquote>
      case 'bulleted-list':
        const ulStyle = { "listStyle": "disc"}
        return <ul style={ulStyle} {...attributes}>{children}</ul>
      case 'heading-one':
        return <h1 style={titleStyle} {...attributes}>{children}</h1>
      case 'heading-two':
        return <h2 {...attributes}>{children}</h2>
      case 'list-item':
        return <li {...attributes}>{children}</li>
      case 'numbered-list':
        const olStyle = { "listStyle": "decimal"}
        return <ol style={olStyle} {...attributes}>{children}</ol>
      case 'image': {
        const src = node.data.get('src')
        const className = isSelected ? 'active' : null
        const style = { display: 'block' }
        return (
          <img src={src} className={className} style={style} {...attributes} />
        )
      }
      case 'sheetTitle':
        const titleStyle = {
          textAlign: "center",
          fontWeight: 'bold'
        }
        //TODO 第二页不可编辑
        return <h1 className={'sheetTitle'} style={titleStyle} {...attributes}>{children}</h1>
      case 'sheetHeader':
        return <SheetHeader {...props}>{children}</SheetHeader>
      case 'handWrite':
        return <HandWrite {...props}>{children}</HandWrite>
      case 'caution':
        return <CautionArea {...props}>{children}</CautionArea>
      case 'subjectTopic':
        return <SubjectTopic {...props}>{children}</SubjectTopic>

      case 'editArea':
        return <EditArea {...props}>{children}</EditArea>

      case 'chineseComposition':
        return <ChineseCompositionTopic {...props}>{children}</ChineseCompositionTopic>

      case 'page':
        return <PaperFace {...props} >{children}</PaperFace>
      case 'pageContent':
        return <PageContent {...props} >{children}</PageContent>

      case 'topicTitle':
        const topicTitleStyle = {
          marginTop: '10px'
        }
        return <div style={topicTitleStyle} {...props} >{children}</div>

      case 'objectTopic':
        return <ObjectTopic {...props} >{children}</ObjectTopic>

      /*case 'pageHeader':
        const headStyle = {
          top:'10px',
          position: 'absolute',
          textAlign: 'center',
          width: '100%'
        }
        return (
          <div {...attributes} contentEditable={false} className="pageHeader" style={headStyle}>
            这是页眉
          </div>
        )
      case 'pageFooter':
        const footStyle = {
          bottom:'10px',
          position: 'absolute',
          textAlign: 'center',
          width: '100%'
        }
        return (
          <div {...attributes} contentEditable={false}  className="pageFooter" style={footStyle}>{children}</div>
        )*/

      // 定位点属于不可编辑内容，可在预览和保存的时候添加，在编辑界面不展示
      /*case 'locatePoint':
        return <LocatePoint {...props} >{children}</LocatePoint>*/
    }
  }

  /**
   * Render a Slate mark.
   *
   * @param {Object} props
   * @return {Element}
   */
  renderMark = props => {
    switch (props.mark.type) {
      case 'bold':
        return <strong>{props.children}</strong>
      // Add our new mark renderers...
      case 'code':
        return <code>{props.children}</code>
      case 'italic':
        return <em>{props.children}</em>
      case 'strikethrough':
        return <del>{props.children}</del>
      case 'underlined':
        return <u>{props.children}</u>
    }
  }

  /**
   * On key down, if it's a formatting command toggle a mark.
   *
   * @param {Event} event
   * @param {Change} change
   * @return {Change}
   */

  onKeyDown = (event, change) => {
    let mark;

    if (isBoldHotkey(event)) {
      mark = 'bold'
    } else if (isItalicHotkey(event)) {
      mark = 'italic'
    } else if (isUnderlinedHotkey(event)) {
      mark = 'underlined'
    } else if (isCodeHotkey(event)) {
      mark = 'code'
    } else {
      return
    }

    event.preventDefault()
    change.toggleMark(mark)
    return true
  }

  updateDimensions() {
    let tH = $(".headerBar").outerHeight()
    this.container.style.height = ( window.innerHeight - tH) + "px";
  }

  componentDidMount(){
    //设置高度满屏：获取视窗高度，减去头部高度
    this.updateDimensions()
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  /**
   * Remove event listener
   */
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  render() {
    const containerStyle = {
      overflowY: 'scroll',
      cursor: "default",
      height: '557px'
    }

    return (
      <div ref={div => { this.container = div}} className="container" style={containerStyle}>
        <Editor
          placeholder="Enter some rich text..."
          value={this.props.state.value}
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
          plugins={plugins}
          renderNode={this.renderNode}
          renderMark={this.renderMark}
          spellCheck
        />
      </div>

    )
  }

}

export default EditorContainer;