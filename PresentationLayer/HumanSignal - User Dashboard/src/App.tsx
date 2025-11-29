import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Dashboard } from './components/Dashboard';
import { AssessmentForm } from './components/AssessmentForm';
import { CaseDetail } from './components/CaseDetail';
import { Homepage } from './components/Homepage';
import { ActionCenter } from './components/ActionCenter';
import { cases, Case } from './lib/mockData';
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner@2.0.3";

function App() {
  const [activeScreen, setActiveScreen] = useState<string>('home');
  const [selectedCaseId, setSelectedCaseId] = useState<string | null>(null);
  const [allCases, setAllCases] = useState<Case[]>(cases);
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

  const handleNavigate = (screen: string) => {
    setActiveScreen(screen);
    if (screen === 'dashboard' || screen === 'action-center') {
      setSelectedCaseId(null);
    }
    window.scrollTo(0, 0);
  };

  const handleSelectCase = (caseId: string) => {
    setSelectedCaseId(caseId);
    setActiveScreen('case-detail');
    window.scrollTo(0, 0);
  };

  const handleAssessmentSubmit = (data: any) => {
    // Mock calculation
    toast.success("Рискът е изчислен успешно!");
    
    // Create mock new case
    const newCase: Case = {
      id: `CASE-${Math.floor(Math.random() * 10000)}`,
      name: "Нов Пациент", // In a real form we'd ask for name
      age: parseInt(data.age),
      risk: parseInt(data.age) > 80 ? 'High' : 'Medium', // Simple mock logic
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

    setAllCases([newCase, ...allCases]);
    
    handleNavigate('dashboard');
  };

  // We need to find the selected case from the *state* or *imported* data
  // Since I'm not passing state to Dashboard yet, I'll just use the imported one + potentially new ones if I could
  // For this MVP, let's stick to static data for the Dashboard viewing, 
  // but for CaseDetail, we find it in the 'cases' array.
  const selectedCaseData = cases.find(c => c.id === selectedCaseId);

  return (
    <div className="min-h-screen bg-[var(--color-background)] font-sans text-[var(--color-dark-teal)] selection:bg-[var(--color-apricot)] selection:text-white transition-colors duration-300">
      {activeScreen !== 'home' && (
        <Navbar 
          onNavigate={handleNavigate} 
          activeScreen={activeScreen}
          toggleTheme={toggleTheme}
          isDarkMode={isDarkMode}
        />
      )}
      
      <main className="w-full">
        {activeScreen === 'home' && (
           <Homepage onNavigate={handleNavigate} />
        )}

        {activeScreen === 'dashboard' && (
          <Dashboard onSelectCase={handleSelectCase} />
        )}
        
        {activeScreen === 'action-center' && (
          <ActionCenter 
            onNavigate={handleNavigate} 
            onSelectCase={handleSelectCase} 
          />
        )}

        {activeScreen === 'new-assessment' && (
          <AssessmentForm 
            onCancel={() => handleNavigate('dashboard')}
            onSubmit={handleAssessmentSubmit}
          />
        )}

        {activeScreen === 'case-detail' && selectedCaseData && (
          <CaseDetail 
            caseData={selectedCaseData} 
            onBack={() => handleNavigate('dashboard')}
          />
        )}
      </main>

      <Toaster position="top-center" />
    </div>
  );
}

export default App;
