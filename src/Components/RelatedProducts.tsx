import { Link } from "react-router-dom";
import { useGetRelatedProductsBySlugQuery } from "../Redux/products/productsApi";
import Container from "./Container";

interface RelatedProductsProps {
  slug: string;
}

const RelatedProducts = ({ slug }: RelatedProductsProps) => {
  const { data: products, isLoading, isError } = useGetRelatedProductsBySlugQuery(slug);

  if (isLoading) {
    return (
      <Container>
        <p className="mt-20 text-center">Loading related products...</p>
      </Container>
    );
  }

  if (isError || !products?.length) return null;

  return (
    <section className="relative w-full bg-gray-900 rounded-3xl my-20 px-4 sm:px-8 py-12">
      <div className="max-w-[1320px] mx-auto mb-12">
        <h2 className="text-3xl font-bold text-white">You may also like</h2>
      </div>

      <div className="max-w-[1320px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.slice(0, 4).map((item) => (
          <div key={item.id} className="bg-white rounded-3xl p-3 shadow-xl flex flex-col">
            <div className="h-[220px] rounded-2xl bg-gray-100 overflow-hidden">
              <img
                src={item?.images?.[0]}
                alt={item?.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/640x480';
                }}
              />
            </div>

            <div className="flex flex-col flex-1 pt-4">
              <h3 className="font-bold mb-2">{item.title}</h3>

              <p className="text-sm text-gray-600 line-clamp-2 mb-4">{item.description}</p>

              <Link to={`/details/${item.id}`} className="mt-auto">
                <button className="w-full h-[44px] bg-black text-white rounded-xl">
                  View Product
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;