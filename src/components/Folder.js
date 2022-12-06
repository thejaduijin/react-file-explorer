import React from 'react'

function Folder({explorer}) {
    console.log(explorer);
  return (
    <div style={{margin:5}}>
      <div>
        📁 {explorer.name}
      </div>
    </div>
  )
}

export default Folder;
