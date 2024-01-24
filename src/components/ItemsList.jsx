import '../styles/ItemsList.scss'

function ItemsList({ toggleShowForm, showForm, items, changeFormFill, initialState, type }) {
    const toShow = type === 'education' ? 'school': 'companyName';
	return (
		<div className={`${type}-list`}>
			{items.map((elem, i) => {
				return (
					<div className="item" key={i} onClick={(e) => {
						e.stopPropagation();
						toggleShowForm(!showForm);
						changeFormFill(elem);
					}}>
						{elem[toShow]}
					</div>
				)
			})}
			<div className="list-button-block">
				<button className='add-item-btn' type='button' onClick={(e) => {
					e.stopPropagation();
					changeFormFill(initialState);
					toggleShowForm(!showForm);
				}}>Add {type}</button>
			</div>
		</div>
	)
}

export default ItemsList;