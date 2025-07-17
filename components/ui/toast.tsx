"use client";
import { useEffect } from "react";
import { create } from "zustand";

export type Toast = {
  id: number;
  message: string;
};

interface ToastState {
  toasts: Toast[];
  showToast: (message: string) => void;
  removeToast: (id: number) => void;
}

export const useToastStore = create<ToastState>((set) => ({
  toasts: [],
  showToast: (message) => {
    const id = Date.now();
    set((state) => ({ toasts: [...state.toasts, { id, message }] }));
    setTimeout(() => {
      set((state) => ({
        toasts: state.toasts.filter((t) => t.id !== id),
      }));
    }, 3000);
  },
  removeToast: (id) =>
    set((state) => ({ toasts: state.toasts.filter((t) => t.id !== id) })),
}));

export function ToastContainer() {
  const { toasts, removeToast } = useToastStore();
  useEffect(() => {
    // Clean up timeouts when unmounting
    return () => {
      toasts.forEach((t) => removeToast(t.id));
    };
  }, [toasts, removeToast]);
  if (toasts.length === 0) return null;
  return (
    <div className="fixed bottom-4 right-4 space-y-2 z-50">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="bg-background border px-4 py-2 shadow rounded-md text-sm"
        >
          {toast.message}
        </div>
      ))}
    </div>
  );
}
