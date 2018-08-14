/**
 * Copyright (c) 2018-present, White Town s.r.o.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Toast from 'react-native-root-toast'

import { getTheme } from 'whitetown-ui'

var toast = null

export default function showToast(message, toastStyle, options = {}) {

    const theme = options.theme||getTheme()

    let bgColor    = theme['color.bg'][toastStyle] || {}
    let textColor  = theme['color.fg.inner'][toastStyle] || {}

    toast && toast.destroy()
    toast = Toast.show(message, {
        shadow: true,
        animation: true,
        hideOnPress: true,
        duration: options.duration || 3000,
        position: options.position || 100,
        backgroundColor: bgColor.backgroundColor,
        textColor: textColor.color,
        containerStyle: { minWidth:300, alignItems:'flex-start' },
        textStyle:      { textAlign:'left' },
        delay: 0,
        onShow: () => {
            // calls on toast\`s appear animation start
        },
        onShown: () => {
            // calls on toast\`s appear animation end.
        },
        onHide: () => {
            // calls on toast\`s hide animation start.
        },
        onHidden: () => {
            // calls on toast\`s hide animation end.
            toast && toast.destroy()
            toast = null
        }
    })

}
