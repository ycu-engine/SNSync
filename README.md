# SNSync

<p align="center">
  <img width="500" src="https://github.com/ycu-engine/SNSync/assets/104000239/027d3c37-f1fe-43aa-af1d-b6b3540202c9" />
  <br />
  <span style="font-weight: bold">複数人でのSNSアカウント交換を手軽に</span>
</p>

## Getting Started

開発に参加を希望する場合は、[@nyatinte](https://github.com/nyatinte)まで連絡をお願いします。Slackのワークスペースに招待します。

[VSCode](https://www.google.com/search?q=VSCode&sourceid=chrome&ie=UTF-8)での開発を推奨します。

Unix系のOSが使用できる環境での開発を推奨します。Macならば問題ありませんが、Windowsの場合はWSL2を使用することをお勧めします。

1. リポジトリをクローンする
例：

```sh
git clone git@github.com:ycu-engine/SNSync.git
cd SNSync
```

2. 依存関係をインストールする

```sh
pnpm install
```

もしpnpmがインストールされていない場合は、voltaからnpmをインストールし、npmを使用してpnpmをインストールすることをお勧めします。

- [voltaのインストール](https://docs.volta.sh/guide/getting-started)
- [npmを用いてpnpmをインストール](https://pnpm.io/ja/7.x/installation#npm-%E3%82%92%E4%BD%BF%E7%94%A8%E3%81%99%E3%82%8B)

3. 開発サーバーを起動する

```sh
pnpm dev
```

また、VSCodeで開発する場合は推奨拡張機能をインストールすることをお勧めします。`.vscode/extensions.json`に推奨拡張機能が記載されています。
