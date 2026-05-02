export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-sm font-medium px-3 py-1 rounded-full mb-6">
          Discord Productivity
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          AI Summaries of Your<br />Discord Voice Calls
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          VoiceLog joins your Discord voice channels, records the conversation, transcribes with Whisper, and delivers clean meeting summaries with action items — automatically.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Get Started — $25/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No credit card required to try.</p>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="border border-[#58a6ff] rounded-xl p-8 max-w-sm mx-auto bg-[#161b22]">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro</div>
          <div className="text-4xl font-bold text-white mb-1">$25<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need for your team</p>
          <ul className="space-y-3 mb-8">
            {[
              "Unlimited voice channel recordings",
              "AI summaries + action items",
              "Discord OAuth login",
              "Webhook & email delivery",
              "Up to 10 monitored channels",
              "OpenAI Whisper transcription"
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block text-center bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Subscribe Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-lg p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">How does VoiceLog join my Discord server?</h3>
            <p className="text-[#8b949e] text-sm">After subscribing, you authenticate with Discord OAuth and invite the VoiceLog bot to your server. You then select which voice channels to monitor from your dashboard.</p>
          </div>
          <div className="border border-[#30363d] rounded-lg p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">Where are summaries delivered?</h3>
            <p className="text-[#8b949e] text-sm">Summaries can be sent to a Discord channel via webhook, to your email, or both. You configure delivery preferences per channel in your settings.</p>
          </div>
          <div className="border border-[#30363d] rounded-lg p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">Is my audio data stored?</h3>
            <p className="text-[#8b949e] text-sm">Audio is processed in real-time and deleted immediately after transcription. Only the text transcript and summary are retained, and you can delete them at any time.</p>
          </div>
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-sm">
        &copy; {new Date().getFullYear()} VoiceLog. All rights reserved.
      </footer>
    </main>
  );
}
