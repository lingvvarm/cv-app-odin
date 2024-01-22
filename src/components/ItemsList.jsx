function ItemsList({ toggleShowForm, showForm, items, changeFormFill, initialState, type }) {
    const toShow = type === 'education' ? 'school': 'companyName';
	return (
		<div className={`${type}-list`}>
			{items.map((elem, i) => {
				return (
					<div key={i} onClick={(e) => {
						e.stopPropagation();
						toggleShowForm(!showForm);
						changeFormFill(elem);
					}}>
						{elem[toShow]}
					</div>
				)
			})}
			<button type='button' onClick={(e) => {
				e.stopPropagation();
				changeFormFill(initialState);
				toggleShowForm(!showForm);
			}}>Add {type}</button>
		</div>
	)
}

export default ItemsList;