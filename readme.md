# whitetown-ui-toast

This is a simple function which uses
[react-native-root-toast](https://github.com/magicismight/react-native-root-toast)
[whitetown-ui](https://github.com/whitetown/whitetown-ui)

So, it just displays the original toast and stilyze it with ``whitetown-ui``

I decided to keep it outside of ``whitetown-ui``:
``react-native-root-toast`` depends on other modules and it could be not acceptable for somebody else.

## installation

Installation can be done through ``npm`` or `yarn`:

```shell
npm i whitetown-ui-toast --save
```

```shell
yarn add whitetown-ui-toast
```

## Usage

```jsx
import showToast from 'whitetown-ui-toast'

// display default toast:

showToast('Message')

// display success toast using default theme:

showToast('Message', 'success')

// display danger toast using custom theme:

showToast('Message', 'danger', { theme: this.props.theme } )

```

## License

This project is licenced under the [MIT License](http://opensource.org/licenses/mit-license.html).
