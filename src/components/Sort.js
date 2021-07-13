import React, {useState} from 'react'

function Sort() {
    const [sort, setSort] = useState(0)
    return (
        <>
             <select value={sort} onChange={function(e){
                 console.log(e.target.value);
                 setSort(e.target.value)
             }}>
          <option value="0">Sort by</option>
          <option value="1">Newest</option>
          <option value="2">Price (low to high)</option>
          <option value="3">Price (high to low)</option>
          <option value="4">Name (A - Z)</option>
          <option value="5">Name (Z - A)</option>
          
        </select>
        </>
    )
}

export default Sort
