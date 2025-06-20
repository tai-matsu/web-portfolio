import Link from "next/link";
import Image from "next/image";

export default function Works() {
    return (
    <main data-aos="fade-in" className="flex flex-col items-center min-h-screen mt-[200px] mx-[72px]">
        <Link href="/main/works/gallery-design">
            <section className="w-[350px] sm:w-[800px] h-[200px] sm:h-[350px] lg:h-[400px] flex items-center justify-between glow-white">
                <div className="w-full h-full">
                    <Image
                        src="/images/gallery-design/gallery-design-thumb.jpg"
                        alt="gallery-design"
                        width={500}
                        height={300}
                        className="h-full w-full object-cover"             
                    />
                </div>
                <div className="mx-[20px] sm:mx-[40px]">
                    <div className="leading-none text-[30px] sm:text-[40px]">Gallery Design</div>
                    <div className="noto_sans_jp font-light mt-[20px] sm:mt-[50px] text-[12px] sm:text-[16px]">
                        専門学校のギャラリー空間設計課題で設計した作品
                    </div>
                </div>
            </section>
        </Link>
        <Link href="/main/works/xr-text-input">
            <section className="w-[350px] sm:w-[800px] h-[200px] sm:h-[300px] lg:h-[400px] mt-[200px] flex items-center justify-between glow-white">
                <div className="mx-[20px] sm:mx-[40px]">
                    <div className="leading-none text-[30px] sm:text-[40px]">XR Text Input</div>
                    <div className="noto_sans_jp font-light mt-[20px] sm:mt-[50px] text-[12px] sm:text-[16px]">
                        大学院の研究で開発したXRアプリ
                    </div>
                </div>
                <div className="w-full h-full">
                    <Image
                        src="/images/xr-text-input/xr-thumb.jpg"
                        alt="xr-text-input"
                        width={500}
                        height={300}
                        className="h-full w-full object-cover"             
                    />
                </div>
            </section>
        </Link>
        <Link href="/main/works/kamiyama-third-place">
            <section className="w-[350px] sm:w-[800px] h-[200px] sm:h-[300px] lg:h-[400px] my-[200px] flex items-center justify-between glow-white">
                <div className="h-full">
                    <Image
                        src="/images/kamiyama-third-place/Kamiyama_thumb.png"
                        alt="Kamiyama-third-place"
                        width={500}
                        height={300}
                        className="w-full h-full object-cover"             
                    />
                </div>
                <div className="mx-[20px] sm:mx-[40px]">
                    <div className="leading-none text-[30px] sm:text-[40px]">Kamiyama Third Place</div>
                    <div className="noto_sans_jp font-light mt-[20px] sm:mt-[50px] text-[12px] sm:text-[16px]">
                        専門学校の卒業制作で設計した作品
                    </div>
                </div>
            </section>
        </Link>
    </main>
    );
}