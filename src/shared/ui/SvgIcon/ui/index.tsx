import Svg, { Path } from "react-native-svg";
import { ReactNode } from "react";

interface ISvgIconProps {
  whiteCondition: boolean;
  iconPathCode: string;
  width?: number;
  height?: number;
  color?: string;
  children?: ReactNode;
  fill?: string;
  light?: boolean;
  strokeWidth?: number;
}

export const SvgIcon = ({
  whiteCondition,
  iconPathCode,
  color,
  width,
  height,
  light = false,
  fill,
  strokeWidth = 2,
  children,
}: ISvgIconProps) => {
  return (
    <Svg
      width={width || 32}
      height={height || 32}
      viewBox={`0 0 ${width || 32} ${height || 32}`}
      fill={fill || "none"}
      xmlns={"http://www.w3.org/2000/svg"}
    >
      {children}

      <Path
        d={iconPathCode}
        stroke={
          !light ? (color ? color : whiteCondition ? "white" : "#464646") : ""
        }
        strokeWidth={!light ? strokeWidth : ""}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      />
    </Svg>
  );
};
