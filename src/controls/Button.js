
import React, {Component} from 'react'

class Button extends Component {
    static defaultProps = {
        
    }

    render() {
        return (
            <div className="form__submit">
                <input 
                    type="button" 
                    className={this.props.btnStyles}
                    value={this.props.value}
                />
            </div>
        )
    }
}

export default Button