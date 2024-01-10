import Image from "next/image"
import { Inter } from "next/font/google"
// import { FluentProvider, webLightTheme } from "@fluentui/react-components"
import { Button } from "@fluentui/react-components"
import type { ButtonProps } from "@fluentui/react-components"
import { Code, List, ListIcon, ListItem, Text, Link as ChakraLink } from "@chakra-ui/react"
import { Main } from "@/components/item/Main/Main"
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons"

const inter = Inter({ subsets: ["latin"] })
// <Main>

export default function Home() {
  return (
    <>
      <section className="px-16 grid place-items-center h-full">
        <div className="max-w-7xl w-full">
          <div className="grid grid-cols-4 w-full ">
            <div className="">
              <h5 className="mb-4 text-light">Preview Item</h5>
              <div className="p-5 bg-gray-800 rounded-10">
                <div className="mb-15">
                  <img src="/img/sample.jpg" alt="" className="w-100 rounded-xl" />
                </div>
                <div className="nft__content text-white">
                  <h5 className="mb-4">
                    <a href="/market/01">Guard</a>
                  </h5>
                  <div className="creator__info-wrapper flex gap-3 ">
                    <div className="creator__img w-10 h-10">
                      <img src="/img/user.png" alt="" className="w-100" />
                    </div>
                    <div className="creator__info w-100 flex align-items-center justify-content-between ">
                      <div>
                        <h6>Created By</h6>
                        <p>Trista Francis</p>
                      </div>
                      <div>
                        <h6>Current Bid</h6>
                        <p>7.89 ETH</p>
                      </div>
                    </div>
                  </div>
                  <div className=" mt-3 flex align-items-center justify-content-between">
                    <button className="bid__btn flex align-items-center gap-1">
                      <i className="ri-shopping-bag-line"></i> Place Bid
                    </button>
                    {/* <span className="history__link">
                      <a href="/create">View History</a>
                    </span> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <div className="create__item px-7">
                <form>
                  <div className="form__input">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Upload File</label>
                    <input
                      type="file"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                  <div className="form__input">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                    <input
                      type="number"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter price for one item (ETH)"
                    />
                  </div>
                  <div className="form__input">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Minimum Bid</label>
                    <input
                      type="number"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter minimum bid"
                    />
                  </div>
                  <div className="grid grid-cols-2 align-items-center gap-4">
                    <div className="form__input col-span-1">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Starting Date
                      </label>
                      <input
                        type="date"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>
                    <div className="form__input col-span-1">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Expiration Date
                      </label>
                      <input
                        type="date"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>
                  </div>
                  <div className="form__input">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter title"
                    />
                  </div>
                  <div className="form__input">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                    <textarea
                      name="description"
                      id="description"
                      rows={7}
                      placeholder="Enter description"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    ></textarea>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

// </Main>
