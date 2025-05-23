"use client";

import React from "react";
import Image from "next/image";
import SajuChart from "@/components/SajuChart";

import { parse, format } from "date-fns";

type UserInfo = {
  name: string;
  date: string;
};
type UserInfoProps = {
  userInfo: UserInfo;
};

const GridFrameBox = ({ userInfo }: UserInfoProps) => {
  // 문자열을 파싱
  const date = parse(userInfo.date, "yyyy-MM-dd HH:mm:ss", new Date());

  // 포맷 지정
  const formattedDate = format(date, "yyyy년 M월 d일 HH:mm");
  return (
    <div className="w-full px-2">
      <div className="mb-8">
        <div className="relative w-full bg-[#F5F3EC] border-2 border-gray-800 p-1">
          {/* 가로선들 */}
          <div className="absolute top-1 left-0 right-0 h-px bg-gray-500"></div>
          <div className="absolute bottom-1 left-0 right-0 h-px bg-gray-500"></div>
          {/* 세로선들 */}
          <div className="absolute top-0 bottom-0 left-1 w-px bg-gray-500"></div>
          <div className="absolute top-0 bottom-0 right-1 w-px bg-gray-500"></div>

          <div className="text-center mt-2 mb-6">
            <div className="grid grid-cols-3">
              <div>
                <Image
                  src="/images/layer_1.png"
                  alt="문양 1"
                  width={70}
                  height={70}
                  className="object-obtain"
                />
              </div>
              <p className="flex justify-center items-end text-gray-800 text-sm sm:text-base">
                {userInfo.name}님의 사주
              </p>
              <div className="flex justify-end">
                <Image
                  src="/images/layer_2.png"
                  alt="문양 2"
                  width={70}
                  height={70}
                  className="object-obtain"
                />
              </div>
            </div>
            <p className="text-gray-800 text-xl">{formattedDate}</p>
          </div>
          <SajuChart />
        </div>
      </div>
    </div>
  );
};

export default GridFrameBox;
