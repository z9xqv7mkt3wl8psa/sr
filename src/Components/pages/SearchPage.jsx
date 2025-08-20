import React, { useState } from "react";
import Footer from "../footer/Footer.jsx";

const jobsData = [
  { id: 1, title: "JCI Various Post Result 2025 – Out", link: "/admission/jci-result-2025" },
  { id: 2, title: "NVS Class 6 Admission Online Form 2026 – Date Extend", link: "/admission/nvs-class6-2026" },
  { id: 3, title: "OFSS Bihar 11th Intermediate Spot Admission 2025-27 – Extend", link: "/admission/ofss-bihar-11th-spot-2025" },
  { id: 4, title: "BCECE 2025 Online Counselling/ Choice Filling", link: "/admission/bcece-2025-counselling" },
  { id: 5, title: "IIM CAT 2025 Admission Online Form", link: "/admission/iim-cat-2025-admission" },
  { id: 6, title: "CLAT 2026 Admission Online Form – Start", link: "/admission/clat-2026-admission" },
  { id: 7, title: "UP Polytechnic JEECUP Online Counseling 2025", link: "/admission/jeecup-2025-counseling" },
  { id: 8, title: "MUIT Diploma Admissions Online Form 2025", link: "/admission/muit-diploma-admissions-2025" },
  { id: 9, title: "Mathura PVT Online Form 2025 – Date Extend", link: "/admission/mathura-pvt-admissions-2025" },
  { id: 10, title: "MUIT Noida MAJMC, BAJMC, Bachelor of Animation Online Form 2025", link: "/admission/muit-2025-admission" },
  { id: 11, title: "Bihar CET B.Ed Online Form 2025 – Start", link: "/admission/bihar-cet-bed-2025" },
  { id: 12, title: "Central Sanskrit University CSU Prak Shastri Online Form 2025", link: "/admission/csu-prakshastri-2025" },
  { id: 13, title: "MUIT Admissions Online Form 2025", link: "/admission/muit-admission-2025" },
  { id: 14, title: "Rajasthan B.Ed. 2025 Online Form", link: "/admission/rajasthan-bed-2025" },
  { id: 15, title: "MP Rojgar Panjiyan Online Form 2025", link: "/admission/mp-rojgar-panjiyan-2025" },
  { id: 16, title: "UPDELED 2024 Online Counseling", link: "/admission/updeled-2024-counseling" },

  { id: 17, title: "Bihar BTSC Tutor Nursing Admit Card 2025 – Out", link: "/admitcard/bihar-btsc-tutor-nursing-admit-card-2025" },
  { id: 18, title: "BPSSC Bihar Police Enforcement SI Admit Card Date 2025", link: "/admitcard/bihar-bpssc-enforcement-si-admit-card-2025" },
  { id: 19, title: "IBPS PO MT XV 15 Pre Admit Card 2025 – Out", link: "/admitcard/ibps-po-mt-xv-pre-admit-card-2025" },
  { id: 20, title: "Railway RRB NTPC 10+2 Inter Level Admit Card 2025 – Out", link: "/admitcard/railway-rrb-ntpc-inter-admit-card-2025" },
  { id: 21, title: "UPSC Civil Services IAS Mains Admit Card 2025 – Out", link: "/admitcard/upsc-civil-services-ias-mains-admit-card-2025" },
  { id: 22, title: "BSCB Bihar Co-operative Bank Assistant/ CSA Exam Date 2025", link: "/admitcard/bscb-assistant-csa-exam-date-2025" },
  { id: 23, title: "Bihar Police BPSSC SI Prohibition Mains Admit Card 2025 – Out", link: "/admitcard/bihar-bpssc-si-prohibition-mains-admit-card-2025" },
  { id: 24, title: "BPSC Vice Principal ITI Admit Card 2025 – Out", link: "/admitcard/bpsc-vice-principal-iti-admit-card-2025" },
  { id: 25, title: "Bank Of Baroda LBO Exam Date 2025 – Out", link: "/admitcard/bank-of-baroda-lbo-exam-date-2025" },
  { id: 26, title: "Bihar Vidhan Sabha Office Attendant 05/2023 Admit Card 2025", link: "/admitcard/bihar-vidhan-sabha-office-attendant-admit-card-2025" },
  { id: 27, title: "Rajasthan RSSB Patwari Admit Card 2025 – Out", link: "/admitcard/rajasthan-rssb-patwari-admit-card-2025" },
  { id: 28, title: "Bihar Vidhan Parishad Office Attendant 03/2024 Admit Card 2025", link: "/admitcard/bihar-vidhan-parishad-office-attendant-admit-card-2025" },
  { id: 29, title: "SSC Constable GD 2024 PET/ PST Admit Card 2025 – Out", link: "/admitcard/ssc-gd-constable-pet-pst-admit-card-2025" },
  { id: 30, title: "Railway RRB Ministerial & Isolated CEN 07/2024 Exam Date 2025 – Out", link: "/admitcard/rrb-ministerial-isolated-exam-date-2025" },
  
  { id: 31, title: "RBI Grade A, B Admit Card 2025 – Out", link: "/admitcard/rbi-grade-a-b-admit-card-2025" },
  { id: 32, title: "BPSSC Range Officer of Forest Admit Card 2025 – Out", link: "/admitcard/bpssc-range-officer-forest-admit-card-2025" },
  { id: 33, title: "AFCAT 02/2025 Exam City Details – Out", link: "/admitcard/afcat-02-2025-exam-city-details" },
  { id: 34, title: "RSSB VDO New Exam Date 2025", link: "/admitcard/rssb-vdo-new-exam-date-2025" },
  { id: 35, title: "BPSC MVI Admit Card 2025 – Out", link: "/admitcard/bpsc-mvi-admit-card-2025" },
  { id: 36, title: "BPSC MDO Admit Card 2025", link: "/admitcard/bpsc-mdo-admit-card-2025" },
  { id: 37, title: "Bihar Vidhan Sabha Security Guard 01/2023 PET Admit Card 2025", link: "/admitcard/bihar-vidhan-sabha-security-guard-pet-admit-card-2025" },
  { id: 38, title: "SSC CHSL 10+2 Tentative Vacancy Details 2025", link: "/admitcard/ssc-chsl-10plus2-tentative-vacancy-2025" },
  { id: 39, title: "SSC JE 2025 Tentative Vacancy – Out", link: "/admitcard/ssc-je-tentative-vacancy-2025" },
  { id: 40, title: "SSC JHT Exam City Details 2025 – Out", link: "/admitcard/ssc-jht-exam-city-details-2025" },
  { id: 41, title: "SSC Stenographer C, D Admit Card 2025", link: "/admitcard/ssc-stenographer-c-d-admit-card-2025" },
  { id: 42, title: "DSSSB Assistant Teacher 08/2023 Admit Card 2025 – Out", link: "/admitcard/dsssb-assistant-teacher-08-2023-admit-card-2025" },

  { id: 43, title: "SSC CPO SI Paper II Final Answer Key 2025 – Out", link: "/answerkey/ssc-cpo-si-paper2-2025" },
  { id: 44, title: "Bihar BSPHCL Technician Gr-III Answer Key 2025 – Out", link: "/answerkey/bsphcl-technician-gr3-answerkey-2025" },
  { id: 45, title: "Patna High Court Mazdoor Final Answer Key 2025 – Out", link: "/answerkey/phc-mazdoor-final-answerkey-202" },
  { id: 46, title: "BSEB Sakshamta Pariksha 3rd Answer Key 2025 – Out", link: "/answerkey/bseb-sakshamta-pariksha-3rd-answerkey-2025" },
  { id: 47, title: "BPSC AEE & Other Post Answer Key 2025 – Out", link: "/answerkey/bpsc-aee-other-post-answerkey-2025" },
  { id: 48, title: "SSC Phase 13 Answer Key 2025", link: "/answerkey/ssc-phase13-answerkey-2025" },

  { id: 49, title: "DigiLocker (School/College Certificates)", link: "https://www.digilocker.gov.in" },
  { id: 50, title: "PAN Card Verification", link: "https://incometaxindia.gov.in" },
  { id: 51, title: "UGC Approved University List", link: "https://www.ugc.ac.in" },
  { id: 52, title: "AICTE Approved University List", link: "https://www.aicte-india.org" },
  { id: 53, title: "EPFO (Employment/Service Verification, PF Passbook)", link: "https://www.epfindia.gov.in" },
  { id: 54, title: "Driving License / Vehicle RC Verification", link: "https://parivahan.gov.in" },
  { id: 55, title: "Union Public Service Commission (UPSC)", link: "https://www.upsc.gov.in" },
  { id: 56, title: "Staff Selection Commission (SSC)", link: "https://ssc.nic.in" },
  { id: 57, title: "Railway Recruitment Board (RRB)", link: "https://www.rrbcdg.gov.in" },
  { id: 58, title: "Institute of Banking Personnel Selection (IBPS)", link: "https://www.ibps.in" },
  { id: 59, title: "Join Indian Army", link: "https://joinindianarmy.nic.in" },
  { id: 60, title: "Indian Navy Recruitment", link: "https://www.joinindiannavy.gov.in" },
  { id: 61, title: "Indian Air Force Recruitment", link: "https://agnipathvayu.cdac.in" },
   { id: 62, title: "Bihar SHS ANM Online Form 2025 – Last Date: 28 August 2025", link: "/latestjobs/bihar-shs-anm-recruitment-2025" },
  { id: 63, title: "Bihar SHS Ophthalmic Assistant Online Form 2025 – Last Date: 28 August 2025", link: "/latestjobs/bihar-shs-ophthalmic-assistant-recruitment-2025" },
  { id: 64, title: "DSSSB Delhi High Court Attendant Online Form 2025 – Last Date: 24 September 2025", link: "/latestjobs/dsssb-delhi-high-court-attendant-recruitment-2025" },
  { id: 65, title: "UP Police SI Online Form 2025 (4543 Post) – Last Date: 11 September 2025", link: "/latestjobs/up-police-si-recruitment-2025" },
  { id: 66, title: "RRC Eastern Railway Apprentice Online Form 2025 – Last Date: 13 September 2025", link: "/latestjobs/rrc-eastern-railway-apprentice-recruitment-2025" },
  { id: 67, title: "RPSC 1st Grade Teacher Online Form 2025 – Last Date: 12 September 2025", link: "/latestjobs/rpsc-1st-grade-teacher-recruitment-2025" },
  { id: 68, title: "Railway RRC CR Apprentice Online Form 2025 – Last Date: 11 September 2025", link: "/latestjobs/rrc-cr-apprentice-recruitment-2025" },
  { id: 69, title: "BSF HC RO / RM Online Form 2025 – Last Date: 23 September 2025", link: "/latestjobs/bsf-hc-ro-rm-recruitment-2025" },
  { id: 70, title: "Indian Navy Tradesman Skilled Apprentice Online Form 2025 – Last Date: 02 September 2025", link: "/latestjobs/indian-navy-tradesman-skilled-apprentice-2025" },
  { id: 71, title: "UP Police SI Syllabus / Exam Pattern 2025 – Last Date: 11 September 2025", link: "/latestjobs/up-police-si-syllabus-exam-pattern-2025" },
  { id: 72, title: "UPPSC GIC Lecturer Online Form 2025 – Last Date: 12 September 2025", link: "/latestjobs/uppsc-gic-lecturer-recruitment-2025" },
  { id: 73, title: "Indian Army NCC 123rd Course April 2026 Online Form – Last Date: 11 September 2025", link: "/latestjobs/indian-army-ncc-123rd-course-april-2026-online-form" },
  { id: 74, title: "Indian Airforce Agniveer Vayu 02/2026 Edit Application Form", link: "/latestjobs/indian-airforce-agniveer-vayu-02-2026-edit-application-form" },
  { id: 75, title: "OFSS Bihar 11th Intermediate Spot Admission 2025-27 – Last Date: 18 August 2025", link: "/latestjobs/ofss-bihar-11th-intermediate-spot-admission-2025-27" },
  { id: 76, title: "RPSC SI / Platoon Commander Online Form 2025 (1015 Posts) – Last Date: 08 September 2025", link: "/latestjobs/rpsc-si-platoon-commander-recruitment-2025" },
  { id: 77, title: "Railway RRB Paramedical Staff CEN.No.03/2025 Online Form 2025 – Last Date: 08 September 2025", link: "/latestjobs/rrb-paramedical-staff-recruitment-2025" },
  { id: 78, title: "Indian Navy SSC Officer June 2026 Online Form – Last Date: 01 September 2025", link: "/latestjobs/indian-navy-ssc-officer-june-2026-online-form" },
  { id: 79, title: "SBI Clerk Online Form 2025 (5180 Posts) – Last Date: 26 August 2025", link: "/latestjobs/sbi-clerk-recruitment-2025" },
  { id: 80, title: "IB Security Assistant Online Form 2025 (4987 Post) – Last Date: 17 August 2025", link: "/latestjobs/ib-security-assistant-recruitment-2025" },
  { id: 81, title: "BSF Constable Tradesman Online Form 2025 – Last Date: 24 August 2025", link: "/latestjobs/bsf-constable-tradesman-recruitment-2025" },
  { id: 82, title: "IBPS Clerk CSA 15th XV Online Form 2025 (10277 Post) – Last Date: 21 August 2025", link: "/latestjobs/ibps-clerk-15th-recruitment-2025" },
  { id: 83, title: "Indian Navy SSC Executive IT Jan 2026 Online Form – Last Date: 20 August 2025", link: "/latestjobs/indian-navy-ssc-executive-it-jan-2026" },
  { id: 84, title: "Oriental Insurance OICL Assistant Recruitment 2025", link: "/latestjobs/oicl-assistant-recruitment-2025" },
  { id: 85, title: "Bihar Jeevika Online Form 2025", link: "/latestjobs/bihar-jeevika-online-form-2025" },

  // Results
  { id: 86, title: "SSC Stenographer C, D Final Marks 2025 – Out", link: "/result/ssc-steno-cd-final-marks-2025" },
  { id: 87, title: "Bihar BTSC Insect Collector Final Result 2025", link: "/result/bihar-btsc-insect-collector-result-2025" },
  { id: 88, title: "SBI Bank Clerk 1st Wait List 2025 – Out", link: "/result/sbi-clerk-waitlist-2025" },
  { id: 89, title: "Bihar Vidhan Sabha Junior Clerk 02/2024 Result 2025 – Out", link: "/result/bvs-junior-clerk-result-2025" },
  { id: 90, title: "NTA ICAR AIEEA PG and PhD Result 2025 – Out", link: "/result/nta-icar-aieea-result-2025" },
  { id: 91, title: "JCI Various Post 2024 Result – Out", link: "/result/jci-various-post-result-2025" },
  { id: 92, title: "Railway RRB Paramedical Staff CEN 04/2024 Result/ Score Card 2025 – Out", link: "/result/rrb-paramedical-result-2025" },
  { id: 93, title: "NIACL Apprentice Result 2025 – Out", link: "/result/niacl-apprentice-result-2025" },
  { id: 94, title: "CBSE Superintendent Tier-2 Result 2025 – Out", link: "/result/cbse-superintendent-tier2-result-2025" },
  { id: 95, title: "Bihar SHSB CHO Result 2025 – Out", link: "/result/bihar-shsb-cho-result-2025" },
  { id: 96, title: "Supreme Court of India SPA Result 2025 – Out", link: "/result/sci-spa-result-2025" },
  { id: 97, title: "LNMU UG 3rd Merit List 2025-29 – Out", link: "/result/lnmu-ug-3rd-merit-list-2025" },
  { id: 98, title: "NICL AO Scale-I Pre Result 2025", link: "/result/nicl-ao-pre-result-2025" },
  { id: 99, title: "Haryana Board Class 10th Compartmental Result 2025 – Out", link: "/result/hbse-class-10th-compartmental-result-2025" },
  { id: 100, title: "BPSC Assistant Engineer AE 32, 33/2024 Result – Out", link: "/result/bpsc-ae-result-2025" },
  { id: 101, title: "Rajasthan RSMSSB Animal Attendant Result 2025 – Out", link: "/result/rsmssb-animal-attendant-result-2025" },
  { id: 102, title: "Rajasthan RSMSSB Junior Engineer JE Result 2025 – Out", link: "/result/rsmssb-jen-result-2025" },
  { id: 103, title: "RSMSSB Surveyor and Mines Supervisor Result 2025 – Out", link: "/result/rsmssb-surveyor-mines-supervisor-result-2025" },
  { id: 104, title: "Bihar CET B.Ed 3rd Merit List 2025 – Out", link: "/result/bihar-cet-bed-3rd-merit-list-2025" },
  { id: 105, title: "UPSC Engineering Services 2024 Reserve List – Out", link: "/result/upsc-engineering-services-reserve-list-2024" },
  { id: 106, title: "UP Board Class 10th/ 12th Compartmental Result 2025", link: "/result/up-board-10th-12th-compartmental-result-2025" },
  { id: 107, title: "NTA NTET Result/ Score Card 2025 – Out", link: "/result/nta-ntet-result-2025" },
  { id: 108, title: "MPESB Group 1 & 2 Sub Group 1 Result 2025 – Out", link: "/result/mpesb-group1-2-result-2025" },
  { id: 109, title: "Union Bank of India Assistant Manager Result 2025 – Out", link: "/result/ubi-assistant-manager-result-2025" },
  { id: 110, title: "Railway SECR Raipur Apprentice Final Merit List 2025", link: "/result/railway-secr-apprentice-final-merit-list-2025" },
  { id: 111, title: "UPSSSC Junior Assistant 08/2022 Final Result – Out", link: "/result/upsssc-junior-assistant-result-2025" },
  { id: 112, title: "Bihar ITI CAT 2025 1st Round Allotment Result", link: "/result/bihar-iticat-1st-round-allotment-2025" },

  // Syllabus
  { id: 113, title: "IBPS Clerk Syllabus 2025 (CRP Clerk-XV): Prelims & Mains Exam Pattern & Syllabus", link: "/syllabus/ibps-clerk-syllabus-2025" },
  { id: 114, title: "Bihar Jeevika Syllabus 2025: Check Latest Syllabus, Exam Pattern", link: "/syllabus/bihar-jeevika-syllabus-2025" },
  { id: 115, title: "BSSC Office Attendant Syllabus 2025 Out for 3727 Posts", link: "/syllabus/bssc-office-attendant-syllabus-2025" },
  { id: 116, title: "ICFRE TFRI Syllabus 2025: Driver, Forest Guard & TA", link: "/syllabus/icfre-tfri-syllabus-2025" },
  { id: 117, title: "RSMSSB VDO Syllabus 2025 PDF Download", link: "/syllabus/rsmssb-vdo-syllabus-2025" },
  { id: 118, title: "SSC CHSL 10+2 Exam 2025 Full Syllabus", link: "/syllabus/ssc-chsl-syllabus-2025" },
{ id: 119, title: "Bihar BTSC Tutor Nursing Admit Card 2025 – Out", link: "/admitcard/bihar-btsc-tutor-nursing-admit-card-2025" },
  { id: 120, title: "BPSSC Bihar Police Enforcement SI Admit Card Date 2025", link: "/admitcard/bihar-bpssc-enforcement-si-admit-card-2025" },
  { id: 121, title: "IBPS PO MT XV 15 Pre Admit Card 2025 – Out", link: "/admitcard/ibps-po-mt-xv-pre-admit-card-2025" },
  { id: 122, title: "Railway RRB NTPC 10+2 Inter Level Admit Card 2025 – Out", link: "/admitcard/railway-rrb-ntpc-inter-admit-card-2025" },
  { id: 123, title: "UPSC Civil Services IAS Mains Admit Card 2025 – Out", link: "/admitcard/upsc-civil-services-ias-mains-admit-card-2025" },
  { id: 124, title: "BSCB Bihar Co-operative Bank Assistant/ CSA Exam Date 2025", link: "/admitcard/bscb-assistant-csa-exam-date-2025" },
  { id: 125, title: "Bihar Police BPSSC SI Prohibition Mains Admit Card 2025 – Out", link: "/admitcard/bihar-bpssc-si-prohibition-mains-admit-card-2025" },
  { id: 126, title: "BPSC Vice Principal ITI Admit Card 2025 – Out", link: "/admitcard/bpsc-vice-principal-iti-admit-card-2025" },
  { id: 127, title: "Bank Of Baroda LBO Exam Date 2025 – Out", link: "/admitcard/bank-of-baroda-lbo-exam-date-2025" },
  { id: 128, title: "Bihar Vidhan Sabha Office Attendant 05/2023 Admit Card 2025", link: "/admitcard/bihar-vidhan-sabha-office-attendant-admit-card-2025" },
  { id: 129, title: "Rajasthan RSSB Patwari Admit Card 2025 – Out", link: "/admitcard/rajasthan-rssb-patwari-admit-card-2025" },
  { id: 130, title: "Bihar Vidhan Parishad Office Attendant 03/2024 Admit Card 2025", link: "/admitcard/bihar-vidhan-parishad-office-attendant-admit-card-2025" },
  { id: 131, title: "SSC Constable GD 2024 PET/ PST Admit Card 2025 – Out", link: "/admitcard/ssc-gd-constable-pet-pst-admit-card-2025" },
  { id: 132, title: "Railway RRB Ministerial & Isolated CEN 07/2024 Exam Date 2025 – Out", link: "/admitcard/rrb-ministerial-isolated-exam-date-2025" },
  { id: 133, title: "RBI Grade A, B Admit Card 2025 – Out", link: "/admitcard/rbi-grade-a-b-admit-card-2025" },
  { id: 134, title: "BPSSC Range Officer of Forest Admit Card 2025 – Out", link: "/admitcard/bpssc-range-officer-forest-admit-card-2025" },
  { id: 135, title: "AFCAT 02/2025 Exam City Details – Out", link: "/admitcard/afcat-02-2025-exam-city-details" },
  { id: 136, title: "RSSB VDO New Exam Date 2025", link: "/admitcard/rssb-vdo-new-exam-date-2025" },
  { id: 137, title: "BPSC MVI Admit Card 2025 – Out", link: "/admitcard/bpsc-mvi-admit-card-2025" },
  { id: 138, title: "BPSC MDO Admit Card 2025", link: "/admitcard/bpsc-mdo-admit-card-2025" },
  { id: 139, title: "Bihar Vidhan Sabha Security Guard 01/2023 PET Admit Card 2025", link: "/admitcard/bihar-vidhan-sabha-security-guard-pet-admit-card-2025" },
  { id: 140, title: "SSC CHSL 10+2 Tentative Vacancy Details 2025", link: "/admitcard/ssc-chsl-10plus2-tentative-vacancy-2025" },
  { id: 141, title: "SSC JE 2025 Tentative Vacancy – Out", link: "/admitcard/ssc-je-tentative-vacancy-2025" },
  { id: 142, title: "SSC JHT Exam City Details 2025 – Out", link: "/admitcard/ssc-jht-exam-city-details-2025" },
  { id: 143, title: "SSC Stenographer C, D Admit Card 2025", link: "/admitcard/ssc-stenographer-c-d-admit-card-2025" },
  { id: 144, title: "DSSSB Assistant Teacher 08/2023 Admit Card 2025 – Out", link: "/admitcard/dsssb-assistant-teacher-08-2023-admit-card-2025" },

  // Answer Keys
  { id: 145, title: "SSC CPO SI Paper II Final Answer Key 2025 – Out", link: "/answerkey/ssc-cpo-si-paper2-2025" },
  { id: 146, title: "Bihar BSPHCL Technician Gr-III Answer Key 2025 – Out", link: "/answerkey/bsphcl-technician-gr3-answerkey-2025" },
  { id: 147, title: "Patna High Court Mazdoor Final Answer Key 2025 – Out", link: "/answerkey/phc-mazdoor-final-answerkey-202" },
  { id: 148, title: "BSEB Sakshamta Pariksha 3rd Answer Key 2025 – Out", link: "/answerkey/bseb-sakshamta-pariksha-3rd-answerkey-2025" },
  { id: 149, title: "BPSC AEE & Other Post Answer Key 2025 – Out", link: "/answerkey/bpsc-aee-other-post-answerkey-2025" },
  { id: 150, title: "SSC Phase 13 Answer Key 2025", link: "/answerkey/ssc-phase13-answerkey-2025" },
{ id: 151, title: "DigiLocker (School/College Certificates)", link: "https://www.digilocker.gov.in" },
  { id: 152, title: "PAN Card Verification", link: "https://incometaxindia.gov.in" },
  { id: 153, title: "UGC Approved University List", link: "https://www.ugc.ac.in" },
  { id: 154, title: "AICTE Approved University List", link: "https://www.aicte-india.org" },
  { id: 155, title: "EPFO (Employment/Service Verification, PF Passbook)", link: "https://www.epfindia.gov.in" },
  { id: 156, title: "Driving License / Vehicle RC Verification", link: "https://parivahan.gov.in" },
  { id: 157, title: "Union Public Service Commission (UPSC)", link: "https://www.upsc.gov.in" },
  { id: 158, title: "Staff Selection Commission (SSC)", link: "https://ssc.nic.in" },
  { id: 159, title: "Railway Recruitment Board (RRB)", link: "https://www.rrbcdg.gov.in" },
  { id: 160, title: "Institute of Banking Personnel Selection (IBPS)", link: "https://www.ibps.in" },
  { id: 161, title: "Join Indian Army", link: "https://joinindianarmy.nic.in" },
  { id: 162, title: "Indian Navy Recruitment", link: "https://www.joinindiannavy.gov.in" },
  { id: 163, title: "Indian Air Force Recruitment", link: "https://agnipathvayu.cdac.in" },
  { id: 164, title: "Bihar SHS ANM Online Form 2025 – Last Date: 28 August 2025", link: "/latestjobs/bihar-shs-anm-recruitment-2025" },
  { id: 165, title: "Bihar SHS Ophthalmic Assistant Online Form 2025 – Last Date: 28 August 2025", link: "/latestjobs/bihar-shs-ophthalmic-assistant-recruitment-2025" },
  { id: 166, title: "DSSSB Delhi High Court Attendant Online Form 2025 – Last Date: 24 September 2025", link: "/latestjobs/dsssb-delhi-high-court-attendant-recruitment-2025" },
  { id: 167, title: "UP Police SI Online Form 2025 (4543 Post) – Last Date: 11 September 2025", link: "/latestjobs/up-police-si-recruitment-2025" },
  { id: 168, title: "RRC Eastern Railway Apprentice Online Form 2025 – Last Date: 13 September 2025", link: "/latestjobs/rrc-eastern-railway-apprentice-recruitment-2025" },
  { id: 169, title: "RPSC 1st Grade Teacher Online Form 2025 – Last Date: 12 September 2025", link: "/latestjobs/rpsc-1st-grade-teacher-recruitment-2025" },
  { id: 170, title: "Railway RRC CR Apprentice Online Form 2025 – Last Date: 11 September 2025", link: "/latestjobs/rrc-cr-apprentice-recruitment-2025" },
  { id: 171, title: "BSF HC RO / RM Online Form 2025 – Last Date: 23 September 2025", link: "/latestjobs/bsf-hc-ro-rm-recruitment-2025" },
  { id: 172, title: "Indian Navy Tradesman Skilled Apprentice Online Form 2025 – Last Date: 02 September 2025", link: "/latestjobs/indian-navy-tradesman-skilled-apprentice-2025" },
  { id: 173, title: "UP Police SI Syllabus / Exam Pattern 2025 – Last Date: 11 September 2025", link: "/latestjobs/up-police-si-syllabus-exam-pattern-2025" },
  { id: 174, title: "UPPSC GIC Lecturer Online Form 2025 – Last Date: 12 September 2025", link: "/latestjobs/uppsc-gic-lecturer-recruitment-2025" },
  { id: 175, title: "Indian Army NCC 123rd Course April 2026 Online Form – Last Date: 11 September 2025", link: "/latestjobs/indian-army-ncc-123rd-course-april-2026-online-form" },
  { id: 176, title: "Indian Airforce Agniveer Vayu 02/2026 Edit Application Form", link: "/latestjobs/indian-airforce-agniveer-vayu-02-2026-edit-application-form" },
  { id: 177, title: "OFSS Bihar 11th Intermediate Spot Admission 2025-27 – Last Date: 18 August 2025", link: "/latestjobs/ofss-bihar-11th-intermediate-spot-admission-2025-27" },
  { id: 178, title: "RPSC SI / Platoon Commander Online Form 2025 (1015 Posts) – Last Date: 08 September 2025", link: "/latestjobs/rpsc-si-platoon-commander-recruitment-2025" },
  { id: 179, title: "Railway RRB Paramedical Staff CEN.No.03/2025 Online Form 2025 – Last Date: 08 September 2025", link: "/latestjobs/rrb-paramedical-staff-recruitment-2025" },
  { id: 180, title: "Indian Navy SSC Officer June 2026 Online Form – Last Date: 01 September 2025", link: "/latestjobs/indian-navy-ssc-officer-june-2026-online-form" },
  { id: 181, title: "SBI Clerk Online Form 2025 (5180 Posts) – Last Date: 26 August 2025", link: "/latestjobs/sbi-clerk-recruitment-2025" },
  { id: 182, title: "IB Security Assistant Online Form 2025 (4987 Post) – Last Date: 17 August 2025", link: "/latestjobs/ib-security-assistant-recruitment-2025" },
  { id: 183, title: "BSF Constable Tradesman Online Form 2025 – Last Date: 24 August 2025", link: "/latestjobs/bsf-constable-tradesman-recruitment-2025" },
  { id: 184, title: "IBPS Clerk CSA 15th XV Online Form 2025 (10277 Post) – Last Date: 21 August 2025", link: "/latestjobs/ibps-clerk-15th-recruitment-2025" },
  { id: 185, title: "Indian Navy SSC Executive IT Jan 2026 Online Form – Last Date: 20 August 2025", link: "/latestjobs/indian-navy-ssc-executive-it-jan-2026" },
  { id: 186, title: "Oriental Insurance OICL Assistant Recruitment 2025", link: "/latestjobs/oicl-assistant-recruitment-2025" },
  { id: 187, title: "Bihar Jeevika Online Form 2025", link: "/latestjobs/bihar-jeevika-online-form-2025" },
  { id: 188, title: "SSC Stenographer C, D Final Marks 2025 – Out", link: "/result/ssc-steno-cd-final-marks-2025" },
  { id: 189, title: "Bihar BTSC Insect Collector Final Result 2025", link: "/result/bihar-btsc-insect-collector-result-2025" },
  { id: 190, title: "SBI Bank Clerk 1st Wait List 2025 – Out", link: "/result/sbi-clerk-waitlist-2025" },
  { id: 191, title: "Bihar Vidhan Sabha Junior Clerk 02/2024 Result 2025 – Out", link: "/result/bvs-junior-clerk-result-2025" },
  { id: 192, title: "NTA ICAR AIEEA PG and PhD Result 2025 – Out", link: "/result/nta-icar-aieea-result-2025" },
  { id: 193, title: "JCI Various Post 2024 Result – Out", link: "/result/jci-various-post-result-2025" },
  { id: 194, title: "Railway RRB Paramedical Staff CEN 04/2024 Result/ Score Card 2025 – Out", link: "/result/rrb-paramedical-result-2025" },
  { id: 195, title: "NIACL Apprentice Result 2025 – Out", link: "/result/niacl-apprentice-result-2025" },
  { id: 196, title: "CBSE Superintendent Tier-2 Result 2025 – Out", link: "/result/cbse-superintendent-tier2-result-2025" },
  { id: 197, title: "Bihar SHSB CHO Result 2025 – Out", link: "/result/bihar-shsb-cho-result-2025" },
  { id: 198, title: "Supreme Court of India SPA Result 2025 – Out", link: "/result/sci-spa-result-2025" },
  { id: 199, title: "LNMU UG 3rd Merit List 2025-29 – Out", link: "/result/lnmu-ug-3rd-merit-list-2025" },
  { id: 200, title: "NICL AO Scale-I Pre Result 2025", link: "/result/nicl-ao-pre-result-2025" },
  { id: 201, title: "Haryana Board Class 10th Compartmental Result 2025 – Out", link: "/result/hbse-class-10th-compartmental-result-2025" },
  { id: 202, title: "BPSC Assistant Engineer AE 32, 33/2024 Result – Out", link: "/result/bpsc-ae-result-2025" },
  { id: 203, title: "Rajasthan RSMSSB Animal Attendant Result 2025 – Out", link: "/result/rsmssb-animal-attendant-result-2025" },
  { id: 204, title: "Rajasthan RSMSSB Junior Engineer JE Result 2025 – Out", link: "/result/rsmssb-jen-result-2025" },
  { id: 205, title: "RSMSSB Surveyor and Mines Supervisor Result 2025 – Out", link: "/result/rsmssb-surveyor-mines-supervisor-result-2025" },
  { id: 206, title: "Bihar CET B.Ed 3rd Merit List 2025 – Out", link: "/result/bihar-cet-bed-3rd-merit-list-2025" },
  { id: 207, title: "UPSC Engineering Services 2024 Reserve List – Out", link: "/result/upsc-engineering-services-reserve-list-2024" },
  { id: 208, title: "UP Board Class 10th/ 12th Compartmental Result 2025", link: "/result/up-board-10th-12th-compartmental-result-2025" },
  { id: 209, title: "NTA NTET Result/ Score Card 2025 – Out", link: "/result/nta-ntet-result-2025" },
  { id: 210, title: "MPESB Group 1 & 2 Sub Group 1 Result 2025 – Out", link: "/result/mpesb-group1-2-result-2025" },
  { id: 211, title: "Union Bank of India Assistant Manager Result 2025 – Out", link: "/result/ubi-assistant-manager-result-2025" },
  { id: 212, title: "Railway SECR Raipur Apprentice Final Merit List 2025", link: "/result/railway-secr-apprentice-final-merit-list-2025" },
  { id: 213, title: "UPSSSC Junior Assistant 08/2022 Final Result – Out", link: "/result/upsssc-junior-assistant-result-2025" },
  { id: 214, title: "Bihar ITI CAT 2025 1st Round Allotment Result", link: "/result/bihar-iticat-1st-round-allotment-2025" },
   { id: 215, title: "IBPS Clerk Syllabus 2025 (CRP Clerk-XV): Prelims & Mains Exam Pattern & Syllabus", link: "/syllabus/ibps-clerk-syllabus-2025" },
  { id: 216, title: "Bihar Jeevika Syllabus 2025: Check Latest Syllabus, Exam Pattern", link: "/syllabus/bihar-jeevika-syllabus-2025" },
  { id: 217, title: "BSSC Office Attendant Syllabus 2025 Out for 3727 Posts", link: "/syllabus/bssc-office-attendant-syllabus-2025" },
  { id: 218, title: "ICFRE TFRI Syllabus 2025: Driver, Forest Guard & TA", link: "/syllabus/icfre-tfri-syllabus-2025" },
  { id: 219, title: "RSMSSB VDO Syllabus 2025 PDF Download", link: "/syllabus/rsmssb-vdo-syllabus-2025" },
  { id: 220, title: "SSC CHSL 10+2 Exam 2025 Full Syllabus", link: "/syllabus/ssc-chsl-syllabus-2025" },
  { id: 221, title: "BPSC School Teacher TRE 2.0 Result (NIOS DElEd) – Out", link: "/result/bpsc-school-teacher-tre2-result-2025" },
{ id: 222, title: "NEET PG Result 2025 – Out", link: "/result/neet-pg-result-2025" },
{ id: 223, title: "Rajasthan HC Civil Judge Pre Result 2025 – Out", link: "/result/rajasthan-hc-civil-judge-pre-result-2025" },
{ id: 224, title: "PSPCL Assistant Lineman Result 2025 – Out", link: "/result/pspcl-assistant-lineman-result-2025" },
{ id: 225, title: "BCECE 2025 1st Round Allotment Result – Out", link: "/result/bcece-le-1st-round-allotment-2025" },
{ id: 226, title: "Bihar DCECE 2025 PE Mop-Up Round Seat Allotment Result", link: "/result/bihar-dcece-2025-pe-mopup-seat-allotment" },
{ id: 227, title: "SBI Bank Clerk 1st Wait List With Marks 2025 – Out", link: "/result/sbi-clerk-1st-waitlist-2025" },

{ id: 228, title: "Bihar BSEB DELED Admit Card 2025-27", link: "/admitcard/bihar-bseb-deled-admit-card-2025" },
{ id: 229, title: "Bihar Vidhan Sabha Security Guard 01/2023 PET New Exam Date 2025", link: "/admitcard/bihar-vidhan-sabha-security-guard-pet-admit-card-2025" },
{ id: 230, title: "BPSC ASO New Exam Date 2025 – Out", link: "/admitcard/bpsc-aso-new-exam-date-2025" },
{ id: 231, title: "RRB NTPC 10+2 Inter Level Admit Card / Exam City Details 2025 – Out", link: "/admitcard/rrb-ntpc-10-2-inter-admit-card-2025" },
{ id: 232, title: "AFCAT 02/2025 Admit Card – Out", link: "/admitcard/afcat-02-2025-admit-card" },
{ id: 233, title: "AIIMS CRE Group B, C Exam City Details 2025 – Out", link: "/admitcard/aiims-cre-group-b-c-exam-city-details-2025" },
{ id: 234, title: "WBSSC Assistant Teacher Admit Card 2025", link: "/admitcard/wbssc-assistant-teacher-admit-card-2025" },

{ id: 235, title: "Bihar Police CSBC Driver Constable Online Form 2025 – Last Date Today", link: "/latestjobs/bihar-police-csbc-driver-constable-recruitment-2025" },
{ id: 236, title: "Bihar JEEVIKA Online Form 2025 (2747 Posts) – Date Extend", link: "/latestjobs/bihar-jeevika-recruitment-2025" },
{ id: 237, title: "IBPS Clerk CSA 15th XV Online Form 2025 (10277 Post) – Start", link: "/latestjobs/ibps-clerk-15th-recruitment-2025" },
{ id: 238, title: "UP Police SI Online Form 2025 (4543 Post) – Start", link: "/latestjobs/up-police-si-recruitment-2025" },
{ id: 239, title: "RPSC 2nd Grade Teacher Online Form 2025 (6500 Posts) – Start", link: "/latestjobs/rpsc-2nd-grade-teacher-recruitment-2025" },
{ id: 240, title: "Bihar Vidhan Sabha 05/2024 Mains Online Form 2025", link: "/latestjobs/bihar-vidhan-sabha-mains-recruitment-2025" },
{ id: 241, title: "UPSC EPFO EO / AO / APFC Online Form 2025 – Date Extend", link: "/latestjobs/upsc-epfo-eo-ao-apfc-recruitment-2025" },
{ id: 242, title: "Indian Navy SSC Executive IT January 2026 Online Form – Last Date Today", link: "/latestjobs/indian-navy-ssc-executive-it-jan-2026" },
{ id: 243, title: "BSF HC RO / RM Online Form 2025", link: "/latestjobs/bsf-hc-ro-rm-recruitment-2025" },
{ id: 244, title: "Indian Army Dental Corps Online Form 2025 – Start", link: "/latestjobs/indian-army-dental-corps-recruitment-2025" },
{ id: 245, title: "DSSSB Non-Teaching Various Post Online Form 2025 – Start", link: "/latestjobs/dsssb-non-teaching-recruitment-2025" },
{ id: 246, title: "Bihar BSSC 4th Graduate Level Online Form 2025 (1481 Posts)", link: "/latestjobs/bssc-4th-graduate-level-recruitment-2025" },
{ id: 247, title: "LIC AAO / AE Online Form 2025 – Start", link: "/latestjobs/lic-aao-ae-recruitment-2025" },


];

const SearchPage = () => {
  const [query, setQuery] = useState("");

  const filteredJobs = jobsData.filter((job) =>
    job.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      

      {/* Search Input */}
<div className="flex justify-center mt-6 px-4">
  <div className="flex w-full max-w-2xl">
    <input
      type="text"
      placeholder="Search exams, admit cards, results..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="flex-grow border border-gray-300 rounded-l-lg px-4 py-2 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button
      onClick={() => console.log("Searching for:", query)}
      className="bg-blue-600 text-white px-6 py-2 rounded-r-lg shadow-md hover:bg-blue-700 transition"
    >
      Search
    </button>
  </div>
</div>


      {/* Results */}
      <div className="flex-grow px-6 mt-8">
        {filteredJobs.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredJobs.map((job) => (
              <a
                key={job.id}
                href={job.link}
                className="block border rounded-lg shadow-sm p-4 hover:shadow-lg hover:bg-blue-50 transition"
              >
                <h2 className="text-lg font-semibold text-gray-800">{job.title}</h2>
                <p className="text-blue-600 mt-2 font-medium">View Details →</p>
              </a>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 text-lg">❌ No results found</p>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SearchPage;
