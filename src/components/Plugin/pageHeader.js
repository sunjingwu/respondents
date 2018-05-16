


export default function PageHeader(options) {
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