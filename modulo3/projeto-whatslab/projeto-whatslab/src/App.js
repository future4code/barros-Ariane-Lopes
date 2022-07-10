import { useState } from 'react';
import {AreaMensagem, PostContainer, PostForm, PostMsg,} from './style';



function App() {
    const [postar, setPostar] = useState([
    ]);

const itensPostar = postar.map((item, index) => {
    return (
        <PostMsg onDoubleclick = {() => remover(index)} key={index}>

            <p><strong>{item.usuario}</strong></p>
            <p>{item.mensagem}</p>

        </PostMsg>

    );
});
const [ImputUser, setImputUser]=useState ("");
const [ImputMsg, setImputMsg]=useState("");

const mudaUsuar=(e) =>{
    setImputUser(e.target.value);
    console.log();
    console.log(ImputUser);
}
const mudaMsg=(e)=>{
    setImputMsg(e.target.value)
    console.log(ImputMsg);
}
const adicionar=(e)=>{
    e.preventDefault()
    const itensAtualizados=[...postar,{usuario:ImputUser,mensagem:ImputMsg}]
    setPostar(itensAtualizados)
    console.log("botão precionado!");
    setImputUser("")
    setImputMsg("")
}
const remover=(indexRemover)=>{
    const itensAtualizados=postar.filter((item,index)=>{
        return index!==indexRemover;
    })
    setPostar(itensAtualizados)
}
    return (
        <>
        <AreaMensagem>
                <PostForm>
                    <p></p>
                    <imput type="text" required placeholder="usuario" value={ImputUser} onChange={mudaUsuar}></imput>
                    <imput type="text" required placeholder="Mensagem" value={ImputMsg} onChange={mudaMsg}></imput>
                    <button onClick={adicionar}>Enviar </button>
                </PostForm>
                <PostContainer>
            <span>
                <ul>{itensPostar}</ul>
            </span>
        </PostContainer>

        </AreaMensagem>
        </>
    );
}
   
export default App;
