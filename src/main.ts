import { parseHtml, parseMd } from "@zrcode/mtc";

fetch("a.md")
  .then((res) => res.text())
  .then((res) => {
    console.log(parseMd(res));
  });

console.log(
  parseHtml(`
  <div>
  aas<div>
  aas12312312
</div>
</div>
<h1>h1</h1>
<h2>h2</h2>
<h3>h3</h3>
<div>
    <h4>h4</h4>
</div>
<div>
aas<div>
aas12312312
</div>
<h5>h5</h5>
<h6>h6</h6>
`)
);
