import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import  Dropdown  from 'react-bootstrap/Dropdown';
import Button from "./Button";
import { useState } from 'react';



const AdsFilter = () =>{

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedTag, setSelectedTags] = useState('Tags');
    // handler when inpur changes 
    const handleSearch = () =>{
        console.log("Searching for", searchTerm, "with tags",selectedTag);
    }

    return(
        <div className="filter-bar">
            {/*Search Bar   */}
            <InputGroup className="mb-3">
                    <InputGroup.Text>@</InputGroup.Text>
                    <Form.Control placeholder='Search Ads ...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}></Form.Control>
                    <DropdownButton title="Tags" >
                        <Dropdown.Item>First Tag</Dropdown.Item>
                        <Dropdown.Item>Second Tag</Dropdown.Item>
                        <Dropdown.Item>Third Tag</Dropdown.Item>
                        <Dropdown.Item>Fourth Tag</Dropdown.Item>
                    </DropdownButton>
                    <Button className='button-secondary' onClick={handleSearch}>Search</Button>

            </InputGroup>
        </div>
    )
};


export default AdsFilter;