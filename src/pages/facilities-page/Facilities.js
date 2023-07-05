import "./Facilities.css";
import c from "./images_fac/c.png";
import ALLERGY_CLINIC from "./images_fac/ALLERGY_CLINIC.png";
import EAR_DISCHARGE from "./images_fac/EAR_DISCHARGE.png";
import LARYNGOLOGY from "./images_fac/LARYNGOLOGY.png";
import MICROEAR from "./images_fac/MICROEAR.png";
import OTOSCLEROSIS from "./images_fac/OTOSCLEROSIS.png";
import Rectangle from "./images_fac/Rectangle.png";
import SKULL_BASE from "./images_fac/SKULL_BASE.png";
import SNORING_AND_SLEEP from "./images_fac/SNORING_AND_SLEEP.png";
import TONSILLECTOMY from "./images_fac/TONSILLECTOMY.png";
import VERTIGO from "./images_fac/VERTIGO.png";
import GetAppointment from './../../components/GetAppointment'
import  useScrollToTop from "./../../hooks/useScrollToTop"

function Facilities() {
  useScrollToTop();
  return (
    // <!-- Main Heading ----------------------------------------------->

    <div  className="Facilities">
      

      
      <div className="main_div"></div>
      <div className="heading_fac">
        <p >Services & Facilities</p>
      </div>
      <div className="header_content">
        <div className="snf_image">
          <img src={Rectangle} alt="Images" />
        </div>
        <div className="snf_content">
          <p>
            The clinical expertise and nursing care provided by Sudeep ENT
            Hospital are of the highest caliber in a variety of disciplines. We
            provide a variety of services in the healthcare industry. Our
            priority is providing excellent service at a fair price. Our goal is
            to guarantee that all demographic groups have access to inexpensive
            healthcare services, and our mission is to provide quality-driven
            services. <br />
            <br />
            Sudeep ENT Hospital is meticulous in its attention to detail and our
            patients' welfare. We continuously aim for a quality culture, one
            that emphasizes ongoing development and superior patient care and
            services. Our comprehensive reporting of our quality data and care
            reflects our commitment to offering the greatest calibre of care. In
            addition to the medical services we offer, City goes above and above
            to meet our patients' healthcare needs.
          </p>

          <div className="apt_box">
           <GetAppointment/>

          </div>
        </div>
      </div>

      {/* <!-- General Facilities -----------------------------------> */}

      <div className="gen_fac">
        <div className="text_gen">
          General <span className="text_fac">Facilities</span>
        </div>
      

      {/* <!-- General Facilities Matrix --> */}
        <div className="matrix_div">
          <div className="matrix">
            <ul className="General_Fac_list">
              <li>Modular OT with Laminar Flow</li>
              <li>Vertigo Lab</li>
              <li>Karl Storz Spice Camera</li>
            </ul>

            <ul className="General_Fac_list">
              <li>Zeiss Microscope</li>
              <li>Audiologist</li>
              <li>Speech Room</li>
            </ul>

            <ul className="General_Fac_list">
              <li>Mediclaim</li>
              <li>Cashless Transactions</li>
              <li>Speech Therapy</li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- Special Surgery ---------------------------------------------> */}

      <div className="sur_sec">
        <div className="Special_Surgery">
          <div className="sp">
            Special <span className="sur">Surgeries</span>
          </div>
        </div>

        {/* <!-- Special Surgery Boxes --> */}

        <div className="all_box">
          {/* <!-- First Row --> */}

          <div className="box_r1">
            <a href="#details0">
              <div className="box0">
                <div className="box0_t">
                  <p className="asd"> COCHLEAR IMPLANT SURGERY</p>
                </div>
              </div>
            </a>

            <a href="#details1">
              <div className="box1">
                <div className="box1_t">
                  <p className="asd">VERTIGO CLINIC</p>
                </div>
              </div>
            </a>

            <a href="#details2">
              <div className="box2">
                <div className="box2_t">
                  <p className="asdd">
                    EAR DISCHARGE AND TYMPANOMASTOID SURGERY
                  </p>
                </div>
              </div>
            </a>

            <a href="#details3">
              <div className="box3">
                <div className="box3_t">
                  <p className="asd">SKULL BASE SURGERIES</p>
                </div>
              </div>
            </a>

            <a href="#details4">
              <div className="box4">
                <div className="box4_t">
                  <p className="asd">SNORING AND SLEEP APNOEA CLINIC</p>
                </div>
              </div>
            </a>
          </div>

          {/* <!-- Second row --> */}

          <div className="box_r2">
            <a href="#details5">
              <div className="box5">
                <div className="box5_t">
                  <p className="asd">TONSILLECTOMY AND ADENOID SURGERIES</p>
                </div>
              </div>
            </a>

            <a href="#details6">
              <div className="box6">
                <div className="box6_t">
                  <p className="asd">MICROEAR SURGERY</p>
                </div>
              </div>
            </a>

            <a href="#details7">
              <div className="box7">
                <div className="box7_t">
                  <p className="asd">ALLERGY CLINIC</p>
                </div>
              </div>
            </a>

            <a href="#details8">
              <div className="box8">
                <div className="box8_t">
                  <p className="asd">OTOSCLEROSIS AND STAPES SURGERY</p>
                </div>
              </div>
            </a>

            <a href="#details9">
              <div className="box9">
                <div className="box9_t">
                  <p className="asdd">LARYNGOLOGY AND MICROLARYNGEAL SURGERY</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* <!-- Paragraph of every Box -----------------------------------------------------------> */}

      <div className="all_para">
        {/* <!-- COCHLEAR IMPLANT SURGERY --> */}

        <div className="COCHLEAR_IMPLANT_SURGERY">
          <h2 id="details0" className="details0">
            <div className="text_prop">
              <div className="asdf"> COCHLEAR IMPLANT SURGERY</div>
            </div>
            <div className="know_more">
               <p><a href=" https://www.mayoclinic.org/tests-procedures/cochlear-implants/about/pac-20385021" target="_blank">KNOW MORE</a>
            </p>
            </div>
          </h2>
          <div className="underline"></div>
          <div className="img_coc0">
            <img src={c} alt="COCHLEAR IMPLANT SURGERY" />
            <div className="text_coc">
              <p>
              Cochlear implant surgery is a procedure that aims to restore hearing in individuals with severe to profound hearing loss. It involves the insertion of an electronic device into the inner ear, stimulating the auditory nerve and bypassing damaged or non-functioning hair cells. The implant consists of an external speech processor and an internal receiver-stimulator, working together to provide sound perception and understanding.
              </p>
              <p id="after_sur">AFTER SURGERY</p>
              <p>
              After cochlear implant surgery, it is important to take certain precautions to ensure proper healing and optimal outcomes. Patients are advised to avoid water exposure to the surgical site for several weeks and refrain from activities that may cause pressure or trauma to the head. They should also follow the recommended guidelines for device activation, mapping sessions, and regular follow-up appointments with their audiologist for adjustment and rehabilitation.

              </p>
            </div>
          </div>
        </div>

        {/* <!-- VERTIGO CLINIC --> */}

        <div className="VERTIGO">
          <h2 id="details1" className="details1">
            <div className="text_prop">
              <div className="asdf">VERTIGO</div>
            </div>
            <div className="know_more">
             <p><a href="https://www.nhsinform.scot/illnesses-and-conditions/ears-nose-and-throat/vertigo#:~:text=Vertigo%20is%20a%20symptom%2C%20rather,balance%20and%20do%20everyday%20tasks." target="_blank">KNOW MORE</a></p>
            </div>
          </h2>
          <div className="underline"></div>
          <div className="img_coc1">
            <img src={VERTIGO} alt="VERTIGO" />
            <div className="text_coc">
              <p>
              Vertigo is a symptom characterized by a spinning or whirling sensation, often accompanied by dizziness, imbalance, and nausea. It is commonly caused by disturbances in the inner ear, such as benign paroxysmal positional vertigo (BPPV), vestibular neuritis, or Ménière's disease. Treatment options for vertigo depend on the underlying cause and may include medication, physical therapy exercises, or in some cases, surgical interventions.

              </p>
              <p id="after_sur">AFTER SURGERY</p>
              <p>
              After vertigo surgery, it is crucial to take specific precautions to support the healing process and prevent complications. Patients are typically advised to avoid sudden head movements, strenuous activities, and lifting heavy objects for a certain period. They should also follow post-operative instructions regarding medication usage, wound care, and scheduled follow-up visits with their healthcare provider to monitor progress and address any concerns.
              </p>
            </div>
          </div>
        </div>

        {/* <!-- EAR DISCHARGE AND TYMPANOMASTOID SURGERY --> */}

        <div className="EAR DISCHARGE AND TYMPANOMASTOID SURGERY">
          <h2 id="details2" className="details2">
            <div className="text_prop">
              <div className="asdfg">
                EAR DISCHARGE AND TYMPANOMASTOID SURGERY
              </div>
            </div>
            <div className="know_more">
                <p><a href="https://fortworthent.net/audiology-hearing-loss/tympanoplasty-mastoidectomy/#:~:text=Tympanomastoidectomy%20procedure%20is%20performed%20in,or%20the%20cholesteatoma%20is%20removed" target="_blank">KNOW MORE</a></p>
            </div>
          </h2>
          <div className="underline"></div>
          <div className="img_coc2">
            <img src={EAR_DISCHARGE} alt="EAR DISCHARGE AND TYMPANOMASTOID SURGERY" />
            <div className="text_coc">
              <p>
              When the discharge is persistent or recurrent and associated with chronic infections or structural abnormalities, tympanomastoid surgery may be performed. This surgical procedure aims to address the underlying issues within the middle ear and mastoid bone, such as cholesteatoma or chronic otitis media, by removing infected tissue, reconstructing damaged structures, and improving overall ear health.

              </p>
              <p id="after_sur">AFTER SURGERY</p>
              <p>
              After ear discharge and tympanomastoid surgery, it is important to take precautions to promote healing and prevent complications. Patients are typically advised to avoid getting water into the operated ear, refrain from blowing the nose forcefully, and follow the prescribed antibiotic regimen. It is crucial to attend follow-up appointments for dressing changes and monitoring of the surgical site to ensure proper recovery and address any concerns.

              </p>
            </div>
          </div>
        </div>

        {/* <!-- SKULL BASE SURGERIES --> */}

        <div className="SKULL BASE SURGERIES">
          <h2 id="details3" className="details3">
            <div className="text_prop">
              <div className="asdf">SKULL BASE SURGERIES</div>
            </div>
            <div className="know_more">
               <p><a href="https://www.enthealth.org/be_ent_smart/what-is-skull-base-surgery/" target="_blank">KNOW MORE</a></p>
            </div>
          </h2>
          <div className="underline"></div>
          <div className="img_coc3">
            <img src={SKULL_BASE} alt="SKULL BASE SURGERIES" />
            <div className="text_coc">
              <p>
                
Skull base surgeries are complex procedures performed to address various conditions involving the base of the skull and the structures within it. These surgeries aim to remove tumors, repair defects, treat vascular abnormalities, or alleviate nerve compression. They are typically conducted through minimally invasive techniques or open approaches, depending on the specific condition. Close collaboration between neurosurgeons, otolaryngologists, and other specialists is essential for successful outcomes.


              </p>
              <p id="after_sur">AFTER SURGERY</p>
              <p>
              After skull base surgeries, taking precautions is crucial to support healing and reduce the risk of complications. Patients are often advised to avoid strenuous physical activities, lifting heavy objects, and activities that may increase intracranial pressure. They should also follow the prescribed medication regimen, attend regular follow-up appointments, and report any new or worsening symptoms promptly to their healthcare team. Proper wound care, infection prevention measures are essential for a successful recovery.

              </p>
            </div>
          </div>
        </div>

        {/* <!-- SNORING AND SLEEP APNOEA CLINIC --> */}

        <div className="SNORING AND SLEEP APNOEA CLINIC">
          <h2 id="details4" className="details4">
            <div className="text_prop">
              <div className="asdf">SNORING AND SLEEP APNOEA CLINIC</div>
            </div>
            <div className="know_more">
               <p><a href="https://www.mayoclinic.org/diseases-conditions/sleep-apnea/diagnosis-treatment/drc-20377636?sscid=61k7_8olq4&
" target="_blank">KNOW MORE</a></p>
            </div>
          </h2>
          <div className="underline"></div>
          <div className="img_coc4">
            <img src={SNORING_AND_SLEEP} alt="SNORING AND SLEEP APNOEA CLINIC" />
            <div className="text_coc">
              <p>
              A snoring and sleep apnea clinic is a specialized medical facility that focuses on the evaluation, diagnosis, and treatment of snoring and sleep apnea disorders. These clinics typically offer comprehensive sleep assessments, including sleep studies, to assess the severity and underlying causes of sleep-related breathing disorders. Treatment options may include lifestyle modifications, oral appliances, continuous positive airway pressure (CPAP) therapy, surgical interventions, or a combination of approaches tailored to each patient's specific needs. The goal of these clinics is to improve sleep quality, reduce symptoms, and enhance overall health and well-being for individuals affected by snoring and sleep apnea.

              </p>
              <p id="after_sur">AFTER SURGERY</p>
              <p>
                Sudeep ENT Hospital is meticulous in its attention to detail and
                our patients' welfare. We continuously aim for a quality
                culture, one that emphasizes ongoing development and superior
                patient care and services.Sudeep ENT Hospital is meticulous in
                its attention to detail and our patients' welfare. We
                continuously aim for a quality culture, one that emphasizes
                ongoing development and superior patient care and services.
              </p>
            </div>
          </div>
        </div>

        {/* <!-- TONSILLECTOMY AND ADENOID SURGERIES --> */}

        <div className="TONSILLECTOMY AND ADENOID SURGERIES">
          <h2 id="details5" className="details5">
            <div className="text_prop">
              <div className="asdf">TONSILLECTOMY AND ADENOID SURGERIES</div>
            </div>
            <div className="know_more">
                <p><a href="https://www.ncbi.nlm.nih.gov/books/NBK536942/" target="_blank">KNOW MORE</a></p>
            </div>
          </h2>
          <div className="underline"></div>
          <div className="img_coc5">
            <img src={TONSILLECTOMY} alt="TONSILLECTOMY AND ADENOID SURGERIES" />
            <div className="text_coc">
              <p>
              Tonsillectomy and adenoid surgeries involve removing the tonsils and adenoids to address chronic infections, sleep apnea, or related conditions. These procedures alleviate symptoms like recurrent sore throat and breathing difficulties. Post-surgery, patients follow care instructions for pain management, diet, and rest, with regular follow-up appointments for monitoring and support.
              </p>
              <p id="after_sur">AFTER SURGERY</p>
              <p>
              After tonsillectomy and adenoid surgeries, precautions include following a soft diet, avoiding strenuous activities, and maintaining good oral hygiene. Attend follow-up appointments for monitoring and promptly report any signs of infection or bleeding to the healthcare provider.
              </p>
            </div>
          </div>
        </div>

        {/* <!-- MICROEAR SURGERY --> */}

        <div className="MICROEAR SURGERY">
          <h2 id="details6" className="details6">
            <div className="text_prop">
              <div className="asdf">MICROEAR SURGERY</div>
            </div>
            <div className="know_more">
                <p><a href=" https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3451440/
" target="_blank">KNOW MORE</a></p>
            </div>
          </h2>
          <div className="underline"></div>
          <div className="img_coc6">
            <img src={MICROEAR} alt="MICROEAR SURGERY" />
            <div className="text_coc">
              <p>
              Microear surgeries are precise procedures for treating middle and inner ear conditions. Using advanced techniques and high-resolution microscopy, they aim to restore hearing and improve ear function. Close monitoring and follow-up care are crucial for successful outcomes.


              </p>
              <p id="after_sur">AFTER SURGERY</p>
              <p>
              After microear surgeries, it is important to take precautions to promote healing and prevent complications. Patients should avoid water exposure to the surgical site, refrain from inserting objects into the ear, and follow post-operative care instructions for medication usage and wound care. Regular follow-up appointments are essential for monitoring progress and addressing any concerns for optimal recovery.

              </p>
            </div>
          </div>
        </div>

        {/* <!-- ALLERGY CLINIC --> */}

        <div className="ALLERGY CLINIC">
          <h2 id="details7" className="details7">
            <div className="text_prop">
              <div className="asdf">ALLERGY CLINIC</div>
            </div>
            <div className="know_more">
              <p><a href="https://www.example.com" target="_blank">KNOW MORE</a></p>
            </div>
          </h2>
          <div className="underline"></div>
          <div className="img_coc7">
            <img src={ALLERGY_CLINIC} alt="ALLERGY CLINIC" />
            <div className="text_coc">
              <p>
              An ENT Allergy Clinic is a specialized medical facility that focuses on the diagnosis and management of allergies related to the ear, nose, and throat. These clinics offer comprehensive evaluations and tests to identify specific allergens that may trigger symptoms such as nasal congestion, sneezing, itching, or chronic sinusitis. Treatment options may include allergen avoidance, medication therapy, immunotherapy, or a combination of approaches tailored to each patient's needs. The goal of an ENT Allergy Clinic is to provide relief, improve quality of life, and help patients effectively manage their allergic conditions.

              </p>
              <p id="after_sur">AFTER SURGERY</p>
              <p>
                Sudeep ENT Hospital is meticulous in its attention to detail and
                our patients' welfare. We continuously aim for a quality
                culture, one that emphasizes ongoing development and superior
                patient care and services.Sudeep ENT Hospital is meticulous in
                its attention to detail and our patients' welfare. We
                continuously aim for a quality culture, one that emphasizes
                ongoing development and superior patient care and services.
              </p>
            </div>
          </div>
        </div>

        {/* <!-- OTOSCLEROSIS AND STAPES SURGERY --> */}

        <div className="OTOSCLEROSIS AND STAPES SURGERY">
          <h2 id="details8" className="details8">
            <div className="text_prop">
              <div className="asdf">OTOSCLEROSIS AND STAPES SURGERY</div>
            </div>
            <div className="know_more">
                <p><a href=" https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7265776/
" target="_blank">KNOW MORE</a></p>
            </div>
          </h2>
          <div className="underline"></div>
          <div className="img_coc8">
            <img src={OTOSCLEROSIS} alt="OTOSCLEROSIS AND STAPES SURGERY" />
            <div className="text_coc">
              <p>
              Otosclerosis is a condition characterized by abnormal bone growth in the middle ear, leading to hearing loss. Stapes surgery, also known as stapedectomy or stapedotomy, is a surgical procedure performed to treat otosclerosis. During the surgery, the stapes bone is replaced or reshaped to improve sound transmission in the inner ear. The goal of stapes surgery is to restore or improve hearing and alleviate symptoms caused by otosclerosis.

              </p>
              <p id="after_sur">AFTER SURGERY</p>
              <p>
              After otosclerosis and stapes surgery, it is crucial to take precautions to support healing and prevent complications. Patients should avoid activities that could increase inner ear pressure, such as heavy lifting or straining. They should also follow post-operative care instructions, attend scheduled follow-up appointments for monitoring, and report any concerning symptoms promptly to their healthcare provider.

              </p>
            </div>
          </div>
        </div>

        {/* <!-- LARYNGOLOGY AND MICROLARYNGEAL SURGERY --> */}

        <div className="LARYNGOLOGY AND MICROLARYNGEAL SURGERY">
          <h2 id="details9" className="details9">
            <div className="text_prop">
              <div className="asdf">LARYNGOLOGY AND MICROLARYNGEAL SURGERY</div>
            </div>
            <div className="know_more">
                <p><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3546402/" target="_blank">KNOW MORE</a></p>
            </div>
          </h2>
          <div className="underline"></div>
          <div className="img_coc9">
            <img src={LARYNGOLOGY} alt="LARYNGOLOGY AND MICROLARYNGEAL SURGERY" />
            <div className="text_coc">
              <p>
              Laryngology and microlaryngeal surgery are specialized fields focusing on the diagnosis and treatment of voice and throat disorders. These surgeries involve minimally invasive techniques to address conditions like vocal cord nodules, polyps, or lesions. The aim is to restore voice function and alleviate symptoms while preserving vocal cord health and function.

              </p>
              <p id="after_sur">AFTER SURGERY</p>
              <p>
              After laryngology and microlaryngeal surgery, precautions are essential for optimal healing and voice recovery. Patients are advised to rest their voice and avoid excessive talking or singing. They should follow post-operative care instructions, such as avoiding irritants, staying hydrated, and attending follow-up appointments for monitoring and voice rehabilitation if necessary.

              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Appointment Box --> */}

      <div className="last_apt_box">
        <GetAppointment/>
      </div>
    </div>
 
    );
    
}
export default Facilities;