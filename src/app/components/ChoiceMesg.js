export default function ChoiceMesg({ ChoiceCount }) {
	let mesgText = 'Choose 3 options';
	console.log('CHOICE COUNT[' + ChoiceCount + ']');
	switch (ChoiceCount) {
		case 0:
			mesgText = 'Choose your 3 options';
			break;
		case 1:
			mesgText = 'Choose another 2 options';
			break;
		case 2:
			mesgText = '1 more option to go!';
			break;
		case 3:
			mesgText = 'All options picked!';
			break;
	}
	return <div className="wizOptionMesg">{mesgText}</div>;
}
