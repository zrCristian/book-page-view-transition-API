// const checkNavigationSupported = () => {
//     return Boolean(document.startViewTransition)
// }

// const fetchPage = async (url) => {
//         // vamos a cargar la pagina de destino 
//     // utilizando fetch para obtener el HTML
//     const response = await fetch(url) // ej => /clean-code
//     const text = await response.text() // => .json()

//     // de 'text' nos quedamos solo con el contenido html dentro de la etiqueta body
//     // usamos regex para extraerlo

//     const [, data] = text.match(/<body[^>]*>([\s\S]*)<\/body>/i)
//     return data
// }

// export const startViewTransition = () => {
//     if(!checkNavigationSupported) return

		
// 		window.navigation.addEventListener("navigate", (event) => {
// 			const toUrl = new URL(event.destination.url)
			
// 			// lo Ignoramos
// 			if (location.origin !== toUrl.origin) return

// 		// si es una navegacion en el mismo dominio (origen)
// 		event.intercept({
// 			async handler () {
//                 const data = await fetchPage(toUrl.pathname)

				
// 				// View Transition API
// 				document.startViewTransition( () => {
// 					// como tiene que actualizar la vista
// 					document.body.innerHTML = data
// 					document.documentElement.scrollTop = 0
// 				})
// 			}
// 		})
// 	})
	

// }