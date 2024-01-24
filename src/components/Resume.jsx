import '../styles/Resume.scss';

function Resume({ personalInfo, educationInfo, experienceInfo }) {
    return (
        <div className="resume">
            <div className="resume-header">
                <h1 className="header-fullname">{personalInfo.fullName}</h1>
                <div className="contact-block">
                    <div className="contact-container">
                    {personalInfo.email.length > 0 ? <span className="material-symbols-outlined">mail</span> : null}
                        <p>{personalInfo.email}</p>
                        </div>
                    <div className="contact-container">
                    {personalInfo.phone.length > 0 ? <span className="material-symbols-outlined">call</span> : null}
                        <p>{personalInfo.phone}</p>
                        </div>
                    <div className="contact-container">
                    {personalInfo.address.length > 0 ? <span className="material-symbols-outlined">location_on</span> : null}
                        <p>{personalInfo.address}</p>
                        </div>
                </div>
            </div>
            <div className="resume-main">
                <div className="resume-education">
                    {educationInfo.length > 0 ? <h2 className="block-header">Education</h2> : null}
                    {educationInfo.map((elem, index) => {
                        return (
                            <div className="education-item" key={index}>
                                <div className="education-item-info">
                                    <div className="dates">{elem.startDate} {(elem.startDate.length > 0 && elem.endDate.length > 0) ? "\u2013" : null} {elem.endDate}</div>
                                    <p className="location">{elem.location}</p>
                                </div>
                                <div className="education-item-text">
                                    <p className='item-header'>{elem.school}</p>
                                    <p className="item-degree">{elem.degree}</p>
                                    </div>
                            </div> 
                        )
                    })}
                </div>
                <div className="resume-experience">
                    {experienceInfo.length > 0 ? <h2 className="block-header">Experience</h2> : null}
                    {experienceInfo.map((elem, index) => {
                        return (
                            <div className="experience-item" key={index}>
                                <div className="experience-item-info">
                                    <p className="dates">{elem.startDate} {(elem.startDate.length > 0 && elem.endDate.length > 0) ? '\u2013' : null} {elem.endDate}</p>
                                    <p className="location">{elem.location}</p>
                                </div>
                                <div className="experience-item-text">
                                    <p className="item-header">{elem.companyName}</p>
                                    <p className="position-title">{elem.positionTitle}</p>
                                    <p className="position-description">{elem.description}</p>
                                    </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Resume;