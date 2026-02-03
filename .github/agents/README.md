# GitHub Copilot カスタムエージェント

このディレクトリには、プロジェクト専用のGitHub Copilotカスタムエージェントが含まれています。

## site-reviewer エージェント

### 概要
Astro + TypeScriptベースのクイズサイトの構成とベストプラクティスを専門的にレビューするエージェントです。

### 機能
- **技術スタックレビュー**: Astro、TypeScript、pnpmの使用方法を検証
- **コード品質**: TypeScriptの型安全性とコード品質を評価
- **パフォーマンス**: 静的サイト生成の最適化を提案
- **アクセシビリティ**: A11y準拠を確認
- **SEO**: 検索エンジン最適化の改善提案
- **CI/CD**: GitHub Actionsの最適化
- **セキュリティ**: 脆弱性とセキュリティ設定のチェック
- **UX**: ユーザーエクスペリエンスの改善提案

### 使用方法

#### GitHub Copilot Chat での使用

1. **VS Code または GitHub.com でCopilot Chatを開く**
2. **エージェントを呼び出す**:
   ```
   @site-reviewer プロジェクト全体をレビューしてください
   ```

3. **特定の領域をレビュー**:
   ```
   @site-reviewer Astroの設定ファイルをレビューしてください
   ```
   ```
   @site-reviewer Content Collectionsのスキーマをレビューしてください
   ```
   ```
   @site-reviewer パフォーマンスとアクセシビリティをチェックしてください
   ```

#### レビュー例

**プロジェクト全体のレビュー**:
```
@site-reviewer このクイズサイトの構成をレビューし、ベストプラクティスに基づいた改善提案をしてください
```

**特定のファイルのレビュー**:
```
@site-reviewer astro.config.mjsとtsconfig.jsonの設定を確認してください
```

**CI/CDパイプラインのレビュー**:
```
@site-reviewer GitHub Actionsワークフローを最適化する方法を提案してください
```

**アクセシビリティチェック**:
```
@site-reviewer ページコンポーネントのアクセシビリティを評価してください
```

### レビュー範囲

1. **Astroプロジェクト構成** - プロジェクト構造と設定
2. **Content Collections** - データスキーマとバリデーション
3. **TypeScript** - 型安全性とコード品質
4. **パフォーマンス** - 最適化と読み込み速度
5. **アクセシビリティ** - WCAG準拠とA11y
6. **SEO** - メタデータと検索最適化
7. **CI/CD** - 自動化とデプロイメント
8. **セキュリティ** - 脆弱性と安全性
9. **メンテナンス性** - コードの可読性と保守性
10. **UX** - ユーザー体験の質

### エージェントのカスタマイズ

エージェントの動作をカスタマイズする場合は、`site-reviewer.agent.yml`を編集してください：

```yaml
name: site-reviewer
description: |
  エージェントの説明を記述

instructions: |
  エージェントへの詳細な指示を記述
```

## その他の情報

### GitHub Copilot カスタムエージェントについて
- [GitHub Copilot エージェントドキュメント](https://docs.github.com/en/copilot/customizing-copilot/creating-custom-agents)
- カスタムエージェントはリポジトリ固有のコンテキストと専門知識を提供
- `.github/agents/`ディレクトリに`.agent.yml`ファイルを配置することで自動的に認識されます

### ベストプラクティス
- エージェントは定期的にプロジェクトをレビューする際に使用
- 新機能追加前にレビューを実行して潜在的な問題を特定
- リファクタリング時に現状の評価とガイダンスを取得
- CI/CDパイプラインの改善時に活用
