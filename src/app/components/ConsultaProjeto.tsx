import { useEffect, useState } from "react";
import axios from "axios";
import CadastroProjeto from "./CadastroProjeto";

// Interface para tipar os projetos da API
interface Projeto {
  id: number;
  nome: string;
  escopo: string;
  dataEntrega: string;
}

//declarando o componente
const ConsultaProjeto = () => {

    //declarar uma variável para armazenar a lista de projetos
    const [projetos, setProjetos] = useState<Projeto[]>([]);  

    //função do REACT executada sempre que a página abre
    useEffect(() => {
        //fazendo uma requisição GET para consulta de projetos na API
        axios.get<Projeto[]>('http://localhost:8081/api/projeto')
            .then((response) => { 
                //armazenar o valor obtido da API na variável do useState
                setProjetos(response.data);
            })
            .catch((e) => { 
                console.log(e);
            });
    }, []); // adicionei [] para evitar loop infinito

    //função para retornar o conteúdo HTML
    return(
        <div>
            <h1>Sistema de Controle de Projetos</h1>
            <p>Listagem de projetos cadastrados:</p>

            <div className="mb-2">
                <button className="btn btn-outline-success btn-sm" data-bs-toggle="modal" data-bs-target="#cadastroProjeto">
                    Cadastrar Projeto
                </button>
            </div>
    
            <table className="table table-sm table-hover table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome do projeto</th>
                        <th>Escopo</th>
                        <th>Data de Entrega</th>
                        <th>Operações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        projetos.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td>{item.escopo}</td>
                                <td>{item.dataEntrega}</td>
                                <td style={{ width: 200 }}>
                                    <button className="btn btn-sm btn-outline-success me-2">
                                        Equipes
                                    </button>
                                    <button className="btn btn-sm btn-outline-primary me-2">
                                        Detalhes
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={5}>
                            Quantidade de projetos: {projetos.length}
                        </td>
                    </tr>
                </tfoot>
            </table>

            {/* Janela modal para exibir o cadastro de projeto */}
            <div className="modal fade" id="cadastroProjeto" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5">
                                     Cadastro de Projeto
                            </h1>
                            <button type="button" className="btn-close" 
                                   data-bs-dismiss="modal" 
                                   aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <CadastroProjeto/>
                        </div>
                    </div>
                </div>
            </div>

       </div>
    )
}

//tornando o componente público
export default ConsultaProjeto;