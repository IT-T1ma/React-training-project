import EmploeesListItem from "../emploees-list-item/emploees-list-item"
import './emploees-list.css'

const EmploeesList = ({data, onDelete, onToggleIncrease, onToggleStar}) => {
    const elements = data.map(item => {
        const {id, ...itemProps} = item;
            return (
                <EmploeesListItem 
                    key={id} 
                    {...itemProps}
                    onDelete={() => onDelete(id)}
                    onToggleIncrease={() => onToggleIncrease(id)}
                    onToggleStar={() => onToggleStar(id)}
                    />
            )
        })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmploeesList;