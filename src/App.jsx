import { useEffect, useState } from 'react'

/* =========================================================
 *  VARIÁVEIS EDITÁVEIS
 *  -------------------------------------------------------
 *  YOUTUBE_VIDEO_URL  -> URL de embed do vídeo do YouTube
 *  CTA_BUTTON_URL     -> Link de destino do botão (WhatsApp/contato)
 *  BUTTON_DELAY_MS    -> Tempo até o botão aparecer (180000ms = 3min)
 * ========================================================= */
const YOUTUBE_VIDEO_URL = 'https://www.youtube.com/embed/cM4sMqtc1iU'
const CTA_BUTTON_URL = '#' // TODO: substituir pelo link do WhatsApp/contato
const BUTTON_DELAY_MS = 180000 // 3 minutos

export default function App() {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowButton(true), BUTTON_DELAY_MS)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen w-full bg-black flex items-center justify-center px-5 py-10">
      <div className="w-full max-w-3xl flex flex-col items-center gap-8 sm:gap-10">
        {/* Headline */}
        <h1 className="text-white font-extrabold text-center uppercase leading-tight text-3xl sm:text-4xl md:text-5xl tracking-tight">
          Deseja fechar contratos no automático?
        </h1>

        {/* Vídeo responsivo 16:9 */}
        <div className="w-full aspect-video overflow-hidden rounded-xl">
          <iframe
            className="w-full h-full"
            src={YOUTUBE_VIDEO_URL}
            title="APEX"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>

        {/* Botão CTA (aparece após o delay) */}
        {showButton && (
          <a
            href={CTA_BUTTON_URL}
            className="w-full sm:w-auto text-center bg-[#00C853] hover:bg-[#00b34a] text-white font-bold uppercase text-lg rounded-full px-10 py-4 transition-colors duration-200"
          >
            Falar com a APEX
          </a>
        )}
      </div>
    </main>
  )
}
