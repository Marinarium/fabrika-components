import React, {Component} from 'react'
import Title from '../../controls/Title'
import Button from '../../controls/Button'
import Input from '../../controls/Input'

class PasswordRecovery extends Component{
    render(){
        return(
        <main className="main password-recovery">         
            <form className="form" action="/">   
                <Title titleText='Password recovery' titleStyles='form__title' />   
                <div class="form__desc">
                    <p class="form__p">Please, enter your email and we will send you a link to reset it.</p>
                </div>           
                <div className="form__input-wrap">
                    <label for="mail" className="form__label">Email</label>
                    <Input inputType='email' inputId='mail' inputStyles='form__input' inputPlaceholder='Enter email' />
                </div>           
                <Button value='Reset password' btnStyles='form__btn' />
            </form>
        </main>
        )
    }
}

export default PasswordRecovery