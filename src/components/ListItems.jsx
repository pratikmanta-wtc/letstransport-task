import React from "react";

const ListItems = (props) => {
    const { searchedItems } = props;
    
    return (
        <div>
            {searchedItems.map((elem, idx) => {
                return (
                    <div key={idx}>
                        <span>{elem.first_name}</span>
                        <span>{elem.last_name}</span>
                        <span>{elem.email}</span>
                        <span>{elem.address}</span>  
                    </div>
                )
            })}
        </div>
    )
}

export default ListItems