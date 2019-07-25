import React from 'react';
import ScheduleFormat from './ScheduleFormat';

var masterScheduleList = [
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
        instructor: 'Keanu'
    }
]

const ScheduleList = () => {
    
    return(
        <div>
            <hr/>
            {masterScheduleList.map((sched, index) =>
                <ScheduleFormat date={sched.date}
                                time={sched.time}
                                title={sched.title}
                                instructor={sched.instructor}
                                key={index}/>)}
        </div>
    );
};

export default ScheduleList;