import Header from "@/components/shared/header"
import { useAccount, useEnsName } from "wagmi"

export default function Profile() {
  const { address } = useAccount()
  const { data, error, status } = useEnsName({ address })
  if (status === "pending") return <div>Loading ENS name</div>
  if (status === "error") return <div>Error fetching ENS name: {error.message}</div>

  return (
    <>
      <Header />
      <div className="relative bg-white overflow-hidden my-10">
        <div>ENS name: {data}</div>
      </div>
    </>
  )
}
