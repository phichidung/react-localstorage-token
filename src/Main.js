import React, { Component } from 'react';

export default class Main extends Component {

    render() {
        const { localStorage } = this.props;
        const token = localStorage.getItem('token');

        return (
            <div>Main</div>
        )
    }
}
