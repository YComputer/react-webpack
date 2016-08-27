import React from 'react';
import ReactDOM from 'react-dom';
import Demo2 from './demo2'
import Demo3 from './demo3'
import Demo4 from './demo4'
import Demo5 from './demo5'
import Demo6 from './demo6'
import Demo7 from './demo7'
import Demo8 from './demo8'




var RootComponent = React.createClass({
    render: function () {
        return (
            <h1>Hello, world!</h1>
        )
    }
});

ReactDOM.render(
    <div>
        <RootComponent/>
        <Demo2/>
        <Demo3/>
        <Demo4>
            <span>hello</span>
            <span>world</span>
        </Demo4>
        <Demo5 title={"123"}/>
        <Demo6/>
        <Demo7/>
        <Demo8/>
    </div>,
    document.getElementById('app'));