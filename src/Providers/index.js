import { ActivityProvider } from "./Activity";
import { GroupsProvider } from "./Groups";
import { HabitProvider } from "./Habits";
import { UserProvider } from "./User";

export const Providers = ({ children }) => {
  return (
    <HabitProvider>
      <UserProvider>
        <GroupsProvider>
          <ActivityProvider>{children}</ActivityProvider>
        </GroupsProvider>
      </UserProvider>
    </HabitProvider>
  );
};
