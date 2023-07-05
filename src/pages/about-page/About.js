import React from 'react'
import "./About.css"
import GetAppointment from './../../components/GetAppointment'
import  useScrollToTop from "./../../hooks/useScrollToTop"




function About() {
  useScrollToTop();
 
  return (
    <div  className='about'>
      
      <h1>Providing Care Since 1988</h1>
      <div className='header'>
      <GetAppointment />
      {/* <div className='get-appointment'><p>Get An Appointment Now!!</p> <br/> <p id="number">+91 93270-57-640</p></div> */}
      </div>

      {/* Home Cards */}

      <div className='cards'>

        <div className='card-layout'>
          <div className='card-icon'>
            <div className='cards-icon-bg'></div>
              <div className="patient-centric-icon"></div>
          </div>
          <div className='card-body'>
            <div className="card-title">Patient Centric</div>
            <div className="card-content">Sudeep ENT Hospitals prioritizes the needs, preferences, and values of the patient, and places them at the center of all decisions and actions taken by us. Ensuring continuity of Care while listening to Patients & providing them personalized care & Empowering them. </div>
          </div>
        </div>

        
        <div className='card-layout'>
          <div className='card-icon'>
            <div className='cards-icon-bg'></div>
              <div className="passionate-doctors-icon"></div>
          </div>
          <div className='card-body'>
            <div className="card-title">Passionate Doctors</div>
            <div className="card-content">Dr. Prayatna Kumar & Dr. Vidhi Gupta have taken special training for Cochlear Implants, Skull base surgery, Neurootology & Vertigo. The doctors are highly ethical and enthusiastic enough to update themselves regularly with the advancements.</div>
          </div>
        </div>

        <div className='card-layout'>
          <div className='card-icon'>
            <div className='cards-icon-bg'></div>
              <div className="super-spec-icon"></div>
          </div>
          <div className='card-body'>
            <div className="card-title">Super Speciality ENT Hospitals</div>
            <div className="card-content">The hospital has all the latest equipment and facilities to deal with all kind of ENT, Skull base, Cochlear Implant & Vertigo cases. State of art hospitals with modular operation theatres. Best ENT care, evidence based medicine.</div>
          </div>
        </div>

      </div>


    {/* Expert Cards */}
    
      <div className='Expert-cards'>
      <p>Our Expert <b>Doctors</b></p>
      <div className='Expert-bg'>
        <div className='doctor'>
          <div className='photo'></div>
          <div className='description'>Dr. Prayatna Kumar is a highly experienced young ENT doctor who has completed rigorous education & training in Cochlear Implants, Skull Base & Endoscopic Surgery. </div>
        </div>
        <p id="edu-spec">EDUCATION | EXPERIENCE | SPECIALISATION</p>
        <div className='edu-spec'>

          <div className='education'>

            <div className='edu-list'>
              <div className='edu-icon'></div>
              <div className="edu-content">M.S. E.N.T.<p>V.N.S.G.U., Surat</p></div>
            </div>
            <div className='edu-list'>
              <div className='edu-icon'></div>
              <div className="edu-content">M.B.B.S. <p>V.N.S.G.U., Surat</p></div>
            </div>

            <div className='edu-list'>
              <div className='exp-icon'></div>
              <div className="exp-content">7 yrs of Experience</div>            
            </div>

          </div>

          <div className='specialisation'>
            <p>SPECIALISATION</p>
            <div className='spec-bg'>

              <div className='spec'>
                <div className='icon-bg'></div>
                  <div className='cochlear-icon'></div>
                <div className='spec-name'>Cochlear Implant</div>
              </div>

              <div className='spec'>
                <div className='icon-bg'></div>
                  <div className='runny-nose-icon'></div>
                <div className='spec-name'>Nasal Endoscopy</div>
              </div>

              <div className='spec'>
                <div className='icon-bg'></div>
                  <div className='ear-drum-icon'></div>
                <div className='spec-name'>Skull Base</div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <br/><br/>
      <div className='Expert-bg'>
        <div className='doctor'>
          <div className='photo'></div>
          <div className='description'>Dr. Vidhi Gupta is a young ENT doctor, highly motivated, enthusiastic & eager to learn & implement her skills. She is highly empathetic & able to put her patients at ease. </div>
        </div>
        <p id="edu-spec">EDUCATION | EXPERIENCE | SPECIALISATION</p>
        <div className='edu-spec'>

          <div className='education'>
            <div className='edu-list'>
              <div className='edu-icon'></div>
              <div className="edu-content">D.L.O. E.N.T., <p>Manipal</p></div>
            </div>
            <div className='edu-list'>
              <div className='edu-icon'></div>
              <div className="edu-content">M.B.B.S.,<p>V.N.S.G.U., Surat</p></div>
            </div>

            <div className='edu-list'>
              <div className='exp-icon'></div>
              <div className="exp-content">3 yrs of Experience</div>            
            </div>
          </div>

          <div className='specialisation'>
          <p>SPECIALISATION</p>
            <div className='spec-bg'>

              <div className='spec'>
                <div className='icon-bg'></div>
                  <div className='cochlear-icon'></div>
                <div className='spec-name'>Stapes Surgery</div>
              </div>

              <div className='spec'>
                <div className='icon-bg'></div>
                  <div className='runny-nose-icon'></div>
                <div className='spec-name'>Nasal Endoscopy</div>
              </div>

              <div className='spec'>
                <div className='icon-bg'></div>
                  <div className='ear-drum-icon'></div>
                <div className='spec-name'>Vertigo</div>
              </div>
            </div>
          </div>

        </div>
      </div>
      </div>
      <GetAppointment />
      
      {/* Hospitals card */}
      
        <p id='contact-us' className='Hospitals-facilities'>Hospitals & <b>Facilites</b></p>
          <div className='Hospital-facilities-layout'  data-bs-ride="carousel" data-bs-interval="-1">
            <div className='Hospitals'>
              <div className='hospital-description'>
                <div className='hospital-image'></div>
                <div className='hospital-details'>
                  <div className='hospital-title'>Sudeep ENT Hospital, Navsari<p>Established in 2019</p></div>
                  <div className='hospital-time'>
                    <div className='time-icon'></div>
                    <span>10:00AM to 4:00PM</span>
                  </div>
                  <div className='hospital-number'>
                    <div className='phone-icon'></div>
                    <span>+91 937270-57-640</span>
                  </div>
                  {/* <div className='hospital-title'>Facilites Available</div> */}
                  {/* <div className='list-of-facilities'>
                    <ul>
                      <li><span> Lorem Ipsum</span></li>
                      <li><span>Lorem Ipsum</span></li>
                    </ul>
                    <ul>
                      <li><span>Lorem Ipsum</span></li>
                      <li><span>Lorem Ipsum</span></li>
                    </ul>

                  </div> */}
                </div>
              </div>
              <div className='hospital-address'>
                <div className='add-icon'></div>
                <div>Above YES Bank, Sandhkuva, Asha Nagar, Navsari, Gujarat 396445
</div>
              </div>
          </div>

          <div className='Hospitals'>
              <div className='hospital-description'>
                <div className='hospital-image'></div>
                <div className='hospital-details'>
                  <div className='hospital-title'>Sudeep ENT Hospital, Surat<p>Established in 2019</p></div>
                  <div className='hospital-time'>
                    <div className='time-icon'></div>
                    <span>6:00PM to 9:00PM</span>
                  </div>
                  <div className='hospital-number'>
                    <div className='phone-icon'></div>
                    <span>+91 937270-57-640</span>
                  </div>
                  {/* <div className='hospital-title'>Facilites Available</div>
                  <div className='list-of-facilities'>
                    <ul>
                      <li><span> Lorem Ipsum</span></li>
                      <li><span>Lorem Ipsum</span></li>
                    </ul>
                    <ul>
                      <li><span>Lorem Ipsum</span></li>
                      <li><span>Lorem Ipsum</span></li>
                    </ul>

                  </div> */}
                </div>
              </div>
              <div className='hospital-address'>
                <div className='add-icon'></div>
                <div>Ratna Sagar Apartment Station 204, 205, 206, Near Varachha New Police -, Varachha Road, Varachha Road, Surat, Gujarat 395006
</div>
              </div>
          </div>

          <div className='Hospitals'>
              <div className='hospital-description'>
                <div className='hospital-image'></div>
                <div className='hospital-details'>
                  <div className='hospital-title'>Sudeep ENT Hospital, Bardoli<p>Established in 2019</p></div>
                  <div className='hospital-time'>
                    <div className='time-icon'></div>
                    <span>10:00AM to 4:00PM</span>
                  </div>
                  <div className='hospital-number'>
                    <div className='phone-icon'></div>
                    <span>+91 937270-57-640</span>
                  </div>
                  {/* <div className='hospital-title'>Facilites Available</div>
                  <div className='list-of-facilities'>
                    <ul>
                      <li><span> Lorem Ipsum</span></li>
                      <li><span>Lorem Ipsum</span></li>
                    </ul>
                    <ul>
                      <li><span>Lorem Ipsum</span></li>
                      <li><span>Lorem Ipsum</span></li>
                    </ul>

                  </div> */}
                </div>
              </div>
              <div className='hospital-address'>
                <div className='add-icon'></div>
                <div>Block No-298, Gujarat State Highway, Surat - Bardoli Rd, opp. to DGVCL, Bardoli, Gujarat 394601
</div>
              </div>
          </div>


          </div>
        {/* Hopitals Card ends */}


    </div>
 )
}

export default About













    // <div className='About'>
    //     <div className='title'>
    //       <div className='content'>
    //         <div className='title-box'>
    //             <p>Get An Appointment Now!!<br/><b>+91 93270-57-640</b></p>
    //         </div>
    //        </div>
    //        <h3>Providing Care Since 1980s</h3>
    //     </div>
    //     <div className='cards'>
    //       <Cards logo={logo1} title="Patient Centric" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." />
    //       <Cards logo={logo1} title="Patient Centric" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." />
    //       <Cards logo={logo1} title="Patient Centric" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." />
    //     </div>
    //     <div className='heading'>
    //       <h1>Our Expert Doctors</h1>
    //       <Expert pic={Rectangle} degree={qualification} exp={experience} info="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." />
    //       <Expert pic={Rectangle} degree={qualification} exp={experience} info="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." />
    //     </div>
    // </div>
 
