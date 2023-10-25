import Video from "../models/Video";
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

export const Home = (req, res) => {
  // NOTE: 데이터가 전송되는 것을 기다려야 함. 데이터가 완전히 전송될 때까지 꼭 기다려야함. 그 데이터가 javascript 파일 속에 없기 때문에
  Video.find({}, (error, videos) => {
    console.log("error: ", error);
    console.log("video: ", videos);
    // NOTE: callback을 사용하면 아무것도 리턴되지 않아야 함. 그래서 콜백 함수 안에 렌더를 넣어주면, 브라우저는 렌더링을 기다려준다.
    return res.render("home", {
      pageTitle: "home",
      fakeUser: fakeUserObj,
      videos: [],
    });
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
  const { id } = req.params;
  const { title } = req.body;
  videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`);
};

export const Delete = (req, res) => {
  return res.send("deleted video");
};

export const GetUpload = (req, res) => {
  return res.render("upload", { pageTitle: "upload video" });
};

export const PostUpload = (req, res) => {
  // TODO: 이 곳에서 Videos array를 추가할 예정
  const newId = videos.length + 1;
  const { title } = req.body;
  const newVideoObj = {
    title,
    rating: 0,
    comments: 0,
    createdAt: "just now",
    views: 0,
    id: newId,
  };
  videos.push(newVideoObj);
  return res.redirect(`/`);
};
