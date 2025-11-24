"use client";
import React from "react";
import { motion } from "framer-motion";

const page = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-rose-50 flex items-center justify-center !p-6">
      <section className="w-full max-w-7xl bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        <div className="!p-8 !lg:p-12 bg-[linear-gradient(135deg,#0ea5e9_0%,#7c3aed_100%)] text-white flex flex-col justify-between">
          <div>
            <motion.h1
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight"
            >
              Say hello — let’s craft your next escape ✨
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="!mt-4 text-sm md:text-base text-white/90 max-w-xl"
            >
              Drop us a line with your wildest travel idea, the tiniest
              question, or a "surprise me" request. We’ll respond with plans,
              maps, and a little magic.
            </motion.p>

            <div className="!mt-8 grid !gap-4">
              <ContactCard
                emoji="📩"
                title="General"
                subtitle="support@travelco.com"
              />
              <ContactCard
                emoji="📞"
                title="Phone"
                subtitle="+994 50 123 45 67 (WhatsApp)"
              />
              <ContactCard
                emoji="🕒"
                title="Business hours"
                subtitle="Mon–Sat • 09:00–19:00"
              />
            </div>
          </div>

          <div className="!mt-8 text-xm text-white/80">
            <strong>Pro tip:</strong> If you're dreaming about a quiet beach,
            tell us your favourite snack — we take creativity very seriously.
          </div>
        </div>

        {/* Right: Form */}
        <div className="!p-8 !lg:p-12">
          <motion.div
            initial={{ x: 10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold">
              Let's plan something unforgettable
            </h2>
            <p className="!mt-2 text-ml text-slate-600">
              Choose a topic, tell us a little, and we'll cook up tailored
              options — no robots, just humans who love travel.
            </p>

            <form
              className="!mt-6 grid !gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target;
                const name = form.name.value;
                const email = form.email.value;
                const topic = form.topic.value;
                const message = form.message.value;
                //  baxx
                const mailto = `mailto:support@travelco.com?subject=${encodeURIComponent(
                  topic + " — " + name
                )}&body=${encodeURIComponent(
                  message + "\\n\\nContact: " + email
                )}`;
                window.location.href = mailto;
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 !gap-4">
                <input
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full rounded-lg border border-slate-200 !p-3 focus:ring-2 focus:ring-rose-300"
                />
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email address"
                  className="w-full rounded-lg border border-slate-200 p-3 focus:ring-2 focus:ring-sky-300"
                />
              </div>

              <select
                name="topic"
                className="w-full rounded-lg border border-slate-200 !p-3"
              >
                <option>Choose a topic —</option>
                <option>Custom itinerary</option>
                <option>Group travel / Corporate</option>
                <option>Bookings & Payments</option>
                <option>Press / Partnerships</option>
                <option>Other</option>
              </select>

              <textarea
                name="message"
                required
                rows={6}
                placeholder="Tell us your idea (dates, vibe, must-sees, or ‘I don’t know—surprise me!’)"
                className="w-full rounded-lg border border-slate-200 !p-3 resize-none"
              ></textarea>

              <div className="flex items-center justify-between gap-4">
                <button
                  type="submit"
                  className="inline-flex items-center !gap-3 rounded-full bg-rose-500 !px-6 !py-3 text-white font-semibold shadow hover:shadow-lg"
                >
                  Send message ✈️
                </button>
                <div className="text-xs text-slate-500">
                  We reply within <strong>24 hours</strong>.
                </div>
              </div>
            </form>

            <div className="mt-6 border-t !pt-6 flex flex-col !gap-4">
              <div className="flex items-center !gap-3">
                <div className="text-sm font-medium">Office</div>
                <div className="text-sm text-slate-500">
                  Baku, Azerbaijan — 28 Freedom Ave
                </div>
              </div>

              <div className="flex items-center !gap-3">
                <div className="text-sm font-medium">Follow our adventures</div>
                <div className="text-sm text-slate-500">
                  Instagram @travelco • TikTok @travelco • FB / TravelCo
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default page;

function ContactCard({ emoji, title, subtitle }) {
  return (
    <div className="flex items-start !gap-4 !p-4 rounded-xl bg-white/10 ring-1 ring-white/20">
      <div className="text-2xl">{emoji}</div>
      <div>
        <div className="text-sm font-semibold">{title}</div>
        <div className="text-xs text-white/90 mt-1">{subtitle}</div>
      </div>
    </div>
  );
}
