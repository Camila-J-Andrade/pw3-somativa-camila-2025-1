import React from "react";
import { useState, useEffect } from "react";
import styles from './CreateBook.module.css';

import Input from "../form/Input";
import Select from "../form/Select";
import Button from "../form/Button";

const CreateBook = ()=> {

    /* CRIA A ESTRUTURA DE STATE PARA OS DADOS DE LIVRO */
    const [book, setBook] = useState({});
    
    /* CRIA A ESTRUTURA DE STATE PARA OS DADOS DE CATEGORIA */
    const [categories, setCategories] = useState([]);

    function handlerChangeBook (event){
        setBook({...book, [event.target.name] : event.target.value});
        console.log(book);
    }

    /*CAPTURA DE DADOS DO ELEMENTO DE SELECT*/ 
    function handlerChangeCategory(event){
        setBook({...book, cod_categoria : event.target.options[event.target.selectedIndex].value});
    }

    /* ENVIO DOS DADOS PARA A API */
    function submit(event){
        event.preventDefault();
        console.log(book);

        insertBook(book);
    }

    /* RECUPERA OS DADOS DE CATEGORIA DA API REST */
    useEffect(()=> {
        fetch('http://127.0.0.1:5000/listagemCategorias',{
            method: 'GET', 
            headers: {
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin':'*',
                'Access-Controle-Allow-Headers':'*'
            }

        }).then((response) => 
            response.json()
        ).then((categorias) => {
            console.log('TESTE: ' + categorias.data);
            setCategories(categorias.data);
        }).catch((error)=> {
            console.log('ERRO: ' + error);
        })
    }, []);

    /* INSERÇÃO DE LIVRO */
    function insertBook(book) {

        fetch('http://127.0.0.1:5000/inserirLivro',{
            method: 'POST',
            mode:'cors',
            headers: {
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin':'*',
                'Access-Controle-Allow-Headers':'*'
            },
            body: JSON.stringify(book)
        }).then((response) => 
            response.json()
        ).then((respJSON) => {
            console.log('TESTE: ' + respJSON);
        }).catch((error)=> {
            console.log('ERRO: ' + error);
        })

    }

    return(

        <section className={styles.create_book_container}>

            <h1>CADASTRO DE LIVRO</h1>

            <form onSubmit={submit}>

                <Input 
                    text='Nome do livro'
                    type='text'
                    name='nome_livro'
                    id='nome_livro'
                    placeholder='Digite o nome do livro'
                    handlerChange={handlerChangeBook}
                />

                <Input 
                    text='Autor do livro'
                    type='text'
                    name='autor_livro'
                    id='autor_livro'
                    placeholder='Digite o nome do autor'
                    handlerChange={handlerChangeBook}
                />

                <Input 
                    text='Descrição do livro'
                    type='text'
                    name='descricao_livro'
                    id='descricao_livro'
                    placeholder='Digite a descrição do livro'
                    handlerChange={handlerChangeBook}
                />

                <Select 
                    name='cod_categoria'
                    id='cod_categoria'
                    text='Categoria do livro'
                    handlerChange={handlerChangeCategory}
                    options={categories}
                />

                <Button 
                    label='CADASTRAR LIVRO'
                />

            </form>
        </section>

    )
}

export default CreateBook;