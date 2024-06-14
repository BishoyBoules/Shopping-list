const url = "https://fakestoreapi.com/products"

export const fetchProducts = async () => {
    const response = await fetch(url);
    return response.json();
  };
  
  export const fetchProductById = async (id) => {
    const response = await fetch(`${url}/${id}`);
    return response.json();
  };
  