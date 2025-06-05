'use client';

import { useWizard } from '@/app/context/WizardContext';

export default function WizardDump() {
	// GET WIZARD AND DESTRUCTURE TO VARS
	const { data, setData } = useWizard();

	console.log('WIZARD DATA DUMP');
	console.log(data);

	return (
		<>
			<hr />
			<h3>DEBUG DUMP</h3>
			<ul>
				<li>PET {data.pet}</li>
				<li>ACCESSORY {data.accessory}</li>
				<li>MEALS {data.meals}</li>
				<li>DAYS {data.days}</li>
				<li>MAX PAGE {data.maxPage}</li>
			</ul>
		</>
	);
}
