import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";

export const HelloWorld: React.FC<{
  titleText: string;
  titleColor: string;
}> = ({ titleText, titleColor }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const opacity = interpolate(frame, [0, 30], [0, 1]);
  const scale = interpolate(frame, [0, 30], [0.8, 1]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ opacity, transform: `scale(${scale})`, fontSize: 80, fontWeight: "bold", color: titleColor, fontFamily: "Arial" }}>
        {titleText}
      </div>
    </AbsoluteFill>
  );
};