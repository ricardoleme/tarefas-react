import React from 'react'

const tabelaTarefas = props => (
  <table>
    <thead>
      <tr>
        <th>Tipo</th>
        <th>Tarefa</th>
        <th>Data Final</th>
        <th>Opções</th>
      </tr>
    </thead>
    <tbody>
      {props.tarefas.length > 0 ? ( /* Apenas iremos percorrer o array com map se existirem registros */
        props.tarefas.map(tarefa => (          
          <tr key={tarefa.id}>
            <td>{tarefa.tipo}</td>
            <td>{tarefa.descricao}</td>
            <td>{tarefa.datafim}</td>
            <td>
              <button
                onClick={() => {
                  props.editaTarefa(tarefa)
                }}
                className="button muted-button"
              >
                Editar
              </button>
              <button
                onClick={() => props.apagaTarefa(tarefa.id)}
                className="button button-red"
              >
                Apagar
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>Ainda não existe nenhum registro! :( <br/> Cadastre uma nova tarefa.</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default tabelaTarefas
