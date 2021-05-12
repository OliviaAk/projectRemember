import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createQuiz, getQuiz,createQuestion, getQuestions} from 'store/thunks';
import styles from './styles.module.css';

export default function EditGames() {
  const [quizName, setName]= useState('');
  const [count, setCount]= useState(1);
  const [question, setQuestion] = useState('l');
  const [correct, setRight]= useState('lll l l')
  const [answers, setAnswers] = useState([])
  const dispatch = useDispatch();
  const { quizes , currentQuiz} = useSelector((state) => state.quiz);

  console.log(answers)
  useEffect(() => {
    dispatch(getQuiz());
  }, []);
  useEffect(() => {
    dispatch(getQuestions());
  }, []);
  const createNewQuizName = ()=>{
    dispatch(createQuiz({quizName}));
    setName('');
  }
  const sendQuestion = ()=>{
    dispatch(createQuestion({question, answers, correct, quizId: currentQuiz._id}))
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperContainer}>
        <>
       <input name='quizName' onChange={(e)=>setName(e.target.value)} />
       <button onClick={createNewQuizName} type='submit'>Добавить</button>
       </>
       <div className={styles.wrapperQuestion}>
       {
         currentQuiz !== null && 
         (<><span className={styles.title}>{currentQuiz.quizName}</span>
       
       <div className={styles.textContainer}>
         <div className={styles.textItem}>
           <span className={styles.text}>Вопрос {count}</span>
          <input
            placeholder="Текст вопроса"
            type="text"
            name="question"
            className={styles.inputItem}
            onChange={(e)=>{setQuestion(e.target.value)}}
          />
          </div>
          <div className={styles.textItem}>
           <span className={styles.text}>Варианты ответа</span>
          <input
            placeholder="Ответ 1"
            type="text"
            className={styles.inputItem}
            onChange={(e)=>{setAnswers(e.target.value)}}


          />
          <input
            placeholder="Ответ 2"
            type="text"
            className={styles.inputItem}

          />
          <input
            placeholder="Ответ 3"
            type="text"
            className={styles.inputItem}

          />
         
          </div>
          <div className={styles.textItem}>
           <span className={styles.text}>Правильный вариант</span>
          <input
            placeholder="Ответ"
            type="text"
            className={styles.inputItem}
            onChange={(e)=>{setRight(e.target.value)}}

          />
          </div>


          </div>
          <button type='submit' onClick={sendQuestion}>Ok</button>
          </>)}

       </div>
      </div>
    </div>
  );
}
