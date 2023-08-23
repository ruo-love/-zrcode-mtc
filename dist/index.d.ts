declare module '@zrcode/mtc' {
    export type Mtc = Array<{ id: string; key: string; label: string; level?: number }>;
    /**
     * 解析html文本 生成目录数组，和锚点id
     * @param html
     * @returns
     */
    export function parseHtml(html: string): {
        mtc: Mtc;
        content: string;
    };
    /**
     * 解析md文本 生成目录数组，和锚点id
     * @param md
     * @returns
     */
    export function parseMd(md: string): {
        mtc: Mtc;
        content: string;
    };
}