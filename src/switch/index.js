import "./Styles.css";
import { useTheme } from "../ThemeContext";

const Switch = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="switch-wrapper">
      <label className="switch">
        <input
          type="checkbox"
          checked={theme === "light"}
          onChange ={toggleTheme}
        />
        <span className="slider round" />
      </label>
    </div>
  );
};

export default Switch;
