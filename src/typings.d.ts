type ThemeContextType = {
  toggle: () => void;
  mode: string;
};

type CategoryItemType = {
  id: number;
  title: string;
  desc: string;
  image: string;
};

type CategoryDataType = {
  applications: CategoryType[];
  illustrations: CategoryType[];
  websites: CategoryType[];
};
