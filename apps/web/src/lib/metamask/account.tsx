import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from "wagmi"

export function Account() {
  const { address } = useAccount()
  const { disconnect } = useDisconnect()
  const { data: ensName } = useEnsName({ address })
  const { data: ensAvatar } = useEnsAvatar({ name: ensName! })
  console.log("ensAvatar", ensAvatar)

  return (
    <div className="flex flex-row gap-4">
      <div className="flex flex-row gap-2 items-center justify-center select-none relative whitespace-nowrap align-middle outline-none rounded-md  border-2 outline-offset-2 w-auto leading-1.2 font-semibold transition-property-common transition-duration-normal h-10 min-w-10 text-md px-6">
        {ensAvatar ? <img alt="ENS Avatar" src={ensAvatar} /> : <img alt="ENS Avatar" src="user/user.png" />}
        {address && (
          <div className="">
            <p className="truncate w-12">{ensName ? `${ensName} (${address})` : address}</p>
          </div>
        )}
      </div>
      <button onClick={() => disconnect()}>Disconnect</button>
    </div>
  )
}
