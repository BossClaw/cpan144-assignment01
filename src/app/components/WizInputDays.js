export default function WizInputDays({ days, onChange }) {
	return (
		<>
			<span>Duration (days):</span>
			<input type="number" className="wizNav" name="days" value={days} min="1" max="7" onChange={onChange} />
		</>
	);
}
