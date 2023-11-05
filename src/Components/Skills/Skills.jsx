import React from 'react'
import './Skills.css'
import communication from '../../assets/communication.png'
import criticalThinking from '../../assets/critical-thinking.png'
import flexibility from '../../assets/flexibility.png'
import teamwork from '../../assets/teamwork.png'

const Skills = () => {
    return (
        <div className='container-skills appear-animation'>
            <h2 className='large bold'>SKILLS</h2>
            <section className="hardskills-con">
                <h2 className='medium-size' style={{margin: '2rem 0', textAlign: 'center' }}>Hard Skills</h2>
                <div className="skill-icon">
                    <span className='tooltip'>
                        <img className='skill-image' src="data:image/png;base64,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" alt="web-tool" />
                        <span className='tooltiptext'>HTML JS CSS</span>
                    </span>
                    <span className="tooltip">
                        <img className='skill-image tooltip' src="https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.jpg" alt="java" />
                        <span className='tooltiptext'>JAVA</span>
                    </span>
                    <span className="tooltip">
                        <img className='skill-image tooltip' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/1200px-Python.svg.png" alt="python" />
                        <span className='tooltiptext'>PYTHON</span>
                    </span>
                    <span className="tooltip">
                        <img className='skill-image tooltip' src="https://bilginc.com/editorFiles/3147aa77.png" alt="react" />
                        <span className='tooltiptext'>REACT</span>
                    </span>
                </div>
            </section>
            <section className="softskills-con">
                <h2 className="medium-size" style={{margin: '2rem 0', textAlign: 'center'}}>Soft Skills</h2>
                <div className="skill-icon">
                    <span className='tooltip'>
                        <img className='soft-skill-image' src={communication}/>
                              <span className='tooltiptext'>COMMUNICATION</span>
                    </span>
                    <span className='tooltip'>
                        <img className='soft-skill-image' src={criticalThinking}/>
                              <span className='tooltiptext'>CRITICAL THINKING</span>
                    </span>
                    <span className='tooltip'>
                        <img className='soft-skill-image' src={flexibility}/>
                              <span className='tooltiptext'>FLEXIBILITY</span>
                    </span>
                    <span className='tooltip'>
                        <img className='soft-skill-image' src={teamwork}/>
                              <span className='tooltiptext'>TEAMWORK</span>
                    </span>
                </div>
            </section>
        </div>
    )
}

export default Skills