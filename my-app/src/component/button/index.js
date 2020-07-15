import React, { Component } from 'react'
import propTypes from 'prop-types'

class SharedButton extends Component {

    submitEvent(){
        if(this.props.emitEvent){
            this.props.emitEvent()
        }
    }

    render(){

        const { buttonText } = this.props

        return(
            <button onClick={() => this.submitEvent()} data-test='buttonComponent'>
                {buttonText}
            </button>
        )
    }
}

SharedButton.propTypes = {
    buttonText: propTypes.string,
    emitEvent: propTypes.func
}

export default SharedButton