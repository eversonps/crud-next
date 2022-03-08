import Layout from "../components/Layout"
import Tabela from "../components/Tabela"
import Cliente from "../core/Cliente"
import Botao from "../components/Botao"

export default function Home() {
  const clientes = [
    new Cliente("Marcos", 18, "1"),
    new Cliente("Ana", 28, "2"),
    new Cliente("Leandro", 19, "3"),
    new Cliente("Daniel", 24, "4")
  ]

  function clienteSelecionado(cliente: Cliente){
    console.log(cliente.nome)
  }

  function clienteExcluido(cliente: Cliente){
    console.log(cliente.nome + " excluído(a)")
  }
  
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <Layout titulo="Cadastro Simples" >
        <div className="flex justify-end">
          <Botao cor="green" className="mb-2">Novo Cliente</Botao>
        </div>
        <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido}></Tabela>
      </Layout>
    </div>
  )
}
