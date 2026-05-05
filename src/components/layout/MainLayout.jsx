import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Menu, Moon, Sun, X } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";
import { AnimatePresence } from "framer-motion";

export const MainLayout = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const location = useLocation();
  // ADD THIS FIX: Scroll to top whenever the URL path changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // "instant" works best so it doesn't fight your Framer Motion animations!
    });
  }, [location.pathname]);

  const { theme, toggleTheme } = useTheme();
  const nav_item = [
    { to: "/homePage", label: "Home" },
    { to: "/aboutPage", label: "About" },
    { to: "/awardPage", label: "Achievements" },
    { to: "/skillPage", label: "Skills" },
    { to: "/projectPage", label: "Project" },
    { to: "/contactPage", label: "Contact" },
  ];

  return (
    // 1. Matte Backgrounds and Flex layout to push the footer to the bottom
    <div className="min-h-screen flex flex-col bg-gray-200 dark:bg-[#0a0a0b] text-slate-900 dark:text-slate-50 antialiased transition-colors duration-500">
      {/* 2. Glassmorphism Sticky Header */}
      <header className="sticky top-0 z-50 bg-gray-300 dark:bg-[#0a0a0b]/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-white/5 transition-colors duration-500">
        <nav
          aria-label="Global"
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        >
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link to="/homePage" className="flex items-center gap-3 group">
              <h1 className="text-slate-900 dark:text-white font-black tracking-[0.2em] text-sm uppercase transition-colors duration-500">
                Tep Panhasak
              </h1>
            </Link>
          </div>

          {/* Mobile Buttons */}
          <div className="flex lg:hidden items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10 transition-all duration-300"
            >
              {theme === "light" ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex items-center justify-center rounded-md p-2 text-slate-600 dark:text-slate-300"
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Desktop Nav */}
          <PopoverGroup className="hidden lg:flex lg:gap-x-10 items-center">
            {nav_item.map((nav) => (
              <Link
                key={nav.to + nav.label}
                to={nav.to}
                // Updated: Matte text colors with crisp hover states
                className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-300"
              >
                {nav.label}
              </Link>
            ))}

            {/* Desktop Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="ml-4 p-2.5 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10 transition-all duration-300 shadow-sm dark:shadow-none"
            >
              {theme === "light" ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </button>
          </PopoverGroup>
        </nav>

        {/* Mobile menu Dialog */}
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          {/* Darker, blurred overlay for mobile menu in dark mode */}
          <div className="fixed inset-0 z-50 bg-slate-900/20 dark:bg-black/60 backdrop-blur-sm transition-opacity" />

          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#fafafa] dark:bg-[#111112] p-6 sm:max-w-sm border-l border-slate-200 dark:border-white/5 shadow-2xl transition-colors duration-500">
            <div className="flex items-center justify-between">
              <Link
                to="/homePage"
                className="flex items-center gap-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-slate-900 dark:text-white font-black text-sm uppercase tracking-[0.2em]">
                  Tep Panhasak
                </span>
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-full p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
              >
                <X aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-12 flow-root">
              <div className="space-y-2 py-6 flex flex-col gap-6">
                {nav_item.map((nav) => (
                  <Link
                    key={nav.to}
                    to={nav.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs font-bold uppercase tracking-[0.2em] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                  >
                    {nav.label}
                  </Link>
                ))}
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      {/* 3. Main content */}
      <main className="flex-grow">
        {/* AnimatePresence allows framer-motion to track route changes */}
        <AnimatePresence mode="wait">
          {/* THE MAGIC TRICK: When the URL (pathname) changes, React destroys and rebuilds this div, forcing the animation to play! */}
          <div key={location.pathname}>
            <Outlet />
          </div>
        </AnimatePresence>
      </main>

      {/* 4. Footer - Cleaned up and integrated border */}
      <footer className="w-full bg-gray-300 dark:bg-[#0a0a0b] py-12 border-t border-slate-200/50 dark:border-white/5 transition-colors duration-500">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center gap-6 text-[10px] uppercase tracking-[0.3em] text-slate-800 dark:text-slate-100">
          <div className="flex flex-wrap justify-center gap-8 font-bold">
            <Link
              to="/"
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/"
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
          <div className="flex flex-col items-center gap-2 mt-4">
            <p>© 2026 Portfolio</p>
            <p className="opacity-60 dark:opacity-40">Powered by Sak</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
