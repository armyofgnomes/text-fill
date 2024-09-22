---
layout: page.11ty.cjs
title: <text-fill> ⌲ Home
---

# &lt;text-fill>

`<text-fill>` is an awesome element. It's a great introduction to building web components with LitElement, with nice documentation site as well.

## As easy as HTML

<section class="columns">
  <div>

`<text-fill>` is just an HTML element. You can it anywhere you can use HTML!

```html
<text-fill></text-fill>
```

  </div>
  <div>

<text-fill></text-fill>

  </div>
</section>

## Configure with attributes

<section class="columns">
  <div>

`<text-fill>` can be configured with attributed in plain HTML.

```html
<text-fill name="HTML"></text-fill>
```

  </div>
  <div>

<text-fill name="HTML"></text-fill>

  </div>
</section>

## Declarative rendering

<section class="columns">
  <div>

`<text-fill>` can be used with declarative rendering libraries like Angular, React, Vue, and lit-html

```js
import {html, render} from 'lit-html';

const name = 'lit-html';

render(
  html`
    <h2>This is a &lt;text-fill&gt;</h2>
    <text-fill .name=${name}></text-fill>
  `,
  document.body
);
```

  </div>
  <div>

<h2>This is a &lt;text-fill&gt;</h2>
<text-fill name="lit-html"></text-fill>

  </div>
</section>
