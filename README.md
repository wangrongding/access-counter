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

目前使用的是免费的 `Vercel KV for Redis`，每天只有 3000 次请求，你可以将此项目自己部署到 `vercel` ，参考下面的步骤。(待完善...)

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=vercel-examples):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fexamples%2Ftree%2Fmain%2Fstorage%2Fkv-redis-starter&project-name=kv-redis-starter&repository-name=kv-redis-starter&demo-title=Vercel%20KV%20for%20Redis%20Next.js%20Starter&demo-description=Simple%20Next.js%20template%20that%20uses%20Vercel%20KV%20for%20Redis%20to%20track%20pageviews.&demo-url=https%3A%2F%2Fkv-redis-starter.vercel.app%2F&demo-image=https%3A%2F%2Fkv-redis-starter.vercel.app%2Fopengraph-image.png&stores=%5B%7B"type"%3A"kv"%7D%5D)

### Clone and Deploy

Clone the repository:

```bash
git clone
```

Install the dependencies:

```bash
pnpm install
```

```bash
cp .env.example .env.local
```

Then open `.env.local` and set the environment variables to match the ones in your Vercel Storage Dashboard.

Next, run Next.js in development mode:

```bash
pnpm dev
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=vercel-examples) ([Documentation](https://nextjs.org/docs/deployment)).
