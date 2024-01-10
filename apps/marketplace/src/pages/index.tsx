import ActionView from "@/components/section/Home/ActionView"
import Explore from "@/components/section/Home/Explore"
import Intro from "@/components/section/Home/Intro"
import Summary from "@/components/section/Home/Summary"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <Intro />
      <Summary />
      <Explore />
      <ActionView />
    </>
  )
}
