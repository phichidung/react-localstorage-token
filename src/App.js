import React, { Component } from 'react';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items : JSON.parse(localStorage.getItem('todo')) || [],
            text  : ''
        };
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.items.map((item, index) => <li key={index}>{item.text}</li>)
                    }
                </ul>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <input
                        onChange={(event) => this.handleChange(event)}
                        value={this.state.text}
                    />
                    <button>+</button>
                </form>
            </div>
        );
    }

    handleChange(event) {
        this.setState({ text: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();

        if(!this.state.text.length) {
            return
        }

        let obj = {
            'text': this.state.text,
        };

        this.setState({
            items : this.state.items.concat(obj)
        },
        () => {
            localStorage.setItem('todo', JSON.stringify(this.state.items));
            this.setState({ text: "" })
        })
    }
}
