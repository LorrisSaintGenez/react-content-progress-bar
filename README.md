# React Content Progress Bar

[![Build Status](https://travis-ci.org/LorrisSaintGenez/react-content-progress-bar.svg?branch=master)](https://travis-ci.org/LorrisSaintGenez/react-content-progress-bar) [![dependencies Status](https://david-dm.org/LorrisSaintGenez/react-content-progress-bar/status.svg)](https://david-dm.org/LorrisSaintGenez/react-content-progress-bar) [![devDependencies Status](https://david-dm.org/LorrisSaintGenez/react-content-progress-bar/dev-status.svg)](https://david-dm.org/LorrisSaintGenez/react-content-progress-bar?type=dev) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

**Adaptative Progress Bar for all usage !** ✨

Simple to use and to implement for your blog or website

# Usage

Import the ProgressBar:

```javascript
import ProgressBar from "react-content-progress-bar";
```

You have **seven** parameters available:

- `backgroundColor`: Color of the progress bar background
  - default: transparent
- `callback`: Function to be called when the progress bar reaches the end
  - default: () => {}
- `color`: Color of the progress bar
  - default: white
- `contentRef`: The Ref of the content you want to cover (ie. blog post, article..). (See https://reactjs.org/docs/refs-and-the-dom.html)
  - **REQUIRED**
- `radius` (previously `borderRadius`): Radius of the right border side (top-right and bottom-right) (in **px**)
  - default: 0
- `style`: Style of the progress bar (solid, dashed, dotted..)
  - default: solid
- `thickness` (previously `width`): Thickness of the progress bar (in **px**)
  - default: 1

Use it like this:

```javascript
<ProgressBar
  backgroundColor="rgba(125, 125, 125, 0.8)"
  callback={() => console.log("Reached the end of my document")}
  color="#fff"
  radius={2}
  contentRef={this.myRef}
  style="solid"
  thickness={3}
/>
```

# License

MIT © Lorris Saint-Genez
