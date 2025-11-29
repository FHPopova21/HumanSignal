import React, { createContext, useContext, useState, ReactNode } from 'react';
import { cases as initialCases, Case } from '../lib/mockData';

interface CasesContextType {
  cases: Case[];
  addCase: (newCase: Case) => void;
}

const CasesContext = createContext<CasesContextType | undefined>(undefined);

export function CasesProvider({ children }: { children: ReactNode }) {
  const [cases, setCases] = useState<Case[]>(initialCases);

  const addCase = (newCase: Case) => {
    setCases((prev) => [newCase, ...prev]);
  };

  return (
    <CasesContext.Provider value={{ cases, addCase }}>
      {children}
    </CasesContext.Provider>
  );
}

export function useCases() {
  const context = useContext(CasesContext);
  if (context === undefined) {
    throw new Error('useCases must be used within a CasesProvider');
  }
  return context;
}

