import ClienteRepositorio from "../core/ClienteRepositorio"
import ColecaoCliente from "../backend/db/ColecaoCliente"
import Cliente from "../core/Cliente"
import { useState, useEffect } from "react"
import useTabelaOuForm from "./useTabelaOuForm"

export function useClientes(){
  const repo: ClienteRepositorio = new ColecaoCliente()

  const {formularioVisivel, tabelaVisivel, exibirForm, exibirTabela} = useTabelaOuForm()
  
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [clientes, setClientes] = useState<Cliente[]>([])

  function obterTodos(){ 
    repo.obterTodos().then(clientes =>{
      setClientes(clientes)
      exibirTabela()
    })
  }

  useEffect(obterTodos, [])

  function selecionarCliente(cliente: Cliente){
    setCliente(cliente)
    exibirForm()
  }

  function novoCliente(){
    setCliente(Cliente.vazio())
    exibirForm()
  }

  async function excluirCliente(cliente: Cliente){
    await repo.excluir(cliente)
    obterTodos()
  }

  async function salvarCliente(cliente: Cliente){
    await repo.salvar(cliente)
    obterTodos()
  }

  return {
      cliente,
      clientes,
      novoCliente,
      salvarCliente,
      excluirCliente,
      selecionarCliente,
      obterTodos,
      exibirTabela,
      formularioVisivel
  }
}