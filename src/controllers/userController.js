export const GetJoin = (req, res) => {
  return res.render("join", {
    pageTitle: "create account",
  });
};

export const PostJoin = (req, res) => {
  console.log(req.body);
  return res.end();
};

export const Login = (req, res) => {};

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
