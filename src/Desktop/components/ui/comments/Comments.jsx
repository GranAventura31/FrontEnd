import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BsPersonFill } from 'react-icons/bs'
import { Link }  from 'react-router-dom'

export const Comments = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = () => {
    axios
      .get('http://localhost:5000/api/comentarios')
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener los comentarios:', error);
      });
  };

  return (
    <div>
      <div className="comment-list">
        <h2>Comentarios</h2>
        <div className="comment-scroll-container">
          {comments.length > 0 ? (
            <ul className="comment-card-list">
            {comments.map((comment) => (
              <li key={comment.id} className="comment-card">
                <Link to='/Perfil'><BsPersonFill color='white' className='fotocomentario'/></Link>
                <div className="comment-content">
                <div className='insta-comentario'>
                   <p className=''>{comment.Nombre}</p> 
                  </div>
                  <br />
                  <strong></strong> <p className='text-comentario'> {comment.Comentario} </p>
                </div>
              </li>
              
            ))}
            
          </ul>
          ) : (
            <p className='noComentarios'>No hay comentarios.</p>
          )}
        </div>
      </div>
    </div>
  );
};