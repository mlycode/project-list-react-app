import React from "react";

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Nothing's gonna make your husband or wife madder than coming home and having a snow-covered dinner. I sincerely wish for you every possible joy life could bring. Let your imagination be your guide. We need dark in order to show light. Just use the old one inch brush. There we go.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by mly</div>
                    <div>1st August at 14:00</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails;