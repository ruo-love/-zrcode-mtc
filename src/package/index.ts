type Mtc = Array<{ id: string; key: string; label: string; level?: number }>;

/**
 * 解析html文本 生成目录数组，和锚点id
 * @param html
 * @returns
 */
export function parseHtml(html: string): {
  mtc: Mtc;
  content: string;
} {
  if (!html) return { mtc: [], content: "" };
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = html;
  const headings = tempDiv.querySelectorAll("h1, h2, h3, h4, h5, h6");
  const mtc: Mtc = [];
  headings.forEach(function (heading, index) {
    const tagName = heading.tagName.toLowerCase();
    const id = tagName + "-" + (index + 1);
    heading.id = id;
    const label = heading.textContent as string;
    const level = parseInt(tagName.substring(1));
    const item = { id, key: id, label, level };
    mtc.push(item);
  });

  return { mtc, content: tempDiv.innerHTML };
}

/**
 * 解析md文本 生成目录数组，和锚点id
 * @param md
 * @returns
 */

export function parseMd(md: string): {
  mtc: Mtc;
  content: string;
} {
  const headings = md.match(/#{1,6} .+/g);
  const mtc: Mtc = [];
  let newMdtext = md;
  if (!headings) return { mtc, content: newMdtext };
  headings.forEach(function (heading: string, index: number) {
    const match=heading.match(/#{1,6}/g);
    const tagName = match?match[0]:"";
    const id = tagName + "-" + (index + 1);
    const label = heading.replace(/#{1,6} /g, "");
    const item = { id, key: id, label };
    newMdtext = newMdtext.replace(heading, `${heading} <a id="${id}"></a>`);
    mtc.push(item);
  });

  return { mtc, content: newMdtext };
}
