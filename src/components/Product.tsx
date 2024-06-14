const Product = () => {
  return (
    <section className="bg-gray-100 py-12 fixed top-14 z-50 w-full">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Products</h2>
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md ">
          <h3 className="text-xl font-semibold mb-4">Product 1</h3>
          <p className="text-gray-700">Description of Product 1</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md ">
          <h3 className="text-xl font-semibold mb-4">Product 2 </h3>
          <p className="text-gray-700">Description of Product 2</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md ">
        <h3 className="text-xl font-semibold mb-4">Product 3</h3>
          <p className="text-gray-700">Description of Product 3</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md ">
        <h3 className="text-xl font-semibold mb-4">Product 4</h3>
          <p className="text-gray-700">Description of Product 4</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md ">
        <h3 className="text-xl font-semibold mb-4">Product 5</h3>
          <p className="text-gray-700">Description of Product 5</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md ">
        <h3 className="text-xl font-semibold mb-4">Product 6</h3>
          <p className="text-gray-700">Description of Product 6</p>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Product;
