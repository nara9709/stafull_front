import { ChannelBox, ChannelLogo } from "planby";

export const ChannelItem = ({ channel }) => {
  const { position, logo, firstName } = channel;
  return (
    <ChannelBox
      {...position}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "74px",
        height: "90px",
        marginBottom: "1rem",
        gap: "0.2rem",
      }}
    >
      {/* Overwrite styles by add eg. style={{ maxHeight: 52, maxWidth: 52,... }} */}
      {/* Or stay with default styles */}
      <ChannelLogo
        src={logo}
        as={"img"}
        alt="Logo"
        style={{
          width: "100%",
          height: "100%",
          maxHeight: 40,
          maxWidth: 40,
          borderRadius: "100%",
          objectFit: "cover",
        }}
      />
      <span className=" text-sm">{firstName}</span>
    </ChannelBox>
  );
};
