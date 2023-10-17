const fakeUserObj = {
  username: "lee",
  loggedIn: false,
};

export const Trending = (req, res) => {
  return res.render("home", { pageTitle: "home", fakeUser: fakeUserObj });
};

export const Search = (req, res) => {
  return res.send("search videos");
};

export const See = (req, res) => {
  return res.render("watch", { pageTitle: "watch video" });
};

export const Edit = (req, res) => {
  return res.render("edit", { pageTitle: "edit video" });
};

export const Delete = (req, res) => {
  console.log(req.params);
  return res.send("deleted video");
};

export const Upload = (req, res) => {
  return res.send("Upload video");
};
