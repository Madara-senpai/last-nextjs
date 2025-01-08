import React from 'react';

export default function Hero() {
    return (
        <div className="px-4 sm:px-8 lg:px-16">
            <section className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between py-12 mt-4 relative overflow-hidden">
                {/* Left side: Title and Description */}
                <div className="lg:w-2/3 text-center lg:text-left lg:pl-12">
                    <div>
                        <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 text-gray-800 leading-tight">
                            Biz bilen bilelikde öwrenelin
                        </h1>
                        <p className="text-base sm:text-lg text-gray-600 pr-0 lg:pr-8">
                            Bionika we Robot tehnologiýalary ylmy önümçilik merkezimizde köp zat edýäris. Hemme ýaryşlara gatnaşýarys. Öňe, diňe öňe jan watanym Türkmenistan! ...
                        </p>
                        
                    </div>
                </div>

                {/* Right side: Video */}
                <div className="lg:w-1/3 flex justify-center mt-8 lg:mt-0">
                    <div className="relative w-[500px] h-[500px] rounded-3xl overflow-hidden bg-transparent">
                        <video
                            src="/Developer team working on laptop for website development.mp4"
                            autoPlay
                            muted
                            loop
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent to-blue-200 opacity-50"></div>
                    </div>
                </div>
            </section>
        </div>
    );
}
