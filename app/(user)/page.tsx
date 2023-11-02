import {draftMode} from "next/headers"
export default function Home() {
  const {isEnabled} = draftMode()
 if(isEnabled){
  return(
    <div>draft mode enabled</div>
  )
 }
  return (
    <div>draft mode disabled</div>
  )
}
