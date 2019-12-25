import React, { Component } from 'react'
import Search from './Search'
import Sort from './Sort'

export default class Control extends Component {
    render() {
        return (
            <div class="row mt-15">
                {/* Search */}
                <Search />
                {/* Sort */}
                <Sort />
            </div>

        );
    }
}