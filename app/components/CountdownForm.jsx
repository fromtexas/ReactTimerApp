var React = require('react');


var CountdownForm = React.createClass({
    
    onFormSubmit: function(e){
        var form  = this.refs.form.value;
        
        if(form){
          this.refs.form.value = '';
           
          this.props.onSetCountdown(parseInt(form));
        }
        e.preventDefault();
    },
    render: function (){
        return (
        <div className='countdown-form'>
            <form  onSubmit={this.onFormSubmit}>
                <input ref='form' type='number' placeholder='Enter time in seconds'  />
                <div></div>
                <button className='button hollow expanded'>Start</button>
            </form>
        </div>
        )
    }
});

module.exports =  CountdownForm;