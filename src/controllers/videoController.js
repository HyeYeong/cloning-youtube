const fakeUserObj = {
  username: "lee",
  loggedIn: false,
};

let videos = [
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

export const Trending = (req, res) => {
  return res.render("home", {
    pageTitle: "home",
    fakeUser: fakeUserObj,
    videos,
  });
};

export const Search = (req, res) => {
  return res.send("search videos");
};

export const Watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("watch", {
    pageTitle: `watching ${video.title}`,
    video,
  });
};

export const GetEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("edit", {
    pageTitle: `Editing: ${video.title}`,
    video,
  });
};

// 변경사항을 저장해주는 녀석
export const PostEdit = (req, res) => {
  return res.end();
};

export const Delete = (req, res) => {
  console.log(req.params);
  return res.send("deleted video");
};

export const Upload = (req, res) => {
  return res.send("Upload video");
};
