import React from 'react';
import coverImage from "../../assets/run-buddy.jpg";
import coverImage2 from "../../assets/digital-marketing-meeting.jpg";


function Projects() {
    return (
        <div className="flex-row">
            <img src={coverImage} alt="something"
                        className="img-thumbnail mx-1"
            />
            <img src={coverImage2} alt="something"
                        className="img-thumbnail mx-1"
            />


        </div>

    )
}

export default Projects;