export default function XR() {
    return (
        <main data-aos="fade-in" className="min-h-screen mt-[100px]">
            <div className="relative flex  mr-0 ml-[300px]">
                <div data-aos="fade-right" className="drop-shadow-md/40 text-[60px] absolute top-1/2 -left-[230px]">XR Text Input</div>
                <img
                    src="/images/xr-text-input/xr-thumb.jpg"
                    className="w-full h-auto lg:h-[800px] object-cover "             
                />
            </div>
            <div className="mx-[72px]">
                <div className="mt-[200px] noto_sans_jp text-justify">
                    大学院の研究で開発したアプリ。大学院ではヘッドマウントディスプレイを利用したXR（AR・MR・VR）における文字入力方法の開発を行っており、このアプリでは、左手を子音、右手を母音として、それぞれの指先・指関節を接触させることによってひらがな入力できる。例えば左手人差し指先と右手人差し指先を接触させると「く」が入力できる。           
                </div>
                <div className="flex flex-col items-center mx-[72px]">
                    <img
                        src="/images/xr-text-input/ヘッドマウントディスプレイ.jpg"
                        className="w-full h-auto object-cover mt-[500px]"             
                    />
                    <img
                        src="/images/xr-text-input/finger_movie.gif"
                        className="w-full h-auto object-cover mt-[200px]"             
                    />
                    <img
                        src="/images/xr-text-input/対応表.png"
                        className="w-full h-auto object-cover mt-[200px]"
                    />
                    <div className="mt-[10px] mb-[200px]" >
                        ひらがな対応表
                    </div>
                </div>
            </div>
            
        </main>
    );
}