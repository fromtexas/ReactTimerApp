var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');



var Countdown = React.createClass({
    getInitialState: function(){
    return {
        count: 0,
        countdownStatus:'stopped'
    }   
    },
    componentWillUnmount: function(){
        console.log('component did unmount');
        clearInterval(this.timer);
        this.timer = undefined;
        
    },
    componentWillMount: function(){
        console.log('component mounted but not rendered yet');
    },
    componentDidMount: function(){
        console.log('component rendered');
    },
    componentWillUpdate: function(nextProps, nextState){
        
    },
    componentDidUpdate: function (prevProp, prevState){
     if(this.state.countdownStatus !== prevState.countdownStatus){
        switch(this.state.countdownStatus) {
            case 'started': 
                this.startTimer();
            break;
            
            case 'stopped':
                this.setState({count:0})
            
            case 'paused':
                clearInterval(this.timer);
                this.timer = undefined;
            break;
                                         }
     }    
    },
    startTimer: function(){
      this.timer = setInterval(() => {
        var newCount = this.state.count - 1;
          this.setState({
              count: newCount >= 0? newCount : 0
          });
          
          if(newCount === 0){
             this.setState({
              countdownStatus: 'stopped'
                });
             }
      }, 1000);  
    },
    handleSetCountdown: function(number){
        this.setState({
            count: number,
            countdownStatus: 'started'
        })
    },
    handleStatusChange: function(newStatus){
       this.setState({
           countdownStatus: newStatus
       }) 
    },
    render: function(){
        var {count, countdownStatus} = this.state;
        
        var renderControlsArea = () => {
           
            if (countdownStatus !== 'stopped'){
                return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>
                }else{
                return <CountdownForm  onSetCountdown={this.handleSetCountdown}/> 
                }
        };
        
        return (
            <div className='countdown'>
               <h1 className='text-center page-title'>Countdown App</h1>
                <Clock totalSeconds={count}/>
                {renderControlsArea()}
            </div>
        )
    }
});

module.exports = Countdown;