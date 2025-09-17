import { create } from "zustand";

export const useProductStore = create((set, get) => ({
  allProducts: [],
  products: [],
  categoryProducts: [],
  categories: [],
  categoryImages: {},
  loading: false,
  selectedProduct: null,
  searchQuery: "",
  cart: [],

  setSearchQuery: (query) => set({ searchQuery: query }),

  fetchProducts: async () => {
    set({ loading: true });
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      set({ allProducts: data, products: data, loading: false });
    } catch (error) {
      console.error("Error fetching Products:", error);
      set({ loading: false });
    }
  },

  getTopSellingProducts: () => {
    const products = get().allProducts;
    return [...products].sort((a, b) => a.price - b.price).slice(0, 4);
  },

  // fetch categories
  fetchCategoriesWithImages: async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products/categories");
      const categories = await res.json();

      const categoryImages = {};
      for (const cat of categories) {
        const productRes = await fetch(
          `https://fakestoreapi.com/products/category/${encodeURIComponent(cat)}?limit=1`
        );
        const productData = await productRes.json();
        if (productData.length > 0) {
          categoryImages[cat] = productData[0].image;
        }
      }
      set({ categories, categoryImages });
    } catch (error) {
      console.error("Error fetching Categories:", error);
    }
  },

  // Fetch products by category
  fetchProductsByCategory: async (category) => {
    set({ loading: true });
    try {
      const res = await fetch(
        `https://fakestoreapi.com/products/category/${encodeURIComponent(category)}`
      );
      const data = await res.json();
      set({ categoryProducts: data, loading: false });
    } catch (error) {
      console.error("Failed to fetch category products:", error);
      set({ loading: false });
    }
  },

  fetchProductsById: async (id) => {
    set({ loading: true });
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();
      set({ selectedProduct: data, loading: false });
    } catch (error) {
      console.error("Error Fetching Products:", error);
      set({ loading: false });
    }
  },

  // CART FUNCTIONALITY ------------------------
  addToCart: async (productId, quantity = 1) => {
    const userId = 1;
    try {
      const res = await fetch("https://fakestoreapi.com/carts", {
        method: "POST",
        body: JSON.stringify({
          userId,
          products: [{ productId, quantity }],
        }),
        headers: {
          "content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log("Added to cart:", data);

      set((state) => {
        const existing = state.cart.find((item) => item.productId === productId);
        if (existing) {
          return {
            cart: state.cart.map((item) =>
              item.productId === productId
                ? { ...item, quantity: item.quantity + quantity }
                : item
            ),
          };
        }
        return {
          cart: [...state.cart, { productId, quantity }],
        };
      });
    } catch (error) {
      console.error("Failed to add to cart:", error);
    }
  },

  removeFromCart: (productId) => {
    set((state) => ({
      cart: state.cart.filter((item) => item.productId !== productId),
    }));
  },

  updateCartQuantity: (productId, quantity) => {
    if (quantity <= 0) {
      // auto-remove if 0
      set((state) => ({
        cart: state.cart.filter((item) => item.productId !== productId),
      }));
    } else {
      set((state) => ({
        cart: state.cart.map((item) =>
          item.productId === productId ? { ...item, quantity } : item
        ),
      }));
    }
  },

  clearCart: () => set({ cart: [] }),

  fetchCart: async (userId = 1) => {
    set({ loading: true });
    try {
      const res = await fetch(`https://fakestoreapi.com/carts/user/${userId}`);
      const data = await res.json();
      console.log("Fetched Cart:", data);
      set({ cart: data[0]?.products || [], loading: false });
    } catch (error) {
      console.error("Failed to fetch cart:", error);
      set({ loading: false });
    }
  },
}));
