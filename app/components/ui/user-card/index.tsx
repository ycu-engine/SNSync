import { Link } from '@remix-run/react';
import { Check } from 'lucide-react';
import { useState } from 'react';
import { Avatar } from '../avatar';

const getProfileIcon = (xid: string) => {
  // TODO: プロフィールアイコン取得(ライブラリ?)
  if (xid === 'ycu_engine') {
    return 'https://pbs.twimg.com/profile_images/1367485961672753154/N0QcBI-B_400x400.jpg';
  }
  if (xid === 'N_ha_1050') {
    return 'https://pbs.twimg.com/profile_images/1644909413394948096/OtvObBTf_400x400.jpg';
  }
  if (xid === 'nyatinte') {
    return 'https://pbs.twimg.com/profile_images/1587688925069352960/CdqOdQwk_400x400.jpg';
  }
  return 'https://pbs.twimg.com/profile_images/1683899100922511378/5lY42eHs_400x400.jpg';
};

export type UserCardProps = {
  user: {
    xid: string;
    nickname: string;
  };
  isLooked?: boolean;
};
const UserCard = ({
  user: { xid, nickname },
  isLooked: _isLooked = false,
}: UserCardProps) => {
  const profile_icon = getProfileIcon(xid);
  const [isLooked, setLooked] = useState(_isLooked);
  const handleClick = () => {
    setLooked(true);
  };
  return (
    <Link
      to={`https://twitter.com/${xid}`}
      onClick={handleClick}
      className='w-72 h-20'
    >
      <div className='relative flex justify-between space-x-4 items-center border rounded-md shadow-md p-4 hover:bg-accent duration-200'>
        <Avatar src={profile_icon} alt={`${xid}'s icon`} fallback={xid} />
        <div className='space-y-1'>
          <h4 className='text-sm font-semibold'>@{xid}</h4>
          <p className='text-sm'>{nickname}</p>
          <div className='absolute -top-2 -right-2' hidden={!isLooked}>
            <Check
              strokeWidth='2.5px'
              color='white'
              className='bg-green-600 rounded-full'
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export { UserCard };
