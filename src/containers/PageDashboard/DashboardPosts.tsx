import React from "react";
import NcImage from "components/NcImage/NcImage";
import Pagination from "components/Pagination/Pagination";

const people = [
  {
    id: 1,
    title: "The Game Changing Blog in The Crypto World",
    image:
    "https://blog.nash.io/content/images/2020/05/btc-trading-blog.png",
    liveStatus: true,
    payment: "Not Applicable",
  },
  {
    id: 2,
    title: "Are Apes in the Yacht Club Bored?",
    image:
    "https://i.guim.co.uk/img/media/ef8492feb3715ed4de705727d9f513c168a8b196/37_0_1125_675/master/1125.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=7ce91813e22e1ca59b2723833dffa49f",
    liveStatus: true,
    payment: "Not Applicable",
  },
  {
    id: 3,
    title: "Ethereum 2.0, What Does It Mean For NFT'?",
    image:
    "https://nexo.io/media/pages/blog/dispatch-12-eth-2-is-real/532c685585-1631610890/blog-dispatch-cover-issue-012.png",
    liveStatus: true,
    payment: "Not Applicable",
  },
  {
    id: 4,
    title: "The first university to implement Metaverse lectures",
    image:
    "https://i.pinimg.com/originals/8f/ca/db/8fcadbcaaa5f1589deb65201d5c5d3cf.png",
    liveStatus: true,
    payment: "Not Applicable",
  },
  {
    id: 5,
    title:
      "CyrptoCurrency Tax Crackdown in The UK",
    image:
    "https://www.regtechtimes.com/wp-content/uploads/2021/11/Crypto-Taxation-img.jpg",
    liveStatus: false,
    payment: "Not Applicable",
  },
  {
    id: 6,
    title:
      "Is Your Next Job In Web3?",
    image:
    "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/HWSBOOEGZVJFLJRYBNFJDE6I4I.jpg",
    liveStatus: true,
    payment: "Not Applicable",
  },
];

const DashboardPosts = () => {
  return (
    <div className="flex flex-col space-y-8">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full px-1 sm:px-6 lg:px-8">
          <div className="shadow dark:border dark:border-neutral-800 overflow-hidden sm:rounded-lg">
            <table className="min-w-full divide-y divide-neutral-200 dark:divide-neutral-800">
              <thead className="bg-neutral-50 dark:bg-neutral-800">
                <tr className="text-left text-xs font-medium text-neutral-500 dark:text-neutral-300 uppercase tracking-wider">
                  <th scope="col" className="px-6 py-3">
                    Article
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Payment
                  </th>

                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-neutral-900 divide-y divide-neutral-200 dark:divide-neutral-800">
                {people.map((item) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4">
                      <div className="flex items-center w-96 lg:w-auto max-w-md overflow-hidden">
                        <NcImage
                          containerClassName="flex-shrink-0 h-12 w-12 rounded-lg overflow-hidden lg:h-14 lg:w-14"
                          src={item.image}
                        />
                        <div className="ml-4 flex-grow">
                          <h2 className="inline-flex line-clamp-2 text-sm font-semibold  dark:text-neutral-300">
                            {item.title}
                          </h2>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.liveStatus ? (
                        <span className="px-2 inline-flex text-xs leading-5 font-medium rounded-full bg-teal-100 text-teal-900 lg:text-sm">
                          Active
                        </span>
                      ) : (
                        <span className="px-2 inline-flex text-sm text-neutral-500 dark:text-neutral-400 rounded-full">
                          Offline
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500 dark:text-neutral-400">
                      <span> {item.payment}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-neutral-300">
                      <a
                        href="/#"
                        className="text-primary-800 dark:text-primary-500 hover:text-primary-900"
                      >
                        Edit
                      </a>
                      {` | `}
                      <a
                        href="/#"
                        className="text-rose-600 hover:text-rose-900"
                      >
                        Delete
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Pagination />
    </div>
  );
};

export default DashboardPosts;
