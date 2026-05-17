# VR / XR Portfolio

中文 VR / XR 求职作品集网站，使用 Vite、React 和 TypeScript 构建。网站内容集中放在数据文件里，后续添加项目、替换图片或修改文案时不需要改组件结构。

## 本地运行

```bash
npm install
npm run dev
```

开发预览地址是 `http://127.0.0.1:5173`。这个命令会启动本地网站，适合边改边看。

## 生产构建

```bash
npm run build
npm run preview
```

`npm run build` 只会生成 `dist/`，不会自动打开或启动网站。这是正常行为，也是 Vercel 需要的输出目录。

构建后要在本地查看生产版本，请继续运行：

```bash
npm run preview
```

然后打开 `http://127.0.0.1:4173`。

## 修改内容

主要内容都在 `src/data/portfolioData.ts`：

- `profile`：姓名、方向、地点、邮箱、首页介绍和首页标签。
- `skillGroups`：技能分组。
- `projects`：项目卡片、项目详情、素材占位和真实素材路径。

最常改的地方：

- 改首页名字、简介、邮箱：改 `profile`。
- 改技能卡片：改 `skillGroups`。
- 改项目顺序：页面会按每个项目的 `timeline` 起始时间自动倒序排序。
- 新增项目：复制一个完整项目对象，改 `id`、标题、摘要、详情和 `media`。
- 替换截图 / GIF / 视频：把文件放进 `public/assets/`，再在项目的 `media` 里加 `src`。

添加新项目时，复制 `projects` 数组里的任意一个项目对象，修改：

- `id`：使用英文小写和连字符，例如 `new-vr-demo`。
- `title` / `subtitle` / `summary` / `role`：项目标题和摘要。
- `tags`：技术关键词。
- `sections`：详情内容。
- `media`：需要补充或展示的截图、GIF、视频、流程图。

组件会自动读取数据并渲染，不需要改 `src/App.tsx`。

## 替换图片、GIF 或视频

把素材放到 `public/assets/`，例如：

```text
public/assets/sugarpaintvr-demo.gif
public/assets/ar-dr-highlight.png
public/assets/fire-prototype-video.mp4
```

当前版本先使用文字占位，不伪造项目截图。后续要显示真实素材，只需要在 `portfolioData.ts` 的 `media` 里加入 `src`：

```ts
media: [
  {
    label: "绘制糖画过程截图",
    kind: "image",
    src: "/assets/sugarpaintvr-drawing.png",
    alt: "SugarPaintVR 中绘制糖画的过程截图"
  },
  {
    label: "灭火过程短视频",
    kind: "video",
    src: "/assets/fire-prototype-demo.mp4"
  }
]
```

支持的 `kind` 包括 `image`、`gif`、`video` 和 `diagram`。只要不写 `src`，页面就继续显示占位。

## 部署到 Vercel

1. 将项目上传到 GitHub。
2. 在 Vercel 新建项目并选择这个仓库。
3. Vercel 设置：
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. 部署完成后即可获得线上链接。

项目包含 `vercel.json`，用于让单页应用在刷新或直接访问路径时回到 `index.html`。

## 维护建议

- 项目事实、文案和标签只改 `src/data/portfolioData.ts`。
- 真实截图和视频只放 `public/assets/`。
- 样式统一在 `src/styles.css` 修改。
- 不建议把长文案直接写进组件，避免后续维护困难。
