import React from 'react';
import { Button, FormControl } from 'react-bootstrap';
function SearchBar({ setUsername, search }) {
    return (
        <div>
            <FormControl
                type="text"
                placeholder="Type Username here"
                onChange={(e) => setUsername(e.target.value)}
            />
            <Button onClick={search}>Search</Button>
        </div>
    );
}


export default SearchBar;
