import Image from "next/image";
import Link from "next/link";

export default function Gallery() {
    return (
        <main data-aos="fade-in" className="min-h-screen mt-[100px]">
            <div className="relative flex  mr-0 ml-[100px] sm:ml-[300px]">
                <div data-aos="fade-right" className="drop-shadow-md/40 text-[40px] sm:text-[60px] absolute top-1/2 -left-[80px] sm:-left-[230px]">Gallery Design</div>
                <Image
                    src="/images/gallery-design/gallery-design-thumb.jpg"
                    alt="gallery"
                    width={500}
                    height={300}
                    className="w-full h-auto lg:h-[800px] object-cover"             
                />
            </div>
            <div className="mx-[72px]">
                <div className="mt-[200px] noto_sans_jp text-justify">
                    専門学校のギャラリー空間設計課題として制作した作品。インテリアデザイナーの展覧会を企画・設計する課題の中で、シャルロット・ペリアンをテーマに空間構成を行った。
                    モダニズム隆盛の時代にフランスから日本を訪れたペリアンの歩みをもとに、和と洋が混ざり合う空間の中で、彼女の個性的な作品に出会うような体験を目指している。
                    空間は3種類のパネルで構成されており、竹材のパネルが「和」、カラー木材のパネルが「洋」を象徴している。カラー木材の色は、ペリアンがデザインした棚の配色を参考に選定。また、鏡面のパネルを加えることで反射による視覚的な混沌を演出すると同時に、来場者のフォトスポットとしての機能も持たせている。                
                </div>
                <div className="sm:mx-[72px]">
                    <Image
                        src="/images/gallery-design/静止画4.jpg"
                        alt="gallery"
                        width={500}
                        height={300}
                        className="w-full h-auto object-cover mt-[500px]"             
                    />
                    <Image
                        src="/images/gallery-design/静止画1.jpg"
                        alt="gallery"
                        width={500}
                        height={300}
                        className="w-full h-auto object-cover mt-[200px]"             
                    />
                    <Image
                        src="/images/gallery-design/gallery鳥瞰図 1.jpg"
                        alt="gallery"
                        width={500}
                        height={300}
                        className="w-full h-auto object-cover my-[200px]"             
                    />
                    <Image
                        src="/images/gallery-design/ポスター.jpg"
                        alt="gallery"
                        width={500}
                        height={300}
                        className="w-full h-auto object-cover mt-[200px] mb-[100px]"             
                    />
                </div>
            </div>
            <div className="flex justify-center my-[50px]">
                <Link href="/main/works/xr-text-input" className="flex transition hover:opacity-50">
                    <div>Next</div>
                    <div className="pt-[5px] text-[12px] font-semibold">　{"＞"}</div>
                </Link>
            </div>
        </main>
    );
}