import { useState } from "react"
import Entrada from "./Entrada"
import Cliente from "../core/Cliente"
import Botao from "./Botao"

interface FormularioProps{
    cliente: Cliente
}

export default function Formulario(props: FormularioProps){
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? "")
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)

    return (
        <div>
            {id ? (
                <Entrada somenteLeitura texto="Código" valor={id}></Entrada>
            ) : false}
            
            <Entrada texto="Nome:" valor={nome} valorMudou={setNome} className="mb-4"></Entrada>
            <Entrada texto="Idade:" valor={idade} tipo="number" valorMudou={setIdade}></Entrada>

            <div className="flex justify-end mt-7">
                <Botao cor="blue" className="mr-2">
                    {id ? "Alterar" : "Salvar"}
                </Botao>

                <Botao cor="gray">
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}