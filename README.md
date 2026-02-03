# クイズサイト

Astroで構築された静的クイズサイトです。GitHub Pagesでホスティング可能です。

## 🚀 特徴

- ✨ Astro + TypeScript で構築
- 📝 YAMLファイルでクイズデータを管理
- 🎯 4択問題形式
- 📊 進捗表示とスコア管理
- 💡 問題ごとの解説表示
- 🔄 リトライ機能
- 📱 レスポンシブデザイン
- 🔒 Astroのコンテンツコレクションによるスキーマ検証
- 🤖 GitHub Copilot カスタムエージェントによるコードレビュー支援

## 📋 必要要件

- Node.js 18以上
- pnpm

## 🛠️ セットアップ

### 1. リポジトリのクローン

```bash
git clone https://github.com/raindrop-daichi/quiz-site.git
cd quiz-site
```

### 2. 依存関係のインストール

```bash
pnpm install
```

### 3. 開発サーバーの起動

```bash
pnpm dev
```

ブラウザで http://localhost:4321 を開いてください。

## 📝 クイズの作成方法

クイズは `src/content/quizzes/` ディレクトリにYAMLファイルとして配置します。

### クイズファイルの例

`src/content/quizzes/my-quiz.yaml`:

```yaml
title: クイズのタイトル
description: クイズの説明文
questions:
  - question: 問題文は何ですか？
    choices:
      - 選択肢1
      - 選択肢2
      - 選択肢3
      - 選択肢4
    correctAnswer: 1  # 0-3の範囲で正解のインデックス（0から開始）
    explanation: この問題の解説文です。
    referenceUrl: https://example.com/reference  # 任意：情報源へのリンク

  - question: 次の問題文
    choices:
      - 選択肢A
      - 選択肢B
      - 選択肢C
      - 選択肢D
    correctAnswer: 0
    explanation: 解説文
    referenceUrl: https://example.com/another-reference
```

### スキーマ

Astroのコンテンツコレクション機能により、以下のスキーマで検証されます：

- `title`: 文字列（必須）
- `description`: 文字列（必須）
- `questions`: 配列（必須）
  - `question`: 文字列（必須）
  - `choices`: 文字列の配列、正確に4つの要素（必須）
  - `correctAnswer`: 0-3の数値（必須）
  - `explanation`: 文字列（必須）
  - `referenceUrl`: 情報源へのURL（任意）- 正確な情報のソースを提供

## 🏗️ ビルド

本番用のビルドを作成：

```bash
pnpm build
```

ビルドされたファイルは `dist/` ディレクトリに出力されます。

ローカルでプレビュー：

```bash
pnpm preview
```

## 🌐 GitHub Pagesへのデプロイ

### 設定

`astro.config.mjs` でサイトとベースパスを設定：

```javascript
export default defineConfig({
  site: 'https://<ユーザー名>.github.io',
  base: '/<リポジトリ名>',
});
```

現在の設定：
- site: `https://raindrop-daichi.github.io`
- base: `/quiz-site`

### GitHub Actionsによる自動デプロイ

このリポジトリには、GitHub Actionsのワークフローが含まれており、`main`ブランチへのプッシュ時に自動的にビルドとデプロイを実行します。

#### デプロイ手順

1. GitHubリポジトリの設定で、Pages のソースを「GitHub Actions」に設定
2. `main`ブランチにコミットをプッシュ
3. Actionsタブでデプロイの進行状況を確認
4. デプロイ完了後、`https://raindrop-daichi.github.io/quiz-site/` でサイトにアクセス可能

### ベースパスについて

GitHub Pagesでリポジトリをサブディレクトリとしてホスティングする場合、ベースパスの設定が重要です。

- プロジェクトサイト（`username.github.io/repository-name`）の場合：`base: '/repository-name'`
- ユーザーサイト（`username.github.io`）の場合：`base: '/'`

現在の設定では、すべてのリンクとアセットが正しいベースパスで動作するようになっています。

## 📁 プロジェクト構造

```
quiz-site/
├── src/
│   ├── content/
│   │   ├── config.ts           # コンテンツコレクションの定義
│   │   └── quizzes/            # クイズデータ（YAML）
│   │       └── sample-quiz.yaml
│   ├── layouts/
│   │   └── Layout.astro        # ベースレイアウト
│   └── pages/
│       ├── index.astro         # トップページ（クイズ一覧）
│       └── quiz/
│           └── [id].astro      # クイズページ（動的ルート）
├── public/
│   └── favicon.svg             # ファビコン
├── astro.config.mjs            # Astro設定
├── tsconfig.json               # TypeScript設定
└── package.json                # パッケージ設定
```

## 🎨 カスタマイズ

### スタイルの変更

各`.astro`ファイルの`<style>`タグ内でスタイルをカスタマイズできます。

### 新しいクイズの追加

1. `src/content/quizzes/` に新しいYAMLファイルを作成
2. スキーマに従ってクイズデータを記述
3. ビルドすると自動的にクイズ一覧とクイズページが生成されます

## 🤖 GitHub Copilot カスタムエージェント

このプロジェクトには、コードレビューとベストプラクティスの提案を行う専用のGitHub Copilotカスタムエージェントが含まれています。

### site-reviewer エージェント

プロジェクトの構成、技術スタック、コード品質、パフォーマンス、アクセシビリティ、セキュリティなどを包括的にレビューするエージェントです。

**使用例**:
```
@site-reviewer プロジェクト全体をレビューしてください
@site-reviewer Astroの設定ファイルを確認してください
@site-reviewer パフォーマンスとアクセシビリティをチェックしてください
```

詳しい使用方法は [.github/agents/USAGE_GUIDE.md](.github/agents/USAGE_GUIDE.md) をご覧ください。

## 📄 ライセンス

MIT

## 🤝 コントリビューション

Issue や Pull Request を歓迎します！
