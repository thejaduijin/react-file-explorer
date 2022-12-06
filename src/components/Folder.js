import React, { useState } from 'react';
import '../styles.css';

function Folder({ explorer, handleInsertNode }) {
    console.log(explorer);

    const [expand, setExpand] = useState(false);
    const [showInput, setShowInput] = useState({
        visible: false,
        isFolder: null
    });

    const handleNewFolder = (e, isFolder) => {
        e.stopPropagation();
        setShowInput({
            visible: true,
            isFolder
        })
    }

    const onAddFolder = (e) => {
        if (e.keyCode === 13 && e.target.value) {
            handleInsertNode(explorer.id, e.target.value, showInput.isFolder)
            setShowInput({ ...showInput, visible: false })
        }
    }

    if (explorer.isFolder) {
        return (
            <div style={{ margin: 5 }}>
                <div className='folder' onClick={() => setExpand(!expand)}>
                    <span>
                        📁 {explorer.name}
                    </span>
                    <div>
                        <button onClick={(e) => handleNewFolder(e, true)}>Add Folder</button>
                        <button onClick={(e) => handleNewFolder(e, false)}>Add File</button>
                    </div>
                </div>
                <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
                    {
                        showInput.visible && (
                            <div className='inputContainer'>
                                <span>{showInput.isFolder ? "📁" : "📄"}</span>
                                <input
                                    type="text"
                                    onKeyDown={onAddFolder}
                                    onBlur={() => setShowInput({ ...showInput, visible: false })}
                                    className='inputContainer__input'
                                    autoFocus />
                            </div>
                        )
                    }
                    {explorer.items.map((exp) => {
                        return (
                            <Folder explorer={exp} key={exp.id} />
                        )
                    })}
                </div>
            </div>
        )
    } else {
        return <span className='file'>📄 {explorer.name}</span>
    }
}

export default Folder;
