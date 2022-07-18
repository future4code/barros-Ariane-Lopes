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
const [InputUser, setInputUser]=useState ("");
const [InputMsg, setInputMsg]=useState("");

const mudaUsuar=(e) =>{
    setInputUser(e.target.value);
    console.log();
    console.log(InputUser);
}
const mudaMsg=(e)=>{
    setInputMsg(e.target.value)
    console.log(InputMsg);
}
const adicionar=(e)=>{
    e.preventDefault()
    const itensAtualizados=[...postar,{usuario:InputUser,mensagem:InputMsg}]
    setPostar(itensAtualizados)
    console.log("botão precionado!");
    setInputUser("")
    setInputMsg("")
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
                    <input type="text" required placeholder="usuario" value={InputUser} onChange={mudaUsuar}></input>
                    <input type="text" required placeholder="Mensagem" value={InputMsg} onChange={mudaMsg}></input>
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
