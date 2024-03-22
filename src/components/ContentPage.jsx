import React, { useState } from 'react';
import Product from "../../public/assets/Product"
import { ArchiveRestore, ArrowDownAZ, ChevronDown, MessagesSquare, Search, Settings, SlidersHorizontal, SquareArrowOutUpRight, SquarePlus, Trash, X } from 'lucide-react';

const ContentPage = () => {

    const [selectedRows, setSelectedRows] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(Product);
    const [sortedBy, setSortedBy] = useState(null);

    // Data for the last row
    const lastRow = [
        <span className=' flex items-center ml-32' key="1"> <p className=' font-semibold mr-1'>10</p> count</span>,
        <span className=' flex items-center ml-14' key="1"><span className=' mr-2' style={{ fontSize: '1.5em' }}>&#x2b;</span> Add Calculation</span>,
        <span className=' flex items-center' key="2"><span style={{ fontSize: '1.5em' }}>&#x2b;</span> Add Calculation</span>,
        <span className=' flex items-center ml-10' key="3"><span className='mr-2' style={{ fontSize: '1.5em' }}>&#x2b;</span> Add Calculation</span>,
        <span className=' flex items-center ml-8' key="4"><span className='mr-2' style={{ fontSize: '1.5em' }}>&#x2b;</span> Add Calculation</span>,
        ""
    ];

    // Function for search filter
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        const filtered = Product.filter((product) => {
            const brandMatch = product.brand.toLowerCase().includes(e.target.value.toLowerCase());
            const tagsMatch = product.tags.some(tag => typeof tag === 'string' && tag.toLowerCase().includes(e.target.value.toLowerCase()));
            return brandMatch || tagsMatch;
        });
        setFilteredProducts(filtered);
    };

    // Sorting according to the alphabets (A-Z)
    const handleSort = () => {
        // Check if the products are already sorted
        const isSorted = sortedBy === 'brand';
        let sortedProducts;

        if (isSorted) {
            // If already sorted, then unsort
            sortedProducts = [...filteredProducts].reverse();
            // Update the state variable
            setSortedBy(null);
        } else {
            // Sort in ascending order by brand
            sortedProducts = [...filteredProducts].sort((a, b) => {
                const brandA = a.brand.toLowerCase();
                const brandB = b.brand.toLowerCase();
                return brandA.localeCompare(brandB);
            });
            setSortedBy('brand');
        }
        // Update the state with sorted or unsorted products
        setFilteredProducts(sortedProducts);
    };



    // Logic for oncheck background color of that row should change
    const handleCheckboxChange = (productId) => {
        setSelectedRows((prevSelectedRows) => {
            if (prevSelectedRows.includes(productId)) {
                return prevSelectedRows.filter((id) => id !== productId);
            } else {
                return [...prevSelectedRows, productId];
            }
        });
    };

    // Function to count selected items
    const countSelectedItems = () => {
        return selectedRows.length;
    };


    return (
        <>
            <div class="p-4 pl-4 sm:ml-64 sm:pl-12">
                <div class=" border-2 border-gray-200 rounded-lg dark:border-gray-200">

                    {/* Header-1 */}
                    <div className="flex justify-between border-b rounded-t-lg items-center p-2 sm:p-3 md:p-3">
                        <h1 className="text-lg md:text-xl font-bold">Products</h1>
                        <div className="flex items-center">
                            <div className="relative mr-2 sm:mr-4">
                                <input
                                    type="text"
                                    className="bg-gray-100 border border-gray-300 rounded-lg pr-3 py-2 focus:outline-none focus:border-gray-500 w-32 sm:w-48 md:w-64 pl-10"
                                    placeholder="Search"
                                    value={searchQuery}
                                    onChange={handleSearchChange}
                                />
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                                    <Search className="h-5 w-5 sm:h-6 sm:w-5 md:w-5 md:h-6 lg:h-8 lg:w-8 p-1 text-gray-500" />
                                </div>
                            </div>
                            <MessagesSquare className="h-9 w-9 sm:h-8 sm:w-8 md:w-9 md:h-9 lg:h-9 lg:w-9 border p-2 rounded-md text-gray-500 cursor-pointer hover:bg-gray-100" />
                            <Settings className="h-9 w-9 sm:h-8 sm:w-8 md:w-9 md:h-9 lg:h-9 lg:w-9 border rounded-md p-2 text-gray-500 cursor-pointer ml-2 sm:ml-4 hover:bg-gray-100" />
                        </div>
                    </div>


                    {/* Filtering header */}
                    <div className="flex flex-col sm:flex-row justify-between p-3">
                        <div className="flex flex-wrap items-center sm:mb-0 mb-2">
                            {/* Dropdowns for brands, desks, tags */}

                            <select className="bg-white border border-gray-300 rounded-md px-3 py-1 focus:outline-none mr-2 mb-2 sm:mb-2 hover:bg-gray-100 cursor-pointer">
                                {/* Data according to the brands */}
                                <option value="">Brands</option>
                                {filteredProducts.map((product, index) => (
                                    <option key={index} value={product.brand}>
                                        {product.brand}
                                    </option>
                                ))}
                            </select>
                            <select className="bg-white  border border-gray-300 rounded-md px-3 py-1 focus:outline-none mr-2 mb-2 sm:mb-2 hover:bg-gray-100 cursor-pointer">
                                <option value="">Desks</option>
                                <option value="">Desk-1</option>
                                <option value="">Desk-2</option>
                                <option value="">Desk-3</option>
                                <option value="">Desk-4</option>
                            </select>
                            <select className="bg-white border border-gray-300 rounded-md px-3 py-1 focus:outline-none mr-2 mb-2 sm:mb-2 w-36 hover:bg-gray-100 cursor-pointer">
                                {/* Data of tags from product.js by removing and make every tag seperate */}
                                <option value="">Tags</option>
                                {filteredProducts.map((product) => (
                                    product.tags.map((tag, index) => (
                                        <option key={`${product.id}-${index}`} value={tag.replace(/^#/, '')}>
                                            {tag.replace(/^#/, '')}
                                        </option>
                                    ))
                                ))}

                            </select>

                            {/* Sort and Filter Button */}
                            <button className="px-3 border py-1 rounded-md mr-2 mb-2 sm:mb-2 hover:bg-gray-100 flex items-center" onClick={handleSort}><ArrowDownAZ className='mr-1' size={16} />Sort</button>
                            <button className="border px-3 py-1 rounded-md mr-2 mb-2 sm:mb-2 hover:bg-gray-100 flex items-center"><SlidersHorizontal className='mr-1' size={16} />Filter</button>
                        </div>
                        {/* Meeting and Import/Export Buttons */}
                        <div className='flex'>
                            <button className="border hover:bg-gray-100 text-gray-700 px-3 py-1 rounded-md mr-2 mb-2 sm:mb-2 flex items-center"><SquarePlus size={16} className='mr-1' />Meeting</button>
                            <button className="border hover:bg-gray-100 text-gray-700 px-3 py-1 rounded-md mr-2 mb-2 sm:mb-2 flex items-center"><SquareArrowOutUpRight size={16} className='mr-1' />Import/Export</button>
                        </div>
                    </div>



                    {/* Table content */}
                    <div>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">Brand</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">Description</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">Members</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">Categories</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">Tags</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">Next Meeting</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">+</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {/* mapping of data to show it dynamically */}
                                    {filteredProducts.map((product) => (
                                        <tr key={product.id} className={selectedRows.includes(product.id) ? 'bg-gray-100' : ''}>
                                            {/* Brand column which has checkbox on click of chackbox it will select that row */}
                                            <td className="px-2 py-2 whitespace-nowrap flex items-center w-56">
                                                <input
                                                    type="checkbox"
                                                    className="form-checkbox h-4 w-4 accent-slate-950 text-black transition duration-150 ease-in-out"
                                                    onChange={() => handleCheckboxChange(product.id)}
                                                />
                                                <img src={"public/assets" + product.logo} className="h-8 me-2 ms-2 sm:h-8 rounded-lg" alt="Brand Logo" />
                                                <span className="flex-grow">{product.brand}</span>
                                                {product.messages && product.messages > 0 && (
                                                    <div className="flex items-center ml-2">
                                                        <MessagesSquare className="h-4 w-4 sm:h-8 sm:w-8 md:w-7 md:h-7 lg:h-5 lg:w-6 p-1 rounded-md text-gray-500 cursor-pointer hover:bg-gray-100" />
                                                        <span className="text-gray-500 text-xs">{product.messages}</span>
                                                    </div>
                                                )}
                                            </td>


                                            {/* Description column */}
                                            <td className="px-3 py-3 whitespace-nowrap border overflow-hidden">
                                                <div className="w-48 truncate">{product.description}</div>
                                            </td>


                                            {/* Adding member images which are overlapping on each other as visible in sample UI */}
                                            <td className="px-3 py-3 whitespace-nowrap border relative w-36 align-middle">
                                                {product.memberImages.slice(0, 6).map((member, index) => (
                                                    <img
                                                        key={index}
                                                        src={"public/assets" + member}
                                                        className="absolute w-8 h-8 rounded-full border-2 border-white bg-gray-100 shadow-md -mt-4 ml-2"
                                                        style={{
                                                            left: index * 21 + 'px',
                                                            zIndex: product.memberImages.length + index
                                                        }}
                                                        alt={`Member ${index + 1}`}
                                                    />
                                                ))}
                                                {/* If images are more than seven then it will show number of members which are not visible */}
                                                {product.memberImages.length > 7 && (
                                                    <div className="absolute w-8 h-8 rounded-full border-2 border-white bg-gray-100 shadow-md -mt-4 ml-2 flex items-center justify-center" style={{ left: '108px', zIndex: 100 }}>
                                                        +{product.memberImages.length - 6}
                                                    </div>
                                                )}
                                            </td>

                                            {/* Adding categories in columns accordingly */}
                                            <td className="px-3 py-3 whitespace-nowrap border">
                                                {product.categories.map((category, index) => (
                                                    <span
                                                        key={index}
                                                        className="truncate border-2 px-1 rounded-md inline-block max-w-xs mr-2"
                                                        style={{
                                                            borderColor: category.border,
                                                            color: category.color,
                                                            backgroundColor: category.background,
                                                            textShadow: "0 0 5px 2px white"
                                                        }}
                                                    >{category.name}</span>
                                                ))}
                                            </td>


                                            {/* Implementing the tags in column accordignly */}
                                            <td className="px-3 py-3 whitespace-nowrap border overflow-hidden" style={{ maxWidth: "180px" }}>
                                                {product.tags.map((tag, index) => (
                                                    <span key={index} className="truncate border-2 rounded-md mr-1 text-gray-400">{tag}</span>
                                                ))}
                                            </td>

                                            {/* Styling the content according to the styles we have provide in "product.js" */}
                                            <td className="px-3 py-3 whitespace-wrap border">
                                                <div className='border-2 px-1 rounded-md w-max'
                                                    style={{
                                                        borderColor: product.meeting.border,
                                                        color: product.meeting.text,
                                                        backgroundColor: product.meeting.background,
                                                        textShadow: "0 0 5px 2px white"
                                                    }}>
                                                    {product.meeting.time}
                                                </div>
                                            </td>
                                            <td className="px-3 py-3 whitespace-wrap border"></td>
                                        </tr>
                                    ))}

                                    {/* Dynamic code for last row */}
                                    <tr>
                                        {lastRow.map((text, index) => (
                                            <td key={index} className="px-3 py-3 whitespace-nowrap border">
                                                {text}
                                            </td>
                                        ))}
                                        <td className="px-3 py-3 whitespace-nowrap border text-right"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Bottom Items/Navbar Structure */}
                        <div className="flex justify-center mt-10 mb-2 md:mt-40">
                            <div className="bg-white rounded-lg shadow-md py-2 border-gray-300 border-2 px-1 flex flex-wrap items-center justify-between max-w-lg w-full md:max-w-sm">
                                <span className="text-gray-600 font-medium p-1 mr-1 cursor-pointer">
                                    <span className='bg-black text-white px-1.5 rounded-md mr-1'>{countSelectedItems()}</span>Selected
                                </span>
                                <span className="text-gray-600 font-medium border-2 rounded-lg flex justify-normal items-center p-0.5 px-1 mr-2 mb-2 md:mr-0 md:mb-0 cursor-pointer hover:bg-gray-100"><ArchiveRestore size={16} className='mr-1' />Archive</span>
                                <span className="font-medium border-2 text-red-500 rounded-lg flex justify-normal items-center p-0.5 px-1 mr-2 mb-2 md:mr-0 md:mb-0 cursor-pointer hover:bg-red-100 hover:border-red-100"><Trash size={16} color='red' className='mr-1' />Delete</span>
                                <span className="text-gray-600 font-medium border-2 rounded-lg flex justify-normal items-center p-0.5 px-1 mr-2 mb-2 md:mr-0 md:mb-0 cursor-pointer hover:bg-gray-100">
                                    More
                                    <ChevronDown size={16} className='ml-1' />
                                </span>
                                <span className="cursor-pointer">
                                    <X size={20} color='gray' className='' />
                                </span>
                            </div>
                        </div>

                    </div>
                </div >
            </div >

        </>
    );
}

export default ContentPage;
