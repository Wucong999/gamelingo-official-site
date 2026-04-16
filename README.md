# GameLingo 官网（静态站点）

这是一个**纯静态**官网项目（不需要安装依赖）。核心页面是 `index.html`，其它页面有 `download.html`、`faq.html`、`privacy.html`、`terms.html`。

## 如何本地预览（不会写代码也能做）

### 方法 A：直接双击打开（最简单）
- 直接用浏览器打开 `index.html` 即可预览。
- 注意：有些浏览器对本地文件的脚本/跨文件请求有限制；如果你看到某些功能不生效，用下面的方法 B。

### 方法 B：用本地静态服务器（推荐）
如果你电脑装了 Node.js，可以在项目根目录打开终端运行：

```bash
npx serve .
```

然后在浏览器里打开它输出的本地地址。

## 移动端适配在哪里改

首页的样式在 `index.html` 的 `<style>` 里，主要响应式断点：
- `@media (max-width:980px)`：平板/小屏笔记本开始变成单列布局
- `@media (max-width:640px)`：**手机主断点**（修复导航挤压、Hero demo 两列导致溢出、价格区块等）
- `@media (max-width:420px)`：超窄屏手机进一步优化（按钮/下拉改成满宽）

如果你想改文案：
- 首页大部分文字在 `index.html` 里
- 英文/中文切换的文案在 `scripts/site.js` 里（`i18n` 对象）

## 修改浏览器 Tab 图标（favicon）

本项目已把 `assets/logo.svg` 设置为全站 favicon（`index.html / download.html / faq.html / privacy.html / terms.html`），并新增了 `site.webmanifest`（更利于“添加到桌面/收藏”场景的图标展示）。

你要换图标时：
- 直接替换 `assets/logo.svg` 文件内容即可（保持文件名不变）。
- 若想“尽量兼容所有浏览器/设备”（尤其 iOS 的桌面图标）：建议额外准备
  - `favicon.ico`
  - `apple-touch-icon.png`（建议 180x180）
  - `favicon-32x32.png`、`favicon-16x16.png`
  然后我可以把它们也接进页面（当前我们用 SVG 做 best-effort，已经覆盖主流桌面浏览器）。

## 让别人用“游戏翻译 / RPG翻译工具”等词能搜到官网（SEO/收录）

代码侧我们已经做了这些基础工作：
- 每个页面都有 `title` + `meta description`（搜索结果展示用）
- 添加了 `meta robots`
- 添加了基础分享卡片信息（OG / Twitter）
- 根目录新增了 `robots.txt` 与 `sitemap.xml`

你上线域名后还需要做 3 件事（非常重要）：
- **把域名写进 `robots.txt` 和 `sitemap.xml`**
  - 已替换为 `https://www.gamelingo.cn/`
- **提交到搜索引擎**
  - Google：Search Console 里添加站点 → 验证域名 → 提交 `sitemap.xml`
  - Bing：Bing Webmaster Tools 做同样操作
- **在首页文案里出现你希望被搜到的词**
  - 比如“游戏翻译”“实时汉化”“RPG 翻译工具”“Unity 游戏翻译”等，最好出现在首页的主标题/副标题/核心功能描述里（搜索引擎更看重这些位置）

## 这次做了什么（移动端优化）
- 首页新增更细的手机断点（`640px / 420px`），避免手机端溢出、挤压、错位
- `价格方案` 由桌面端三列展示，手机端自动变成单列（不再排版乱）
- Hero 右侧演示区域在手机端改为更稳定的单列展示，并降低动画位移避免跑出屏幕

## 反思与可改进点

- **SEO 进一步提升**：可以给每个页面加 `canonical`（需要你确定最终域名），以及为下载页增加“版本更新日志/更新频率”内容，让页面更“有信息量”，更容易长期排到前面。
- **favicon 兼容性**：SVG favicon 已经能在主流浏览器生效；如果你希望在所有场景都一致，建议补 `favicon.ico` 与 Apple Touch Icon（png）。

