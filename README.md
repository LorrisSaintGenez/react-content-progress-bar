# React Content Progress Bar

[![Build Status](https://travis-ci.org/LorrisSaintGenez/react-content-progress-bar.svg?branch=master)](https://travis-ci.org/LorrisSaintGenez/react-content-progress-bar) [![dependencies Status](https://david-dm.org/LorrisSaintGenez/react-content-progress-bar/status.svg)](https://david-dm.org/LorrisSaintGenez/react-content-progress-bar) [![devDependencies Status](https://david-dm.org/LorrisSaintGenez/react-content-progress-bar/dev-status.svg)](https://david-dm.org/LorrisSaintGenez/react-content-progress-bar?type=dev) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

**Adaptative Progress Bar for all usage !** ✨

Simple to use and to implement for your blog or website

# Usage

Import the ProgressBar:

```javascript
import ProgressBar from "react-content-progress-bar";
```

You have **four** parameters available:

- `color`: Color of the progress bar
  - default: white
- `style`: Style of the progress bar (solid, dashed, dotted..)
  - default: solid
- `width`: Width of the progress bar
  - default: 1
- `ref`: The Ref of the content you want to cover (ie. blog post, article..). (See https://reactjs.org/docs/refs-and-the-dom.html)
  - **REQUIRED**

Use it like this:

```javascript
<ProgressBar color="#fff" style="solid" width={3} ref={this.myRef} />
```

# License

MIT © Lorris Saint-Genez
