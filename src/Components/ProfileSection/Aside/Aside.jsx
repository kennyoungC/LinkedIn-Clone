import React from "react"
import AsideFirstRow from "./AsideFirstRow"
import AlsoViewed from "../PeopleSection/People"
import PeopleYouMayKnow from "../PeopleSection/People"
import Promoted from "./Promoted"

const Aside = () => {
  return (
    <>
      <AsideFirstRow />
      <Promoted />
      <AlsoViewed title="People also view" />
      <PeopleYouMayKnow title="People you may know" />
    </>
  )
}

export default Aside
