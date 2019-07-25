import React from 'react';
import ScheduleList from './ScheduleList';
import moment from 'moment';

class Schedule extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            masterScheduleList: [
                {
                    date: 'Thursday, August 1',
                    time: '7:30am - 8:30am',
                    title: 'Hot POWER',
                    instructor: 'Nika'
                },
                {
                    date: 'Thursday, August 1',
                    time: '8:45am - 10:00am',
                    title: 'Deep Stretch',
                    instructor: 'Ali\'i'
                },
                {
                    date: 'Thursday, August 1',
                    time: '1:30pm - 2:45pm',
                    title: 'Kundalini',
                    instructor: 'Keanu11111'
                }
            ]
        }
       
    }

    componentDidMount() {
        this.updateTimer = setInterval(() => this.updateSchedule(), 15000); 
    }

    updateSchedule() {
        console.log("updateSchedule called");
    }
        render() {
            

            return(
                <div>
                    The schedule page
                    
                   

                    <ScheduleList  masterScheduleList={this.state.masterScheduleList} />
                </div>
            );
        }
    
}

export default Schedule;