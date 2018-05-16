
import React from 'react'
import CollapseOnEscape from 'slate-collapse-on-escape'
import LocatePoint from "../../elements/LocatePoint";



/**
 * A simple word count plugin.
 *
 * @param {Object} options
 * @return {Object}
 */

function GenLocatePoint(options) {
  return {
    renderNode(props) {
      const { children, node} = props
      switch (node.type) {
        case 'locatePoint':
          return <LocatePoint {...props} >{children}</LocatePoint>
      }
    }
  }
}

/**
 * Plugins.
 */

const plugins = [CollapseOnEscape(), GenLocatePoint()]

export default plugins;