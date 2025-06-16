import Image from "next/image";

export default function About() {

    const skills = [
        "Illustrator",
        "Photoshop",
        "Vectorworks",
        "Unity",
        "Github",
        "Next.js",
        "Excel",
        "Word",
        "PowerPoint",
        "Rhinoceros",
        "Twinmotion"
    ];


    return (
        <main data-aos="fade-in" className="min-h-screen mt-[150px] mx-[20px]">
            <div className="sm:flex h-auto mt-0 sm:mt-[200px] ml-0 sm:ml-[50px]">
                <Image
                    src="/images/profile.jpg"
                    alt="profile"
                    width={500}
                    height={300}
                    className="sm:w-64 lg:w-96 sm:h-64 lg:h-96 lg:mx-[100px] object-contain"             
                />
                <div className="ml-[20px] sm:ml-[50px]">
                    <div className="mt-[100px] sm:mt-0 leading-none text-[48px]">Taichi Matsusaki</div>
                    <div className="text-[16px] font-light">松崎太一</div>
                    <div className="mt-[100px] mb-[5px] text-[32px]">Profile</div>
                    <ul className="noto_sans_jp font-light">
                        <li>1998年　鹿児島県生まれ</li>
                        <li>2021年　横浜国立大学理工学部卒業</li>
                        <li>2024年　横浜国立大学大学院環境情報学府卒業</li>
                        <li>2025年　専門学校桑沢デザイン研究所卒業</li>
                    </ul>
                    <div className="mt-[100px] mb-[5px] text-[32px]">Skill</div>
                    <div className="flex flex-wrap">
                        {skills.map((skill) => (
                            <div key={skill} className="flex justify-center w-[110px] px-[5px] m-[5px] rounded-[10px] bg-white text-black font-sans font-bold">{skill}</div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}