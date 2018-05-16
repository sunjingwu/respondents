import React from "react";


export default function PageFooter(options) {
  return {


    renderNode(props) {
      const { children, node} = props
      switch (node.type) {
        case 'pageFooter':
          const footStyle = {
            bottom:'0',
            position: 'absolute'
          }
          return (
            <div className="pageFooter" style={footStyle}>{children}</div>
          )
      }
    }
  }
}