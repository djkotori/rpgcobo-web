# rpgcobo-web

![Logo Image](header.jpg)

RPG-Cobo の **公式ウェブサイトおよびドキュメント** を管理するリポジトリです。  
Astro + Starlight を使用して構築されており、ガイド・機能紹介・ダウンロードページなどを含みます。

---

## 🌐 公開サイト

このリポジトリはCloudflareによって下記のURLに連携されています。  
https://rpg-cobo.com

---

## 📦 このリポジトリについて

このリポジトリには以下が含まれています：

- 公式ウェブサイト
  - RPG-Coboの機能紹介
  - ダウンロード
  - サンプルゲーム(ゲームのバイナリ実体は別サーバー)
- ドキュメント
  - ユーザーガイド
  - トラブルシューティング
  - 開発者向け情報

RPG-Cobo の利用者が最初に訪れる場所として、**分かりやすく・軽量で・メンテナンスしやすい構成**を目指しています。

---

## 🛠️ ローカルでの実行方法

### 1. リポジトリをクローン
```bash
git clone https://github.com/djkotori/rpgcobo-web
cd rpgcobo-web
```

### 2. 依存関係をインストール
```bash
npm install
```

### 3. 開発サーバーを起動
```bash
npm run dev
```

ブラウザで以下にアクセスするとローカル環境でサイトを確認できます：

```
http://localhost:4321
```

---

## 📁 ディレクトリ構成（概要）

```
rpgcobo-web/
├─ src/
│  ├─ assets/          # Astro.js素材
│  │  ├─ docs/         # ガイド用の画像等
│  │  ├─ feature/      # 機能紹介の画像等
│  │  ├─ releases/     # リリースのMarkDown等
│  │  └─ top/          # トップページの画像等
│  ├─ components/      # UIコンポーネント
│  └─ content/docs/    # ガイド・ドキュメント
└─ public/             # 画像・静的ファイル
   └─ portal/          # ポータルアプリから参照
```

---

## 🤝 コントリビューション

ウェブサイトの翻訳、改善提案、誤字修正、ガイドの追加など歓迎します。  
Issue / Pull Request をお送りください。

---

## 📄 ライセンス

このリポジトリは **Apache-2.0 License** のもとで公開されています。

---

## 🧩 関連リポジトリ

- **rpgcobo-tool** — ツール本体（エディタ・ランタイム）
- **rpgcobo-portal** — プロジェクト管理アプリ
- **rpgcobo-assets** — デフォルト素材・テンプレート
