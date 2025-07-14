"use client";
import Assistant from "@/components/assistant";
import ToolsPanel from "@/components/tools-panel";
import DarkModeToggle from "@/components/dark-mode-toggle";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Main() {
  const [isToolsPanelOpen, setIsToolsPanelOpen] = useState(false);

  return (
    <div className="h-screen md:grid md:grid-cols-[3fr_1fr]">
      <div className="flex flex-col">
        <Assistant />
      </div>
      <div className="hidden md:block border-l">
        <ToolsPanel />
      </div>
      {/* Top right controls */}
      <div className="absolute top-4 right-4 flex gap-4 items-center">
        <DarkModeToggle />
        <button className="md:hidden" onClick={() => setIsToolsPanelOpen(true)}>
          <Menu size={24} />
        </button>
      </div>
      {/* Overlay panel for ToolsPanel on small screens */}
      {isToolsPanelOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black bg-opacity-30">
          <div className="w-full h-full p-4 bg-background text-foreground">
            <button className="mb-4" onClick={() => setIsToolsPanelOpen(false)}>
              <X size={24} />
            </button>
            <ToolsPanel />
          </div>
        </div>
      )}
    </div>
  );
}
