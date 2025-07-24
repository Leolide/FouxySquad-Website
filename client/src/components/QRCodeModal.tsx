import { useState } from "react";
import { X } from "lucide-react";

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QRCodeModal({ isOpen, onClose }: QRCodeModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="text-center">
          <h3 className="font-comfortaa font-bold text-2xl text-black mb-4">
            Connect with Fouxy Squad
          </h3>
          
          {/* QR Code placeholder - you can replace this with actual QR code generation */}
          <div className="bg-gray-100 w-64 h-64 mx-auto rounded-xl flex items-center justify-center mb-6">
            <div className="text-center">
              <div className="text-6xl mb-2">📱</div>
              <p className="text-gray-600 text-sm">
                Scan to connect
              </p>
            </div>
          </div>
          
          <div className="space-y-3 text-left">
            <div className="flex items-center space-x-3">
              <span className="text-orange-500">📷</span>
              <span className="text-gray-700">Instagram: @fouxy_squad</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-blue-500">💼</span>
              <span className="text-gray-700">LinkedIn: Fouxy Squad</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-green-500">✉️</span>
              <span className="text-gray-700">Email: hello@fouxysquad.com</span>
            </div>
          </div>
          
          <div className="mt-6 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Join our community events via Luma
            </p>
            <button
              onClick={() => window.open("https://lu.ma/user/FouxySquad", "_blank")}
              className="mt-2 bg-orange-500 text-white px-6 py-2 rounded-full font-medium hover:bg-orange-600 transition-colors"
            >
              View Events
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}