var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');

var Controls = require('Controls');



describe('Controls', () => {
   it('should exist', () => {
      expect(Controls).toExist();
   });
    
    describe('render', () => {
        it('should rener pause when started', () => {
           var controls = TestUtils.renderIntoDocument(<Controls countdownStatus={'started'}/>); 
           var controlsDOM = ReactDOM.findDOMNode(controls);
           var btns = controlsDOM.querySelectorAll('button');
            
            for(var i = 0; i < btns.lenght; i++ ){
                if(btns[i].innerHTML == 'Pause'){
                    expect(btns[i].lenght).toBe(1);
                }
            }
           
        });
        it('should rener start when started', () => {
           var controls = TestUtils.renderIntoDocument(<Controls countdownStatus={'paused'}/>); 
           var controlsDOM = ReactDOM.findDOMNode(controls);
           var btns = controlsDOM.querySelectorAll('button');
            
            for(var i = 0; i < btns.lenght; i++ ){
                if(btns[i].innerHTML == 'Start'){
                    expect(btns[i].lenght).toBe(1);
                }
            }
           
        });
    });
})