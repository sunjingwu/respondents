import React from "react";


export default function PageHeader(options) {
  return {


    renderNode(props) {
      const { children, node} = props
      switch (node.type) {
        case 'pageHeader':

          const headStyle = {
            top:'0',
            position: 'absolute'
          }

          return (
            <div className="pageHeader" style={headStyle}>{children}</div>
          )
      }
    }
  }
}