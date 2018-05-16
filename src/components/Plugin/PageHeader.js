


export default function PageHeader(options) {
  return {


    renderNode(props) {
      const { children, node} = props
      switch (node.type) {
        case 'pageHeader':
          return <LocatePoint {...props} >{children}</LocatePoint>
      }
    }
  }
}