import { useEffect, useState } from "react";

import { Stack } from "@mui/material";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";

import useConnectInputComponentConnector from "./use-connect-input-component-connector";
import useDebounce from "../../utils/utils";

import * as Styles from "./input-component-styles";

export default function InputComponent(props) {
  const { label, placeholder, type } = props;

  const { fetchCityAutoComplete, fetchCurrentWeather } = useConnectInputComponentConnector();

  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const debouncedSearchString = useDebounce(options, 500);
  const loading = open && options.length === 0;

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, []);

  const handleInputChange = async (event) => {
    const searchString = event.target.value;
    setTimeout(() => {
      const filteredOptions = demoOptions.filter((option) =>
        option.LocalizedName.toLowerCase().includes(searchString.toLowerCase())
      );
      setOptions(filteredOptions);
    }, 500);

    //   const searchString = event.target.value;
    //   const response = await fetchCityAutoComplete({ searchString });
    //   setOptions(response);
  };

  const handleInputSelect = (event, value) => {};

  return (
    <Styles.InputWrapper>
      <Autocomplete
        id="asynchronous-demo"
        style={{ width: 300 }}
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        onChange={handleInputSelect}
        isOptionEqualToValue={(option, value) => option.name === value.name}
        getOptionLabel={(option) => option.LocalizedName}
        options={options}
        loading={loading}
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            placeholder={placeholder}
            onChange={handleInputChange}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <Stack direction="row" spacing={2}>
                  {loading ? <CircularProgress color="inherit" size={20} /> : null}
                  {params.InputProps.endAdornment}
                </Stack>
              ),
            }}
          />
        )}
      />
    </Styles.InputWrapper>
  );
}

InputComponent.defaultProps = {
  label: "Search input",
  placeholder: "Search",
  type: "search",
};

const demoOptions = [
  {
    Version: 1,
    Key: "623",
    Type: "City",
    Rank: 20,
    LocalizedName: "Paris",
    Country: {
      ID: "FR",
      LocalizedName: "France",
    },
    AdministrativeArea: {
      ID: "75",
      LocalizedName: "Ville de Paris",
    },
  },
  {
    Version: 1,
    Key: "211288",
    Type: "City",
    Rank: 21,
    LocalizedName: "Palembang",
    Country: {
      ID: "ID",
      LocalizedName: "Indonesia",
    },
    AdministrativeArea: {
      ID: "SS",
      LocalizedName: "South Sumatra",
    },
  },
  {
    Version: 1,
    Key: "202349",
    Type: "City",
    Rank: 21,
    LocalizedName: "Patna",
    Country: {
      ID: "IN",
      LocalizedName: "India",
    },
    AdministrativeArea: {
      ID: "BR",
      LocalizedName: "Bihar",
    },
  },
  {
    Version: 1,
    Key: "58496",
    Type: "City",
    Rank: 23,
    LocalizedName: "Panzhou",
    Country: {
      ID: "CN",
      LocalizedName: "China",
    },
    AdministrativeArea: {
      ID: "GZ",
      LocalizedName: "Guizhou",
    },
  },
  {
    Version: 1,
    Key: "61035",
    Type: "City",
    Rank: 23,
    LocalizedName: "Panzhihua",
    Country: {
      ID: "CN",
      LocalizedName: "China",
    },
    AdministrativeArea: {
      ID: "SC",
      LocalizedName: "Sichuan",
    },
  },
  {
    Version: 1,
    Key: "2332592",
    Type: "City",
    Rank: 25,
    LocalizedName: "Panyu District",
    Country: {
      ID: "CN",
      LocalizedName: "China",
    },
    AdministrativeArea: {
      ID: "GD",
      LocalizedName: "Guangdong",
    },
  },
  {
    Version: 1,
    Key: "96615",
    Type: "City",
    Rank: 25,
    LocalizedName: "Panjin",
    Country: {
      ID: "CN",
      LocalizedName: "China",
    },
    AdministrativeArea: {
      ID: "LN",
      LocalizedName: "Liaoning",
    },
  },
  {
    Version: 1,
    Key: "259549",
    Type: "City",
    Rank: 30,
    LocalizedName: "Panama City",
    Country: {
      ID: "PA",
      LocalizedName: "Panama",
    },
    AdministrativeArea: {
      ID: "8",
      LocalizedName: "Panamá",
    },
  },
  {
    Version: 1,
    Key: "206120",
    Type: "City",
    Rank: 31,
    LocalizedName: "Padang",
    Country: {
      ID: "ID",
      LocalizedName: "Indonesia",
    },
    AdministrativeArea: {
      ID: "SB",
      LocalizedName: "West Sumatra",
    },
  },
  {
    Version: 1,
    Key: "233138",
    Type: "City",
    Rank: 31,
    LocalizedName: "Pachuca de Soto",
    Country: {
      ID: "MX",
      LocalizedName: "Mexico",
    },
    AdministrativeArea: {
      ID: "HID",
      LocalizedName: "Hidalgo",
    },
  },
];
