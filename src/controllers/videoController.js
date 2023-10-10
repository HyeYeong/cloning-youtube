export const Trending = (req, res) => {
  return res.send("home page video");
};

export const Search = (req, res) => {
  return res.send("search videos");
};

export const See = (req, res) => {
  console.log(req.params);
  return res.send("watch video");
};

export const Edit = (req, res) => {
  console.log(req.params);
  return res.send("edit video");
};

export const Delete = (req, res) => {
  console.log(req.params);
  return res.send("deleted video");
};

export const Upload = (req, res) => {
  return res.send("Upload video");
};
