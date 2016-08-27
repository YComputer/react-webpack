import React from 'react';



var Demo7 = React.createClass({
    handleClick: function () {
        this.refs.myTextInput.focus();
    },
    render: function () {
        return (
            <div>
                <input type="text" ref="myTextInput" />
                <input type="button" value="Focus the text input" onClick={this.handleClick} />
            </div>
        );
    }
})

module.exports = Demo7;