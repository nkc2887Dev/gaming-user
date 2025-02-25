"use client";

import { useState } from "react";
import Input from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RefreshCw, Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import GradientButton from "@/components/ui/gradient-button";
import logo from "@/assets/images/logo.jpg";

interface MasterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginForm({ isOpen, onClose }: MasterModalProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [captcha, setCaptcha] = useState({
    num1: 10,
    num2: 2,
  });
  if (!isOpen) return null;
  const refreshCaptcha = () => {
    setCaptcha({
      num1: Math.floor(Math.random() * 100) + 1,
      num2: Math.floor(Math.random() * 10) + 1,
    });
    setCaptchaAnswer("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const correctAnswer = captcha.num1 + captcha.num2;
    if (Number.parseInt(captchaAnswer) === correctAnswer) {
      console.log("Login successful");
    } else {
      alert("Incorrect CAPTCHA answer");
      refreshCaptcha();
    }
  };

  return (
    <div className="z-50 flex items-center justify-center">
      <div className="w-full max-w-sm bg-white rounded-3xl p-8 shadow-xl border-8 border-[#27A6C3]">
        <div className="flex flex-row-reverse px-2">
          <button
            onClick={onClose}
            className="text-black font-bold hover:text-[#27A6C3] rounded-lg p-2"
          >
            ✖
          </button>
        </div>
        <div className="flex justify-center mb-4 text-black">
          <Image
            src={logo}
            alt="GAJANAND"
            width={100}
            height={40}
            priority
            className="rounded-md border border-[#73819A]"
          />
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username */}
          <div className="space-y-1">
            <label className="text-black text-md font-bold">User ID:</label>
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-white border border-gray-400 text-black px-3 py-2 rounded-md focus:outline-none"
              required
              placeholder="Enter your User ID"
            />
          </div>

          {/* Password */}
          <div className="space-y-1">
            <label className="text-black text-md font-bold">Password:</label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white border border-gray-400 text-black px-3 py-2 rounded-md pr-10 focus:outline-none"
                required
                placeholder="Enter your Password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#73819A]"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          {/* Captcha */}
          <div className="space-y-1">
            <div className="flex items-center justify-between bg-gray-200 rounded-md p-2 border border-gray-400">
              <span className="text-black">
                {captcha.num1} + {captcha.num2}
              </span>
              <span className="text-black">= </span>
              <Input
                type="text"
                value={captchaAnswer}
                onChange={(e) => setCaptchaAnswer(e.target.value)}
                className="w-20 bg-white border border-gray-400 text-black px-2 py-1 rounded-md focus:outline-none"
                required
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={refreshCaptcha}
                className="h-8 w-8 p-1 bg-transparent hover:bg-transparent focus:bg-transparent"
              >
                <RefreshCw className="h-4 w-4 text-[#73819A]" />
              </Button>
            </div>
          </div>

          {/* Login Button */}
          <div className="space-y-1">
            <GradientButton label="LOGIN" onclick={onClose} redirect="/" />
          </div>
          <div className="space-y-1">
            <GradientButton label="DEMO ID" onclick={onClose} redirect="/" />
          </div>
        </form>
      </div>
    </div>
  );
}
