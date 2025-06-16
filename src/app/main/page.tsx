"use client"

import { useState } from "react";
import { items } from "../data/items";
import Image from "next/image";

export default function Home() {
  const [currentNum, setCurrentNum] = useState(0);

  return (
    <main>
      <section id="hero" data-aos="fade-in" className="ml-[20px]">
        <h1 className="mt-[250px] lg:text-[140px]">Design&Engineering</h1>
        <h1 className="leading-none text-nowrap">Taichi Matsusaki</h1>
      </section>
      <section id="works" data-aos="fade-in" className="ml-[72px]">
        <h2 className="mt-[550px]">Works</h2>
        <div className="relative flex mt-[50px] lg:ml-[50px]">
          <div className="mr-[50px] border-l border-white"/>
          <div className="absolute left-[-16px] top-[280px] lg:top-[190px] py-4 bg-black">
            <div className="[writing-mode:sideways-lr]">{String(currentNum).padStart(2, "0")}</div>
          </div>
          <ul className="project pb-[70px]">
            {items.map(({ id, label }) => (
              <li
                key={id}
                onMouseEnter={() => setCurrentNum(id)}
                onMouseLeave={() => setCurrentNum(0)}
                className="transition hover:opacity-50"
              >
                <div className="mt-[50px] text-[12px]">{String(id).padStart(2, "0")}</div>
                <div className="leading-none lg:whitespace-nowrap"><a href={`/main/works/${label.toLowerCase().replace(/\s+/g, "-")}`}>{label}</a></div>
              </li>
            ))}
          </ul>
          <div className="w-full h-[430px] ml-[100px] mr-[72px] mt-[100px] lg:mt-0 lg:flex justify-center lg:ml-[100px]">
            {items.map(({id, label, url}) => 
              {if (currentNum === id) {
                return (
                  <Image
                    key={id}
                    src={url}
                    alt={label}
                    className="h-full object-contain"
                  />
                );
              }}
            )} 
          </div>
        </div>
      </section>
      <section id="about" data-aos="fade-in" className="mx-[72px] mb-[300px]">
        <h2 className="mt-[550px]">About</h2>
        <div className="noto_sans_jp mt-[100px]">
          <div className="text-[28px] leading-none">Taichi Matsusaki</div>
          <div className="text-[14px] font-light">松崎太一</div>
          <div className="text-justify mt-[30px] font-light">
            横浜国立大学大学院在学中に、デザインに興味を持ち専門学校桑沢デザイン研究所に入学。
            現在は共に卒業し、インテリアデザイン事務所に従事。大学院ではXRに関する研究を行い、専門学校では空間デザインについて学んでいた。
            デジタルからリアルまで人の心を動かすことのできるもの生み出したいと考えている。
          </div>
        </div>
      </section>
    </main>
  );
}
