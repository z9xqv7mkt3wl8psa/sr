import React, { useState } from 'react';
import { Link } from "react-router-dom";

const AdmitCard = () => {
  const [showAll, setShowAll] = useState(false);

  // ✅ All admit card links in one array
  const admitCards = [

  { "to": "/admitcard/upsssc_pet_admit_card_2025", "text": "UPSSSC PET Admit Card 2025" },
  { "to": "/admitcard/railway_rrb_ntpc_102_inter_level_admit_card_2025", "text": "RRB NTPC 10+2 Inter Level Admit Card 2025" },
  { "to": "/admitcard/mpesb_primary_school_teacher_pstst_exam_date_2025", "text": "MPESB Primary School Teacher PSTST Exam Date 2025" },
  { "to": "/admitcard/bihar_police_csbc_constable_pet_exam_date_2025", "text": "Bihar Police CSBC Constable PET Exam Date 2025" },
  { "to": "/admitcard/csbc_bihar_police_driver_exam_date_2025", "text": "CSBC Bihar Police Driver Exam Date 2025" },
  { "to": "/admitcard/oriental_insurance_oicl_assistant_phase_i_admit_card_2025", "text": "Oriental Insurance OICL Assistant Phase-I Admit Card 2025" },
  { "to": "/admitcard/sbi_bank_po_mains_exam_date_2025", "text": "SBI Bank PO Mains Exam Date 2025" },
  { "to": "/admitcard/bpsc_aso_pre_admit_card_date_2025", "text": "BPSC ASO Pre Admit Card Date 2025" },
  { "to": "/admitcard/bpsc_71th_pre_exam_date_2025_out", "text": "BPSC 71th Pre Exam Date 2025" },
  { "to": "/admitcard/dsssb_various_post_admit_card_2025", "text": "DSSSB Various Post Admit Card 2025" },
  { "to": "/admitcard/bihar_vidhan_parishad_abo_mains_exam_2025", "text": "Bihar Vidhan Parishad ABO Mains Exam 2025" },
  { "to": "/admitcard/rpsc_senior_teacher_gr_ii_exam_city_details_2025", "text": "RPSC Senior Teacher Gr II Exam City Details 2025" },
  { "to": "/admitcard/railway_rrb_alp_01_2024_cbat_re_exam_city_details_2025", "text": "Railway RRB ALP 01/2024 CBAT Re-Exam City Details 2025" },
  { "to": "/admitcard/ukpsc_lower_pcs_mains_admit_card_2025", "text": "UKPSC Lower PCS Mains Admit Card 2025" },
  { "to": "/admitcard/sidbi_bank_officer_grade_a_b_admit_card_2025", "text": "SIDBI Bank Officer Grade A, B Admit Card 2025" },
  { "to": "/admitcard/bihar_vidhan_sabha_05_2024_mains_admit_card_2025", "text": "Bihar Vidhan Sabha 05/2024 Mains Admit Card 2025" },
  { "to": "/admitcard/indian_navy_civilian_admit_card_2025", "text": "Indian Navy Civilian Admit Card 2025" },
  { "to": "/admitcard/upsc_nda_ii_exam_time_table_2025", "text": "UPSC NDA II Exam Time Table 2025" },
  { "to": "/admitcard/pfrda_assistant_manager_admit_card_2025", "text": "PFRDA Assistant Manager Admit Card 2025" },
  { "to": "/admitcard/bank_of_baroda_lbo_admit_card_2025", "text": "Bank Of Baroda LBO Admit Card 2025" },
  { "to": "/admitcard/asrb_net_sms_sto_admit_card_2025", "text": "ASRB NET/ SMS/ STO Admit Card 2025" },
  { "to": "/admitcard/ssc_phase_13_re_exam_admit_card_2025", "text": "SSC Phase 13 Re-Exam Admit Card 2025" },
  { "to": "/admitcard/mpesb_excise_constable_revised_exam_date_2025", "text": "MPESB Excise Constable Revised Exam Date 2025" },
  { "to": "/admitcard/rssb_4th_class_group_d_exam_date_2025", "text": "RSSB 4th Class (Group D) Exam Date 2025" },
  { "to": "/admitcard/rssb_vdo_new_exam_date_2025", "text": "RSSB Village Development Officer VDO New Exam Date 2025" },
  { "to": "/admitcard/ibps_so_xv_15th_pre_admit_card_2025", "text": "IBPS SO XV 15th Pre Admit Card 2025" },
  { "to": "/admitcard/aiims_cre_group_b_c_admit_card_2025", "text": "AIIMS CRE Group B, C Admit Card 2025" },
  { "to": "/admitcard/railway_rrb_paramedical_staff_cen_04_2024_dv_call_letter_2025", "text": "Railway RRB Paramedical Staff CEN 04/2024 DV Call Letter 2025" },
  { "to": "/admitcard/bscb_bihar_co_operative_bank_assistant_csa_admit_card_2025", "text": "BSCB Bihar Co-operative Bank Assistant/ CSA Admit Card 2025" },
  { "to": "/admitcard/bpssc_bihar_police_enforcement_si_admit_card_2025", "text": "BPSSC Bihar Police Enforcement SI Admit Card 2025" },
  { "to": "/admitcard/bihar_bseb_deled_admit_card_2025_27", "text": "Bihar BSEB DELED Admit Card 2025-27" },
  { "to": "/admitcard/nicl_ao_mains_admit_card_2025", "text": "NICL AO Mains Admit Card 2025" },
  { "to": "/admitcard/uppsc_assistant_engineer_mains_exam_date_2025", "text": "UPPSC Assistant Engineer Mains Exam Date 2025" },
  { "to": "/admitcard/bihar_vidhan_sabha_security_guard_01_2023_pet_admit_card_2025", "text": "Bihar Vidhan Sabha Security Guard 01/2023 PET Admit Card 2025" },
  { "to": "/admitcard/afcat_02_2025_admit_card_out", "text": "AFCAT 02/2025 Admit Card" },
  { "to": "/admitcard/wbssc_assistant_teacher_admit_card_2025", "text": "WBSSC Assistant Teacher Admit Card 2025" },
  { "to": "/admitcard/bihar_btsc_tutor_nursing_admit_card_2025", "text": "Bihar BTSC Tutor Nursing Admit Card 2025" },
  { "to": "/admitcard/ibps_po_mt_xv_15_pre_admit_card_2025", "text": "IBPS PO MT XV 15 Pre Admit Card 2025" },
  { "to": "/admitcard/upsc_civil_services_ias_mains_admit_card_2025", "text": "UPSC Civil Services IAS Mains Admit Card 2025" },
  { "to": "/admitcard/bihar_police_bpssc_si_prohibition_mains_admit_card_2025", "text": "Bihar Police BPSSC SI Prohibition Mains Admit Card 2025" },
  { "to": "/admitcard/bihar_vidhan_sabha_office_attendant_05_2023_admit_card_2025", "text": "Bihar Vidhan Sabha Office Attendant 05/2023 Admit Card 2025" },
  { "to": "/admitcard/ssc_constable_gd_2024_pet_pst_admit_card_2025", "text": "SSC Constable GD 2024 PET/ PST Admit Card 2025" },
  { "to": "/admitcard/railway_rrb_ministerial_isolated_cen_07_2024_exam_date_2025", "text": "Railway RRB Ministerial & Isolated CEN 07/2024 Exam Date 2025" },
  { "to": "/admitcard/rbi_grade_a_b_admit_card_2025", "text": "RBI Grade A, B Admit Card 2025" },
  { "to": "/admitcard/bpssc_range_officer_of_forest_admit_card_2025", "text": "BPSSC Range Officer of Forest Admit Card 2025" },
  { "to": "/admitcard/ssc_chsl_102_tentative_vacancy_details_2025", "text": "SSC CHSL 10+2 Tentative Vacancy Details 2025" },
  { "to": "/admitcard/ssc_je_2025_tentative_vacancy", "text": "SSC JE 2025 Tentative Vacancy" },
  { "to": "/admitcard/ssc_jht_exam_city_details_2025", "text": "SSC JHT Exam City Details 2025" },
  { "to": "/admitcard/dsssb_assistant_teacher_08_2023_admit_card_2025", "text": "DSSSB Assistant Teacher 08/2023 Admit Card 2025" },
  { "to": "/admitcard/uksssc_police_constable_written_admit_card_2025", "text": "UKSSSC Police Constable Written Admit Card 2025" },
  { "to": "/admitcard/ssc_cgl_2025_tentative_vacancy", "text": "SSC CGL 2025 Tentative Vacancy" },
  { "to": "/admitcard/bihar_bssc_field_assistant_admit_card_2025", "text": "Bihar BSSC Field Assistant Pre Admit Card 2025" },
  { "to": "/admitcard/upsc_engineering_services_mains_admit_card_2025", "text": "UPSC Engineering Services Mains Admit Card 2025" },
  { "to": "/admitcard/sci_junior_court_assistant_descriptive_test_admit_card_2025", "text": "SCI Junior Court Assistant Descriptive Test Admit Card 2025" },
  { "to": "/admitcard/bihar_board_class_10th_12th_dummy_registration_card_2026", "text": "Bihar Board Class 10th & 12th Dummy Registration Card 2026" },
  { "to": "/admitcard/hpcl_junior_executive_exam_date_2025", "text": "HPCL Junior Executive Exam Date 2025" },
  { "to": "/admitcard/upsc_capf_ac_admit_card_2025", "text": "UPSC CAPF AC Admit Card 2025" },
  { "to": "/admitcard/up_ncvt_mis_iti_admit_card_2025", "text": "UP NCVT MIS ITI Admit Card 2025" },
  { "to": "/admitcard/rssb_librarian_gr_iii_admit_card_2025", "text": "RSSB Librarian Gr-III Admit Card 2025" },
  { "to": "/admitcard/indian_navy_agniveer_mr_musician_admit_card_2025", "text": "Indian Navy Agniveer MR Musician Admit Card 2025" },
  { "to": "/admitcard/rpsc_various_post_exam_date_2025", "text": "RPSC Various Post Exam Date 2025" },
  { "to": "/admitcard/upsssc_auditor_assistant_accountant_05_2023_dv_letter", "text": "UPSSSC Auditor & Assistant Accountant 05/2023 DV Letter" },
  { "to": "/admitcard/bseb_bihar_jee_neet_free_coaching_admit_card_2025_out", "text": "BSEB Bihar JEE/ NEET Free Coaching Admit Card 2025-2027" },
  { "to": "/admitcard/indian_territorial_army_officer_admit_card_2025", "text": "Indian Territorial Army Officer Admit Card 2025" },
  { "to": "/admitcard/jceceb_para_medical_entrance_exam_admit_card_2025", "text": "JCECEB Para Medical Entrance Exam Admit Card 2025" },
  { "to": "/admitcard/haryana_high_court_stenographer_admit_card_2025", "text": "Haryana High Court Stenographer Admit Card 2025" },
  { "to": "/admitcard/sbi_circle_based_officers_cbo_admit_card_2025", "text": "SBI Circle Based Officers CBO Admit Card 2025" },
  { "to": "/admitcard/upsc_cms_admit_card_2025", "text": "UPSC Combined Medical Services CMS Admit Card 2025" },
  { "to": "/admitcard/rajasthan_police_constable_new_exam_date_2025", "text": "Rajasthan Police Constable New Exam Date 2025" },
  { "to": "/admitcard/jharkhand_high_court_assistant_admit_card_2025", "text": "Jharkhand High Court Assistant Admit Card 2025" },
  { "to": "/admitcard/rpsc_research_assistant_admit_card_2025", "text": "RPSC Research Assistant Admit Card 2025" },
  { "to": "/admitcard/iob_local_bank_officer_lbo_admit_card_2025", "text": "IOB Local Bank Officer LBO Admit Card 2025" },
  { "to": "/admitcard/uppsc_pcs_2024_mains_admit_card_2025", "text": "UPPSC PCS Mains Admit Card 2025" },
  { "to": "/admitcard/uksssc_group_c_forester_admit_card_2025", "text": "UKSSSC Group C Forester Admit Card 2025" },
  { "to": "/admitcard/bssc_ldc_welfare_organiser_exam_date_2025", "text": "BSSC LDC & Welfare Organiser Exam Date 2025" },
  { "to": "/admitcard/nielit_ccc_exam_admit_card_june_2025", "text": "NIELIT CCC Admit Card June 2025" },
  { "to": "/admitcard/ibps_revised_exam_calendar_2025_2026", "text": "IBPS Revised Exam Calendar 2025-2026" },
  { "to": "/admitcard/rpsc_ras_mains_admit_card_2025", "text": "RPSC RAS Mains Admit Card 2025" },
  { "to": "/admitcard/rpsc_assistant_engineer_mains_exam_date_2025", "text": "RPSC Assistant Engineer Mains Exam Date 2025" },
  { "to": "/admitcard/rssb_exam_calendar_2025_revised", "text": "RSSB Exam Calendar 2025 Revised" },
  { "to": "/admitcard/cipet_admit_card_2025", "text": "CIPET Admit Card 2025" },
  { "to": "/admitcard/ignou_tee_exam_june_admit_card_2025", "text": "IGNOU TEE Exam June Admit Card 2025" },
  { "to": "/admitcard/idbi_jam_grade_o_admit_card_2025", "text": "IDBI JAM Grade 'O' Admit Card 2025" },
  { "to": "/admitcard/rsmssb_steno_pa_2024_phase_ii_exam_admit_card_2025_out", "text": "RSSB Stenographer / PA Phase II Exam Admit Card 2025" },
  { "to": "/admitcard/aai_non_executive_western_region_admit_card_2025", "text": "AAI Non Executive Western Region Admit Card 2025" },
  { "to": "/admitcard/nta_shreshta_admit_card_2025", "text": "NTA SHRESHTA Admit Card 2025" },
  { "to": "/admitcard/rpsc_apo_2024_mains_admit_card", "text": "RPSC APO 2024 Mains Admit Card" },
  { "to": "/admitcard/bitsat_admit_card_2025", "text": "BITSAT Admit Card 2025" },
  { "to": "/admitcard/upsc_exam_calendar_2026", "text": "UPSC Exam Calendar 2026" },
  { "to": "/admitcard/ssc_revised_exam_calendar_2025_26", "text": "SSC Revised Exam Calendar 2025-2026" },
  { "to": "/admitcard/bpsc_lecturer_in_mining_engineering_dv_schedule_2025", "text": "BPSC Lecturer in Mining Engineering DV Schedule 2025" },
  { "to": "/admitcard/uppsc_scientific_officer_2023_admit_card", "text": "UPPSC Scientific Officer 2023 Admit Card" },
  { "to": "/admitcard/bank_of_india_boi_so_admit_card_2025", "text": "Bank of India BOI SO Admit Card 2025" },
  { "to": "/admitcard/up_tgt_new_exam_date_2025", "text": "UP TGT / PGT Exam Date 2025" },
  { "to": "/admitcard/beltron_deo_dv_schedule_2025", "text": "BELTRON DEO DV Schedule 2025" },
  { "to": "/admitcard/swd_up_ias_pcs_free_coaching_admit_card_2025", "text": "SWD UP IAS / PCS Free Coaching Admit Card 2025" },
  { "to": "/admitcard/upsssc_up_gram_panchayat_adhikari_mains_exam_city_details_2025", "text": "UPSSSC UP Gram Panchayat Adhikari Mains Exam City Details 2025" },
  { "to": "/admitcard/rrvunl_junior_engineer_jr_chemist_dv_letter_2025", "text": "RRVUNL Junior Engineer, Jr Chemist DV Letter 2025" },
  { "to": "/admitcard/rpsc_agriculture_officer_admit_card_2025", "text": "RPSC Agriculture Officer Admit Card 2025" },




{ to: "/admitcard/bihar-bseb-deled-admit-card-2025", text: "Bihar BSEB DELED Admit Card 2025-27" },
{ to: "/admitcard/bihar-vidhan-sabha-security-guard-pet-admit-card-2025", text: "Bihar Vidhan Sabha Security Guard 01/2023 PET New Exam Date 2025" },
{ to: "/admitcard/bpsc-aso-new-exam-date-2025", text: "BPSC ASO New Exam Date 2025 – Out" },
{ to: "/admitcard/rrb-ntpc-10-2-inter-admit-card-2025", text: "RRB NTPC 10+2 Inter Level Admit Card / Exam City Details 2025 – Out" },
{ to: "/admitcard/afcat-02-2025-admit-card", text: "AFCAT 02/2025 Admit Card – Out" },
{ to: "/admitcard/aiims-cre-group-b-c-exam-city-details-2025", text: "AIIMS CRE Group B, C Exam City Details 2025 – Out" },
{ to: "/admitcard/wbssc-assistant-teacher-admit-card-2025", text: "WBSSC Assistant Teacher Admit Card 2025" },


    { to: "/admitcard/bihar-btsc-tutor-nursing-admit-card-2025", text: "Bihar BTSC Tutor Nursing Admit Card 2025 – Out" },
    { to: "/admitcard/bihar-bpssc-enforcement-si-admit-card-2025", text: "BPSSC Bihar Police Enforcement SI Admit Card Date 2025" },
    { to: "/admitcard/ibps-po-mt-xv-pre-admit-card-2025", text: "IBPS PO MT XV 15 Pre Admit Card 2025 – Out" },
    { to: "/admitcard/railway-rrb-ntpc-inter-admit-card-2025", text: "Railway RRB NTPC 10+2 Inter Level Admit Card 2025 – Out" },
    { to: "/admitcard/upsc-civil-services-ias-mains-admit-card-2025", text: "UPSC Civil Services IAS Mains Admit Card 2025 – Out" },
    { to: "/admitcard/bscb-assistant-csa-exam-date-2025", text: "BSCB Bihar Co-operative Bank Assistant/ CSA Exam Date 2025" },
    { to: "/admitcard/bihar-bpssc-si-prohibition-mains-admit-card-2025", text: "Bihar Police BPSSC SI Prohibition Mains Admit Card 2025 – Out" },
    { to: "/admitcard/bpsc-vice-principal-iti-admit-card-2025", text: "BPSC Vice Principal ITI Admit Card 2025 – Out" },
    { to: "/admitcard/bank-of-baroda-lbo-exam-date-2025", text: "Bank Of Baroda LBO Exam Date 2025 – Out" },
    { to: "/admitcard/bihar-vidhan-sabha-office-attendant-admit-card-2025", text: "Bihar Vidhan Sabha Office Attendant 05/2023 Admit Card 2025" },
    { to: "/admitcard/rajasthan-rssb-patwari-admit-card-2025", text: "Rajasthan RSSB Patwari Admit Card 2025 – Out" },
    { to: "/admitcard/bihar-vidhan-parishad-office-attendant-admit-card-2025", text: "Bihar Vidhan Parishad Office Attendant 03/2024 Admit Card 2025" },
    { to: "/admitcard/ssc-gd-constable-pet-pst-admit-card-2025", text: "SSC Constable GD 2024 PET/ PST Admit Card 2025 – Out" },
    { to: "/admitcard/rrb-ministerial-isolated-exam-date-2025", text: "Railway RRB Ministerial & Isolated CEN 07/2024 Exam Date 2025 – Out" },
    { to: "/admitcard/rbi-grade-a-b-admit-card-2025", text: "RBI Grade A, B Admit Card 2025 – Out" },
    { to: "/admitcard/bpssc-range-officer-forest-admit-card-2025", text: "BPSSC Range Officer of Forest Admit Card 2025 – Out" },
    { to: "/admitcard/afcat-02-2025-exam-city-details", text: "AFCAT 02/2025 Exam City Details – Out" },
    { to: "/admitcard/rssb-vdo-new-exam-date-2025", text: "RSSB VDO New Exam Date 2025" },
    { to: "/admitcard/bpsc-mvi-admit-card-2025", text: "BPSC MVI Admit Card 2025 – Out" },
    { to: "/admitcard/bpsc-mdo-admit-card-2025", text: "BPSC MDO Admit Card 2025" },
    { to: "/admitcard/bihar-vidhan-sabha-security-guard-pet-admit-card-2025", text: "Bihar Vidhan Sabha Security Guard 01/2023 PET Admit Card 2025" },
    { to: "/admitcard/ssc-chsl-10plus2-tentative-vacancy-2025", text: "SSC CHSL 10+2 Tentative Vacancy Details 2025" },
    { to: "/admitcard/ssc-je-tentative-vacancy-2025", text: "SSC JE 2025 Tentative Vacancy – Out" },
    { to: "/admitcard/ssc-jht-exam-city-details-2025", text: "SSC JHT Exam City Details 2025 – Out" },
    { to: "/admitcard/ssc-stenographer-c-d-admit-card-2025", text: "SSC Stenographer C, D Admit Card 2025 " },
    { to: "/admitcard/dsssb-assistant-teacher-08-2023-admit-card-2025", text: "DSSSB Assistant Teacher 08/2023 Admit Card 2025 – Out" },
  ];

  // ✅ Show first 10 by default
  const visibleAdmitCards = showAll ? admitCards : admitCards.slice(0, 26);

  return (
    <div className='border-2 border-borderColor mr-3'>
      <div>
        <h3 className='text-2xl font-semibold bg-customRed text-center text-white p-1'>Admit Card</h3>
        <ul className='list-disc list-inside pl-5'>
          {visibleAdmitCards.map((item, index) => (
            <li key={index}>
              <Link to={item.to} className="text-blue-800 hover:underline">
                {item.text}
              </Link>
            </li>
          ))}
        </ul>

        {/* ✅ Show button only if more than 10 admit cards */}
        {admitCards.length > 10 && (
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

export default AdmitCard;
