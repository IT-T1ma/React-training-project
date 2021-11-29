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
                {name: 'Tima M.', salary: 800, increase: true, star: true, id: 1},
                {name: 'Andrey E.', salary: 500, increase: false, star: false, id: 2},
                {name: 'Olexanr B.', salary: 228, increase: false, star: false, id: 3}
            ],
            term: '',
            filter: 'all',
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
            star: false,
            id: this.maxId++
        }
        this.setState(({data}) =>{
            const newArr = [...data, newPerson];
            return {
                data: newArr
            }
        })

    }

    onToggleIncrease = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id) {
                    return {...item, increase: !item.increase}
                }
                return item;
            })
        }))   
    }

    onToggleStar = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id) {
                    return {...item, star: !item.star}
                }
                return item;
            })
        }))   
    }

    searchEmploees = (items, term) => {
        if(term.length === 0) {
            return items;
        }
        return items.filter((item) => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({
            term: term
        })
    }

    filterPost = (items, filter) => {
        switch(filter) {
            case 'star':
                return items.filter(item => item.star)
            case 'moreThen1000':
                return items.filter(item => item.salary > 100)
            default: return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter})
    }


    render() {
        const {data, term, filter} = this.state;
        const emploees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const visibleData = this.filterPost(this.searchEmploees(data, term), filter);

        return (
            <div className='app'>
                <AppInfo 
                    emploees={emploees} 
                    increased={increased}/>
    
                <div className='search-panel'>
                    <SearchPanel 
                        onUpdateSearch = {this.onUpdateSearch}
                    />
                    <AppFilter 
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}
                    />
                </div>
    
                <EmploeesList 
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleStar={this.onToggleStar}
                />
                <EmploeesAddForm onAdd={this.addItem}/>
            </div>
        )
    }
}

export default App;