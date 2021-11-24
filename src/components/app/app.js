import AppInfo from '../app-info/app-info';
import './app.css'
import SearchPanel  from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmploeesList from '../emploees-list/emploees-list';
import EmploeesAddForm from '../emploees-add-form/emploees-add-form';

function App () {

    const data = [
        {name: 'Tima M.', sallary: 800, increase: true, star: false, id: 1},
        {name: 'Andrey E.', sallary: 500, increase: false, star: false, id: 2},
        {name: 'Olexanr B.', sallary: 228, increase: false, star: false, id: 3}
    ];

    return (
        <div className='app'>
            <AppInfo/>

            <div className='search-panel'>
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmploeesList data={data}/>
            <EmploeesAddForm/>
        </div>
    )
}

export default App;