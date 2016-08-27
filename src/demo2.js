import React from 'react';

var names = ['Alice', 'Emily', 'Kate'];

var Demo2 = React.createClass({
    render: function () {
        return (
            <div>
                {
                    names.map(function (name) {
                        return <div>Hello, {name}!</div>
                    })
                }
            </div>
        )

    }
})

module.exports = Demo2;