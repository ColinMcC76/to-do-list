import React, { Component } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';


export default class CheckBox extends Component {
    // constructor(props) {
    //     super(props)
        // this.parentFunc = parentFunc
        
    //     // this.handleCheck = this.handleCheck.bind(this)


    // }
    // getInitialState() {
    //     return { checked: true }
    // };


    // async handleCheck() {
    //     await this.setState({ checked: !this.state.checked });
    //     // console.log(this.state.checked)
    // };

    // componentDidMount() {
    //     if(this.props.value === true) {
    //         // console.log('it is true')
    //         this.setState({
    //             checked: this.props.value,
    //         })
    //     }
    // }
    


    render() {
        // const item= {
        //     value: 
        // }
        // console.log(this.props.value)
        return (
            <React.Fragment>
                <input
                    // className= {`${this.props.value === true ? 'd-none': ''}`}
                    type="checkbox"
                    onChange={this.props.handleChecked}
                    // checked={`${this.props.value === true}`}
                    // defaultChecked={this.state.checked}
                />
                {/* <p className='offset-3 col-4'>
                    {this.item.value}
                </p> */}
                {/* <p className={`${this.state.checked === true ? 'del':''} offset-3 col-4`}>
                </p> */}
            </React.Fragment>
        )
    }
}
