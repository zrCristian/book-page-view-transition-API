/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead, b as addAttribute } from '../astro.b86288a0.mjs';
import 'html-escaper';
import { $ as $$Layout } from './404.astro.469fa96d.mjs';

const books = [
    {
    id: 'clean-code',
    title: 'Clean Code: Manual de desarrollo ágil de software',
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1436202607i/3735293.jpg",
    opinion: 'Un clásico entre los clásicos del mundo de la programación. Aunque en pleno 2023 yo tengo una opinión un poco polémica. No me parece un libro que recomendaría a todo el mundo, especialmente a aquellas personas que están aprendiendo. Además, tiene un tono muy dogmático y existe gente que se lo toma, peligrosamente, como la biblia del desarrollo. Pero si eres capaz de leerlo tomando perspectiva, hay cosas interesantes que todavía están vigentes. Ojo que todos los ejemplos de código están basados en Java y mucha programación orientada a objetos.',
    author: 'Robert C. Martin',
    },
    {
    id: 'aprendiendo-git',
    title: 'Aprendiendo Git',
    img: "https://d2sofvawe08yqg.cloudfront.net/aprendiendo-git/s_hero2x?1628527844",
    opinion: 'Un libro muy interesante para aprender Git. Mucho más allá de los comandos. Habla de buenas prácticas, estrategias de trabajo en equipo y flujos para mejorar la entrega de software. Además, está escrito por un autor español, lo que siempre es de agradecer.',
    author: 'Miguel Angel Durán'
    },
    {
    id: 'the-clean-coder',
    title: 'The Clean Coder: A Code of Conduct for Professional Programmers',
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1347470803i/10284614.jpg",
    opinion: '"The Clean Coder: Un Código de Conducta para Programadores Profesionales" es un libro excepcional que revoluciona la forma en que los programadores abordan su trabajo. Con sus ideas prácticas e inspiradoras, establece un nuevo estándar de profesionalismo en la industria del desarrollo de software. Su enfoque en la responsabilidad personal, el aprendizaje continuo y la comunicación efectiva, promueve la entrega de código limpio, la mejora constante y la colaboración en equipo. En resumen, este libro es una herramienta indispensable que empodera a los programadores para alcanzar la excelencia y contribuir al éxito de sus organizaciones.',
    author: 'Robert C. Martin',
    },
    {
    id: 'javascript-the-good-parts',
    title: 'JavaScript: The Good Parts',
    img: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1328834793i/2998152.jpg',
    opinion: '"JavaScript: The Good Parts" es un libro imprescindible que destaca las mejores prácticas y características esenciales de JavaScript. A través de una visión concisa y perspicaz, el autor nos guía por el mundo de este lenguaje, revelando su potencial y resaltando sus aspectos más poderosos y efectivos. Con un enfoque en la simplicidad y la elegancia, el libro ofrece una guía práctica para aprovechar al máximo las partes más sólidas y confiables de JavaScript, permitiéndonos escribir un código claro y eficiente. En resumen, esta obra es una valiosa herramienta para cualquier desarrollador que desee dominar el arte de programar con JavaScript.',
    author: 'Douglas Crockford',
    },
    {
    id: 'eloquent-javascript',
    title: 'Eloquent JavaScript: A Modern Introduction to Programming',
    img: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1308260856i/8910666.jpg',
    opinion: '"Eloquent JavaScript" es un libro extraordinario que lleva a los lectores en un viaje apasionante a través del mundo de la programación en JavaScript. Con un enfoque amigable y accesible, el autor nos introduce en los conceptos fundamentales del lenguaje y nos guía hábilmente a través de ejercicios prácticos y desafiantes. Con una combinación equilibrada de teoría y práctica, el libro fomenta el pensamiento lógico y creativo, y nos enseña a desarrollar soluciones elegantes y eficientes. En resumen, "Eloquent JavaScript" es una guía imprescindible para aquellos que desean dominar este poderoso lenguaje de programación y explorar todo su potencial.',
    author: 'Marijn Haverbeke',
    }
];

const $$Astro = createAstro();
const $$book = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$book;
  const { book } = Astro2.params;
  const info = books.find((b) => b.id === book);
  if (!info) {
    return Astro2.redirect("/404");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Libro ${info.title}` }, { "default": ($$result2) => renderTemplate`
    ${maybeRenderHead()}<main class="m-auto max-w-4xl">

        <header class="relative">

            <a href="/" type="button" class="fixed  top-5 text-white bg-black hover:bg-blue-950 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-black dark:hover:bg-blue-950 dark:hover:scale-110 transition-transform">
                <svg class="w-4 h-4 rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path>
                </svg>
                <span class="sr-only">Icon description</span>
              </a>


            <h1 class="scale-75 font-black uppercase text-6xl md:text-8xl text-center pt-6 px-4" style="view-transition-name: title">
            Libros de
            <span class="block text-[36px] md:text-[58px]">programacion</span>
        </h1>
        

        </header>

        <div class="grid grid-cols-[350px_1fr] gap-x-12">

            <div class="flex flex-col mt-3">
                <picture class="mb-8 w-full relative">
                    <img class="aspect-[389/500] w-full h-full rounded-lg object-cover max-w-full"${addAttribute(info.img, "src")}${addAttribute(`Portada del libro ${info.title}`, "alt")}${addAttribute(`view-transition-name: book-${info.id}`, "style")}>
                </picture>

                <!-- <a href='/' type="button" class="fixed left-2 top-2 text-white bg-black hover:bg-blue-950 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-black dark:hover:bg-blue-950 dark:focus:ring-blue-800">
                    <svg class="w-4 h-4 rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                    <span class="sr-only">Icon description</span>
                </a> -->

                <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 justify-center">
                    <svg class="w-3.5 h-3.5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                    <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"></path>
                    </svg>
                    Comprar ahora
                </a>
            </div>

            <aside>
                <h1 class="text-6xl font-black mb-4">${info.title}</h1>
                <p class="text-lg mb-4">${info.opinion}</p>
                <p><strong>Autor:</strong> <span class="font-semibold text-gray-800">${info.author}</span></p>
            </aside>
        </div>
    </main>
` })}`;
}, "C:/Users/crist/Desktop/Astro/view-transitions-API/src/pages/[book].astro", void 0);

const $$file = "C:/Users/crist/Desktop/Astro/view-transitions-API/src/pages/[book].astro";
const $$url = "/[book]";

const _book_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$book,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _book_ as _, books as b };
