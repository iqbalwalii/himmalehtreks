import ProductCategoryPage from "../../components/Productcategories";

const womensProducts = [
  { name: "Glacier Jacket", imgSrc: "/products/glacierajcket.jpeg", price: "$199" },
  { name: "Summit Leggings", imgSrc: "/products/summitleggings.jpeg", price: "$119" },
  { name: "Trail Pullover", imgSrc: "/products/trailpullover.jpeg", price: "$99" },
];

export default function WomensPage() {
  return (
    <ProductCategoryPage
      title="Women's Collection"
      description="Adventure-ready gear built for comfort, performance, and style."
      products={womensProducts}
    />
  );
}
