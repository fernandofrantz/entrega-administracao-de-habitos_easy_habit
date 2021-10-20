import { ActivityProvider } from "./Activity";
import { GoalsProvider } from "./Goals";
import { GroupsProvider } from "./Groups";
import { HabitProvider } from "./Habits";
import { UserProvider } from "./User";

export const Providers = ({ children }) => {
  return (
    <HabitProvider>
      <UserProvider>
        <GroupsProvider>
          <ActivityProvider>
            <GoalsProvider>{children}</GoalsProvider>
          </ActivityProvider>
        </GroupsProvider>
      </UserProvider>
    </HabitProvider>
  );
};
