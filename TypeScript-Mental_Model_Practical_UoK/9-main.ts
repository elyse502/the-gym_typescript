type Profile = {
  name: string;
  settings?: {
    theme: "dark" | "light";
    notifications: boolean;
  };
};

const profiles: Profile[] = [
  { name: "Bob" },
  { name: "Carla", settings: { theme: "dark", notifications: true } },
];

profiles.forEach((p) => {
  if (p.settings) {
    console.log(p.settings.theme.toUpperCase());
  } else {
    console.log(`${p.name} has no settings`);
  }

  // Alternative with optional chaining and nullish coalescing:
  /* const theme = p.settings?.theme;
  if (theme) {
    console.log(theme.toUpperCase());
  } else {
    console.log(`${p.name} has no theme settings`);
  } */
});
