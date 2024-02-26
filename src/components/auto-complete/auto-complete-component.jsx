import { useEffect, useState } from "react";

import { Stack } from "@mui/material";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";

import { setCityKey, setCityName } from "../../redux/actions/weather.action";
import useConnectAutoCompleteConnector from "./use-connect-auto-complete-connector";

import * as Styles from "./auto-complete-component-styles";

export default function AutoCompleteComponent(props) {
  const { label, placeholder } = props;

  const { fetchCityAutoComplete, fetchCurrentWeather, fetchFullWeatherForecast, currentCityKey, isMetric } =
    useConnectAutoCompleteConnector();

  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setOptions([]);
    }
  }, []);

  const handleInputChange = async (event) => {
    if (!event.target.value) {
      setOptions([]);
      return;
    }
    const searchString = event.target.value;
    const response = await fetchCityAutoComplete({ searchString });
    setOptions(response);
  };

  const handleInputSelect = async (event, value) => {
    if (!value) return;
    try {
      const cityKey = value.Key;
      setCityKey(cityKey);
      setCityName(value.LocalizedName);
      await fetchCurrentWeather({ cityKey });
      await fetchFullWeatherForecast({ cityKey, metric: isMetric });
    } catch (error) {
      console.error("Error in handleInputSelect:", error);
    }
  };

  const renderAutoComplete = () => {
    return (
      <Autocomplete
        id="asynchronous-demo"
        style={{ width: 300 }}
        open={isOpen}
        onOpen={() => {
          setIsOpen(true);
          setIsLoading(true);
        }}
        onClose={() => {
          setIsOpen(false);
          setIsLoading(false);
          setOptions([]);
        }}
        onChange={handleInputSelect}
        isOptionEqualToValue={(option, value) => option.Key === value.Key}
        getOptionLabel={(option) => option.LocalizedName}
        options={options}
        loading={isLoading}
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
                  {isLoading ? <CircularProgress color="inherit" size={20} /> : null}
                  {params.InputProps.endAdornment}
                </Stack>
              ),
            }}
          />
        )}
      />
    );
  };

  return <Styles.AutoCompleteWrapper>{renderAutoComplete()}</Styles.AutoCompleteWrapper>;
}

AutoCompleteComponent.defaultProps = {
  label: "Search input",
  placeholder: "Search",
  type: "search",
};
