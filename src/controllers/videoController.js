export const Trending = (req, res) => {
  return res.render("home");
};

export const Search = (req, res) => {
  return res.send("search videos");
};

export const See = (req, res) => {
  return res.render("watch");
};

export const Edit = (req, res) => {
  return res.render("edit");
};

export const Delete = (req, res) => {
  console.log(req.params);
  return res.send("deleted video");
};

export const Upload = (req, res) => {
  return res.send("Upload video");
};
