import ProdcutList from "../components/products/ProductList";

const DUMMY_DATA = [
  {
    id: 2221,
    name: "Coco Oil",
    picture:
      "https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXR5JTIwcHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    category: "Beauty Product",
    price: 20,
    quantity: 500,
  },
  {
    id: 2222,
    name: "Jeans",
    picture:
      "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    category: "Vibe Product",
    price: 99,
    quantity: 0,
  },
  {
    id: 2223,
    name: "Headset",
    picture:
      "https://media.wired.com/photos/5daf96f208f85000087191f3/4:3/w_2400,h_1800,c_limit/Audio-Technica-ATH-M20x-SOURCE-Audio-Technica.jpg",
    category: "Vibe Product",
    price: 120,
    quantity: 8,
  },
  {
    id: 2224,
    name: "Glass",
    picture:
      "https://static.livebooks.com/abc61dbc6e9c403b917975eb48d2d97d/i/f2c81f819c994f5eb2312f9948520c2a/1/4SoifmQp7LJ6yDtMuFY2x/Swan-Optic-22089.jpg",
    category: "Glasses",
    price: 700,
    quantity: 20,
  },
  {
    id: 2225,
    name: "Treat",
    picture:
      "https://cdn3.vectorstock.com/i/1000x1000/27/87/black-cosmetic-product-background-luxury-beauty-vector-23732787.jpg",
    category: "Beauty Product",
    price: 15,
    quantity: 7,
  },
  {
    id: 2226,
    name: "Shoes",
    picture:
      "https://s23527.pcdn.co/wp-content/uploads/2020/09/puma-002-745x497.jpg.optimal.jpg",
    category: "Shoes",
    price: 35,
    quantity: 5,
  },
  {
    id: 2227,
    name: "Canin",
    picture: "https://pixc.com/wp-content/uploads/2017/08/PHOTOAPPS.png",
    category: "Vibe Product",
    price: 1200,
    quantity: 10,
  },
  {
    id: 2228,
    name: "Watch",
    picture:
      "https://format-com-cld-res.cloudinary.com/image/private/s--c-QrwYA---/c_limit,g_center,h_1200,w_65535/fl_keep_iptc.progressive,q_95/v1/e0e34130285f99bd48072cb10b221dc2/LIV-MAY-LIV-MAY-1408.jpg",
    category: "Watches",
    price: 599,
    quantity: 10,
  },
  {
    id: 2229,
    name: "Coloring",
    picture:
      "https://i.pinimg.com/originals/5e/d5/e9/5ed5e94e462b7bf46905e3e209e9e0ab.jpg",
    category: "Drawing",
    price: 10,
    quantity: 10,
  },
  {
    id: 2230,
    name: "Coco Oil",
    picture:
      "https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXR5JTIwcHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    category: "Beauty Product",
    price: 20,
    quantity: 500,
  },
  {
    id: 2231,
    name: "Jeans",
    picture:
      "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    category: "Vibe Product",
    price: 99,
    quantity: 0,
  },
  {
    id: 2232,
    name: "Headset",
    picture:
      "https://media.wired.com/photos/5daf96f208f85000087191f3/4:3/w_2400,h_1800,c_limit/Audio-Technica-ATH-M20x-SOURCE-Audio-Technica.jpg",
    category: "Vibe Product",
    price: 120,
    quantity: 8,
  },
  {
    id: 2233,
    name: "Glass",
    picture:
      "https://static.livebooks.com/abc61dbc6e9c403b917975eb48d2d97d/i/f2c81f819c994f5eb2312f9948520c2a/1/4SoifmQp7LJ6yDtMuFY2x/Swan-Optic-22089.jpg",
    category: "Glasses",
    price: 700,
    quantity: 20,
  },
  {
    id: 2234,
    name: "Treat",
    picture:
      "https://cdn3.vectorstock.com/i/1000x1000/27/87/black-cosmetic-product-background-luxury-beauty-vector-23732787.jpg",
    category: "Beauty Product",
    price: 15,
    quantity: 7,
  },
  {
    id: 2235,
    name: "Shoes",
    picture:
      "https://s23527.pcdn.co/wp-content/uploads/2020/09/puma-002-745x497.jpg.optimal.jpg",
    category: "Shoes",
    price: 35,
    quantity: 5,
  },
  {
    id: 2236,
    name: "Canin",
    picture: "https://pixc.com/wp-content/uploads/2017/08/PHOTOAPPS.png",
    category: "Vibe Product",
    price: 1200,
    quantity: 10,
  },
  {
    id: 2237,
    name: "Watch",
    picture:
      "https://format-com-cld-res.cloudinary.com/image/private/s--c-QrwYA---/c_limit,g_center,h_1200,w_65535/fl_keep_iptc.progressive,q_95/v1/e0e34130285f99bd48072cb10b221dc2/LIV-MAY-LIV-MAY-1408.jpg",
    category: "Watches",
    price: 599,
    quantity: 10,
  },
  {
    id: 2238,
    name: "Coloring",
    picture:
      "https://i.pinimg.com/originals/5e/d5/e9/5ed5e94e462b7bf46905e3e209e9e0ab.jpg",
    category: "Drawing",
    price: 10,
    quantity: 10,
  },
];

function HomePage(props) {
  return <ProdcutList data={props.data} />;
}

export async function getStaticProps() {
  //API request to fetch data
  return {
    props: {
      data: DUMMY_DATA,
    },
    revalidate: 3600,
  };
}

export default HomePage;
