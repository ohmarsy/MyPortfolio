import './Introduce.css'
import computer from '../../assets/computer.png'

import Type from 'react-typed'

const Introduce = () => {
  return (
    <>
      <div className='container-introduce'>
        <section className="name-con">
          <h2 className='large bold' style={{ height: "90px" }}>SUPHACHAI YARASAI</h2>
          <h2 className='light' style={{ height: "50px", fontSize: "1.5rem" }}>Computer Engineering @Khon Kaen University</h2>
          <h2 className='medium' style={{ fontSize: '2.5rem', textAlign: 'center' }}>I'm inrested in </h2>
        </section>
        <section style={{ width: '100%', height: '500px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: "1rem" }}>
          <img src={computer} alt="Computer" className='computer' />
          <Type
            className="typed-text medium"
            strings={[
              "Web Development",
              "Web Design",
              "UX/UI Design",
            ]}
            typeSpeed={50}
            backSpeed={100} 
            loop
          />
        </section>

        <section className="education-con appear-animation">
          <h2 className='large bold'>EDUCATION</h2>
          <div className="place-con">
            <img src="https://pirapatweb.web.app/images/en-1.png" alt="en-kku" className='image' />
            <div>
              <h2 className='medium-size medium ' style={{ height: '50px', color: '#000000bb' }}>Bachelor's Degree</h2>
              <h3 className='medium medium-size ' style={{ textAlign: 'center', color: '#000000bb' }}>(Undergraduate)</h3>
            </div>
          </div>
        </section>
      </div >
    </>
  )
}

export default Introduce