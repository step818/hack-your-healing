import React from 'react';
import ScheduleFormat from './ScheduleFormat';

function ScheduleList(props) {
  
   
        return(
            <div>
                <hr/>
                {(props.masterScheduleList).map((sched, index) =>
                    <ScheduleFormat date={sched.date}
                                    time={sched.time}
                                    title={sched.title}
                                    instructor={sched.instructor}
                                    key={index}/>)}
            </div>
        );
    
}

export default ScheduleList;