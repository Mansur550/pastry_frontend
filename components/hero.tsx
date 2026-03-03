import Image from "next/image";

export default function Hero() {
    return (
        // <section className="hero min-h-screen w-full flex items-center justify-center ">
        //     {/* <div className="absolute inset-0 z-0 h-[726px]">
        //         <Image
        //             src="/hero.png"
        //             alt="Hero Image"
        //             fill
        //             className="object-cover  "
        //         /> */}



        // </div>

        // </section >

        <section className="w-full bg-amber-600">
            <div className="max-w-7xlvm mx-auto px-6 py-20 h-[726px]">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* LEFT CONTENT */}
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                            Bibendum et <br /> sit aliquam!
                        </h1>

                        <p className="mt-6 text-gray-600 max-w-md">
                            Lorem ipsum dolor sit amet consectetur. Viverra
                            tristique placerat in massa consectetur quisque.
                        </p>

                        <button className="mt-8 bg-black text-white px-6 py-3 rounded-full">
                            Get Started
                        </button>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="flex justify-center md:justify-end">
                        <div className="bg-gray-300 w-72 h-60 rounded-lg flex items-center justify-center">
                            <span className="text-gray-500">Image</span>
                        </div>
                    </div>

                </div>


            </div>


        </section>

    )
}