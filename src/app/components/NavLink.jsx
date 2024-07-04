import Link from "next/link";

const NavLink = ({href,title}) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#525252] dark:text-[#FFFFFF] font-body sm:text-xl rounded md:p-0 hover:text-[#0BAEEA] dark:hover:text-[#0BAEEA]"
    >
      {title}
    </Link>
  );
};

export default NavLink;