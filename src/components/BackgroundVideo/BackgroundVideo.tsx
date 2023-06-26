const BackgroundVideo: React.FC = () => (
  <video
    className="absolute top-0 -z-[3] min-w-[100vw] opacity-20 bg-blend-screen"
    autoPlay
    muted
  >
    <source src="/video.mp4" type="video/mp4" />
  </video>
)

export default BackgroundVideo
