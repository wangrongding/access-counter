# Access Counter

<p align="center">
  <a href="https://github.com/wangrongding" target="_blank" rel="noopener noreferrer">
    <img width="800" src="https://raw.githubusercontent.com/wangrongding/image-house/master/202305051430286.png" alt="access-counter">
  </a>
</p>

> 一个 github profile 访问计数器，基于 moe-counter。

使用 [Vercel KV for Redis](https://vercel.com/kv) 记录浏览量。

## Website

[access-counter](https://access-counter.vercel.app/)

## How to Use

Demo: 点击：[→ 查看示例](https://github.com/wangrongding)

<p align="center">
  <a href="https://github.com/wangrongding" target="_blank" rel="noopener noreferrer">
    <img width="800" src="https://raw.githubusercontent.com/wangrongding/image-house/master/202305051509482.png" alt="access-counter">
  </a>
</p>

在你的 github profile 中插入 img 或者 markdown 即可。

SVG address:

```
https://access-counter.vercel.app/api/counter?name=github-username
```

Img tag:

```html
<img src="https://access-counter.vercel.app/api/counter?name=github-username" />
```

Markdown:

```markdown
![](https://access-counter.vercel.app/api/counter?name=github-username)
```

| 请求参数 | -                  |
| -------- | ------------------ |
| name     | github 用户名      |
| theme    | 主题（001-006）    |
| length   | 长度（显示几个图） |

默认：

```
https://access-counter.vercel.app/api/counter?name=access-counter&theme=001&length=7
```

### One-Click Deploy

目前使用的是免费的 `Vercel KV for Redis`，每天只有 3000 次请求，你可以将此项目自己部署到 `vercel` ，点击下面按钮，快速部署。

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/wangrongding/access-counter&project-name=access-counter&repository-name=access-counter&demo-title=Github%20profile%20access%20counter&demo-description=%E4%B8%80%E4%B8%AA%20github%20profile%20%E8%AE%BF%E9%97%AE%E8%AE%A1%E6%95%B0%E5%99%A8.&demo-url=https://access-counter.vercel.app/&demo-image=https://access-counter.vercel.app/site.png&stores=%5B%7B%22type%22:%22kv%22%7D%5D)

设置好名称后，创建一个 KV Database
![](https://raw.githubusercontent.com/wangrongding/image-house/master/202305051754046.png)

然后就可以了。

### Clone and Deploy

Clone the repository:

```bash
git clone
```

Install the dependencies:

```bash
pnpm install
```

Install Vercel CLI:

```bash
pnpm i -g vercel
```

Link your project to Vercel:

```bash
vercel link
```

Download your KV environment variables:

```bash
vercel env pull .env.development.local
```

![](https://raw.githubusercontent.com/wangrongding/image-house/master/202305061013955.png)

Or open `.env.development.local` and set the environment variables to match the ones in

```bash
cp .env.example .env.development.local
```

![](https://raw.githubusercontent.com/wangrongding/image-house/master/202305051751071.png)

Next, run Next.js in development mode:

```bash
pnpm dev
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=vercel-examples) ([Documentation](https://nextjs.org/docs/deployment)).
