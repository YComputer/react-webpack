import React from 'react';

var names = ['Alice', 'Emily', 'Kate'];
var arr = [
  <h1>Hello world!</h1>,
  <h2>React is awesome</h2>,
];

var Demo3 = React.createClass({
    render: function () {
        return (
            <div>
               {arr}
            </div>
        )

    }
})

module.exports = Demo3;