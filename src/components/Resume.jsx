function Resume({ personalInfo, educationInfo, experienceInfo }) {
    return (
        <div className="resume">
            <div className="resume-header">
                {personalInfo.fullName}
            </div>
            <div className="resume-education">
                {personalInfo.email}
            </div>
            <div className="resume-experience">
                {personalInfo.phone}
            </div>
            <div className="resume-experience">
                {educationInfo.length > 0 ? educationInfo[0].school: null}
            </div>
        </div>
    )
}

export default Resume;