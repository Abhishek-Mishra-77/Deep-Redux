import React from "react";
import UiCategory from "./UiCategory";
import { MdOutlineAddAlert } from "react-icons/md";
import { SiOpenbadges } from "react-icons/si";
import { GoBroadcast } from "react-icons/go";
import { CgPlayButtonR } from "react-icons/cg";
import { FaCheck } from "react-icons/fa";
import { CgDetailsMore } from "react-icons/cg";
import { RxDividerVertical } from "react-icons/rx";
import { IoIosArrowDropdown } from "react-icons/io";
import { MdError } from "react-icons/md";
import { IoGridSharp } from "react-icons/io5";
import { TbLayoutNavbar } from "react-icons/tb";
import { TbInputSearch } from "react-icons/tb";
import { FaWpforms } from "react-icons/fa";
import { MdOutlinePermMedia } from "react-icons/md";
import { FaPagelines } from "react-icons/fa";
import { FaBarsProgress } from "react-icons/fa6";
import { IoIosRadioButtonOn } from "react-icons/io";
import { MdOutlinePhotoSizeSelectSmall } from "react-icons/md";
import { CiMenuBurger } from "react-icons/ci";
import { IoIosStats } from "react-icons/io";
import { LiaTableSolid } from "react-icons/lia";
import { TiTabsOutline } from "react-icons/ti";
import { CiText } from "react-icons/ci";
import { IoToggleSharp } from "react-icons/io5";
import { FaGripLinesVertical } from "react-icons/fa";
import { MdAnnouncement } from "react-icons/md";
import { PiFlagBanner } from "react-icons/pi";
import { FaBlog } from "react-icons/fa";
import { RxButton } from "react-icons/rx";
import { FaCheckCircle } from "react-icons/fa";
import { LuWalletCards } from "react-icons/lu";
import { VscTasklist } from "react-icons/vsc";
import { FaQq } from "react-icons/fa";
import { IoAmericanFootball } from "react-icons/io5";
import { LiaWpforms } from "react-icons/lia";
import { FaHeading } from "react-icons/fa";
import { GoRepoPush } from "react-icons/go";
import { MdOutlinePriceChange } from "react-icons/md";
import { BsFillSignIntersectionSideFill } from "react-icons/bs";
import { IoMdStats } from "react-icons/io";
import { FaNoteSticky } from "react-icons/fa6";
import { IoCartSharp } from "react-icons/io5";
import { BsCollection } from "react-icons/bs";
import { FcClearFilters } from "react-icons/fc";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { FaProductHunt } from "react-icons/fa";
import { MdOutlineCollectionsBookmark } from "react-icons/md";
import { MdProductionQuantityLimits } from "react-icons/md";

const AllUiArray = [
  {
    id: 1,
    category: "Application UI",
    data: [
      {
        id: 1,
        title: "Alerts",
        total: "4 Components",
        icon: <MdOutlineAddAlert />,
      },
      {
        id: 2,
        title: "Badges",
        total: "5 Components",
        icon: <SiOpenbadges />,
      },
      {
        id: 3,
        title: "Broadcrumbs",
        total: "2 Components",
        icon: <GoBroadcast />,
      },
      {
        id: 4,
        title: "Button Groups",
        total: "5 Components",
        icon: <CgPlayButtonR />,
      },
      {
        id: 5,
        title: "Check Boxes",
        total: "6 Components",
        icon: <FaCheck />,
      },
      {
        id: 6,
        title: "Details List",
        total: "4 Components",
        icon: <CgDetailsMore />,
      },
      {
        id: 7,
        title: "Dividers",
        total: "4 Components",
        icon: <RxDividerVertical />,
      },
      {
        id: 8,
        title: "Dropdowns",
        total: "3 Components",
        icon: <IoIosArrowDropdown />,
      },
      {
        id: 9,
        title: "Error Pages",
        total: "4 Components",
        icon: <MdError />,
      },
      {
        id: 10,
        title: "Grids",
        total: "12 Components",
        icon: <IoGridSharp />,
      },
      {
        id: 11,
        title: "Headers",
        total: "2 Components",
        icon: <TbLayoutNavbar />,
      },
      {
        id: 12,
        title: "Inputs",
        total: "7 Components",
        icon: <TbInputSearch />,
      },
      {
        id: 13,
        title: "Auth Forms",
        total: "2 Components",
        icon: <FaWpforms />,
      },
      {
        id: 14,
        title: "Media",
        total: "8 Components",
        icon: <MdOutlinePermMedia />,
      },
      {
        id: 15,
        title: "Pagination",
        total: "4 Components",
        icon: <FaPagelines />,
      },
      {
        id: 16,
        title: "Progress",
        total: "4 Components",
        icon: <FaBarsProgress />,
      },
      {
        id: 17,
        title: "Radio Groups",
        total: "6 Components",
        icon: <IoIosRadioButtonOn />,
      },
      {
        id: 18,
        title: "Selects",
        total: "3 Components",
        icon: <MdOutlinePhotoSizeSelectSmall />,
      },
      {
        id: 19,
        title: "Side Menu",
        total: "3 Components",
        icon: <CiMenuBurger />,
      },
      {
        id: 20,
        title: "Stats",
        total: "6 Components",
        icon: <MdOutlineAddAlert />,
      },
      {
        id: 21,
        title: "Steps",
        total: "6 Components",
        icon: <IoIosStats />,
      },
      {
        id: 22,
        title: "Tables",
        total: "7 Components",
        icon: <LiaTableSolid />,
      },
      {
        id: 23,
        title: "Tabs",
        total: "5 Components",
        icon: <TiTabsOutline />,
      },
      {
        id: 24,
        title: "Textareas",
        total: "3 Components",
        icon: <CiText />,
      },
      {
        id: 25,
        title: "Toggles",
        total: "4 Components",
        icon: <IoToggleSharp />,
      },
      {
        id: 26,
        title: "Vertical Menu",
        total: "9 Components",
        icon: <FaGripLinesVertical />,
      },
    ],
  },
  {
    id: 2,
    category: "Marketing UI",
    data: [
      {
        id: 1,
        title: "Announcements",
        total: "8 Components",
        icon: <MdAnnouncement />,
      },
      {
        id: 2,
        title: "Banners",
        total: "3 Components",
        icon: <PiFlagBanner />,
      },
      {
        id: 3,
        title: "Blog Cards",
        total: "7 Components",
        icon: <FaBlog />,
      },
      {
        id: 4,
        title: "Buttons",
        total: "12 Components",
        icon: <RxButton />,
      },
      {
        id: 5,
        title: "Check Boxes",
        total: "6 Components",
        icon: <FaCheckCircle />,
      },
      {
        id: 6,
        title: "Cards",
        total: "9 Components",
        icon: <LuWalletCards />,
      },
      {
        id: 7,
        title: "CTAs",
        total: "5 Components",
        icon: <VscTasklist />,
      },
      {
        id: 8,
        title: "FAQs",
        total: "5 Components",
        icon: <FaQq />,
      },
      {
        id: 9,
        title: "Footers",
        total: "13 Components",
        icon: <IoAmericanFootball />,
      },
      {
        id: 10,
        title: "Forms",
        total: "4 Components",
        icon: <LiaWpforms />,
      },
      {
        id: 11,
        title: "Headers",
        total: "3 Components",
        icon: <FaHeading />,
      },
      {
        id: 12,
        title: "Popups",
        total: "8 Components",
        icon: <GoRepoPush />,
      },
      {
        id: 13,
        title: "Pricing",
        total: "2 Components",
        icon: <MdOutlinePriceChange />,
      },
      {
        id: 14,
        title: "Sections",
        total: "6 Components",
        icon: <BsFillSignIntersectionSideFill />,
      },
      {
        id: 15,
        title: "Stats",
        total: "3 Components",
        icon: <IoMdStats />,
      },
      {
        id: 16,
        title: "Testimonials",
        total: "5 Components",
        icon: <FaNoteSticky />,
      },
    ],
  },
  {
    id: 3,
    category: "eCommerce UI",
    data: [
      {
        id: 1,
        title: "Carts",
        total: "3 Components",
        icon: <IoCartSharp />,
      },
      {
        id: 2,
        title: "Collection Cards",
        total: "2 Components",
        icon: <BsCollection />,
      },
      {
        id: 3,
        title: "Collection Filters",
        total: "2 Components",
        icon: <FcClearFilters />,
      },
      {
        id: 4,
        title: "Features Sections",
        total: "2 Components",
        icon: <MdOutlineFeaturedPlayList />,
      },
      {
        id: 5,
        title: "Product Cards",
        total: "6 Components",
        icon: <FaProductHunt />,
      },
      {
        id: 6,
        title: "Product Collections",
        total: "6 Components",
        icon: <MdOutlineCollectionsBookmark />,
      },
      {
        id: 7,
        title: "Quantity Inputs",
        total: "4 Components",
        icon: <MdProductionQuantityLimits />,
      },
    ],
  },
];

const SlowUi = () => {
  return (
    <div>
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Slow UI</h2>
            <h4>Free Open Source Tailwind CSS Components</h4>
            <p className="mt-4 text-gray-300">
              SlowUI is a collection of free Tailwind CSS components that can be
              used in your next project. With a range of components, you can
              build your next marketing website, admin dashboard, eCommerce
              store and much more.
            </p>
          </div>

          {AllUiArray.map((section) => (
            <UiCategory section={section} key={section.id} />
          ))}

          <div className="mt-12 text-center">
            <button className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400">
              Get Started Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SlowUi;
