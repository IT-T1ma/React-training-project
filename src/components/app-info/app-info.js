import './app-info.css'

const AppInfo = ({emploees, increased}) => {
    return (
        <div className='app-info'>
            <h1>Учет сотрудников в компании: </h1>
            <h2>Общее число сотрудников: {emploees}</h2>
            <h3>Премию получат: {increased}</h3>
        </div>
    )
}

export default AppInfo;