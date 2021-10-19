import { GroupsProvider } from "./Groups";
import { HabitProvider } from "./Habits";
import { UserProvider } from "./User";

export const Providers = ({ children }) => {
  return (
    <HabitProvider>
      <UserProvider>
        <GroupsProvider>{children}</GroupsProvider>
      </UserProvider>
    </HabitProvider>
  );
};
