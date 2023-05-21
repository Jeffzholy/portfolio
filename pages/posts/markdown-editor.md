- 打造一个好用的 markdown 编辑器 (显示 markdown 的,然后试着是整个编辑器的,最后看能否发布个 snippet 到 vscode 的 store 去)

- <https://thisdavej.com/build-an-amazing-markdown-editor-using-visual-studio-code-and-pandoc/>

  - 有关 snippet 和 markdown snippet
    1. 首先是安利这个 <https://marketplace.visualstudio.com/items?itemName=robole.snippets-ranger> 可以在一个地方管理所有的 snippet
    2. 当然还有这个 <https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced> 用于更好的 preview markdown 中的内容
    3. 也看来这个 <https://marketplace.visualstudio.com/items?itemName=robole.markdown-snippets> ,但是自己的用途不是 table,所以不采用,而是自己定义 snippet -- 可以先是自己定义的 snippet, 马上之后就是 vscode extension 了

- markdown lint 选择 1 <https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint>, 可以将 markdownlint 配置到 prettier 中,然后再将 prettier 配置到 eslint 中, 再在 eslint 中配置各种其他的内容来作为一个大工具来 lint 和 format 所有代码
- markdown 中的 code 内容的 lint <https://www.npmjs.com/package/eslint-plugin-markdown>
- mdx 中 code 内容的 lint <https://www.npmjs.com/package/eslint-plugin-mdx>

- project based settings: 安装 prettier 在 project 中,然后也同时安装 vscode 的 prettier 插件,插件的好处是,优先读取项目中的 config,然后在比如粘贴代码或者在 editor 中 key binding 可以快速的 format 代码, 因为如果没有安装插件,通过 cli 配合 git hook 当然是可以 format 的,但是插件可以随手 format,省去了提交的时候可能长时间的运行

- prettier 在 nextra 带的规则在 package.json 中,移动到了 prettierrc 文件中了

- 再安装 eslint,然后要配置 eslint, 首先根据 next 官方对 eslint 指导 <https://nextjs.org/docs/pages/building-your-application/configuring/eslint> 安装 eslint 和基本的 extends:next, 然后就是在 package.json 中加入 lint script 即可,剩下的工作就又是回到 eslint 的配置工作了

- 利用 markdownlint 来 lint markdown file 的 <https://blog.joshuakgoldberg.com/configuring-markdownlint-alongside-prettier/>
