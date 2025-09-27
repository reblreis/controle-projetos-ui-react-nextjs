'use client'; //habilitar as funções do REACT no Next.js

import { useEffect, useState } from "react";
import axios from "axios";

type Projeto = {
  id: number;
  nome: string;
  escopo: string;
  dataEntrega: string;
};

//declaração do componente
export default function Home() {

  //declarar uma variável para armazenar a lista
  //os projetos obtidos da consulta da API
  const [projetos, setProjetos] = useState<Projeto[]>([]);

  //função do REACT executada sempre que a página abre
  useEffect(() => {

    //fazendo uma requisição GET para consulta de projetos na API
    axios.get('http://localhost:8081/api/projeto')
    .then((response) => { //capturar o retorno de erro da API
      //armazenar o valor obtido da API na variável do useState
      setProjetos(response.data);
    })
    .catch((e) => { //capturar o retorno de erro da API
      console.log(e);
    });
  }, []);

  //Exibir o código HTML do componente
  return (
    <div>
      <h1> Sistema de Controle de Projetos</h1>
      <p>Listagem de projetos cadastrados:</p>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome do Projeto</th>
            <th>Escopo</th>
            <th>Data de Entrega</th>
            <th>Operações</th>
          </tr>
        </thead>
         <tbody>
          {projetos.map((item) => (
            <tr key={item.id}> {/* 👈 resolvendo o erro da key */}
              <td>{item.id}</td>
              <td>{item.nome}</td>
              <td>{item.escopo}</td>
              <td>{item.dataEntrega}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={5}>
              Quantidade de projetos: {projetos.length}
            </td>
          </tr>
        </tfoot>
      </table>

    </div>
  )
}