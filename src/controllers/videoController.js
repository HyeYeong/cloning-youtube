import Video from "../models/Video";
const fakeUserObj = {
  username: "lee",
  loggedIn: false,
};

export const Home = async (req, res) => {
  // NOTE: promise에서는 에러의 표시를 위해서, try catch문을 사용한다.
  try {
    const videos = await Video.find({});
    console.log(videos);

    return res.render("home", {
      pageTitle: "home",
      fakeUser: fakeUserObj,
      videos,
    });
  } catch (error) {
    console.log(error);
  }
};

export const Search = (req, res) => {
  return res.send("search videos");
};

export const Watch = (req, res) => {
  const { id } = req.params;
  return res.render("watch", {
    // pageTitle: `watching ${video.title}`,
    video,
  });
};

export const GetEdit = (req, res) => {
  const { id } = req.params;
  return res.render("edit", {
    // pageTitle: `Editing: ${video.title}`,
    video,
  });
};

// 변경사항을 저장해주는 녀석
export const PostEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  // videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`);
};

export const Delete = (req, res) => {
  return res.send("deleted video");
};

export const GetUpload = (req, res) => {
  return res.render("upload", { pageTitle: "upload video" });
};

export const PostUpload = async (req, res) => {
  // TODO: 이 곳에서 Videos array를 추가할 예정
  // const newId = videos.length + 1;
  const { title, description, hashtags } = req.body;
  try {
    await Video.create({
      title,
      description,
      hashtags: hashtags.split(",").map((word) => `#${word}`),
    });
    return res.redirect(`/`);
  } catch (error) {
    return res.render("upload", {
      pageTitle: "upload video",
      errorMessage: error._message,
    });
  }
};
