export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ColdEmail.com",
    url: "https://coldemail.com",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen flex flex-col px-4">
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="border-4 border-white/30 px-8 md:px-32 py-10 mb-4 inline-block">
              <h1 className="text-xl md:text-3xl font-normal tracking-wide">
                ColdEmail.com
              </h1>
            </div>
            <p className="text-base md:text-lg text-white/60 font-light italic tracking-wide">
              Coming Soon
            </p>
          </div>
        </div>
        <footer className="pb-6 text-center">
          <p className="text-sm text-white/40">
            © 2025 ColdEmail.com. All Rights Reserved.
          </p>
        </footer>
      </main>
    </>
  );
}
