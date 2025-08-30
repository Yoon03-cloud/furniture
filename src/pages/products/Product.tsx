import { products, filterList } from "../../data/product";
import ProductCard from "../../components/products/ProductCard";
import ProductFilter from "../../components/products/ProductFilter";
import Pagination from "../../components/products/Pagination";
function Product() {
  return (
    <div className="container mx-auto ">
      <section className="flex flex-col lg:flex-row">
        <section className="my-8 ml-4 w-full lg:w-1/5 md:ml-0">
          <ProductFilter filterList={filterList} />
        </section>
        <section className="w-full lg:w-4/5  md:ml-0">
          <h1 className="font-bold text-2xl my-8 ml-4 ">All Products</h1>
          <div className="mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1.5 px-4 md:px-0">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <Pagination />
        </section>
      </section>
    </div>
  );
}

export default Product;
