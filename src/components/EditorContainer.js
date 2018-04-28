import React, {Component} from 'react'
import {isKeyHotkey} from 'is-hotkey'
import {Layout} from 'antd/lib/index'
import StudyNo from '../elements/StudyNo'
import plugins from './Plugin/Plugin'
import {Editor} from 'slate-react'

import './Container.css'

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
        return <ul {...attributes}>{children}</ul>
      case 'heading-one':
        return <h1 {...attributes}>{children}</h1>
      case 'heading-two':
        return <h2 {...attributes}>{children}</h2>
      case 'list-item':
        return <li {...attributes}>{children}</li>
      case 'numbered-list':
        return <ol {...attributes}>{children}</ol>
      case 'image': {
        const src = node.data.get('src')
        const className = isSelected ? 'active' : null
        const style = { display: 'block' }
        return (
          <img src={src} className={className} style={style} {...attributes} />
        )
      }
      case 'div':{
        return <div>{children}</div>
      }
      case 'my-type':
        return <StudyNo>{children}</StudyNo>
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


  onChange = ({value}) => {
    this.props.editorChange({value});
  }


  render() {
    return (
      <Content className="container">
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