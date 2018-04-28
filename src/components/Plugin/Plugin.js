
import React from 'react'
import CollapseOnEscape from 'slate-collapse-on-escape'
import SoftBreak from 'slate-soft-break'



/**
 * A simple word count plugin.
 *
 * @param {Object} options
 * @return {Object}
 */

function WordCount(options) {
  return {
    renderEditor(props) {
      return (
        <div>
          <div>{props.children}</div>
          <span className="word-counter">
            Word Count: {props.value.document.text.split(' ').length}
          </span>
        </div>
      )
    },
  }
}

/**
 * Plugins.
 */

const plugins = [CollapseOnEscape(), SoftBreak(), WordCount()]

export default plugins;