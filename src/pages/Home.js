import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import GetAppointment from './../components/GetAppointment'

import Odometer from './../components/odometer';

export default function Home() {
  const [showOdometer, setShowOdometer] = useState(false);
  const [overlayOpened, setOverlayOpened] = useState(false);

  useEffect(() => {
    if (!overlayOpened) {
      setShowOdometer(true); // Open the odometer overlay only once on component mount
      setOverlayOpened(true);
    }
  }, [overlayOpened]);

  const handleCloseOdometer = () => {
    setShowOdometer(false);
  };
  if (showOdometer) {
    document.body.classList.add('disable-scroll');
  } else {
    document.body.classList.remove('disable-scroll');
  }
  return (
  

    <div className="home">
       
     
        {showOdometer && (
          <div className="psuedo">
             <div className="odometer-container">
          <div className="odometer-overlay">
            <Odometer />
            <div className="odometer-content">Successful Surgeries</div>
            <button className="odometer-button" onClick={handleCloseOdometer}>close</button>
          </div></div></div>
        )}
      
      <section className="ent">
        <div className="home-header">
          <div className="heading">
            <h1>
              One of the best <b>ENT</b> hospitals
            </h1>
          </div>

          <div className="appointment-header">
            <GetAppointment />
          </div>

          <div className="locations-container">
            <div className="location-card">
              <p>
                <b className="location-title">Surat, City Light</b>
              </p>
              <p>Mon - Sat</p>
              <p>6:00 PM - 9:00 PM</p>
            </div>

            <div className="location-card">
              <p>
                <b className="location-title">Navsari</b>
              </p>
              <p>Mon - Sat</p>
              <p>10:00 AM - 4:00 PM</p>
            </div>
            <div className="location-card">
              <p>
                <b className="location-title">Bardoli</b>
              </p>
              <p>Mon - Sat</p>
              <p>10:00 AM - 4:00 PM</p>
            </div>
        </div>
        

        </div>
        
          <div className="cochlear-heading">
            <b>Best Cochlear Implant Surgeon in Surat, Gujarat</b>
          </div>

        <div className="implant-container">
          <div className="implant-card">
            <h2>
              <b>Cochlear</b> Implant
            </h2>
            <p>
              <b>Facility of Cochlear Implants for Congenital Deaf-Mute</b>
            </p>
          </div>

          <div className="implant-know-more">
            <div className="implant-contact">Call - +91 937270-57-640</div>
            <NavLink to="https://www.mayoclinic.org/tests-procedures/cochlear-implants/about/pac-20385021" target="_blank" className="action-button">
            Know More
          </NavLink>
          </div>

          {/* <div className="appointment-card">
            <p>
              <b>Get An Appointment Now!!</b>
            </p>
            <p>+91 93270-57-640</p>
          </div> */}
          <div className="implant-image-container">
            <img className="implant-image" alt="" />
          </div>
        </div>

        <div className="ent-cards-container">
          <div className="ent-card">
            <img id="ent-card-img1" alt=""/>
            <h3>Ear</h3>
            <p>
              You're surrounded by sounds all around you, and your two awesome
              body parts, your ears, allow you to hear them all. The
              responsibility for gathering, processing, and transmitting sound
              impulses to your brain rests with your ears. Additionally, your
              ears assist you in maintaining your balance.
            </p>
            <NavLink className="ent-card-button" to="https://en.wikipedia.org/wiki/Ear" target="_blank">Know More</NavLink>
          </div>
          <div className="ent-card">
            <img id="ent-card-img2" alt=""/>
            <h3>Nose</h3>
            <p>
              A unique sensation is the aroma of incense and flowers in your
              place of worship or that mouthwatering home-cooked meal. The nose
              serves as both an organ of smell and a major airway for air to
              enter and exit the lungs. Before air enters the lungs, it is
              warmed, moistened, and cleaned by the nose.
            </p>
            <NavLink className="ent-card-button" to="https://en.wikipedia.org/wiki/Human_nose" target="_blank">Know More</NavLink>
          </div>
          <div className="ent-card">
            <img id="ent-card-img3" alt=""/>
            <h3>Throat</h3>
            <p>
              The throat is positioned behind the mouth, above the oesophagus
              and windpipe, and below the nasal cavity. It serves as a vital
              conduit between the outside world and your internal organs. It
              transports air to the lungs and food to the oesophagus.
            </p>
            <NavLink className="ent-card-button" to="https://en.wikipedia.org/wiki/Throat" target="_blank">Know More</NavLink>
          </div>
        </div>
      </section>
      <section className="know-your-doctors">
        <h2 className="heading2">
          Know Your <b>Doctors</b>
        </h2>
        <div className="doc-card-container">
          <div className="doc-card">
            <img id="doc-img1" alt="" />
            <div className="doc-details">
              <h3 className="doc-name">Dr. Prayatna Kumar</h3>
              <ul>
                <li className="detail1">
                  <span>
                    <h4>M.S. E.N.T.</h4>
                    <h5>(Ear, Nose, Throat Specialist)</h5>
                  </span>
                </li>
                <li className="detail2">
                  <span>
                    <h4>Head & Neck Surgeon</h4>
                  </span>
                </li>
                <li className="detail3">
                  <span>
                    <h4>+91 937270-57-640</h4>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="doc-card">
            <img id="doc-img2" alt="" />
            <div className="doc-details">
              <h3 className="doc-name">Dr. Vidhi Gupta</h3>
              <ul>
                <li className="detail1">
                  <span>
                    <h4>M.B. (DLO) E.N.T.</h4>
                    <h5>(Ear, Nose, Throat Specialist)</h5>
                  </span>
                </li>
                <li className="detail2">
                  <span>
                    <h4>Neurootology & Vertigo</h4>
                  </span>
                </li>
                <li className="detail3">
                  <span>
                    <h4>+91 937270-57-640</h4>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="why-choose-us">
        <h2 className="heading2">
          Why <b>Choose Us</b>?
        </h2>
        <div className="choose-us-container">
          <img alt=""/>
          <ul className="reasons">
            <li>
              <span>
                

                

                <h3 className="reason-header">Qualified team of Experts</h3>
                <p className="reason-description">
                  Doctors at Sudeep ENT have taken special trainings for
                  Cochlear Implants, Skull base surgery, Neurootology & Vertigo.
                </p>
              </span>
            </li>
            <li>
              <span>
                <h3 className="reason-header">Experienced Doctors</h3>
                <p className="reason-description">
                  Doctors here have around 5-10years of experience and
                  performed more than 10000 surgeries.
                </p>
              </span>
            </li>
            <li>
              <span>
                <h3 className="reason-header">Open for World-wide Patients</h3>
                <p className="reason-description">
                  We treat patients from anywhere in the world. The doctors here
                  are passionate surgeons with high ethics.
                </p>
              </span>
            </li>
            <li>
              <span>
                <h3 className="reason-header">Super Specialty Hospitals</h3>
                <p className="reason-description">
                  Our hospitals have all the world class facilities like AC
                  rooms, lifts, emergency rooms & and latest equipments.
                </p>
              </span>
            </li>
          </ul>
        </div>
        <div className="appointment-foot">
          <GetAppointment />
        </div>
        {/* <div className="faq-link-container">
          <h2>
            Have a question related to <b>ENT</b>?
          </h2>
          <NavLink to="/" className="action-button">
            Check it out here
          </NavLink>
        </div> */}
      </section>
      <section className="reviews">
        <h2 className="heading2">
          <b>Patient Reviews</b>
        </h2>
        <div className="review-card-container">
          <div className="review-card">
            <div className="review-card-header">
              <h3>
                <b>Ankur Chaudhari</b>
              </h3>
              <div className="rating">
                <img alt=""/ >
                <img alt="" />
                <img alt="" />
                <img alt="" />
                <img alt="" />
              </div>
            </div>
            <p className="review-content">
            My sister had large mass in nose . She was diagnosed with nasal polyp. Dr prayatna Kumar sir operated her. She is fine now . Sudeep hospital is best for all ent related problems.
            </p>
          </div>
          <div className="review-card">
            <div className="review-card-header">
              <h3>
                <b>Alpana Vasava</b>
              </h3>
              <div className="rating">
                <img alt="" />
                <img alt="" />
                <img alt="" />
                <img alt="" />
                <img alt="" />
              </div>
            </div>
            <p className="review-content">
            Best ent hospital in surat.Navsari . Bardoli They are the only ent hospital having cochlear implant facilities in surat Dr.prayatna and Dr. Vidhi are very experienced and talented doctors.
            </p>
          </div>
          <div className="review-card">
            <div className="review-card-header">
              <h3>
                <b>Neha Chaudhari</b>
              </h3>
              <div className="rating">
                <img alt="" />
                <img alt="" />
                <img alt="" />
                <img alt="" />
                <img alt="" />
              </div>
            </div>
            <p className="review-content">
            Best ent hospital in navsari . They are the only ent hospital having cochlear implant facilities in navsari. bardoli. surat . Dr prayatna and dr vidhi are very experienced and talented doctors .

            </p>
          </div>
        </div>
        <div className="review-buttons-container">
          <NavLink to="https://www.google.com/maps/place/SUDEEP+ENT+HOSPITAL/@20.9503664,72.9185469,17z/data=!4m8!3m7!1s0x3be0f793ddb2c6c7:0x52a0dba773ed8697!8m2!3d20.9503614!4d72.9211218!9m1!1b1!16s%2Fg%2F11dymnpl2g?entry=ttu" target="_blank" className="action-button">
            Give a Review
          </NavLink>
          <NavLink to="https://www.google.com/maps/place/SUDEEP+ENT+HOSPITAL/@20.9503664,72.9185469,17z/data=!4m8!3m7!1s0x3be0f793ddb2c6c7:0x52a0dba773ed8697!8m2!3d20.9503614!4d72.9211218!9m1!1b1!16s%2Fg%2F11dymnpl2g?entry=ttu" target="_blank" className="action-button">
            More Reviews
          </NavLink>
        </div>
      </section>
    </div>
  );
}
