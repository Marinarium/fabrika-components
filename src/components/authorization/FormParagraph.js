import React, {Component} from 'react'

class FormParagraph extends Component {
    render() {
        return (
            <p className="form__p">{this.props.formParagraphText}</p>
        )
    }
}

export default FormParagraph