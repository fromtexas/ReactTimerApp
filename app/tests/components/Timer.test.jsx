var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('timer', () =>{
    it('should exist', () => {
      expect(Timer).toExist();
   }); 
    
        describe('handleSetCountdown',() => {
 

        it('should start timer', (done) => {
            var countdown = TestUtils.renderIntoDocument(<Timer/>);
           
            countdown.handleStatusChange('started');
            
             setTimeout(() => {
                 expect(countdown.state.count).toBe(2);
                 expect(countdown.state.countdownStatus).toBe('started');
                 done();
            }, 2001);
            
        });
        
        it('should stop timer on stopped status', (done) => {
            var countdown = TestUtils.renderIntoDocument(<Timer/>);
            countdown.setState({
                count:10
            });
            countdown.handleStatusChange('stopped');
            
             setTimeout(() => {
                 
                 expect(countdown.state.count).toBe(0);
                 expect(countdown.state.countdownStatus).toBe('cleared');
                 done();
            }, 1001);
            
        });
                    
        it('should pause timer on paused status', (done) => {
            var countdown = TestUtils.renderIntoDocument(<Timer/>);
            countdown.setState({
                count:10
            });
            countdown.handleStatusChange('paused');
            
             setTimeout(() => {
                 
                 expect(countdown.state.count).toBe(10);
                 expect(countdown.state.countdownStatus).toBe('paused');
                 done();
            }, 5001);
            
        });
    });
});