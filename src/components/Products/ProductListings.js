// Assets
import bag from "../../assets/bag.jpg";
import driver from "../../assets/driver.jpg";
import irons from "../../assets/irons.jpg";
import golfballs from "../../assets/golfballs.jpg";
import glove from "../../assets/glove.png";
import putter from "../../assets/putter.jpg";
import rangefinder from "../../assets/rangefinder.jpg";
import shoes from "../../assets/shoes.jpg";
import sixtyDegree from "../../assets/60degree.jpg";
import threeHybrid from "../../assets/3hybrid.jpg";
import threeWood from "../../assets/3wood.jpg";
import watch from "../../assets/watch.jpg";

// Hooks
import useGetBTCPrice from "../../hooks/UseGetBTCPrice";

export default function ProductListings() {
  const { btcPrice, isLoading, isError } = useGetBTCPrice();

  if (isLoading || isError) return null;

  const getBTCPrice = (dollarPrice) => {
    return (dollarPrice / btcPrice.bpi.USD.rate_float).toFixed(10);
  };
  const products = [
    {
      id: 1,
      name: "Big Bertha B21 Driver",
      href: "https://www.golftown.com/en-CA/clubs-1/big-bertha-b21-driver-40117132.html?cgid=2-clubs",
      price: "$649.99",
      btcPrice: getBTCPrice(649.99),
      imageSrc: driver,
      imageAlt: "Hit bombs like Bryson.",
    },
    {
      id: 2,
      name: "Big Bertha 3 Wood",
      href: "https://www.golftown.com/en-CA/clubs/fairway-woods/big-bertha-b21-fairway-wood-40117135.html?cgid=5-fairway-woods",
      price: "$399.99",
      btcPrice: getBTCPrice(399.99),
      imageSrc: threeWood,
      imageAlt: "Swing it like a 6 iron",
    },
    {
      id: 3,
      name: "Apex Pro 21 Hybrid",
      href: "https://www.golftown.com/en-CA/clubs/hybrids/apex-pro-21-hybrid-40120543.html?cgid=6-hybrids",
      price: "$369.99",
      btcPrice: getBTCPrice(369.99),
      imageSrc: threeHybrid,
      imageAlt: "This is a cheat code",
    },
    {
      id: 4,
      name: "Apex 21 5-PW AW Iron Set",
      href: "https://www.golftown.com/en-CA/clubs-1/apex-21-5-pw-aw-iron-set-with-steel-shafts-40120544.html?cgid=2-clubs",
      price: "$1.749.99",
      btcPrice: getBTCPrice(1749.99),
      imageSrc: irons,
      imageAlt: "Don't forget about impact lag.",
    },
    {
      id: 5,
      name: "Jaws Full Toe Black Wedge",
      href: "https://www.golftown.com/en-CA/clubs/wedges/jaws-full-toe-black-wedge-with-steel-shaft-40124881.html?cgid=7-wedges",
      price: "$209.99",
      btcPrice: getBTCPrice(209.99),
      imageSrc: sixtyDegree,
      imageAlt: "Flop it like Phil",
    },
    {
      id: 6,
      name: "TP Patina Putter Collection - Ardmore 2",
      href: "https://www.golftown.com/en-CA/clubs/putters/tp-patina-putter-collection---ardmore-2-40111505.html?cgid=8-putters",
      price: "$229.87",
      btcPrice: getBTCPrice(229.87),
      imageSrc: putter,
      imageAlt: "Sink 40 footers",
    },
    {
      id: 7,
      name: "Titleist Pro V1",
      href: "https://www.golftown.com/en-CA/balls/golf-balls/pro-v1-golf-balls---high-numbered-40121038.html?dwvar_40121038_color=WHITE&cgid=18-golf-balls",
      price: "$64.99",
      btcPrice: getBTCPrice(64.99),
      imageSrc: golfballs,
      imageAlt: "Good balls",
    },
    {
      id: 8,
      name: "Nike Air Zoom Spiked Golf Shoe",
      href: "https://www.golftown.com/en-CA/shoes/mens-air-zoom-victory-tour-2-spiked-golf-shoe---black-40118301.html?cgid=54-shoes",
      price: "$234.99",
      btcPrice: getBTCPrice(234.99),
      imageSrc: shoes,
      imageAlt: "Spikes are the way to go",
    },
    {
      id: 9,
      name: "350TL Callaway Rangefinder",
      href: "https://www.golftown.com/en-CA/golf-tech/rangefinders/350tl-rangefinder-with-slope-40122224.html?cgid=83-rangefinders",
      price: "$389.99",
      btcPrice: getBTCPrice(389.99),
      imageSrc: rangefinder,
      imageAlt:
        "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    },
    {
      id: 10,
      name: "Garmin Approach S62 GPS Watch",
      href: "https://www.golftown.com/en-CA/golf-tech/gps-watches/approach-s62-gps-watch-40114890.html?dwvar_40114890_color=BLACK&cgid=82-gps-watches",
      price: "$679.99",
      btcPrice: getBTCPrice(679.99),
      imageSrc: watch,
      imageAlt:
        "Olive drab green insulated bottle with flared screw lid and flat top.",
    },
    {
      id: 11,
      name: "Nike Air Hybrid Stand Bag",
      href: "https://www.golftown.com/en-CA/bags-carts/golf-bags/nike-air-hybrid-stand-bag-40116287.html?dwvar_40116287_color=WHITE%2FBLACK&cgid=63-golf-bags",
      price: "$279.99",
      btcPrice: getBTCPrice(279.99),
      imageSrc: bag,
      imageAlt:
        "Person using a pen to cross a task off a productivity paper card.",
    },
    {
      id: 12,
      name: "Wilson Grip Soft Glove",
      href: "https://www.golftown.com/en-CA/accessories/on-course/golf-gloves/grip-soft-glove-30172127.html?dwvar_30172127_color=WHITE&cgid=91-golf-gloves",
      price: "$14.99",
      btcPrice: getBTCPrice(14.99),
      imageSrc: glove,
      imageAlt:
        "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },
  ];

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
                  BTC: {product.btcPrice}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
