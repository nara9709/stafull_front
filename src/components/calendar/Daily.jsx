import React from "react";
import { Epg, Layout } from "planby";

// Import hooks
import { useApp } from "../../hooks/useApp";
import { useParams } from "react-router-dom";

// Import components

function App() {
  const param = useParams();
  const { isLoading, getEpgProps, getLayoutProps } = useApp(param.id);

  return (
    <div>
      <div style={{ height: "80vh", width: "100%" }}>
        {/* <Epg isLoading={isLoading} {...getEpgProps()}>
          <Layout
            {...getLayoutProps()}
            renderTimeline={(props) => <Timeline {...props} />}
            renderProgram={({ program, ...rest }) => (
              <ProgramItem key={program.data.id} program={program} {...rest} />
            )}
            renderChannel={({ channel }) => (
              <ChannelItem key={channel.uuid} channel={channel} />
            )}
          />
        </Epg> */}
      </div>
    </div>
  );
}

export default App;
