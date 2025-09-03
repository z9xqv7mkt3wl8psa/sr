import React from 'react'
import { Link } from "react-router-dom";
import Footer from "../footer/Footer.jsx";
import resultBanner from '../../images/resultbanner.png'; // <-- Replace with your image path

const Result = () => {
  return (
    <>
      <div className='border-2 border-gray-300 bg-white shadow-lg rounded-md mx-auto mt-6 max-w-4xl'>
        {/* Image at the top */}
   <img 
       src={resultBanner} 
       alt="Result Banner" 
       className="w-full h-64 md:h-80 lg:h-[400px] object-cover rounded-t-md" 
     />

        {/* Header */}
        <h3 className='text-2xl font-semibold bg-red-800 text-center text-white py-2'>
          Sarkari Exam Sarkari Result
        </h3>

        {/* Subheader */}
        <div className="bg-green-100 text-green-800 font-semibold text-center py-2 border-b border-gray-200">
          Sarkari Result Latest Government Exam Sarkari Results
        </div>

        {/* Result list */}
        <ul className='list-disc list-inside px-6 py-4 space-y-1'>
        


        <li>
  <Link to="/result/bihar_civil_court_clerk_mains_result_2025" className="text-blue-800 hover:underline">
    Bihar Civil Court UDC (Upper Divisional Clerk) Mains Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/upsssc_homoeopathic_pharmacist_2024_result" className="text-blue-800 hover:underline">
    UPSSSC Homoeopathic Pharmacist 2024 Result – Out
  </Link>
</li>
<li>
  <Link to="/result/bsf_hcm_asi_steno_pet_pst_result_2025" className="text-blue-800 hover:underline">
    BSF HCM & ASI Steno PET/ PST Result 2025
  </Link>
</li>
<li>
  <Link to="/result/aai_junior_executive_atc_result_2025" className="text-blue-800 hover:underline">
    AAI Junior Executive ATC Result 2025
  </Link>
</li>
<li>
  <Link to="/result/mpesb_pat_result_2025" className="text-blue-800 hover:underline">
    MPESB PAT Result 2025
  </Link>
</li>
<li>
  <Link to="/result/rajasthan_rssb_jail_prahari_result_2025" className="text-blue-800 hover:underline">
    Rajasthan RSSB Jail Prahari Result 2025
  </Link>
</li>
<li>
  <Link to="/result/rssb_primary_teacher_2022_final_result_cutoff" className="text-blue-800 hover:underline">
    RSSB Primary Teacher 2022 Final Result/ Cutoff
  </Link>
</li>
<li>
  <Link to="/result/ukpsc_si_2024_final_result" className="text-blue-800 hover:underline">
    UKPSC SI 2024 Final Result
  </Link>
</li>
<li>
  <Link to="/result/cbse_board_cbse_jr_assistant_final_result_2025" className="text-blue-800 hover:underline">
    CBSE Board CBSE Jr. Assistant Final Result 2025
  </Link>
</li>
<li>
  <Link to="/result/jssc_matric_level_exam_jmlcce_2023_result" className="text-blue-800 hover:underline">
    JSSC Matric Level Exam JMLCCE 2023 Result
  </Link>
</li>
<li>
  <Link to="/result/neet_pg_score_card_2025" className="text-blue-800 hover:underline">
    NEET PG Score Card 2025
  </Link>
</li>
<li>
  <Link to="/result/brabu_ug_3rd_semester_result_2025" className="text-blue-800 hover:underline">
    BRABU UG 3rd Semester Result 2025
  </Link>
</li>
<li>
  <Link to="/result/bihar_cet_b_ed_4th_merit_list_2025" className="text-blue-800 hover:underline">
    Bihar CET B.Ed 4th Merit List 2025
  </Link>
</li>
<li>
  <Link to="/result/bcece_2025_2nd_round_allotment_result" className="text-blue-800 hover:underline">
    BCECE 2025 2nd Round Allotment Result
  </Link>
</li>
<li>
  <Link to="/result/jharkhand_jceceb_b_ed_revised_result_2025" className="text-blue-800 hover:underline">
    Jharkhand JCECEB B.Ed Revised Result 2025
  </Link>
</li>
<li>
  <Link to="/result/dcece_pe_revised_mop_up_seat_allotment_result_2025" className="text-blue-800 hover:underline">
    DCECE PE Revised Mop Up Seat Allotment Result 2025
  </Link>
</li>
<li>
  <Link to="/result/ssc_jht_2024_marks" className="text-blue-800 hover:underline">
    SSC JHT 2024 Marks
  </Link>
</li>
<li>
  <Link to="/result/central_bank_credit_officer_final_result_2025" className="text-blue-800 hover:underline">
    Central Bank Credit Officer Final Result 2025
  </Link>
</li>
<li>
  <Link to="/result/railway_rpf_si_final_result_2025" className="text-blue-800 hover:underline">
    Railway RPF SI Final Result 2025
  </Link>
</li>
<li>
  <Link to="/result/bsphcl_assistant_executive_engineer_gto_result_2025" className="text-blue-800 hover:underline">
    BSPHCL Assistant Executive Engineer GTO Result 2025
  </Link>
</li>
<li>
  <Link to="/result/rssb_ldc_grade_ii_junior_assistant_2024_final_result" className="text-blue-800 hover:underline">
    RSSB LDC Grade II / Junior Assistant 2024 Final Result
  </Link>
</li>
<li>
  <Link to="/result/bihar_civil_court_clerk_mains_result_2025" className="text-blue-800 hover:underline">
    Bihar Civil Court UDC (Upper Divisional Clerk) Mains Result 2025
  </Link>
</li>
<li>
  <Link to="/result/bihar_iti_cat_2025_2nd_round_allotment_result" className="text-blue-800 hover:underline">
    Bihar ITI CAT 2025 2nd Round Allotment Result
  </Link>
</li>
<li>
  <Link to="/result/upsssc_junior_assistant_08_2022_final_result_chk" className="text-blue-800 hover:underline">
    UPSSSC Junior Assistant 08/2022 Final Result
  </Link>
</li>
<li>
  <Link to="/result/coast_guard_navik_cgept_02_2025_stage_2nd_result_2025" className="text-blue-800 hover:underline">
    Coast Guard Navik CGEPT 02/2025 Stage 2nd Result 2025
  </Link>
</li>
<li>
  <Link to="/result/rpsc_school_lecturer_pgt_result_2025" className="text-blue-800 hover:underline">
    RPSC School Lecturer PGT Result 2025
  </Link>
</li>
<li>
  <Link to="/result/rpsc_librarian_2024_result" className="text-blue-800 hover:underline">
    RPSC Librarian 2024 Result
  </Link>
</li>
<li>
  <Link to="/result/idbi_bank_jam_grade_o_final_result_2025" className="text-blue-800 hover:underline">
    IDBI Bank JAM Grade O Final Result 2025
  </Link>
</li>
<li>
  <Link to="/result/nta_csir_ugc_net_result_2025" className="text-blue-800 hover:underline">
    NTA CSIR UGC NET June Result 2025
  </Link>
</li>
<li>
  <Link to="/result/bpsc_school_teacher_tre_2_0_result_nios_deled" className="text-blue-800 hover:underline">
    BPSC School Teacher TRE 2.0 Result (NIOS DElEd)
  </Link>
</li>
<li>
  <Link to="/result/rajasthan_hc_civil_judge_pre_result_2025" className="text-blue-800 hover:underline">
    Rajasthan HC Civil Judge Pre Result 2025
  </Link>
</li>
<li>
  <Link to="/result/pspcl_assistant_lineman_result_2025" className="text-blue-800 hover:underline">
    PSPCL Assistant Lineman Result 2025
  </Link>
</li>
<li>
  <Link to="/result/sbi_bank_clerk_1st_wait_list_2025" className="text-blue-800 hover:underline">
    SBI Bank Clerk 1st Wait List With Marks 2025
  </Link>
</li>
<li>
  <Link to="/result/ssc_stenographer_c_d_final_marks_2025" className="text-blue-800 hover:underline">
    SSC Stenographer C, D Final Marks 2025
  </Link>
</li>
<li>
  <Link to="/result/bihar_btsc_insect_collector_final_result_2025" className="text-blue-800 hover:underline">
    Bihar BTSC Insect Collector Final Result 2025
  </Link>
</li>
<li>
  <Link to="/result/bihar_vidhan_sabha_junior_clerk_02_2024_result_2025" className="text-blue-800 hover:underline">
    Bihar Vidhan Sabha Junior Clerk 02/2024 Result 2025
  </Link>
</li>
<li>
  <Link to="/result/nta_icar_aieea_pg_and_phd_result_2025" className="text-blue-800 hover:underline">
    NTA ICAR AIEEA PG and PhD Result 2025
  </Link>
</li>
<li>
  <Link to="/result/jci_various_post_2024_result" className="text-blue-800 hover:underline">
    JCI Various Post 2024 Result
  </Link>
</li>
<li>
  <Link to="/result/niacl_apprentice_result_2025" className="text-blue-800 hover:underline">
    NIACL Apprentice Result 2025
  </Link>
</li>
<li>
  <Link to="/result/bihar_shsb_cho_result_2025" className="text-blue-800 hover:underline">
    Bihar SHSB CHO Result 2025
  </Link>
</li>
<li>
  <Link to="/result/supreme_court_of_india_spa_result_2025" className="text-blue-800 hover:underline">
    Supreme Court of India SPA Result 2025
  </Link>
</li>
<li>
  <Link to="/result/lnmu_ug_3rd_merit_list_2025_29" className="text-blue-800 hover:underline">
    LNMU UG 3rd Merit List 2025-29
  </Link>
</li>
<li>
  <Link to="/result/haryana_board_class_10th_compartmental_result_2025" className="text-blue-800 hover:underline">
    Haryana Board Class 10th Compartmental Result 2025
  </Link>
</li>
<li>
  <Link to="/result/bpsc_assistant_engineer_ae_32_33_2024_result" className="text-blue-800 hover:underline">
    BPSC Assistant Engineer AE 32, 33/2024 Result
  </Link>
</li>
<li>
  <Link to="/result/rajasthan_rsmssb_animal_attendant_result_2025" className="text-blue-800 hover:underline">
    Rajasthan RSMSSB Animal Attendant Result 2025
  </Link>
</li>
<li>
  <Link to="/result/rajasthan_rsmssb_junior_engineer_jen_result_2025" className="text-blue-800 hover:underline">
    Rajasthan RSMSSB Junior Engineer JEN Result 2025
  </Link>
</li>
<li>
  <Link to="/result/rsmssb_surveyor_and_mines_supervisor_result_2025" className="text-blue-800 hover:underline">
    RSMSSB Surveyor and Mines Supervisor Result 2025
  </Link>
</li>
<li>
  <Link to="/result/upsc_engineering_services_2024_reserve_list_out" className="text-blue-800 hover:underline">
    UPSC Engineering Services 2024 Reserve List
  </Link>
</li>
<li>
  <Link to="/result/up_board_10th_12th_compartmental_result_2025" className="text-blue-800 hover:underline">
    UP Board Class 10th/ 12th Compartmental Result 2025
  </Link>
</li>
<li>
  <Link to="/result/nta_ntet_result_score_card_2025" className="text-blue-800 hover:underline">
    NTA NTET Result/ Score Card 2025
  </Link>
</li>
<li>
  <Link to="/result/mpesb_group_1_2_sub_group_1_result_2025" className="text-blue-800 hover:underline">
    MPESB Group 1 & 2 Sub Group 1 Result 2025
  </Link>
</li>
<li>
  <Link to="/result/cbse_board_class_10th_supplementary_result_2025" className="text-blue-800 hover:underline">
    CBSE Board Class 10th Supplementary Result 2025
  </Link>
</li>
<li>
  <Link to="/result/union_bank_of_india_assistant_manager_result_2025" className="text-blue-800 hover:underline">
    Union Bank of India Assistant Manager Result 2025
  </Link>
</li>
<li>
  <Link to="/result/railway_secr_raipur_apprentice_final_merit_list_2025" className="text-blue-800 hover:underline">
    Railway SECR Raipur Apprentice Final Merit List 2025
  </Link>
</li>
<li>
  <Link to="/result/bihar_diploma_dece_le_2025_2nd_round_allotment_result" className="text-blue-800 hover:underline">
    Bihar Diploma DECE LE 2025 2nd Round Allotment Result
  </Link>
</li>
<li>
  <Link to="/result/ibps_clerk_14_reserve_list_2025" className="text-blue-800 hover:underline">
    IBPS Clerk 14 Reserve List 2025
  </Link>
</li>
<li>
  <Link to="/result/ibps_po_14_reserve_list_2025" className="text-blue-800 hover:underline">
    IBPS PO 14 Reserve List 2025
  </Link>
</li>
<li>
  <Link to="/result/ibps_so_14_reserve_list_2025" className="text-blue-800 hover:underline">
    IBPS SO 14 Reserve List 2025
  </Link>
</li>
<li>
  <Link to="/result/mpesb_pbbsc_msc_nursing_result_2025" className="text-blue-800 hover:underline">
    MPESB PBBSC MSC Nursing Result 2025
  </Link>
</li>
<li>
  <Link to="/result/nta_aiapget_result_2025" className="text-blue-800 hover:underline">
    NTA AIAPGET Result 2025
  </Link>
</li>
<li>
  <Link to="/result/india_post_gds_6th_merit_list_2025" className="text-blue-800 hover:underline">
    India Post GDS 6th Merit List 2025
  </Link>
</li>
<li>
  <Link to="/result/upsc_geo_scientist_mains_result_2025_name_wise" className="text-blue-800 hover:underline">
    UPSC Geo-Scientist Mains Result 2025 (Name Wise)
  </Link>
</li>
<li>
  <Link to="/result/bis_group_a_b_c_post_2024_final_result" className="text-blue-800 hover:underline">
    BIS Group A, B, C Post 2024 Final Result
  </Link>
</li>
<li>
  <Link to="/result/upsssc_eye_testing_officer_eto_2023_result" className="text-blue-800 hover:underline">
    UPSSSC Eye Testing Officer ETO 2023 Result
  </Link>
</li>
<li>
  <Link to="/result/indian_army_agniveer_cee_result_2025" className="text-blue-800 hover:underline">
    Indian Army Agniveer CEE Result 2025
  </Link>
</li>
<li>
  <Link to="/result/mpesb_pnst_gnmtst_result_2025" className="text-blue-800 hover:underline">
    MPESB PNST/ GNMTST Result 2025
  </Link>
</li>
<li>
  <Link to="/result/mp_anmtst_result_2025" className="text-blue-800 hover:underline">
    MP ANMTST Result 2025
  </Link>
</li>
<li>
  <Link to="/result/central_bank_cbi_apprentices_final_result_2025" className="text-blue-800 hover:underline">
    Central Bank CBI Apprentices Final Result 2025
  </Link>
</li>
<li>
  <Link to="/result/jpsc_civil_services_final_result_2025" className="text-blue-800 hover:underline">
    JPSC Civil Services Final Result 2025
  </Link>
</li>
<li>
  <Link to="/result/itbp_medical_officer_mo_result_2025" className="text-blue-800 hover:underline">
    ITBP Medical Officer MO Result 2025
  </Link>
</li>
<li>
  <Link to="/result/nta_ugc_net_june_result_2025" className="text-blue-800 hover:underline">
    NTA UGC NET June Result 2025
  </Link>
</li>
<li>
  <Link to="/result/railway_rrb_je_cbt_2_result_2025" className="text-blue-800 hover:underline">
    Railway RRB JE CBT-2 Result 2025
  </Link>
</li>
<li>
  <Link to="/result/hppsc_hpas_pre_exam_result_2025" className="text-blue-800 hover:underline">
    HPPSC HPAS Pre Exam Result 2025
  </Link>
</li>
<li>
  <Link to="/result/aiims_bsc_nursing_1st_round_seat_allocation_result_2025" className="text-blue-800 hover:underline">
    AIIMS BSc Nursing 1st Round Seat Allocation Result 2025
  </Link>
</li>
<li>
  <Link to="/result/mp_mpesb_addet_result_2025" className="text-blue-800 hover:underline">
    MP MPESB ADDET Result 2025
  </Link>
</li>
<li>
  <Link to="/result/iit_jee_advanced_score_cared_2025" className="text-blue-800 hover:underline">
    IIT JEE Advanced Score Cared 2025
  </Link>
</li>
<li>
  <Link to="/result/bihar_btsc_smo_result_2025" className="text-blue-800 hover:underline">
    Bihar BTSC SMO Final Result 2025
  </Link>
</li>
<li>
  <Link to="/result/bsf_group_b_c_various_post_result_2025" className="text-blue-800 hover:underline">
    BSF Group B, C Various Post Result 2025
  </Link>
</li>
<li>
  <Link to="/result/iert_entrance_result_2025" className="text-blue-800 hover:underline">
    IERT Entrance Result 2025
  </Link>
</li>
<li>
  <Link to="/result/railway_rrc_secr_apprentices_online_form_2025_933_post_start" className="text-blue-800 hover:underline">
    Railway SECR Nagpur Apprentice Merit List 2025
  </Link>
</li>
<li>
  <Link to="/result/nvs_non_teaching_various_post_result_2025" className="text-blue-800 hover:underline">
    NVS Non Teaching Various Post Result 2025
  </Link>
</li>
<li>
  <Link to="/result/indian_navy_incet_01_24_fireman_driver_result" className="text-blue-800 hover:underline">
    Indian Navy INCET 01/24 (Fireman, Driver) Result
  </Link>
</li>
<li>
  <Link to="/result/purnea_university_ug_1st_merit_list_2025_29" className="text-blue-800 hover:underline">
    Purnea University UG 1st Merit List 2025-29
  </Link>
</li>
<li>
  <Link to="/result/rsmssb_informatic_assistant_2023_final_result" className="text-blue-800 hover:underline">
    RSMSSB Informatic Assistant 2023 Final Result
  </Link>
</li>
<li>
  <Link to="/result/hpsc_assistant_professor_result_2025" className="text-blue-800 hover:underline">
    HPSC Assistant Professor Result 2025
  </Link>
</li>
<li>
  <Link to="/result/railway_secr_bilaspur_apprentice_provisional_merit_list_2025" className="text-blue-800 hover:underline">
    Railway SECR Bilaspur Apprentice Provisional Merit List 2025
  </Link>
</li>
<li>
  <Link to="/result/upsc_epfo_2024_shortlisted_for_skill_test" className="text-blue-800 hover:underline">
    UPSC EPFO 2024 Shortlisted for Skill Test
  </Link>
</li>
<li>
  <Link to="/result/hssc_group_c_group_25_shortlisted_candidates_2nd_list" className="text-blue-800 hover:underline">
    HSSC Group C (Group 25) Shortlisted Candidates 2nd List
  </Link>
</li>
<li>
  <Link to="/result/nfl_non_executives_various_post_2024_result_score_card" className="text-blue-800 hover:underline">
    NFL Non Executives Various Post 2024 Result/ Score Card
  </Link>
</li>
<li>
  <Link to="/result/central_bank_zone_based_officer_zbo_result_2025" className="text-blue-800 hover:underline">
    Central Bank Zone Based Officer ZBO Result 2025
  </Link>
</li>
<li>
  <Link to="/result/delhi_csir_crri_jsa_jst_skill_test_result_2025" className="text-blue-800 hover:underline">
    Delhi CSIR CRRI JSA, JST Skill Test Result 2025
  </Link>
</li>
<li>
  <Link to="/result/aic_management_trainee_mt_result_2025" className="text-blue-800 hover:underline">
    AIC Management Trainee MT Result 2025
  </Link>
</li>
<li>
  <Link to="/result/up_board_10th_12th_scrutiny_result_2025" className="text-blue-800 hover:underline">
    UP Board 10th / 12th Scrutiny Result 2025
  </Link>
</li>
<li>
  <Link to="/result/idbi_bank_jam_final_result_2025" className="text-blue-800 hover:underline">
    IDBI Bank JAM Final Result 2025
  </Link>
</li>
<li>
  <Link to="/result/bihar_home_guard_final_merit_list_2025" className="text-blue-800 hover:underline">
    Bihar Home Guard Final Merit List 2025
  </Link>
</li>
<li>
  <Link to="/result/uppsc_staff_nurse_unani_2023_final_result" className="text-blue-800 hover:underline">
    UPPSC Staff Nurse Unani 2023 Final Result
  </Link>
</li>
<li>
  <Link to="/result/uppsc_staff_nurse_ayurved_final_result_2025" className="text-blue-800 hover:underline">
    UPPSC Staff Nurse Ayurved Final Result 2025
  </Link>
</li>
<li>
  <Link to="/result/nta_cuet_ug_result_2025" className="text-blue-800 hover:underline">
    NTA CUET UG Result 2025
  </Link>
</li>
<li>
  <Link to="/result/up_cpet_result_2025" className="text-blue-800 hover:underline">
    UP CPET Result 2025
  </Link>
</li>
<li>
  <Link to="/result/rajasthan_rssb_sangnak_computer_2023_exam_result_2025" className="text-blue-800 hover:underline">
    Rajasthan RSSB Sangnak Computer 2023 Exam Result 2025
  </Link>
</li>
<li>
  <Link to="/result/railway_rrb_alp_cbt_ii_result_2025" className="text-blue-800 hover:underline">
    Railway RRB ALP CBT-2 Result 2025
  </Link>
</li>
<li>
  <Link to="/result/rajasthan_ptet_result_2025" className="text-blue-800 hover:underline">
    Rajasthan PTET Result 2025
  </Link>
</li>

        <li>
  <Link to="/result/bpsc-school-teacher-tre2-result-2025" className="text-blue-800 hover:underline">
    BPSC School Teacher TRE 2.0 Result (NIOS DElEd) – Out
  </Link>
</li>
<li>
  <Link to="/result/neet-pg-result-2025" className="text-blue-800 hover:underline">
    NEET PG Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/rajasthan-hc-civil-judge-pre-result-2025" className="text-blue-800 hover:underline">
    Rajasthan HC Civil Judge Pre Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/pspcl-assistant-lineman-result-2025" className="text-blue-800 hover:underline">
    PSPCL Assistant Lineman Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/bcece-le-1st-round-allotment-2025" className="text-blue-800 hover:underline">
    BCECE 2025 1st Round Allotment Result – Out
  </Link>
</li>
<li>
  <Link to="/result/bihar-dcece-2025-pe-mopup-seat-allotment" className="text-blue-800 hover:underline">
    Bihar DCECE 2025 PE Mop-Up Round Seat Allotment Result
  </Link>
</li>
<li>
  <Link to="/result/sbi-clerk-1st-waitlist-2025" className="text-blue-800 hover:underline">
    SBI Bank Clerk 1st Wait List With Marks 2025 – Out
  </Link>
</li>

        
           <li>
  <Link to="/result/ssc-steno-cd-final-marks-2025" className="text-blue-800 hover:underline">
    SSC Stenographer C, D Final Marks 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/bihar-btsc-insect-collector-result-2025" className="text-blue-800 hover:underline">
    Bihar BTSC Insect Collector Final Result 2025
  </Link>
</li>
<li>
  <Link to="/result/sbi-clerk-waitlist-2025" className="text-blue-800 hover:underline">
    SBI Bank Clerk 1st Wait List 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/bvs-junior-clerk-result-2025" className="text-blue-800 hover:underline">
    Bihar Vidhan Sabha Junior Clerk 02/2024 Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/nta-icar-aieea-result-2025" className="text-blue-800 hover:underline">
    NTA ICAR AIEEA PG and PhD Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/jci-various-post-result-2025" className="text-blue-800 hover:underline">
    JCI Various Post 2024 Result – Out
  </Link>
</li>
<li>
  <Link to="/result/rrb-paramedical-result-2025" className="text-blue-800 hover:underline">
    Railway RRB Paramedical Staff CEN 04/2024 Result/ Score Card 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/niacl-apprentice-result-2025" className="text-blue-800 hover:underline">
    NIACL Apprentice Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/cbse-superintendent-tier2-result-2025" className="text-blue-800 hover:underline">
    CBSE Superintendent Tier-2 Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/bihar-shsb-cho-result-2025" className="text-blue-800 hover:underline">
    Bihar SHSB CHO Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/sci-spa-result-2025" className="text-blue-800 hover:underline">
    Supreme Court of India SPA Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/lnmu-ug-3rd-merit-list-2025" className="text-blue-800 hover:underline">
    LNMU UG 3rd Merit List 2025-29 – Out
  </Link>
</li>
<li>
  <Link to="/result/nicl-ao-pre-result-2025" className="text-blue-800 hover:underline">
    NICL AO Scale-I Pre Result 2025
  </Link>
</li>
<li>
  <Link to="/result/hbse-class-10th-compartmental-result-2025" className="text-blue-800 hover:underline">
    Haryana Board Class 10th Compartmental Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/bpsc-ae-result-2025" className="text-blue-800 hover:underline">
    BPSC Assistant Engineer AE 32, 33/2024 Result – Out
  </Link>
</li>
<li>
  <Link to="/result/rsmssb-animal-attendant-result-2025" className="text-blue-800 hover:underline">
    Rajasthan RSMSSB Animal Attendant Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/rsmssb-jen-result-2025" className="text-blue-800 hover:underline">
    Rajasthan RSMSSB Junior Engineer JE Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/rsmssb-surveyor-mines-supervisor-result-2025" className="text-blue-800 hover:underline">
    RSMSSB Surveyor and Mines Supervisor Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/bihar-cet-bed-3rd-merit-list-2025" className="text-blue-800 hover:underline">
    Bihar CET B.Ed 3rd Merit List 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/upsc-engineering-services-reserve-list-2024" className="text-blue-800 hover:underline">
    UPSC Engineering Services 2024 Reserve List – Out
  </Link>
</li>
<li>
  <Link to="/result/up-board-10th-12th-compartmental-result-2025" className="text-blue-800 hover:underline">
    UP Board Class 10th/ 12th Compartmental Result 2025
  </Link>
</li>
<li>
  <Link to="/result/nta-ntet-result-2025" className="text-blue-800 hover:underline">
    NTA NTET Result/ Score Card 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/mpesb-group1-2-result-2025" className="text-blue-800 hover:underline">
    MPESB Group 1 & 2 Sub Group 1 Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/ubi-assistant-manager-result-2025" className="text-blue-800 hover:underline">
    Union Bank of India Assistant Manager Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/railway-secr-apprentice-final-merit-list-2025" className="text-blue-800 hover:underline">
    Railway SECR Raipur Apprentice Final Merit List 2025
  </Link>
</li>
<li>
  <Link to="/result/upsssc-junior-assistant-result-2025" className="text-blue-800 hover:underline">
    UPSSSC Junior Assistant 08/2022 Final Result – Out
  </Link>
</li>
<li>
  <Link to="/result/bihar-iticat-1st-round-allotment-2025" className="text-blue-800 hover:underline">
    Bihar ITI CAT 2025 1st Round Allotment Result
  </Link>
</li>

<li>
  <Link to="/result/bihar-diploma-dece-le-2025-2nd-round-allotment-result" className="text-blue-800 hover:underline">
    Bihar Diploma DECE LE 2025 2nd Round Allotment Result – Out
  </Link>
</li>
<li>
  <Link to="/result/ibps-clerk-14-reserve-list-2025" className="text-blue-800 hover:underline">
    IBPS Clerk 14 Reserve List 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/ibps-po-14-reserve-list-2025" className="text-blue-800 hover:underline">
    IBPS PO 14 Reserve List 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/ibps-so-14-reserve-list-2025" className="text-blue-800 hover:underline">
    IBPS SO 14 Reserve List 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/mpesb-pbbsc-msc-nursing-result-2025" className="text-blue-800 hover:underline">
    MPESB PBBSC MSC Nursing Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/nta-aiapget-result-2025" className="text-blue-800 hover:underline">
    NTA AIAPGET Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/india-post-gds-6th-merit-list-2025" className="text-blue-800 hover:underline">
    India Post GDS 6th Merit List 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/upsc-geo-scientist-mains-result-2025" className="text-blue-800 hover:underline">
    UPSC Geo-Scientist Mains Result 2025 (Name Wise) – Out
  </Link>
</li>
<li>
  <Link to="/result/bis-group-a-b-c-post-2024-final-result" className="text-blue-800 hover:underline">
    BIS Group A, B, C Post 2024 Final Result – Out
  </Link>
</li>
<li>
  <Link to="/result/upsssc-eye-testing-officer-eto-2023-result" className="text-blue-800 hover:underline">
    UPSSSC Eye Testing Officer ETO 2023 Result
  </Link>
</li>
<li>
  <Link to="/result/ssc-jht-2024-final-result" className="text-blue-800 hover:underline">
    SSC JHT 2024 Final Result – Out
  </Link>
</li>
<li>
  <Link to="/result/indian-army-agniveer-cee-result-2025" className="text-blue-800 hover:underline">
    Indian Army Agniveer CEE Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/mpesb-pnst-gnmtst-result-2025" className="text-blue-800 hover:underline">
    MPESB PNST/ GNMTST Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/mp-anmtst-result-2025" className="text-blue-800 hover:underline">
    MP ANMTST Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/cbi-apprentices-final-result-2025" className="text-blue-800 hover:underline">
    Central Bank CBI Apprentices Final Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/jpsc-civil-services-final-result-2025" className="text-blue-800 hover:underline">
    JPSC Civil Services Final Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/itbp-medical-officer-result-2025" className="text-blue-800 hover:underline">
    ITBP Medical Officer MO Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/brabu-ug-2nd-merit-list-2025-29" className="text-blue-800 hover:underline">
    BRABU UG 2nd Merit List 2025-29 – Out
  </Link>
</li>
<li>
  <Link to="/result/nta-ugc-net-june-result-2025" className="text-blue-800 hover:underline">
    NTA UGC NET June Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/rrb-je-cbt-2-result-2025" className="text-blue-800 hover:underline">
    Railway RRB JE CBT-2 Result / Score Card 2025 – Update
  </Link>
</li>
<li>
  <Link to="/result/hppsc-hpas-pre-exam-result-2025" className="text-blue-800 hover:underline">
    HPPSC HPAS Pre Exam Result 2025
  </Link>
</li>
<li>
  <Link to="/result/aiims-bsc-nursing-1st-round-seat-allotment-2025" className="text-blue-800 hover:underline">
    AIIMS BSc Nursing 1st Round Seat Allocation Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/mpesb-addet-result-2025" className="text-blue-800 hover:underline">
    MP MPESB ADDET Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/iit-jee-advanced-score-card-2025" className="text-blue-800 hover:underline">
    IIT JEE Advanced Score Cared 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/bihar-btsc-smo-final-result-2025" className="text-blue-800 hover:underline">
    Bihar BTSC SMO Final Result 2025
  </Link>
</li>
<li>
  <Link to="/result/bsf-group-b-c-various-post-result-2025" className="text-blue-800 hover:underline">
    BSF Group B, C Various Post Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/iert-entrance-result-2025" className="text-blue-800 hover:underline">
    IERT Entrance Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/secr-nagpur-apprentice-merit-list-2025" className="text-blue-800 hover:underline">
    Railway SECR Nagpur Apprentice Merit List 2025
  </Link>
</li>
<li>
  <Link to="/result/nvs-non-teaching-result-2025" className="text-blue-800 hover:underline">
    NVS Non Teaching Various Post Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/indian-navy-incet-01-24-result" className="text-blue-800 hover:underline">
    Indian Navy INCET 01/24 (Fireman, Driver) Result – Out
  </Link>
</li>
<li>
  <Link to="/result/purnea-university-ug-1st-merit-list-2025-29" className="text-blue-800 hover:underline">
    Purnea University UG 1st Merit List 2025-29
  </Link>
</li>
<li>
  <Link to="/result/rsmssb-informatic-assistant-2023-final-result" className="text-blue-800 hover:underline">
    RSMSSB Informatic Assistant 2023 Final Result
  </Link>
</li>
<li>
  <Link to="/result/hpsc-assistant-professor-result-2025" className="text-blue-800 hover:underline">
    HPSC Assistant Professor Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/secr-bilaspur-apprentice-provisional-merit-list-2025" className="text-blue-800 hover:underline">
    Railway SECR Bilaspur Apprentice Provisional Merit List 2025
  </Link>
</li>
<li>
  <Link to="/result/upsc-epfo-2024-skill-test-shortlist" className="text-blue-800 hover:underline">
    UPSC EPFO 2024 Shortlisted for Skill Test
  </Link>
</li>
<li>
  <Link to="/result/hssc-group-c-25-2nd-list" className="text-blue-800 hover:underline">
    HSSC Group C (Group 25) Shortlisted Candidates 2nd List
  </Link>
</li>
<li>
  <Link to="/result/nfl-non-executives-2024-result" className="text-blue-800 hover:underline">
    NFL Non Executives Various Post 2024 Result/ Score Card
  </Link>
</li>
<li>
  <Link to="/result/cbi-zone-based-officer-result-2025" className="text-blue-800 hover:underline">
    Central Bank Zone Based Officer ZBO Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/csir-crri-jsa-jst-skill-test-result-2025" className="text-blue-800 hover:underline">
    Delhi CSIR CRRI JSA, JST Skill Test Result 2025
  </Link>
</li>
<li>
  <Link to="/result/aic-management-trainee-result-2025" className="text-blue-800 hover:underline">
    AIC Management Trainee MT Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/up-board-10th-12th-scrutiny-result-2025" className="text-blue-800 hover:underline">
    UP Board 10th / 12th Scrutiny Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/idbi-bank-jam-final-result-2025" className="text-blue-800 hover:underline">
    IDBI Bank JAM Final Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/bihar-home-guard-final-merit-list-2025" className="text-blue-800 hover:underline">
    Bihar Home Guard Final Merit List 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/uppsc-staff-nurse-unani-2023-final-result" className="text-blue-800 hover:underline">
    UPPSC Staff Nurse Unani 2023 Final Result – Out
  </Link>
</li>
<li>
  <Link to="/result/uppsc-staff-nurse-ayurved-final-result-2025" className="text-blue-800 hover:underline">
    UPPSC Staff Nurse Ayurved Final Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/nta-cuet-ug-result-2025" className="text-blue-800 hover:underline">
    NTA CUET UG Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/up-cpet-result-2025" className="text-blue-800 hover:underline">
    UP CPET Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/rsmssb-sangnak-computer-2023-exam-result-2025" className="text-blue-800 hover:underline">
    Rajasthan RSSB Sangnak Computer 2023 Exam Result 2025
  </Link>
</li>
<li>
  <Link to="/result/hssc-cet-group-d-01-2023-additional-result" className="text-blue-800 hover:underline">
    HSSC CET Group-D 01/2023 Additional Post Result
  </Link>
</li>
<li>
  <Link to="/result/rrb-alp-cbt-2-result-2025" className="text-blue-800 hover:underline">
    Railway RRB ALP CBT-2 Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/rajasthan-ptet-result-2025" className="text-blue-800 hover:underline">
    Rajasthan PTET Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/upsssc-mukhya-sevika-05-2022-final-result" className="text-blue-800 hover:underline">
    UPSSSC UP Mukhya Sevika 05/2022 Final Result
  </Link>
</li>
<li>
  <Link to="/result/up-iti-1st-merit-list-2025" className="text-blue-800 hover:underline">
    UP ITI 1st Merit List 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/rrb-ntpc-graduate-level-answer-key-2025" className="text-blue-800 hover:underline">
    Railway RRB NTPC Graduate Level Answer Key 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/bcece-entrance-exam-result-2025" className="text-blue-800 hover:underline">
    BCECE Entrance Exam Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/magadh-university-ug-1st-merit-list-2025" className="text-blue-800 hover:underline">
    Magadh University UG 1st Merit List 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/bpssc-asi-steno-final-result-2025" className="text-blue-800 hover:underline">
    BPSSC ASI Steno Final Result 2025
  </Link>
</li>
<li>
  <Link to="/result/vksu-ug-1st-merit-list-2025" className="text-blue-800 hover:underline">
    VKSU UG 1st Merit List / Cutoff 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/patna-university-ug-3rd-merit-list-2025-29" className="text-blue-800 hover:underline">
    Patna University UG 3rd Merit List 2025-29 – Out
  </Link>
</li>
<li>
  <Link to="/result/nta-swayam-result-2025" className="text-blue-800 hover:underline">
    NTA SWAYAM Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/patna-hc-translator-final-result-2025" className="text-blue-800 hover:underline">
    Patna HC Translator Final Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/rajasthan-reet-certificate-download-2025" className="text-blue-800 hover:underline">
    Rajasthan REET Certificate Download 2025
  </Link>
</li>
<li>
  <Link to="/result/up-police-head-operator-final-result-2025" className="text-blue-800 hover:underline">
    UP Police Head Operator Final Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/gpat-result-2025" className="text-blue-800 hover:underline">
    GPAT Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/upsc-cpf-ac-final-result-with-marks-2025" className="text-blue-800 hover:underline">
    UPSC CPF Assistant Commandant Final Result With Marks 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/allahabad-university-pgat-result-2025" className="text-blue-800 hover:underline">
    Allahabad University PGAT Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/upcatet-result-2025" className="text-blue-800 hover:underline">
    UPCATET Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/rajasthan-cooperative-bank-rcrb-result-2025" className="text-blue-800 hover:underline">
    Rajasthan Cooperative Bank RCRB Various Post Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/cbi-credit-officer-result-2025" className="text-blue-800 hover:underline">
    Central Bank Credit Officer Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/nta-nift-final-result-2025" className="text-blue-800 hover:underline">
    NTA NIFT Final Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/mpesb-parvekshak-result-2025" className="text-blue-800 hover:underline">
    MPESB Parvekshak Result 2025 – Out
  </Link>
</li>
<li>
  <Link to="/result/uco-bank-lbo-final-result-2025" className="text-blue-800 hover:underline">
    UCO Bank LBO Final Result 2025 – Out
  </Link>
</li>

          {/* Add more results here */}
        </ul>
      </div>

      <Footer />
    </>
  );
}

export default Result;
