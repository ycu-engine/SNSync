import logo from 'public/logo.png'
import usage from 'public/usage.png'

export default function Index() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col justify-center items-center">
      <img className="w-1/3" src={logo} alt="ロゴ画像" />
      <p className="font-bold text-4xl">グループでのSNS共有をもっと手軽に</p>
      <img src={usage} alt="使用画像" />
      <div className="flex">
        <button type="button">グループを作成する</button>
        <button type="button">グループに参加する</button>
      </div>
      <p>Copyright (c) 2024 NakamuraTakumi, Others</p>
    </div>
  )
}
