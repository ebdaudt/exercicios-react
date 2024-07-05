import React, {useState} from "react";
import '../style.css'

function Contador(){
    const [contador, setContador] = useState(0)
    const [texto,setTexto] = useState('Texto Padrao')
    const incrementarContador = () => {
        setContador(contador + 1);
    };
    const alterarTexto = () =>{
        setTexto('Texto Alternativo')
    };

    const [tarefa, setTarefa] = useState(''); 
  const [listaTarefas, setListaTarefas] = useState([]); 
 
  const adicionarTarefa = () => {
    if (tarefa.trim() !== '') { 
      setListaTarefas([...listaTarefas, tarefa]); 
      setTarefa(''); 
    }
  };
    return (
        <>
            <h3>Contador</h3>
            <button onClick={incrementarContador}>Contador {contador}</button>
            <p>{texto}</p>
            <button onClick={alterarTexto}>Alterar Texto</button>
            <div>
      <h2>Lista de Tarefas</h2>
      <input
        type="text"
        value={tarefa}
        onChange={(e) => setTarefa(e.target.value)}
        placeholder="Digite uma nova tarefa"
      />
      <button onClick={adicionarTarefa}>Adicionar Tarefa</button>
      <ul>
        {listaTarefas.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
        </>
    )
}

export default Contador;