import {useState, useEffect} from 'react'

const Categorias = () => {
    const [categoria, setCategoria] = useState("");

    useEffect( ()=> {
        document.title = `Categoría: ${categoria}`;
    }, [categoria])

    const handleClick = (categoria) => {
        setCategoria(categoria)
    }
    
  return (
    <div>
        <h2>Categoría de Productos:</h2>
        <button onClick={()=> handleClick("Accesorios")}> Accesorios </button>
        <button onClick={()=> handleClick("Celulares")}> Celulares </button>
    </div>
  )
}

export default Categorias