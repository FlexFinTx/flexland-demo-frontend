import React from "react";

export type GetCredMenuProps = {
  label: string;
  menuItems: string[];
  activeIdx: number;
}

function GetCredMenu({ label, menuItems, activeIdx }: GetCredMenuProps) {
  return (
    <aside className="menu">
      <p className="menu-label">
        {label}
      </p>
      <ul className="menu-list">
        {menuItems.map((item, i) => {
          console.log("activeIdx: ", activeIdx);
          console.log("i: ", i);
          return (
            <li>
              <a className={activeIdx === i ? "is-active" : ""}>
                {item}
              </a>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

export default GetCredMenu;