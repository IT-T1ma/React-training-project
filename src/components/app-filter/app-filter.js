import './app-filter.css'

const AppFilter = (props) => {
    const buttonsData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'star', label: 'На повышение'},
        {name: 'moreThen100', label: 'ЗП больше 100'},
    ]

    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active? 'btn-light' : 'btn-outline-light';
        return (
            <button type='button'
                    className={`btn ${clazz}`}
                    key={name}
                    onClick={ () => props.onFilterSelect(name)}>
                        {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
        
    )
}

export default AppFilter;