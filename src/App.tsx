import React, { useState } from 'react';
import CommentForm from './components/CommentForm';
import CommentList from './components/CommentList';
import Post from "./components/Post";
import styles from './App.module.css';

function App() {
  const [comments, setComments] = useState([]);

  const handleAddComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  return (
    <div className={styles.app}>
      <h1>Meu Aplicativo de Comentários</h1>
      <CommentForm onAddComment={handleAddComment} />
      <CommentList comments={comments} />
      <Post imageUrl="https://www.orangeboxminiaturas.com.br/img/products/batmovel-1989-figura-batman-em-metal-jada-toys-1-24-jad-98260_1_1000.jpg">
        Olha só que legal minha miniatura do Batmóvel.
      </Post>
    </div>
  );
}

export default App;
