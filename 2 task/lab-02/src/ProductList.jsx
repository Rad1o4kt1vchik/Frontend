import Card from './Card';

function ProductList() {
  const products = [
    { id: 1, name: "Widget", price: 9.99 },
    { id: 2, name: "Gadget", price: 19.99 },
    { id: 3, name: "Doohickey", price: 14.50 },
    { id: 4, name: "Thingamajig", price: 24.99 }
  ];

  return (
    <div className="product-list">
      {products.map((product) => (
        <Card 
          key={product.id} 
          title={product.name}
          className="product-card"
        >
          <p>Price: ${product.price}</p>
          <p>Product ID: {product.id}</p>
        </Card>
      ))}
    </div>
  );
}

export default ProductList;
