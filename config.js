const cssFiles = [
    `Components/navBar/navbar.css`,
    `Components/Header/header.css`,
    `Components/Category/category.css`,
    `Components/Footer/footer.css`,
    `Components/RulesSection/rules.css`,
    `Components/aboutUs/about.css`,
    `style.css`
];

const jsFiles = [
    `Components/navBar/navbar.js`,
    'Components/Header/header.js',
    'Components/Category/category.js',
    `Components/RulesSection/rules.js`,
    `Components/aboutUs/about.js`,
    `Components/Footer/footer.js`
];

function cssLoader(file){
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = file;
    document.head.appendChild(link);
}

function jsLoader(file){
    const script = document.createElement('script');
    script.src = file;
    script.defer = true;
    document.body.appendChild(script);
}

cssFiles.forEach(file => cssLoader(file));
jsFiles.forEach(file => jsLoader(file));