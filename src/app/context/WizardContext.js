'use client';

import { createContext, useContext, useState } from 'react';

const WizardContext = createContext();

export function WizardProvider({ children }) {
	const [data, setData] = useState({
		pet: '',
		accessory: '',
		meals: '',
		days: 0,
		maxPage: 1
	});

	return <WizardContext.Provider value={{ data, setData }}>{children}</WizardContext.Provider>;
}

export const useWizard = () => useContext(WizardContext);
