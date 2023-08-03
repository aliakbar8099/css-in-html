(() => {
    function convertCssAttributeToCssString(cssAttribute) {
        const regex = /(\w+):{(\w+:.+)}/;
        const matches = cssAttribute.trim().match(regex);

        if (!matches || matches.length !== 3) {
            return '';
        }

        const className = matches[1];
        const cssProperties = matches[2].split(';');
        const cssProperties2 = cssProperties[0].split(/:\s*([^:]+)\s*(?:;|$)/)

        // Error handling
        if (cssProperties2[0] !== cssProperties2[0].at(-1)) {
            console.error(`There is an error in class ${className} \n Before ${cssProperties2[0].at(-1)} symbol ; not defined \n \n ${cssAttribute}`);
        }
        let cssString = `.${className} {`;

        for (const cssProperty of cssProperties) {
            const [property, value] = cssProperty.split(':');
            const cssPropertyName = getPropertyFullName(property.trim());
            cssString += `${cssPropertyName}:${value.trim()};`;
        }

        cssString += '}';

        return cssString;
    }

    function getPropertyFullName(property) {
        const propertyMap = {
            'm': 'margin',
            'p': 'padding',
            'w': 'width',
            "bg": 'background',
            // Add other properties as needed
        };

        if (!propertyMap[property]) {
            console.error(`Property ${property} is not defined`);
        }

        return propertyMap[property] || property;
    }

    document.addEventListener('DOMContentLoaded', function () {
        const elements = document.querySelectorAll('[css]');
        
        for (const element of elements) {
            const cssAttribute = element.getAttribute('css');
            
            const getStringCssToList = cssAttribute.replace(/\s+/g, ' ').split("}")
            getStringCssToList.pop("")
            
            
            const styleTag = document.createElement('style');
            
            let pNames = ""
            for (const item of getStringCssToList){
                let cssString = convertCssAttributeToCssString(item.trim() + "}")
                let css = styleTag.innerHTML + cssString;
                styleTag.innerHTML = css
                let pName = item.split(":")[0]
                pNames += pName
                element.setAttribute("class" , pNames.trim())
            }

            document.head.appendChild(styleTag);
            element.removeAttribute('css');
        }
    });
})();
