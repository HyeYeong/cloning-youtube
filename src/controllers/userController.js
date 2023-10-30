import User from "../models/User";
export const GetJoin = (req, res) => {
  return res.render("join", {
    pageTitle: "create account",
  });
};

export const PostJoin = async (req, res) => {
  const { name, email, password, password2, username, location } = req.body;
  const orExists = await User.exists({ $or: [{ username }, { email }] });
  if (password !== password2) {
    return res.status(400).render("join", {
      pageTitle: "join",
      errorMsg: "패스워드가 서로 일치하지 않습니다.",
    });
  }

  if (orExists) {
    return res.status(400).render("join", {
      pageTitle: "join",
      errorMsg: "이미 사용중인 이름 혹은 이메일입니다.",
    });
  }

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
