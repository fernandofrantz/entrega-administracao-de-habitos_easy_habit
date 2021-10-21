import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
export const AboutComponent = () => (
  <div>
    <Link to="/login">
      <div className="Link">
        <BsArrowLeft />
      </div>
    </Link>
    <div className="text">
      <div className="pointText">
        <h1>About Easy Habit</h1>
        <br />
        <p>
          The aplication was developed for you to organize yourself, and improve
          your physical and mental health.
          <br />
          <br />
          Join a group that matches with you and your style. practice your
          activities and reach your goals, evolve with thousands of people all
          around the world.
        </p>
      </div>
    </div>
  </div>
);
