import {useState} from 'react';
import {useHistory} from 'react-router-dom';
function Content(props){
    let history = useHistory();
    let [show, setshow] = useState(false);
    let id = props.article.id;
   
    return(
        <div>
            <h4 onClick={() => {
                setshow(!show);
            }}>{ props.article.title }</h4>
            {
                show
                ? <p onClick={() => history.push('/' + id)}>{ props.article.author }</p>
                : null
            }
        </div>
    )
}


export default Content