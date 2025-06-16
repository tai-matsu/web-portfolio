"use client"

import "../globals.css";
import { useEffect } from "react";
import AOS from "aos";

export default function AOSProvider() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return null; 
}