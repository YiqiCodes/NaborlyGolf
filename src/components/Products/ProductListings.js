// Hooks
import useGetBTCPrice from "../../hooks/GetWithSWR/UseGetBTCPrice";

// Vars
import { products } from "../../vars/GolfProducts";

export default function ProductListings() {
  const { btcPrice, isLoading, isError } = useGetBTCPrice();

  if (isLoading || isError) return null;

  const getBTCPrice = (dollarPrice) => {
    return (dollarPrice / btcPrice.bpi.USD.rate_float).toFixed(10);
  };

  return (
    <>
      <div className="w-full -right-3.5 relative overflow-y-scroll bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a
                key={product.id}
                href={product.href}
                className="group"
                target="_blank"
                rel="noreferrer"
              >
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  USD: {product.price}
                </p>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  BTC: {getBTCPrice(product.btcPrice)}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
