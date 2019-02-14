# React Progress Bar

[![Build Status](https://travis-ci.org/LorrisSaintGenez/react-content-progress-bar.svg?branch=master)](https://travis-ci.org/LorrisSaintGenez/react-content-progress-bar) [![dependencies Status](https://david-dm.org/LorrisSaintGenez/react-content-progress-bar/status.svg)](https://david-dm.org/LorrisSaintGenez/react-content-progress-bar) [![devDependencies Status](https://david-dm.org/LorrisSaintGenez/react-content-progress-bar/dev-status.svg)](https://david-dm.org/LorrisSaintGenez/react-content-progress-bar?type=dev) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

**Adaptative Progress Bar for all usage !** ✨

Simple to use and to implement for your blog or website

# Usage

Import the ProgressBar:

```javascript
import ProgressBar from "react-content-progress-bar";
```

You have **three** parameters available:

- `width`: Width of the progress bar
- `color`: Color of the progress bar
- `ref`: The Ref of the content you want to cover (ie. blog post, article..). (See https://reactjs.org/docs/refs-and-the-dom.html)

Use it like this:

```javascript
<ProgressBar width={3} color="#fff" ref={this.myRef} />
```

# License

MIT © Lorris Saint-Genez
