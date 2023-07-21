import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import { Visualizer } from "./Visualizer";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

describe("Visualizer", () => {
  const setup = () => {
    const utils = render(
      <ThemeProvider theme={theme}>
        <Visualizer />
      </ThemeProvider>
    );
    const visualizer = screen.getByTestId("visualizer");
    const navbar = screen.getByTestId("navbar");
    const sizeOfArray = screen.getByTestId("sizeOfArray");
    const sizeOfArrayInput = screen.getByTestId("sizeOfArray");
    const speed = screen.getByTestId("speed");
    const playPauseBtn = screen.getByTestId("playPauseBtn");
    const unsortedNumbersBars = screen.getAllByTestId("unsortedNumberBar");

    return {
      visualizer,
      navbar,
      sizeOfArray,
      sizeOfArrayInput,
      speed,
      playPauseBtn,
      unsortedNumbersBars,
      ...utils,
    };
  };

  it("should render visualizer", () => {
    const { visualizer } = setup();

    expect(visualizer).toBeInTheDocument();
  });

  it("should render navbar", () => {
    const { navbar } = setup();

    expect(navbar).toBeInTheDocument();
  });

  it("should the array size initially be set to 20", () => {
    const { sizeOfArray } = setup();

    expect(sizeOfArray).toHaveValue("20");
  });

  it("should set the array size to 50", () => {
    const { sizeOfArrayInput } = setup();

    fireEvent.change(sizeOfArrayInput, { target: { value: "50" } });
    expect(sizeOfArrayInput).toHaveValue("50");
  });

  it("should not set the array size to 150", () => {
    const { sizeOfArrayInput } = setup();

    fireEvent.change(sizeOfArrayInput, { target: { value: "150" } });
    expect(sizeOfArrayInput).not.toHaveValue("150");
  });

  it("should has speed set to 1000 on init", () => {
    const { speed } = setup();

    expect(speed).toHaveValue("1000");
  });

  it("should change the speed to 2500", () => {
    const { speed } = setup();

    fireEvent.change(speed, { target: { value: "2500" } });
    expect(speed).toHaveValue("2500");
  });

  it("should not go over 3000 speed", () => {
    const { speed } = setup();

    fireEvent.change(speed, { target: { value: "3500" } });
    expect(speed).not.toHaveValue("3500");
  });

  it("should display Pause after click Play button", () => {
    const { playPauseBtn } = setup();

    fireEvent.click(playPauseBtn);
    expect(playPauseBtn).toHaveTextContent("Pause");
  });

  it("should display the appropriate background color of unsorted bar", () => {
    const { unsortedNumbersBars } = setup();

    unsortedNumbersBars.forEach((unsortedNumberBar) => {
      expect(unsortedNumberBar).toHaveStyle(
        `background-color: "${theme.colors.indexColor}"}`
      );
    });
  });

  it("should sort numbers", async () => {
    jest.useFakeTimers("legacy");
    const { playPauseBtn } = setup();

    fireEvent.click(playPauseBtn);

    await waitFor(
      () => {
        expect(playPauseBtn).toHaveTextContent("Play");
      },
      { timeout: 1000000 }
    );
    const sortedNumbersBars = screen.getAllByTestId("sortedNumberBar");
    let previousNumber = 0;

    sortedNumbersBars.forEach((sortedNumber) => {
      const number = Number(sortedNumber.getAttribute("data-number"));
      expect(number).toBeGreaterThanOrEqual(previousNumber);
      previousNumber = number;
    });
  });
});
