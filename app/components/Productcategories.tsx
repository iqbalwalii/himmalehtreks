import Image from "next/image";

interface Product {
  name: string;
  imgSrc: string;
  price?: string; // optional
}

interface ProductCategoryPageProps {
  title: string;
  description?: string;
  products: Product[];
}

export default function ProductCategoryPage({
  title,
  description,
  products,
}: ProductCategoryPageProps) {
  return (
    <section className="py-24 bg-[#0B1E33] text-white px-6 md:px-12">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#00D4FF]">
            {title}
          </h1>
          {description && (
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              {description}
            </p>
          )}
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <div
              key={i}
              className="bg-[#10283F] rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform border border-[#1E3A55]"
            >
              <div className="relative w-full h-100">
                <Image
                  src={product.imgSrc}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-center space-y-2">
                <h3 className="font-semibold text-lg text-[#00D4FF]">
                  {product.name}
                </h3>
                {product.price && (
                  <p className="text-gray-300">{product.price}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
