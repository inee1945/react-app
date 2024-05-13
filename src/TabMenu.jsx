const menus = ["클레식", "프레쉬&라이트", "프리미엄", "아침메뉴"];

export default function TabMenu() {
  return (
    <ul className="tabmenu">
      {menus.map((menu, idx) => (
        <li key={idx}>{menu}</li>
      ))}
    </ul>
  );
}
