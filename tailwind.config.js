module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      'mainFont': ["Poppins, sans-serif"],
    },
    fontSize: {
      "2xl": [
        "24px",
        {
          letterSpacing: "-0.01em",
        },
      ],
      "3xl": [
        "32px",
        {
          letterSpacing: "-0.02em",
          lineHeight: "40px",
        },
      ],
    },
    colors: {
      primary: {
        50: " #ebe9fe",
        100: "#dedbfd",
        200: "#beb7fb",
        100: "#9c92f8",
        100: "#7b6ef6",
        100: "#5a4af4",
        100: "#483bc3",
        100: "#362c92",
        100: "#251e62",
        900: "#120f31",
      },
      gray: {
        50: "#ebeef5",
        100: "#c3c8d4",
        200: "#a8aebf",
        300: "#8e95a9",
        400: "#767e94",
        500: "#61697f",
        600: "#475069",
        700: "#323b54",
        800: "#20283e",
        900: "#121829",
      },
      white: {
        10: "#ffffff1a",
        20: "#ffffff33",
        30: "#ffffff4d",
        40: "#ffffff66",
        50: "#ffffff80",
        65: "#ffffffa6",
        75: "#ffffffbf",
        100: "#ffffff",
      },
      black: {
        10: "#0000001a",
        20: "#00000033",
        30: "#0000004d",
        40: "#00000066",
        50: "#00000080",
        65: "#000000a6",
        75: "#000000bf",
        100: " #000000",
      },
    },
    container: {
      padding: {
        DEFAULT: "0.5rem",
        sm: "1rem",
        md: "1rem",
        lg: "1rem",
        xl: "5rem",
        "2xl": "5rem",
      },
    },
    extend: {
      spacing: {
        18: "4rem",
        20: "4.5rem",
        22: "5rem",
        24: "5.5rem",
        26: "6rem",
        28: "6.5rem",
        30: "7rem",
        34: "8rem",
        100: "48.75rem",
      },
    },
  },
  plugins: [],
};
