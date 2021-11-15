const EventEmitter=require('events');


// event was raised after the event was registered in event listener 
class Period extends EventEmitter{
    startPeriod(){
        setTimeout(()=>{
        console.log('Class Started');
            this.emit('bell ring',{
                period:'first',
                text:'period ended'
                });
        },2000);
            
    }
    
}

module.exports=Period;