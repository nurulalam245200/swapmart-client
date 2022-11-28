import { useQuery } from "@tanstack/react-query";

import ProductCategory from "./ProductCategory";

const ProductCategories = () => {
  //   const [categories, setCategories] = useState([]);

  //   useEffect(() => {
  //     fetch("https://swapmart-server.vercel.app/productsCategory")
  //       .then((res) => res.json())
  //       .then((data) => setCategories(data));
  //   }, []);

  const { data: categories = [] } = useQuery({
    queryKey: ["productsCategory"],
    queryFn: async () => {
      try {
        const res = await fetch(
          "https://swapmart-server.vercel.app/productsCategory",
          {}
        );
        const data = await res.json();

        return data;
      } catch (error) {}
    },
  });
  return (
    <div>
      <h1 className="text-4xl text-accent font-bold text-center mt-5 mb-5">
        Products Area
      </h1>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 mb-5 w-full mx-auto">
        {categories.map((category) => (
          <ProductCategory
            key={category._id}
            category={category}
          ></ProductCategory>
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;
