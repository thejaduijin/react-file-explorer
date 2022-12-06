import { useState } from 'react';
import './App.css';
import Folder from './components/Folder';
import explorer from './data/data'
import useTreeTraverse from './hooks/useTreeTraverse';

function App() {
  const [explorerData,setExplorerData] = useState(explorer);
  const {insertNode} = useTreeTraverse();

  const handleInsertNode = (folderId,item,isFolder)=>{
    const finalNode = insertNode(explorerData,folderId,item,isFolder);
    setExplorerData(finalNode);
  }
  return (
    <div>
      <Folder handleInsertNode={handleInsertNode} explorer={explorerData}/>
    </div>
  );
}

export default App;
