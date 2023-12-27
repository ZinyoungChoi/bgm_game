import logo from "./logo.svg";
import Cards from "./component/Cards";
import "./App.css";
import Counting from "./component/Counting";
import { useState } from "react";

function App() {
  const data1 = [
    { id: 0, title: "메가히트", mp3: "/assets/music1.mp3", point : 10 },
    { id: 1, title: "채소", mp3: "/assets/music2.mp3", point : 20 },
    { id: 2, title: "남극", mp3: "/assets/music3.mp3", point : 30 },
    { id: 3, title: "삐뽀삐뽀", mp3: "/assets/music4.mp3", point : 40 },
    { id: 4, title: "4글자", mp3: "/assets/music5.mp3", point : 50 },
  ];
  const data2 = [
    { id: 5, title: "행복하세요", mp3: "/assets/music6.mp3", point : 10 },
    { id: 6, title: "함수", mp3: "/assets/music7.mp3", point : 20 },
    { id: 7, title: "2001년 발매", mp3: "/assets/music8.mp3", point : 30 },
    { id: 8, title: "△", mp3: "/assets/music9.mp3", point : 40 },
    { id: 9, title: "TO", mp3: "/assets/music10.mp3", point : 50 },
  ];
  const data3 = [
    { id: 10, title: "남매", mp3: "/assets/music11.mp3", point : 10 },
    { id: 11, title: "무한", mp3: "/assets/music12.mp3", point : 20 },
    { id: 12, title: "2018년 발매", mp3: "/assets/music13.mp3", point : 30 },
    { id: 13, title: "unit", mp3: "/assets/music14.mp3", point : 40 },
    { id: 14, title: "쉿", mp3: "/assets/music15.mp3", point : 50 },
  ];
  const data4 = [
    { id: 15, title: "ㄱㅇㅇ", mp3: "/assets/music16.mp3", point : 10 },
    { id: 16, title: "히어로", mp3: "/assets/music17.mp3", point : 20 },
    { id: 17, title: "크레딧", mp3: "/assets/music18.mp3", point : 30 },
    { id: 18, title: "세 남자", mp3: "/assets/music19.mp3", point : 40 },
    { id: 19, title: "시리즈물", mp3: "/assets/music20.mp3", point : 50 },
  ];
  const data5 = [
    { id: 20, title: "부활", mp3: "/assets/music21.mp3", point : 10 },
    { id: 21, title: "장소", mp3: "/assets/music22.mp3", point : 20 },
    { id: 22, title: "방송사", mp3: "/assets/music23.mp3", point : 30 },
    { id: 23, title: "드라마", mp3: "/assets/music24.mp3", point : 40 },
    { id: 24, title: "필름", mp3: "/assets/music25.mp3", point : 50 },
  ];

  const profile = [
    { id: 1, name: "최찬", img: "/assets/img/image 34.png", score: 200 },
    { id: 2, name: "이혜린", img: "/assets/img/image 37.png", score: 200 },
    { id: 3, name: "이상헌", img: "/assets/img/image 35.png", score: 200 },
    { id: 4, name: "박지원", img: "/assets/img/image 33.png", score: 200 },
    { id: 5, name: "최정재", img: "/assets/img/image 38.png", score: 200 },
    { id: 6, name: "서호정", img: "/assets/img/image 36.png", score: 200 },
    { id: 8, name: "성현관", img: "/assets/img/image 32.png", score: 200 },
  ];

  const [finished, setFinished] = useState(false);
  function Finish() {
    if (finished === false) {
      setFinished(true);
    } else {
      setFinished(false);
    }
  }

  const [point, setPoint] = useState(0);
  function TargetScore(points){
    setPoint(points)
  }

  return (
    <div className="App">
      <div className="header">
        <h1 className="title">DEVROCK 음악 장학 퀴즈</h1>
        <ul>
          <li>
            기본 점수 200점에서 시작하며 퀴즈를 틀릴 시엔 해당 점수만큼 차감,
            맞출 시엔 해당 점수를 획득합니다.
          </li>
          <li>
            가요는 가수/제목 영화, 시그널은 해당 콘텐츠 제목을 얘기해주시면
            됩니다.
          </li>
          <li>점수는 마지막에 공개합니다.</li>
        </ul>
        <button className="finish_button" onClick={Finish}>점수확인</button>
      </div>
      <div className="wrapper">
        <table>
          <tr>
            <th></th>
            <th>10</th>
            <th>20</th>
            <th>30</th>
            <th>40</th>
            <th>50</th>
          </tr>
          <tr>
            <th>동요</th>
            {data1 &&
              data1.map((data) => {
                return <Cards data={data} TargetScore={TargetScore} />;
              })}
          </tr>
          <tr>
            <th>00~09 가요</th>
            {data2 &&
              data2.map((data) => {
                return <Cards data={data} TargetScore={TargetScore} />;
              })}
          </tr>
          <tr>
            <th>10~19 가요</th>
            {data3 &&
              data3.map((data) => {
                return <Cards data={data} TargetScore={TargetScore} />;
              })}
          </tr>
          <tr>
            <th>영화</th>
            {data4 &&
              data4.map((data) => {
                return <Cards data={data} TargetScore={TargetScore} />;
              })}
          </tr>
          <tr>
            <th>시그널</th>
            {data5 &&
              data5.map((data) => {
                return <Cards data={data} TargetScore={TargetScore} />;
              })}
          </tr>
        </table>
        <div className="img_wrapper">
          
          {profile &&
            profile.map((data) => {
              return <Counting data={data} finished={finished} point={point} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
