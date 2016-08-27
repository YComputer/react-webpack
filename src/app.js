import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery'
import Demo2 from './demo2'
import Demo3 from './demo3'
import Demo4 from './demo4'
import Demo5 from './demo5'
import Demo6 from './demo6'
import Demo7 from './demo7'
import Demo8 from './demo8'
import Demo9 from './demo9'
import Demo10 from './demo10'
import Demo11 from './demo11'


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
        <Demo9 name="world"/>
        <Demo10 source="https://api.github.com/users/octocat/gists"/>
        <Demo11 promise={$.getJSON('https://api.github.com/search/repositories?q=javascript&sort=stars')} />
    </div>,
    document.getElementById('app'));