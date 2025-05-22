"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [name, setIsName] = useState("운세");
  return (
    <div className="min-h-screen max-w-md mx-auto bg-[#F5F3EC] h-[2400px] w-full">
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
                  <p className="text-sm sm:text-base md:text-lg text-gray-800 font-medium leading-tight">
                    이제 본격적으로
                    <br />
                    {`제가 ${name}님의 사주팔자를`}
                    <br />
                    분석해볼 차례네요
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 두번째 일러스트 */}
        <div className="relative w-full -mt-20">
          <div className="relative w-full aspect-[375/390]">
            <Image
              src="/images/Frame_3.png"
              alt="두번째 일러스트"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* 두 번째와 세 번째 일러스트 사이의 겹치는 말풍선 */}
        <div className="relative -mt-34 z-10">
          <div className="flex justify-start pl-2 sm:pl-2">
            <div className="relative w-11/12 sm:w-5/6 aspect-[3/2]">
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
                  <p className="text-sm sm:text-base md:text-lg text-gray-800 font-medium leading-tight">
                    {`제가 ${name}님의 사주를`}
                    <br />
                    보기 쉽게 표로 정리했어요
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 세번째 일러스트 */}
        <div className="relative w-full -mt-60 sm:-mt-70">
          <div className="relative w-full aspect-[375/652]">
            <Image
              src="/images/Frame_5.png"
              alt="세번째 일러스트"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
