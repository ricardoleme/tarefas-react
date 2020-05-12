import React, { useState } from 'react'

const AdicionaTarefaForm = props => {	
	const valorInicial = { id: null, tipo: '', descricao: '', datafim: '' }
	const [ tarefa, setTarefa ] = useState(valorInicial)

	const handleInputChange = event => {
		const { name, value } = event.target			
		setTarefa({ ...tarefa, [name]: value })		
	}

	const handleOnSubmit = event => {
		event.preventDefault()		
		props.adicionaTarefa(tarefa)
		setTarefa(valorInicial)
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
			<button>Adicionar Nova Tarefa</button>
		</form>
	)
}

export default AdicionaTarefaForm
