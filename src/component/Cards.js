import React from "react";

function Cards(props) {
  const data = props.data;
  function CloseBlind (e) {
    const blind = e.target
    blind.classList.remove("blind-on")
    blind.classList.add("blind-off");
    props.TargetScore(data.point);
  }
  return (
    <td>
      <div className="music_title">{data.title}</div>
      <audio controls>
        <source src={data.mp3} type="audio/mp3" />
      </audio>
      <div id={`blind${data.id}`} className="blind-on" onClick={CloseBlind}></div>
    </td>
  );
}

export default Cards;
