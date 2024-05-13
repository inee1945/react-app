import { Children, useState } from "react";
import "./App.css";
import TabMenu from "./TabMenu";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(1);
  return (
    <>
      <Panel title="JAVA" status={activeIndex === 0}>
        자바는 어쩌고
      </Panel>
      <Panel title="REACT" status={activeIndex === 1}>
        리엑트는 .....
      </Panel>
    </>
  );
}

function Panel({ title, children, status }) {
  return (
    <section>
      <h2>{title}</h2>
      {status ? <p>{children}</p> : <button type="button">열기</button>}
    </section>
  );
}
