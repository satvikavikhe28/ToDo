// A placeholder file to add any custom library functions
export default class obsSub{
    constructor(){
        this.event = {};
    }
    subcribe(event, callback){
        if(!this.events.hasOwnProperty(event)){
            this.events[event] = [];
        }
        return this.events[event].push(callback);
    }
    publish(event, data = {}){
        if(!this.events.hasOwnProperty(event)){
            return[];
        }
        return this.events[event].map(callback => callback(data));  
    }
}