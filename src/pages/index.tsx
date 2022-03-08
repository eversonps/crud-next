import Layout from "../components/Layout"
import Tabela from "../components/Tabela"
import Cliente from "../core/Cliente"
import Botao from "../components/Botao"
import Formulario from "../components/Formulario"
import { useState } from "react"

export default function Home() {
  const [visivel, setVisivel] = useState<"tabela" | "formulario">("tabela")
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())

  const clientes = [
    new Cliente("Marcos", 18, "1"),
    new Cliente("Ana", 28, "2"),
    new Cliente("Leandro", 19, "3"),
    new Cliente("Daniel", 24, "4")
  ]

  function clienteSelecionado(cliente: Cliente){
    setCliente(cliente)
    setVisivel("formulario")
  }

  function novoCliente(){
    setCliente(Cliente.vazio())
    setVisivel("formulario")
  }

  function clienteExcluido(cliente: Cliente){
    console.log(cliente.nome + " excluído(a)")
  }

  function salvarCliente(cliente: Cliente){
    console.log(cliente)
    setVisivel("tabela")
  }
  
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <Layout titulo="Cadastro Simples">
        {visivel === "tabela" ? (
          <>
            <div className="flex justify-end">
              <Botao cor="green" className="mb-2" onClick={novoCliente}>Novo Cliente</Botao>
            </div>
            <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido}></Tabela>
          </>
        ) : (
          <Formulario cliente={cliente} cancelado={()=> setVisivel("tabela")} clienteMudou={salvarCliente}></Formulario>
        )}
      </Layout>
    </div>
  )
}
