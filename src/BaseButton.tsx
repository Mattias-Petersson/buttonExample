import { ComponentProps } from "react";

type BaseButtonProps = {
  text: string;
  href?: string;
  size: "s" | "m";
  isFluid?: boolean;
};
type ButtonProps = ComponentProps<"button"> & BaseButtonProps;
type AnchorProps = ComponentProps<"a"> & BaseButtonProps;
type StyleProps = { width: string; height: string; color: string };

export const BaseButton = (props: ButtonProps | AnchorProps) => {
  const { text, size, isFluid, ...rest } = props;

  const style: { [key: string]: StyleProps } = {
    s: { width: "5rem", height: "2rem", color: "#32a852" },
    m: { width: "8rem", height: "3rem", color: "#1235b3" },
  };
  const width = { width: isFluid ? "100%" : style[size].width };
  return (
    <>
      {props.href === undefined ? (
        <button
          style={{ ...style[size], ...width }}
          {...(rest as ComponentProps<"button">)}
        >
          {text}
        </button>
      ) : (
        <a
          href={props.href}
          style={{ ...style[size], ...width }}
          {...(rest as ComponentProps<"a">)}
        >
          {text}
        </a>
      )}
    </>
  );
};
