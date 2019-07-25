import React from 'react';

const ScheduleFormat = (props) => {
    return(
        <div>
            <style jsx>{`
                .Schedule-format {width: 40%;
                    margin: 16px auto;
                    border: 1px solid #eee;
                    box-shadow: 0 2px 3px #ccc;
                    padding: 40px;
                    text-align: center;
                }
            `}</style>
            <div className="Schedule-format">
                <p>{props.date}</p>
                <p>{props.time}</p>
                <p>{props.title}</p>
                <p>Instructor: {props.instructor}</p>
            </div>
        </div>
    );
}

export default ScheduleFormat;