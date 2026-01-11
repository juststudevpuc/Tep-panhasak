import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Separator } from "../ui/separator";

export const MainLayout = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const nav_item = [
    { to: "/homePage", label: "Home" },
    { to: "/aboutPage", label: "About" },
    { to: "/skillPage", label: "Skills" },
    { to: "/projectPage", label: "Project" },
    { to: "/contactPage", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <nav
          aria-label="Global"
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        >
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link to="/" className="flex items-center gap-3 group">
              {/* <img
                alt="logo"
                src="/logo.jpg"
                className="h-9 w-auto mix-blend-multiply"
              /> */}
              <h1 className="text-slate-900 font-bold tracking-[0.2em] text-base uppercase">
                Tep Panhasak
              </h1>
            </Link>
          </div>

          {/* mobile menu  */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex items-center justify-center rounded-md p-2 text-slate-600"
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          {/* Desktop nav */}
          <PopoverGroup className="hidden lg:flex lg:gap-x-12">
            {nav_item.map((nav) => (
              <Link
                key={nav.to + nav.label}
                to={nav.to}
                className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-600 hover:text-slate-900 transition-colors"
              >
                {nav.label}
              </Link>
            ))}
          </PopoverGroup>
        </nav>
        {/* Mobile menu */}
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50 bg-white/20 backdrop-blur-sm " />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm border-l border-slate-100 shadow-xl">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center gap-2">
                {/* <img alt="logo" src="/logo.jpg" className="h-8 w-auto" /> */}
                <span className="text-slate-900 font-bold uppercase tracking-wider">
                  Tep panhasak
                </span>
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-md p-2 text-slate-600"
              >
                <X aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>

            <div className="mt-10 flow-root">
              <div className="-my-6 divide-y divide-slate-100">
                <div className="space-y-4 py-6">
                  {nav_item.map((nav) => (
                    <Link
                      key={nav.to}
                      to={nav.to}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-sm font-medium uppercase tracking-widest text-slate-800 hover:text-slate-500"
                    >
                      {nav.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
      {/* Main content */}
      <main className="min-h-[calc(100vh-200px)]">
        <Outlet />
      </main>
      <div className="max-w-7xl mx-auto py-0.5">
        <Separator className={"bg-slate-300"} />
      </div>
      {/* Footer */}
      <footer className="bg-white py-16">
        <div className="flex flex-col items-center gap-4 text-[12px] uppercase tracking-[0.3em] text-slate-400">
          <div className="flex gap-8 mb-4">
            <Link to="#" className="hover:text-slate-900 transition">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-slate-900 transition">
              Terms of Service
            </Link>
          </div>
          <p>© 2025 Portfolio </p>
          <p className="opacity-100">Powered by Sak</p>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
