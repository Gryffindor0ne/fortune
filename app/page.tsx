"use client";

import GridFrameBox from "@/components/GridFrameBox";
import Image from "next/image";
import { useState } from "react";

const Home = () => {
  const [name] = useState("아이유");
  const [date] = useState("1993-05-16 05:00:00");
  const userInfo = { name, date };

  function getLastTwoChars(str: string): string {
    return str.length >= 2 ? str.slice(-2) : str;
  }

  return (
    <div className="max-w-md mx-auto bg-[#F5F3EC] min-h-screen w-full">
      {/* 메인 컨테이너 - max-w-md로 제한 */}
      <div className="w-full max-w-md mx-auto relative">
        {/* 일러스트 */}
        <div className="relative w-full">
          <div className="relative w-full aspect-[375/652]">
            <Image
              src="/images/Frame_1.png"
              alt="첫번째 일러스트"
              fill
              className="object-contain"
            />
            <div className="absolute bottom-0 left-0 w-full h-1/5 bg-gradient-to-t from-white/90 to-transparent" />
          </div>
        </div>

        {/* 첫 번째와 두 번째 일러스트 사이의 겹치는 말풍선 */}
        <div className="relative -mt-16 sm:-mt-20 md:-mt-24 z-10 mb-4">
          <div className="flex justify-start pl-2 sm:pl-2">
            <div className="relative w-3/4 sm:w-2/3 aspect-[4/3]">
              {/* 말풍선 배경 이미지 */}
              <Image
                src="/images/Frame_2.png"
                alt="말풍선 배경"
                fill
                className="object-contain"
              />
              {/* 말풍선 위에 오버레이되는 텍스트 */}
              <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6">
                <div className="text-center max-w-full pt-6">
                  <p className="text-sm min-[340px]:text-base min-[370px]:text-lg text-gray-800 font-medium leading-tight">
                    이제 본격적으로
                    <br />
                    {`${getLastTwoChars(name)}님의 사주팔자를`}
                    <br />
                    분석해볼 차례네요
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 두번째 일러스트 */}
        <div className="relative w-full -mt-10">
          <div className="relative w-full h-[320]">
            <Image
              src="/images/Frame_3.png"
              alt="두번째 일러스트"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* 두 번째와 세 번째 일러스트 사이의 겹치는 말풍선 */}
        <div className="relative -mt-20 sm:-mt-15 z-10">
          <div className="flex justify-start pl-4 sm:pl-6">
            <div className="relative w-9/12 sm:w-5/6 aspect-[3/2]">
              {/* 말풍선 배경 이미지 */}
              <Image
                src="/images/Frame_4.png"
                alt="말풍선 배경"
                fill
                className="object-contain"
              />
              {/* 말풍선 위에 오버레이되는 텍스트 */}
              <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 md:p-8">
                <div className="text-center max-w-full pb-6">
                  <p className="text-sm min-[340px]:text-base min-[370px]:text-lg text-gray-800 font-medium leading-tight">
                    {`제가 ${getLastTwoChars(name)}님의 사주를`}
                    <br />
                    보기 쉽게 표로 정리했어요
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 세번째 일러스트 */}
        <div className="relative w-full -mt-20 sm:-mt-20">
          <div className="relative w-full aspect-[375/306]">
            <Image
              src="/images/Frame_5.png"
              alt="세번째 일러스트"
              fill
              className="object-contain"
            />
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white/90 to-transparent" />
          </div>
        </div>
        <div className="relative w-full -mt-5 sm:-mt-10">
          <GridFrameBox userInfo={userInfo} />
        </div>
      </div>
    </div>
  );
};

export default Home;
