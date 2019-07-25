import React from 'react';

const ScheduleFormat = (props) => {
    return(
        <div>
            <style jsx>{`
                .Schedule-format {width: 50%;
                    margin: 8px auto;
                    border: 1px solid #eee;
                    box-shadow: 0 2px 3px #ccc;
                    padding: 0px 60px 0px 60px;
                    text-align: center;
                    background-color: goldenrod;
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