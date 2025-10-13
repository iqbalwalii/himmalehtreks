import ProductCategoryPage from "../../components/Productcategories";

const gearProducts = [
  { name: "Expedition Backpack", imgSrc: "/products/bagpack.jpg", price: "$149" },
  { name: "Climbing Helmet", imgSrc: "/products/helmet.jpeg", price: "$89" },
  { name: "Hiking Boots", imgSrc: "/products/booos.jpg", price: "$179" },
];

export default function GearPage() {
  return (
    <ProductCategoryPage
      title="Gear & Accessories"
      description="Essential gear for your mountain expeditions and outdoor adventures."
      products={gearProducts}
    />
  );
}
