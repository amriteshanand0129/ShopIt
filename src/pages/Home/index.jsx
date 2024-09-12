import { Navbar } from "../../components/Navbar";
import { ProductCard } from "../../components/ProductCard";
import { useEffect, useState } from "react";
import { getAllProducts } from "../../api/getAllProducts";
import { getAllCategories } from "../../api/getAllCategories";

export const Home = () => {

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [filteredProducts, setfilteredProducts] = useState([]);

    useEffect(() => {
        (async () => {
            const products = await getAllProducts();
            const categories= await getAllCategories();
            setProducts(products);
            setfilteredProducts(products);
            setCategories(categories);
        })()
    }, [])

    const onCategoryClick = (category) => {
        if(category.id === 0) {
            setfilteredProducts(products);
            return;
        }
        const filterByCategories = products?.length > 0 && products.filter(product => product.category.id === category.id);
        setfilteredProducts(filterByCategories);
    }

    return (
        <>
            <Navbar/>
            <main className="pt-8 mt-20">
                <div className="flex gap-4 justify-center m-auto mb-5 py-3 border-2 rounded-lg w-3/4 align-middle ">
                    <h2 className="text-3xl">Search by Categories: </h2>
                    {
                        categories?.length > 0 && categories.map(category => <div key={category.id} onClick={() => onCategoryClick(category)} className="border-2 font-semibold rounded-full py-2 px-3 hover:cursor-pointer hover:text-white hover:bg-black">{category.name}</div>)
                    }
                </div>
                <div className="flex flex-wrap gap-8 justify-center">{
                    filteredProducts?.length > 0 ? filteredProducts.map(product => <ProductCard key={product.id} product={product}/>) : <h2 className="text-2xl">No Products found! Please try with another category</h2>
                }
                </div>
            </main>
        </>
    )
}