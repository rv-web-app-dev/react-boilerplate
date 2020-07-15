import React, {Component} from 'react'

/* const Child1 = (props) => (<input ref={props.ref}/>)

const Child2 = (props) => (<div ref={props.ref}>Hello</div>) */

class Child1 extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return <input ref={this.props.inputRef}/>
    }
}

class Child2 extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return <span ref={this.props.inputRef}>Hello World</span>
    }
}



class Parent extends Component {
    constructor(props){
        super(props)
        this.inputElement = null
        this.anotherRef = null
    }

    onClick1 = () => {
        this.inputElement.focus()
    }

    onClick2 = () => {
        this.anotherRef.style.border='5px solid green';
        this.anotherRef.style.margin='10px';
        this.anotherRef.style.display='inline-block';
    }
    
    render() {
        return (
            <div>
                <Child1 inputRef={el => this.inputElement = el}/><button onClick={this.onClick1}>Click to Edit</button>
                <br/>
                <Child2 inputRef={el => this.anotherRef = el}/> <button onClick={this.onClick2}>Click to Change Style!!</button>
                <hr/>
            </div>
        )
    }
}

export default Parent

// NOTE: You cannot use ref as a prop name to send ref
//Above code didnt work when I used <Child1 ref={el => this.inputElement = el}/>