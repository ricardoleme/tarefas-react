import React, { useState, useEffect } from 'react'

const EditaTarefaForm = props => {
  const [ tarefa, setTarefa ] = useState(props.tarefaAtual)

  useEffect(
    () => {
      setTarefa(props.tarefaAtual)
    },
    [ props ]
  )
  
  /* Iremos atribuir os valores dos campos a cada alteração nos inputs */
  const handleInputChange = event => {
    const { name, value } = event.target
    setTarefa({ ...tarefa, [name]: value })
  }

  const handleOnSubmit = event => {
    event.preventDefault() //Evita que a página seja recarregada
    props.alteracaoTarefa(tarefa.id, tarefa)
  }


  return (
    <form onSubmit={handleOnSubmit}>
     <label>Tipo</label>
			<select name="tipo" value={tarefa.tipo} onChange={handleInputChange} required>
				<option value="">Selecione...</option>
				<option value="Pessoal">Pessoal</option>
				<option value="Trabalho">Trabalho</option>
				<option value="Faculdade">Faculdade</option>
			</select>
			<label>Descrição</label>
			<input type="text" name="descricao" required value={tarefa.descricao} onChange={handleInputChange} />
			<label>Data Final</label>
			<input type="date" name="datafim" required value={tarefa.datafim} onChange={handleInputChange} />
      <button>Alterar a tarefa</button>
      <button onClick={() => props.setEditando(false)} className="button button-red">
        Cancelar
      </button>
    </form>
  )
}

export default EditaTarefaForm
