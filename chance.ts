import Chance from 'chance'
const chance = new Chance()

export const randomUUID = () => chance.guid()

/*export default function App() {
  return <div>{chance.name()}</div>;
}*/

export default function App() {
    return <div>{chance.name()}</div>
}


/*
npm install chance로 미리 터미널으로 설치해놓고 import 하기

Chance 설치

터미널에서:

npm install chance

Step 2: 타입 정의 설치

TypeScript에서 사용할 수 있도록 @types/chance 설치:

npm install --save-dev @types/chance

일반적으로 React 프로젝트 안에서는 직접 ts 파일을 터미널에서 실행하지 않습니다.

React 프로젝트에서 TypeScript 코드는 Vite/React 앱 안에서 import해서 브라우저에서 실행합니다.

tsconfig.json JSX 설정 확인:

{
  "compilerOptions": {
    "jsx": "react-jsx"
  }
}

*/
