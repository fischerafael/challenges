import React, { useState } from "react";

interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
}

interface ICart {
  products: number[];
}

const INITIAL_CART: ICart = {
  products: [],
};

const removeDuplicatedItems = (numbers: number[]): number[] => {
  return Array.from(new Set(numbers));
};

const findProductById = (prodId: number, products: IProduct[]) => {
  return products.find((pr) => pr.id === prodId);
};

const calculateTotal = (
  productsQuantity: number,
  productPrice: number
): number => {
  return productsQuantity * productPrice;
};

const calculateFinalTotal = (allProducts: IProduct[]) => {
  return allProducts.reduce((total, current) => {
    return current.price + total;
  }, 0);
};

const findAllProductsById = (prodId: number, products: number[]): number[] => {
  return products.filter((prod) => prod === prodId);
};

const QuickCart = () => {
  const { products } = useGetProducts();

  const [state, setState] = useState<ICart>(INITIAL_CART);

  const addProduct = (productId: number) => {
    setState((prev) => ({ ...prev, products: [...prev.products, productId] }));
  };

  const removeProduct = (productId: number) => {
    const indexToRemove = state.products.indexOf(productId);
    if (indexToRemove !== -1) {
      state.products.splice(indexToRemove, 1);
    }
    setState({
      ...state,
      products: state.products,
    });
  };

  const myShoppingCart = removeDuplicatedItems(state.products);

  return (
    <div>
      <h1>Products Available</h1>
      <ul>
        {products.map((prod) => (
          <li key={prod.id}>
            <p>{prod.title}</p>
            <p>{prod.description}</p>
            <p>{prod.price}</p>
            <button onClick={() => addProduct(prod.id)}>Add To Cart</button>
          </li>
        ))}
      </ul>

      <h1>
        My Cart (
        {calculateFinalTotal(
          state.products.map((prod) => findProductById(prod, products)!)
        )}
        )
      </h1>
      <ul>
        {myShoppingCart.map((prodId) => {
          const product = findProductById(prodId, products);
          const quantity = findAllProductsById(
            product?.id!,
            state.products
          ).length;
          const total = calculateTotal(quantity, product?.price!);

          return (
            <ul key={product?.id}>
              <p>Product Name: {product?.title}</p>
              <p>Product Description: {product?.description}</p>
              <p>Price per Unit: {product?.price}</p>
              <p>Quantity: {quantity}</p>
              <p>Total Price: {total}</p>
              <button onClick={() => removeProduct(product?.id!)}>
                Remove From Cart
              </button>
            </ul>
          );
        })}
      </ul>
    </div>
  );
};

export default QuickCart;

const useGetProducts = () => {
  const sampleProducts: IProduct[] = [
    {
      id: 1,
      title: "Smartphone XYZ",
      description:
        "Um smartphone avançado com câmera de alta resolução e desempenho rápido.",
      price: 799.99,
    },
    {
      id: 2,
      title: "Notebook SuperSlim",
      description:
        "Um notebook leve e poderoso, perfeito para trabalho e entretenimento.",
      price: 1299.99,
    },
    {
      id: 3,
      title: "Fones de Ouvido NoiseCanceller",
      description:
        "Fones de ouvido sem fio com cancelamento de ruído para uma experiência sonora imersiva.",
      price: 149.99,
    },
    {
      id: 4,
      title: "Câmera DSLR ProShot",
      description:
        "Câmera profissional com diversas opções de lentes para fotografia de alta qualidade.",
      price: 1599.99,
    },
    {
      id: 5,
      title: "Console de Videogame NextGen",
      description:
        "O console mais recente com gráficos incríveis e uma ampla variedade de jogos.",
      price: 499.99,
    },
    {
      id: 6,
      title: "Monitor Curvo 4K",
      description:
        "Monitor de alta resolução com tela curva para uma experiência visual envolvente.",
      price: 699.99,
    },
    {
      id: 7,
      title: "Impressora Multifuncional Wireless",
      description:
        "Impressora eficiente que imprime, digitaliza e copia, tudo sem fio.",
      price: 249.99,
    },
    {
      id: 8,
      title: "Mochila Tech Explorer",
      description:
        "Mochila resistente com compartimentos acolchoados para transportar seus dispositivos com segurança.",
      price: 79.99,
    },
    {
      id: 9,
      title: "Teclado Mecânico Gamer",
      description:
        "Teclado mecânico com retroiluminação RGB e teclas programáveis para gamers exigentes.",
      price: 129.99,
    },
    {
      id: 10,
      title: "Cadeira Ergonômica Executive",
      description:
        "Cadeira de escritório ergonômica com ajustes personalizados para conforto durante longas horas de trabalho.",
      price: 299.99,
    },
  ];
  return { products: sampleProducts };
};
