import express from "express";
import { PATH } from "../constants/global";
import {
  Watch,
  GetEdit,
  PostEdit,
  Delete,
  GetUpload,
  PostUpload,
} from "../controllers/videoController";

const videoRouter = express.Router();
const reg = "[0-9a-f]{24}";
videoRouter.route("/upload").get(GetUpload).post(PostUpload);
// :(콜론)의 뒤에 있는건 파라미터라고 불린다. url에 변수를 포함시킨다.
// express 는 id가 변수가 되된다는 것을, 파라미터가 있다는 것을 이해함다.
// 이 때, 콜론이 들어간 변수는 맨 밑에 와야 한다. 일반적인 패턴의 url이 콜론 변수 사이에 오게 되면 그 일반적인 url도 변수로 인식하게 되어버린다.
// express는 위에서 아래로 읽기 때문에 일어나는 현상이다.
// id 라는 글자는 없어도 되지만, 파라미터로 이용하기 위해서 그냥 남겨둠
videoRouter.get(`/:id(${reg})`, Watch);
videoRouter.route(`/:id(${reg})${PATH.EDIT}`).get(GetEdit).post(PostEdit);
// get, post는 같은 url를 사용하기 때문에 줄여서 사용할 수 있다
videoRouter.get(`/:id(${reg})${PATH.DELETE}`, Delete);

export default videoRouter;
