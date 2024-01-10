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
      <section>
        <div className="w-full">
          <div className="flex flex-row">
            <div className="col-sm-6 col-md-4 col-lg-3">
              <h5 className="mb-4 text-light">Preview Item</h5>
              <div className="p-5 bg-gray-800 rounded-10">
                <div className="mb-15">
                  <img src="/static/media/img-01.08f9fcfa.jpg" alt="" className="w-100 rounded-xl" />
                </div>
                <div className="nft__content">
                  <h5 className="mb-4">
                    <a href="/market/01">Guard</a>
                  </h5>
                  <div className="creator__info-wrapper d-flex gap-3">
                    <div className="creator__img w-10 h-10">
                      <img src="/static/media/ava-01.53d4b552.png" alt="" className="w-100" />
                    </div>
                    <div className="creator__info w-100 d-flex align-items-center justify-content-between">
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
                  <div className=" mt-3 d-flex align-items-center justify-content-between">
                    <button className="bid__btn d-flex align-items-center gap-1">
                      <i className="ri-shopping-bag-line"></i> Place Bid
                    </button>
                    <span className="history__link">
                      <a href="/create">View History</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-8 col-lg-9">
              <div className="create__item">
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
                  <div className=" d-flex align-items-center gap-4">
                    <div className="form__input w-50">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Starting Date
                      </label>
                      <input
                        type="date"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>
                    <div className="form__input w-50">
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
