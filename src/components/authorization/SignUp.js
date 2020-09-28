import React, {Component} from 'react'
import Title from '../../controls/Title'
import Button from '../../controls/Button'
import Input from '../../controls/Input'

class SignUp extends Component{
    render(){
        return(
        <main className="main sign-up">
            <form className="form" action="/">   
                <Title titleText='Sign up' titleStyles='form__title' />
                <div class="form__desc">
                    <p class="form__p">Copy Account will allow you to track your order status online</p>
                    <p class="form__p">Already have an account? <a href="sign-in" className="form__link">Log in</a></p>
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
                <div class="form__input-wrap">
                    <input type="checkbox" className="form__checkbox-input" id="terms" name="terms" value="terms" />
                    <label for="terms" className="form__label">I agree with the
                        <a href="./" className="form__link"> terms ofuse</a>
                    </label>
                </div>                
                <Button value='Sign up' btnStyles='form__btn' />
            </form>
        </main>
        )
    }
}

export default SignUp 