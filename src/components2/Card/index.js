import React from 'react'
import IconSVG from '../../components/shared/Icons'
import { useForm, FormProvider } from "react-hook-form";

import styles from './styles.module.css'
import Example from '../../assets/images/example.jpg'
import Input from '../../components/shared/Input'
import Button from '../../components/shared/Button'

export default function Card() {
    const methods = useForm({ mode: "onBlur" });

    const {
      register,
      handleSubmit,
      reset,
      formState: { isSubmitSuccessful },
    } = methods;
    return (
     <FormProvider {...methods}>
        <div className={styles.card}>
            <div className={styles.cardContainer}>
                <IconSVG className={styles.photo} src={Example}/>
                <div className={styles.textContainer}>
                <div className={styles.description}>
                <Input
                  placeholder="Имя героя"
                  type="text"
                  name="firstName"
                  maxLength={{ value: 40, message: "Максимальное количество символов" }}
                />
                <Input
                  placeholder="Годы жизни"
                  type="text"
                  name="dateBirth"
                  maxLength={{ value: 20, message: "Максимальное количество символов" }}
                />
                <textarea className={styles.textareaItemFirst}
                  ref={register({required: { value: true, message: "Поле обязательно для заполнения" },
                  maxLength:{value:285, message:'Превышено количество символов'}})} 
                  name='text'
                  placeholder='Краткая биография героя'
                />
                </div>
                <div  className={styles.sendBtn}>
                <Button buttonColor='btn--card' >Отправить</Button>
                </div>
                </div>
              </div>

          </div>
      </FormProvider>
    )
}
