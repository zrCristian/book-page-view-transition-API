/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderHead, e as renderSlot, f as renderComponent, m as maybeRenderHead } from '../astro.b86288a0.mjs';
import 'html-escaper';

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  console.log("\n  Cristian \n");
  return renderTemplate`<html lang="en" class="astro-SCKKX6R4">
	<head>
		<meta charset="UTF-8">
		<meta name="description" content="Astro description">
		<meta name="viewport" content="width=device-width">
		<link rel="icon" type="image/svg+xml" href="/favicon.svg">
		<meta name="generator"${addAttribute(Astro2.generator, "content")}>
		<title>${title}</title>
		<!-- <meta name="view-transition" content="same-origin"> -->
	${renderHead()}</head>
	<body class="bg-slate-400 h-screen astro-SCKKX6R4">
		<div id="content" class="astro-SCKKX6R4">
			${renderSlot($$result, $$slots["default"])}
		</div>
	

</body></html>`;
}, "C:/Users/crist/Desktop/Astro/view-transitions-API/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 page" }, { "default": ($$result2) => renderTemplate`
    ${maybeRenderHead()}<main class="max-w-4xl m-auto min-h-screen grid place-content-center text-center">
        <h1 class="text-4xl font-black mb-4">Pagina no encontrada</h1>
        <img src="https://midu.dev/images/this-is-fine-404.gif" alt="" sizes="" srcset="">
    </main>
` })}`;
}, "C:/Users/crist/Desktop/Astro/view-transitions-API/src/pages/404.astro", void 0);

const $$file = "C:/Users/crist/Desktop/Astro/view-transitions-API/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _404 as _ };
