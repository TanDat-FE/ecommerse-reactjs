import axiosClient from "./axiosClient";

const register = async (body) => {
  console.log(body);
  return await axiosClient.post("/register", body);
};

const signIn = async (user) => {
  return await axiosClient.post("/login", user);
};

const getUser = async () => {
  return await axiosClient.get(
    "/user/info/282477c3-3ef8-4051-9450-afa19751ac45"
  );
};

export { register, signIn, getUser };
