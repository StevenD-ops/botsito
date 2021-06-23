const help = (prefix) => {
	return `

 *INFORMACION*
   ○ Comando: ⌜ ${prefix} ⌟

 *NUEVO COMANDO*
- ${prefix}otak

 *NUEVOS MENUS*
- ${prefix}desmenu
Descargar musica y videos de YT

 *PARA USAR EL BOT*
Registrate con el comando ${prefix}registro y tu nombre

 *CREAR STICKERS*
  ║
  ╠ ○ ${prefix}sticker o s
  ╠ ○ ${prefix}attp
  ╠ Mas un texto corto
  ╠ ○ ${prefix}stickergif o s
  ╚ 6 segundos de video

 *CONVERTIDORES*
  ║
  ╠ ○ ${prefix}toimg
  ╠ De sticker a JPG
  ╠ ○ ${prefix}tomp3
  ╚ De video a MP3

 *AUDIO*
  ║
  ╠ ○ ${prefix}idioma
  ╚ ○ ${prefix}tts es (mas texto)

 *OTROS*
  ║
  ╠ ○ ${prefix}wame
  ╠ Link de Whatsapp
  ╠ ○ ${prefix}qrcode
  ╚ Coloca un texto

 *GRUPOS*
  ║
  ╠ ○ ${prefix}closegc
  ╠ Cerrar el grupo solo admins
  ╠ ○ ${prefix}opengc
  ╠ Abrir grupo solo admins
  ╠ ○ ${prefix}kick o pafuera
  ╠ Eliminar a un miembro 
  ╠ ○ ${prefix}promote
  ╠ Dar admin a un miembro
  ╠ ○ ${prefix}demote
  ╠ Quitar el admin
  ╠ ○ ${prefix}linkgc
  ╠ Link del grupo
  ╠ ○ ${prefix}todos
  ╚ Nombra a todos los del grupo

Para usar estas funciones el bot necesita admin
  
 *NSWF* 
  ║
  ╚ ○ ${prefix}nsfwmenu

Para activar los NSFW coloque el siguiente comando ${prefix}nsfw 1 y para desactivar los NSFW coloque ${prefix}nsfw 0
`
}

exports.help = help
