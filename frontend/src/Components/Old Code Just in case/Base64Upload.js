import React from 'react';

import FileBase64 from './react-file-base64.js';

export default class Base64Convert extends React.Component {

  constructor() {
    super()
    this.state = {
      files: []
    }
  }

  getFiles(files){
    this.setState({ files: files })
  }

  render() {

    return (
      <div>
        <div className="text-center">
          <FileBase64
            multiple={ false }
            onDone={ this.getFiles.bind(this) } />
        </div>

        <div className="text-center">
          { this.state.files.map((file,i) => {
            return <img key={i} src={file.base64} />
          }) }
          <img src="" />
        </div>

        { this.state.files.length != 0 ?
          <div>
            <h3 className="text-center mt-25">Callback Object</h3>
            <div className="pre-container">
              <pre>{ JSON.stringify(this.state.files, null, 2) }</pre>
            </div>
          </div>
        : null }

      </div>
    )

  }

}


