import User from "../models/User";
import bcrypt from "bcrypt";

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

  try {
    await User.create({
      name,
      email,
      password,
      username,
      location,
    });
    return res.redirect("/login");
  } catch (error) {
    return res.statue(400).render("join", {
      pageTitle: "join",
      errorMessage: error._message,
    });
  }
};

export const GetLogin = (req, res) => {
  return res.render("login", { pageTitle: "please, login" });
};

export const PostLogin = async (req, res) => {
  const PAGE_TITLE = "login";
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (!user) {
    return res.status(400).render("login", {
      pageTitle: PAGE_TITLE,
      errorMsg: "아이디가 존재하지 않습니다.",
    });
  } else {
    const userPassword = user.password;
    const isCheckedPassword = await bcrypt.compare(password, userPassword);

    if (!isCheckedPassword) {
      return res.status(400).render("login", {
        pageTitle: PAGE_TITLE,
        errorMsg: "패스워드가 일치하지 않습니다.",
      });
    }

    console.log(`hello, ${username}`);
    return res.redirect("/");
  }
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
