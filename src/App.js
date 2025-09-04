import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/header/Header";
import Navbar from "./Components/navbar/Navbar";
import Main from "./Components/pages/Main.jsx";
import AdmissionDetail from "./Components/pages/AdmissionDetail.jsx"; // make sure path is correct
import ResultDetail from "./Components/pages/ResultDetail.jsx"; 
import AdmitcardDetail from "./Components/pages/AdmitcardDetail.jsx"; 
import LatestjobsDetailDetail from "./Components/pages/LatestjobsDetail.jsx"; 
import AnswerkeyDetail from "./Components/pages/AnswerkeyDetail.jsx"; 
import SyllabusDetail from "./Components/pages/SyllabusDetail.jsx"; 
import ImportantDetail from "./Components/pages/ImportantDetail.jsx"; 
import CertificateverificationDetail from "./Components/pages/CertificateverificationDetail.jsx"; 
import BoxDetail from "./Components/pages/BoxDetail.jsx"; 
import HeadlineDetail from "./Components/pages/HeadlineDetail.jsx"; 
import LatestJobsViewMore from "./Components/pages/latestjobsviewmore.jsx";
import ResultViewMore from "./Components/pages/Resultviewmore.jsx";
import AdmitcardViewMore from "./Components/pages/admitcardviewmore.jsx";
import SyllabusViewMore from "./Components/pages/Syllabusviewmore.jsx";
import AnswerkeyViewMore from "./Components/pages/Answerkeyviewmore.jsx";
import SearchPage from "./Components/pages/SearchPage.jsx";
import FooterPage from "./Components/footer/Footer.jsx";
import ContactPage from "./Components/pages/ContactPage.jsx";
import ScholarshipPage from "./Components/pages/ScholarshipPage.jsx";
import ScholarshipDetail from "./Components/pages/ScholarshipDetail.jsx";
import InternshipPage from "./Components/pages/InternshipPage";
import InternshipDetail from "./Components/pages/InternshipDetail";
import NewsPage from "./Components/pages/NewsPage";
import NewsDetail from "./Components/pages/NewsDetail";

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      
      <Routes>
        {/* Main Page */}
        <Route path="/" element={<Main />} />
        <Route path="/result/:id" element={<ResultDetail />} />
        <Route path="/admitcard/:id" element={<AdmitcardDetail />} />
        <Route path="/latestjobs/:id" element={<LatestjobsDetailDetail />} />
        <Route path="/answerkey/:id" element={<AnswerkeyDetail />} />
        <Route path="/syllabus/:id" element={<SyllabusDetail />} />
        <Route path="/important/:id" element={<ImportantDetail />} />
        <Route path="/certificateverification/:id" element={<CertificateverificationDetail />} />
        <Route path="/box/:id" element={<BoxDetail />} />
        <Route path="/headline/:id" element={<HeadlineDetail />} />
          <Route path="/latestjobs" element={<LatestJobsViewMore />} />
          <Route path="/results" element={<ResultViewMore />} />
          <Route path="/syllabus" element={<SyllabusViewMore />} />
          <Route path="/admitcard" element={<AdmitcardViewMore />} />
          <Route path="/answerkey" element={<AnswerkeyViewMore />} />
          <Route path="/search" element={<SearchPage />} />
           <Route path="/footer" element={<FooterPage />} />
           <Route path="/contact" element={<ContactPage />} />
          <Route path="/scholarships" element={<ScholarshipPage />} />
        <Route path="/scholarships/:id" element={<ScholarshipDetail />} />
        <Route path="/internships" element={<InternshipPage />} />
<Route path="/internships/:id" element={<InternshipDetail />} />
<Route path="/news" element={<NewsPage />} />
  <Route path="/news/:id" element={<NewsDetail />} />

        {/* Admission Detail Page (Dynamic ID) */}
        <Route path="/admission/:id" element={<AdmissionDetail />} />

        {/* Catch All (Page Not Found) */}
        <Route path="*" element={<h2 style={{color:"red"}}>Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
