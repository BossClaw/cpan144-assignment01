export default function WizInputMeals({ pet, meals, onChange }) {
	return (
		<>
			<span>Meal Plan</span>
			<select name="meals" value={meals} className="wizNav" onChange={onChange}>
				<option value="">Select</option>
				{pet === 'Dog' && (
					<>
						<option value="Gourment Bone Broth">Gourment Bone Broth</option>
						<option value="Couch Chunk Ragout">Couch Chunk Ragout</option>
					</>
				)}
				{pet === 'Cat' && (
					<>
						<option value="Tuna Surpise Cassarole">Tuna Surpise Cassarole</option>
						<option value="Surpised Salmon & Pumpkin">Surpised Salmon & Pumpkin</option>
					</>
				)}
				{pet === 'Other Pet' && (
					<>
						<option value="Protein Pasta">Protien Pasta</option>
						<option value="Bug Buffet">Bug Buffet</option>
						<option value="Savory Seed Selects">Savory Seed Selects</option>
					</>
				)}
			</select>
		</>
	);
}
