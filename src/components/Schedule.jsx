import React from 'react';
import ScheduleList from './ScheduleList';
//import moment from 'moment';

class Schedule extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            masterScheduleList: [
                {
                    date: 'Fri Jul 26 2019',
                    time: '10 : 40 PM',
                    title: 'Hot POWER',
                    instructor: 'Nika'
                },
                {
                    date: 'Fri Jul 26 2019',
                    time: '10 : 41 PM',
                    title: 'Deep Stretch',
                    instructor: 'Ali\'i'
                },
                {
                    date: 'Fri Jul 26 2019',
                    time: '10 : 42 PM',
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

    showTime() {
        setInterval(() => {
            this.setState({ date: new Date() });
        }, 1000);
    }

    updateSchedule() {
        console.log("updateSchedule called");
        
        // If (now >= then) {setState below}
        if(this.state.date.toDateString() == this.state.masterScheduleList[0].date){    console.log("1st if statement called!");
            let timeArray = this.state.masterScheduleList[0].time.split(' ');
            if (this.state.date.getHours() >= timeArray[0] && this.state.date.getMinutes() >= timeArray[2]) {

            console.log("2nd if statement called!");

            var newMasterScheduleList = this.state.masterScheduleList.slice();
            newMasterScheduleList.shift(); 
            this.setState({masterScheduleList: newMasterScheduleList});
            }
        }
        
    }
        render() {
            
            
            return(
                <div>
                    The schedule page
                    The time is ... 
                    <p>{this.state.date.toDateString()}</p>
                    <p>{this.state.date.toLocaleTimeString()}</p>
                    {this.showTime()}
                    <ScheduleList  masterScheduleList={this.state.masterScheduleList} />
                </div>
            );
        }  
}

export default Schedule;