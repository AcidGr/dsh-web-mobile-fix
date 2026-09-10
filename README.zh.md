# dsh-web-mobile-fix

[English](README.md) | **简体中文**

[DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) Web UI 的移动端布局修复插件。

纯客户端 CSS 覆盖层，在窄屏（视口 ≤700px）下修复最影响使用的移动端问题，完全不改动产品源码：

- 设置面板改为全屏纵向布局，不再被挤成桌面布局
- 侧边栏打开时悬浮显示，不再挤压对话区
- 设置页导航单行自适应排版
- 输入框操作栏单行自适应排版，防止窄屏下按钮折行分层

## 工作原理

插件带一个浏览器端（`exports["./client"]`，通过 `dsh.client.platform: "web"` 声明），由 client-modules 扫描器发现并随启动清单加载。它注入一个 `<style>` 标签，内容是针对产品稳定 `data-slot` 属性的 `@media (max-width: 700px)` 覆盖；插件卸载时标签自动移除——完全可逆。

## 兼容性

- 需要 Harness Web profile（`dsh --profile web`），0.1.x 系列均可
- 选择器针对产品槽位契约，同版本线内稳定；产品大改版后可能需要小幅调整

## 安装

### 方式一：直接发给你的 DSH（最省心 🤖）

直接在 DSH 网页对话框中把本仓库链接发给 AI，并附上指令：
> “帮我安装这个插件：https://github.com/AcidGr/dsh-web-mobile-fix”

DSH Agent 会自动在后台执行安装命令并完成配置。

### 方式二：CLI 命令行安装（推荐）

直接从 npm 安装：

```sh
dsh plugin --profile web add dsh-web-mobile-fix
```

（本地开发或不想走 npm 时，也支持直接使用 GitHub 仓库地址：

```sh
dsh plugin --profile web add github:AcidGr/dsh-web-mobile-fix
```
）

安装完成后，刷新浏览器页面即可生效。

### 方式三：手动安装（离线 / 无 pnpm）

```sh
PROFILE="$DSH_HOME/profiles/web"                 # 按实际修改 DSH_HOME 和 profile 名
mkdir -p "$PROFILE/plugins" "$PROFILE/node_modules/@dsh-profile"
cp -r dsh-web-mobile-fix "$PROFILE/plugins/mobile-fix"
ln -sfn ../../plugins/mobile-fix "$PROFILE/node_modules/@dsh-profile/mobile-fix"
# 在 $PROFILE/cordis.patch.yml 追加：
#   - insert:
#       - id: mobile-fix
#         name: '@dsh-profile/mobile-fix'
```

## 验证

用手机或在电脑上将窗口缩至手机宽度（≤700px）打开 Web UI：
- 点击左上角鲸鱼图标展开侧边栏，将以浮层抽屉形式展开，不再挤压对话正文，点击右侧空白处自动收起；
- 输入框底部的操作按钮与发送按钮在同一行整齐对齐，不会折行分层；
- 设置面板以全屏纵向形式展示，顶部导航标签支持水平自适应滑动。

## 回滚

- bundle 安装：`dsh plugin --profile web remove dsh-web-mobile-fix`
- 手动安装：删掉 `cordis.patch.yml` 里的 `mobile-fix` insert 块（插件目录可留可删）

不修改任何产品源码，升级不覆盖、无残留。

## 许可证

MIT
