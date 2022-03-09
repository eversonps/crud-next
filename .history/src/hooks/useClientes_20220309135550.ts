import ClienteRepositorio from "../core/ClienteRepositorio"
import ColecaoCliente from "../backend/db/ColecaoCliente"
import Cliente from "../core/Cliente"
import { useState, useEffect } from "react"

export function useClientes(){
    const repo: ClienteRepositorio = new ColecaoCliente()

  const [visivel, setVisivel] = useState<"tabela" | "formulario">("tabela")
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [clientes, setClientes] = useState<Cliente[]>([])

  function obterTodos(){ 
    repo.obterTodos().then(clientes =>{
      setClientes(clientes)
      setVisivel("tabela")
    })
  }

  useEffect(obterTodos, [])

  function clienteSelecionado(cliente: Cliente){
    setCliente(cliente)
    setVisivel("formulario")
  }

  function novoCliente(){
    setCliente(Cliente.vazio())
    setVisivel("formulario")
  }

  async function clienteExcluido(cliente: Cliente){
    await repo.excluir(cliente)
    obterTodos()
  }

  async function salvarCliente(cliente: Cliente){
    await repo.salvar(cliente)
    obterTodos()
  }

  return {
      novoCliente,
      salvarCliente,
      
  }
}