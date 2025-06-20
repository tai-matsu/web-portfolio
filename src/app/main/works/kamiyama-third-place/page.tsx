import Image from "next/image";
import Link from "next/link";

export default function Kamiyama() {
return (
        <main data-aos="fade-in" className="min-h-screen mt-[100px]">
            <div className="relative flex  mr-0 ml-[100px] sm:ml-[300px]">
                <div data-aos="fade-right" className="drop-shadow-md/40 text-[30px] lg:text-[60px] absolute top-1/2 -left-[80px] sm:-left-[230px]">Kamiyama Third Place</div>
                <Image
                    src="/images/kamiyama-third-place/Kamiyama_thumb.png"
                    alt="kamiyama"
                    width={500}
                    height={300}
                    className="w-full h-auto lg:h-[800px] sm:object-contain"             
                />
            </div>
            <div className="mx-[72px]">
                <div className="mt-[200px] noto_sans_jp text-justify mb-[500px]">
                    専門学校の卒業制作として、渋谷区神山町に住空間と商空間を複合させた施設を設計した。神山町の特徴として、一人暮らし世帯が多いということがあり、一人でも過ごしやすい施設にした。また、敷地の隣には緑道があるが、緑道の道幅が狭く、あまり居心地のいい空間にはなっていなかったので、敷地まで緑道を広げ、広げた緑道上に施設をたてることで、もともと存在した緑道を活かしつつ、施設を街に溶け込ませるようにした。
                </div>
                <div className="sm:mx-[72px] flex flex-col">
                    <div className="shippori_mincho text-[22px] sm:text-[32px]" >
                        日本らしいサードプレイス
                    </div>
                    <Image
                        src="/images/kamiyama-third-place/1.png"
                        alt="kamiyama"
                        width={500}
                        height={300}
                        className="mt-[50px] w-full h-auto object-cover p-[10px] bg-white"             
                    />
                    <div className="mt-[50px] mb-[200px] noto_sans_jp text-justify">
                        「サードプレイス」とは家庭や職場・学校とは別に存在する居心地の良い場所のことであり、ストレスの多い現代社会においては、その重要性がますます増してきている。この概念はアメリカの社会学者によって提案された概念であり、そこでは会話による交流が重要とされているが、日本人にとって会話のできる場所が必ずしも居心地の良い場所とは限らない。そこで今回は、人と交流することだけでなく、一人でも過ごしやすい「日本らしいサードプレイス」を設計した。
                    </div>
                    <div className="shippori_mincho text-[22px] sm:text-[32px]" >
                        緑道によるサードプレイス
                    </div>
                    <Image
                        src="/images/kamiyama-third-place/2.png"
                        alt="kamiyama"
                        width={500}
                        height={300}
                        className="w-full h-auto object-cover mt-[50px] p-[10px] bg-white"             
                    />
                    <div className="mt-[50px] mb-[200px] noto_sans_jp text-justify">
                        緑道はサードプレイスとしてはうってつけの場所である。そこで、敷地の隣にある緑道を敷地まで広げ、そこに施設を設計することでサードプレイスとしてふさわしい場所にした。
                    </div>
                    <Image
                        src="/images/kamiyama-third-place/4.jpg"
                        alt="kamiyama"
                        width={500}
                        height={300}
                        className="w-full h-auto object-cover mb-[200px]"
                    />
                    <Image
                        src="/images/kamiyama-third-place/5.jpeg"
                        alt="kamiyama"
                        width={500}
                        height={300}
                        className="w-full h-auto object-cover mb-[200px]"
                    />
                    <Image
                        src="/images/kamiyama-third-place/6.jpeg"
                        alt="kamiyama"
                        width={500}
                        height={300}
                        className="w-full h-auto object-cover mb-[200px]"
                    />
                    <Image
                        src="/images/kamiyama-third-place/7.jpeg"
                        alt="kamiyama"
                        width={500}
                        height={300}
                        className="w-full h-auto object-cover mb-[200px]"
                    />
                    <Image
                        src="/images/kamiyama-third-place/8.jpeg"
                        alt="kamiyama"
                        width={500}
                        height={300}
                        className="w-full h-auto object-cover mb-[200px]"
                    />
                    <Image
                        src="/images/kamiyama-third-place/9.jpeg"
                        alt="kamiyama"
                        width={500}
                        height={300}
                        className="w-full h-auto object-cover mb-[50px]"
                    />
                </div>
            </div>
            <div className="flex justify-center my-[50px]">
                <Link href="/main/works/gallery-design" className="flex transition hover:opacity-50">
                    <div>Next</div>
                    <div className="pt-[5px] text-[12px] font-semibold">　{"＞"}</div>
                </Link>
            </div>
        </main>
    );
}
