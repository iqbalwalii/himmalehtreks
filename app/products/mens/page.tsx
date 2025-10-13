import ProductCategoryPage from "../../components/Productcategories";

const mensProducts = [
  { name: "Alpine Jacket", imgSrc: "/products/alpinejacket.jpeg", price: "$199" },
  { name: "Summit Pants", imgSrc: "/products/summitpants.jpg", price: "$129" },
  { name: "Trail Hoodie", imgSrc: "/products/hoodie.jpg", price: "$99" },
];

export default function MensPage() {
  return (
    <ProductCategoryPage
      title="Men's Collection"
      description="Rugged outdoor apparel designed for explorers and adventurers."
      products={mensProducts}
    />
  );
}
