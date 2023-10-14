import { LayoutSection } from "../Layout/LayoutSection";

const DATA = [
  {
    title: "Product",
    items: [
      {
        label: "Features"
      },
      {
        label: "Integrations"
      },
      {
        label: "Pricing"
      }
    ]
  },
  {
    title: "Company",
    items: [
      {
        label: "About us"
      },
      {
        label: "Blog"
      },
      {
        label: "Careers"
      },
      {
        label: "Customers"
      },
      {
        label: "Brand"
      }
    ]
  },
  {
    title: "Resources",
    items: [
      {
        label: "Community"
      },
      {
        label: "Contract"
      },
      {
        label: "DPA"
      },
      {
        label: "Terms of services"
      }
    ]
  }
];

export const Footer = () => {
  return (
    <footer id="footer" className="bg-black text-white">
      <LayoutSection className="py-[10px] lg:py-[50px]">
        <div className="py-10">
          <div className="grid grid-cols-2 lg:grid-cols-12">
            <div className="col-span-6 lg:col-span-4 mb-8 lg:mb-16">
              <div className="grid gap-4 lg:gap-8">
                Our experts can provide valuable insights and assist you in
                identifying properties.
              </div>
            </div>
            <div className="lg:col-span-2"></div>
            <div className="col-span-6">
              <div className="grid grid-cols-2 md:grid-cols-12">
                {DATA.map((footerLinks) => (
                  <div
                    key={footerLinks.title}
                    className="footer-menu--container col-span-1 md:col-span-4"
                  >
                    <h3 className="font-bold text-base mb-2">
                      {footerLinks.title}
                    </h3>
                    <ul className="footer-menu--list">
                      {footerLinks.items.map((footerItem) => (
                        <li
                          key={footerItem.label}
                          className="footer-menu--list-item gap-2"
                        >
                          <a
                            className="mb-2 block w-auto font-medium transition-colors duration-300 hover:underline"
                            href={footerItem.href}
                            target={footerItem.target}
                          >
                            {footerItem.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <div className="footer-credits relative z-10">
          <div className="flex flex-col lg:flex-row justify-between py-4">
            <p className="my-0">@2023Capella. All rights reserved</p>
            <p className="my-0">Term & Condition</p>
          </div>
        </div>
      </LayoutSection>

      <div className="footer--background"></div>
    </footer>
  );
};
