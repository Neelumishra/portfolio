import { Avatar, Dropdown, Navbar, DarkThemeToggle } from "flowbite-react";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <Navbar fluid className="sticky w-full z-20 start-0  top-0 border">
      <Navbar.Brand>
        <span className="self-center whitespace-nowrap text-xl font-semibold text-black dark:text-white">
          Neelu Mishra
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <DarkThemeToggle className="mr-6" />
        <Dropdown
          arrowIcon={false}
          inline
          label={<Avatar alt="User settings" img="/Profile.png" rounded />}
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse >
        <Link to="/" >
          {" "}
          <Navbar.Link >Home</Navbar.Link>
        </Link>
        <Link to="/work">
          {" "}
          <Navbar.Link>Work</Navbar.Link>
        </Link>
        <Link to="/project">
          {" "}
          <Navbar.Link>Project</Navbar.Link>
        </Link>
        <Link to="/about">
          {" "}
          <Navbar.Link>About</Navbar.Link>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
