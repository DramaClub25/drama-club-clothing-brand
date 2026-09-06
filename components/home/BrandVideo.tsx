export default function BrandVideo() {
  return (
    <section className="w-full bg-black">
      <video
        className="w-full h-[55vh] md:h-[70vh] object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src="/videos/drama-club.mp4" type="video/mp4" />
      </video>
    </section>
  );
}