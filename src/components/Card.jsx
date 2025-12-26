import "../index.css"
function Card({
        id = 0,
        title = "kain",
        desc = "mano",
        num = "555",
        handleDelete,
        handleEdit
        }){

    return (
        
        <div className="min-w-sm bg-gray-400 my-2 p-5 rounded-md border-pink-800 border-2 hover:translate-x-1 transition-all duration-500">
            <h2 className="font-semibold">{id+1} Title : {title}</h2>
            <p>Desc : {desc}</p>
            <h2>Phone : {num}</h2>
            <div className="flex justify-end">
                <button className="bg-orange-300 ml-2" onClick={() => handleEdit(id)}>Edit</button>
                <button className="bg-red-600 ml-2" onClick={() => handleDelete(id)}>Delete</button>
            </div>
        </div>
        
        
    );
}
export default Card;