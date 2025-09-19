import React from "react";
import Link from "next/link";

type MobileMenuProps = {
  name: string;
  href: string;
  live: boolean;
};

type MenusType = {
  menus: MobileMenuProps[];
};

const MobileMenu = ({ menus }: MenusType) => {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer" className="btn bg-base-100 text-neutral-content drawer-button">
          Menu
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 py-4">
          {/* Sidebar content here */}
          {menus.map(item => (
            <Link
              key={item.name}
              href={item.href}
              className="text-neutral-content cursor-pointer rounded-xl hover:bg-base-100 block px-3 py-2 text-base font-medium"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
