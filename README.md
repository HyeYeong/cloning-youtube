# cloning-youtube

### setup

node, express, views - pug, babel, mvp css

### url list

/ -> home <br/>
/join -> Join <br/>
/login -> login<br/>
/search -> search<br/>

/users/:id -> see user's profile <br/>
/users/logout -> log out<br/>
/users/edit -> edit my profile <br/>
/users/delete -> delete mu ptofile<br/>

/videos/:id -> see video<br/>
/video/:id/edit -> edit video(only writer)<br/>
/video/:id/delete -> delete video(only writer)<br/>
/videos/upload -> upload video<br/>

기본적으로 method는 GET임
GET과 함께
action="{URL}"을 하면 그 경로로 이동하면서 form속의 값을 파라미터를 통해 전달함.
예시로는, 검색창에 어떤 값을 넣고 검색하여 이동하는것이 있음
url의 파라미터로 이 값이 함께 나오게 됨. /example?title=first+movies 처럼

POST
는 url상의 파라미터는 보이지 않게 된다.
프론트 쪽에서 method="post"를 해준다고 끝이 아니고, 서버쪽에서 똑같이 POST로 받는 방법을 작성해줘야 한다.

mongoDB
mongoose를 통해서, 자바스크립트에서 mongoDB와 상호작용 할 수 있다.
