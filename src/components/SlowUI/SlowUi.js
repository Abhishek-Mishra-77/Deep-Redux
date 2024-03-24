import React from "react";
import UiCategory from "./UiCategory";

const AllUiArray = [
  {
    id: 1,
    category: "Application UI",
    data: [
      {
        id: 1,
        title: "Alerts",
        total: "4 Components",
      },
      {
        id: 2,
        title: "Badges",
        total: "5 Components",
      },
      {
        id: 3,
        title: "Broadcrumbs",
        total: "2 Components",
      },
      {
        id: 4,
        title: "Button Groups",
        total: "5 Components",
      },
      {
        id: 5,
        title: "Check Boxes",
        total: "6 Components",
      },
      {
        id: 6,
        title: "Details List",
        total: "4 Components",
      },
      {
        id: 7,
        title: "Dividers",
        total: "4 Components",
      },
      {
        id: 8,
        title: "Dropdowns",
        total: "3 Components",
      },
      {
        id: 9,
        title: "Error Pages",
        total: "4 Components",
      },
      {
        id: 10,
        title: "Grids",
        total: "12 Components",
      },
      {
        id: 11,
        title: "Headers",
        total: "2 Components",
      },
      {
        id: 12,
        title: "Inputs",
        total: "7 Components",
      },
      {
        id: 13,
        title: "Auth Forms",
        total: "2 Components",
      },
      {
        id: 14,
        title: "Media",
        total: "8 Components",
      },
      {
        id: 15,
        title: "Pagination",
        total: "4 Components",
      },
      {
        id: 16,
        title: "Progress",
        total: "4 Components",
      },
      {
        id: 17,
        title: "Radio Groups",
        total: "6 Components",
      },
      {
        id: 18,
        title: "Selects",
        total: "3 Components",
      },
      {
        id: 19,
        title: "Side Menu",
        total: "3 Components",
      },
      {
        id: 20,
        title: "Stats",
        total: "6 Components",
      },
      {
        id: 21,
        title: "Steps",
        total: "6 Components",
      },
      {
        id: 22,
        title: "Tables",
        total: "7 Components",
      },
      {
        id: 23,
        title: "Tabs",
        total: "5 Components",
      },
      {
        id: 24,
        title: "Textareas",
        total: "3 Components",
      },
      {
        id: 25,
        title: "Toggles",
        total: "4 Components",
      },
      {
        id: 26,
        title: "Vertical Menu",
        total: "9 Components",
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
      },
      {
        id: 2,
        title: "Banners",
        total: "3 Components",
      },
      {
        id: 3,
        title: "Blog Cards",
        total: "7 Components",
      },
      {
        id: 4,
        title: "Buttons",
        total: "12 Components",
      },
      {
        id: 5,
        title: "Check Boxes",
        total: "6 Components",
      },
      {
        id: 6,
        title: "Cards",
        total: "9 Components",
      },
      {
        id: 7,
        title: "CTAs",
        total: "5 Components",
      },
      {
        id: 8,
        title: "FAQs",
        total: "5 Components",
      },
      {
        id: 9,
        title: "Footers",
        total: "13 Components",
      },
      {
        id: 10,
        title: "Forms",
        total: "4 Components",
      },
      {
        id: 11,
        title: "Headers",
        total: "3 Components",
      },
      {
        id: 12,
        title: "Popups",
        total: "8 Components",
      },
      {
        id: 13,
        title: "Pricing",
        total: "2 Components",
      },
      {
        id: 14,
        title: "Sections",
        total: "6 Components",
      },
      {
        id: 15,
        title: "Stats",
        total: "3 Components",
      },
      {
        id: 16,
        title: "Testimonials",
        total: "5 Components",
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
      },
      {
        id: 2,
        title: "Collection Cards",
        total: "2 Components",
      },
      {
        id: 3,
        title: "Collection Filters",
        total: "2 Components",
      },
      {
        id: 4,
        title: "Features Sections",
        total: "2 Components",
      },
      {
        id: 5,
        title: "Product Cards",
        total: "6 Components",
      },
      {
        id: 6,
        title: "Product Collections",
        total: "6 Components",
      },
      {
        id: 7,
        title: "Quantity Inputs",
        total: "4 Components",
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
