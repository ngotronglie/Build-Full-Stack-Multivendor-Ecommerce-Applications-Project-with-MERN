import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const AddProduct = () => {
    const categorys = [
        {
            id: 1,
            name: 'sport',
        },
        {
            id: 2,
            name: 'mobile',
        },
        {
            id: 3,
            name: 'watch',
        },
        {
            id: 4,
            name: 'computer',
        },
        {
            id: 5,
            name: 'televition',
        }
    ]


    const [state, setState] = useState({
        name: '',
        description: '',
        price: '',
        brand: '',
        stock: '',

    })

    const [cateShow, setCateShow] = useState(false);
    const [category, setCategory] = useState('');
    const [allCategory, setAllCategory] = useState(categorys);
    const [searchValue, setSearchValue] = useState('');
    const categorySearch = (e) => {
        const value = e.target.value;
        setSearchValue(value);
        if (value) {
            let srcValue = allCategory.filter(c =>
                c.name.toLowerCase().indexOf(value.toLowerCase()) > -1
            );
            setAllCategory(srcValue);
        } else {
            setAllCategory(categorys);
        }

    }

    const inputHandle = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    }
    return (
        <div className="px-2 lg:px-7 pt-5">
            <div className="w-full p-4 bg-[#6a5fdf] rounded-md">
                <div className="flex justify-between items-center pb-4">
                    <h1 className="text-[#d0d2d6] text-xl font-semibold">
                        Add Product
                    </h1>
                    <Link
                        className="bg-blue-500 hover:shadow-blue-500/50 hover:shadow-lg text-white rounded-sm px-7 py-2 my-2"
                    >
                        All Product
                    </Link>
                </div>
                <div>
                    <form>
                        <div className="flex flex-col mb-3 md:flex-row gap-4 w-full text-[#d0d2d6]">
                            <div className="flex flex-col w-full gap-1">
                                <label htmlFor="name">Product Name</label>
                                <input
                                    name="name"
                                    onChange={inputHandle}
                                    value={state.name}
                                    type="text"
                                    id="name"
                                    className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]"
                                    placeholder="Product name"
                                />

                            </div>
                            <div className="flex flex-col w-full gap-1">
                                <label htmlFor="brand">Product brand</label>
                                <input
                                    name="brand"
                                    onChange={inputHandle}
                                    value={state.brand}
                                    type="text"
                                    id="brand"
                                    className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]"
                                    placeholder="Product brand"
                                />

                            </div>
                        </div>
                        <div className="flex flex-col mb-3 md:flex-row gap-4 w-full text-[#d0d2d6]">
                            <div className="flex flex-col w-full gap-1 relative">
                                <label htmlFor="category">category</label>
                                <input
                                    readOnly onClick={() => setCateShow(!cateShow)}
                                    name="category"
                                    onChange={inputHandle}
                                    type="text"
                                    id="category"
                                    className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]"
                                    placeholder="-- select category --"
                                    value={category}
                                />
                                <div className={`absolute top-[101%] bg-[#475569] w-full transition-all ${cateShow ? 'scale-100' : 'scale-0'}`}>
                                    <div className="w-full px-4 py-2 fixed">
                                        <input
                                            value={searchValue}
                                            onChange={categorySearch}
                                            className="px-3 w-full py-1 focus:border-indigo-500 outline-none bg-transparent border border-slate-700 rounded-md text-[#d0d2d6] overflow-hidden"
                                            type="text"
                                            placeholder="search"

                                        />
                                    </div>

                                    <div className="pt-14"></div>

                                    <div className="flex justify-start items-start flex-col h-[200px] overflow-x-scrool">
                                        {
                                            allCategory.map((c) => (
                                                <span key={c.id} className={`px-4 py-2 hover:bg-indigo-500 hover:text-white 
                                                                             hover:shadow-lg w-full cursor-pointer ${category === c.name ? 'bg-indigo-500' : ''}`}
                                                    onClick={() => {
                                                        setCateShow(false);
                                                        setCategory(c.name);
                                                        setSearchValue('');
                                                        setAllCategory(categorys);
                                                    }}
                                                >
                                                    {c.name}
                                                </span>
                                            ))

                                        }
                                    </div>
                                </div>


                            </div>
                            <div className="flex flex-col w-full gap-1">
                                <label htmlFor="stock">Product stock</label>
                                <input
                                    name="stock"
                                    onChange={inputHandle}
                                    value={state.stock}
                                    type="text"
                                    id="stock"
                                    className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]"
                                    placeholder="Product stock"
                                />

                            </div>
                        </div>
                        <div className="flex flex-col mb-3 md:flex-row gap-4 w-full text-[#d0d2d6]">
                            <div className="flex flex-col w-full gap-1">
                                <label htmlFor="price">Price</label>
                                <input
                                    name="price"
                                    onChange={inputHandle}
                                    value={state.price}
                                    type="number"
                                    id="price"
                                    className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]"
                                    placeholder="Price"
                                />

                            </div>
                            <div className="flex flex-col w-full gap-1">
                                <label htmlFor="discount">discount</label>
                                <input
                                    name="discount"
                                    onChange={inputHandle}
                                    value={state.discount}
                                    type="text"
                                    id="discount"
                                    className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]"
                                    placeholder="discount by%"
                                />

                            </div>
                        </div>
                        <div className="flex flex-col w-full gap-1 text-[#d0d2d6]">
                            <label htmlFor="description">description</label>
                            <textarea
                                name="description"
                                onChange={inputHandle}
                                value={state.description}
                                id="description"
                                className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]"
                                placeholder="description "
                                cols="10"
                                rows="4"
                            />
                        </div>
                    </form>

                </div>
            </div>
        </div>

    )
}


export default AddProduct;