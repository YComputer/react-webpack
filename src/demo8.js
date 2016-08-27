import React from 'react';

var Demo8 = React.createClass({
    getInitialState: function(){
        return {value: 'Hello'}
    },
    handleChange: function(event){
        this.setState({value: event.target.value});
    },

    render: function(){
        return (
            <div>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <p>{this.state.value}</p>
            </div>
        )
    }
})

module.exports = Demo8;