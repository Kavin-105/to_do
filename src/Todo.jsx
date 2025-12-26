import { useState } from "react";
import Card from "./components/Card"

function Todo(){
    const [item , setItem] = useState([]);
    const [title , setTitle] = useState("");
    const [desc , setDesc] = useState("");
    const [num , setNum] = useState();
    function inputFun(event)
    {
        const val = event.target.value;
        setTitle(val);
    }
    function handleAdd() 
    {
        if(title.trim() !== "" && desc.trim() !== "")
        {
            let obj = {
                title:title,
                num : num,
                desc : desc
            }
            item.push(obj);
            setItem([...item]);
            setTitle("");
            setDesc("");
            setNum("");
        }
    }
    function handleDelete(idx)
    {
        let tem =[]
        for(let i=0;i<item.length;i++)
        {
            if(i != idx) tem.push(item[i]);
        }
        setItem(tem);
    }
    function handleEdit(idx) {
        let newTitle = prompt("Enter new title");
        let newDesc = prompt("Enter new desc");
        let newNum = prompt("Enter new Number");
        if(newTitle != null && newTitle.trim() != "" &&
            newDesc != null && newDesc.trim() != "" &&
            newNum != null
            ){
            let tem = [];
            for(let i=0;i<item.length;i++)
            {
                if(i == idx)
                    {
                        let obj = {
                            title : newTitle,
                            num : newNum,
                            desc : newDesc
                        }
                         tem.push(obj);
                    }
                else         tem.push(item[i]);
            }
            setItem(tem);
        }
        else{
            alert("Invalid data");
        }
    }
    return(
        <main className='w-screen min-h-screen flex flex-col justify-center items-center'>
        <h1 className="uppercase font-bold text-cyan-700 mb-5">Welcome to To-do</h1>
        <section>
            <input 
                className="border-2 m-5" type="text" 
                value={title}
                onChange={inputFun}
                placeholder="Enter the title" 
            />  
            <input 
                className="border-2 m-5" type="number" 
                value={num}
                onChange={(e) => setNum(e.target.value)}
                placeholder="Enter the number" 
            />
            
            <textarea
                row={5}
                className="border-2 m-5" type="text" 
                value={desc}
                onChange={(e) => setDesc(e.target.value)} 
                placeholder="Enter the discription"
            />
            <br></br>
            <button className="bg-blue-600 mx-2" onClick={handleAdd}>Add</button>
        </section>
            {
                item.map((value,index) => {
                    return <Card key = {index} 
                                id = {index}
                                title = {value.title}
                                desc = {value.desc}
                                num = {value.num}
                                handleDelete={handleDelete}
                                handleEdit={handleEdit}
                                />
                })
            }

          <section>
            <div>
            <Card title ="Dora" desc = "Boots" />
            <Card title ="Jackie" desc = "Chan" />
            </div>
        </section>
        </main>
    )
}
export default Todo;