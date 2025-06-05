'use client';

// IMP NEXT LOGIC/COMPONENTS
import { useRouter } from 'next/navigation';

// IMP WIZARD CONTEXT TO KEEP DATA ACROSS PAGES
import { useWizard } from '../context/WizardContext';

// IMP WIZARD COMPONENTS
import WizardNav from '../components/WizardNav';

export default function Step3() {
	// INIT THE ROUTER
	const router = useRouter();

	// GET THE DATA FROM THE WIZARD CONTEXT
	const { data } = useWizard();

	// QUICK COST CALC
	const costPerDay = data.type == 'Dog' ? 50 : 30;
	const totalCost = (parseInt(data.days || 1) * costPerDay).toFixed(2);

	// NAV BUTTON LOGIC
	const handlePrev = () => {
		router.push('/step2');
	};

	return (
		<>
			<main>
				<WizardNav maxPage={data.maxPage} />
				<div className="wizContainer">
					<h2>Does Your Pet's Vacation Package Look good?</h2>
					<p>If not, you can go to the previous page and make changes.</p>
					<p>
						If so, click that <b>Submit Booking</b> button and make your pet's dream a reality!
					</p>

					<div className="centerInfo">
						<h3>Vacation Summary</h3>
						<ul>
							<li>Pet Type: {data.pet}</li>
							<li>Accessory: {data.accessory}</li>
							<li>Meals: {data.meals}</li>
							<li>Days: {data.days}</li>
							<li>
								<strong>Total Cost: ${totalCost}</strong>
							</li>
						</ul>

						{/* RIGHT ALIGN BOOKING TO INDICATE 'MOVE FORWARD WITH THIS PROCESS' */}
						<div className="ctaRight">
							<button onClick={() => document.getElementById('wizBookingModal').showModal()}>Submit Booking</button>
						</div>
					</div>
				</div>
				<div className="wizNavBottom">
					<button onClick={handlePrev}>Prev</button>
					<span></span>
				</div>
			</main>

			<dialog id="wizBookingModal">
				<h2>Vacation Booked!</h2>
				<p>Your pet is going to have an amazing time 🐾</p>
				<button
					onClick={() => {
						const modal = document.getElementById('wizBookingModal');
						modal.close();
						window.location.href = '/';
					}}
				>
					Close
				</button>
			</dialog>
		</>
	);
}
