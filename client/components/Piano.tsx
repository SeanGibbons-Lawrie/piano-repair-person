import Playing from './Playing'

export default function Piano() {
  return (
    <>

      <h1>Piano</h1> <Playing instrument="piano" />
      <div className="key-grid">
        <div className="key" id="keyA">
          Div A
        </div>
        <div className="key" id="keyB">
          Div B
        </div>
        <div className="key" id="keyC">
          Div C
        </div>
        <div className="key" id="keyD">
          Div D
        </div>
        <div className="key" id="keyE">
          Div E
        </div>
        <div className="key" id="keyF">
          Div F
        </div>
        <div className="key" id="keyG">
          Div G
        </div>
        <img src="../images/piano.jpg" alt="piano image"></img>
      </div>

    </>
  )
}
