import './App.css';
import Title from './Title';
import Body from './Body';
import Article from './Article';
import {Route, Switch, useHistory} from 'react-router-dom';
import { useEffect, useState } from 'react';
import useStore from './Zustand';

function App() {
  let history = useHistory();
  let [load, setload] = useState(false);
 
  
  const {article, loadArticle} = useStore();

  useEffect(() => {
      fetch('http://localhost:8080/main').then((e) => {
         e.json().then((e) => {
            //로딩화면 출력할만한거 만들어 보기
            setTimeout(() => {
              loadArticle(e)
              setload(true);
            }, 1000)
         })
      })
  }, [])


  return (
    <div className="App">
      {
        load
        ?
        <Switch>
          <Route path = '/write'>
            <h1>글쓰기</h1>
          </Route>
          <Route path='/:id'>
            <Article></Article>
          </Route>
          <Route path='/'>
            <button onClick={() => {
              history.push('/write')
            }}>글쓰기</button>
            <Title></Title>
            <Body load = {load}></Body>
          </Route>
        </Switch>
      :<h1>loading</h1>
      }
    </div>
  );
}

export default App;
