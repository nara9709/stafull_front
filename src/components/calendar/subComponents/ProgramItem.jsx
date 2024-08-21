import {
  ProgramBox,
  ProgramContent,
  ProgramFlex,
  ProgramStack,
  ProgramTitle,
  ProgramImage,
  useProgram,
} from "planby";

export const ProgramItem = ({ program, ...rest }) => {
  const { styles, isLive, isMinWidth } = useProgram({
    program,
    ...rest,
  });

  const { data } = program;
  const { image, title } = data;

  return (
    <ProgramBox
      width={styles.width}
      style={{ ...styles.position, height: "50px", marginTop: "1rem" }}
    >
      <ProgramContent width={styles.width} isLive={isLive}>
        <ProgramFlex>
          {isLive && isMinWidth && <ProgramImage src={image} alt="Preview" />}
          <ProgramStack>
            <ProgramTitle style={{ color: "#fff" }}>{title}</ProgramTitle>
          </ProgramStack>
        </ProgramFlex>
      </ProgramContent>
    </ProgramBox>
  );
};
