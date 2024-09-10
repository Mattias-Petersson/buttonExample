import { ComponentProps } from "react";

type BaseButtonProps = {
  text: string;
  href?: string;
  size: "s" | "m";
  isFluid?: boolean;
};
type ButtonProps = ComponentProps<"button"> & BaseButtonProps;
type AnchorProps = ComponentProps<"a"> & BaseButtonProps;
type SizeProps = { width: string };

export const BaseButton = (props: ButtonProps | AnchorProps) => {
  const { text, size, isFluid, ...rest } = props;

  const sizes: { [key: string]: SizeProps } = {
    s: { width: "50px" },
    m: { width: "80px" },
  };
  const style = { width: isFluid ? "100%" : sizes[size].width };
  return (
    <>
      {props.href === undefined ? (
        <button style={style} {...(rest as ComponentProps<"button">)}>
          {text}
        </button>
      ) : (
        <a href={props.href} style={style} {...(rest as ComponentProps<"a">)}>
          {text}
        </a>
      )}
    </>
  );
};
