(() => {
    const propertyMap = {
        // Margin
        'm': 'margin',
        'mt': 'margin-top',
        'mr': 'margin-right',
        'mb': 'margin-bottom',
        'ml': 'margin-left',
        'mx': 'margin-left margin-right',
        'my': 'margin-top margin-bottom',
        // Padding
        'p': 'padding',
        'pt': 'padding-top',
        'pr': 'padding-right',
        'pb': 'padding-bottom',
        'pl': 'padding-left',
        'px': 'padding-left padding-right',
        'py': 'padding-top padding-bottom',
        // Width and Height
        'w': 'width',
        'h': 'height',
        // Background
        'bg': 'background',
        // Font Size
        'fs': 'font-size',
        // Text Color
        'text': 'color',
        // Flexbox
        'flex': 'display: flex',
        'flex-row': 'flex-direction: row',
        'flex-row-reverse': 'flex-direction: row-reverse',
        'flex-col': 'flex-direction: column',
        'flex-col-reverse': 'flex-direction: column-reverse',
        'flex-wrap': 'flex-wrap: wrap',
        'flex-wrap-reverse': 'flex-wrap: wrap-reverse',
        'flex-nowrap': 'flex-wrap: nowrap',
        'flex-initial': 'flex: 0 1 auto',
        'flex-auto': 'flex: 1 1 auto',
        'flex-none': 'flex: none',
        // Flexbox Alignment
        'justify-start': 'justify-content: flex-start',
        'justify-end': 'justify-content: flex-end',
        'justify-center': 'justify-content: center',
        'justify-between': 'justify-content: space-between',
        'justify-around': 'justify-content: space-around',
        'justify-evenly': 'justify-content: space-evenly',
        'items-start': 'align-items: flex-start',
        'items-end': 'align-items: flex-end',
        'items-center': 'align-items: center',
        'items-baseline': 'align-items: baseline',
        'items-stretch': 'align-items: stretch',
        // Flexbox Self Alignment
        'self-auto': 'align-self: auto',
        'self-start': 'align-self: flex-start',
        'self-end': 'align-self: flex-end',
        'self-center': 'align-self: center',
        'self-stretch': 'align-self: stretch',
        // ... Add other properties as needed

        // Typography
        'font-sans': 'font-family: sans-serif',
        'font-serif': 'font-family: serif',
        'font-mono': 'font-family: monospace',
        'font-hairline': 'font-weight: 100',
        'font-thin': 'font-weight: 200',
        'font-light': 'font-weight: 300',
        'font-normal': 'font-weight: 400',
        'font-medium': 'font-weight: 500',
        'font-semibold': 'font-weight: 600',
        'font-bold': 'font-weight: 700',
        'font-extrabold': 'font-weight: 800',
        'font-black': 'font-weight: 900',
        // ... Add other properties as needed

        // Border
        'border': 'border-width: 1px',
        'border-0': 'border-width: 0',
        'border-t': 'border-top-width: 1px',
        'border-t-0': 'border-top-width: 0',
        'border-r': 'border-right-width: 1px',
        'border-r-0': 'border-right-width: 0',
        'border-b': 'border-bottom-width: 1px',
        'border-b-0': 'border-bottom-width: 0',
        'border-l': 'border-left-width: 1px',
        'border-l-0': 'border-left-width: 0',
        'border-solid': 'border-style: solid',
        'border-dashed': 'border-style: dashed',
        'border-dotted': 'border-style: dotted',
        'border-double': 'border-style: double',
        'border-none': 'border-style: none',
        'border-collapse': 'border-collapse: collapse',
        'border-separate': 'border-collapse: separate',
        // ... Add other properties as needed

        // Rounded Corners
        'rounded-none': 'border-radius: 0',
        'rounded-sm': 'border-radius: 0.125rem',
        'rounded': 'border-radius: 0.25rem',
        'rounded-md': 'border-radius: 0.375rem',
        'rounded-lg': 'border-radius: 0.5rem',
        'rounded-xl': 'border-radius: 0.75rem',
        'rounded-2xl': 'border-radius: 1rem',
        'rounded-3xl': 'border-radius: 1.5rem',
        'rounded-full': 'border-radius: 9999px',
        // ... Add other properties as needed

        // Shadows
        'shadow-sm': 'box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'shadow': 'box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'shadow-md': 'box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'shadow-lg': 'box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'shadow-xl': 'box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'shadow-2xl': 'box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'shadow-inner': 'box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'shadow-outline': 'box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5)',
        // ... Add other properties as needed

        // Z-Index
        'z-auto': 'z-index: auto',
        'z-0': 'z-index: 0',
        'z-10': 'z-index: 10',
        'z-20': 'z-index: 20',
        'z-30': 'z-index: 30',
        'z-40': 'z-index: 40',
        'z-50': 'z-index: 50',
        // ... Add other properties as needed

        // Opacity
        'opacity-0': 'opacity: 0',
        'opacity-25': 'opacity: 0.25',
        'opacity-50': 'opacity: 0.5',
        'opacity-75': 'opacity: 0.75',
        'opacity-100': 'opacity: 1',
        // ... Add other properties as needed

        // Cursor
        'cursor-auto': 'cursor: auto',
        'cursor-default': 'cursor: default',
        'cursor-pointer': 'cursor: pointer',
        'cursor-wait': 'cursor: wait',
        'cursor-text': 'cursor: text',
        'cursor-move': 'cursor: move',
        'cursor-not-allowed': 'cursor: not-allowed',
        // ... Add other properties as needed

        // Overflow
        'overflow-auto': 'overflow: auto',
        'overflow-hidden': 'overflow: hidden',
        'overflow-visible': 'overflow: visible',
        'overflow-scroll': 'overflow: scroll',
        // ... Add other properties as needed

        // Overscroll Behavior
        'overscroll-auto': 'overscroll-behavior: auto',
        'overscroll-contain': 'overscroll-behavior: contain',
        'overscroll-none': 'overscroll-behavior: none',
        'overscroll-y-auto': 'overscroll-behavior-y: auto',
        'overscroll-y-contain': 'overscroll-behavior-y: contain',
        'overscroll-y-none': 'overscroll-behavior-y: none',
        'overscroll-x-auto': 'overscroll-behavior-x: auto',
        'overscroll-x-contain': 'overscroll-behavior-x: contain',
        'overscroll-x-none': 'overscroll-behavior-x: none',
        // ... Add other properties as needed

        // Resize
        'resize-none': 'resize: none',
        'resize-y': 'resize: vertical',
        'resize-x': 'resize: horizontal',
        'resize': 'resize: both',
        // ... Add other properties as needed

        // List Style Type
        'list-none': 'list-style-type: none',
        'list-disc': 'list-style-type: disc',
        'list-decimal': 'list-style-type: decimal',
        // ... Add other properties as needed

        // Object Fit
        'object-contain': 'object-fit: contain',
        'object-cover': 'object-fit: cover',
        'object-fill': 'object-fit: fill',
        'object-none': 'object-fit: none',
        'object-scale-down': 'object-fit: scale-down',
        // ... Add other properties as needed

        // Box Sizing
        'box-border': 'box-sizing: border-box',
        'box-content': 'box-sizing: content-box',
        // ... Add other properties as needed

        // Display
        'hidden': 'display: none',
        'block': 'display: block',
        'inline-block': 'display: inline-block',
        'inline': 'display: inline',
        'table': 'display: table',
        'table-caption': 'display: table-caption',
        'table-cell': 'display: table-cell',
        'table-column': 'display: table-column',
        'table-column-group': 'display: table-column-group',
        'table-footer-group': 'display: table-footer-group',
        'table-header-group': 'display: table-header-group',
        'table-row-group': 'display: table-row-group',
        'table-row': 'display: table-row',
        'flow-root': 'display: flow-root',
        'grid': 'display: grid',
        'inline-grid': 'display: inline-grid',
        'contents': 'display: contents',
        'list-item': 'display: list-item',
        'hidden': 'display: none',
        // ... Add other properties as needed

        // Position
        'static': 'position: static',
        'fixed': 'position: fixed',
        'absolute': 'position: absolute',
        'relative': 'position: relative',
        'sticky': 'position: sticky',
        // ... Add other properties as needed

        // Top, Right, Bottom, Left
        'inset-0': 'top: 0; right: 0; bottom: 0; left: 0',
        'inset-auto': 'top: auto; right: auto; bottom: auto; left: auto',
        // ... Add other properties as needed
        // Visibility
        'visible': 'visibility: visible',
        'invisible': 'visibility: hidden',
        // ... Add other properties as needed

        // Interactivity
        'pointer-events-none': 'pointer-events: none',
        'pointer-events-auto': 'pointer-events: auto',
        'resize-none': 'resize: none',
        'resize-y': 'resize: vertical',
        'resize-x': 'resize: horizontal',
        'resize': 'resize: both',
        'select-none': 'user-select: none',
        'select-text': 'user-select: text',
        'select-all': 'user-select: all',
        'select-auto': 'user-select: auto',
        // ... Add other properties as needed

        // Transition
        'transition-none': 'transition-property: none',
        'transition-all': 'transition-property: all',
        'transition': 'transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
        'transition-colors': 'transition-property: background-color, border-color, color, fill, stroke',
        'transition-opacity': 'transition-property: opacity',
        'transition-shadow': 'transition-property: box-shadow',
        'transition-transform': 'transition-property: transform',
        // ... Add other properties as needed

        // Transition Duration
        'duration-75': 'transition-duration: 75ms',
        'duration-100': 'transition-duration: 100ms',
        'duration-150': 'transition-duration: 150ms',
        'duration-200': 'transition-duration: 200ms',
        'duration-300': 'transition-duration: 300ms',
        'duration-500': 'transition-duration: 500ms',
        'duration-700': 'transition-duration: 700ms',
        'duration-1000': 'transition-duration: 1000ms',
        // ... Add other properties as needed

        // Transition Timing Function
        'ease-linear': 'transition-timing-function: linear',
        'ease-in': 'transition-timing-function: cubic-bezier(0.4, 0, 1, 1)',
        'ease-out': 'transition-timing-function: cubic-bezier(0, 0, 0.2, 1)',
        'ease-in-out': 'transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)',
        // ... Add other properties as needed

        // Transition Delay
        'delay-75': 'transition-delay: 75ms',
        'delay-100': 'transition-delay: 100ms',
        'delay-150': 'transition-delay: 150ms',
        'delay-200': 'transition-delay: 200ms',
        'delay-300': 'transition-delay: 300ms',
        'delay-500': 'transition-delay: 500ms',
        'delay-700': 'transition-delay: 700ms',
        'delay-1000': 'transition-delay: 1000ms',
        // ... Add other properties as needed

        // Animation
        'animate-none': 'animation: none',
        // ... Add other properties as needed

        // Background Blend Mode
        'bg-blend-normal': 'background-blend-mode: normal',
        'bg-blend-multiply': 'background-blend-mode: multiply',
        'bg-blend-screen': 'background-blend-mode: screen',
        'bg-blend-overlay': 'background-blend-mode: overlay',
        'bg-blend-darken': 'background-blend-mode: darken',
        'bg-blend-lighten': 'background-blend-mode: lighten',
        'bg-blend-color-dodge': 'background-blend-mode: color-dodge',
        'bg-blend-color-burn': 'background-blend-mode: color-burn',
        'bg-blend-hard-light': 'background-blend-mode: hard-light',
        'bg-blend-soft-light': 'background-blend-mode: soft-light',
        'bg-blend-difference': 'background-blend-mode: difference',
        'bg-blend-exclusion': 'background-blend-mode: exclusion',
        'bg-blend-hue': 'background-blend-mode: hue',
        'bg-blend-saturation': 'background-blend-mode: saturation',
        'bg-blend-color': 'background-blend-mode: color',
        'bg-blend-luminosity': 'background-blend-mode: luminosity',
        // ... Add other properties as needed

        // Filters
        'filter': 'filter',
        'filter-url': 'filter: url(\'#<filter-name>\')',
        'filter-none': 'filter: none',
        'filter-grayscale': 'filter: grayscale(100%)',
        'filter-invert': 'filter: invert(100%)',
        'filter-sepia': 'filter: sepia(100%)',
        'filter-opacity': 'filter: opacity(<value>)',
        'filter-blur': 'filter: blur(<value>)',
        'filter-brightness': 'filter: brightness(<value>)',
        'filter-contrast': 'filter: contrast(<value>)',
        'filter-drop-shadow': 'filter: drop-shadow(<value>)',
        'filter-grayscale-0': 'filter: grayscale(0)',
        'filter-hue-rotate': 'filter: hue-rotate(<value>)',
        'filter-invert-0': 'filter: invert(0)',
        'filter-saturate': 'filter: saturate(<value>)',
        'filter-sepia-0': 'filter: sepia(0)',
        'backdrop-filter': 'backdrop-filter',
        'backdrop-filter-none': 'backdrop-filter: none',
        'backdrop-filter-blur': 'backdrop-filter: blur(<value>)',
        'backdrop-filter-brightness': 'backdrop-filter: brightness(<value>)',
        'backdrop-filter-contrast': 'backdrop-filter: contrast(<value>)',
        'backdrop-filter-grayscale': 'backdrop-filter: grayscale(100%)',
        'backdrop-filter-hue-rotate': 'backdrop-filter: hue-rotate(<value>)',
        'backdrop-filter-invert': 'backdrop-filter: invert(100%)',
        'backdrop-filter-opacity': 'backdrop-filter: opacity(<value>)',
        'backdrop-filter-saturate': 'backdrop-filter: saturate(<value>)',
        'backdrop-filter-sepia': 'backdrop-filter: sepia(100%)',
        'backdrop-filter-blur-0': 'backdrop-filter: blur(0)',
        'backdrop-filter-brightness-100': 'backdrop-filter: brightness(100%)',
        'backdrop-filter-contrast-100': 'backdrop-filter: contrast(100%)',
        'backdrop-filter-grayscale-0': 'backdrop-filter: grayscale(0)',
        'backdrop-filter-hue-rotate-0': 'backdrop-filter: hue-rotate(0)',
        'backdrop-filter-invert-0': 'backdrop-filter: invert(0)',
        'backdrop-filter-opacity-100': 'backdrop-filter: opacity(100%)',
        'backdrop-filter-saturate-100': 'backdrop-filter: saturate(100%)',
        'backdrop-filter-sepia-0': 'backdrop-filter: sepia(0)',
        // ... Add other properties as needed
        'tra':"transition"
    };

    const reset = `html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        box-sizing: border-box;
    }
    * {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }`

    function convertCssAttributeToCssString(cssAttribute) {
        const regex = /(\w+):{(\w+:.+)}/;
        const matches = cssAttribute.trim().match(regex);


        if (!matches || matches.length !== 3) {
            return '';
        }

        const className = matches[1];
        const cssProperties = matches[2].split(';');

        let listCss = []
        let cssString = `.${className} {`;

        for (const cssProperty of cssProperties) {
            const [property, value] = cssProperty.split(':');
            const cssPropertyName = getPropertyFullName(property.trim());
            cssString += `${cssPropertyName}:${value.trim()};`;
        }

        listCss.push(cssString + '}')

        let events = cssProperties.join(",").match(/\((.*?)\)->(.*?):((.*?)(?=\(|$))/g);


        if (events) {
            for (const event of events) {
                let getEvent = event.match(/\((.*?)\)/g)[0].split("(")[1].split(")")[0];
                let cssnotCovert = event.match(/(\w+:.+)/)[0].split(")")[0]
                let cssProperties = cssnotCovert.split(",")
                let cssHoverValue = ""
                for (const cssProperty of cssProperties) {
                    const [property, value] = cssProperty.split(':');
                    cssHoverValue += (`${propertyMap[property]}:${value};`);
                }

                listCss.push(`.${className}:${getEvent} {${cssHoverValue}}`);
            }
        }


        return listCss.join(" ").replace(/\((.*?)\)->\(.*?\);/g,"");
    }

    function getPropertyFullName(property) {
        return propertyMap[property] || property;
    }

    document.addEventListener('DOMContentLoaded', function () {
        const elements = document.querySelectorAll('[css]');
        let styleTag = document.createElement("style")
        let styleValue = ""
        styleValue += reset.replace(/\s+/g, ' ')

        for (const element of elements) {
            const cssAttribute = element.getAttribute('css');
            const getStringCssToList = cssAttribute.replace(/\s+/g, ' ').split("}")
            getStringCssToList.pop("")

            let pNames = ""
            for (const item of getStringCssToList) {
                let cssString = convertCssAttributeToCssString(item.trim() + "}")
                styleValue += cssString
                let pName = item.split(":")[0]
                let classesByValue = pName.trim().split(" ").slice(0, pName.trim().split(" ").length - 1)
                for (const classvalue of classesByValue) {
                    styleValue += `.${classvalue}{${propertyMap[classvalue]}}`
                }

                pNames += pName
                console.log(pNames);
                element.setAttribute("class", (element.getAttribute("class") ?? "" + " " + pNames).trim())
            }

            element.removeAttribute('css');
        }

        styleTag.innerHTML = styleValue
        document.head.appendChild(styleTag);
    });
})();
