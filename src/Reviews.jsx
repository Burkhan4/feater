function Reviews() {
    return(
        <section className="bg-[#FBF8F5]">
            <div className="container text-center pt-35.75 pb-44">
                <h2 className="text-[48px] mb-14.25">The Reviews are In</h2>
                <div className="grid grid-cols-3">
                    <div className="w-99 h-63.5 border-2 border-[#E9672B] rounded-sm duration-200 hover:shadow-[8px_-8px_0px_0px_#CBC6F4] cursor-pointer p-8.5 text-start">
                        <div className="flex mb-6.5">
                            <img src="/svg/star-1.svg" alt="" />
                            <img src="/svg/star-1.svg" alt="" />
                            <img src="/svg/star-1.svg" alt="" />
                            <img src="/svg/star-1.svg" alt="" />
                            <img src="/svg/star-1.svg" alt="" />
                        </div>
                        <p className="text-[18px] mb-7.5">Honestly BEST EXPERIENCE moving <br />ever.</p>
                        <p className="text-[16px]">-Julie, San Francisco; CA</p>
                    </div>
                    <div className="w-99 h-63.5 border-2 border-[#225DCA] rounded-sm duration-200 hover:shadow-[8px_-8px_0px_0px_#E7CB43] cursor-pointer p-8.5 text-start">
                        <div className="flex mb-6.5">
                            <img src="/svg/star-2.svg" alt="" />
                            <img src="/svg/star-2.svg" alt="" />
                            <img src="/svg/star-2.svg" alt="" />
                            <img src="/svg/star-2.svg" alt="" />
                            <img src="/svg/star-2.svg" alt="" />
                        </div>
                        <p className="text-[18px] mb-7.5">Extremely easy! Browsed for furniture and it was in my new apartment within a week.</p>
                        <p className="text-[16px]">-Anthony, Los Angeles; CA</p>
                    </div>
                    <div className="w-99 h-63.5 border-2 border-[#242947] rounded-sm duration-200 hover:shadow-[8px_-8px_0px_0px_#A2D4C5] cursor-pointer p-8.5 text-start">
                        <div className="flex mb-6.5">
                            <img src="/svg/star-3.svg" alt="" />
                            <img src="/svg/star-3.svg" alt="" />
                            <img src="/svg/star-3.svg" alt="" />
                            <img src="/svg/star-3.svg" alt="" />
                            <img src="/svg/star-3.svg" alt="" />
                        </div>
                        <p className="text-[18px] mb-7.5">THIS JUST MAKES SENSE. <br />Truly obsessed with Feather..</p>
                        <p className="text-[16px]">-Wesley, New York City; CA</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Reviews;