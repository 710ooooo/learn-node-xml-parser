import { JSDOM } from 'jsdom';
import { readFileSync } from 'fs';
import { join } from 'path';

// サンプルXML読み込み https://learn.microsoft.com/ja-jp/dotnet/standard/linq/sample-xml-file-typical-purchase-order
const xml = readFileSync(join('./PurchaseOrder.xml'), {
  encoding: 'utf-8',
});

const jsdom = new JSDOM();
const parser = new jsdom.window.DOMParser();
const dom = parser.parseFromString(xml, 'text/xml'); // xmlとして読み込み

// 内容確認
console.log(dom.documentElement.outerHTML);
console.log(dom.querySelector('Address')?.innerHTML);
dom.querySelectorAll('Address')?.forEach((e) => {
  console.log(e.getAttribute('Type'));
  console.log('Name:' + e.querySelector('Name')?.innerHTML);
});
