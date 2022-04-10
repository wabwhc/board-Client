import {useState, useEffect} from 'react';
import Content from './Content';
import useStore from './Zustand';
function Body(props){
    const {article} = useStore();   

    return(
        <div className='main body'>
            {
                article.map((e, i) => 
                    <Content article = {e} key = {e.id} />
                )
            }
        </div>
    )
}

export default Body;