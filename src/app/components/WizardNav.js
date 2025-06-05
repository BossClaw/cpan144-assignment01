import Link from 'next/link';

export default function WizardNav({ maxPage }) {
	//ALLOW LATER STEPS ONLY IF EARLIER STEPS COMPLETED

	// KEEP LOGIC OUT OF HTML LAYOUT

	// DEFAULT BUTTONS WITH NO NAV
	let step2Button = <button className="wizNav">Step 2</button>;
	let step3Button = <button className="wizNav">Step 3</button>;

    // ADD LINK AND ACTIVE CLASS
    // SOME REPETITION, BUT FOR SMALL FEATURE IT'S BETTER THAN OVERCOMPLICATING
	if (maxPage > 1) {
		step2Button = <Link href="/step2"><button className="wizNav wizActive">Step 2</button></Link>;
	}
	if (maxPage > 2) {
		step3Button = <Link href="/step3"><button className="wizNav wizActive">Step 3</button></Link>;
	}
	return (
		<div className="wizNavTop">
			<Link href="/step1">
				<button className="wizNav wizActive">Step 1</button>
			</Link>

			{step2Button}

			{step3Button}
		</div>
	);
}
