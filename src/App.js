import React, { useState } from 'react'
import AdicionaTarefaForm from './views/adicionaTarefa'
import EditaTarefaForm from './views/editaTarefa'
import TabelaTarefas from './tabelas/tabelaTarefas'

const App = () => {
	// Criando um array inicial para popular os dados
	const listaTarefas = [
		{ id: 1, tipo: 'Pessoal', descricao: 'Pintar muro do quintal', datafim: '2020-12-27' },
		{ id: 2, tipo: 'Trabalho', descricao: 'Agendar férias', datafim: '2020-06-30' },
		{ id: 3, tipo: 'Faculdade', descricao: 'Fazer o trabalho do Prof. Ricardo', datafim: '2020-06-01' },
	]

	const valorInicial = { id: null, tipo: '', descricao: '', datafim: null }

	// Definindo os estados iniciais da aplicação
	const [ tarefas, setTarefas ] = useState(listaTarefas)
	const [ tarefaAtual, setTarefaAtual ] = useState(valorInicial)
	const [ editando, setEditando ] = useState(false)

	// Operações CRUD 
	const adicionaTarefa = tarefa => {
		tarefa.id = tarefas.length + 1
		setTarefas([ ...tarefas, tarefa ])		
	}

	const apagaTarefa = id => {
		setEditando(false)
		setTarefas(tarefas.filter(tarefa => tarefa.id !== id))		
	}

	const alteracaoTarefa = (id, tarefaAlterada) => {
		setTarefas(tarefas.map(tarefa => (tarefa.id === id ? tarefaAlterada : tarefa)))
		setEditando(false)		
	}

	const tarefaParaEditar = tarefa => {
		setEditando(true)
		setTarefaAtual({ id: tarefa.id, tipo: tarefa.tipo, descricao: tarefa.descricao, datafim: tarefa.datafim })
	}

	return (
		<div className="container">			
			<h1>Lista de Tarefas</h1>	
			<hr/>		
			<div className="flex-row">
				<div className="flex-large">
					{editando ? (
						<>{/* Define o fragmento de edição*/}
							<h2>Editar Tarefa</h2>
							<EditaTarefaForm								
								setEditando={setEditando}
								tarefaAtual={tarefaAtual}
								alteracaoTarefa={alteracaoTarefa}
							/>
						</>
					) : (
						<>{/* Define o fragmento de inclusão*/}
							<h2>Adicionar Tarefa</h2>
							<AdicionaTarefaForm adicionaTarefa={adicionaTarefa} />
						</>
					)}
				</div>
				<div className="flex-large">
					<h2>Visualizar Tarefa</h2>
					<TabelaTarefas tarefas={tarefas} editaTarefa={tarefaParaEditar} apagaTarefa={apagaTarefa} />
				</div>
			</div>
		</div>
	)
}

export default App
