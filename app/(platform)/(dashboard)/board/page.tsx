import { UserButton } from "@clerk/nextjs"


const BoardPage = () => {
  return (
    <div>
      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}

export default BoardPage