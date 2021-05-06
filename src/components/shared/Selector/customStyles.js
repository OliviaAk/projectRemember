export const customStyles = {
  option: (provided) => ({
    ...provided,
    borderRadius: 15,
    color: 'black',
    padding: 10,
  }),
  indicatorSeparator: (base) => ({
    ...base,
    display: 'none',
  }),
  control: (base) => ({
    ...base,
    borderColor: 'rgb(225, 225, 225)',
    '&:hover': {
      borderColor: '#f2f2f2',
    },
  }),
  placeholder: (defaultStyles) => ({
    ...defaultStyles,
    color: '#000',
  }),
};
export function customTheme(theme) {
  return {
    ...theme,
    borderRadius: 15,
    colors: {
      ...theme.colors,
      primary25: '#fff',
      primary: '#fff',
    },
  };
}
