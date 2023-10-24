const fakeUserObj = {
  username: "lee",
  loggedIn: false,
};

export const Trending = (req, res) => {
  const videos = [
    {
      title: "first videos",
      rating: 2,
      comments: 5,
      createdAt: "2 minutes ago",
      views: 59,
      id: 1,
    },
    {
      title: "second videos",
      rating: 5,
      comments: 2,
      createdAt: "10 minutes ago",
      views: 159,
      id: 2,
    },
    {
      title: "third videos",
      rating: 5,
      comments: 4,
      createdAt: "20 minutes ago",
      views: 509,
      id: 3,
    },
  ];
  return res.render("home", {
    pageTitle: "home",
    fakeUser: fakeUserObj,
    videos: videos,
  });
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
