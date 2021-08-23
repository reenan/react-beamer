### React Beamer
----
Simple wrapper to simplify integration with [Beamer](https://www.getbeamer.com/).

You can choose to use a function `beamerInitialize` or a wrapper for [React Helmet](https://github.com/nfl/react-helmet).


#### Usage:

```
import { BeamerHelmet } from 'react-beamer';

[...]

<BeamerHelmet id={productId} url={url} args={args} />

```

```

import { beamerInitialize } from 'react-beamer';

[...]

beamerInitialize(productId, url, args);

```
:tada:

### License
---
MIT

