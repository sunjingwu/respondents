import React from 'react'
import CollapseOnEscape from 'slate-collapse-on-escape'
import LocatePoint from "../elements/locatePoint";
import PageHeader from "./pageHeader";
import PageFooter from "./pageFooter";



/**
 * 生成定位点
 */

function GenLocatePoint(options) {
  return {
    renderNode(props) {
      const { children, node} = props
      switch (node.type) {
        case 'locatePoint':
          return <LocatePoint {...props} >{children}</LocatePoint>
        default:
          return ""
      }
    }
  }
}

/**
 * Plugins.
 */

const plugins = [CollapseOnEscape()]

export default plugins;