import React from 'react'

const BackgroundVideo: React.FC = () => {
  const videoRef: React.LegacyRef<HTMLVideoElement> = React.useRef(null)

  React.useEffect(() => {
    if (videoRef.current) {
      ;(videoRef.current as any).playbackRate = 0.5
    }
  }, [])

  return (
    <video
      ref={videoRef}
      className="fixed top-0 bottom-0 -z-[3] min-w-[100vw] opacity-50 bg-blend-screen"
      autoPlay
      muted
      loop
    >
      <source src="/video.mp4" type="video/mp4" />
    </video>
  )
}

export default BackgroundVideo
