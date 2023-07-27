import { useState } from 'react'
import './App.css'
import { marked } from 'marked';

const defaultMarkdown = "# Welcome to my React Markdown Previewer!\n## This is a subheading\n\nFor this **project** I've learned how to use `dangerouslySetInnerHTML` to make the previewer display the output of [marked.js](https://github.com/markedjs/marked/blob/master/README.md) as HTML instead of a string.\n\nAccording to the React Documentation,\n> dangerouslySetInnerHTML is React’s replacement for using innerHTML in the browser DOM. In general, setting HTML from code is risky because it’s easy to inadvertently expose your users to a cross-site scripting (XSS) attack.\n\nI've also included a reset button that was not required, but I think is useful.\n\nExample Code:\n```\nfunction createMarkup() {\n  return {__html: 'First &middot; Second'};\n}\n\nfunction MyComponent() {\n  return <div dangerouslySetInnerHTML={createMarkup()} />;\n}\n```\n\nJust remember to:\n- Search, Read, Ask\n- this project was built for\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)"

function App() {
  const[markdown, setMarkdown] = useState({
    text: defaultMarkdown
  });

  function getMarkdown(){
    marked.setOptions({breaks: true})
    let rawMarkup = marked(markdown.text, {sanitize: true});
    return { __html: rawMarkup };
  }

  return (
    <>
    <h1 className='title'> Markdown Previewer </h1>
    <div className='wrapper'>
      <div className="label">Editor</div>
      <textarea value={markdown.text} onChange={e => setMarkdown({text: e.target.value})} name="editor" id="editor" className="box"></textarea>
      <button className="reset" onClick={() => setMarkdown({text: ''})}>Reset</button>
    </div>
    <div className='wrapper'>
      <div className="label">Previewer</div>
      <div id="preview" className="box" dangerouslySetInnerHTML={getMarkdown()}></div>
    </div>
    </>
  )
}

export default App
