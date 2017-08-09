var React = require('react');
var Nav = require('Nav');




var Main = (props) => {
       return(
           <div>
               <Nav/>
                <div className='grid-x'>
                    <div className='medium-6 medium-offset-3 large-offset-4 large-4 small-10 small-offset-1 cell'>
                         <div className='main'>
                         
                          {props.children}  
                         </div>
                    </div>
                </div>
           </div>
            
       );  
};


module.exports = Main;