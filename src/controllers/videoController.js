import Video from "../models/Video";
const fakeUserObj = {
  username: "lee",
  loggedIn: false,
};

export const Home = async (req, res) => {
  // NOTE: promise에서는 에러의 표시를 위해서, try catch문을 사용한다.
  try {
    const videos = await Video.find({}).sort({ createdAt: "desc" });
    return res.render("home", {
      pageTitle: "home",
      fakeUser: fakeUserObj,
      videos,
    });
  } catch (error) {
    console.log(error);
  }
};

export const Search = async (req, res) => {
  const { keyword } = req.query;
  let videos = [];
  if (keyword) {
    videos = await Video.find({
      title: {
        $regex: new RegExp(keyword, "i"),
        // ^${keyword} -> 이렇게 쓰면 키워드로 시작하는 검색어를 찾음
        // ${keyword}$ -> 이렇게 쓰면 키워드로 끝나는 검색어를 찾음
      },
    });
  }
  return res.render("search", {
    pageTitle: "search videos",
    videos,
    keyword,
  });
};

export const Watch = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  if (!video) return res.render("404", { pageTitle: "Video not found" });
  return res.render("watch", {
    pageTitle: `watching ${video.title}`,
    video,
  });
};

export const GetEdit = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  if (!video) return res.render("404", { pageTitle: "Video not found" });
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
    hashtags: Video.formatHashTags(hashtags),
  });
  return res.redirect(`/videos/${id}`);
};

export const DeleteVideo = async (req, res) => {
  const { id } = req.params;
  await Video.findByIdAndDelete(id);
  return res.redirect("/");
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
      hashtags: Video.formatHashTags(hashtags),
    });
    return res.redirect(`/`);
  } catch (error) {
    return res.render("upload", {
      pageTitle: "upload video",
      errorMessage: error._message,
    });
  }
};
