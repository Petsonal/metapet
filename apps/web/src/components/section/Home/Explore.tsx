export default function Explore() {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Explore NFTs</h2>
          <a className="ml-auto text-lg" href="/collections">
            View more ➡️
          </a>
        </div>
        <h1 className="my-10 text-center text-red-500">Connect your wallet to see the collections</h1>
      </div>
    </div>
  )
}
