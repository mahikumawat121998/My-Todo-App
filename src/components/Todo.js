import React,{Component, useState} from 'react'

// import "./Todo.css"
import "../App.css"
import picture from "../components/p.jpg.jpg"

const Todo = () => {
    const [inputData, setinputData] = useState("")
    const [item12, setItem12] = useState([]);
    
    const addItem =()=>{
        if(!inputData){

        }else{
            setItem12([...item12, inputData]);
setinputData("")
            
        }
 
    }
const itemDelete=(id)=>{
    console.log(id);
    const Updated = item12.filter((elem,index)=>{
        return index !== id;
    })
    setItem12(Updated)
    
    

}

const removeAll =()=>{
    setItem12([])
}

    return (
        <>
           <div className="main-div">
            <div className="child-div">
                <figure>
                   <h2 className="word">Have A Great Day 😃</h2>
                   
                    <figcaption>Add your Text Here 🙋</figcaption>
                </figure>
                <div className="addItems">
                    <input type="text" placeholder="Write your Notes ✍️"  name="" id="" value={inputData} onChange={(e)=>{setinputData(e.target.value)}} />
                    <i className="fa fa-plus" aria-hidden="true"   onClick={addItem}></i>
                </div>
                <div className="showItems">
                    {
                    item12.map((elem, index) =>{
                        return(

                        
                    <div className="eachItem" key ={index}>
                    <h3>{elem}</h3>
                    <i className="far fa-trash-alt add-btn" aria-hidden="true"onClick={()=>itemDelete(index)} ></i>
                </div>
                        )

                    })
                }

                     
                </div>
                <div className="showItems">
                    <button className="btn effect04" data-sm-link-text="Remove" onClick={removeAll}><span>Remove All</span></button>
                </div>
            </div>
           </div>
        </>
    )
}

export default Todo;