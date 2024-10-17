import { ReactTyped } from "react-typed";
import ThreeDModel from "../components/threeDModel";

export default function Home() {
  return (
    <div className="section section-1">
      <div className="container">
        <div className="slogan">
          <ReactTyped
            strings={[
              "Eat Tasty,<br>Feel Great",
              "Eat More,<br>Spend Smart",
              "Eat Smart,<br>Spend Less",
            ]}
            backSpeed={80}
            typeSpeed={80}
            backDelay={2800}
            onComplete={() => {
              const el = document.querySelector(".typed-cursor") as HTMLElement;
              if (el) {
                setTimeout(() => {
                  el.innerHTML = ".";
                  el.classList.remove("typed-cursor--blink");
                }, 1000);
              }
            }}
          />
        </div>
        <div className="threeD-model">
          <ThreeDModel />
        </div>
      </div>
    </div>
  );
}
