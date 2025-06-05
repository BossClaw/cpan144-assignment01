export default function WizInputAccessory({ pet, accessory, onChange }) {
	return (
		<>
			<span>Accessory</span>
			<select name="accessory" value={accessory} className="wizNav" onChange={onChange}>
				<option value="">Select</option>
				{pet === 'Dog' && (
					<>
						<option value="Doggles">Doggles</option>
						<option value="Chew Toys">Chew Toys</option>
					</>
				)}
				{pet === 'Cat' && (
					<>
						<option value="Sunny Cat Bed">Sunny Cat Bed</option>
						<option value="Laser Pointers">Laser Pointers</option>
					</>
				)}
				{pet === 'Other Pet' && (
					<>
						<option value="Mini Hammock">Mini Hammock</option>
						<option value="Treat Pack">Treat Pack</option>
					</>
				)}
			</select>
		</>
	);
}
