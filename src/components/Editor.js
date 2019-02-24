import React from 'react';
import CodeMirror from 'react-codemirror';
import '../styles/Editor.css'

require('codemirror/lib/codemirror.css');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/python/python');
require('codemirror/mode/xml/xml');
require('codemirror/mode/markdown/markdown');
require('codemirror/theme/monokai.css');
require('codemirror/theme/solarized.css');
require('codemirror/theme/3024-night.css');

class Editor extends React.Component {

  render() {
    var options = {
      mode: 'markdown',
      theme: 'solarized light',
    }

    return (
      <CodeMirror value={this.props.value} options={options} onChange={(value) => this.props.onChange(value)} />
    );
  }
};

export default Editor;