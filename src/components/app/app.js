import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel  from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmploeesList from '../emploees-list/emploees-list';
import EmploeesAddForm from '../emploees-add-form/emploees-add-form';

import './app.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Tima M.', salary: 800, increase: true, id: 1},
                {name: 'Andrey E.', salary: 500, increase: false, id: 2},
                {name: 'Olexanr B.', salary: 228, increase: false, id: 3}
            ]
        } 
        this.maxId = 4;     
    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            // const index = data.findIndex(elem => elem.id === id)
            // const befort = data.slice(0, index)
            // const after = data.slice(index + 1)
            // const newArr = [...befort, ...after]
            // return {
            //     data: newArr
            // }
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newPerson = {
            name: name,
            salary: salary,
            increase: false,
            id: this.maxId++
        }
        this.setState(({data}) =>{
            const newArr = [...data, newPerson];
            return {
                data: newArr
            }
        })

    }

    render() {
        return (
            <div className='app'>
                <AppInfo/>
    
                <div className='search-panel'>
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmploeesList 
                    data={this.state.data}
                    onDelete={this.deleteItem}/>
                <EmploeesAddForm onAdd={this.addItem}/>
            </div>
        )
    }
}

export default App;