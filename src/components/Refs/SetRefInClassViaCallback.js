import React, {Component} from 'react'

class SetRefInClassViaCallback extends Component {
    constructor(props){
        super(props)
        this.inputRef = null
        this.anotherInputRef = null
    }

    setRef = el => this.inputRef = el

    /* DONOT USE THE current PROPERTY */
    setFocus = () => {
        this.inputRef.focus()
    }

    setAnotherFocus = () => {
        this.anotherInputRef.focus()
    }

    render() {
        return (
            <div>
                Calling thh callback in the <code>ref</code> attr
                <input ref={this.setRef}/>
                <button onClick={this.setFocus}>Click to Edit</button>
                <button onClick={() => {this.inputRef.focus()}}>Click to Focus</button>
                <hr/>
                Using the callback directly in the <code>ref</code> attr
                <input ref={el => this.anotherInputRef = el}/>
                <button onClick={this.setAnotherFocus}>Click to Edit</button>
                <button onClick={() => {this.anotherInputRef.focus()}}>Click to Focus</button>
                <hr/>
            </div>
        )
    }
}

export default SetRefInClassViaCallback