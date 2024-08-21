import React from "react";

import { fetchChannels, fetchEpg } from "../utils/common";

import { useEpg } from "planby";

// Import theme
import { theme } from "../utils/theme";

export function useApp(date) {
  const [channels, setChannels] = React.useState([]);
  const [epg, setEpg] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  console.log(date);

  function formatDate(yyyymmdd) {
    const year = yyyymmdd.slice(0, 4); // 첫 4자리: 년도
    const month = yyyymmdd.slice(4, 6); // 다음 2자리: 월
    const day = yyyymmdd.slice(6, 8); // 마지막 2자리: 일

    console.log(`${year}/${month}/${day}`);
    return `${year}/${month}/${day}`; // 슬래시(/)를 추가하여 포맷팅
  }

  const channelsData = React.useMemo(() => channels, [channels]);
  const epgData = React.useMemo(() => epg, [epg]);

  const { getEpgProps, getLayoutProps } = useEpg({
    channels: channelsData,
    epg: epgData,
    dayWidth: 7200,
    sidebarWidth: 100,
    itemHeight: 80,
    isSidebar: true,
    isTimeline: true,
    isLine: true,
    startDate: "2022-10-18T00:50:00",
    endDate: "2022-10-18T23:50:00",
    isBaseTimeFormat: true,
    theme,
  });

  const handleFetchResources = React.useCallback(async () => {
    setIsLoading(true);
    const epg = await fetchEpg();
    const channels = await fetchChannels();
    setEpg(epg);
    setChannels(channels);
    setIsLoading(false);
  }, []);

  React.useEffect(() => {
    handleFetchResources();
  }, [handleFetchResources]);

  return { getEpgProps, getLayoutProps, isLoading };
}
