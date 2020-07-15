import React, { Component } from 'react'

const FunctionalComponent = () => (<input/>)

class TestRefWithFC extends Component {
    constructor(props){
        super(props)
        this.inputRef = React.createRef()
    }

    onClick = () => {
        this.inputRef.current.focus()
    }
    
    render() {
        return (
            <div>
                Associating refs on a Functional Component like here, DOESN't WORK:: 
                <FunctionalComponent ref={this.inputRef}/>
                <button onClick={this.onClick}>Click to Edit</button>
                <button onClick={() => {this.inputRef.current.focus()}}>Click to Focus</button>
                <p>testRefFunctionalComponent.js:12 Uncaught TypeError: Cannot read property 'focus' of null</p>
                <hr/>
            </div>
        )
    }
}

export default TestRefWithFC