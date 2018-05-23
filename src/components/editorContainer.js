import React, {Component} from 'react'
import {isKeyHotkey} from 'is-hotkey'
import {Layout} from 'antd/lib/index'
import plugins from '../plugins/plugin'
import {Editor} from 'slate-react'
import PaperFace from "../elements/paperFace";
import LocatePoint from "../elements/locatePoint";
import SheetHeader from "../elements/sheetHeader";
import SubjectTopic from "../elements/subjectTopic";
import PageContent from "../elements/pageContent";
import * as PubSub from "pubsub-js";

const {Content} = Layout;
const isBoldHotkey = isKeyHotkey('mod+b')
const isItalicHotkey = isKeyHotkey('mod+i')
const isUnderlinedHotkey = isKeyHotkey('mod+u')
const isCodeHotkey = isKeyHotkey('mod+`')

class EditorContainer extends Component{


  /**
   * Render a Slate node.
   *
   * @param {Object} props
   * @return {Element}
   */

  renderNode = props => {
    const { attributes, children, node, isSelected } = props
    switch (node.type) {
      case 'sheetHeader':
        return <SheetHeader {...props}>{children}</SheetHeader>
      case 'subjectTopic':
        return <SubjectTopic {...props}>{children}</SubjectTopic>
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
        const titleStyle = {
          textAlign: "center"
        }
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
      case 'page':
        return <PaperFace {...props} >{children}</PaperFace>
      case 'pageContent':
        return <PageContent {...props} >{children}</PageContent>
      case 'pageHeader':
        const headStyle = {
          top:'10px',
          position: 'absolute',
          textAlign: 'center',
          width: '100%'
        }
        return (
          <div className="pageHeader" style={headStyle}>{children}</div>
        )
      case 'pageFooter':
        const footStyle = {
          bottom:'10px',
          position: 'absolute',
          textAlign: 'center',
          width: '100%'
        }
        return (
          <div className="pageFooter" style={footStyle}>{children}</div>
        )
      case 'locatePoint':
        return <LocatePoint {...props} >{children}</LocatePoint>
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


  onChange = (change) => {

    this.props.editorChange(change);
  }

  render() {
    const containerStyle = {
      "backgroundColor": "rgba(154, 154, 154, 0.33)",
      "margin": "0"
    }

    return (
      <Content className="container" style={containerStyle}>
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
      </Content>
    )
  }

}

export default EditorContainer;