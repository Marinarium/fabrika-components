
import React, {Component} from 'react'

class Input extends Component {
    static defaultProps = {
        
    }

    render() {
        return (
        <input 
            type={this.props.inputType}
            id={this.props.inputId}
            className={this.props.inputStyles}
            value={this.props.inputValue}
            placeholder={this.props.inputPlaceholder}
        />
        )
    }
}

export default Input