import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation, useParams } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Dashboard } from './components/Dashboard';
import { AssessmentForm } from './components/AssessmentForm';
import { CaseDetail } from './components/CaseDetail';
import { Homepage } from './components/Homepage';
import { ActionCenter } from './components/ActionCenter';
import { Case } from './lib/mockData';
import { Toaster } from "./components/ui/sonner";
import { toast } from "sonner";
import { CasesProvider, useCases } from './contexts/CasesContext';

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();
  const { addCase } = useCases();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleSelectCase = (caseId: string) => {
    navigate(`/case/${caseId}`);
    window.scrollTo(0, 0);
  };

  const handleAssessmentSubmit = (data: any) => {
    toast.success("Рискът е изчислен успешно!");
    
    const newCase: Case = {
      id: `CASE-${Math.floor(Math.random() * 10000)}`,
      name: "Нов Пациент",
      age: parseInt(data.age),
      risk: parseInt(data.age) > 80 ? 'High' : 'Medium',
      lastAssessmentDate: new Date().toISOString().split('T')[0],
      lastIntervention: null,
      gender: data.gender === 'male' ? 'Male' : 'Female',
      chronicConditions: parseInt(data.chronicConditions || 0),
      mobility: data.mobility === 'full' ? "Напълно подвижен" : "Затруднена мобилност",
      caspScore: data.casp,
      scoreBreakdown: { social: 50, health: 50 },
      keyFactors: ["Нов случай", "Необходима допълнителна оценка"],
      recommendations: ["Насрочи първично посещение"],
      interventions: []
    };

    addCase(newCase);
    navigate('/dashboard');
  };

  const showNavbar = location.pathname !== '/';

  return (
    <div className="min-h-screen bg-[var(--color-background)] font-sans text-[var(--color-dark-teal)] selection:bg-[var(--color-apricot)] selection:text-white transition-colors duration-300">
      {showNavbar && (
        <Navbar 
          toggleTheme={toggleTheme}
          isDarkMode={isDarkMode}
        />
      )}
      
      <main className="w-full">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/dashboard" element={<Dashboard onSelectCase={handleSelectCase} />} />
          <Route path="/action-center" element={<ActionCenter onSelectCase={handleSelectCase} />} />
          <Route path="/assessment/new" element={<AssessmentForm onSubmit={handleAssessmentSubmit} />} />
          <Route path="/case/:caseId" element={<CaseDetailWrapper />} />
        </Routes>
      </main>

      <Toaster position="top-center" />
    </div>
  );
}

function CaseDetailWrapper() {
  const navigate = useNavigate();
  const { caseId } = useParams<{ caseId: string }>();
  const { cases } = useCases();
  const caseData = cases.find(c => c.id === caseId);

  if (!caseData) {
    return (
      <div className="max-w-[1440px] mx-auto p-6">
        <p className="text-[var(--color-muted-foreground)]">Случаят не беше намерен.</p>
        <button onClick={() => navigate('/dashboard')} className="mt-4 text-[var(--color-deep-blue)]">
          Назад към таблото
        </button>
      </div>
    );
  }

  return <CaseDetail caseData={caseData} onBack={() => navigate('/dashboard')} />;
}

function App() {
  return (
    <BrowserRouter>
      <CasesProvider>
        <AppContent />
      </CasesProvider>
    </BrowserRouter>
  );
}

export default App;
