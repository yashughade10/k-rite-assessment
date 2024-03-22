import React, { useState } from 'react';
import { Code, Megaphone, MessagesSquare, PenTool, Plus, Search, Settings, SquarePlus } from 'lucide-react';
import Product from "../assets/Product"
import Sidebar from './Sidebar';
import ContentPage from './ContentPage';

const Home = () => {

    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);

    // Function to toggle the dropdown menu
    const toggleDropdown = (dropdownNumber) => {
        switch (dropdownNumber) {
            case 1:
                setIsOpen1(!isOpen1);
                break;
            case 2:
                setIsOpen2(!isOpen2);
                break;
            case 3:
                setIsOpen3(!isOpen3);
                break;
            default:
                break;
        }
    };

    console.log(Product);
    Product.map(item => {
        console.log(item.memberImages);
    })

    const rowData = [
        { brand: 'Brand 1', description: 'Description 1', members: 5, categories: 'Category 1', tags: 'Tag 1', nextMeeting: 'March 25, 2024' },
        { brand: 'Brand 2', description: 'Description 2', members: 8, categories: 'Category 2', tags: 'Tag 2', nextMeeting: 'April 1, 2024' },
        // Add more sample data as needed
    ];

    return (
        <>
            <Sidebar />
            <ContentPage />
        </>
    );
}

export default Home;
