import React from 'react';

var Demo9 = React.createClass({
    getInitialState: function(){
        return {
            opacity: 1.0
        }
    },

    componentDidMount: function(){
        console.log('did mount')
        this.timer = setInterval(function(){
            var opacity = this.state.opacity;
            opacity -= 0.05;
            if(opacity < 0.1){
                opacity = 1.0;
            }
            this.setState({opacity: opacity})
        }.bind(this), 100)
    },

    render: function(){
        return(
            <div style={{opacity: this.state.opacity}}>
                Hello {this.props.name}

            </div>
        )
    }

})


module.exports = Demo9;