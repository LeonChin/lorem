import React from "react";

function Text({ text }) {
  return (
    <article className="lorem-text">
      {text.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
    </article>
  );
}

export default Text;
