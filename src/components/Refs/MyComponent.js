import React, {Component} from 'react'

class MyComponent extends Component {
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
                <input ref={this.inputRef}/>
                <button onClick={this.onClick}>Click to Edit</button>
                <button onClick={() => {this.inputRef.current.focus()}}>Click to Focus</button>
                <hr/>
            </div>
        )
    }
}

export default MyComponent