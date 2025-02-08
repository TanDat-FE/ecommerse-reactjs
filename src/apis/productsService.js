import axiosClient from "./axiosClient";

const getProducts = async () => {
  try {
    const res = await axiosClient.get("/product");
    return res.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error; // Để hàm này vẫn thông báo lỗi nếu cần
  }
};

export { getProducts };
