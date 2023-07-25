/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, f as renderComponent } from '../astro.b86288a0.mjs';
import 'html-escaper';
import { $ as $$Layout } from './404.astro.469fa96d.mjs';
import { b as books } from './_book_.astro.a804c132.mjs';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';

const $$Astro$3 = createAstro();
const $$Title = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Title;
  return renderTemplate`${maybeRenderHead()}<h1 class="font-black uppercase text-6xl md:text-8xl text-center pt-6 px-4" style="view-transition-name: title">
    Libros de
    <span class="block text-[36px] md:text-[58px]">programacion</span>
</h1>`;
}, "C:/Users/crist/Desktop/Astro/view-transitions-API/src/components/Title.astro", void 0);

const $$Astro$2 = createAstro();
const $$BookItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BookItem;
  const { title, id, img } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="hover:scale-105 hover:contrast-125 hover:shadow-2xl inline-block transition-all"${addAttribute(`/${id}`, "href")}>
    <img class="aspect-[389/500] w-full h-full rounded-lg object-cover max-w-full"${addAttribute(img, "src")}${addAttribute(`Portada del libro ${title}`, "alt")}${addAttribute(`view-transition-name: book-${id}`, "style")}>
</a>`;
}, "C:/Users/crist/Desktop/Astro/view-transitions-API/src/components/BookItem.astro", void 0);

const $$Astro$1 = createAstro();
const $$ListOfBooks = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ListOfBooks;
  return renderTemplate`${maybeRenderHead()}<ul class="grid grid-cols-2 md:grid-cols-3 gap-3 px-4 py-8">
    ${books.map(({ id, title, img }) => renderTemplate`<li>
                ${renderComponent($$result, "BookItem", $$BookItem, { "id": id, "title": title, "img": img })}
            </li>`)}
</ul>`;
}, "C:/Users/crist/Desktop/Astro/view-transitions-API/src/components/ListOfBooks.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Libros de Programacion" }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead()}<main class="m-auto max-w-4xl pb-8">
		${renderComponent($$result2, "Title", $$Title, {})}
		${renderComponent($$result2, "ListOfBooks", $$ListOfBooks, {})}
	</main>
` })}`;
}, "C:/Users/crist/Desktop/Astro/view-transitions-API/src/pages/index.astro", void 0);

const $$file = "C:/Users/crist/Desktop/Astro/view-transitions-API/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
