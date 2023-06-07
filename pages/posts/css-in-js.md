---
title: CSS-in-JS and its SSR strategies
date: 2023/04/04
description: What is CSS-in-JS and its SSR strategies
tag: tech
author: Jeff Zhang
---

# CSS-in-JS and its SSR strategies

This is an brief introduction to CSS-in-JS and its SSR strategies. For more detailed explanations, please refer to the provided references.

> TL;DR CSS-in-JS has more advantages than disadvantages, making it a strategy worth considering and trying out.

## What is css-in-js

In a nutshell, CSS-in-JS is a set of ideas used to solve complex CSS problems by utilizing JavaScript and APIs instead of relying on conventions.

## Pros

CSS-in-JS **decouples subsystems (css)** and makes it easier to modify and remove internal implementation details (from another point of view, **couples html, js and css into a component**), ensuring that unused CSS rules (dead css) do not negatively impact site performance. It allows for **state-based styling**, enabling the expression of complex UX logic through conditionals, functions, and variables.

CSS-in-JS automates **scoping by generating unique selectors to prevent style leakage** and promotes explicit and granular dependencies through code-based variables. CSS-in-JS encourages a one-to-one relationship between CSS and HTML, making it easier to manage and understand the styles used by the currently rendered HTML.

It also tackles non-deterministic source order specificity, ensuring a clear connection between CSS rules and HTML elements.

To sum up pros, by adopting CSS-in-JS, developers can create **more maintainable CSS code that is tightly coupled with HTML**, resulting in improved code readability and reusability.

## Tradeoffs

### Runtime cost

CSS will be generated from JS in CSS-in-JS strategy, runtime cost demands attention. I am more interested in this topic, and I will be primarily focusing on this topic.

#### Runtime generation only

This strategy involves **generating a CSS string in JavaScript and injecting it into the document** using a style tag. This technique produces a Style Sheet.

This technique is suitable for applications that require user interactions before becoming useful and work with dynamic content that quickly becomes outdated. By using placeholders and other tricks, the perceived performance of such applications can be improved to provide a more instant user experience.

However, this approach may not be ideal for applications that need to provide styled content at the early loading stage.

#### Runtime generation with Critical CSS

This strategy involves **styling the page with the critical CSS** (minimal amount of CSS needed to style the initial state of a page).

This technique is commonly used with and without CSS-in-JS, but it may result in double-loading CSS rules. Critical CSS size can vary based on content, and caching is usually not possible.

However, runtime generating CSS from JavaScript may negatively impact performance on older devices. The tradeoff lies in the cost of Critical CSS extraction and runtime CSS generation.

#### Build-time extraction only

This strategy is a default approach used in web development. This strategy involves **extracting static CSS at build time, resulting in no runtime overhead**.

However, there are two tradeoffs: limited access to dynamic CSS-in-JS APIs and CSS custom properties. Additionally, without Critical CSS and with an empty cache, the first paint may be blocked until the CSS bundle is loaded, and non-deterministic specificity can occur in single-page applications with page-based bundle splitting.

#### Build-time extraction with Critical CSS

This strategy offers optimal performance for static applications.

By **moving the blocking link tag to the bottom** of the document, this approach maintains the tradeoffs of static CSS but improves performance.

### More

There are many tradeoffs that have been discussed in other blog posts on CSS-in-JS, therefore, I will not go into details. I will exclusively list some of the specific issues of CSS-in-JS without delving into common problem of the CSS world.

- The cost of Critical CSS extraction with Server-side Rendering

- No interoperability: styles written using one library can’t be rendered using a different library

- Security risks

- Unreadable class names

There are many posts marking "steep learning curve" is one of the cons of CSS-in-JSS, which I can't agree with. From a frontend developer perspective, writing CSS-in-JS is basically the same with writing CSS.

## What are Emotion and styled-components SSR strategies

There are more websites are using framework like Next.js or Nuxt, one of the main reasons is that it can improve the website’s performance by reducing the time it takes for the website to load.

Emotion and styled-components are two popular CSS-in-JS libraries, let's have a close look of their SSR strategies.

### Emotion

There are two approaches.

1. Call React's `renderToString` or `renderToNodeStream` to generate the html string of the document directly. The output of the CSS-in-JS will be a `<style />` tag right before the element tag. (**build time only**)
2. Extract critical CSS and place them inside of the `<head />`tag of the html string on the server side. Hydrate the HTML contents on the client side via a provider. (**runtime generation with Critical CSS**)

### styled-components

styled-components extracts the styles from the rendered components and inject them into the html string response. Hydrate the HTML contents on the client side via a provider. (**build time only + runtime generation**)

---

- refs:
  1. [What actually is CSS-in-JS?](https://medium.com/dailyjs/what-is-actually-css-in-js-f2f529a2757)
  2. [The tradeoffs of CSS-in-JS](https://medium.com/free-code-camp/the-tradeoffs-of-css-in-js-bee5cf926fdb)
  3. [An Introduction to CSS-in-JS: Examples, Pros, and Cons](https://webdesign.tutsplus.com/articles/an-introduction-to-css-in-js-examples-pros-and-cons--cms-33574)
  4. [Oh No! Our Stylesheet Only Grows and Grows and Grows! (The Append-Only Stylesheet Problem)](https://css-tricks.com/oh-no-stylesheet-grows-grows-grows-append-stylesheet-problem/)
  5. [Extract critical CSS](https://web.dev/i18n/en/extract-critical-css/)
  6. [The Differing Perspectives on CSS-in-JS](https://css-tricks.com/the-differing-perspectives-on-css-in-js/)
  7. [Refactoring an alert component from CSS to CSS-in-JS](https://alert-refactor.netlify.app/)
  8. [CSS-in-JS：一个充满争议的技术方案](https://www.infoq.cn/article/95ojp6upti9vsyfsw2xz)
  9. [CSS-in-JS Playground](https://css-in-js-playground.com)
  10. [Emotion - Server Side Rendering](https://emotion.sh/docs/ssr)
  11. [Styled-components Server Side Rendering](https://styled-components.com/docs/advanced#server-side-rendering)
