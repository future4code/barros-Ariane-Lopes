import express, {Request,response,Response} from "express";
import cors from 'cors';

const app = express()

app.use(express.json())

app.use(cors())

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});

// EXERCICIO 1
app.get("/status", (req:Request, res:Response) => {
    res.status(200).send("Hello from Express")
})

// EXERCICIO 2

type Users = {
    id: number,
    name: string,
    phone: string,
    email: string,
    website: string,

}

// EXERCICIO 3
const users: Users[] = [
    {
        id: 12,
        name: "Leanne Graham",
        phone: "1234-8956",
        email: "Sincere@april.biz",
        website: "hildegard.org",
    },
    {
        id:45,
        name: "Ervin Howell",
        phone:"4587-9658",
        email: "Shanna@melissa.tv",
        website: "anastasia.net",
    },
    {
        id: 48,
        name: "Clementine Bauch",
        phone:"9853-2541",
        email: "Nathan@yesenia.net",
        website: "ramiro.info",
    },
    {
        id:89,
        name: "Patricia Lebsack",
        phone:"7896-3478",
        email: "Julianne.OConner@kory.org",
        website: "kale.biz",
    }
]

// EXERCICIO 4
app.get("/users", (req:Request, res:Response) => {
    res.send(users)
})

// EXERCICIO 5
type Posts = {
    id: Number,
    title: string,
    body: string,
    userId: string,
}
// EXERCICIO 6
const posts: Posts[] = [
    {
        id: 1,
        title: "Três Porquinhos",
        body: "Eles fizeram três casas",
        userId:'3',
    },
    {
        id:2,
        title:"A branca de neve",
        body:"Ela tinha 7 anões",
        userId:'7',
    },
    {
        id:3,
        title:"A bela adormecida",
        body:"Espetou o dedo e dormiu por anos",
        userId:'4',
    },
]     //Decidir fazer fora do array de usuarios

// EXERCICIO 7
app.get("/posts",(req:Request, res: Response) =>{
    res.send(posts)

})

// EXERCICIO 8 
