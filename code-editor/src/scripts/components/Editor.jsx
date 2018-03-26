import React, { Component } from 'react'
import { render } from 'react-dom';
import brace from 'brace';
import AceEditor from 'react-ace';

// better location for these?
import 'brace/mode/java'
import 'brace/mode/javascript'
import 'brace/theme/github'

const DEFAULT_LANG = 'javascript'
const DEFAULT_THEME = 'github'

class Editor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lang: DEFAULT_LANG,
      theme: DEFAULT_THEME
    }
  }

  onChange(newValue) {
    console.log('change', newValue);
  }

  render() {
    return (
      <AceEditor
        mode={this.state.lang}
        theme={this.state.theme}
        onChange={this.onChange}
        name='editor'
        editorProps={{$blockScrolling: true}}
      />
    )
  }
}

export default Editor
