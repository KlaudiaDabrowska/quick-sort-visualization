import {
  Pause,
  Play,
  Reset,
  SkipNext,
  SkipPrevious,
} from "@styled-icons/boxicons-regular";
import {
  InputWrapper,
  StyledButton,
  StyledInput,
  StyledLabel,
  ButtonWrapper,
} from "../styles/Buttons.styles";
import { Header, StyledNavbar } from "../styles/Navbar.styles";
import { Autorenew } from "@styled-icons/material";
import { INavbarProps } from "../lib/types";

export const Navbar = ({
  regenerateNumbers,
  startStopVisualization,
  resetToFirstStep,
  previousStep,
  nextStep,
  setArrayLength,
  arrayLength,
  isPlaying,
  setSpeed,
  speed,
}: INavbarProps) => {
  const breakpoint = 768;

  const isMobile = window.innerWidth < breakpoint;

  return (
    <StyledNavbar data-testid="navbar">
      <Header>Quick Sort Visualizer</Header>
      <ButtonWrapper>
        <StyledButton onClick={previousStep} disabled={isPlaying}>
          {isMobile ? <SkipPrevious size={24} /> : "Prev"}
        </StyledButton>
        <StyledButton
          onClick={startStopVisualization}
          data-testid="playPauseBtn"
        >
          {isMobile && (isPlaying ? <Pause size={24} /> : <Play size={24} />)}
          {!isMobile && (isPlaying ? "Pause" : "Play")}
        </StyledButton>
        <StyledButton onClick={nextStep} disabled={isPlaying}>
          {isMobile ? <SkipNext size={24} /> : "Next"}
        </StyledButton>
        <StyledButton onClick={resetToFirstStep}>
          {isMobile ? <Reset size={24} /> : "Reset"}
        </StyledButton>
        <StyledButton
          onClick={() => {
            regenerateNumbers();
          }}
        >
          {isMobile ? <Autorenew size={24} /> : "New array"}
        </StyledButton>
      </ButtonWrapper>
      <InputWrapper>
        <StyledLabel>
          Size:
          <StyledInput
            name="amountOfNumbers"
            type="range"
            min={2}
            max={100}
            value={arrayLength}
            data-testid="sizeOfArray"
            onChange={(e) => setArrayLength(+e.target.value)}
          />
          {arrayLength}
        </StyledLabel>
        <StyledLabel>
          Speed:
          <StyledInput
            name="speed"
            type="range"
            min={10}
            max={3000}
            value={speed}
            data-testid="speed"
            onChange={(e) => setSpeed(+e.target.value)}
          />
          {speed}
        </StyledLabel>
      </InputWrapper>
    </StyledNavbar>
  );
};
