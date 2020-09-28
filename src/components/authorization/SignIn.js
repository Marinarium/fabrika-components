import React, {Component} from 'react'
import Title from '../../controls/Title'
import Button from '../../controls/Button'
import Input from '../../controls/Input'

class SignIn extends Component{
    render(){
        return(
        <main className="main sign-in">            
            <form className="form" action="/">   
                <Title titleText='Sign in' titleStyles='form__title' />
                <div class="form__desc">
                    <p class="form__p">Copy
                        Account will allow you to track your order status online.</p>
                    <p class="form__p">Don’t have an account yet? <a href="sign-up" className="form__link">Create an account</a></p>
                </div>             
                <div className="form__input-wrap">
                    <label for="mail" className="form__label">Email</label>
                    <Input inputType='email' inputId='mail' inputStyles='form__input' inputPlaceholder='Enter email' />
                </div>
                <div className="form__input-wrap">
                    <div className="form__label-wrap">
                        <label for="password" className="form__label">Password</label>
                        <a href="password-recovery" className="form__link form__link_light">Forgot password?</a>
                    </div>
                    <div class="form__password-wrap">
                        <Input inputType='password' inputId='password' inputStyles='form__input' inputPlaceholder='Enter password' />
                        <Button btnStyles='form__eye' />
                    </div>
                </div>
                <Button value='Sign in' btnStyles='form__btn' />
            </form>
        </main>
        )
    }
}

export default SignIn