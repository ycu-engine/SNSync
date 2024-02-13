import { Link } from '@remix-run/react'
import { useState } from 'react'
import { Avatar } from '../avatar'
import { Card, CardContent, CardTitle } from '../card'

export type UserCardProps = {
  user: {
    xid: string
    nickname: string
  }
}

const getProfileIcon = (xid: string) => {
  // TODO: プロフィールアイコン取得(ライブラリ?)
  if (xid === 'ycu_engine') {
    return 'https://pbs.twimg.com/profile_images/1367485961672753154/N0QcBI-B_400x400.jpg'
  }
  if (xid === 'N_ha_1050') {
    return 'https://pbs.twimg.com/profile_images/1644909413394948096/OtvObBTf_400x400.jpg'
  }
  if (xid === 'nyatinte') {
    return 'https://pbs.twimg.com/profile_images/1587688925069352960/CdqOdQwk_400x400.jpg'
  }
  return 'https://pbs.twimg.com/profile_images/1683899100922511378/5lY42eHs_400x400.jpg'
}
const CheckMark = () => {
  // TODO: チェックマーク(画像を作るかライブラリからインポート?)
  return <>✔</>
}
const UserCard = ({ user: { xid, nickname } }: UserCardProps) => {
  const profile_icon = getProfileIcon(xid)
  const [isLooked, setLooked] = useState(false)
  return (
    <Link
      to={`https://twitter.com/${xid}`}
      onClick={() => setLooked(true)}
      className="w-72 h-20"
    >
      <Card className="grid grid-rows-2 grid-cols-3 w-full p-3 h-full relative border-inherit hover:border-black">
        <div className="self-center justify-self-center col-span-1 row-span-2">
          <Avatar src={profile_icon} alt={`${xid}'s icon`} />
        </div>
        <CardTitle className="col-span-2 row-span-1 text-sm truncate">
          @{xid}
        </CardTitle>
        <CardContent className="col-span-2 row-span-1 text-xs truncate">
          {nickname}
        </CardContent>
        <div className="absolute top-0 right-0" hidden={!isLooked}>
          <CheckMark />
        </div>
      </Card>
    </Link>
  )
}

export { UserCard }
