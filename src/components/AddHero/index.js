import React,{useState, useEffect} from 'react'
import { useForm, FormProvider } from "react-hook-form";
import styles from './styles.module.css'
import Input from '../shared/Input'
import { useSelector, useDispatch } from "react-redux";
import { createNewHero } from "../../store/thunks";
import Button from '../shared/Button'

export default function AddHero() {
  const dispatch = useDispatch();

    const methods = useForm({ mode: "onBlur" });

    const {
      register,
      handleSubmit,
      setValue,
      formState: { isSubmitSuccessful, isValid },
    } = methods;

    const handleClickForm = (data)=>{
      console.log('data',data)
      dispatch(createNewHero(data))
    }
  
   
    return (
        <FormProvider {...methods}>
        <div className={styles.dashboard}>
         <div className={styles.dashboardContainer}>
                 
           <div className={styles.dashboardContent}>
                    <div className={styles.dashboardItems}>
                    <form className={styles.registrationForm} onSubmit={handleSubmit(handleClickForm)}>
                      <div className={styles.firstForm}>
            <Input
              placeholder="Имя"
              type="text"
              name="firstName"
              maxLength={{ value: 40, message: "First name must be 40 characters or less." }}
            />

            <Input
              placeholder="Фамилия"
              type="text"
              name="lastName"
              maxLength={{ value: 40, message: "Last name must be 40 characters or less." }}
            />
            
            <Input
              placeholder="Отчество"
              type="text"
              name="thirdName"
              maxLength={{ value: 40, message: "Last name must be 40 characters or less." }}
            />
            
            <Input
              placeholder="Годы жизни"
              type="text"
              name="dateBirth"
              maxLength={{ value: 40, message: "Last name must be 40 characters or less." }}
            />

            <div className={styles.textArea}> 
            <textarea className={styles.textareaItemFirst} ref={register({required: { value: true, message: "Field is required." }})} name='text' placeholder='Краткое описание вашего героя. Можно использовать цитаты и т.д.'/>
            <textarea className={styles.textareaItem} ref={register({required: { value: true, message: "Field is required." }})} name='fullTextOne' placeholder='Исторические сведения о вашем герое' />

            <textarea  className={styles.textareaItem} ref={register()} name='fullTextTwo' placeholder='Исторические сведения (доп.)'/>

            <textarea className={styles.textareaItem} ref={register()} name='fullTextThree' placeholder='Исторические сведения (доп.)'/>

</div>

          <Button buttonSize='primary-btn3' onClick={handleSubmit(handleClickForm)}>Опубликовать</Button>   
          </div>
          <div>


          </div>
                    </form>
                        
                    </div>
                   
                    
                    
                </div>
            </div>
        </div>
    </FormProvider>
    )
}
