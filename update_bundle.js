import fs from 'fs';

let content = fs.readFileSync('public/assets/main-C4wMT6m4.js', 'utf8');

// Replace Lenis scroll settings to be calm and controlled
content = content.replace(/this\.lenis=new Vg\(\{.+?\}\)/, 'this.lenis=new Vg({lerp:.055,wheelMultiplier:.38,touchMultiplier:.48,autoRaf:!1})');

fs.writeFileSync('public/assets/main-C4wMT6m4.js', content, 'utf8');
console.log('Successfully updated Lenis settings to lerp:.055, wheelMultiplier:.38, touchMultiplier:.48');
