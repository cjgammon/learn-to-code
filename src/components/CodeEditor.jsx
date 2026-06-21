import CodeMirror from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { basicLight } from '@uiw/codemirror-theme-basic'

// A real code editor (CodeMirror 6) with JavaScript syntax highlighting and a
// light, friendly theme. Big readable font is set via CSS (.cm-editor).

export default function CodeEditor({ value, onChange }) {
  return (
    <div className="editor">
      <CodeMirror
        value={value}
        height="220px"
        theme={basicLight}
        extensions={[javascript()]}
        onChange={onChange}
        basicSetup={{
          lineNumbers: true,
          highlightActiveLine: true,
          foldGutter: false,
          autocompletion: false,
        }}
      />
    </div>
  )
}
