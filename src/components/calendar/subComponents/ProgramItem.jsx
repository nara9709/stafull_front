import {
  ProgramBox,
  ProgramContent,
  ProgramFlex,
  ProgramStack,
  ProgramTitle,
  ProgramImage,
  useProgram,
} from "planby";
import { useNavigate } from "react-router-dom";

export const ProgramItem = ({ program, ...rest }) => {
  const { styles, isLive, isMinWidth } = useProgram({
    program,
    ...rest,
  });
  const navigation = useNavigate();
  const { data } = program;
  const { image, title } = data;

  const onSchedule = () => {
    console.log(data);
    console.log();
  };
  return (
    <ProgramBox
      width={styles.width}
      style={{ ...styles.position, height: "50px", marginTop: "1rem" }}
      onClick={onSchedule}
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
