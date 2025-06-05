'use client';

// IMP NEXT LOGIC/COMPONENTS
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link';

// IMP WIZARD CONTEXT TO KEEP DATA ACROSS PAGES
import { useWizard } from '../context/WizardContext';

// IMP WIZARD COMPONENTS
import WizardNav from '../components/WizardNav';
import WizardDump from '../components/devWizardDump';

export default function Step1() {
	// INIT ROUTER
	const router = useRouter();

	// INIT WIZARD
	const { data, setData } = useWizard();

	// SAVE THE SELECTED PET AND MOVE ONTO NEXT PAGE
	const handleSelect = (pet) => {
		// CLEAR OTHER CHOICES IF NEW PET CHOSEN
		if (data.pet != pet) {
			data.accessory = '';
			data.meals = '';
			data.maxPage = 2;
		}
		// UPDATE DATA WITH PET CHOICE
		setData({ ...data, pet });

		// UPDATE THE MAX PAGE COMPLETED IF NOT ALREADY DONE
		if (data.maxPage < 2) {
			setData((prev) => ({ ...prev, maxPage: 2 }));
		}

		// GOTO THE NEXT PAGE
		router.push('/step2');
	};

	// SHOW A NEXT BUTTON IN CASE USER RETURNS TO FIRST BUT DOESN'T 'FEEL CONFIDENT' ABOUT RE-CHOOSING ANIMAL, FOR FEAR OF LOSING DATA
	const handleNext = () => {
		router.push('/step2');
	};

	// UPDATE HOVER IMAGE
	function setHoveredPet(pet_str) {
		// ALWAYS GET IT TO AVOID RACE-CONDITIONS ON PAGE LOAD
		const sil_img_element = document.querySelector('#silh_img');

		// INTERCEPT IF 'current'
		if (pet_str == 'Current') {
			pet_str = data.pet;
		}

		switch (pet_str) {
			case 'Cat':
				sil_img_element.src = '/Images/cat_silh.jpg';
				break;
			case 'Dog':
				sil_img_element.src = '/Images/dog_silh.jpg';
				break;
			case 'Other Pet':
				sil_img_element.src = '/Images/other_silh.jpg';
				break;
		}
	}

	// UPDATE ON PAGE LOAD IF PET HAS BEEN CHOSEN
	// if (data.pet != '') {
	// 	setHoveredPet(data.pet);
	// }
	useEffect(() => {
		if (data.pet) {
			setHoveredPet(data.pet);
		}
	}, [data.pet]);

	return (
		<main>
			<WizardNav maxPage={data.maxPage} />

			<div className="wizContainer">
				<div className="wizPick">
					<div>
						{data.pet == '' ? <h2>Select Pet Type</h2> : <h2>Selected {data.pet}</h2>}
						<button onClick={() => handleSelect('Cat')} onMouseEnter={() => setHoveredPet('Cat')} onMouseLeave={() => setHoveredPet('Current')}>
							Cat
						</button>
						<button onClick={() => handleSelect('Dog')} onMouseEnter={() => setHoveredPet('Dog')} onMouseLeave={() => setHoveredPet('Current')}>
							Dog
						</button>
						<button
							onClick={() => handleSelect('Other Pet')}
							onMouseEnter={() => setHoveredPet('Other Pet')}
							onMouseLeave={() => setHoveredPet('Current')}
						>
							Other
						</button>
					</div>
					<div>
						<img id="silh_img" src="/Images/unknown_silh.jpg"></img>
					</div>
				</div>
			</div>

			<div className="wizNavBottom">
				<Link href="/">
					<button>Home</button>
				</Link>

				<button onClick={handleNext} disabled={data.pet == ''}>
					Next
				</button>
			</div>
			{/* <WizardDump /> */}
		</main>
	);
}
