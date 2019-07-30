import React from 'react';
import firebase from 'firebase';
import ScheduleList from './ScheduleList';
//import moment from 'moment';
import { firebaseConfig } from './../constants/config.js';

class Schedule extends React.Component {
    constructor(props){
        super(props);
        
        firebase.initializeApp(firebaseConfig.firebase);
       

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
            date: new Date(),
            schedules: []
        };       
    }

    componentDidMount() {
        this.updateTimer = setInterval(() => this.updateSchedule(), 30000); 
    }
//TODO: FIREBASE methods 
    componentDidMount() {
        this.getUserData();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState != this.state) {
            this.writeUserData();
        }
    }

    writeUserData = () => {
        firebase.database().ref('/').set(this.state);
        console.log('DATA Saved');
    }

    getUserData = () => {
        let ref = firebase.database().ref('/');
        ref.on('value', snapshot => {
            const state = snapshot.val();
            this.setState(state);
        });
        console.log('Data retireved');
    }

//END of firebase methods

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
            const { schedules } = this.state;
            
            return(
                <div>
                    The schedule page
                    The time is ... 
                    <p>{this.state.date.toDateString()}</p>
                    <p>{this.state.date.toLocaleTimeString()}</p>
                    {this.showTime()}

                    
                    <h1>Firebase Schedule</h1>
                    <p>The new test schedule for {this.state.schedules.date} is {this.state.schedules.instructor} in {this.state.schedules.title}</p>

                    <form onSubmit={ this.handleSubmit }>
                        <label>Title</label>
                        <input type="text" ref='title' placeholder="Title" />

                        <label>Insstructor</label>
                        <input type="text" ref='instructor' placeholder="Instructor Name" />

                        <button type="submit" className="btn btn-primary">Save</button>
                    </form>


                    <ScheduleList  masterScheduleList={this.state.masterScheduleList} />
                </div>
            );
        }  

        handleSubmit = (event) => {
            event.preventDefault();
            let title = this.refs.title.value;
            let instructor = this.refs.instructor.value;

            if(title && instructor) {
                const { schedules } =this.state;
                schedules.push({ title, instructor });
                this.setState({ schedules });
            }

            this.refs.title.value = '';
            this.refs.instructor.value = '';
        }
}

export default Schedule;