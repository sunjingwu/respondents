



export default function Bold(options) {
  return {
    changes: {
      addBoldMark,
      removeBoldMark,
      toggleBoldMark,
    },
    components: {
      BoldMark,
      BoldButton,
    },
    helpers: {
      hasBoldMark,
    },
    plugins: [
      Hotkey('cmd+b', addBoldMark),
      RenderMark('bold', props => <BoldMark {...props} />),
      RenderButton(props => <BoldButton {...props} />)
    ]
  }
}