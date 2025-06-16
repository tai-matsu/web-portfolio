import Image from "next/image";
import Link from "next/link";

export default function XR() {
    return (
        <main data-aos="fade-in" className="min-h-screen mt-[100px]">
            <div className="relative flex  mr-0 ml-[100px] sm:ml-[300px]">
                <div data-aos="fade-right" className="drop-shadow-md/40 text-[40px] sm:text-[60px] absolute top-1/2 -left-[80px] sm:-left-[230px]">XR Text Input</div>
                <Image
                    src="/images/xr-text-input/xr-thumb.jpg"
                    alt="xr"
                    width={500}
                    height={300}
                    className="w-full h-auto lg:h-[800px] object-cover "             
                />
            </div>
            <div className="mx-[72px]">
                <div className="mt-[200px] noto_sans_jp text-justify">
                    大学院の研究で開発したアプリ。大学院ではヘッドマウントディスプレイを利用したXR（AR・MR・VR）における文字入力方法の開発を行っており、このアプリでは、左手を子音、右手を母音として、それぞれの指先・指関節を接触させることによってひらがな入力できる。例えば左手人差し指先と右手人差し指先を接触させると「く」が入力できる。           
                </div>
                <div className="flex flex-col items-center sm:mx-[72px]">
                    <Image
                        src="/images/xr-text-input/ヘッドマウントディスプレイ.jpg"
                        alt="xr"
                        width={500}
                        height={300}
                        className="w-full h-auto object-cover mt-[500px]"             
                    />
                    <Image
                        src="/images/xr-text-input/finger_movie.gif"
                        alt="xr"
                        width={500}
                        height={300}
                        className="w-full h-auto object-cover mt-[200px]"             
                    />
                    <Image
                        src="/images/xr-text-input/対応表.png"
                        alt="xr"
                        width={500}
                        height={300}
                        className="w-full h-auto object-cover mt-[200px]"
                    />
                    <div className="mt-[10px] mb-[50px]" >
                        ひらがな対応表
                    </div>
                </div>
            </div>
            <div className="flex justify-center my-[50px]">
                <Link href="/main/works/kamiyama-third-place" className="flex transition hover:opacity-50">
                    <div>Next</div>
                    <div className="pt-[5px] text-[12px] font-semibold">　{"＞"}</div>
                </Link>
            </div>
        </main>
    );
}