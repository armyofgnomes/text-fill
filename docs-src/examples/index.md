---
layout: example.11ty.cjs
title: <text-fill> ⌲ Examples ⌲ Basic
tags: example
name: Basic
description: A basic example
---

<style>
  text-fill p {
    border: solid 1px blue;
    padding: 8px;
  }
</style>
<text-fill>
  <p>This is child content</p>
</text-fill>

<h3>CSS</h3>

```css
p {
  border: solid 1px blue;
  padding: 8px;
}
```

<h3>HTML</h3>

```html
<text-fill>
  <p>This is child content</p>
</text-fill>
```
