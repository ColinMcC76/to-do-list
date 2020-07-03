import React from 'react'
export default class ViewButtons extends React.Component {
    constructor(props){
        super(props)
        this.viewButtonLinks = [
            'All',
            'Completed',
            'To-Do'
        ]
    }
    render() {
        const viewButtonLinksinHTML = this.viewButtonLinks.map((link, index) => {
            return (
                <a
                    onClick={() => this.props.updatePage(link)}
                    className="btn btn-dark"
                    href="#"
                    key={index}
                >
                    {link}
                </a>
            )
        })
        return (
            <h1 className="pt-3 col-12 d-flex justify-content-around">
                {viewButtonLinksinHTML}
            </h1>
        )
    }
}
