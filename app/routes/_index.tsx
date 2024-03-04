import logo from 'public/logo.png';
import usage from 'public/usage.png';
import { useEffect, useState } from 'react';
import { Button } from '~/components/ui/button';

// TODO: margin & gapを入れる、Typography対応、PC対応、header & footer対応、ボタンの動作

export default function Index() {
  return (
    <div className='mx-auto flex max-w-2xl flex-col justify-center items-center'>
      <img
        width={150}
        height={150}
        decoding='async'
        className='w-1/3'
        src={logo}
        alt='ロゴ画像'
      />
      <h1 className='font-bold text-4xl'>
        <span className='inline-block'>グループでのSNS共有を</span>
        <span className='inline-block'>もっと手軽に</span>
      </h1>
      <img
        width={298}
        height={440}
        decoding='async'
        src={usage}
        alt='使用画像'
      />
      <div className='flex gap-2'>
        <Button
          type='button'
          variant='default'
          className='bg-blue-700 hover:bg-blue-700/90'
        >
          グループを作成する
        </Button>
        <Button type='button' variant='secondary'>
          グループに参加する
        </Button>
      </div>
      <footer>
        <p>Copyright (c) 2024 NakamuraTakumi, Others</p>
      </footer>
    </div>
  );
}
