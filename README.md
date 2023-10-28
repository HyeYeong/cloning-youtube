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

### mongoDB

start -> mongosh<br/>
<br/>
brew services run mongodb-community<br/>
brew services list<br/>
<br/>
데이터베이스명~~started -> 켜진것임

### 패스워드 처리

- <strong>DB에 절대 패스워드를 저장하면 안됨!!! 보안이 매우 취약해짐.</strong>
  -> 회사의 데이터베이스가 해킹당히면 고객들의 모든 아이디와 패스워드가 털리기 때문에 매우 위험함.
- 비밀번호를 해시(hash)화 해 주기
- 해싱은 일방향 함수이며, 문자열이 필요하다.
- 출력값으로는 입력값을 알 수 없다.
- 입력값으로는 항상 같은 출력값이 나온다.

bcrypt는 rainbow table공격을 막아준다.
