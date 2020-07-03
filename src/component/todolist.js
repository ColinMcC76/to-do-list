import React from 'react';
import './App.css'
import ToDoListComponent from './todoListComponent'
import ViewButtons from './ViewButtons'
import 'bootstrap/dist/css/bootstrap.css';

export default class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            text: '',
            total: 0,
            // completed: 0,
            view: 'All'
        };
        this.addItem = this.addItem.bind(this);
        this.updateInput = this.updateInput.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.clearAll = this.clearAll.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.updatePage = this.updatePage.bind(this);

    };
    componentDidMount() {
        if (localStorage.getItem('list') !== null) {
            let storageMap = JSON.parse(window.localStorage.getItem('list'))
            // console.log(storageMap)
            this.setState({
                list: storageMap,
                total: storageMap.length,
                // completed: this.state.completed
            });
        } else {
            this.setState({
                list: [],
                total: 0
            })
        }

        // console.log(storageMap.list)

    }
    async handleCheck(id, checked) {

        // console.log({id,checked})
        const list = [...this.state.list]
        // const updatedList = []
        // console.log(list)
        list.map(item => {
            if (item.id === id) {
                item.checked = checked
            }
        })

        this.setState({
            list: list,
            // total: this.state.list.length - 1,

        })
        window.localStorage.setItem('list', JSON.stringify(list))
    };

    updatePage(newPage) {
        // console.log("in the update page function", newPage)
        this.setState({ currentPage: newPage })
    }

    updateInput(key, value) {
        this.setState({
            [key]: value
        })
    };

    addItem() {
        //create item 

        if (this.state.text.slice() !== '') {
            const text = {
                id: Date.now(),
                value: this.state.text.slice(),
                checked: false,
            };
            //copy of current list items  && ids
            var list = [...this.state.list]

            //add new item to the list
            list.push(text);
            // console.log(text.value)

            this.setState({
                list: list,
                text: "",
                total: this.state.list.length + 1,

            });

            window.localStorage.setItem('list', JSON.stringify(list));
            // console.log(JSON.stringify(this.state))
            // window.localStorage.setItem('state of components',JSON.stringify(this.state) )
        }
        // if (this.state.checked === true) {
        //     console.log('you clicked it on')
        //     this.setState({
        //         completed: this.state.completed + 1
        //     })
        // }
    }



    deleteItem(id) {
        // console.log(id)

        //current copy of the list of items
        const list = [...this.state.list]
        const updatedList = []
        // console.log(list)
        list.map(item => {
            if (item.id !== id) {
                updatedList.push(item)
            }
        })

        this.setState({
            list: updatedList,
            total: this.state.list.length - 1,

        })
        window.localStorage.setItem('list', JSON.stringify(updatedList))
    };




    clearAll() {
        const clearedList = [];

        this.setState({
            list: clearedList,
            total: 0,
            // completed: 0,
        })
        localStorage.clear()
    };








    render() {
        return (
            <div className='todoListContainer'>
                <div className="container-fluid d-flex justify-content-center toDoList">
                    <div className="row">
                        {/* this is the basic user interface. it contains the 
                        clear all button, the title, a total count of the todos, 
                        the user input, and a button to add the user input. */}
                        <div className='col-12 d-flex justify-content-around pt-3'>
                            <button type='button'
                            className='btn btn-danger' 
                            onClick={this.clearAll}
                            >
                            Clear all
                            </button>
                            <h1 className="text-center"
                            >
                            To-do List:
                            </h1>
                            <h2>
                            {this.state.total} total
                            </h2>
                        </div>
                        <ViewButtons newNumber={95} updatePage={this.updatePage} />
                        <div className='pt-3 col-12 d-flex justify-content-around'>
                            <input
                                className=' btn btn-light'
                                type="text"
                                value={this.state.text}
                                placeholder="task"
                                onChange={event => this.updateInput("text", event.target.value)}
                            />
                            <button className="btn btn-dark" onClick={this.addItem}>Add Item</button>
                        </div>
                        {/* this is where I create my list of todos, 
                            it should contain the text input from the user, 
                            a checkbox to click if its done or not, and an 
                            option to remove it from the list. each input 
                            will generate a new toDoListItem component*/}
                        {/* <h2 className={`${this.state.completed !== 0 ? 'col-12 text-center pt-2' : 'd-none'}`}>
                                {this.state.completed} completed
                            </h2> */}

                        <div className='col-12'>
                            <ul className='p-2 list-unstyled'>
                                {this.state.list.map(listComp => {
                                    return (
                                        <ToDoListComponent 
                                            key={listComp.id} 
                                            item={listComp} 
                                            parentFunc={this.deleteItem} 
                                            parentFunc2={this.handleCheck} 
                                            handleChecked={this.handleCheck} 
                                        />
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
