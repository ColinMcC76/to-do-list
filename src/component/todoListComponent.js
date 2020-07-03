import React from 'react'
import './App.css'
import DeleteButton from './deleteButton'
import CheckBox from './CheckBox'


export default class todoListComponent extends React.Component {
    constructor(props) {
        // item, parentFunc
        super(props)
        // this.item = {}
        // this.parentFunc = ''
        this.state = {
            id: "",//remove props out of state set a setState func
            value: "",
            checked: false
        }
        this.handleCheck=this.handleCheck.bind(this)

    }
    async componentDidMount() {
        await this.setState({
            id: this.props.item.id,//remove props out of state set a setState func
            value: this.props.item.value,
            checked: this.props.item.checked,
        })
    }
    async handleCheck() {
        
        await this.setState({ checked: !this.state.checked });
        // console.log(this.state.checked)
        this.props.parentFunc2(this.state.id, this.state.checked)
    };
    render() {
        // console.log(this.state)
        return (
            <li
                className='py-2 d-flex justify-content-around'
                // justify-content-around'
                // key={item}
                key={this.state.id}
            >
                <CheckBox value={this.state.checked}handleChecked={this.handleCheck} />
                {/* <p className={`${this.state.checked !== true ? 'd-none' : 'text-primary'}`}>
                    {`${this.state.checked === true ? 'COMPLETED' : ''}`}
                </p> */}
                <p className={`${this.state.checked === true ? 'del' : ''} col-4 text-center`}>
                    {/* "text-center text-wrap" */}
                    {/* {item.value} */}
                    {this.state.value}
                </p>
                <DeleteButton id={this.state.id} parentFunc={this.props.parentFunc} />
            </li>
        )
    }
}

