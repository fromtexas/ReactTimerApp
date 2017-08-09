var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
    getInitialState: function(){
        return {
            count: 0,
            countdownStatus: 'paused'
        }    
    },
    handleStatusChange: function(newStatus){
       this.setState({
            countdownStatus: newStatus === 'stopped'? 'cleared' : newStatus
       }); 
    },
    startTimer: function(){
      this.timer = setInterval(() => {
        var newCount = this.state.count + 1;
          this.setState({
              count: newCount
          });
      }, 1000);  
    },
    componentWillUnmount: function(){
        console.log('component did unmount');
        clearInterval(this.timer);
        this.timer = undefined;
        
    },
    componentDidUpdate: function (prevProp, prevState){
     if(this.state.countdownStatus !== prevState.countdownStatus){
        switch(this.state.countdownStatus) {
            case 'started': 
                this.startTimer();
            break;
            
            case 'cleared':
                this.setState({count:0})
            
            case 'paused':
                clearInterval(this.timer);
                this.timer = undefined;
            break;
                                         }
     }    
    },
    render: function(){
        var {count, countdownStatus} = this.state;
        
        return (
            <div className='timer'>
              <h1 className='text-center page-title'>Timer App</h1>
               <Clock totalSeconds={count}/>
               <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>
            </div>
        )
    }
});






module.exports = Timer;