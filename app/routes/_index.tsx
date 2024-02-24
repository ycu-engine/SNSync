import logo from 'public/logo.png'
import usage from 'public/usage.png'
import { Button } from '~/components/ui/button'

// TODO: margin & gapを入れる、Typography対応、PC対応、header & footer対応、ボタンの動作

export default function Index() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col justify-center items-center">
      <img className="w-1/3" src={logo} alt="ロゴ画像" />
      <p className="font-bold text-4xl">グループでのSNS共有をもっと手軽に</p>
      <img src={usage} alt="使用画像" />
      <div className="flex gap-2">
        <Button className="bg-blue-700 hover:bg-blue-700/90">
          グループを作成する
        </Button>
        <Button>グループに参加する</Button>
      </div>
      <p>Copyright (c) 2024 NakamuraTakumi, Others</p>
    </div>
  )
}
