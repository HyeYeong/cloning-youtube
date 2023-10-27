import User from "../models/User";
export const GetJoin = (req, res) => {
  return res.render("join", {
    pageTitle: "create account",
  });
};

export const PostJoin = async (req, res) => {
  console.log(req.body);
  const { name, email, password, username, location } = req.body;
  await User.create({
    name,
    email,
    password,
    username,
    location,
  });
  return res.redirect("/login");
};

export const Login = (req, res) => {
  return res.render("login", { pageTitle: "please, login" });
};

export const Logout = (req, res) => {
  return res.send("user logout!");
};

export const Edit = (req, res) => {
  return res.send("EidtUser");
};

export const Delete = (req, res) => {
  return res.send("delete user");
};

export const See = (req, res) => {
  return res.send("See user");
};
