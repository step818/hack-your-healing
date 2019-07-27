import React from 'react';
import ScheduleList from './ScheduleList';
//import moment from 'moment';

class Schedule extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            masterScheduleList: [
                {
                    date: 'Thursday, August 1',
                    time: 0,
                    title: 'Hot POWER',
                    instructor: 'Nika'
                },
                {
                    date: 'Thursday, August 1',
                    time: 1,
                    title: 'Deep Stretch',
                    instructor: 'Ali\'i'
                },
                {
                    date: 'Thursday, August 1',
                    time: 2,
                    title: 'Kundalini',
                    instructor: 'Keanu11111'
                }
            ],
            date: new Date()
        };
       
    }

    componentDidMount() {
        this.updateTimer = setInterval(() => this.updateSchedule(), 30000); 
    }

    callMe() {
        setInterval(() => {
            this.setState({ date: new Date() });
        }, 1000);
    }

    updateSchedule() {
        console.log("updateSchedule called");
        
        // If (now >= then) {setState below}
        if(this.state.date.getMinutes() >= this.state.masterScheduleList[0].time){
            console.log("if statement called!");
            var newMasterScheduleList = this.state.masterScheduleList.slice();
            newMasterScheduleList.shift(); 
            this.setState({masterScheduleList: newMasterScheduleList});
        }
        
    }
        render() {
            
            
            return(
                <div>
                    The schedule page
                    The time is ... 
                    <p>{this.state.date.getMinutes()}</p>
                    {this.callMe()}
                    <ScheduleList  masterScheduleList={this.state.masterScheduleList} />
                </div>
            );
        }  
}

export default Schedule;