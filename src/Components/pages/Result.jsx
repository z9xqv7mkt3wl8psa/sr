import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Result = () => {
  const [showAll, setShowAll] = useState(false);

  // ✅ Put all results in one array
  const results = [
{ to: "/result/bihar_civil_court_clerk_mains_result_2025", text: "Bihar Civil Court UDC (Upper Divisional Clerk) Mains Result 2025 – Out" },
{ to: "/result/upsssc_homoeopathic_pharmacist_2024_result", text: "UPSSSC Homoeopathic Pharmacist 2024 Result – Out" },
{ to: "/result/bsf_hcm_asi_steno_pet_pst_result_2025", text: "BSF HCM & ASI Steno PET/ PST Result 2025" },
{ to: "/result/aai_junior_executive_atc_result_2025", text: "AAI Junior Executive ATC Result 2025" },
{ to: "/result/mpesb_pat_result_2025", text: "MPESB PAT Result 2025" },
{ to: "/result/rajasthan_rssb_jail_prahari_result_2025", text: "Rajasthan RSSB Jail Prahari Result 2025" },
{ to: "/result/rssb_primary_teacher_2022_final_result_cutoff", text: "RSSB Primary Teacher 2022 Final Result/ Cutoff" },
{ to: "/result/ukpsc_si_2024_final_result", text: "UKPSC SI 2024 Final Result" },
{ to: "/result/cbse_board_cbse_jr_assistant_final_result_2025", text: "CBSE Board CBSE Jr. Assistant Final Result 2025" },
{ to: "/result/jssc_matric_level_exam_jmlcce_2023_result", text: "JSSC Matric Level Exam JMLCCE 2023 Result" },
{ to: "/result/neet_pg_score_card_2025", text: "NEET PG Score Card 2025" },
{ to: "/result/brabu_ug_3rd_semester_result_2025", text: "BRABU UG 3rd Semester Result 2025" },
{ to: "/result/bihar_cet_b_ed_4th_merit_list_2025", text: "Bihar CET B.Ed 4th Merit List 2025" },
{ to: "/result/bcece_2025_2nd_round_allotment_result", text: "BCECE 2025 2nd Round Allotment Result" },
{ to: "/result/jharkhand_jceceb_b_ed_revised_result_2025", text: "Jharkhand JCECEB B.Ed Revised Result 2025" },
{ to: "/result/dcece_pe_revised_mop_up_seat_allotment_result_2025", text: "DCECE PE Revised Mop Up Seat Allotment Result 2025" },
{ to: "/result/ssc_jht_2024_marks", text: "SSC JHT 2024 Marks" },
{ to: "/result/central_bank_credit_officer_final_result_2025", text: "Central Bank Credit Officer Final Result 2025" },
{ to: "/result/railway_rpf_si_final_result_2025", text: "Railway RPF SI Final Result 2025" },
{ to: "/result/bsphcl_assistant_executive_engineer_gto_result_2025", text: "BSPHCL Assistant Executive Engineer GTO Result 2025" },
{ to: "/result/rssb_ldc_grade_ii_junior_assistant_2024_final_result", text: "RSSB LDC Grade II / Junior Assistant 2024 Final Result" },
{ to: "/result/bihar_civil_court_clerk_mains_result_2025", text: "Bihar Civil Court UDC (Upper Divisional Clerk) Mains Result 2025" },
{ to: "/result/bihar_iti_cat_2025_2nd_round_allotment_result", text: "Bihar ITI CAT 2025 2nd Round Allotment Result" },
{ to: "/result/upsssc_junior_assistant_08_2022_final_result_chk", text: "UPSSSC Junior Assistant 08/2022 Final Result" },
{ to: "/result/coast_guard_navik_cgept_02_2025_stage_2nd_result_2025", text: "Coast Guard Navik CGEPT 02/2025 Stage 2nd Result 2025" },
{ to: "/result/rpsc_school_lecturer_pgt_result_2025", text: "RPSC School Lecturer PGT Result 2025" },
{ to: "/result/rpsc_librarian_2024_result", text: "RPSC Librarian 2024 Result" },
{ to: "/result/idbi_bank_jam_grade_o_final_result_2025", text: "IDBI Bank JAM Grade O Final Result 2025" },
{ to: "/result/nta_csir_ugc_net_result_2025", text: "NTA CSIR UGC NET June Result 2025" },
{ to: "/result/bpsc_school_teacher_tre_2_0_result_nios_deled", text: "BPSC School Teacher TRE 2.0 Result (NIOS DElEd)" },
{ to: "/result/rajasthan_hc_civil_judge_pre_result_2025", text: "Rajasthan HC Civil Judge Pre Result 2025" },
{ to: "/result/pspcl_assistant_lineman_result_2025", text: "PSPCL Assistant Lineman Result 2025" },
{ to: "/result/sbi_bank_clerk_1st_wait_list_2025", text: "SBI Bank Clerk 1st Wait List With Marks 2025" },
{ to: "/result/ssc_stenographer_c_d_final_marks_2025", text: "SSC Stenographer C, D Final Marks 2025" },
{ to: "/result/bihar_btsc_insect_collector_final_result_2025", text: "Bihar BTSC Insect Collector Final Result 2025" },
{ to: "/result/bihar_vidhan_sabha_junior_clerk_02_2024_result_2025", text: "Bihar Vidhan Sabha Junior Clerk 02/2024 Result 2025" },
{ to: "/result/nta_icar_aieea_pg_and_phd_result_2025", text: "NTA ICAR AIEEA PG and PhD Result 2025" },
{ to: "/result/jci_various_post_2024_result", text: "JCI Various Post 2024 Result" },
{ to: "/result/niacl_apprentice_result_2025", text: "NIACL Apprentice Result 2025" },
{ to: "/result/bihar_shsb_cho_result_2025", text: "Bihar SHSB CHO Result 2025" },
{ to: "/result/supreme_court_of_india_spa_result_2025", text: "Supreme Court of India SPA Result 2025" },
{ to: "/result/lnmu_ug_3rd_merit_list_2025_29", text: "LNMU UG 3rd Merit List 2025-29" },
{ to: "/result/haryana_board_class_10th_compartmental_result_2025", text: "Haryana Board Class 10th Compartmental Result 2025" },
{ to: "/result/bpsc_assistant_engineer_ae_32_33_2024_result", text: "BPSC Assistant Engineer AE 32, 33/2024 Result" },
{ to: "/result/rajasthan_rsmssb_animal_attendant_result_2025", text: "Rajasthan RSMSSB Animal Attendant Result 2025" },
{ to: "/result/rajasthan_rsmssb_junior_engineer_jen_result_2025", text: "Rajasthan RSMSSB Junior Engineer JEN Result 2025" },
{ to: "/result/rsmssb_surveyor_and_mines_supervisor_result_2025", text: "RSMSSB Surveyor and Mines Supervisor Result 2025" },
{ to: "/result/upsc_engineering_services_2024_reserve_list_out", text: "UPSC Engineering Services 2024 Reserve List" },
{ to: "/result/up_board_10th_12th_compartmental_result_2025", text: "UP Board Class 10th/ 12th Compartmental Result 2025" },
{ to: "/result/nta_ntet_result_score_card_2025", text: "NTA NTET Result/ Score Card 2025" },
{ to: "/result/mpesb_group_1_2_sub_group_1_result_2025", text: "MPESB Group 1 & 2 Sub Group 1 Result 2025" },
{ to: "/result/cbse_board_class_10th_supplementary_result_2025", text: "CBSE Board Class 10th Supplementary Result 2025" },
{ to: "/result/union_bank_of_india_assistant_manager_result_2025", text: "Union Bank of India Assistant Manager Result 2025" },
{ to: "/result/railway_secr_raipur_apprentice_final_merit_list_2025", text: "Railway SECR Raipur Apprentice Final Merit List 2025" },
{ to: "/result/bihar_diploma_dece_le_2025_2nd_round_allotment_result", text: "Bihar Diploma DECE LE 2025 2nd Round Allotment Result" },
{ to: "/result/ibps_clerk_14_reserve_list_2025", text: "IBPS Clerk 14 Reserve List 2025" },
{ to: "/result/ibps_po_14_reserve_list_2025", text: "IBPS PO 14 Reserve List 2025" },
{ to: "/result/ibps_so_14_reserve_list_2025", text: "IBPS SO 14 Reserve List 2025" },
{ to: "/result/mpesb_pbbsc_msc_nursing_result_2025", text: "MPESB PBBSC MSC Nursing Result 2025" },
{ to: "/result/nta_aiapget_result_2025", text: "NTA AIAPGET Result 2025" },
{ to: "/result/india_post_gds_6th_merit_list_2025", text: "India Post GDS 6th Merit List 2025" },
{ to: "/result/upsc_geo_scientist_mains_result_2025_name_wise", text: "UPSC Geo-Scientist Mains Result 2025 (Name Wise)" },
{ to: "/result/bis_group_a_b_c_post_2024_final_result", text: "BIS Group A, B, C Post 2024 Final Result" },
{ to: "/result/upsssc_eye_testing_officer_eto_2023_result", text: "UPSSSC Eye Testing Officer ETO 2023 Result" },
{ to: "/result/indian_army_agniveer_cee_result_2025", text: "Indian Army Agniveer CEE Result 2025" },
{ to: "/result/mpesb_pnst_gnmtst_result_2025", text: "MPESB PNST/ GNMTST Result 2025" },
{ to: "/result/mp_anmtst_result_2025", text: "MP ANMTST Result 2025" },
{ to: "/result/central_bank_cbi_apprentices_final_result_2025", text: "Central Bank CBI Apprentices Final Result 2025" },
{ to: "/result/jpsc_civil_services_final_result_2025", text: "JPSC Civil Services Final Result 2025" },
{ to: "/result/itbp_medical_officer_mo_result_2025", text: "ITBP Medical Officer MO Result 2025" },
{ to: "/result/nta_ugc_net_june_result_2025", text: "NTA UGC NET June Result 2025" },
{ to: "/result/railway_rrb_je_cbt_2_result_2025", text: "Railway RRB JE CBT-2 Result 2025" },
{ to: "/result/hppsc_hpas_pre_exam_result_2025", text: "HPPSC HPAS Pre Exam Result 2025" },
{ to: "/result/aiims_bsc_nursing_1st_round_seat_allocation_result_2025", text: "AIIMS BSc Nursing 1st Round Seat Allocation Result 2025" },
{ to: "/result/mp_mpesb_addet_result_2025", text: "MP MPESB ADDET Result 2025" },
{ to: "/result/iit_jee_advanced_score_cared_2025", text: "IIT JEE Advanced Score Cared 2025" },
{ to: "/result/bihar_btsc_smo_result_2025", text: "Bihar BTSC SMO Final Result 2025" },
{ to: "/result/bsf_group_b_c_various_post_result_2025", text: "BSF Group B, C Various Post Result 2025" },
{ to: "/result/iert_entrance_result_2025", text: "IERT Entrance Result 2025" },
{ to: "/result/railway_rrc_secr_apprentices_online_form_2025_933_post_start", text: "Railway SECR Nagpur Apprentice Merit List 2025" },
{ to: "/result/nvs_non_teaching_various_post_result_2025", text: "NVS Non Teaching Various Post Result 2025" },
{ to: "/result/indian_navy_incet_01_24_fireman_driver_result", text: "Indian Navy INCET 01/24 (Fireman, Driver) Result" },
{ to: "/result/purnea_university_ug_1st_merit_list_2025_29", text: "Purnea University UG 1st Merit List 2025-29" },
{ to: "/result/rsmssb_informatic_assistant_2023_final_result", text: "RSMSSB Informatic Assistant 2023 Final Result" },
{ to: "/result/hpsc_assistant_professor_result_2025", text: "HPSC Assistant Professor Result 2025" },
{ to: "/result/railway_secr_bilaspur_apprentice_provisional_merit_list_2025", text: "Railway SECR Bilaspur Apprentice Provisional Merit List 2025" },
{ to: "/result/upsc_epfo_2024_shortlisted_for_skill_test", text: "UPSC EPFO 2024 Shortlisted for Skill Test" },
{ to: "/result/hssc_group_c_group_25_shortlisted_candidates_2nd_list", text: "HSSC Group C (Group 25) Shortlisted Candidates 2nd List" },
{ to: "/result/nfl_non_executives_various_post_2024_result_score_card", text: "NFL Non Executives Various Post 2024 Result/ Score Card" },
{ to: "/result/central_bank_zone_based_officer_zbo_result_2025", text: "Central Bank Zone Based Officer ZBO Result 2025" },
{ to: "/result/delhi_csir_crri_jsa_jst_skill_test_result_2025", text: "Delhi CSIR CRRI JSA, JST Skill Test Result 2025" },
{ to: "/result/aic_management_trainee_mt_result_2025", text: "AIC Management Trainee MT Result 2025" },
{ to: "/result/up_board_10th_12th_scrutiny_result_2025", text: "UP Board 10th / 12th Scrutiny Result 2025" },
{ to: "/result/idbi_bank_jam_final_result_2025", text: "IDBI Bank JAM Final Result 2025" },
{ to: "/result/bihar_home_guard_final_merit_list_2025", text: "Bihar Home Guard Final Merit List 2025" },
{ to: "/result/uppsc_staff_nurse_unani_2023_final_result", text: "UPPSC Staff Nurse Unani 2023 Final Result" },
{ to: "/result/uppsc_staff_nurse_ayurved_final_result_2025", text: "UPPSC Staff Nurse Ayurved Final Result 2025" },
{ to: "/result/nta_cuet_ug_result_2025", text: "NTA CUET UG Result 2025" },
{ to: "/result/up_cpet_result_2025", text: "UP CPET Result 2025" },
{ to: "/result/rajasthan_rssb_sangnak_computer_2023_exam_result_2025", text: "Rajasthan RSSB Sangnak Computer 2023 Exam Result 2025" },
{ to: "/result/railway_rrb_alp_cbt_ii_result_2025", text: "Railway RRB ALP CBT-2 Result 2025" },
{ to: "/result/rajasthan_ptet_result_2025", text: "Rajasthan PTET Result 2025" },









    
    { to: "/result/bpsc-school-teacher-tre2-result-2025", text: "BPSC School Teacher TRE 2.0 Result (NIOS DElEd) – Out" },
{ to: "/result/neet-pg-result-2025", text: "NEET PG Result 2025 – Out" },
{ to: "/result/rajasthan-hc-civil-judge-pre-result-2025", text: "Rajasthan HC Civil Judge Pre Result 2025 – Out" },
{ to: "/result/pspcl-assistant-lineman-result-2025", text: "PSPCL Assistant Lineman Result 2025 – Out" },
{ to: "/result/bcece-le-1st-round-allotment-2025", text: "BCECE 2025 1st Round Allotment Result – Out" },
{ to: "/result/bihar-dcece-2025-pe-mopup-seat-allotment", text: "Bihar DCECE 2025 PE Mop-Up Round Seat Allotment Result" },
{ to: "/result/sbi-clerk-1st-waitlist-2025", text: "SBI Bank Clerk 1st Wait List With Marks 2025 – Out" },

    { to: "/result/ssc-steno-cd-final-marks-2025", text: "SSC Stenographer C, D Final Marks 2025 – Out" },
    { to: "/result/bihar-btsc-insect-collector-result-2025", text: "Bihar BTSC Insect Collector Final Result 2025" },
    { to: "/result/sbi-clerk-waitlist-2025", text: "SBI Bank Clerk 1st Wait List 2025 – Out" },
    { to: "/result/bvs-junior-clerk-result-2025", text: "Bihar Vidhan Sabha Junior Clerk 02/2024 Result 2025 – Out" },
    { to: "/result/nta-icar-aieea-result-2025", text: "NTA ICAR AIEEA PG and PhD Result 2025 – Out" },
    { to: "/result/jci-various-post-result-2025", text: "JCI Various Post 2024 Result – Out" },
    { to: "/result/rrb-paramedical-result-2025", text: "Railway RRB Paramedical Staff CEN 04/2024 Result/ Score Card 2025 – Out" },
    { to: "/result/niacl-apprentice-result-2025", text: "NIACL Apprentice Result 2025 – Out" },
    { to: "/result/cbse-superintendent-tier2-result-2025", text: "CBSE Superintendent Tier-2 Result 2025 – Out" },
    { to: "/result/bihar-shsb-cho-result-2025", text: "Bihar SHSB CHO Result 2025 – Out" },
    { to: "/result/sci-spa-result-2025", text: "Supreme Court of India SPA Result 2025 – Out" },
    { to: "/result/lnmu-ug-3rd-merit-list-2025", text: "LNMU UG 3rd Merit List 2025-29 – Out" },
    { to: "/result/nicl-ao-pre-result-2025", text: "NICL AO Scale-I Pre Result 2025" },
    { to: "/result/hbse-class-10th-compartmental-result-2025", text: "Haryana Board Class 10th Compartmental Result 2025 – Out" },
    { to: "/result/bpsc-ae-result-2025", text: "BPSC Assistant Engineer AE 32, 33/2024 Result – Out" },
    { to: "/result/rsmssb-animal-attendant-result-2025", text: "Rajasthan RSMSSB Animal Attendant Result 2025 – Out" },
    { to: "/result/rsmssb-jen-result-2025", text: "Rajasthan RSMSSB Junior Engineer JE Result 2025 – Out" },
    { to: "/result/rsmssb-surveyor-mines-supervisor-result-2025", text: "RSMSSB Surveyor and Mines Supervisor Result 2025 – Out" },
    { to: "/result/bihar-cet-bed-3rd-merit-list-2025", text: "Bihar CET B.Ed 3rd Merit List 2025 – Out" },
    { to: "/result/upsc-engineering-services-reserve-list-2024", text: "UPSC Engineering Services 2024 Reserve List – Out" },
    { to: "/result/up-board-10th-12th-compartmental-result-2025", text: "UP Board Class 10th/ 12th Compartmental Result 2025" },
    { to: "/result/nta-ntet-result-2025", text: "NTA NTET Result/ Score Card 2025 – Out" },
    { to: "/result/mpesb-group1-2-result-2025", text: "MPESB Group 1 & 2 Sub Group 1 Result 2025 – Out" },
 
    { to: "/result/ubi-assistant-manager-result-2025", text: "Union Bank of India Assistant Manager Result 2025 – Out" },
    { to: "/result/railway-secr-apprentice-final-merit-list-2025", text: "Railway SECR Raipur Apprentice Final Merit List 2025" },
    { to: "/result/upsssc-junior-assistant-result-2025", text: "UPSSSC Junior Assistant 08/2022 Final Result – Out" },
    { to: "/result/bihar-iticat-1st-round-allotment-2025", text: "Bihar ITI CAT 2025 1st Round Allotment Result" },
  ];

  // ✅ Show first 6 or all depending on state
  const visibleResults = showAll ? results : results.slice(0, 26);

  return (
    <div className='border-2 border-borderColor row-span-2 col-span-1'>
      <div>
        <h3 className='text-2xl font-semibold bg-customRed text-center text-white p-1'>
          Results
        </h3>

        <ul className='list-disc list-inside pl-6'>
          {visibleResults.map((item, index) => (
            <li key={index}>
              <Link to={item.to} className="text-blue-800 hover:underline">
                {item.text}
              </Link>
            </li>
          ))}
        </ul>

        {/* ✅ Show button only if more than 20 results */}
        {results.length > 20 && (
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

export default Result;
