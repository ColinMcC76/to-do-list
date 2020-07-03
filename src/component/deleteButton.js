import React, { Component } from 'react'

export default class deleteButton extends Component {
    constructor(props, id, parentFunc){
        super(props)
        this.id= id
        // this.handleClick = this.handleClick.bind(this)
        this.parentFunc = parentFunc
    }
    // handleClick(event){
    //     // console.log(this.parentFunc)

    //     this.parentFunc(event.target.id)
    //     console.log(this.parentFunc)

    // }
    // deleteItem(id) {

    //     //current copy of the list of items
    //     const list = [...props.state.list]

    //     // filter out the item by item id 
    //     const updatedList = list.filter(item => item.id !== id);

    //     this.setState({
    //         list: updatedList,
    //         total: this.state.list.length - 1,

    //     })
    // };
    render() {
        // console.log(this.parentFunc)
        return (
            <div>
                <button
                    // onClick={this.handleClick}
                    onClick={()=> this.props.parentFunc(this.props.id)}
                    className="btn btn-danger"
                >
                    X
                </button>
            </div>
        )
    }
}
