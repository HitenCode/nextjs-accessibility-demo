"use client";

import { useState, useRef } from "react";

export default function DropdownBug() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  function handleBlur(e: React.FocusEvent) {
    // ❌ BUG: closes instantly even when TAB moves to next option
    setOpen(false);
  }

  return (
    <div className="p-10">
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded"
        onClick={() => setOpen(!open)}
      >
        Open Dropdown
      </button>

      {open && (
        <div
          className="border mt-2 p-2 rounded"
          ref={dropdownRef}
          tabIndex={0}
          onBlur={handleBlur}
        >
          <button className="block p-2 hover:bg-gray-200 w-full text-left">
            Option 1
          </button>
          <button className="block p-2 hover:bg-gray-200 w-full text-left">
            Option 2
          </button>
          <button className="block p-2 hover:bg-gray-200 w-full text-left">
            Option 3
          </button>
        </div>
      )}
    </div>
  );
}
