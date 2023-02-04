import React, {useState} from 'react';
import "./App.css"

function App() {
  const [newItem,setNewItem] = useState('')
  const [item,setItem] = useState([])
  const [file,setFile] = useState('')

  const fileUpload = (e) => {
        setFile(URL.createObjectURL(e.target.files[0]))
  }
  const addItem = () =>{
    const itemuud = {
      id: Math.floor(Math.random() * 99999999999999),
      img:file,
      value: newItem,
    }
    
    setItem(oldlist => [...oldlist, itemuud])

  }
  const Delete = (id) =>{    
    const arr = item.filter(amaraa => amaraa.id !== id )
    setItem(arr)
  }
return (
    <div className='dripp'>
      <div className='input-button'>
        <input type="text" value={newItem} onChange={e => setNewItem(e.target.value)} placeholder="      Utgaa oruul"/>
        <input className='utga' type="file"  onChange={fileUpload} />
        <button onClick = {()=>addItem()}>Create</button>
      </div>
        <div className='drippy'>
            {item.map((items) =>{
                return(
                  <div className='style-from'>                                          
                      <img className='ghj' src={items.img} alt=''/>
                      <div className='skip-title'>                      
                        <div className='pext'>{items.value}</div>   
                        <button onClick={() => Delete(items.id)}>Delete</button>  
                    </div>             
                  </div>
                )
            })}
        </div>      
    </div>
);
}

export default App;