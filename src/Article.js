import { useParams } from "react-router-dom"
import {useEffect, useState} from 'react';
import useStore from './Zustand';

function Article(){
    let {id} = useParams();
    let [load, setload] = useState(false)
    let [content, setcontent] = useState([]);
    let {article} = useStore();

    let k = article.findIndex(x => x.id === parseInt(id));
    
    useEffect(() => {
        fetch('http://localhost:8080/replys/' + id).then(
            (e) => {
                e.json().then(e => {
                    setcontent(e)
                    console.log(e)
                })
            }
        )
    }, []);

    return(
        <div className="article">
            {   <>
                    <h1>{article[k].title}</h1>
                    <h1>{article[k].author}</h1>
                </>
            }
            {
                content[0] === undefined
                ?   <h1>loading</h1>
                :  content.map((a, i) => {
                    return (<h4 key={i}>{a.replycontent}</h4>)
                })
            }
        </div>
    )
}

export default Article