import { Label } from "@/components/ui/label";
import {
  Facebook,
  Github,
  Linkedin,
  MailIcon,
  PhoneCall,
  Send,
  User,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

export default function ContactPage() {
  const position = [11.511935527703347, 104.75320468725977];

  // --- Custom Starry Background Component ---
  const StarryBackground = () => {
    // Generate random stars on mount
    const stars = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1, // 1px to 3px
      delay: Math.random() * 3,
      duration: Math.random() * 3 + 2, // 2s to 5s twinkle
    }));

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden dark:block z-0">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute bg-white rounded-full"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
            }}
            animate={{ opacity: [0.1, 0.7, 0.1] }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <motion.div
      // 1. Start invisible and slightly higher up (-50px)
      initial={{ opacity: 0, y: 50 }}
      // 2. Fade in and slide down to its normal resting position (0px)
      animate={{ opacity: 1, y: 0 }}
      // 3. Make it smooth. 0.8s looks great for page loads.
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen bg-[#fafafa] dark:bg-[#0a0a0b] transition-colors duration-500 pb-24"
    >
      <StarryBackground />
      <div className="mx-auto max-w-5xl px-8 py-16 lg:py-24">
        {/* Header Section */}
        <div className="flex flex-col gap-3 mb-16 border-l-2 border-slate-300 dark:border-slate-800 pl-6">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 uppercase">
            Contact{" "}
            <span className="text-slate-400 dark:text-slate-600 font-light italic">
              Me
            </span>
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 font-normal">
            I'd love to hear from you! Whether it's a project inquiry or a quick
            hello.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left Column: Refined Form */}
          <div className="flex flex-col gap-8">
            <div className="space-y-6">
              <InputGroup>
                <InputGroupInput
                  placeholder="Full Name"
                  className="bg-white dark:bg-white/5 border-slate-200 dark:border-white/10"
                />
                <InputGroupAddon>
                  <User size={18} className="text-slate-400" />
                </InputGroupAddon>
              </InputGroup>

              <InputGroup>
                <InputGroupInput
                  type="email"
                  placeholder="Email Address"
                  className="bg-white dark:bg-white/5 border-slate-200 dark:border-white/10"
                />
                <InputGroupAddon>
                  <MailIcon size={18} className="text-slate-400" />
                </InputGroupAddon>
              </InputGroup>

              <InputGroup>
                <InputGroupInput
                  placeholder="Phone Number"
                  className="bg-white dark:bg-white/5 border-slate-200 dark:border-white/10"
                />
                <InputGroupAddon>
                  <PhoneCall size={18} className="text-slate-400" />
                </InputGroupAddon>
              </InputGroup>

              <InputGroup>
                <InputGroupTextarea
                  placeholder="How can I help you?"
                  className="bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 min-h-[150px]"
                />
                <InputGroupAddon align="block-end">
                  <InputGroupText className="text-slate-400 text-[10px] uppercase tracking-widest">
                    Message
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </div>

            <button className="w-full bg-slate-900 dark:bg-blue-600 text-white py-4 px-6 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-slate-800 dark:hover:bg-blue-500 transition-all shadow-lg active:scale-[0.98]">
              Send Message
            </button>
          </div>

          {/* Right Column: Integrated Map */}
          <div className="relative group">
            {/* Soft Glow effect for dark mode */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>

            <div className="relative h-[450px] w-full rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-sm z-0">
              <MapContainer
                center={position}
                zoom={13}
                scrollWheelZoom={false}
                style={{ height: "100%", width: "100%" }}
                // This class allows us to target the map tiles with CSS filters
                className="dark:filter dark:invert dark:hue-rotate-180 dark:brightness-95 dark:contrast-90"
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                  <Popup>
                    <div className="text-xs font-bold font-sans">
                      Bek Chan Market <br />
                      <span className="font-normal text-slate-500">
                        Kandal Province, Cambodia
                      </span>
                    </div>
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>

        {/* Social Links Bar */}
        <div className="mt-24 pt-12 border-t border-slate-200 dark:border-white/5 flex flex-wrap gap-4 justify-center">
          <SocialLink
            href="https://github.com/juststudevpuc"
            icon={<Github size={20} />}
            label="GitHub"
          />
          <SocialLink
            href="https://t.me/tep_panhasak"
            icon={<Send size={20} />}
            label="Telegram"
          />
          <SocialLink
            href="http://linkedin.com/in/tep-panhasak-73420b390"
            icon={<Linkedin size={20} />}
            label="LinkedIn"
          />
          <SocialLink
            href="https://www.facebook.com/On.lySak2006"
            icon={<Facebook size={20} />}
            label="Facebook"
          />
        </div>
      </div>
    </motion.div>
  );
}

function SocialLink({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-3 px-6 py-3 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-slate-900 dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300"
    >
      {icon}
      <span className="hidden sm:inline">{label}</span>
    </a>
  );
}
