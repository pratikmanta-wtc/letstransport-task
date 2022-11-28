import React, { useEffect, useState } from "react";
import ListItems from './ListItems'


const ListForm = () => {
    const [listItems, setListItems] = useState([])

    const [searchInput, setSearchInput]=useState("")
    const [searchedItems, setSearchedItems] = useState([])


    const handleSearch = (items) => {
        setListItems(items)

        function triggerSearch(data){
            let searched = []
            listItems.map(elem => {
                let { first_name, last_name, email, address } = elem;

                if(first_name.toLowerCase().includes(data) || last_name.toLowerCase().includes(data) || email.toLowerCase().includes(data) || address.toLowerCase().includes(data)){
                    searched.push(elem);
                    return true
                } else {
                    return false
                }
            })            
            setSearchedItems(searched)
        }

        if(searchInput.length >= 1){
            triggerSearch(searchInput)
        }

    }
    const handleClear = () => {
        setSearchInput('')
        setListItems([])
        setSearchedItems([])
    }
    const handleChange = (e) => {
        const { value } = e.target;
        if(value == ""){
            setListItems([])
        } else {
            fetch('https://run.mocky.io/v3/b606e1f7-74f2-429d-93de-32ce62ab7901').then((res) => {
            return res.json()
            }).then(data => {
                setSearchInput(value);
                handleSearch(data)
            })
        }
        
    }


    return (
        <div>
            <input type='text' placeholder="Search" onChange={handleChange}/>
            {
                searchedItems.length > 0 ?
                <ListItems searchedItems={searchedItems}/>
                : null

            }
            <button onClick={handleClear}>Clear</button>
        </div>
    )
}

export default ListForm