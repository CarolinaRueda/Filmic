import {
  IconBrandTwitter,
  IconBrandInstagram,
  IconBrandGithub,
} from "@tabler/icons-react";

const Footer = () => {
  return (
    <footer className="flex justify-around my-12 text-[#B9BCFF]">
      <div className="flex flex-col">
        <h2 className="text-xl font-semibold">
          &copy; 2023 All rights reserved
        </h2>
        <p className="text-lg font-medium">Carolina Rubio</p>
      </div>
      <div className="flex gap-14">
        <IconBrandTwitter
          size={"2rem"}
          className="hover:scale-90 hover:cursor-pointer"
        />
        <IconBrandInstagram
          size={"2rem"}
          className="hover:scale-90 hover:cursor-pointer"
        />
        <IconBrandGithub
          size={"2rem"}
          className="hover:scale-90 hover:cursor-pointer"
        />
      </div>
    </footer>
  );
};

export default Footer;
