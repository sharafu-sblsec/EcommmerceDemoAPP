import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Box,
  Grid,
  Smartphone,
  Monitor,
  Camera,
  Headphones,
  Gamepad,
  ChevronDown,
} from "lucide-react";
import { useDispatch } from "react-redux";
import { setSelectedCategory } from "../../features/products/ProductSlice";

const categories = [
  "All",
  "Gadgets",
  "Smartphones",
  "laptops",
  "Cameras",
  "Audio",
  "Gaming",
];

const iconMap = {
  All: Box,
  Gadgets: Grid,
  Smartphones: Smartphone,
  laptops: Monitor,
  Cameras: Camera,
  Audio: Headphones,
  Gaming: Gamepad,
};

export default function Category() {

  const dispatch = useDispatch();


  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("All");

  return (
    <div className="relative">
      <div className="flex items-center">
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-3 py-2 px-3 rounded-md bg-white border shadow-sm hover:shadow-md transition focus:outline-none"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-zinc-100">
            <Box className="w-5 h-5 text-sky-700 " />
          </div>
          <div className="text-sm font-semibold text-sky-700">{active}</div>
          <ChevronDown className="w-4 h-4 text-zinc-400" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.28 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/30"
              style={{ zIndex: 60 }}
            />

            <motion.aside
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
              className="fixed left-0 right-0 bottom-0 z-50 mx-auto w-full max-w-5xl"
              style={{ zIndex: 70 }}
              role="dialog"
              aria-modal="true"
            >

              <div className="w-full bg-white shadow-2xl overflow-hidden rounded-t-2xl  max-h-[75vh]">
                <div className="flex items-center justify-between px-6 py-4 border-b">
                  <div className="flex items-center gap-3">
                    <div className="text-xl font-semibold text-sky-700">Categories</div>
                    <div className="text-sm text-zinc-500">(select a category)</div>
                  </div>

                  <button
                    onClick={() => setOpen(false)}
                    className="text-zinc-500 text-sm px-3 py-1 rounded hover:bg-zinc-100"
                    aria-label="Close categories"
                  >
                    Close
                  </button>
                </div>
                
                <div className="p-6 overflow-auto" style={{ maxHeight: 'calc(75vh - 120px)' }}>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {categories.map((cat) => {
                      const Icon = iconMap[cat] || Grid;
                      return (
                        <button
                          key={cat}
                          onClick={() => {
                            setActive(cat); dispatch(setSelectedCategory(cat)); setOpen(false);
                          }}
                          className={`flex flex-col items-start gap-3 p-4 rounded-xl border transition-shadow text-left w-full hover:shadow-lg focus:outline-none ${
                            active === cat ? "border-sky-300 bg-sky-50" : "border-transparent"
                          }`}
                        >
                          <div className="flex h-12 w-12 items-center justify-center rounded-md bg-zinc-100">
                            <Icon className="w-6 h-6 text-sky-700" />
                          </div>

                          <div className="text-xl font-semibold text-sky-700">{cat}</div>
                          
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="px-6 py-4 border-t text-sm text-zinc-500">Tip: tap any category to select it. Tap outside or Close to dismiss.</div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
