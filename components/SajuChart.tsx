import React, { useState } from "react";

const SajuChart = () => {
  // 고정된 헤더 데이터
  const FIXED_HEADERS = {
    columns: ["時", "日", "月", "年"],
    rows: [
      { main: "十星", sub: "(십성)" },
      { main: "天干", sub: "(천간)" },
      { main: "地支", sub: "(지지)" },
      { main: "十二", sub: "(십이)" },
      { main: "十二運星", sub: "(십이운성)" },
      { main: "十二神殺", sub: "(십이신살)" },
      { main: "貴人", sub: "(귀인)" },
    ],
  };

  const [sajuData] = useState({
    // 십성 데이터 (첫 번째 행)
    tenStars: [
      { main: "偏官", sub: "(칠살)" },
      { main: "比肩", sub: "(비견)" },
      { main: "偏官", sub: "(칠살)" },
      { main: "偏官", sub: "(칠살)" },
    ],
    // 천간 데이터 (두 번째 행)
    heavenlyStems: [
      { main: "辛", top: "신", bottom: "辛金 ", color: "bg-gray-900" },
      { main: "丁", top: "정", bottom: "丁火", color: "bg-teal-700" },
      { main: "丙", top: "병", bottom: "丙火", color: "bg-gray-400" },
      { main: "癸", top: "계", bottom: "癸水 ", color: "bg-gray-400" },
    ],
    // 지지 데이터 (세 번째 행)
    earthlyBranches: [
      { main: "亥", top: "해", bottom: "亥水 ", color: "bg-teal-700" },
      { main: "戊", top: "무", bottom: "戊土 ", color: "bg-red-700" },
      { main: "戊", top: "무", bottom: "戊土 ", color: "bg-red-700" },
      { main: "庚", top: "경", bottom: "庚金 ", color: "bg-yellow-600" },
    ],
    // 십이운성 라벨 (네 번째 행)
    twelveLabels: [
      { main: "比肩", sub: "(비견)" },
      { main: "劫財", sub: "(겁재)" },
      { main: "食神", sub: "(식신)" },
      { main: "偏財", sub: "(편재)" },
    ],
    // 십이운성 상세 (다섯 번째 행)
    twelveDetails: [
      { main: "死", sub: "(사)" },
      { main: "帝旺", sub: "(제왕)" },
      { main: "胎", sub: "(태)" },
      { main: "長生", sub: "(장생)" },
    ],

    // 십이신살 (여섯 번째 행)
    spirits: [
      { main: "劫殺", sub: "(겹살)" },
      { main: "地殺", sub: "(지살)" },
      { main: "驛馬殺", sub: "(역마살)" },
      { main: "將星殺", sub: "(장성살)" },
    ],
    // 귀인 데이터 (일곱 번째 행)
    nobles: [
      { main: "太極", sub: "(태극귀인)" },
      { main: "", sub: "(없음)" },
      {
        main: "太極",
        sub: "(태극귀인)",
        extra: "月德",
        extraSub: "(월덕귀인)",
      },
      { main: "文昌", sub: "(문창귀인)" },
    ],
  });

  return (
    <div className="w-full px-1">
      {/* 메인 테이블 */}
      <div className="overflow-x-auto">
        <div className="min-w-[340px] border-r border-b border-gray-800">
          {/* 헤더 행 */}
          <div className="grid grid-cols-5 border-b-2 border-gray-800">
            <div className="border-r border-gray-800 p-2"></div>
            {FIXED_HEADERS.columns.map((column, index) => (
              <div
                key={`header-${index}`}
                className="border-r last:border-r-0 border-gray-800 p-2 text-center text-xl font-bold"
              >
                {column}
              </div>
            ))}
          </div>

          {/* 십성 행 */}
          <div className="grid grid-cols-5 border-b border-gray-800">
            <div className="flex flex-col items-center justify-center border-r border-gray-800 p-2 text-center text-xs">
              <div>{FIXED_HEADERS.rows[0].main}</div>
              <div className="text-gray-500 text-[10px]">
                {FIXED_HEADERS.rows[0].sub}
              </div>
            </div>
            {sajuData.tenStars.map((star, index) => (
              <div
                key={`star-${index}`}
                className="border-r last:border-r-0 border-gray-800 p-1 text-center text-xs"
              >
                <div className="text-sm font-bold">{star.main}</div>
                <div className="text-[10px] text-gray-500">{star.sub}</div>
              </div>
            ))}
          </div>

          {/* 천간 행 */}
          <div className="grid grid-cols-5 border-b border-gray-800">
            <div className="flex flex-col items-center justify-center border-r border-gray-800 p-1 text-center text-xs">
              <div>{FIXED_HEADERS.rows[1].main}</div>
              <div className="text-gray-500 text-[10px]">
                {FIXED_HEADERS.rows[1].sub}
              </div>
            </div>
            {sajuData.heavenlyStems.map((stem, index) => (
              <div
                key={`stem-${index}`}
                className="border-r last:border-r-0 border-gray-800 p-1.5 flex justify-center"
              >
                <div
                  className={`w-14 h-14 ${stem.color} text-white flex flex-col items-center justify-center font-bold rounded-xl relative`}
                >
                  {stem.top && (
                    <div className="text-[10px] absolute -top-0">
                      {stem.top}
                    </div>
                  )}
                  <div className="text-xl">{stem.main}</div>
                  {stem.bottom && (
                    <div className="text-[10px] absolute -bottom-0">
                      {stem.bottom}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* 지지 행 */}
          <div className="grid grid-cols-5 border-b border-gray-800">
            <div className="flex flex-col items-center justify-center border-r border-gray-800 p-1 text-center text-xs">
              <div>{FIXED_HEADERS.rows[2].main}</div>
              <div className="text-gray-500 text-[10px]">
                {FIXED_HEADERS.rows[2].sub}
              </div>
            </div>
            {sajuData.earthlyBranches.map((branch, index) => (
              <div
                key={`branch-${index}`}
                className="border-r last:border-r-0 border-gray-800 p-1.5 flex justify-center"
              >
                <div
                  className={`w-14 h-14 ${branch.color} text-white flex flex-col items-center justify-center font-bold rounded-xl relative`}
                >
                  {branch.top && (
                    <div className="text-[10px] absolute -top-0">
                      {branch.top}
                    </div>
                  )}
                  <div className="text-xl">{branch.main}</div>
                  {branch.bottom && (
                    <div className="text-[10px] absolute -bottom-0">
                      {branch.bottom}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* 십이운성 라벨 행 */}
          <div className="grid grid-cols-5 border-b border-gray-800">
            <div className="flex flex-col items-center justify-center border-r border-gray-800 p-2 text-center text-xs">
              <div>{FIXED_HEADERS.rows[3].main}</div>
              <div className="text-gray-500 text-[10px]">
                {FIXED_HEADERS.rows[3].sub}
              </div>
            </div>
            {sajuData.twelveLabels.map((label, index) => (
              <div
                key={`twelve-label-${index}`}
                className="border-r last:border-r-0 border-gray-800 p-1 text-center text-xs"
              >
                <div className="text-sm font-bold">{label.main}</div>
                <div className="text-gray-500 text-[10px]">{label.sub}</div>
              </div>
            ))}
          </div>

          {/* 십이운성 상세 행 */}
          <div className="grid grid-cols-5 border-b border-gray-800">
            <div className="flex flex-col items-center justify-center border-r border-gray-800 p-2 text-center text-xs">
              <div>{FIXED_HEADERS.rows[4].main}</div>
              <div className="text-gray-500 text-[10px]">
                {FIXED_HEADERS.rows[4].sub}
              </div>
            </div>
            {sajuData.twelveDetails.map((detail, index) => (
              <div
                key={`twelve-label-${index}`}
                className="border-r last:border-r-0 border-gray-800 p-1 text-center text-xs"
              >
                <div className="text-sm font-bold">{detail.main}</div>
                <div className="text-gray-500 text-[10px]">{detail.sub}</div>
              </div>
            ))}
          </div>

          {/* 십이신살 행 */}
          <div className="grid grid-cols-5 border-b border-gray-800">
            <div className="flex flex-col items-center justify-center border-r border-gray-800 p-2 text-center text-xs">
              <div>{FIXED_HEADERS.rows[5].main}</div>
              <div className="text-gray-500 text-[10px]">
                {FIXED_HEADERS.rows[5].sub}
              </div>
            </div>
            {sajuData.spirits.map((spirit, index) => (
              <div
                key={`twelve-label-${index}`}
                className="border-r last:border-r-0 border-gray-800 p-1 text-center text-xs"
              >
                <div className="text-sm font-bold">{spirit.main}</div>
                <div className="text-gray-500 text-[10px]">{spirit.sub}</div>
              </div>
            ))}
          </div>

          {/* 귀인 행 */}
          <div className="grid grid-cols-5">
            <div className="flex flex-col items-center justify-center border-r border-gray-800 p-2 sm:p-3 text-center text-xs">
              <div className="font-medium">{FIXED_HEADERS.rows[6].main}</div>
              <div className="text-gray-500 text-[10px]">
                {FIXED_HEADERS.rows[6].sub}
              </div>
            </div>
            {sajuData.nobles.map((noble, index) => (
              <div
                key={`noble-${index}`}
                className="border-r last:border-r-0 border-gray-800 p-1 sm:p-3 min-h-16 flex flex-col justify-center"
              >
                <div className="text-center space-y-1">
                  <div className="text-xs sm:text-sm font-bold">
                    {noble.main}
                  </div>
                  <div className="text-[10px] text-gray-500">{noble.sub}</div>
                  {noble.extra && (
                    <>
                      <div className="text-xs sm:text-sm font-bold">
                        {noble.extra}
                      </div>
                      <div className="text-[10px] text-gray-500">
                        {noble.extraSub}
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SajuChart;
