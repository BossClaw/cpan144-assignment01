// THE APP PAGE TEMPLATE THAT WRAPS OTHER PAGES AND PROVIDES COMMON STYLE / LOGIC
import '@/app/styles/globals.css';
import '@/app/styles/wizard.css';

import { WizardProvider } from './context/WizardContext';
import Link from 'next/link';

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<WizardProvider>
					<nav className="nav">
						<div className="nav">
							<Link href="/">Home</Link>
						</div>
					</nav>

					{children}
				</WizardProvider>
			</body>
		</html>
	);
}
