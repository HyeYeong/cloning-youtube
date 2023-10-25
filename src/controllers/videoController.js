import Video from "../models/Video";
const fakeUserObj = {
  username: "lee",
  loggedIn: false,
};

export const Home = async (req, res) => {
  // NOTE: promise에서는 에러의 표시를 위해서, try catch문을 사용한다.
  try {
    const videos = await Video.find({});
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

export const Watch = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  if (!video) res.render("404", { pageTitle: "Video not found" });
  return res.render("watch", {
    pageTitle: `watching ${video.title}`,
    video,
  });
};

export const GetEdit = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  if (!video) res.render("404", { pageTitle: "Video not found" });
  return res.render("edit", {
    pageTitle: `Editing: ${video.title}`,
    video,
  });
};

// NOTE: 변경사항을 저장해주는 녀석
export const PostEdit = async (req, res) => {
  const { id } = req.params;
  const video = await Video.exists({ _id: id });
  // NOTE: mongoDb에서 리턴해주는 _id 의 속성과, req.params 안에 있는 id가 같은 지 체크해줌. exists는 필터 함수를 사용해서 true or false를 반환해줌
  const { title, description, hashtags } = req.body;
  if (!video) res.render("404", { pageTitle: "Video not found" });
  await Video.findByIdAndUpdate(id, {
    title,
    description,
    hashtags,
  });
  // await video.save();
  return res.redirect(`/videos/${id}`);
};

export const Delete = (req, res) => {
  return res.send("deleted video");
};

export const GetUpload = (req, res) => {
  return res.render("upload", { pageTitle: "upload video" });
};

export const PostUpload = async (req, res) => {
  const { title, description, hashtags } = req.body;
  try {
    await Video.create({
      title,
      description,
      hashtags,
    });
    return res.redirect(`/`);
  } catch (error) {
    return res.render("upload", {
      pageTitle: "upload video",
      errorMessage: error._message,
    });
  }
};
