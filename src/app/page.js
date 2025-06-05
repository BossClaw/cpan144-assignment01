'use client';

import Link from 'next/link';

export default function Home() {
	return (
		<main>
			<div className="homeWrapper">
				<h1>
					Welcome to Claws
					<br /> Pet Vacation Package Planner!
				</h1>
				<p>Plan a relaxing getaway for your furry, feathered, scaley, shelly, hairy, slimey, bald, or other, friend!</p>
				<p>
					<i>(and enjoy some quiet & piece of mind!)</i>
				</p>
				<p>
					<Link href="/step1">
						<button className='doubleSize'>Start Planning Now!</button>
					</Link>
				</p>
			</div>
		</main>
	);
}
