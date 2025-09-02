import React, { useState } from 'react';
import { Link } from "react-router-dom";

const LatestJobs = () => {
  const [showAll, setShowAll] = useState(false);

  // ✅ All latest jobs in one array
  const jobs = [


  { "to": "/latestjobs/indian_navy_ssc_officer_june_2026_online_form_extended", "text": "Indian Navy SSC Officer June 2026 Online Form" },
  { "to": "/latestjobs/ibps_rrb_14th_online_form_2025_13217_posts", "text": "IBPS RRB 14th Recruitment 2025" },
  { "to": "/latestjobs/mppgcl_ae_je_other_post_recruitment_2025_extended", "text": "MPPGCL AE/ JE & Other Post Recruitment 2025" },
  { "to": "/latestjobs/ccras_group_a_b_c_recruitment_2025", "text": "CCRAS Group A B C Recruitment 2025" },
  { "to": "/latestjobs/bpsc_hod_recruitment_2025", "text": "BPSC HOD Recruitment 2025" },
  { "to": "/latestjobs/bpsc_district_sports_officer_dso_recruitment_2025", "text": "BPSC District Sports Officer DSO Recruitment 2025" },
  { "to": "/latestjobs/railway_rrc_wcr_apprentice_recruitment_2025_start", "text": "Railway RRC WCR Apprentice Recruitment 2025" },
  { "to": "/latestjobs/supreme_court_sci_court_master_recruitment_2025_start", "text": "Supreme Court SCI Court Master Recruitment 2025" },
  { "to": "/latestjobs/rcfl_apprentice_recruitment_2025", "text": "RCFL Apprentice Recruitment 2025" },
  { "to": "/latestjobs/iocl_pipelines_division_apprentice_recruitment_2025", "text": "IOCL Pipelines Division Apprentice Recruitment 2025" },
  { "to": "/latestjobs/rpsc_1st_grade_teacher_agriculture_recruitment_2025", "text": "RPSC 1st Grade Teacher (Agriculture) Recruitment 2025" },
  { "to": "/latestjobs/up_police_si_recruitment_2025", "text": "UP Police SI Recruitment 2025" },
  { "to": "/latestjobs/ib_junior_intelligence_officer_grade_ii_recruitment_2025", "text": "IB Junior Intelligence Officer Grade II Recruitment 2025" },
  { "to": "/latestjobs/bpsc_aedo_recruitment_2025", "text": "BPSC AEDO Recruitment 2025" },
  { "to": "/latestjobs/aai_junior_executive_recruitment_2025_start", "text": "AAI Junior Executive Recruitment 2025" },
  { "to": "/latestjobs/bihar_bpsc_atp_recruitment_2025", "text": "Bihar BPSC ATP Recruitment 2025" },
  { "to": "/latestjobs/rpsc_junior_legal_officer_jlo_recruitment_2025", "text": "RPSC Junior Legal Officer JLO Recruitment 2025" },
  { "to": "/latestjobs/bihar_bpsc_aes_recruitment_2025", "text": "Bihar BPSC AES Recruitment 2025" },
  { "to": "/latestjobs/dsssb_delhi_high_court_attendant_recruitment_2025", "text": "DSSSB Delhi High Court Attendant Recruitment 2025" },
  { "to": "/latestjobs/dsssb_various_post_online_form_2025", "text": "DSSSB Various Post Recruitment 2025" },
  { "to": "/latestjobs/railway_rrc_sr_apprentice_recruitment_2025", "text": "Railway RRC SR Apprentice Recruitment 2025" },
  { "to": "/latestjobs/bssc_4th_graduate_level_recruitment_2025_chk", "text": "Bihar BSSC 4th Graduate Level Recruitment 2025" },
  { "to": "/latestjobs/bihar_bssc_office_attendant_online_form_2025", "text": "Bihar BSSC Office Attendant Recruitment 2025" },
  { "to": "/latestjobs/bsf_hc_ro_rm_recruitment_2025", "text": "BSF HC RO / RM Recruitment 2025" },
  { "to": "/latestjobs/bihar_shs_laboratory_technician_recruitment_2025", "text": "Bihar SHS Laboratory Technician Recruitment 2025" },
  { "to": "/latestjobs/rrb_section_controller_recruitment_2025", "text": "RRB Section Controller Recruitment 2025" },
  { "to": "/latestjobs/patna_high_court_stenographer_recruitment_2025", "text": "Patna High Court Stenographer Recruitment 2025" },
  { "to": "/latestjobs/rpsc_2nd_grade_teacher_recruitment_2025", "text": "RPSC 2nd Grade Teacher Recruitment 2025" },
  { "to": "/latestjobs/indian_army_dental_corps_recruitment_2025", "text": "Indian Army Dental Corps Recruitment 2025" },
  { "to": "/latestjobs/dsssb_non_teaching_various_post_recruitment_2025_start", "text": "DSSSB Non-Teaching Various Post Recruitment 2025" },
  { "to": "/latestjobs/lic_aao_ae_recruitment_2025", "text": "LIC AAO / AE Recruitment 2025" },
  { "to": "/latestjobs/rrc_eastern_railway_apprentice_recruitment_2025_start", "text": "RRC Eastern Railway Apprentice Recruitment 2025" },
  { "to": "/latestjobs/rpsc_1st_grade_teacher_recruitment_2025", "text": "RPSC 1st Grade Teacher Recruitment 2025" },
  { "to": "/latestjobs/railway_rrc_cr_apprentice_recruitment_2025", "text": "Railway RRC CR Apprentice Recruitment 2025" },
  { "to": "/latestjobs/indian_navy_tradesman_skilled_apprentice_recruitment_2025_start", "text": "Indian Navy Tradesman Skilled Apprentice Recruitment 2025" },
  { "to": "/latestjobs/uppsc_gic_lecturer_recruitment_2025", "text": "UPPSC GIC Lecturer Recruitment 2025" },
  { "to": "/latestjobs/indian_army_ncc_123rd_course_april_2026_online_form", "text": "Indian Army NCC 123rd Course April 2026 Online Form" },
  { "to": "/latestjobs/rpsc_si_platoon_commander_recruitment_2025_start", "text": "RPSC SI / Platoon Commander Recruitment 2025" },
  { "to": "/latestjobs/rrb_paramedical_staff_recruitment_2025", "text": "Railway RRB Paramedical Staff Recruitment 2025" },
  { "to": "/latestjobs/indian_army_jag_123rd_course_april_2026_online_form", "text": "Indian Army JAG 123rd Course April 2026 Online Form" },
  { "to": "/latestjobs/rssb_upper_school_teacher_recruitment_2025", "text": "RSSB Upper School Teacher Recruitment 2025" },
  { "to": "/latestjobs/rssb_primary_school_teacher_recruitment_2025", "text": "RSSB Primary School Teacher Recruitment 2025" },
  { "to": "/latestjobs/rssb_aayush_officer_recruitment_2025", "text": "RSSB Aayush Officer Recruitment 2025" },
  { "to": "/latestjobs/rssb_support_engineer_recruitment_2025", "text": "RSSB Support Engineer Recruitment 2025" },
  { "to": "/latestjobs/rssb_forest_guard_forester_surveyor_recruitment_2025", "text": "RSSB Forest Guard, Forester & Surveyor Recruitment 2025" },
  { "to": "/latestjobs/rssb_agriculture_supervisor_recruitment_2025", "text": "RSSB Agriculture Supervisor Recruitment 2025" },
  { "to": "/latestjobs/rpsc_veterinary_officer_recruitment_2025", "text": "RPSC Veterinary Officer Recruitment 2025" },
  
  
  
  
 /*
  
  { "to": "/latestjobs/upsc_cds_ii_correction_edit_form_2025", "text": "UPSC CDS II Correction / Edit Form 2025" },
  { "to": "/latestjobs/indian_coast_guard_navik_gd_yantrik_01_2026_02_2026_batch_edit_form", "text": "Indian Coast Guard Navik GD & Yantrik 01/2026 & 02/2026 Batch Edit Form" },
  { "to": "/latestjobs/up_polytechnic_jeecup_online_counseling_2025", "text": "UP Polytechnic JEECUP Online Counseling 2025" },
  { "to": "/latestjobs/mp_anganwadi_recruitment_2025", "text": "MP Anganwadi Recruitment 2025" },
  { "to": "/latestjobs/ssc_cpo_si_online_form_2025", "text": "SSC CPO SI Recruitment 2025" },
  { "to": "/latestjobs/bihar_shs_ayush_medical_officer_recruitment_2025_start", "text": "Bihar SHS Ayush Medical Officer Recruitment 2025" },
  { "to": "/latestjobs/rajasthan_police_constable_telecommunication_online_form_2025_correction_last_date", "text": "Rajasthan Police Constable Telecommunication Correction / Edit Form 2025" },
  { "to": "/latestjobs/isro_icrb_scientist_engineer_online_form_2025", "text": "ISRO ICRB Scientist / Engineer Recruitment 2025" },
  { "to": "/latestjobs/upessc_assistant_professor_b_ed_recruitment_2025", "text": "UPESSC Assistant Professor B.Ed Recruitment 2025" },
  { "to": "/latestjobs/railway_rrb_alp_edit_modify_application_form_2025", "text": "Railway RRB ALP Edit / Modify Application Form 2025" },
  { "to": "/latestjobs/mp_high_court_mphc_class_iv_recruitment_2025_start", "text": "MP High Court MPHC Class IV Recruitment 2025" },
  { "to": "/latestjobs/bssc_laboratory_assistant_recruitment_2025", "text": "BSSC Laboratory Assistant Recruitment 2025" },
  { "to": "/latestjobs/csir_iitr_junior_stenographer_recruitment_2025", "text": "CSIR IITR Junior Stenographer Recruitment 2025" },
  { "to": "/latestjobs/army_102_tes_54_recruitment_2025", "text": "Army 10+2 TES 54 Recruitment 2025" },
  { "to": "/latestjobs/uppsc_various_post_direct_recruitment_2025", "text": "UPPSC Various Post Direct Recruitment 2025" },
  { "to": "/latestjobs/up_police_constable_recruitment_2025", "text": "UP Police Constable Recruitment 2025" },
  { "to": "/latestjobs/iocl_refineries_division_online_form_2025_start", "text": "IOCL Refineries Division Recruitment 2025" },
  { "to": "/latestjobs/csir_nbri_lucknow_various_post_recruitment_2025", "text": "CSIR NBRI Lucknow Various Post Recruitment 2025" },
  { "to": "/latestjobs/kgmu_nursing_officer_recruitment_2025_start", "text": "KGMU Nursing Officer Recruitment 2025" },
  { "to": "/latestjobs/uiic_apprentice_recruitment_2025", "text": "UIIC Apprentice Recruitment 2025" },
  { "to": "/latestjobs/bhu_junior_clerk_recruitment_2025_date_extend", "text": "BHU Junior Clerk Recruitment 2025" },
  { "to": "/latestjobs/uppsc_technical_education_principal_recruitment_2025", "text": "UPPSC Technical Education Principal Recruitment 2025" },
  { "to": "/latestjobs/allahabad_university_teaching_recruitment_2025", "text": "Allahabad University Teaching Recruitment 2025" },
  { "to": "/latestjobs/rajasthan_rpsc_junior_chemist_recruitment_2025_start", "text": "Rajasthan RPSC Junior Chemist Recruitment 2025" },
  { "to": "/latestjobs/indian_airforce_agniveer_vayu_musician_intake_01_2026_recruitment_2025", "text": "Indian Airforce Agniveer Vayu Musician Intake 01/2026 Recruitment 2025" },
  { "to": "/latestjobs/uksssc_assistant_accountant_and_other_post_recruitment_2025", "text": "UKSSSC Assistant Accountant and Other Post Recruitment 2025" },
  { "to": "/latestjobs/bihar_cet_b_ed_online_form_2025", "text": "Bihar CET B.Ed Online Form 2025" },
  { "to": "/latestjobs/rpsc_assistant_electrical_inspector_recruitment_2025", "text": "RPSC Assistant Electrical Inspector Recruitment 2025" },
  { "to": "/latestjobs/mppsc_food_safety_officer_fso_recruitment_2025", "text": "MPPSC Food Safety Officer FSO Recruitment 2025" },
  { "to": "/latestjobs/up_police_jail_warder_recruitment_2025", "text": "UP Police Jail Warder Recruitment 2025" },
  { "to": "/latestjobs/ncrtc_various_post_vacancy_cancelled_notice_2025", "text": "NCRTC Various Post Vacancy Cancelled Notice 2025" },
  { "to": "/latestjobs/uppsc_various_post_recruitment_2025", "text": "UPPSC Various Post Recruitment 2025" },
  { "to": "/latestjobs/allahabad_high_court_research_associates_recruitment_2025_start", "text": "Allahabad High Court Research Associates Recruitment 2025" },
  { "to": "/latestjobs/rail_wheel_factory_rwf_apprentices_online_form_2025", "text": "Railway Rail Wheel Factory RWF Apprentices Recruitment 2025" },
  { "to": "/latestjobs/upsc_assistant_professor_online_form_2025", "text": "UPSC Assistant Professor Recruitment 2025" },
  { "to": "/latestjobs/union_bank_of_india_apprentice_recruitment_2025_date_extend", "text": "Union Bank of India Apprentice Recruitment 2025" },
  { "to": "/latestjobs/madhya_pradesh_mppsc_assistant_professor_recruitment_2025", "text": "Madhya Pradesh MPPSC Assistant Professor Recruitment 2025" },
  { "to": "/latestjobs/indian_overseas_bank_iob_apprentice_recruitment_2025", "text": "Indian Overseas Bank IOB Apprentice Recruitment 2025" },
  { "to": "/latestjobs/iffco_apprentice_recruitment_2025_2", "text": "IFFCO Apprentice Recruitment 2025" },
  { "to": "/latestjobs/secl_apprentice_recruitment_2025", "text": "IFFCO Apprentice Recruitment 2025" },
  { "to": "/latestjobs/uppsc_combined_state_upper_subordinate_services_recruitment_2025", "text": "UPPSC Combined State Upper Subordinate Services Recruitment 2025" },
  { "to": "/latestjobs/indian_army_ncc_special_entry_scheme_58th_course_recruitment_2025", "text": "Indian Army NCC Special Entry Scheme 58th Course Recruitment 2025" },
  { "to": "/latestjobs/mp_rojgar_panjiyan_online_form_2025", "text": "MP Rojgar Panjiyan Online Form 2025" },
  { "to": "/latestjobs/indian_navy_ssc_officer_january_recruitment_2025", "text": "Indian Navy SSC Officer January Recruitment 2025" },
  { "to": "/latestjobs/ntpc_assistant_executive_recruitment_2025", "text": "NTPC Assistant Executive Recruitment 2025" },
  { "to": "/latestjobs/up_aganwadi_recruitment_2024_apply_now", "text": "UP Anganwadi Recruitment 2024" },
  { "to": "/latestjobs/csir_iict_junior_secretariat_assistant_recruitment_2025", "text": "CSIR IICT Junior Secretariat Assistant Recruitment 2025" },
  { "to": "/latestjobs/iocl_apprentice_recruitment_2025", "text": "IOCL Apprentice Recruitment 2025" },
  { "to": "/latestjobs/indian_air_force_airmen_group_y_recruitment_2025", "text": "Indian Air Force Airmen Group-Y Recruitment 2025" },
  { "to": "/latestjobs/railway_rrc_ner_gorakhpur_apprentice_recruitment_2025", "text": "Railway RRC NER Gorakhpur Apprentice Recruitment 2025" },
  { "to": "/latestjobs/mpesb_group_4_recruitment_2025", "text": "MPESB Group 4 Recruitment 2025" },
  { "to": "/latestjobs/bombay_high_court_clerk_recruitment_2025", "text": "Bombay High Court Clerk Recruitment 2025" },
*/


    { to: "/latestjobs/bihar-police-csbc-driver-constable-recruitment-2025", text: "Bihar Police CSBC Driver Constable Online Form 2025 – Last Date Today" },
{ to: "/latestjobs/bihar-jeevika-recruitment-2025", text: "Bihar JEEVIKA Online Form 2025 (2747 Posts) – Date Extend" },
{ to: "/latestjobs/ibps-clerk-15th-recruitment-2025", text: "IBPS Clerk CSA 15th XV Online Form 2025 (10277 Post) – Start" },
{ to: "/latestjobs/up-police-si-recruitment-2025", text: "UP Police SI Online Form 2025 (4543 Post) – Start" },
{ to: "/latestjobs/rpsc-2nd-grade-teacher-recruitment-2025", text: "RPSC 2nd Grade Teacher Online Form 2025 (6500 Posts) – Start" },
{ to: "/latestjobs/bihar-vidhan-sabha-mains-recruitment-2025", text: "Bihar Vidhan Sabha 05/2024 Mains Online Form 2025" },
{ to: "/latestjobs/upsc-epfo-eo-ao-apfc-recruitment-2025", text: "UPSC EPFO EO / AO / APFC Online Form 2025 – Date Extend" },
{ to: "/latestjobs/indian-navy-ssc-executive-it-jan-2026", text: "Indian Navy SSC Executive IT January 2026 Online Form – Last Date Today" },
{ to: "/latestjobs/bsf-hc-ro-rm-recruitment-2025", text: "BSF HC RO / RM Online Form 2025" },
{ to: "/latestjobs/indian-army-dental-corps-recruitment-2025", text: "Indian Army Dental Corps Online Form 2025 – Start" },
{ to: "/latestjobs/dsssb-non-teaching-recruitment-2025", text: "DSSSB Non-Teaching Various Post Online Form 2025 – Start" },
{ to: "/latestjobs/bssc-4th-graduate-level-recruitment-2025", text: "Bihar BSSC 4th Graduate Level Online Form 2025 (1481 Posts)" },
{ to: "/latestjobs/lic-aao-ae-recruitment-2025", text: "LIC AAO / AE Online Form 2025 – Start" },

    { to: "/latestjobs/bihar-shs-anm-recruitment-2025", text: "Bihar SHS ANM Online Form 2025 – Last Date: 28 August 2025" },
    { to: "/latestjobs/bihar-shs-ophthalmic-assistant-recruitment-2025", text: "Bihar SHS Ophthalmic Assistant Online Form 2025 – Last Date: 28 August 2025" },
    { to: "/latestjobs/dsssb-delhi-high-court-attendant-recruitment-2025", text: "DSSSB Delhi High Court Attendant Online Form 2025 – Last Date: 24 September 2025" },
    { to: "/latestjobs/up-police-si-recruitment-2025", text: "UP Police SI Online Form 2025 (4543 Post) – Last Date: 11 September 2025" },
    { to: "/latestjobs/rrc-eastern-railway-apprentice-recruitment-2025", text: "RRC Eastern Railway Apprentice Online Form 2025 – Last Date: 13 September 2025" },
    { to: "/latestjobs/rpsc-1st-grade-teacher-recruitment-2025", text: "RPSC 1st Grade Teacher Online Form 2025 – Last Date: 12 September 2025" },
    { to: "/latestjobs/rrc-cr-apprentice-recruitment-2025", text: "Railway RRC CR Apprentice Online Form 2025 – Last Date: 11 September 2025" },
    { to: "/latestjobs/bsf-hc-ro-rm-recruitment-2025", text: "BSF HC RO / RM Online Form 2025 – Last Date: 23 September 2025" },
    { to: "/latestjobs/indian-navy-tradesman-skilled-apprentice-2025", text: "Indian Navy Tradesman Skilled Apprentice Online Form 2025 – Last Date: 02 September 2025" },
    { to: "/latestjobs/up-police-si-syllabus-exam-pattern-2025", text: "UP Police SI Syllabus / Exam Pattern 2025 – Last Date: 11 September 2025" },
    { to: "/latestjobs/uppsc-gic-lecturer-recruitment-2025", text: "UPPSC GIC Lecturer Online Form 2025 – Last Date: 12 September 2025" },
    { to: "/latestjobs/indian-army-ncc-123rd-course-april-2026-online-form", text: "Indian Army NCC 123rd Course April 2026 Online Form – Last Date: 11 September 2025" },
    { to: "/latestjobs/indian-airforce-agniveer-vayu-02-2026-edit-application-form", text: "Indian Airforce Agniveer Vayu 02/2026 Edit Application Form" },
    { to: "/latestjobs/ofss-bihar-11th-intermediate-spot-admission-2025-27", text: "OFSS Bihar 11th Intermediate Spot Admission 2025-27 – Last Date: 18 August 2025" },
    { to: "/latestjobs/rpsc-si-platoon-commander-recruitment-2025", text: "RPSC SI / Platoon Commander Online Form 2025 (1015 Posts) – Last Date: 08 September 2025" },
    { to: "/latestjobs/rrb-paramedical-staff-recruitment-2025", text: "Railway RRB Paramedical Staff CEN.No.03/2025 Online Form 2025 – Last Date: 08 September 2025" },
    { to: "/latestjobs/indian-navy-ssc-officer-june-2026-online-form", text: "Indian Navy SSC Officer June 2026 Online Form – Last Date: 01 September 2025" },
    { to: "/latestjobs/sbi-clerk-recruitment-2025", text: "SBI Clerk Online Form 2025 (5180 Posts) – Last Date: 26 August 2025" },
    { to: "/latestjobs/ib-security-assistant-recruitment-2025", text: "IB Security Assistant Online Form 2025 (4987 Post) – Last Date: 17 August 2025" },
    { to: "/latestjobs/bsf-constable-tradesman-recruitment-2025", text: "BSF Constable Tradesman Online Form 2025 – Last Date: 24 August 2025" },
    { to: "/latestjobs/ibps-clerk-15th-recruitment-2025", text: "IBPS Clerk CSA 15th XV Online Form 2025 (10277 Post) – Last Date: 21 August 2025" },
    { to: "/latestjobs/indian-navy-ssc-executive-it-jan-2026", text: "Indian Navy SSC Executive IT Jan 2026 Online Form – Last Date: 20 August 2025" },
    { to: "/latestjobs/oicl-assistant-recruitment-2025", text: "Oriental Insurance OICL Assistant Recruitment 2025" },
    { to: "/latestjobs/bihar-jeevika-online-form-2025", text: "Bihar Jeevika Online Form 2025" },
  ];

  // ✅ Show first 10 or all depending on state
  const visibleJobs = showAll ? jobs : jobs.slice(0, 22);

  return (
    <div className='border-2 border-borderColor'>
      <div>
        <h3 className='text-2xl font-semibold bg-customRed text-center text-white p-1'>
          Latest Jobs
        </h3>
        <ul className='list-disc list-inside pl-6'>
          {visibleJobs.map((item, index) => (
            <li key={index}>
              <Link to={item.to} className="text-blue-800 hover:underline">
                {item.text}
              </Link>
            </li>
          ))}
        </ul>

        {/* ✅ Show button only if more than 10 jobs */}
        {jobs.length > 10 && (
          <div className='text-center my-3'>
            <button
              onClick={() => setShowAll(!showAll)}
              className='font-bold border-b-2 border-blue-700 text-blue-700 hover:text-red-600'
            >
              {showAll ? "View Less" : "View More"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LatestJobs;
