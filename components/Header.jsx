
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Header() {
  
  return (
    <header className="bg-colorGray fixed w-screen z-40 top-0">
      <div className="container flex items-center justify-between">
        <p className="hidden xl:flex items-center gap-2 text-[13px] font-semibold text-primary">
          <FaPhoneAlt /> +234-810 601 7834
        </p>
        <p className="xl:hidden flex items-center gap-2 text-primary text-[13px] font-semibold">
            <MdEmail /> info@mstacksolutions.com
          </p>

        <div className="flex items-center gap-8">
          <p className="items-center gap-2 text-primary  xl:text-[13px] font-semibold hidden xl:flex">
            <MdEmail /> info@mstacksolutions.com
          </p>
          <p className="flex items-center gap-2 text-primary text-[13px] font-semibold">
            RC: 689519055
          </p>
        </div>
      </div>
    </header>
  );
}
