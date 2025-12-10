# react_sample
react 연습 샘플입니다.

https://ko.javascript.info/import-export
자바스크립트 인포

export default 키워드: #####

function MyButton(){
return(
<button>구름이</button>
)
}
/*
React 컴포넌트는 마크업을 반환하는 자바스크립트 함수입니다.
마크업(Markup)은 문서의 구조나 서식을 지정하기 위해 태그를 삽입하는 행위(마크업 언어)이다.
*/

function MyButton() {
  return (
    <button>
     구름구름
    </button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>구름이는 멍멍이</h1>
      <MyButton />
    </div>
  );
}
/*위와 같이 다른 컴포넌트에 중첩 가능함.*/

스타일 추가하기ㅡㅡㅡㅡㅡㅡㅡㅡ

<img className="avatar" />

그 다음 별도의 CSS 파일에 해당 CSS 규칙을 작성합니다.

/* In your CSS */
.avatar {
  border-radius: 50%;
}

데이터 표시하기 ㅡㅡㅡㅡㅡㅡㅡ

return (
  <h1>
    {user.name}
  </h1>
);

ㅡㅡㅡㅡㅡ

return (
  <img
    className="avatar"
    src={user.imageUrl}
  />
);

ㅡㅡㅡㅡㅡㅡㅡㅡㅡ

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 120,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}


조건부 렌더링ㅡㅡㅡㅡㅡㅡㅡㅡㅡ

let content;
if (isLoggedIn) {
  content = <AdminPanel />;
} else {
  content = <LoginForm />;
}
return (
  <div>
    {content}
  </div>
);

ㅡㅡㅡㅡㅡㅡㅡㅡㅡ

<div>
  {isLoggedIn ? (
    <AdminPanel />
  ) : (
    <LoginForm />
  )}
</div>


ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
<div>
  {isLoggedIn && <AdminPanel />}
</div>


ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
리스트 렌더링하기
const puppys = [
{title: 'groom', id: 1},
{title: 'groomee', id: 2},
{title: 'groomeeh', id: 3},
];

const listItems = products.map(puppy =>
<li key={puppy.id}>
{product.title}
</li>
);

return(
<ul>{listItems}</ul>
);


ㅡㅡㅡㅡㅡㅡㅡ

const puppys = [
  { title: 'groom', isBingu: true, id: 1 },
  { title: '김구름이', isBingu: false, id: 2 },
  { title: '구름구름이', isBingu: true, id: 3 },
];

export default function ShoppingList() {
  const listItems = puppys.map(puppy =>
    <li
      key={puppy.id}
      style={{
        color: puppy.isBingu ? 'magenta' : 'darkgreen'
      }}
    >
      {puppy.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}


ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

