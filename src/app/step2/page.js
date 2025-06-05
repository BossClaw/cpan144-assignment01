'use client';

// IMP NEXT LOGIC/COMPONENTS
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

// IMP WIZARD CONTEXT TO KEEP DATA ACROSS PAGES
import { useWizard } from '@/app/context/WizardContext';

// IMP WIZARD COMPONENTS
import WizardNav from '../components/WizardNav';
import WizardDump from '../components/devWizardDump';
import WizInputAccessory from '../components/WizInputAccessory';
import WizInputMeals from '../components/WizInputMeals';
import WizInputDays from '../components/WizInputDays';
import ChoiceMesg from '../components/ChoiceMesg';

export default function Step2() {
	// INIT THE ROUTER
	const router = useRouter();

	// INIT THE CONTEXT
	const { data, setData } = useWizard();

	// TRACK CHANGES FOR FEEDBACK AND NAV
	const [choices, setChoices] = useState(recountChoices());

	// TRIGGER SETCHOICES UPDATE
	useEffect(() => {
		setChoices(recountChoices());
	}, [data]);

	// SAVE THE DATA TO THE CONTEXT
	const handleChange = (e) => {
		// GET NAME & DATA FROM INPUT ELEMENT
		const { name, value } = e.target;

		// UPDATE DATA ON WIZARD CONTEXT
		setData((prev) => ({ ...prev, [name]: value }));

		// NOTE - CHOICES UPDATES WITH VIS USE EFFECT
	};

	function recountChoices() {
		// UPDATE THE CHOICES MADE COUNT FOR ELEMENT TO UPDATE
		// BRUTE FORCE IF QUICKER TO WRITE. BIGGER PROJ WOULD LIKELY NEED MORE DYNAMIC SOLUTION LIKE ARRAY SUM
		let recount = 0;
		if (data.accessory !== '') {
			console.log('ACC (', data.accessory, ')');
			recount++;
		}
		if (data.meals !== '') {
			console.log('MEALS (', data.meals, ')');
			recount++;
		}
		if (data.days > 0) {
			console.log('DAYS (', data.days, ')');
			recount++;
		}
		return recount;
	}

	// NAV BUTTON LOGIC
	const handlePrev = () => {
		// GOTO THE PREV PAGE
		router.push('/step1');
	};

	const handleNext = () => {
		// UPDATE THE MAX PAGE COMPLETED IF NOT ALREADY DONE
		if (data.maxPage < 3) {
			setData((prev) => ({ ...prev, maxPage: 3 }));
		}

		// GOTO THE NEXT PAGE
		router.push('/step3');
	};

	return (
		<main>
			<WizardNav maxPage={data.maxPage} />

			<div className="wizContainer">
				<h2>Customize Vacation for your {data.pet}</h2>

				<div className="wizAccessoryTable">
					<WizInputAccessory pet={data.pet} accessory={data.accessory} onChange={handleChange} />
					<WizInputMeals pet={data.pet} meals={data.meals} onChange={handleChange} />
					<WizInputDays days={data.days} onChange={handleChange} />
				</div>
			</div>

			{/* USER FEEDBACK MESG BELOW THE FORM */}
			<div className="ctaCenter">
				<ChoiceMesg ChoiceCount={choices} />
			</div>

			<div className="wizNavBottom">
				<button onClick={handlePrev}>Prev</button>
				<button onClick={handleNext} disabled={choices < 3}>
					Next
				</button>
			</div>
			
		</main>
	);
}
